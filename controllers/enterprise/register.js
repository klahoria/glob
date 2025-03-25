const { CheckDoctorMobile, CheckDoctorEmail, chekcDoctorEmailExists, chekcAgentEmailExists } = require("../../commonFunctions/doctor");
const { generateRandomNumber, VerifyUserOTP, referredByPartner } = require("../../utils/common_all");
const { templateEmailer } = require("../../utils/mailer");
const { doctor_register_otp, doctor_speciality, industries, system_settings, doctor_profile, doctor_referrals } = require('../../models');
const { sendSMS } = require("../../utils/RingCenteral");
const logger = require("../../utils/ErrorLoggers");
const { Op, fn } = require("sequelize");
const { isLeadExist } = require("../../utils/common_leads");
const crypto = require('crypto');

const getUinqueReferralCode = require("../../utils/ReferralGenerator");
const { fetchDoctorLoginData } = require("./doctorController");

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

        req.body.referral_code = referral_code;

        if (referral_code) {
            let personReferred = await referredByPartner(referral_code, 0);
            if (personReferred.length) {
                req.body.referred_partner_id = personReferred[0].partner_id;
            } else {
                req.body.referred_partner_id = null;
            }
        }

        let doctorSpeciality;
        if (userSpeciality) {
            doctorSpeciality = await processDoctorSpeciality(req);
            if (doctorSpeciality) {
                req.body.doctorSpeciality = doctorSpeciality;
            }
        }

        req.systemSettings = await system_settings.findOne({
            where: {
                type: 1
            },
            raw: true
        })

        processDoctorSignup(req.body, "processDoctorSignup", req, res)

    } catch (error) {
        console.log(error);
    }
}

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

async function createDoctorProfile(req, tracking_number) {
    return new Promise((resolve) => {
        const salt = crypto.randomBytes(16).toString('hex');
        let password = "sadfafsfjkadsfnskj34985839573u49843jtiuref";
        let doctorData;
        crypto.pbkdf2(password, salt, 10, 10, 'sha256', async (err, hashedPassword) => {
            if (err) return console.log(err);
            console.log(req.body.device_type,salt.toString('hex'),';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')
            doctorData = await doctor_profile.create({
                practice_address: req.body.practice_address,
                city_id: req.body.city_id,
                lead_id: req.body.lead_id,
                title: req.body.title,
                doctor_email: req.body.doctor_email,
                admin_id: process.env.main_admin,
                doctor_mobile: req.body.doctor_mobile,
                manager_title: '',
                doctor_first_name: req.body.doctor_first_name,
                doctor_last_name: req.body.doctor_last_name,
                doctor_password: hashedPassword.toString('hex'),
                password_salt: salt,
                doctor_image: req.doctor_image,
                referral_code: req.referral_code,
                doctor_speciality: req.body.doctor_speciality,
                message_id: parseInt(req.body.message_id),
                reason: req.body.reason,
                app_used: ('test' || req.body.device_type),
                is_guaranteed: 1,
                can_finance: 1,
                date_registered: new Date(),
                panel: (req && req.module_name === 'doctor' && req.body.device_type != 3) ? 1 : (req && req.module_name === 'enterprise' ? 1 : 0),
            });
            resolve(doctorData);
        });

    })
}

async function updateLeadDoctorId(lead_id, doctor_id) {
    if (lead_id > 0) {
        await leads.update({ doctor_id }, { where: { lead_id } });
    }
}

async function sendDoctorRegistrationEmail(req, results, req) {
    let doctor_data = {
        to_email: req.body.doctor_email,
        doctor_name: `${req.body.title} ${req.body.doctor_first_name} ${req.body.doctor_last_name}`,
        doctor_email: req.body.doctor_email,
        doctor_number: req.body.doctor_mobile,
        ind_id: req?.ind?.ind_id || 0,
        ind_name: req?.ind?.ind_name || "",
        doctor_speciality: req?.speciality_name || req?.sub_ind?.speciality_name || "",
        email_subject: "Doctor Registered Successfully",
        bcc_email: process.env.doctor_register_emails,
        date_registered: new Date(),
        lang: (req.hraders ? req.hraders['x-lan-code'] : '') || 'en'
    };

    if (!(req?.body?.skip_email)) {
        await templateEmailer(1, "DOCTOR_REGISTRATION", doctor_data);
    }
}

async function createDoctorReferrals(doctor_id, req, body) {
    console.log(req.body)
    if (req.referred_partner_id != 0) {
        await doctor_referrals.create({
            doctor_id,
            partner_id: req.body.referred_partner_id,
            referral_code: req.body.referral_code,
            partner_referral_code: req.body.referred_partner_id || null,
            referred_at: new Date()
        });
    }
}

async function processDoctorSignup(body, tracking_number, req, res) {
    try {
        const doctorProfile = await createDoctorProfile(req, tracking_number);
        console.log(doctorProfile.id, doctorProfile.doctor_id, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
        await updateLeadDoctorId(req.body.lead_id, doctorProfile.doctor_id);
        await sendDoctorRegistrationEmail(req, doctorProfile.doctor_id, req);
        await createDoctorReferrals(doctorProfile.doctor_id, req, body);

        // subscription.startFreePlanSubscription({ doctor_id: doctorProfile.id });
        fetchDoctorLoginData(req, body, tracking_number[11], 101, res);

    } catch (error) {
        // await handleError(error, tracking_number, res);
        console.log(error)
    }
}


module.exports = { DoctorRegisterController, CheckDoctorMobileController, sendRegistrationOTP, VerifyRegisterOtp, RegisterBusinessV2, processDoctorSignup }

async function verifyDoctorPassword(email, inputPassword) {
    try {
        // Fetch the doctor's record from the database
        const doctor = await doctor_profile.findOne({ where: { doctor_email: email } });

        // Check if doctor exists
        if (!doctor) {
            console.log("Doctor not found!");
            return false;
        }

        // Ensure salt is available
        if (!doctor.password_salt) {
            console.log("Salt is missing. Cannot verify password.");
            return false;
        } 

        console.log(doctor.password_salt)

        // Hash the input password using the stored salt
        const hashedInputPassword = crypto.pbkdf2Sync(inputPassword, doctor.password_salt, 10, 10, 'sha256').toString('hex');

        // Compare the hashed input password with the stored hashed password
        return doctor.doctor_password === hashedInputPassword;
    } catch (error) {
        console.error("Error verifying password:", error);
        return false;
    }
}
