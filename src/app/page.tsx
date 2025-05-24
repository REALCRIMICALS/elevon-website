import Image from "next/image";
import Link from "next/link";
import CurrentUsers from "./CurrentUsers";
import { sendMessage } from "./partners/actions";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[64px] row-start-2 items-center justify-center max-w-[80rem] mx-auto">
        <div className="flex flex-col gap-[32px] items-center">
          <div className="flex items-center gap-4">
            <Image src={"/elevon-transparent.svg"} width={80} height={80} quality={100} alt="elevon logo" className="" />
            <span className="text-5xl">Elevon</span>
          </div>
          <span className="text-2xl text-center">Elevating the next generation of Metaverse experiences</span>
        </div>
        <CurrentUsers />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href={"#contact"} className="button">Partner With Us</Link>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="p-6 w-full lg:w-2/3 mx-auto shrink-0 mb-32">
            <h3 className="text-3xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-300 text-xl">Founded in 2024, Elevon is a next-generation partner for online businesses, developers, and digital creators. We specialize in growing, funding, and scaling projects across the metaverse — from Roblox games to emerging digital platforms.

              With contributions to projects totaling over 25M+ monthly active users and a growing network of high-impact partnerships, Elevon helps turn ambitious projects into lasting brands. Whether it’s strategic funding, long-term marketing, or operational support, we give creators the tools they need to grow faster and go further. </p>
          </div>
          <div className="w-full flex justify-evenly items-center select-none">
            <div className="lg:p-6 w-full md:w-1/2 shrink-0">
              <h3 className="text-xl font-semibold mb-2">Full Project Acquisition</h3>
              <p className="text-gray-300">We acquire digital businesses and games outright, offering fair market value and long-term support to maximize the potential of your work.</p>
            </div>
            <div className="w-1/2 shrink-0 hidden md:block" />
          </div>
          <div className="w-full flex justify-evenly items-center select-none">
            <div className="w-1/2 shrink-0 hidden md:block" />
            <div className="lg:p-6 w-full md:w-1/2 shrink-0 md:text-end">
              <h3 className="text-xl font-semibold mb-2">Growth & Marketing</h3>
              <p className="text-gray-300">Our in-house growth team builds data-driven campaigns designed to expand your community, increase monetization, and position your brand for global reach.</p>
            </div>
          </div>
          <div className="w-full flex justify-evenly items-center select-none">
            <div className="lg:p-6 w-full md:w-1/2 shrink-0">
              <h3 className="text-xl font-semibold mb-2">Strategic Partnerships</h3>
              <p className="text-gray-300">We work closely with developers and founders to unlock new revenue streams, scale operations, and align long-term goals with sustainable growth.</p>
            </div>
            <div className="w-1/2 shrink-0 hidden md:block" />
          </div>
          <div className="w-full flex justify-evenly items-center select-none">
            <div className="w-1/2 shrink-0 hidden md:block" />
            <div className="lg:p-6 w-full md:w-1/2 shrink-0 md:text-end">
              <h3 className="text-xl font-semibold mb-2">Seamless Handover</h3>
              <p className="text-gray-300">From negotiation to transition, our team handles everything. You stay focused on what you do best.</p>
            </div>
          </div>
        </div>
        <section id="contact" className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
          <form className="bg-faint p-6 rounded-xl space-y-4 border border-white/6 shadow-xl" action={sendMessage}>
            <input required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' type="text" name="name" placeholder="Your Name" />
            <input required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' type="email" name="email" placeholder="Email Address" />
            <textarea required className='w-full p-2 rounded-lg border border-white/6 text-white focus:bg-faint transition duration-200 ease-in-out outline-0' name="message" placeholder="Your Message" rows={5} />
            <button className="button" type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}
