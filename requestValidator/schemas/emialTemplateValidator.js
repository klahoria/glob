const Joi = require('joi');
const validateRequestBody = require('../Validator.js');

const schema = Joi.object({
    attachment_path: Joi.string()
        .alphanum()
        .required(),
    notes: Joi.string().required(),
    product: Joi.string().valid('credee', 'denefits', 'coolCredit', 'practina', 'lendee'),
    subject: Joi.string().required(),
    template_name: Joi.string().required().messages({ "required": "You must be at least 18 years old" }),
    template_data: Joi.string().required(),
    templete_variables: Joi.string().required()
})


let emailTemplateValidator = validateRequestBody(schema);

emailTemplateValidator.name = 'emailTemplateValidator';

module.exports = emailTemplateValidator;

// (req,res,next) => {}