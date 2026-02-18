"use client";

import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Image from "next/image";

type IntroPhase = "loading" | "revealing" | "complete";

interface IntroContextValue {
  phase: IntroPhase;
  prefersReducedMotion: boolean;
}

const IntroContext = createContext<IntroContextValue>({ 
  phase: "loading", 
  prefersReducedMotion: false 
});

export function useIntro() {
  return useContext(IntroContext);
}

interface IntroLoaderProps {
  children: React.ReactNode;
}

export function IntroLoader({ children }: IntroLoaderProps) {
  const [phase, setPhase] = useState<IntroPhase>("loading");
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    setIsMounted(true);
    
    if (prefersReducedMotion) {
      setPhase("complete");
      return;
    }

    const isMobile = window.innerWidth < 768;
    
    const revealDelay = isMobile ? 700 : 1000;
    const completionDelay = isMobile ? 1400 : 2000;

    const t1 = setTimeout(() => setPhase("revealing"), revealDelay);
    const t2 = setTimeout(() => setPhase("complete"), completionDelay);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [prefersReducedMotion]);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <Image
          src="/elevon-transparent.svg"
          width={60}
          height={60}
          alt="loading"
          className="opacity-20"
        />
      </div>
    );
  }

  return (
    <IntroContext.Provider value={{ phase, prefersReducedMotion }}>
      <AnimatePresence mode="wait">
        {phase !== "complete" && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
            style={{ willChange: "opacity, transform" }}
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                style={{ willChange: "transform, opacity" }}
                transition={{
                  duration: 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Image
                  src="/elevon-transparent.svg"
                  width={120}
                  height={120}
                  quality={100}
                  alt="elevon logo"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  priority
                />
              </motion.div>
              
              <motion.span
                className="text-2xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Elevon
              </motion.span>
            </div>

            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-[#23719e]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {
       }
      <div 
        className={`transition-opacity duration-1000 ${
          phase === "loading" ? "opacity-0 invisible h-screen overflow-hidden" : "opacity-100 visible"
        }`}
      >
        {children}
      </div>
    </IntroContext.Provider>
  );
}