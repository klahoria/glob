const Joi = require('joi');
const { validateRequestQuery } = require('../../Validator');

const schema = Joi.object({
  email: Joi.string().email().optional().messages({
    'string.email': 'Invalid email format',
  }),
  mobile: Joi.string().pattern(/^[0-9]{10}$/).optional().messages({
    'string.pattern.base': 'Mobile number must be 10 digits',
  }),
  doctor_first_name: Joi.string().min(2).max(50).required().messages({
    'string.min': 'First name must be at least 2 characters',
    'string.max': 'First name must not exceed 50 characters',
    'any.required': 'First name is required'
  }),
  doctor_last_name: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Last name must be at least 2 characters',
    'string.max': 'Last name must not exceed 50 characters',
    'any.required': 'Last name is required'
  })
}).or('email', 'mobile') // Ensures that at least one of email or mobile is present.


let QueryParamsRegisterOTP = validateRequestQuery(schema);

QueryParamsRegisterOTP.name = 'QueryParamsRegisterOTP';

module.exports = QueryParamsRegisterOTP;
