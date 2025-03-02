const Joi = require('joi');
const { validateRequestBody } = require('../../Validator');

const schema = Joi.object({
    doctor_first_name: Joi.string().required(),
    doctor_last_name: Joi.string().required(),
    doctor_email: Joi.string().email().required(),
    doctor_mobile: Joi.string().pattern(/^\+\d{1}-\d{10}$/).required(), // Matches +1-0000000423
    doctor_password: Joi.string().required(),
    otp: Joi.string().length(6).required(), // Assuming OTP is always 6 digits
    practice_name: Joi.string().required(),
    ind_id: Joi.string().required(),
    sub_ind_id: Joi.string().required(),
    sub_ind_name: Joi.string().allow('').required(), // Allow empty string
    ind_name: Joi.string().allow(null).required(), // Allow null
    TnC: Joi.boolean().required(),
    referral_code: Joi.number().required(),
    captcha: Joi.string().required(),
    language_preferred: Joi.string().allow('').required(), // Allow empty string
    signup_type: Joi.string().valid('business').required() // Assuming only 'business' is allowed
});


// module.exports = schema;
let registerBusinessV2 = validateRequestBody(schema);

registerBusinessV2.name = "registerBusinessV2"

module.exports = registerBusinessV2;


