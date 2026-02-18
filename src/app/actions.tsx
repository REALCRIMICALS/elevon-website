'use server'

import { Resend } from 'resend';
import MessageReceivedEmail from '@/emails/message-received';
import HasSentMessageEmail from '@/emails/has-sent-message';

export async function sendMessage(previousState: { status: string }, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: 'Elevon Studios <noreply@elevon.gg>',
            to: [email as string],
            subject: 'We got your message!',
            react: MessageReceivedEmail({ name: name as string }),
        })
    } catch (e) {
        return { status: "error", errorMsg: e }
    }

    try {
        await resend.emails.send({
            from: 'Elevon Studios <noreply@elevon.gg>',
            to: ["contact@elevon.gg"],
            subject: 'Message from user',
            react: HasSentMessageEmail({ email: email as string, name: name as string, message: message as string }),
        })
    } catch (e) {
        return { status: "error", errorMsg: e }
    }

    return { status: "sent" }
}