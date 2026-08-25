"use client";

import { motion } from "framer-motion";

interface Orb {
  className: string;
  x: [string, string];
  y: [string, string];
  scale: [number, number];
  duration: number;
}

const orbs: Orb[] = [
  {
    className: "top-[5%] left-[5%] w-[45%] h-[45%] bg-violet/15",
    x: ["0%", "3%"],
    y: ["0%", "4%"],
    scale: [1, 1.08],
    duration: 14,
  },
  {
    className: "top-[10%] right-[10%] w-[40%] h-[40%] bg-rose/15",
    x: ["0%", "-3%"],
    y: ["0%", "3%"],
    scale: [1, 1.06],
    duration: 16,
  },
  {
    className: "bottom-[15%] left-[20%] w-[35%] h-[35%] bg-peach/15",
    x: ["0%", "4%"],
    y: ["0%", "-3%"],
    scale: [1, 1.1],
    duration: 18,
  },
  {
    className: "bottom-[5%] right-[15%] w-[40%] h-[40%] bg-sky/15",
    x: ["0%", "-3%"],
    y: ["0%", "-4%"],
    scale: [1, 1.08],
    duration: 15,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${orb.className}`}
          style={{ willChange: "transform" }}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: orb.scale,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
