"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type SplitType = "chars" | "words";

interface SplittingTextProps {
  text: string;
  className?: string;
  splitBy?: SplitType;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplittingText({
  text,
  className,
  splitBy = "words",
  staggerDelay = 0.04,
  duration = 0.4,
  once = true,
  as: Tag = "span",
  charClassName,
}: SplittingTextProps & { charClassName?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -50px 0px" });

  const items = splitBy === "chars" ? text.split("") : text.split(" ");

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn("inline-flex flex-wrap", className)}>
      {items.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          className={cn("inline-block", charClassName)}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 20, filter: "blur(8px)" }
          }
          transition={{
            duration,
            delay: i * staggerDelay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {item}
          {splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
