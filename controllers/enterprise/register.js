const { CheckDoctorMobile, CheckDoctorEmail, chekcDoctorEmailExists, chekcAgentEmailExists } = require("../../commonFunctions/doctor");
const { generateRandomNumber, VerifyUserOTP, referredByPartner } = require("../../utils/common_all");
const { templateEmailer } = require("../../utils/mailer");
const { doctor_register_otp, doctor_speciality, industries, system_settings } = require('../../models');
const { sendSMS } = require("../../utils/RingCenteral");
const logger = require("../../utils/ErrorLoggers");
const { Op, fn } = require("sequelize");
const { isLeadExist } = require("../../utils/common_leads");
const getUinqueReferralCode = require("../../utils/ReferralGenerator");

async function DoctorRegisterController(req, res) {

    let { doctor_email, doctor_id } = req.query;

    let DoctorProfile = await CheckDoctorEmail(doctor_email || '', doctor_id || '');

    if (DoctorProfile && DoctorProfile.length > 0) {
        res.status(400).json({
            err: "Email already in use.",
            flag: 6,
            tracking: "Error check DoctorProfile"
        })
    } else {
        res.status(200).json({
            err: 0,
            flag: 171
        })
    }
    // res.status(200).json(menus);

}

async function CheckDoctorMobileController(req, res) {

    let { doctor_mobile, doctor_id } = req.query;

    let DoctorProfile = await CheckDoctorMobile(doctor_mobile || '', doctor_id || '');

    if (DoctorProfile && DoctorProfile.length > 0) {
        res.status(400).json({
            err: "Mobile already in use.",
            flag: 6,
            tracking: "Mobile Error check DoctorProfile"
        })
    } else {
        res.status(200).json({
            err: 0,
            flag: 171
        })
    }
    // res.status(200).json(menus);

}

async function sendRegistrationOTP(req, res) {
    try {
        let { email, mobile, doctor_first_name, doctor_last_name } = req.query;

        const otp = generateRandomNumber(6)
        let doctor_name = doctor_first_name + " " + doctor_last_name;

        if (email) {
            const currentDate = new Date();
            const mailData = {
                to_email: email,
                doctor_name,
                login_otp: otp,
                set_year: currentDate.getFullYear(),
                lang: req.headers['x-lan-code'] || 'en'
            };

            await templateEmailer(1, "enterprise_register_otp", mailData);
            await doctor_register_otp.create({
                email,
                otp,
                otp_type: 5
            })

            res.status(200).json({
                message: 'otp sent successfully',
                flag: 213
            })
        }

        if (mobile) {
            let phone = `+1-${mobile}`;
            let messageData = {
                to: phone,
                name: doctor_name,
                content: `"Hi {{doctor_name}}, your Denefits verification code is {{otp}}. Please do not share this OTP with anyone. It will expire in 10 minutes."`
            };

            await sendSMS(messageData);
            await doctor_register_otp.create({
                email,
                otp,
                otp_type: 5
            })

            res.status(200).json({
                message: 'otp sent successfully',
                flag: 213
            })

        }

    } catch (error) {
        logger.error(error.message, { stack: error.stack, tracking: "sendRegistrationOTP" });
        console.error(`[ERROR] sendRegistrationOTP: ${error.message}`, error); // Logs full error details

        res.status(500).json({ message: "OTP not sent", flag: 594, tracking: "sendRegistrationOTP" })
    }
}

async function VerifyRegisterOtp(req, res) {
    let { otp, doctor_email, mobile } = { doctor_email: 'lalit.kumar@bridgingtech.com', mobile: '1234567890' };

    let checkOTP = await doctor_register_otp.findAll({
        where: {
            [Op.or]: {
                email: `${doctor_email}`,
                mobile: {
                    [Op.like]: `%${mobile}%`
                }
            }
        },
        order: [['id', 'DESC']]
    });

    if (checkOTP && checkOTP.length > 0) {
        req.body.id = checkOTP[0].id;
        let otpRecord = await VerifyUserOTP(req.body, res, 'verifyRegisterOTP');

        if (otpRecord && otpRecord.length) {
            if (otpRecord[0].expiry_time_in_sec < otpRecord[0].seconds_since_sent) {
                sendResponse.sendErrorFlagResponseWithData(505, tracking_number, "Your verification code has been expired.", {
                    override_text: 'Your verification code has been expired.'
                }, res);
            } else if (otpRecord[0].otp != `${req.body.otp}`) {
                sendResponse.sendErrorFlagResponseWithData(506, tracking_number, "Please enter valid verification code.", {
                    override_text: 'Please enter valid verification code.'
                }, res);
            } else {
                await doctor_register_otp.update(
                    {
                        verified_date: fn('NOW'),
                    },
                    {
                        where: {
                            id: req.body.id
                        }
                    })
                return 1;
            }
        } else {
            sendResponse.sendErrorFlagResponseWithData(505, tracking_number, "Your verification code has been expired.", {
                override_text: 'Your verification code has been expired.'
            }, res);
        }

    }

}


