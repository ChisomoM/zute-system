/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your service ID (you'll need to set this up in EmailJS dashboard)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

export interface EmailParams {
  to_email: string;
  to_name: string;
  subject?: string;
  message?: string;
  [key: string]: any;
}

export const sendEmail = async (params: EmailParams): Promise<void> => {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      params,
      PUBLIC_KEY
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendLoginCredentials = async (
  email: string,
  name: string,
  password: string
): Promise<void> => {
  console.log('Sending login credentials:', { email, name, password });
  const params: EmailParams = {
    to_email: email,
    to_name: name,
    generated_password: password,
  };

  await sendEmail(params);
};