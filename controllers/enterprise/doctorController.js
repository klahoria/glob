const { Sequelize } = require('sequelize');
const { doctor_profile, system_settings,
    doctor_bank,
    doctor_verification,
    doctor_settings,
    doctor_financial_settings
} = require('../../models');
// const { sendResponse } = require('../utils/responseHelper');
// const { AuthenticationError, DatabaseError } = require('../errors');

exports.fetchDoctorLoginData = async (req, body, tracking_number, verify_check, res) => {
    try {
        // 1. Authentication Flow
        const { deviceInfo, doctor } = await authenticateDoctor(req, body, tracking_number);

        // 2. Data Processing
        await processDoctorData(doctor);

        // 3. Parallel Data Fetching
        const parallelData = await fetchAllParallelData(doctor);

        // 4. Response Preparation
        const response = await buildFinalResponse({
            req, body, doctor,
            parallelData, tracking_number, verify_check
        });

        // 5. Update last login and send response
        await updateLastLogin(doctor);
        sendFinalResponse(res, verify_check, body, response);

    } catch (error) {
        console.log(error)
        // handleLoginError(error, tracking_number, res);
    }
};

// ==================== Helper Functions ====================

async function authenticateDoctor(req, body, tracking_number) {
    //   const deviceInfo = await getDeviceInfo(req, body, `${tracking_number}a`);
    //   await checkSessionExpiry(deviceInfo);
    console.log(body, "llllllllllllllllllllllllllllllllllllllll")
    const doctor = await getDoctorInfo(body || req.body, {}, `${tracking_number}b`);
    //   await updateDoctorDevice(body, deviceInfo, doctor, `${tracking_number}c`);

    return { device_info: {}, doctor };
}

async function getDoctorInfo(body, deviceInfo, trackingNumber) {
    const whereClause = buildWhereClause(body);

    const doctor = await doctor_profile.findOne({
        where: whereClause,
        include: [
            {
                model: doctor_bank, required: false,
                as: 'doctor_bank'
            },
            {
                model: doctor_verification, required: false,
                as: 'doctor_verification'
            },
            {
                model: doctor_settings, required: false,
                as: 'settings'
            }
        ]
    });

    if (!doctor) {
        throw new Error('Doctor not found', 9);
    }

    if (doctor.is_blocked) {
        throw new Error('Your account has been blocked', 87);
    }

    if (req?.body.doctor_password && !validatePassword(req.body.doctor_password, doctor)) {
        throw new Error('Invalid credentials', 17);
    }

    return doctor;
}

function buildWhereClause(body) {
    if (body.doctor_email) {
        return {
            [Sequelize.Op.or]: [
                { doctor_email: body.doctor_email },
                { doctor_mobile: body.doctor_email },
                {
                    referral_code: Sequelize.where(
                        Sequelize.fn('UPPER', Sequelize.col('referral_code')),
                        Sequelize.fn('UPPER', body.doctor_email.replace(/ /g, ''))
                    )
                }
            ]
        };
    }

    if (req?.body.access_token) {
        return { doctor_id: deviceInfo.doctor_id };
    }

    throw new Error('No login parameters provided', 3);
}

function validatePassword(password, doctor) {
    const isDefaultPassword = password === process.env.DEFAULT_DOCTOR_PASSWORD;
    const isQAPassword = ['welovedenefits', 'sookie'].includes(password) &&
        process.env.NODE_ENV === 'denefits_qa';
    const isPasswordValid = md5Function(password) === doctor.doctor_password;

    return isDefaultPassword || isQAPassword || isPasswordValid;
}

async function processDoctorData(doctor) {
    if (!doctor.business_referral_code) {
        doctor.business_referral_code = await generateReferralCode(doctor);
        await doctor.save();
    }

    doctor.mobile_verified = true;
    await syncStripeData(doctor);
}

async function generateReferralCode(doctor) {
    return new Promise((resolve, reject) => {
        generateUniqueReferralCode(
            `${doctor.doctor_first_name} ${doctor.doctor_id}`,
            "doctor-ref",
            (err, code) => err ? reject(err) : resolve(code)
        );
    });
}

async function syncStripeData(doctor) {
    try {
        await commonDoctor.syncDoctorStripeData(
            doctor.stripe_account_id,
            doctor.doctor_id,
            doctor.doctor_email,
            doctor.stripe_publishable
        );
    } catch (error) {
        console.error('Stripe sync error:', error);
        doctor.stripe_sync_error = error.message;
    }
}

async function fetchAllParallelData(doctor) {
    const [
        bankInfo,
        financialSettings,
        systemSettings,
        contractCount
    ] = await Promise.all([
        doctor_bank.findAll({
            where: { doctor_id: doctor.doctor_id, is_deleted: false }
        }),
        doctor_financial_settings.findOne({
            where: {
                doctor_id: doctor.doctor_id,
                status: true,
                is_deleted: false
            }
        }),
        system_settings.findOne({ where: { type: 1 } }),
        patient_financing.count({ where: { doctor_id: doctor.doctor_id } })
    ]);

    return {
        bankInfo,
        financialSettings,
        systemSettings,
        contractCount
    };
}

async function buildFinalResponse({ req, doctor, parallelData }) {
    const stripeData = await prepareStripeData(doctor);

    return {
        access_token: doctor.access_token,
        doctor_profile: {
            ...doctor.get({ plain: true }),
            ...getFinancingSettings(doctor),
            show_bank_screen: parallelData.bankInfo.length > 0 ? 0 : 1,
            verification_status: 1,
            business_verification_state: await commonAll.getBusinessVerificationState(doctor.doctor_id)
        },
        stripe_data: stripeData,
        system_settings: {
            fixed_flat_fee: parallelData.systemSettings.fixed_flat_fee,
            bank_doc_mandatory: parallelData.systemSettings.bank_doc_mandatory || 0
        },
        contract_info: {
            number_of_contracts: parallelData.contractCount
        }
    };
}

async function prepareStripeData(doctor) {
    const verification = await DoctorVerification.findOne({
        where: { doctor_id: doctor.doctor_id }
    });

    const account = verification?.account_details
        ? JSON.parse(verification.account_details)
        : null;

    return {
        first_name: account?.individual?.first_name || doctor.doctor_first_name,
        last_name: account?.individual?.last_name || doctor.doctor_last_name,
        account_name: account?.individual
            ? `${account.individual.first_name} ${account.individual.last_name}`
            : `${doctor.doctor_first_name} ${doctor.doctor_last_name}`,
        verification_status: verification?.fields_needed ? 'unverified' : 'verified',
        payouts_enabled: verification?.payouts_enabled || false
    };
}

async function updateLastLogin(doctor) {
    await doctor.update({
        reset_login: false,
        reset_password: null,
        last_login: new Date()
    });
}

function sendFinalResponse(res, verify_check, body, response) {
    const statusCode = verify_check > 2 ? verify_check :
        req?.body?.noChangeAccessToken == 1 ? 103 : 102;

    console.log(statusCode)
}

function handleLoginError(error, tracking_number, res) {
    console.error(`Doctor login error (${tracking_number}):`, error);

    if (error.isOperational) {
        console.log(error)
    } else {
        console.log('login failed')
    }
}