// import DoctorProfile from '../models/doctor_profile.js';
const { Op } = require('sequelize');
var { doctor_profile, agent_profile } = require('../models/index.js'); // Adjust path as needed

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

async function chekcDoctorEmailExists(doctor_email, doctor_mobile) {
    if (!doctor_email) return;

    let doctorEmail = await doctor_profile.findAll({
        where: {
            [Op.or]: {
                doctor_mobile: {
                    [Op.like]: doctor_mobile || doctor_email
                },
                doctor_email: {
                    [Op.like]: doctor_email || doctor_mobile
                }
            },
        },
        attributes: ['doctor_email', 'doctor_mobile']
    });

    if (!doctorEmail.length) {
        return true;
    }

    return false;
}

async function chekcAgentEmailExists(doctor_email, doctor_mobile) {
    if (!doctor_email) return;

    let doctorEmail = await agent_profile.findAll({
        where: {
            [Op.or]: {
                agent_mobile: {
                    [Op.like]: doctor_mobile || doctor_email
                },
                agent_email: {
                    [Op.like]: doctor_email || doctor_mobile
                }
            },
        },
        attributes: ['agent_email', 'agent_mobile']
    });

    if (!doctorEmail.length) {
        return true;
    }

    return false;
}

module.exports = { CheckDoctorMobile, CheckDoctorEmail, chekcDoctorEmailExists, chekcAgentEmailExists }