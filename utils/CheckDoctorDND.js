const { Op } = require('sequelize');
let { email_templates, doctor_profile, doctor_alternate_emails } = require('../models')

async function CheckDoctorDND(template_name, emailData) {
    try {
        let arrayToExclude = [];

        let returnObj = {
            new_to_email: null,
        }

        let template_type = 0;

        let templates = await email_templates.findAll({
            where: {
                [Op.and]:{
                template_name: template_name,
                dnd_doctor_stop: 1,
                lang: emailData.lang || 'en'
            }},
            attributes:['template_name']
        });

        if (templates.length > 0) {
            template_type = 1;
        } else {
            return returnObj;
        }

        if (typeof emailData.to_email != 'string') {
            return returnObj;
        }

        let emailArray = emailData.to_email.split(',');
        console.log(emailArray)
        if (emailArray && emailArray.length) {
            emailArray.forEach((email) => email.trim());

            emailArray = emailArray.filter((email) => email ? true : false)

            if (!(emailArray && emailArray.length)) {
                return returnObj;
            }

            console.log(emailArray, "Before");

            emailArray = emailArray.reduce((acc, curr) => {
                console.log({ curr, acc });
                if (!acc.includes(curr)) acc.push(curr); // ✅ Fix: Push `curr` instead of `acc`
                return acc;
            }, []);

        } else {
            return returnObj;
        }

        if (template_type == 1) {
            let doctorArray = await doctor_profile.findAll({
                where: {
                    doctor_email: {
                        [Op.in]: emailArray
                    }
                },
                attributes: ['doctor_email', 'dnd']
            })

            JSON.parse(JSON.stringify(doctorArray)).forEach((email) => {
                arrayToExclude.push(email)
            })
            console.log(arrayToExclude, "arrayToExclude")

            let doctorAlternateArray = await doctor_alternate_emails.findAll({
                attributes: ["doctor_id", "alternate_email"],
                include: [
                    {
                        model: doctor_profile,
                        as: 'doctorProfile',
                        attributes: ["dnd"],
                        where: { dnd: 1 }
                    }
                ],
                where: {
                    alternate_email: {
                        [Op.in]: emailArray
                    }
                }
            });

            if(JSON.parse(JSON.stringify(doctorAlternateArray)).length > 0) {
                doctorAlternateArray.forEach((alter)=>{
                    arrayToExclude.push(alter.email)
                })
            }

        }

        arrayToExclude = arrayToExclude.reduce((acc,curr)=>{
            !acc.includes(curr) && acc.push(curr);
            return acc;
        },[]);

        emailArray = emailArray.filter(function (element) {
            if (arrayToExclude.indexOf(element) == -1) {
                return true;
            }
            return false;
        });
        
        if (emailArray && emailArray.length) {
            returnObj.new_to_email = emailArray.join();
        } else {
            returnObj.new_to_email = "";
        }

        return returnObj;

    } catch (error) {
        console.log(error)
    }
}

module.exports = CheckDoctorDND;
