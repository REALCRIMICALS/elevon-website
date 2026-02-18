"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
}

export function Tilt({
  children,
  className,
  maxTilt = 8,
  scale = 1.02,
  perspective = 1000,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * maxTilt * 2;
    const rotateY = (x - 0.5) * maxTilt * 2;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        scale: isHovering ? scale : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
