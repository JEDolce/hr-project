const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// iniciallization
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'UPDATE', 'PATCH'],
    credentials: true,
}));

// config nodemailer 
// create reusable transporter object with OAuth
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.AUTH_EMAIL,
        clientId: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        refreshToken: process.env.AUTH_REFRESH_TOKEN
    },
});

// testing nodemailer success
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready for messages");
        console.log(success);
    }
});

// Send email
app.post('/sendmail', (req, res) => {

    const mailOptions = {
        from: req.body.mailer.email,
        to: process.env.AUTH_EMAIL,
        subject: `This is a message from ${req.body.mailer.name}`,
        text: `${req.body.mailer.message} - Mis datos de contacto son: ${req.body.mailer.phone} y ${req.body.mailer.email}`,
    }

    transporter
        .sendMail(mailOptions)
        .then(() => {
            console.log("== Message Sent ==");
            res.json({ status: "SUCCESS", message: "Message sent succesfully" });
        })
        .catch((error) => {
            console.log(error);
            res.json({ status: "FAILED", message: "An error occurred" });
        })
});

// Server Start
app.listen('4000', () => {
    console.log('Server is listening on port 4000');
});