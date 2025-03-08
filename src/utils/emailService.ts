import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '../config/environment';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  await transporter.sendMail({
    from: `"Imobiliária JH" <${EMAIL_USER}>`,
    to,
    subject,
    text,
  });
};