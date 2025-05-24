'use server'

import { Resend } from 'resend';
import { Html, Tailwind, Text, Container, Body } from '@react-email/components';
import { redirect } from 'next/navigation';

export async function sendMessage(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const resend = new Resend(process.env.RESEND_API_KEY);

    resend.emails.send({
        from: 'Elevon Games no-reply <noreply@elevon.gg>',
        to: [email as string],
        subject: 'We got your message!',
        react: (() => {
            return <Tailwind>
                <Html>
                    <Body className='m-0 antialiased bg-blue-950'>
                        <Container className='p-4 w-full bg-gray-500/5'>
                            <Text className='text-3xl w-full text-center'>Elevon</Text>
                        </Container>
                        <Container className='p-4 w-full flex flex-col gap-4'>
                            <Text className='text-xl w-full text-center'>{name as string}, thank you for your message</Text>
                            <Text className='text-xl w-full text-center'>We will try to get in contact with you as soon as possible.</Text>
                        </Container>
                    </Body>
                </Html>
            </Tailwind>
        })(),
    })

    resend.emails.send({
        from: 'Elevon Games no-reply <noreply@elevon.gg>',
        to: ["contact@elevon.gg"],
        subject: 'Message from user',
        react: (() => {
            return <Tailwind>
                <Html>
                    <Body className='m-0 antialiased bg-blue-950'>
                        <Container className='p-4 w-full bg-gray-500/5'>
                            <Text className='text-3xl w-full text-center'>Elevon</Text>
                        </Container>
                        <Container className='p-4 w-full flex flex-col gap-4'>
                            <Text className='text-xl w-full'>{name as string} ({email as string}) has sent a message</Text>
                            <Text className='text-xl w-full bg-gray-500/5 rounded-md'>{message as string}</Text>
                        </Container>
                    </Body>
                </Html>
            </Tailwind>
        })(),
    })

    redirect(`/`);
}