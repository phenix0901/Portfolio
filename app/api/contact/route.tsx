import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend("re_MeeLFh2p_368bjP8iRWPabr4b73F8k5Kz")

export async function POST(req: NextRequest) {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 })
    }

    try {
        await resend.emails.send({
            from: 'Portfolio Contact<ernestpapyan461@gmail.com>', // You can use your own domain if verified
            to: ['phenixtechnology901@gmail.com'], // <-- CHANGE THIS to your real email
            subject: subject || 'New Contact Form Submission',
            reply_to: email,
            html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
    }
}