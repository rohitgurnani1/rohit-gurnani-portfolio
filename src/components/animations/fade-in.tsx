"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
  amount?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 24,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset =
    direction === "up"
      ? { y: amount }
      : direction === "down"
        ? { y: -amount }
        : { y: 0 };

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
