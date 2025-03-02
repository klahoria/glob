const { fn, col, literal } = require('sequelize');
const { doctor_register_otp, otp_type } = require('../models');

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

module.exports = { generateRandomNumber, VerifyUserOTP }