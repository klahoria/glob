const {
    doctor_profile,
    agent_profile,
    patient_profile,
    partner_profile,
} = require('../models')

const password_generator = (
    length = 12,
    options = {
        allowedChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        mandatory: ''
    }
) => {
    // Validate inputs
    // console.log('callled')
    if (length < 1) throw new Error('Invalid length requirement');
    if (options.mandatory.length > length) {
        throw new Error('Mandatory characters exceed password length');
    }

    // Character set configuration
    const { allowedChars, mandatory } = options;
    const mandatoryChars = [...new Set(mandatory)]; // Remove duplicates
    const remainingLength = length - mandatoryChars.length;

    // Generate random characters
    const randomChars = Array.from({ length: remainingLength }, () =>
        allowedChars[Math.floor(Math.random() * allowedChars.length)]
    );

    // Combine and shuffle
    const allChars = [...mandatoryChars, ...randomChars];
    for (let i = allChars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allChars[i], allChars[j]] = [allChars[j], allChars[i]];
    }

    return allChars.join('');
};

const getSample = () => {
    const random = Math.random(); // Returns [0, 1)

    // Weighted probabilities:
    // 1: 2/16 (12.5%)
    // 2: 7/16 (43.75%)
    // 3: 7/16 (43.75%)

    return random < 0.125 ? 1 :   // First 12.5%
        random < 0.5625 ? 2 :  // Next 43.75% (cumulative 56.25%)
            3;                     // Remaining 43.75%
};


async function generateUniqueReferralCode(user_name, profile) {
    try {
        // Configuration
        var uppercaseMinCount = 3;
        var referral_code = "";
        var uppercaseMaxCount = user_name == "DPF" ? 5 : 4;
        var numberMinCount = user_name == "DPF" ? 5 : 3;
        var NUMBER_RE = /([\d])/g;
        var UPPERCASE_RE = /([A-Z])/g;
        let new_refCode;
        function isStrongEnough(referral_code) {
            var uc = referral_code.match(UPPERCASE_RE);
            var n = referral_code.match(NUMBER_RE);
            return referral_code.length == (user_name == "DPF" ? 10 : 7) && uc && uc.length >= uppercaseMinCount && uc.length <= uppercaseMaxCount && n && n.length >= numberMinCount;
        }

        var regex = /[^a-hj-np-zA-HJ-NP-Z]/gi;
        var regex_number = /[^a-hj-np-zA-HJ-NP-Z2-9 ]/gi;

        while (!isStrongEnough(referral_code)) {
            if (user_name.split(" ").length > 1) {
                var sample_first_name_length = getSample();
                var sample_second_name_length = uppercaseMaxCount - sample_first_name_length;
                var mand = user_name.split(" ")[0].trim().replace(regex_number, "").substring(0, sample_first_name_length) + user_name.split(" ")[1].trim().replace(regex_number, "").substring(0, sample_second_name_length);
                referral_code = password_generator(20).substring(0, uppercaseMaxCount).toUpperCase() + password_generator(numberMinCount);
            } else {
                referral_code = password_generator(20).trim().replace(regex_number, "").substring(0, uppercaseMaxCount).toUpperCase() + password_generator(numberMinCount);
            }
        }

        if (profile == 'doctor-ref') {
            new_refCode = "REF" + referral_code;
        } else {
            new_refCode = referral_code;
        }

        let isUsed = await isCodeAlreadyUsed(new_refCode.toUpperCase(), profile);

        if (isUsed === true) {
            return generateUniqueReferralCode(user_name, profile).then((data) => {
                return data
            });
        } else {
            return new_refCode.toUpperCase();
        }

    } catch (error) {
        console.log(error)
    }
}

async function isCodeAlreadyUsed(code, profile) {

    let userProfile = {
        doctor: doctor_profile,
        agent: agent_profile,
        customer: patient_profile,
        partner: partner_profile,
    }

    let referralData = await userProfile[profile].findAll({
        where: {
            referral_code: code
        }
    })

    return referralData.length ? true : false;

}


module.exports = generateUniqueReferralCode;