const cheerio = require('cheerio');
const { email_templates } = require('../models')
const translate = require('@iamtraction/google-translate'); // Replace with your translation library

const noTranslateKeys = new Set([
    "business_name", "customer_name", "business_phone_number", "doctor_name",
    "old_treatment_amount", "new_treatment_amount", "old_financed_amount",
    "contact_email", "new_financed_amount", "old_downpayment_amount",
    "new_downpayment_amount", "old_interest_rate", "new_interest_rate",
    "old_total_payments", "new_total_payments", "old_remaining_payments",
    "new_remaining_payments", "old_recurring_amount", "new_recurring_amount",
    "old_interest_text", "new_interest_text", "user_name", "brand_name",
    "recurring_amount", "transaction_fees", "total_payable_today", "Invited_to",
    "invited_by", "refer_code", "referral_name", "google_calander_url",
    "outlook_calander_url", "pp_sub_verification_link", "doctor_image",
    "patient_image", "alter_name", "Denefits ©", "Denefits", "doctor_name's", "'s",
    "amount_charged", "patient_name", "doctor_email", "amount_without_lpc", "late_fees"
]);


// Helper function to check if text should be excluded from translation
function shouldExcludeText(text, translatedWords, noTranslateKeys) {
    return (
        text.includes('http') ||
        ['{{/if}}', '{{else}}', 'IP:'].includes(text) ||
        translatedWords.has(text) ||
        text.length <= 1 ||
        noTranslateKeys.has(text.trim())
    );
}

// Helper function to perform translations for an array of words
async function performTranslations(words, language) {
    try {
        const translations = await Promise.all(
            words.map(async (word) => {
                try {
                    const translated = await translate(word, { from: 'en', to: language });
                    return { word, translation: translated.text };
                } catch (error) {
                    console.error('Translation error for:', word, error);
                    return null;
                }
            })
        );
        return translations.filter(Boolean);
    } catch (error) {
        console.error('Error in performTranslations:', error);
        return [];
    }
}

// Helper function to replace translated words back into the HTML
function replaceTranslationsInHTML($, translations) {
    $('body').find('*').contents().filter(function () {
        return this.nodeType === 3; // Select text nodes only
    }).each(function () {
        let newText = $(this).text();
        for (const { word, translation } of translations) {
            if (!new RegExp(/^[^a-zA-Z0-9]+$/).test(word)) {
                const regex = word.length < 6 ? new RegExp(`\\b${word}\\b`, 'g') : new RegExp(word, 'g');
                newText = newText.replace(regex, translation.replace(/\s*\n\s*/g, " ").trim());
            }
        }
        $(this).replaceWith(newText);
    });
}

// Translate a single string
async function translatestring(content, language) {
    try {
        const translation = await translate(content, { from: 'en', to: language });
        return translation.text;
    } catch (error) {
        console.error("Translation error:", error);
        return content;
    }
}

// Translate a string with additional checks
async function translateStringWithChecks(key, content, language) {
    if (
        key === "business_notes" && content === 'N/A' ||
        String(key).includes('password') || String(key).includes('otp') ||
        String(key).includes('contract_token') || String(content).includes('.denefits.com') ||
        String(content).includes('https://') || key === 'price' ||
        typeof key === 'number' || key.includes('$') || key == null ||
        !content || noTranslateKeys.has(key) || String(content).includes('mailto') ||
        String(key).includes('amount') || String(content).trim().toLowerCase() === "denefits" ||
        String(content).trim() === 'Denefits ©' || noTranslateKeys.has(key)
    ) {
        return content;
    }

    if ((String(content).includes('Denefits') || String(content).includes('denefits'))) {
        content = content; // Placeholder for any future processing
    }

    return await translateString(content, language);
}

// Translate an email template
async function translateEmailTemplate(templateContent, language) {
    if (!templateContent) return '';

    try {
        const html = templateContent.trim().replace(/\s+/g, ' ');
        const $ = cheerio.load(html, null, true);
        const $clean = cheerio.load(html, null, true);
        $clean('style').empty();

        const translatedWords = new Set();

        // Extract and process text nodes
        $clean('body').find('*').contents().filter(function () {
            return this.nodeType === 3; // Text nodes only
        }).each(function () {
            const text = $(this).text().trim();
            if (shouldExcludeText(text, translatedWords, noTranslateKeys)) return;

            const splitContent = text.split(/\b\w+_\w+\b/g).map(item => item.trim()).filter(Boolean);
            for (const item of splitContent) {
                if (!noTranslateKeys.has(item) && item.length > 1 && !(item.includes('http') || item.includes('https'))) {
                    if (item.includes("Denefits") || item.includes("denefits")) {
                        item.split(/denefits|Denefits/g).forEach(valueItem => {
                            if (valueItem.length > 1) translatedWords.add(valueItem);
                        });
                    } else {
                        translatedWords.add(item);
                    }
                }
            }
        });

        const translationData = await performTranslations(Array.from(translatedWords), language);
        replaceTranslationsInHTML($, translationData);

        return $.html();
    } catch (error) {
        console.error('Error in translateEmailTemplate:', error);
        return templateContent; // Return original content on error
    }
}

// Insert translated email template into the database
async function insertEmailTemplate(emailData, templateName, lang) {
    try {
        const email = emailData[0];
        email.lang = lang;

        await email_templates.create({
            template_name: email['template_name'],
            template_content: email['template_content'],
            template_variables: email['template_variables'],
            subject: email['subject'],
            attachment_path: email['attachment_path'],
            is_active: email['is_active'],
            lang: email['lang']
        })

    } catch (error) {
        console.error('Error inserting email template:', error);
    }
}

