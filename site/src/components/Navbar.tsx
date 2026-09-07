"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { LinkedInIcon } from "@/components/brand/PartnerLogos";

export default function Navbar() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { scrollY } = useScroll();

  // Only appear once image is in place (avatar docks at scrollY = 150px, nav fades in from 150px to 180px)
  const navOpacity = useTransform(scrollY, [150, 180], [0, 1], { clamp: true });
  const pointerEvents = useTransform(scrollY, (y) => (y >= 165 ? "auto" : "none"));

  return (
    <motion.header
      style={{
        opacity: navOpacity,
        pointerEvents,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/80 transition-colors no-print"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center justify-between w-full">
          <a
            href={`${basePath}/`}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-none"
            aria-label="Tyler Lindow - Back to top"
          >
            <div
              id="navbar-avatar-target"
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0"
            >
              {/* Reserved layout slot for morphing avatar */}
              <div className="w-full h-full rounded-full opacity-0 pointer-events-none" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-bold text-sm sm:text-base text-foreground group-hover:text-indigo-dark transition-colors leading-tight font-mono">
                Tyler Lindow
              </span>
              <span className="text-[10px] text-muted font-mono leading-none hidden sm:inline">
                Fintech Product &amp; Engineering
              </span>
            </div>
          </a>

          {/* Right: Nav Links */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="https://www.linkedin.com/in/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-bold transition-all hover:scale-[1.02] active:scale-[0.98] bg-sand/80 hover:bg-sand text-foreground/90 hover:text-[#0A66C2] border border-border hover:border-[#0A66C2]/40 shadow-2xs"
              title="Follow Tyler Lindow on LinkedIn"
            >
              <LinkedInIcon size={14} className="text-[#0A66C2] shrink-0 group-hover:scale-105 transition-transform" />
              <span>Follow me on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
