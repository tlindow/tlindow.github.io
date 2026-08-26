"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";
import { resumeContact } from "@/data/resumeData";
import { useAnalytics, useExperiment } from "@/context/AnalyticsProvider";

export default function CheckoutDrawer() {
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { logRecruitClick } = useAnalytics();
  const { recruit_cta_label, recruit_cta_style } = useExperiment();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const section = document.getElementById("launch-wallet");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section is in view once its top enters the upper portion of the viewport
      const inView = rect.top <= windowHeight * 0.7 && rect.bottom >= 120;
      setIsSectionInView(inView);

      // Compute scroll progress through the launch wallet section
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const currentScroll = window.scrollY + windowHeight;

      const startOffset = sectionTop + 80;
      const totalScrollable = Math.max(1, sectionHeight);
      const rawProgress = (currentScroll - startOffset) / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Format dynamic GMV tally based on scroll progress
  const getAccumulatedGMVText = (progress: number) => {
    if (progress < 0.15) return "$400K GMV";
    if (progress < 0.4) return "$10.4M+ GMV";
    if (progress < 0.7) return "$110.4M+ GMV";
    return "$1.11B+ GMV";
  };

  const getCtaStyleClass = () => {
    switch (recruit_cta_style) {
      case "pulse_accent":
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark ring-2 ring-indigo/40 animate-pulse hover:animate-none shadow-sm";
      case "sprout_glow":
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark ring-2 ring-sky/60 shadow-md shadow-indigo/20";
      case "high_contrast":
        return "bg-foreground text-background hover:bg-foreground/90 ring-1 ring-foreground/20";
      case "forest_solid":
      default:
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark";
    }
  };

  return (
    <AnimatePresence>
      {isSectionInView && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          className="fixed bottom-0 left-0 right-0 z-40 no-print font-mono"
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border shadow-2xl">
            {/* Rainbow accent line that fills as you scroll */}
            <div className="h-[2px] w-full bg-border/40 relative overflow-hidden">
              <div
                className="h-full labs-rainbow-gradient transition-all duration-150"
                style={{ width: `${Math.max(8, scrollProgress * 100)}%` }}
              />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-end gap-3 sm:gap-4">
              {/* Dynamic Accumulating GMV & Primary CTA in Final Right Corner */}
              <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
                <div className="flex items-baseline gap-1 sm:gap-1.5 text-right">
                  <span className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider hidden sm:inline">
                    Attributed GMV:
                  </span>
                  <motion.span
                    key={getAccumulatedGMVText(scrollProgress)}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs sm:text-base md:text-lg font-black font-mono text-indigo-dark tracking-tight whitespace-nowrap"
                  >
                    {getAccumulatedGMVText(scrollProgress)}
                  </motion.span>
                </div>

                <a
                  href={resumeContact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    logRecruitClick({
                      location: "checkout_drawer",
                      label: recruit_cta_label,
                      variant: `${recruit_cta_style}:${recruit_cta_label}`,
                    })
                  }
                  className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap ${getCtaStyleClass()}`}
                  title="Recruit Tyler — connect on LinkedIn"
                >
                  <Linkedin size={15} />
                  <span>{recruit_cta_label}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
