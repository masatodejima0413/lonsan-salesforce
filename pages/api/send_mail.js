"use strict";
const nodemailer = require("nodemailer");

export default async (req, res) => {
  try {
    const data = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });

    const subject = "ねこめもブログからの問合せ";
    const text =
      `差出人: ${data.name} \n` +
      `カテゴリ: ${data.category}\n` +
      `本文: \n ${data.body} `;

    const info = await transporter.sendMail({
      from: data.mailfrom,
      to: process.env.MAIL_TO,
      subject,
      text,
    });
    console.log("Message sent: %s", info.messageId);
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};
