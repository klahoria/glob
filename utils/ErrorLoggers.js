const axios = require('axios');
const winston = require('winston');

const GOOGLE_CHAT_WEBHOOK_URL = "YOUR_WEBHOOK_URL_HERE"; // Replace with actual URL

// Function to send error messages to Google Chat
async function sendToGoogleChat(message) {
    try {
        await axios.post('https://chat.googleapis.com/v1/spaces/AAAA7-LDEMc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=3HvTyQrGA5S5FeHN5iP06QOpJTquJXonbUp3Uyl7GBo', {
            text: message
        });
    } catch (error) {
        console.error("Failed to send error to Google Chat:", error.message);
    }
}

// Create a Winston logger
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(), // Logs to console
        new winston.transports.File({ filename: 'error.log' }) // Logs to a file
    ]
});

// Custom transport to send errors to Google Chat
class GoogleChatTransport extends winston.Transport {
    log(info, callback) {
        if (info.level === 'error') {
            const errorMessage = `🚨 *ERROR ALERT*\n\n❌ *Message:* ${info.message}\n📌 *Timestamp:* ${new Date().toISOString()}`;
            sendToGoogleChat(errorMessage);
        }
        callback();
    }
}

// Add Google Chat Transport to Winston
logger.add(new GoogleChatTransport());

// Export logger
module.exports = logger;
