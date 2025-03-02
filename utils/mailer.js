let set_year = new Date().getFullYear();

const nodemailer = require('nodemailer');
const CheckDoctorDND = require('./CheckDoctorDND');
const checkBounceEmails = require('./CheckBounceEmail');
const { business_refer_list, email_templates, logs_for_me } = require('../models');
const dndLeadCheck = require('./dndleadCheck');
const { common_business_new_footer, common_customer_new_footer } = require('./mailerHtml');
const { add_alternate_business_email } = require('./AlternateBusinessEmail');
const { Op, NOW } = require('sequelize');
const { translateEmailTemplate, translateStringSplit, translateString, replaceVariablesinEmailPromisified } = require('./Translation');
const logger = require('./ErrorLoggers');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Use 465 for SSL, or 587 for TLS
    secure: true, // true for port 465, false for port 587
    auth: {
        user: "lalit.kumar@bridgingtech.com", // Your Gmail address
        pass: process.env.gmailSMTPtoken  // Replace with the generated App Password
    }
});

// Function to send an email
async function sendEmail(to, subject, text) {
    try {
        let info = await transporter.sendMail({
            from: '"noreply ' + 'lalit@bridgingtech.com',
            to: to,
            subject: subject,
            // text: text
            html: text
        });

        console.log("Email sent: ", info.messageId);
    } catch (error) {
        logger.error(error.message, { stack: error.stack, tracking: "sendRegisterationOTP" });
        console.error("Error sending email:", error);
    }
}

// Example Usage
// sendEmail("lalit.kumar+1jan@bridgingtech.com", "Test Email", "Hello from Nodemailer!");



