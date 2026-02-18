"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "motion/react";

interface CountingNumberProps {
  number: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountingNumber({
  number,
  duration = 2,
  className,
  suffix = "",
  prefix = "",
  decimals = 0,
}: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(decimals));
    });
    return unsubscribe;
  }, [springValue, decimals]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
}