async function RegisterBusinessV2(req, res) {
    try {
        let { doctor_email, doctor_mobile, doctor_first_name, doctor_last_name } = req.body;

        let userSpeciality = req.body.doctor_speciality;

        // {
        //     "device_token": "Website",
        //     "device_type": 0,
        //     "app_type": 2,
        //     "app_version": 130,
        //     "device_id": "25010064645373613300053736510801920241741511839723",
        //     "doctor_first_name": "test",
        //     "doctor_last_name": "test",
        //     "doctor_email": "kk13hai@gmail.com",
        //     "doctor_mobile": "+1-0000000125",
        //     "doctor_password": "sookie",
        //     "otp": "543641",
        //     "practice_name": "test",
        //     "ind_id": "10186",
        //     "sub_ind_id": "1188",
        //     "sub_ind_name": "",
        //     "ind_name": null,
        //     "TnC": true,
        //     "referral_code": 0,
        //     "captcha": "11982",
        //     "language_preferred": "",
        //     "signup_type": "customer"
        // }

        let checkDoctor = await chekcDoctorEmailExists(doctor_email);
        let checkAgent = await chekcAgentEmailExists(doctor_email);

        if (checkDoctor.length || checkAgent.length) throw new Error("Email/Phone already registered")

        let referral_code = await getUinqueReferralCode((doctor_first_name + " " + doctor_last_name), 'doctor');

        let doctorLeads = await isLeadExist({
            doctor_email, doctor_mobile
        })

        if (doctorLeads.length) {
            req.body.lead_id = doctorLeads[0].lead_id;
        }

        if (referral_code) {
            let personReferred = await referredByPartner(referral_code, 0);
            if (personReferred.length) {
                req.body.referred_partner_id = personReferred[0].partner_id;
            }
        }

        let doctorSpeciality;
        if (userSpeciality) {
            doctorSpeciality = await processDoctorSpeciality(req)
        }

        let systemSettings = await system_settings.findOne({
            where: {
                type: 1
            },
            raw: true
        })

    } catch (error) {
        console.log(error);
    }
}

referredByPartner('TEKS723', 0).then((data) => {
    console.log(JSON.parse(data))
})

RegisterBusinessV2({
    body: {
        doctor_email: 'lalit.kumar+3jan@bridgingtech.com',
        doctor_speciality: 1,
        ind_id: 1,
        sub_ind_id: 1
    }
})


async function getIndustryById(ind_id) {
    return await industries.findOne({ where: { ind_id }, raw: true });
}

async function getDoctorSpecialityById(speciality_id) {
    return await doctor_speciality.findOne({ where: { doctor_speciality: speciality_id } });
}

async function createIndustry(ind_name) {
    return await industries.create({ ind_name, added_by: 2 });
}

async function createDoctorSpeciality(speciality_name, ind_id) {
    return await doctor_speciality.create({ speciality_name, ind_id, added_by: 2 });
}

async function processDoctorSpeciality(req) {
    try {
        let doctorIndustry = null;

        if (req.body.doctor_speciality > 0) {
            doctorIndustry = null;
        }

        if (req.body.ind_id > 0 && req.body.ind_id !== 9999) {
            const industry = await getIndustryById(req.body.ind_id);
            if (!industry) throw new Error("Please enter valid Industry");

            if (req.body.sub_ind_id > 0 && req.body.sub_ind_id !== 9999) {
                const subIndustry = await getDoctorSpecialityById(req.body.sub_ind_id);
                if (!subIndustry) throw new Error("Please enter valid Sub Industry");

                req.body.doctor_speciality = subIndustry.doctor_speciality;
                req.body.sub_ind_id = subIndustry.doctor_speciality;
                doctorIndustry = { ind: industry, sub_ind: subIndustry };
            }

            if (req.body.sub_ind_id === 9999 && req.body.sub_ind_name) {
                const newSubIndustry = await createDoctorSpeciality(req.body.sub_ind_name, req.body.ind_id);
                req.body.sub_ind_id = newSubIndustry.doctor_speciality;
                req.body.doctor_speciality = newSubIndustry.doctor_speciality;
                doctorIndustry = { ind: industry, sub_ind: newSubIndustry };
            }

        }

        if (req.body.ind_id === 9999 && req.body.ind_name) {
            const newIndustry = await createIndustry(req.body.ind_name);
            req.body.ind_id = newindustries.ind_id;

            if (req.body.sub_ind_id === 9999 && req.body.sub_ind_name) {
                const newSubIndustry = await createDoctorSpeciality(req.body.sub_ind_name, newindustries.ind_id);
                req.body.sub_ind_id = newSubIndustry.doctor_speciality;
                req.body.doctor_speciality = newSubIndustry.doctor_speciality;
                doctorIndustry = { ind: newIndustry, sub_ind: newSubIndustry };
            }
        }

        if (doctorIndustry) {
            return doctorIndustry;
        } else {
            throw new Error("Please enter valid Industry");
        }
    } catch (error) {
        console.log(error)
    }
}