// Main function to translate and save email template
async function translateAndSaveEmailTemplate(emailData, templateName, lang) {
    try {
        const translatedContent = await translateEmailTemplate(emailData[0].template_content, lang);
        emailData[0].template_content = translatedContent;
        await insertEmailTemplate(emailData, templateName, lang);
    } catch (error) {
        console.error('Error in translateAndSaveEmailTemplate:', error);
    }
}

async function translateStringSplit(type, subject, lang, data) {
    let subject1 = subject.split(/(\b\w+_\w+\b)/);
    for (let i = 0; i < subject1.length; i++) {
        let item = subject1[i]
        if (noTranslateKeys.has(item) || !item) {
            subject1[i] = item;
        } else {
            let value = await translateString(type, item.trim(), lang);
            subject1[i] = value;
        }
    }
    subject1 = subject1.join(' ').trim()

    subject1 = await checkReplaceValues(data, subject1);

    return subject1;
}

async function translateString(key, content, language) {
    try {
        if (
            key === "business_notes" && content === 'N/A' ||
            String(key).includes('password') || String(key).includes('otp') ||
            String(key).includes('contract_token') || String(content).includes('.denefits.com') ||
            String(content).includes('https://') || key === 'price' ||
            typeof key === 'number' || key.includes('$') || key == null ||
            !content || noTranslateKeys.has(key) || String(content).includes('mailto') ||
            String(key).includes('amount') || String(content).trim().toLowerCase() == "denefits" || String(content).trim() == 'Denefits ©' || noTranslateKeys.has(key)
        ) {
            return content;
        }

        if ((String(content).includes('Denefits') || String(content).includes('denefits')) && content.toLowerCase() !== "denefits") {
            content = content/* .replace(/denefits|Denefits/g, '_________') */;
        }

        let translatedText = await translatestring(content, language);

        if ((translatedText.includes('denefits') && String(content).trim().toLowerCase() !== "denefits") && key !== "subject") {
            translatedText = translatedText;
        }

        return translatedText;

    } catch (error) {
        console.error("Translation function error:", error);
        return content;
    }
}


function checkReplaceValues(data, value) {
    return new Promise((resolve) => {

        let matchedValues = String(value || '').match(/(\b\w+_\w+\b)/);

        if (matchedValues) {

            matchedValues = Array.from(new Set([...matchedValues]))

            for (let i = 0; i < matchedValues.length; i++) {
                let valueToReplace = matchedValues[i];
                let regex = new RegExp('\\b' + valueToReplace + '\\b', 'g')

                let replaceValue = data[valueToReplace] || valueToReplace;

                value = String(value).replace(regex, replaceValue);
            }


        }
        resolve(value)

    })
}


function replaceVariablesinEmailPromisified(data, template_content, subject) {
    let language = data['lang']
    return new Promise(async function (resolve) {
        for (var key in data) {

            if (data.hasOwnProperty(key) && (typeof data[key] == 'string' || typeof data[key] == 'number' || typeof data[key] == 'boolean') && (template_content.indexOf(key.toString()) >= 0 || subject.indexOf(key.toString()) >= 0)) {
                if (template_content.indexOf(key.toString()) >= 0) {

                    if ((!((key.includes('name') && key.includes('_date') && key.includes('email') && key.includes('token') && key.includes('password') && key.includes('fee') && key.includes('link') && key == 'contract_id' && key.includes('otp') && key.includes('password') && key.includes('link') && key.includes('url') && key != 'env' && key.includes('year') && key == 'subject'))) || data.key == 'email_documents') {

                        const $ = cheerio.load(template_content, null, true);
                        const element = $(key); // Selecting the <p> element
                        if (element.length > 0 && element[0].type === 'tag') {
                            // Check if it is an HTML element
                            if (process.env.fork) {
                                process.send({ is_console: 1, message: `HTML TAG DETECTED IN KEY FOR REPLACEMENT ${key}`, from: "process" });
                            }

                            template_content = template_content;
                        } else if (String(language).toLowerCase() != 'en') {
                            // if((lang.includes(key) || lang.includes(data[key]))) {


                            if (String(data[key]).includes('http')) {
                                data[key] = data[key];
                            } else if (noTranslateKeys.has(key) && !String(data[key]).includes('http') && !String(data[key]).includes('base64')) {
                                if (new RegExp(/(\b\w+_\w+\b)/).test(data[key])) {
                                    data[key] = await translateStringSplit(key, data[key], language, data)

                                } else {
                                    data[key] = await translateString(key, data[key], language);
                                }
                            }
                            let regex = new RegExp('\\b' + key + '\\b', 'g')
                            template_content = template_content.replace(regex, data[key]);
                        } else {
                            let regex = new RegExp('\\b' + key + '\\b', 'g')
                            template_content = template_content.replace(regex, data[key]);
                        }
                    }
                }
                if (subject.indexOf(key.toString()) >= 0) {
                    let regex = new RegExp('\\b' + key.trim() + '\\b', 'g')
                    // template_content = template_content.replace(regex, data[key]);
                    subject = subject.replace(regex, data[key]);
                }
            }
        }
        resolve({
            template_content,
            subject
        });
    });
}

module.exports = {
    translateString,
    translateStringSplit,
    translateStringWithChecks,
    translateEmailTemplate,
    translateAndSaveEmailTemplate,
    replaceVariablesinEmailPromisified
};