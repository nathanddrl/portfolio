const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Initialize express
const app = express();

// Only allow requests from trusted origins
app.use(cors());

// Parse request bodies as JSON
app.use(express.json());

// POST route to send email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure nodemailer to send email using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configure the email to be sent
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Message de ${name}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // If the email was sent successfully, send a success message to the client
    res.status(200).send('Email envoyé avec succès');
  } catch (error) {
    // If the email was not sent successfully, send an error message to the client
    console.error(error);
    res.status(500).send('Erreur lors de l\'envoi de l\'email');
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
