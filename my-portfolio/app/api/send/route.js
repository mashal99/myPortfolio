import { EmailTemplate } from '../../components/EmailSection';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_R84ZnSfz_KkJ4NaWChxdkLPx71Zd3srzx'); // Replace with your Resend API key

export async function POST() {
  try {
    // Parse the incoming request data
    const { email, name, message } = await request.json();

    // Construct the email body
    const emailBody = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Send the email
    const data = await resend.emails.send({
        from: 'Your Domain Email <contact@ahmedmashaal.com>', 
        to: ['mashala324@gmail.com'], 
        subject: "New Message from Website",
        html: emailBody, // Use the HTML body
    });
    
    return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
