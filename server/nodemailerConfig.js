require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const response = require('./handleErrors');
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
    const oauth2Client = new OAuth2(
        process.env.GO_CLIENT_ID,
        process.env.GO_CLIENT_SECRET,
        'https://developers.google.com/oauthplayground'
    );
    oauth2Client.setCredentials({ refresh_token: process.env.GO_REFRESH_TOKEN });
    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) reject('[nodemailerConfig] Failed to create access token');
            resolve(token);
        });
    });
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.NM_EMAIL,
            accessToken,
            clientId: process.env.GO_CLIENT_ID,
            clientSecret: process.env.GO_CLIENT_SECRET,
            refreshToken: process.env.GO_REFRESH_TOKEN
        }
    });
    return transporter;
};

const sendMessage = async (message, res) => {
    const mailOptions = {
        from: message.email,
        to: process.env.NM_EMAIL,
        subject: `New message from ${message.name}`,
        text: message.message
    };
    let emailTransporter = await createTransporter();
    emailTransporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            response.error(null, res, error, 500, `[nodemailerConfig] Something went wrong: ${error}`);
        } else {
            response.success(null, res, data, 201, `[nodemailerConfig] Email sent: ${data.response}`);
        }
    });
};

module.exports = sendMessage;