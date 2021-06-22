"use strict";
const nodemailer = require("nodemailer");

export default async (req, res) => {
  try {
    var data = req.body;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: "masatodejima+nodemailer@gmail.com",
      subject: "お問い合わせ",
      text: "本文",
    });
    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err);
  }
};
