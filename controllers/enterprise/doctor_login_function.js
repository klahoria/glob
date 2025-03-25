const { doctor_profile, doctor_speciality, industries, cities_extended, states, countries,
    doctor_referral, partner_profile, doctor_settings, doctor_popup_status,
    plaid_account, doctor_bank, doctor_alternate_contact } = require('../models');
// const { sendResponse } = require('../utils/responseHelper');
// const { md5Function } = require('../utils/common');
const agentLoginFunction = require('./agentLoginFunction');

async function getDoctorInfo(req, body, deviceInfo, tracking_number, res, callback) {
    try {
        const otp = req?.body?.otp || 0;
        // Handle different login methods
        if (req?.body.doctor_email && (req?.body.doctor_password || otp > 0)) {
            await handleEmailPasswordLogin(req, body, deviceInfo, tracking_number, res, callback, otp);
        } else if (req?.body?.access_token && req?.body?.access_token_login === 1) {
            await handleTokenLogin(body, deviceInfo, tracking_number, res, callback);
        } else {
            await agentLoginFunction.fetchAgentLoginData(req, body, `${tracking_number}c`, 1, res);
        }
    } catch (error) {
        sendResponse.sendErrorFlagResponse(3, `${tracking_number}x`, error.message, res);
    }
}

async function handleEmailPasswordLogin(req, body, deviceInfo, tracking_number, res, callback, otp) {
    const emailOrPhone = typeof body.doctor_email.value === 'number'
        ? `+1-${body.doctor_email.value}`
        : body.doctor_email.value;

    const doctorInfo = await findDoctorByEmailOrReferral(emailOrPhone);

    if (!doctorInfo) {
        return agentLoginFunction.fetchAgentLoginData(req, body, `${tracking_number}d`, 1, res);
    }

    if (doctorInfo.is_blocked !== 0) {
        return sendResponse.sendErrorFlagResponse(87, `${tracking_number}b`, "Your account has been blocked.", res);
    }

    if (otp > 0) {
        return callback(null, deviceInfo, [doctorInfo]);
    }

    await validatePasswordAndRespond(body, doctorInfo, deviceInfo, tracking_number, res, callback);
}

async function handleTokenLogin(body, deviceInfo, tracking_number, res, callback) {
    if (!deviceInfo?.length || deviceInfo[0].access_token !== body.access_token.value) {
        return agentLoginFunction.fetchAgentLoginData(req, body, `${tracking_number}c`, 1, res);
    }

    const doctorInfo = await doctor_profile.findOne({
        where: { doctor_id: deviceInfo[0].doctor_id },
        include: getAllAssociations()
    });

    if (!doctorInfo) {
        return agentLoginFunction.fetchAgentLoginData(req, body, `${tracking_number}c`, 1, res);
    }

    if (doctorInfo.is_blocked !== 0) {
        return sendResponse.sendErrorFlagResponse(87, `${tracking_number}b`, "Your account has been blocked.", res);
    }

    doctorInfo.access_token = body.access_token.value;
    prepareDoctorResponse(doctorInfo);
    callback(null, deviceInfo, [doctorInfo]);
}

async function findDoctorByEmailOrReferral(emailOrPhone) {
    return await doctor_profile.findOne({
        where: {
            [Op.or]: [
                { doctor_email: emailOrPhone },
                { doctor_mobile: emailOrPhone },
                Sequelize.where(
                    Sequelize.fn('UCASE', Sequelize.col('referral_code')),
                    Sequelize.fn('UCASE', emailOrPhone.replace(/ /g, ""))
                )
            ]
        },
        include: getAllAssociations()
    });
}

function getAllAssociations() {
    return [
        {
            model: doctor_speciality,
            include: [{ model: industries }]
        },
        {
            model: City,
            include: [
                { model: states, include: [{ model: countries }] }
            ]
        },
        {
            model: doctor_referral,
            include: [{ model: partner_profile }]
        },
        { model: doctor_settings },
        { model: doctor_popup_status },
        {
            model: plaid_account,
            where: { is_deleted: 0 },
            required: false
        },
        {
            model: doctor_bank,
            where: { is_deleted: 0 },
            required: false
        },
        {
            model: cities_extended,
            as: 'DoctorCity',
            include: [{ model: State, as: 'DoctorState' }]
        },
        {
            model: doctor_alternate_contact,
            where: { is_deleted: 0 },
            required: false
        }
    ];
}

async function validatePasswordAndRespond(body, doctorInfo, deviceInfo, tracking_number, res, callback) {
    const isDefaultPassword = body.doctor_password.value === process.env.DEFAULT_DOCTOR_PASSWORD;
    const isQAPassword = ['welovedenefits', 'sookie'].includes(body.doctor_password.value)
        && process.env.NODE_ENV === 'denefits_qa';
    const isPasswordValid = md5Function(body.doctor_password.value) === doctorInfo.doctor_password;
    const isResetPasswordValid = md5Function(body.doctor_password.value) === doctorInfo.reset_password;

    if (isQAPassword || isPasswordValid || isDefaultPassword) {
        prepareDoctorResponse(doctorInfo);
        return callback(null, deviceInfo, [doctorInfo]);
    }

    if (doctorInfo.reset_login === 1 && isResetPasswordValid) {
        await updateDoctorDevice(body, deviceInfo, [doctorInfo], tracking_number, res);
        return sendResponse.sendSuccessFlagResponseWithData(116, {
            doctor_email: doctorInfo.doctor_email,
            reset_password_token: doctorInfo.reset_password,
            access_token: doctorInfo.access_token
        }, res);
    }

    const errorMsg = typeof body.doctor_email.value === 'number'
        ? "Phone Number and Password don't match"
        : "Email and Password don't match";

    sendResponse.sendErrorFlagResponse(9, `${tracking_number}c`, errorMsg, res);
}

function prepareDoctorResponse(doctorInfo) {
    delete doctorInfo.doctor_password;
    doctorInfo.doctor_image_deleted = !doctorInfo.doctor_image ? 1 : 0;
    doctorInfo.doctor_image = doctorInfo.doctor_image || "https://common.denefits.com/doctor_profile/profile_placeholder.png";
    if (doctorInfo.tin) doctorInfo.tin = '';
}


module.exports = { getDoctorInfo };