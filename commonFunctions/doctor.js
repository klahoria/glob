// import DoctorProfile from '../models/doctor_profile.js';
var {access_menu_map} = require('../models/index.js'); // Adjust path as needed

async function CheckDoctorEmail(email, doctor_id) {
    try {
        // access_menu_map.
        const menus = await access_menu_map.findAll({
            where: {
                access_menu_id: 1
            }
        });
        return menus;
    } catch (error) {
        console.log(error)
    }
}


module.exports = CheckDoctorEmail