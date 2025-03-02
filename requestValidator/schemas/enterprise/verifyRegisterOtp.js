const Joi = require('joi');
const { validateRequestBody } = require('../../Validator');

const schema = Joi.object({
    otp: Joi.object({
        value: Joi.number().required(),
        required: Joi.number().valid(0).required(),
        is_number: Joi.number().valid(1).required()
    }).required(),
    doctor_email: Joi.object({
        value: Joi.string().email().required(),
        required: Joi.number().valid(1).required()
    }).required(),
    doctor_mobile: Joi.object({
        value: Joi.string().required(),
        required: Joi.number().valid(1).required()
    }).required(),
});

let verifyRegisterOtp = validateRequestBody(schema);

verifyRegisterOtp.name = 'verifyRegisterOtp';

module.exports = `verifyRegisterOtp`;