const common_doctor = require('common_doctor');
const mailer = require('mailer');
const doctor_login_function = require('doctor_login_function');

async function handleError(error, tracking_number, res) {
    const errorCodeMap = {
        "Please enter valid Industry": 560,
        "Please enter valid Sub Industry": 561
    };
    if (errorCodeMap[error]) {
        return sendResponse.sendErrorFlagResponseWithData(
            errorCodeMap[error], tracking_number[5] + "U", error, { override_text: error }, res
        );
    }
    return sendResponse.sendErrorFlagResponse(3, tracking_number[5] + "V", error, res);
}

async function createDoctorProfile(body, results, tracking_number) {
    return await doctor_profile.create({
        practice_address: req.body.practice_address,
        city_id: req.body.city_id,
        lead_id: req.body.lead_id,
        title: req.body.title,
        doctor_email: req.body.doctor_email,
        admin_id: genVarSettings.main_admin,
        doctor_mobile: req.body.doctor_mobile,
        doctor_first_name: req.body.doctor_first_name,
        doctor_last_name: req.body.doctor_last_name,
        doctor_password: common_doctor.md5Function(req.body.doctor_password),
        doctor_image: results[0],
        referral_code: results[2],
        doctor_speciality: req.body.doctor_speciality,
        message_id: parseInt(req.body.message_id),
        reason: req.body.reason,
        app_used: parseInt(req.body.device_type),
        is_guaranteed: 1,
        can_finance: 1,
        date_registered: new Date(),
        panel: (req && req.module_name === 'doctor' && req.body.device_type != 3) ? 1 : (req && req.module_name === 'enterprise' ? 1 : 0),
    });
}

async function updateLeadDoctorId(lead_id, doctor_id) {
    if (lead_id > 0) {
        await leads.update({ doctor_id }, { where: { lead_id } });
    }
}

async function sendDoctorRegistrationEmail(req, results, req) {
    let doctor_data = {
        to_email: genVarSettings.doctor_password_email,
        doctor_name: `${req.body.title} ${req.body.doctor_first_name} ${req.body.doctor_last_name}`,
        doctor_email: req.body.doctor_email,
        doctor_number: req.body.doctor_mobile,
        ind_id: results?.[4]?.ind?.ind_id || 0,
        ind_name: results?.[4]?.ind?.ind_name || "",
        doctor_speciality: results?.[3]?.speciality_name || results?.[4]?.sub_ind?.speciality_name || "",
        email_subject: "Doctor Registered Successfully",
        bcc_email: genVarSettings.doctor_register_emails,
        date_registered: new Date(),
        lang: req.headers['x-lan-code'] || 'en'
    };

    if (!(req?.body?.skip_email)) {
        await mailer.templateEmailer(1, "DOCTOR_REGISTRATION", doctor_data);
    }
}

async function createDoctorReferrals(doctor_id, results, body) {
    if (results[1] != 0) {
        await DoctorReferrals.create({
            doctor_id,
            partner_id: results[1],
            referral_code: results[2],
            partner_referral_code: req.body.referral_code || null,
            referred_at: new Date()
        });
    }
}

async function processDoctorSignup(body, tracking_number, req, res) {
    try {
        const doctorProfile = await createDoctorProfile(body, results, tracking_number);
        await updateLeadDoctorId(req.body.lead_id, doctorProfile.id);
        await sendDoctorRegistrationEmail(body, doctorProfile.id, results, req);
        await createDoctorReferrals(doctorProfile.id, results, body);

        // subscription.startFreePlanSubscription({ doctor_id: doctorProfile.id });
        doctor_login_function.fetchDoctorLoginData(req, body, tracking_number[11], 101, res);

    } catch (error) {
        await handleError(error, tracking_number, res);
    }
}

module.exports = { processDoctorSignup };















module.exports = { DoctorRegisterController, CheckDoctorMobileController, sendRegistrationOTP, VerifyRegisterOtp, RegisterBusinessV2 }
