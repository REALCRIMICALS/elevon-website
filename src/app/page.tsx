import SubmitForm from "./SubmitForm";
import { Fade } from "@/Components/animate-ui/fade";
import { AnimatedHero } from "@/Components/animate-ui/animated-hero";
import { AnimatedHeader } from "@/Components/animate-ui/animated-header";
import { IntroLoader } from "@/Components/animate-ui/intro-loader";

function SectionDivider() {
  return (
    <div className="max-w-xs mx-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-[#23719e]/20 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <IntroLoader>
      <AnimatedHeader />
      <AnimatedHero />

      {/* The CurrentUsers section was moved into AnimatedHero for better layout flow */}

      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Fade direction="up" duration={0.5}>
            <span className="text-[#23719e] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">About Us</span>
          </Fade>
          <Fade direction="up" delay={0.1} duration={0.5}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Who We Are</h2>
          </Fade>
          <Fade direction="up" delay={0.2} duration={0.5}>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Founded in 2025, Elevon is a next-generation partner for online businesses, developers, and digital creators. We specialize in growing, funding, and scaling projects across the metaverse, from video games to emerging digital platforms.
            </p>
          </Fade>
          <Fade direction="up" delay={0.3} duration={0.5}>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              With contributions to projects totaling over 25M+ monthly active users and a growing network of high-impact partnerships, Elevon helps turn ambitious projects into lasting brands.
            </p>
          </Fade>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Fade direction="up" duration={0.5}>
              <span className="text-[#23719e] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">What We Do</span>
            </Fade>
            <Fade direction="up" delay={0.1} duration={0.5}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <Fade direction="up" delay={0} duration={0.5} className="md:col-span-7">
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#23719e]/10 flex items-center justify-center text-[#23719e] mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Full Project Acquisition</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">We acquire digital businesses and games outright, offering fair market value and long-term support to maximize the potential of your work.</p>
              </div>
            </Fade>

            <Fade direction="up" delay={0.1} duration={0.5} className="md:col-span-5">
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#23719e]/10 flex items-center justify-center text-[#23719e] mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Growth & Marketing</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Our in-house growth team builds data-driven campaigns designed to expand your community and increase monetization.</p>
              </div>
            </Fade>

            <Fade direction="up" delay={0.2} duration={0.5} className="md:col-span-5">
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#23719e]/10 flex items-center justify-center text-[#23719e] mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategic Partnerships</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">We work closely with developers and founders to unlock new revenue streams and scale operations.</p>
              </div>
            </Fade>

            <Fade direction="up" delay={0.3} duration={0.5} className="md:col-span-7">
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#23719e]/10 flex items-center justify-center text-[#23719e] mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Seamless Handover</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">From negotiation to transition, our team handles everything. You stay focused on what you do best.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="contact" className="py-24 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <Fade direction="up" duration={0.5}>
            <span className="text-[#23719e] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
            </Fade>
            <Fade direction="up" delay={0.1} duration={0.5}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Contact Us</h2>
            </Fade>
            <Fade direction="up" delay={0.2} duration={0.5}>
              <p className="text-zinc-400 text-sm">Send us a message and we&apos;ll get back to you shortly.</p>
            </Fade>
          </div>
          <Fade direction="up" delay={0.3} duration={0.5}>
            <SubmitForm />
          </Fade>
        </div>
      </section>

    </IntroLoader>
  );
}