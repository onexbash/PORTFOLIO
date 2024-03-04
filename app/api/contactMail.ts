import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

type RequestBody = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, message } = req.body as RequestBody;
    const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: process.env.CONTACT_MAIL_PROVIDER,
      auth: {
        user: process.env.CONTACT_MAIL, // Mail Address
        pass: process.env.CONTACT_MAIL_PASSWORD, // Mail Password
      },
    });

    // Send email
    try {
      await transporter.sendMail({
        from: email,
        to: process.env.CONTACT_MAIL, // Mail Address
        subject: "New contact form submission",
        text: ` ${message}`,
      });

      return res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Failed to send email: " + error.message);
    }
  } else {
    console.log("Non-POST request made");
    return res.status(405).end();
  }
}
