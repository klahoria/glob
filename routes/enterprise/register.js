const express = require("express");
const router = express.Router();
const doctorRegister = require('../../requestValidator/schemas/enterprise/doctoRegister');
const { DoctorRegisterController, CheckDoctorMobileController, sendRegistrationOTP } = require("../../controllers/enterprise/register");
const { DoctorEmailParams, SendRegistrationOtp, DoctorMobileParams } = require('../../requestValidator/schemas/enterprise/index.js')

router.post("/register_doctor_v2", doctorRegister, (req, res) => { });
router.get('/check_doctor_email', DoctorEmailParams, DoctorRegisterController);
router.get('/check_doctor_mobile', DoctorMobileParams, CheckDoctorMobileController);
router.get('/register_otp', SendRegistrationOtp, sendRegistrationOTP);
router.get('/verify_register_otp', SendRegistrationOtp, sendRegistrationOTP);

module.exports = router
