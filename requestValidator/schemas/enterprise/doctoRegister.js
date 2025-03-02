const Joi = require('joi');
const {validateRequestBody} = require('../../Validator');

const schema = Joi.object({
    doctor_email: Joi.string().email().required(),
    doctor_first_name: Joi.string().required(),
    doctor_last_name: Joi.string().required(),
    doctor_mobile: Joi.string().pattern(/^\d{10}$/).required(),
    doctor_password: Joi.string().min(6).required(),
    referral_code: Joi.string().optional(),
    device_id: Joi.string().required(),
    device_type: Joi.string().valid('android', 'ios', 'web').required(),
    device_token: Joi.string().default('Website').required(),
    app_version: Joi.number().default(101).required(),
    ip: Joi.string().optional(),
    doctor_speciality: Joi.number().required(),
    message_id: Joi.number().required(),
    reason: Joi.string().allow(null).optional(),
    title: Joi.string().optional(),
    lead_id: Joi.number().default(0),
    ind_id: Joi.number().optional(),
    sub_ind_id: Joi.number().optional(),
    ind_name: Joi.string().optional(),
    sub_ind_name: Joi.string().optional(),
    timezone: Joi.string().default('-700').optional(),
    language_preferred: Joi.string().default('en').optional(),
    practice_name: Joi.string().optional(),
    tin: Joi.string().optional(),
    company_website: Joi.string().optional(),
    query: Joi.string().optional(),
    business_refer_code: Joi.string().optional(),
    signup_type: Joi.string().optional(),
    isReferredByBusiness: Joi.boolean().optional(), // Added as per logic
    isReferredByPartner: Joi.boolean().optional(), // Added as per logic
}).custom((value, helpers) => {
    // Conditional validation logic for `ind_id` and `sub_ind_id`
    if (value.doctor_speciality > 0) {
        if (!value.ind_id) {
            return helpers.message('ind_id is required when doctor_speciality is greater than 0');
        }
        if (!value.sub_ind_id) {
            return helpers.message('sub_ind_id is required when doctor_speciality is greater than 0');
        }
    }

    // Conditional validation for `ind_name` and `sub_ind_name`
    if (value.doctor_speciality === 0) {
        if (value.ind_id === 9999 && !value.ind_name) {
            return helpers.message('ind_name is required when ind_id is 9999 and doctor_speciality is 0');
        }
        if (value.sub_ind_id === 9999 && !value.sub_ind_name) {
            return helpers.message('sub_ind_name is required when sub_ind_id is 9999 and doctor_speciality is 0');
        }
    }

    return value; // Return the validated value
});

// module.exports = schema;
let doctorRegister = validateRequestBody(schema);

doctorRegister.name = 'doctorRegister';

module.exports = doctorRegister;
