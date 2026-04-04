"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT, VIEWPORT_DEFAULT } from "@/lib/motion";

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeUpSm: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

export type FadeInVariant = keyof typeof VARIANTS;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: FadeInVariant;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: Props) {
  const reduce = useReducedMotion();
  const v = VARIANTS[variant];
  const duration =
    variant === "scaleIn" ? DURATION.base : DURATION.relaxed;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_DEFAULT}
      variants={v}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
