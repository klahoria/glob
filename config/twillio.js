// Your AccountSID and Auth Token from console.twilio.com
const accountSid = process.env.twillio_accountid;
const authToken = process.env.twillio_autToken;

const client = require('twilio')(accountSid, authToken);


module.exports = client