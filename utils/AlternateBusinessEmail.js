const { Op } = require('sequelize');
const { doctor_profile, doctor_alternate_contact } = require('../models')

async function add_alternate_business_email(template_name, data) {
    try {
        if (!template_name || !data?.to_email) {
            console.error("parameter not good from add_alternate_business_email function", arguments);
            throw new Error("parameter not good from add_alternate_business_email");
        }

        if (typeof data.to_email != "string") {
            console.error("error to_email is not string", data);
            throw new Error("to_email is not string");
        }

        let new_to_email = "";

        let templates_to_exclude = ['SEND_PAYOUT_INFORMATION_INSTANT', 'SEND_PAYOUT_INFORMATION', 'ADMIN_FETCH_DOCTOR_PAYOUT_REPORT'];
        if (templates_to_exclude.includes(template_name)) {
            return new_to_email;
        }

        let emailArray = data.to_email.split(',');
        emailArray = emailArray.map(item => item.trim()).filter(i => i);
        emailArray = [...new Set(emailArray)];

        if (!emailArray.length) {
            console.error("emailArray empty", emailArray, data);
            throw new Error("emailArray empty");
        }

        let doctor_detail = await doctor_profile.findAll({
            where: {
                doctor_email: {
                    [Op.in]: emailArray
                }
            },
            attributes: ['doctor_id']
        });

        if (!doctor_detail.length) {//case to_email is not of any business
            return "";
        }

        if (doctor_detail.length > 1) {
            console.log("error debug case more then 1 matching business found for", emailArray);
        }
        doctor_detail = doctor_detail[0];

        let alternate_info = await doctor_alternate_contact.findAll({
            where: {
                [Op.and]: {
                    doctor_id: doctor_detail.doctor_id,
                    is_deleted: 0,
                    is_email_verified: 1
                }
            },
            attributes: ["doctor_id", "alternate_email"]
        });

        if (!alternate_info.length) {//case alternate email not setup for business
            return "";
        }

        let cc_alternate_email = alternate_info.map(i => i.alternate_email).filter(f => f);
        cc_alternate_email = [...new Set(cc_alternate_email)];

        new_to_email = [...emailArray, ...cc_alternate_email];

        new_to_email = new_to_email.join(',');

        console.log("debugging log adding add_alternate_business_email", new_to_email);

        return new_to_email;

    } catch (error) {
        console.error("error exception from add_alternate_business_email", error);
        return "";
    }

}

module.exports = { add_alternate_business_email }