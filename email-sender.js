import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

var mailOptions = {
  from: process.env.EMAIL,
  to: "annaharris347@gmail.com",
  subject: "Sending Email using Node.js",
  text: "can you be serious in your life",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
