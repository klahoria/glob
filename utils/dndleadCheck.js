let { leads } = require('../models')

async function dndLeadCheck(data) {
    try {
        let arrayToExclude = [];
        var returnObj = {
            new_to_email: null,
        };

        if (typeof data.to_email != 'string') {
            return returnObj;
        }

        let emailArray = data.to_email.split('');
        if (emailArray && emailArray.length) {
            emailArray.forEach((email) => email.trim())

            emailArray = emailArray.filter((email) => email ? true : false);

            if (!(emailArray && emailArray.length)) {
                return returnObj;
            }
            emailArray = emailArray.reduce((acc, curr) => {
                (!acc.includes(curr)) && acc.push(curr);
                return acc;
            })
        }
        else {
            return returnObj;
        }

        let dndArray = await leads.findAll({
            where: {
                is_dnd: 1
            },
            attributes: ['practice_email', 'alternate_email']
        });

        if (dndArray.length) {
            dndArray.forEach((email) => {
                if (email) {
                    arrayToExclude.push(email.practice_email);
                    arrayToExclude.push(email.alternate_email);
                }
            })
        }

        arrayToExclude = arrayToExclude.reduce((acc, curr) => {
            !acc.includes(curr) && acc.push(curr);
            return acc;
        }, [])

        emailArray = emailArray.filter((element) => {
            if (arrayToExclude.indexOf(element) == -1) {
                return true;
            }
        })

        if (emailArray && emailArray.length) {
            returnObj.new_to_email = emailArray.join();
        } else {
            returnObj.new_to_email = '';
        }

        return returnObj;

    } catch (error) {
        console.log(error)
        return returnObj;
    }
}

module.exports = dndLeadCheck;