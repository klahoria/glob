const { Op } = require('sequelize');
const { leads } = require('../models'); // Assuming you have your Sequelize model defined in '../models/leads'

async function isLeadExist(doctor_data, callback_main) {
    let doc_email_arr = [];
    let doc_mobile_arr = [];
    let queryConditions = []; // Array to hold all conditions

    if (doctor_data.doctor_email) {
        doc_email_arr.push(doctor_data.doctor_email);
        queryConditions.push({
            practice_email: {
                [Op.and]: [
                    { [Op.in]: doc_email_arr },
                    { [Op.notLike]: '' },
                    { [Op.not]: null }
                ]
            }
        });
    }

    if (doctor_data.practice_email) {
        doc_email_arr.push(doctor_data.practice_email);
        queryConditions.push({
            practice_email: {
                [Op.and]: [
                    { [Op.in]: doc_email_arr },
                    { [Op.notLike]: '' },
                    { [Op.not]: null }
                ]
            }
        });
    }

    if (doctor_data.doctor_mobile) {
        let m = doctor_data.doctor_mobile.toString().split('-');
        let mob = m[m.length - 1];
        if (mob.length > 0) {
            doc_mobile_arr.push(mob);
            queryConditions.push({
                practice_mobile: {
                    [Op.and]: [
                        { [Op.in]: doc_mobile_arr },
                        { [Op.notLike]: '' },
                        { [Op.not]: null }
                    ]
                }
            });
        }
    }

    if (doctor_data.practice_mobile) {
        let m = doctor_data.practice_mobile.toString().split('-');
        let mob = m[m.length - 1];
        if (mob.length > 0) {
            doc_mobile_arr.push(mob);
            queryConditions.push({
                practice_mobile: {
                    [Op.and]: [
                        { [Op.in]: doc_mobile_arr },
                        { [Op.notLike]: '' },
                        { [Op.not]: null }
                    ]
                }
            });
        }
    }

    let whereClause = {
        is_deleted: 0,
        lead_id: { [Op.ne]: doctor_data.lead_id || 0 } // lead_id<>?
    };

    if (doctor_data.bypass_doctor_id_chk != 1) { // if bypass_doctor_id_chk != 1 then add doctor_id=0 condition
        whereClause.doctor_id = 0; // doctor_id=0
    }

    if (queryConditions.length > 0) {
        whereClause[Op.or] = queryConditions; // Combine email and mobile conditions with OR
    }


    try {
        const leadsResult = await leads.findAll({
            where: whereClause,
            order: [['is_duplicate', 'DESC']] // ORDER BY is_duplicate ASC
        });
        // callback_main(null, leadsResult); // callback with leads
        return leadsResult
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}


module.exports = { isLeadExist }