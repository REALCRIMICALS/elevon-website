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

    return <form className="glass-card p-6 rounded-2xl space-y-4" action={formAction}>
        <input required className='w-full px-4 py-3 rounded-xl input-glass text-sm' type="text" name="name" placeholder="Your Name" />
        <input required className='w-full px-4 py-3 rounded-xl input-glass text-sm' type="email" name="email" placeholder="Email Address" />
        <textarea required className='w-full px-4 py-3 rounded-xl input-glass text-sm resize-none' name="message" placeholder="Your Message" rows={5} />
        <div className="w-full flex justify-start pt-2">
            <button className="button" type="submit" disabled={pending}>{pending ? 'Sending...' : 'Send Message'}</button>
        </div>
    </form>
}