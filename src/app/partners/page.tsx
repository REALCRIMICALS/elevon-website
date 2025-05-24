import { sendMessage } from "./actions";

export default function Partners() {
  return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-2">Why work with us?</h2>
      <div className="flex gap-4">
        {[
          {
            title: "Game Acquisitions",
            desc: "We invest in promising titles and help scale them globally."
          },
          {
            title: "Developer Support",
            desc: "Tools, mentorship, and funding to help creators thrive."
          },
          {
            title: "Marketing & Monetization",
            desc: "Data-driven strategies to boost player engagement and revenue."
          },
        ].map((feature, i) => (
          <div key={i} className="shadow-xl bg-faint border border-white/6 rounded-xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
      <form className="bg-faint p-6 rounded-xl space-y-4 border border-white/6 shadow-xl" action={sendMessage}>
        <input required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' type="text" name="name" placeholder="Your Name" />
        <input required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' type="email" name="email" placeholder="Email Address" />
        <textarea required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' name="message" placeholder="Your Message" rows={5} />
        <button className="button" type="submit">Send Message</button>
      </form>
    </main>
  </div>
}