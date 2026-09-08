"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { LinkedInIcon } from "@/components/brand/PartnerLogos";
import { HERO_PIN_SCROLL_DISTANCE } from "@/components/animations/ScrollMorphAvatar";

interface NavbarProps {
  progress?: MotionValue<number>;
  contactProgress?: MotionValue<number>;
  isQuickUp?: MotionValue<number>;
  onReturnToHero?: () => void;
}

export default function Navbar({
  progress,
  contactProgress,
  isQuickUp,
  onReturnToHero,
}: NavbarProps = {}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { scrollY } = useScroll();

  // Fallback for other routes (e.g. /resume, /blog) where custom progress isn't passed
  const fallbackScrollOpacity = useTransform(
    scrollY,
    [HERO_PIN_SCROLL_DISTANCE - 40, HERO_PIN_SCROLL_DISTANCE],
    [0, 1],
    { clamp: true }
  );

  const fallbackContactProgress = useTransform(scrollY, () => 0);
  const activeContactProgress = contactProgress || fallbackContactProgress;

  const fallbackQuickUp = useTransform(scrollY, () => 0);
  const activeQuickUp = isQuickUp || fallbackQuickUp;

  // When progress is supplied from page.tsx:
  // p1: hero progress [0, 1] (fades in as user scrolls away from hero, 0.55 -> 1.0)
  // p2: contact progress [0, 1] (fades out as coin departs navbar towards contact section)
  // quickUp: [0, 1] (when scrolling up quickly, completely hide the navbar)
  const progressOpacity = useTransform(
    [progress || scrollY, activeContactProgress, activeQuickUp],
    (values: number[]) => {
      if (!progress) return 1;
      const p1 = values[0] ?? 0;
      const p2 = values[1] ?? 0;
      const quickUp = values[2] ?? 0;

      // Skip nav completely when scrolling up quickly
      if (quickUp > 0.5) return 0;

      const heroAlpha = Math.min(Math.max((p1 - 0.55) / 0.45, 0), 1);
      const contactFade = Math.max(1 - p2 / 0.7, 0);
      return heroAlpha * contactFade;
    }
  );

  const navOpacity = progress ? progressOpacity : fallbackScrollOpacity;
  const pointerEvents = useTransform(navOpacity, (o) => (o > 0.1 ? "auto" : "none"));
  const visibility = useTransform(navOpacity, (o) => (o > 0 ? "visible" : "hidden"));

  return (
    <motion.header
      style={{
        opacity: navOpacity,
        pointerEvents,
        visibility,
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
            onClick={(e) => {
              e.preventDefault();
              if (onReturnToHero) {
                onReturnToHero();
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
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
