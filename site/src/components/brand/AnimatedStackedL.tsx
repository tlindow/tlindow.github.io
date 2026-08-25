"use client";

import { motion, type SVGMotionProps } from "framer-motion";

export type AnimatedStackedLProps = SVGMotionProps<SVGSVGElement> & {
  /** Optional delay before the split animation triggers (seconds) */
  delay?: number;
  /** Whether to enable interactive hover spring expansion */
  interactive?: boolean;
};

export function AnimatedStackedL({
  delay = 0.4,
  interactive = true,
  className = "w-16 h-16 sm:w-20 sm:h-20",
  ...props
}: AnimatedStackedLProps) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="initial"
      animate="split"
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
      role="img"
      aria-label="Lindow Labs Stacked L Logo"
      {...props}
    >
      <defs>
        <linearGradient id="stacked-l-anim-cool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7BC47A" />
          <stop offset="50%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#7DD3FC" />
        </linearGradient>
      </defs>

      {/* Back L — Sprout to Mint Gradient Shadow L */}
      <motion.path
        d="M14 10 H22 V38 H44 V46 H14 Z"
        fill="url(#stacked-l-anim-cool)"
        variants={{
          initial: {
            x: 4,
            y: 4,
            opacity: 0,
            scale: 0.95,
          },
          split: {
            x: 0,
            y: 0,
            opacity: 0.75,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 90,
              damping: 13,
              mass: 0.8,
              delay,
            },
          },
          hover: {
            x: -2.5,
            y: -2.5,
            opacity: 0.9,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 18,
            },
          },
          tap: {
            x: 4,
            y: 4,
            opacity: 0.3,
            transition: {
              duration: 0.15,
            },
          },
        }}
      />

      {/* Front L — Solid Forest/Dark Ink Foreground L */}
      <motion.path
        d="M22 18 H30 V46 H52 V54 H22 Z"
        fill="#1F1D1A"
        variants={{
          initial: {
            x: -4,
            y: -4,
            scale: 0.95,
          },
          split: {
            x: 0,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 90,
              damping: 13,
              mass: 0.8,
              delay,
            },
          },
          hover: {
            x: 2.5,
            y: 2.5,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 18,
            },
          },
          tap: {
            x: -4,
            y: -4,
            transition: {
              duration: 0.15,
            },
          },
        }}
      />
    </motion.svg>
  );
}

export default AnimatedStackedL;
