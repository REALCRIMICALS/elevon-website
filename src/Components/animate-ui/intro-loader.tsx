"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Image from "next/image";

type IntroPhase = "loading" | "revealing" | "complete";

interface IntroContextValue {
  phase: IntroPhase;
  prefersReducedMotion: boolean;
}

const IntroContext = createContext<IntroContextValue>({ phase: "loading", prefersReducedMotion: false });

export function useIntro() {
  return useContext(IntroContext);
}

interface IntroLoaderProps {
  children: React.ReactNode;
}

export function IntroLoader({ children }: IntroLoaderProps) {
  const [phase, setPhase] = useState<IntroPhase>("loading");
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    // Skip animation entirely if user prefers reduced motion
    if (prefersReducedMotion) {
      setPhase("complete");
      return;
    }
    
    // Shorter timings for mobile to prevent perceived lag
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const loadingDuration = isMobile ? 800 : 1200;
    const completeDuration = isMobile ? 1600 : 2400;
    
    // Logo holds at center, then start revealing page content
    const t1 = setTimeout(() => setPhase("revealing"), loadingDuration);
    // Overlay fully gone after animations settle
    const t2 = setTimeout(() => setPhase("complete"), completeDuration);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [prefersReducedMotion]);

  return (
    <IntroContext.Provider value={{ phase, prefersReducedMotion }}>
      {/* Page content — always in DOM, each element controls its own reveal via useIntro */}
      {children}

      {/* Overlay — sits on top, dissolves to reveal content underneath */}
      <AnimatePresence>
        {phase !== "complete" && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Black background — fades during reveal */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 1 }}
              animate={{ opacity: phase === "revealing" ? 0 : 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: phase === "revealing" && !prefersReducedMotion ? 0.1 : 0,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            />

            {/* Centered logo + name */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <motion.div
                className="flex flex-col items-center gap-2 sm:gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  phase === "loading"
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.96, y: -20 }
                }
                transition={{
                  duration: prefersReducedMotion ? 0 : (phase === "loading" ? 0.5 : 0.4),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.4,
                    delay: prefersReducedMotion ? 0 : 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <Image
                    src="/elevon-transparent.svg"
                    width={120}
                    height={120}
                    quality={100}
                    alt="elevon logo"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                    priority
                  />
                </motion.div>
                <motion.span
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.4,
                    delay: prefersReducedMotion ? 0 : 0.2,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  Elevon
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}
