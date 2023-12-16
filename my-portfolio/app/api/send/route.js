import { EmailTemplate } from '../../components/EmailSection';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_R84ZnSfz_KkJ4NaWChxdkLPx71Zd3srzx'); // Replace with your Resend API key

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Ahmed <mashala324@gmail.com>', 
            to: ['mashala324@gmail.com'], 
            subject: "", 
            react:<>
                    <p>Email Body</p>
                </>,
        });
        
        return NextResponse. json(data);
        } catch (error) {
          return NextResponse. json({ error });
        }
}
