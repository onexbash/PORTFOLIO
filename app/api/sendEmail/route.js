import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { message, sender_email } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT_SSL, // Try Both: NODEMAILER_PORT_SSL & NODEMAILER_PORT_TLS
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: 'fabian@schlegel.one',
      to: process.env.NODEMAILER_EMAIL,
      subject: 'PORTFOLIO | ' + sender_email,
      html: `
        <h1>PORTFOLIO | ${sender_email}</h1>
        <p>${message}</p>
      `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent sucessfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
