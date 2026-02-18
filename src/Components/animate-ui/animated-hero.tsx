"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useIntro } from "./intro-loader";
import CurrentUsers from "../../app/CurrentUsers"; 

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function AnimatedHero() {
  const { phase, prefersReducedMotion } = useIntro();
  const reveal = phase === "revealing" || phase === "complete";
  const duration = prefersReducedMotion ? 0 : 0.7;
  const shortDuration = prefersReducedMotion ? 0 : 0.6;

  return (
    <section className="relative min-h-dvh w-full overflow-hidden flex items-center justify-center py-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#23719e]/[0.06] blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.06, 0.08, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#001E5D]/[0.1] blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.12, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Centered animated content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 w-full">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={
            reveal
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }
          }
          transition={{ duration, delay: reveal && !prefersReducedMotion ? 0.15 : 0, ease }}
        >
          <Image
            src="/elevon-transparent.svg"
            width={120}
            height={120}
            quality={100}
            alt="elevon logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            priority
          />
        </motion.div>

        {/* Animated Title */}
        <div className="relative">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={
              reveal
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }
            }
            transition={{ duration, delay: reveal && !prefersReducedMotion ? 0.3 : 0, ease }}
          >
            Elevon
          </motion.h1>

          <motion.div
            className="absolute -bottom-1 sm:-bottom-2 left-1/2 h-0.5 sm:h-1 bg-gradient-to-r from-[#23719e] to-[#184e6e] rounded-full"
            initial={{ width: 0, x: "-50%" }}
            animate={reveal ? { width: "60%", x: "-50%" } : { width: 0, x: "-50%" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: reveal && !prefersReducedMotion ? 0.7 : 0, ease }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 font-light tracking-wide text-center max-w-xs sm:max-w-md"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          animate={
            reveal
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: prefersReducedMotion ? 0 : 15 }
          }
          transition={{ duration: shortDuration, delay: reveal && !prefersReducedMotion ? 0.45 : 0, ease }}
        >
          Elevating the Next Generation of Metaverse Experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          animate={
            reveal
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: prefersReducedMotion ? 0 : 15 }
          }
          transition={{ duration: shortDuration, delay: reveal && !prefersReducedMotion ? 0.6 : 0, ease }}
        >
          <Link href="#contact" className="button w-full sm:w-auto text-center">
            Partner With Us
          </Link>
          <Link href="#about" className="button-ghost w-full sm:w-auto text-center">
            Learn More
          </Link>
        </motion.div>

        {/* Current Users Section */}
        <motion.div
          className="w-full max-w-4xl mt-8 sm:mt-12"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={
            reveal
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }
          }
          transition={{ duration: shortDuration, delay: reveal && !prefersReducedMotion ? 0.75 : 0, ease }}
        >
          <CurrentUsers />
        </motion.div>
      </div>
    </section>
  );
}