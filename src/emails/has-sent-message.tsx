import { Tailwind, Body, Container, Img, Html, Text, Column, Row, Section, Head } from "@react-email/components";

export default function HasSentMessageEmail({ name, email, message }: { name: string, email: string, message: string }) {
    return <Tailwind>
        <Html>
            <Head/>
            <Body className='m-0 antialiased bg-blue-950 dark:bg-blue-950 text-white dark:text-white [font-family:_Trebuchet_MS,Helvetica,sans-serif]'>
                <Section className='w-[calc(100%-32px)] border border-[#ffffff0c] border-solid rounded-xl m-4 bg-gray-500/10 dark:bg-gray-500/10 items-center flex justify-center gap-2 p-3 select-none'>
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
                    <Text className='text-xl w-full'>{name as string} ({email as string}) has sent a message</Text>
                    <Text className='w-full bg-gray-500/5 dark:bg-gray-500/5 rounded-md border border-white/6'>{message as string}</Text>
                </Container>
            </Body>
        </Html>
    </Tailwind>
}