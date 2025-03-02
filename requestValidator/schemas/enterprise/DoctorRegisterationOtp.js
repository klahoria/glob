const Joi = require('joi');
const { validateRequestQuery } = require('../../Validator');

const schema = Joi.object({
    doctor_email: Joi.string(),
    doctor_id: Joi.number()
}).xor("doctor_email", "doctor_id");

// module.exports = schema;
let CheckDoctorEmailParams = validateRequestQuery(schema);

CheckDoctorEmailParams.name = "CheckDoctorEmailParams"

module.exports = CheckDoctorEmailParams;
