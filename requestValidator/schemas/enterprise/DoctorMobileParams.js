const Joi = require('joi');
const { validateRequestQuery } = require('../../Validator');

const schema = Joi.object({
    doctor_mobile: Joi.string()
        .pattern(/^(\+1-)?\d{10}$/) // Ensures the format is "+1-XXXXXXXXXX" (10 digits)
        .required()
        .messages({
            "string.pattern.base": "Doctor mobile must be in the format +1-XXXXXXXXXX"
        }),
    doctor_id: Joi.number().required()
});

let CheckDoctorMoblieParams = validateRequestQuery(schema);

CheckDoctorMoblieParams.name = 'CheckDoctorMoblieParams';

module.exports = CheckDoctorMoblieParams;
