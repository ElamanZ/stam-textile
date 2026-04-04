import type { Transition } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.22,
  base: 0.5,
  relaxed: 0.55,
  hero: 0.75,
  bg: 1.12,
} as const;

export const VIEWPORT_DEFAULT = {
  once: true,
  margin: "-48px 0px -12% 0px",
} as const;

export function transitionPreset(
  duration: number,
  delay = 0,
  reducedMotion?: boolean | null,
): Transition {
  if (reducedMotion) {
    return { duration: 0 };
  }
  return { duration, delay, ease: EASE_OUT };
}

export function staggerVisible(
  stagger: number,
  delayChildren: number,
  reducedMotion?: boolean | null,
): Transition {
  if (reducedMotion) {
    return { staggerChildren: 0, delayChildren: 0 };
  }
  return { staggerChildren: stagger, delayChildren };
}
