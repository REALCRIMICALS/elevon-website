"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variant } from "motion/react";
import { cn } from "@/lib/utils";

type FadeDirection = "up" | "down" | "left" | "right";

interface FadeProps {
  children: React.ReactNode;
  className?: string;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  amount?: number;
}

const directionOffsets: Record<FadeDirection, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
};

export function Fade({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  margin = "0px 0px -80px 0px",
  amount = 0.3,
}: FadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as any, amount });
  const offset = directionOffsets[direction];

  const hidden: Variant = {
    opacity: 0,
    ...(offset.x !== undefined && { x: offset.x }),
    ...(offset.y !== undefined && { y: offset.y }),
    filter: "blur(4px)",
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
