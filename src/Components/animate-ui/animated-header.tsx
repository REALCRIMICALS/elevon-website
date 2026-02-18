"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useIntro } from "./intro-loader";

export function AnimatedHeader() {
  const { phase, prefersReducedMotion } = useIntro();
  const reveal = phase === "revealing" || phase === "complete";

  return (
    <motion.nav
      className="w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] max-w-7xl py-3 sm:py-4 px-4 sm:px-6 flex items-center mx-auto fixed top-2 sm:top-3 left-0 right-0 z-50"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
      animate={
        reveal
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: prefersReducedMotion ? 0 : -20 }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: reveal && !prefersReducedMotion ? 0.25 : 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/elevon-transparent.svg"
          width={100}
          height={100}
          quality={100}
          alt="elevon logo"
          className="size-7"
        />
        <span className="text-lg font-semibold select-none tracking-tight">
          Elevon
        </span>
      </Link>
      <div className="ml-auto flex gap-3 items-center">
        <motion.div
          initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 10 }}
          animate={
            reveal
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: prefersReducedMotion ? 0 : 10 }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: reveal && !prefersReducedMotion ? 0.5 : 0,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <Link href="#contact" className="button text-sm sm:text-base">
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
