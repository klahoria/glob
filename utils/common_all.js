const { fn, col, literal, Op } = require('sequelize');
const { doctor_register_otp, otp_type, partner_parents, partner_profile } = require('../models');

function generateRandomNumber(number_of_digits) {
    var text = "";
    var possible = "123456789";

    for (var i = 0; i < number_of_digits; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function VerifyUserOTP(req) {
    let userOTP = await doctor_register_otp.findAll({
        where: {
            id: req.body.id
        },
        include: [
            {
                model: otp_type,
                as: 'otpType',
                required: true,
            }
        ],
        attributes: ['*', 'otp',
            [fn('TIMESTAMPDIFF', literal('SECOND'), col('doctor_register_otp.date_created'), fn('NOW')), 'seconds_since_sent'],
        ]
    })
    return JSON.parse(JSON.stringify(userOTP));
}

// VerifyUserOTP({ body: { id: 2396 } })

async function referredByPartner(referral_code, own_partner_id) {
    try {
        if (!referral_code) return;

        // Fetch data from the database
        let personDetails = await partner_profile.findAll({
            include: [{
                model: partner_parents,
                as: 'ParentProfile', // This must match the alias defined in the association
                where: {
                    referral_code: referral_code, // Filter by referral_code in partner_parents
                    partner_id: {
                        [Op.ne]: own_partner_id // Exclude records with the specified partner_id
                    }
                },
                attributes: ['partner_id', 'referral_code', 'partner_json'], // Select specific fields from partner_parents
                required: true // Ensures an INNER JOIN (only return records with matching partner_parents)
            }],
            attributes: ['partner_name', 'partner_id'] // Select specific fields from partner_profile
        });

        // Convert Sequelize instances to plain objects
        const plainPersonDetails = personDetails.map(person => person.get({ plain: true }));

        // console.log(plainPersonDetails); // Log the plain data
        return JSON.stringify(plainPersonDetails); // Return the plain data as a JSON string

    } catch (error) {
        console.log(error);
    }
}

module.exports = { generateRandomNumber, VerifyUserOTP, referredByPartner }
