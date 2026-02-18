"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShineProps {
  children: React.ReactNode;
  className?: string;
}

export function Shine({ children, className }: ShineProps) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      {children}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
