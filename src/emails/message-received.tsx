import { Tailwind, Body, Section, Row, Column, Img, Container, Html, Text } from "@react-email/components";

export default function MessageReceivedEmail({ name }: { name: string }) {
    return <Tailwind>
        <Html>
            <Body className='m-0 antialiased bg-blue-950 text-white [font-family:_Trebuchet_MS,Helvetica,sans-serif]'>
                <Section className='w-[calc(100%-32px)] border border-[#ffffff0c] border-solid rounded-xl m-4 bg-gray-500/10 items-center flex justify-center gap-2 p-3 select-none'>
                    <Row>
                        <Column>
                            <Img width={36} height={36} src={"https://www.elevon.gg/elevon.png"} />
                        </Column>
                        <Column className="w-2"/>
                        <Column>
                            <Text className='text-3xl text-center m-0'>Elevon</Text>
                        </Column>
                    </Row>
                </Section>
                <Container className='p-4 w-full flex flex-col gap-4'>
                    <Text>Hi {name as string},</Text>
                    <Container className='flex flex-col'>
                        <Text>Thanks for contacting Elevon. We’ve received your message and our team will get back to you as soon as possible.</Text>
                        <Text>If you’re reaching out about a partnership, investment, or project collaboration, feel free to include any relevant links, pitch decks, or documentation that can help us understand your vision better.</Text>
                        <Text>In the meantime, you can learn more about what we do at elevon.gg.</Text>
                        <Text>Looking forward to connecting.</Text>
                    </Container>
                    <Container className='flex flex-col'>
                        <Text>Best regards,</Text>
                        <Text>The Elevon Team</Text>
                    </Container>
                    <Text>Do not reply to this email</Text>
                </Container>
            </Body>
        </Html>
    </Tailwind>
}