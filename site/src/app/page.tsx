"use client";

import { useEffect } from "react";
import { useScroll, useMotionValue, useSpring } from "framer-motion";
import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  TrustedPartnersBar,
  EducationInstitutionsBar,
} from "@/components/brand/PartnerLogos";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import ScrollMorphAvatar, {
  HERO_PIN_SCROLL_DISTANCE,
} from "@/components/animations/ScrollMorphAvatar";
import { useAnalytics } from "@/context/AnalyticsProvider";

export default function Home() {
  const { scrollY } = useScroll();
  const rawProgress = useMotionValue(0);
  const avatarProgress = useSpring(rawProgress, {
    stiffness: 220,
    damping: 24,
    mass: 0.4,
  });

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { logResumeView } = useAnalytics();

  // If page loads already scrolled down, initialize progress appropriately
  useEffect(() => {
    if (typeof window !== "undefined") {
      const p = Math.min(Math.max(window.scrollY / HERO_PIN_SCROLL_DISTANCE, 0), 1);
      rawProgress.set(p);
      avatarProgress.jump(p);
    }
  }, [rawProgress, avatarProgress]);

  // Synchronize avatar & navbar progress smoothly with scroll position:
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latestY) => {
      const p = Math.min(Math.max(latestY / HERO_PIN_SCROLL_DISTANCE, 0), 1);
      rawProgress.set(p);
    });

    return () => unsubscribe();
  }, [scrollY, rawProgress]);

  const handleReturnToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between overflow-x-clip">
      {/* Scroll-animated profile picture bridging hero and navbar */}
      <ScrollMorphAvatar progress={avatarProgress} onReturnToHero={handleReturnToHero} />

      {/* ========================================================= */}
      {/* 1. TOP NAVIGATION BAR (FIXED, NO-PRINT) */}
      {/* ========================================================= */}
      <Navbar progress={avatarProgress} onReturnToHero={handleReturnToHero} />

      {/* ========================================================= */}
      {/* 2. MAIN VIEW */}
      {/* ========================================================= */}
      <div className="no-print w-full">
        <main className="w-full">
          {/* FULL PAGE HERO HEADER SECTION */}
          <header
            id="hero"
            className="flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto space-y-6 sm:space-y-8 relative pt-28 sm:pt-32 pb-12 sm:pb-16 scroll-mt-20"
          >
            {/* Typographic Product Title */}
            <div className="space-y-4 sm:space-y-6 text-center max-w-4xl mx-auto flex flex-col items-center">
              {/* Enlarged Profile Picture Slot Centered Above ex-affirm, ex-founder */}
              <div
                id="hero-avatar-anchor"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shrink-0 relative"
              />

              <span className="text-xs sm:text-sm font-mono font-bold text-indigo-dark uppercase tracking-widest block">
                ex-Affirm, ex-founder
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.05] mx-auto">
                <span className="block">Elevating</span>
                <span className="block">capital-tech</span>
              </h1>

              <div className="pt-2">
                <p className="text-sm sm:text-base md:text-lg font-mono text-muted mx-auto">
                  Top of funnel developer marketing and enterprise B2B portals
                </p>
              </div>
            </div>

            {/* Primary Action Trigger: Resume */}
            <div className="pt-2 flex justify-center">
              <a
                href={`${basePath}/resume`}
                onClick={() => logResumeView("hero_cta")}
                className="inline-flex items-center gap-2 rounded-xl bg-surface hover:bg-surface-alt text-foreground border border-border px-5 py-2.5 text-xs sm:text-sm font-mono font-bold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="Read Tyler Lindow's resume"
              >
                <FileText size={15} className="shrink-0" />
                <span>Read resume</span>
              </a>
            </div>

            {/* Trusted Partners (Previous Employers) */}
            <div id="trusted-partners" className="w-full scroll-mt-24">
              <TrustedPartnersBar />
            </div>

            {/* Educational Institutions */}
            <div id="education" className="w-full scroll-mt-24">
              <EducationInstitutionsBar />
            </div>
          </header>

          {/* ======================================================= */}
          {/* 2. VALUE PROPOSITION: WHAT YOU GET IF YOU BUY ME       */}
          {/* ======================================================= */}
          <WhatYouGet />
        </main>
      </div>

      {/* ========================================================= */}
      {/* 4. FOOTER WITH COMPLETE DIRECTORY                         */}
      {/* ========================================================= */}
      <Footer />
    </div>
  );
}
