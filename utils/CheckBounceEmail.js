const { Op } = require('sequelize');
let { email_error_webhook } = require('../models')

async function checkBounceEmails(emailData) {
    try {
        let arrayToExclude = [];

        var returnObj = {
            new_to_email: null
        }

        if (typeof emailData.to_email != 'string') {
            return returnObj;
        }

        let emailArray = emailData.to_email.split(',');
        if (emailArray && emailArray.length) {
            emailArray = emailArray.map((email) => email.trim());

            emailArray = emailArray.filter((email) => email ? true : false);

            if (!(emailArray && emailArray.length)) {
                return returnObj;
            }

            emailArray = emailArray.reduce((acc, curr) => {
                acc.includes(curr) && acc.push(curr);
                return acc;
            }, []);

        } else {
            return returnObj;
        }

        let bounceEmailArray = await email_error_webhook.findAll({
            where: {
                [Op.and]: {
                    destination: {
                        [Op.in]: emailArray
                    },
                    is_deleted: 0
                }
            },
            attributes: ['destination', 'error_type', 'type']
        });

        JSON.parse(JSON.stringify((bounceEmailArray))).forEach((email) => {
            if (email && email.error_type == 2) {
                arrayToExclude.push(email.destination);
            }
        });

        arrayToExclude = arrayToExclude.reduce((acc, curr) => {
            acc.includes(curr) && acc.push(curr);
            return acc;
        }, [])

        emailArray = emailArray.filter((email) => {
            if (arrayToExclude.indexOf(email) === -1) {
                return true;
            }
            return false;
        });

        if (emailArray && emailArray.length) {
            returnObj.new_to_email = emailArray.join();
        } else {
            returnObj.new_to_email = null;
        }

        return returnObj;

    } catch (error) {
        console.log(error);
    }
}


module.exports = checkBounceEmails;