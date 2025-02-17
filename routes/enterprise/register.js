const express = require("express");
const router = express.Router();
const CheckDoctorEmail = require('../../commonFunctions/doctor')
const doctorRegister = require('../../requestValidator/schemas/enterprise/doctoRegister');



router.post("/register_doctor_v2", doctorRegister, (req, res) => {
  
});


router.get('/check_doctor_email', async (req,res)=>{

    console.log('here')
    let menus = await CheckDoctorEmail();
    res.status(200).json(menus);
    
})

router.post("/users", (req, res) => {
  res.json({ message: "User created" });
});

router.post("/", (req, res) => {
  res.json({ message: "User created" });
});

module.exports = router