async function templateEmailer(template_table, template_name, mailerData) {
    try {
        let dndCheck = await CheckDoctorDND(template_name, mailerData);

        if (dndCheck && (dndCheck.new_to_email !== null)) {
            mailerData.to_email = dndCheck.new_to_email;
        }

        let bounceCheck = await checkBounceEmails(mailerData);

        if (mailerData.lang) {
            mailerData.lang = mailerData.lang.toLowerCase();
        }

        if (bounceCheck && (bounceCheck.new_to_email !== null)) {
            mailerData.to_email = bounceCheck.new_to_email;
        } else {
            if (mailerData && mailerData.uid) {
                await business_refer_list.update({ is_email_sent: 0 }, {
                    where: {
                        id: mailerData.uid
                    }
                })

                return false;
            }
        }
        if (template_name == 'Send_Inquiry_To_Doctor_Lead') {
            let dndLead = await dndLeadCheck(data);
            if (dndLead && (dndLead.new_to_email !== null)) {
                mailerData.new_to_email = dndLead.new_to_email;
            }
        }

        if (mailerData && !mailerData.lang) {
            mailerData.lang = 'en';
        }

        var current_date = new Date();

        mailerData.copyright_year = current_date.getFullYear();

        mailerData.common_business_new_footer = common_business_new_footer;
        mailerData.common_customer_new_footer = common_customer_new_footer;

        delete mailerData.denefits_partner;

        let alternateContact = await add_alternate_business_email(template_name, mailerData);

        if (alternateContact.length) {
            mailerData.to_email = alternateContact;
        }

        const emailTemplateData = await email_templates.findAll({
            where: {
                [Op.and]: {
                    template_name: template_name,
                    lang: 'en'
                }
            },
            attributes: ['template_content', 'template_variables', 'subject', 'attachment_path', 'is_active', 'lang']
        });

        if (template_name == 1) {

            if (emailTemplateData && emailTemplateData.length) {
                if (emailTemplateData[0].is_active) {
                    console.log('Inactive email template used', template_name)
                }

                logs_for_me.create({
                    log_time: new Date(),
                    info: template_name,
                    error: 'Inactive email template used'
                });

            } else {

                if (emailTemplateData && emailTemplateData.length && emailTemplateData[0].is_active == 0) {
                    logs_for_me.create({
                        error: "Inactive email template used",
                        template_name
                    });
                }

            }

        }

        if (!emailTemplateData.length) {

            logs_for_me.create({
                log_time: new Date(),
                info: template_name,
                error: 'Inactive email template used'
            });

        } else {

            let subject = mailerData.subject || emailTemplateData[0].subject;
            const lang = mailerData.lang;

            if (mailerData && mailerData.lang && mailerData.lang.toLowerCase() != emailTemplateData[0].lang.toLowerCase() && template_table == 1) {
                emailTemplateData[0]['template_content'] = await translateEmailTemplate(emailTemplateData[0]['template_content'], mailerData.toLang)
            }

            let template_content = emailTemplateData[0].template_content;

            if (mailerData && mailerData.lang && mailerData.lang != 'en') {
                subject = await translateStringSplit('subject', subject, lang, mailerData);
            }

            let replaced_data = await replaceVariablesinEmailPromisified(mailerData, template_content, subject);
            template_content = replaced_data.template_content;
            subject = replaced_data.subject;

            template_content = template_content.replace(/doctor.denefits.com/g, "business.denefits.com");
            template_content = template_content.replace(/patient.denefits.com/g, "customer.denefits.com");
            subject = subject.replace(/Doctor/g, "Business Owner");
            subject = subject.replace(/doctor/g, "business owner");
            subject = subject.replace(/patient/g, "customer");
            subject = subject.replace(/Patient/g, "Customer");
            subject = subject.replace(/Treatment/g, "Service");
            subject = subject.replace(/treatment/g, "service");
            subject = subject.replace(/Practice/g, "Business");
            subject = subject.replace(/practice/g, "business");

            mailerData.attachment_path = emailTemplateData[0].attachment_path;
            mailerData.content = template_content;
            mailerData.subject = subject;

            // ----------------------------------------------------------------------------------------------

            if (template_name == "PATIENT_DOWNPAYMENT" || template_name == "FIRST_PAYMENT_ERROR") {
                mailerData.bcc_email = (process.env.contact_email);
            }
            if (template_name == "contract_settlement_offer") {
                mailerData.overwrite_email_from = (process.env.billing_email);
            }
            if (template_name === "Send_Inquiry_To_Doctor_Lead") {
                mailerData.bcc_email = "kk14hai@gmail.com";
                mailerData.overwrite_email_from = "kk14hai@gmail.com"; // Replace leads@denefits.com  with kk14hai@gmail.com
            }
            if (template_name === "Send Final Communication to Business" || template_name === "CONTRACT_VERIFICATION_EMAIL" || template_name === "Send 1st Communication to Business" || template_name === "PATIENT_DISAPPROVED" || template_name === "PATIENT_APPROVED" || template_name === "DEFERRED_CONTRACT_VERIFICATION_EMAIL") {
                mailerData.overwrite_email_from = "Team Denefits <kk14hai@gmail.com>";
            }
            if (template_name === "PAYMENT_PROCESSING_TAKE_BACK_DISPUTE" || template_name === "PAYMENT_PROCESSING_DISPUTE_WON" || template_name === "PAYMENT_PROCESSING_SUBSCRIPTION_DISPUTE_WON" || template_name === "PAYMENT_PROCESSING_DISPUTE_LOST" || template_name === "PAYMENT_PROCESSING_SUBSCRIPTION_DISPUTE_LOST" || template_name === "PAYMENT_PROCESSING_DISPUTE" || template_name === "DISPUTE_REVERSAL" || template_name === "TAKE_BACK_DISPUTE" || template_name === "DISPUTE_EMAIL" || template_name === "DISPUTE_EMAIL_LOST" || template_name === "TAKE_BACK_DISPUTE_V2" || template_name === "PAYMENT_PROCESSING_TAKE_BACK_DISPUTE_V2" || template_name === "PAYMENT_PROCESSING_SUBSCRIPTION_TAKE_BACK_DISPUTE_V2" || template_name === "DISPUTE_EMAIL_V2" || template_name === "PAYMENT_PROCESSING_DISPUTE_V2" || template_name === "PAYMENT_PROCESSING_SUBSCRIPTION_DISPUTE_V2") {
                mailerData.overwrite_email_from = "Team Denefits <kk14hai@gmail.com>";
            }
            if (template_name === "ALTERNATE_EMAIL" || template_name === "BUSINESS_MISSING_DOCUMENTS" || template_name === "BUSINESS_NON_CONTACTABLE" || template_name === "BUSINESS_MISSING_DOCUMENTS_AND_NON_CONTACTABLE" || template_name === "DOCTOR_VERIFIED" || template_name === "DOCTOR_UNVERIFIED" || template_name === "BUSINESS_Add_BANK_REMINDER" || template_name === "DOCTOR_DOC_REJECT") {
                mailerData.overwrite_email_from = "Team Denefits <kk14hai@gmail.com>";
            }
            if (template_name === "ARV2_PAYMENT_PLAN_CREATED_FOR_BUSINESS") {
                mailerData.overwrite_email_from = `Denefits AR <${(process.env.arv2_email)}>`;
            }
            if (template_name === "IN_APP_DISPUTE_SUBMITTED") {
                mailerData.overwrite_email_from = "Team Denefits <kk14hai@gmail.com>";
            }
            if (template_name === "Debt_proposal1" || template_name === "PROPOSAL_CREATED" || template_name === "Bulk_proposal" || template_name == 'FRIDAY_CRON_REPORT' || template_name === "partner-registration-email" || template_name === 'contracts_with_high_down_payment' || template_name === 'INSTANT_CLAIM_REPORT' || template_name === 'ERROR_LOGS_REPORT' || template_name === 'SEND_CSR_REMINDER_ADMIN' || template_name === 'SEND_CSR_REMINDER_ADMIN_ALL' || template_name === 'downpayment_alert' || template_name === 'financed_amount_alert' || template_name == 'CONTRACTS_TO_BE_MAKE_NON_GUARANTEED' || template_name === 'GENERIC_DECLINE' || template_name == 'BUSINESS_OWNER_REPORT_TO_MGMT' || template_name == 'payments_alert_template') {
                mailerData.overwrite_email_from = "Denefits Development <kk14hai@gmail.com>";
            }
            if (template_name === "script_template_2" || template_name === "script_template_1") {
                mailerData.overwrite_email_from = "Team Denefits <kk14hai@gmail.com>";
            }
            var training_templates = [
                "SUCCESS_REFRESHER_TRAINING_NEW",
                "QUICK_TRAINING_NEW",
                "DENEFITS_TRAINING_NEW",
                "FULL_TRAINING_NEW",
                "NEW_FEATURES_NEW",
                "INTRODUCTION_TRAINING_NEW",
                "PERFORMANCE_TRAINING_NEW",
                "DOCTOR_TRAINING_RESCHEDULED",
                "DOCTOR_TRAINING_CANCELED",
                "PARTNER_SUCCESS_REFRESHER_TRAINING_NEW",
                "PARTNER_QUICK_TRAINING_NEW",
                "PARTNER_FULL_TRAINING_NEW",
                "PARTNER_NEW_FEATURES_NEW",
                "PARTNER_INTRODUCTION_TRAINING_NEW",
                "PARTNER_PERFORMANCE_TRAINING_NEW",
                "PARTNER_TRAINING_RESCHEDULED",
                "PARTNER_TRAINING_CANCELED",
                "PARTNER_DENEFITS_TRAINING_NEW",
                "EZ_TRAINING_NEW",
                "DENEFITS_TRAINING_CUSTOMER",
                "DENEFITS_AR_TRAINING",
                "DENEFITS_TRAINING_AFFILIATE",
                'renewal_date',
                'start_date',
                'patient_name'
            ];

            if (training_templates.indexOf(template_name) !== -1) {
                mailerData.bcc_email = "kk14hai@gmail.com";
                mailerData.overwrite_email_from = "kk14hai@gmail.com";
            }
            let partner_email = [
                "AGENT_PARTNER_LOGIN",
                "PARTNER_DOCTOR_ENROLL",
                "PARTNER_DOCTOR_WEB_ENROLL",
                "SEND_DIRECT_INVITATION_AGENT",
                "PARTNER_AGENT_URL_SHARE",
                // "PARTNER_DOCTOR_URL_SHARE" ,
                "PARTNER_AGENT_WEB_ENROLL",
                "SENT_DIRECT_INVITATION",
                "FORGOT_PASSWORD_PARTNER",
                "RESEND_REMINDER_TO_AGENT",
                "WELCOME_PARTNER",
                "PARTNER_DENEFITS_TRAINING_NEW",
                "PARTNER_TRAINING_CANCELED",
                "PARTNER_TRAINING_RESCHEDULED",
                "PARTNER_UNVERIFIED",
                "PARTNER_VERIFIED",
                "MAIN_AGENT_PASSWORD",
                "AGENT_PASSWORD",
                "partner_login_otp"
            ]
            if (partner_email.indexOf(template_name) !== -1) {
                // mailerData.bcc_email = "kk14hai@gmail.com,training-team@denefits.com";
                mailerData.overwrite_email_from = (process.env.partner_support)
            }

            mailerData.template_name = template_name;
            sendEmail(mailerData.to_email, mailerData.subject, mailerData.content);

        }


    } catch (error) {
        console.log(error)
    }

}

module.exports = { templateEmailer }
