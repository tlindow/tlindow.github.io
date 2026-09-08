"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValue } from "framer-motion";
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
  const avatarProgress = useMotionValue(0);
  const isHardScrolledRef = useRef(false);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { logResumeView } = useAnalytics();

  // If page loads already scrolled down, dock avatar immediately
  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollY >= HERO_PIN_SCROLL_DISTANCE) {
      isHardScrolledRef.current = true;
      avatarProgress.set(1);
    }
  }, [avatarProgress]);

  // Synchronize avatar & navbar progress with scroll position:
  // - If at the top (scrollY <= 10): restore avatar to hero anchor
  // - If hard scrolled: keep avatar docked in navbar
  // - Otherwise (gentle scroll): 1:1 direct smooth tracking
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latestY) => {
      if (latestY <= 10) {
        isHardScrolledRef.current = false;
        avatarProgress.set(0);
        return;
      }

      if (isHardScrolledRef.current) {
        avatarProgress.set(1);
        return;
      }

      const p = Math.min(Math.max(latestY / HERO_PIN_SCROLL_DISTANCE, 0), 1);
      avatarProgress.set(p);
    });

    return () => unsubscribe();
  }, [scrollY, avatarProgress]);

  // Detect hard scroll:
  // On a fast flick or large scroll delta, skip animation, place profile in nav immediately,
  // and allow the page to flow completely freely with native inertia (no preventDefault, passive listeners).
  useEffect(() => {
    const HARD_SCROLL_DELTA = 35; // Pixels per wheel event to trigger hard scroll bypass

    const handleWheel = (e: WheelEvent) => {
      const normalizedDelta = e.deltaMode === 1 ? e.deltaY * 30 : e.deltaY;

      // Scrolling back up resets hard scroll mode so upward gentle scroll works symmetrically
      if (normalizedDelta < 0) {
        isHardScrolledRef.current = false;
        return;
      }

      if (isHardScrolledRef.current || window.scrollY >= HERO_PIN_SCROLL_DISTANCE) return;

      if (normalizedDelta >= HARD_SCROLL_DELTA) {
        // Hard scroll detected: place profile in nav immediately and allow native flow
        isHardScrolledRef.current = true;
        avatarProgress.set(1);
      }
    };

    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = performance.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;

      if (deltaY < 0) {
        isHardScrolledRef.current = false;
        return;
      }

      if (isHardScrolledRef.current || window.scrollY >= HERO_PIN_SCROLL_DISTANCE) return;

      const deltaTime = performance.now() - touchStartTime;
      if (deltaY > 40 || (deltaTime > 0 && deltaY / deltaTime > 0.4)) {
        isHardScrolledRef.current = true;
        avatarProgress.set(1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [avatarProgress]);

  const handleReturnToHero = () => {
    isHardScrolledRef.current = false;
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
                  Top of funnel marketing and self-service B2B portals
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
