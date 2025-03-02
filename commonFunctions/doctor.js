// import DoctorProfile from '../models/doctor_profile.js';
const { Op } = require('sequelize');
var { doctor_profile } = require('../models/index.js'); // Adjust path as needed

async function CheckDoctorEmail(email, doctor_id) {
    try {
        return new Promise(resolve => {
            doctor_profile.findAll({
                where: {
                    [Op.or]: [
                        { doctor_email: email || null },
                        { doctor_id: doctor_id || null }
                    ]
                },
                attributes: ['doctor_email', 'doctor_id'] // Uncomment if needed
            }).then(data => {
                resolve(data);
            }).catch(err => {
                console.log(err);
            });
        })
    } catch (error) {
        console.log(error)
    }
}


async function CheckDoctorMobile(mobile, doctor_id) {
    try {
        return new Promise(resolve => {
            doctor_profile.findAll({
                where: {
                    [Op.or]: [
                        { doctor_mobile: mobile || null },
                        { doctor_id: doctor_id || null },
                        // { doctor_mobile: doctor_id || null },
                        // { doctor_id: mobile || null }
                    ]
                },
                attributes: ['doctor_mobile', 'doctor_id'] // Uncomment if needed
            }).then(data => {
                resolve(data);
            }).catch(err => {
                console.log(err);
            });
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {CheckDoctorMobile,CheckDoctorEmail}