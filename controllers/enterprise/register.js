const { CheckDoctorMobile, CheckDoctorEmail, chekcDoctorEmailExists, chekcAgentEmailExists } = require("../../commonFunctions/doctor");
const { generateRandomNumber, VerifyUserOTP } = require("../../utils/common_all");
const { templateEmailer } = require("../../utils/mailer");
const { doctor_register_otp } = require('../../models');
const { sendSMS } = require("../../utils/RingCenteral");
const logger = require("../../utils/ErrorLoggers");
const { Op, fn } = require("sequelize");
const { isLeadExist } = require("../../utils/common_leads");

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
            console.log(otp, 'email');
            const currentDate = new Date();
            const mailData = {
                to_email: email,
                doctor_name,
                login_otp: otp,
                set_year: currentDate.getFullYear(),
                lang: req.headers['x-lan-code'] || 'en'
            };

            console.log(mailData)

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
            } else if (otpRecord[0].otp != `${body.otp.value}`) {
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
        let { doctor_email, doctor_mobile } = req.body;
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

        if (checkDoctor || checkAgent) throw new Error("Email/Phone already registered")

        let doctorLeads = await isLeadExist({
            doctor_email, doctor_mobile
        })

        if (doctorLeads.length) {
            req.body.lead_id = doctorLeads[0].lead_id;
        }

        if(referral_code) {
           let personReferred = await GetPersonReferredBy(referral_code, 0);
        }


    } catch (error) {
        console.log(error);
    }
}


// RegisterBusinessV2({
//     body: {
//         doctor_email: 'lalit.kumar+1jan@bridgingtech.com'
//     }
// })

module.exports = { DoctorRegisterController, CheckDoctorMobileController, sendRegistrationOTP, VerifyRegisterOtp, RegisterBusinessV2 }
