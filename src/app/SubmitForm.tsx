"use client"

import { useActionState, useEffect } from "react";
import { sendMessage } from "./actions";
import { showNotification } from "@/api/Notifications";

const initState: { status: string } = { status: "unsubmitted" };

export default function SubmitForm() {
    const [state, formAction, pending] = useActionState<{ status: string }, FormData>(sendMessage, initState);

    useEffect(() => {
        if(state.status === "sent") showNotification("We got your message!", 1);
        if(state.status === "error") showNotification("There was an error sending your message, please try again later.", 2);
    }, [state])

    return <form className="bg-faint p-6 rounded-xl space-y-4 border border-white/6 shadow-xl" action={formAction}>
        <input required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' type="text" name="name" placeholder="Your Name" />
        <input required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' type="email" name="email" placeholder="Email Address" />
        <textarea required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' name="message" placeholder="Your Message" rows={5} />
        <div className="w-full flex justify-start">
            <button className="button" type="submit" disabled={pending}>Send Message</button>
        </div>
    </form>
}