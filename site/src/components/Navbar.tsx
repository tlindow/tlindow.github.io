"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work With Me", href: "#mentoring" },
  { label: "Ventures", href: "#portfolio" },
  { label: "Speaking", href: "#speaking" },
  { label: "Content", href: "#content" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          <a
            href="#"
            className="font-display font-semibold text-lg sm:text-xl tracking-tight text-foreground"
          >
            Tyler Lindow
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm font-medium text-muted hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-violet rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-muted hover:text-foreground"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-violet via-indigo to-sky origin-left"
          style={{ scaleX }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-b border-border bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <ul className="flex flex-col py-3 px-4 gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 px-3 rounded-lg text-[15px] font-medium text-muted hover:text-foreground hover:bg-surface-alt transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
