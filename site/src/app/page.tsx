"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isNavEstablished, setIsNavEstablished] = useState(false);
  const navTimerRef = useRef<NodeJS.Timeout | null>(null);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { logResumeView } = useAnalytics();

  const MAX_INITIAL_SCROLL = HERO_PIN_SCROLL_DISTANCE;

  // On page mount, if already scrolled down past initial threshold, establish nav immediately
  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollY >= MAX_INITIAL_SCROLL) {
      requestAnimationFrame(() => {
        setIsNavEstablished(true);
      });
    }
  }, [MAX_INITIAL_SCROLL]);

  // Keep scroll 100% connected to actual scroll, but prevent scrolling too far down
  // past MAX_INITIAL_SCROLL until the profile coin establishes in the navbar
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // While establishing, don't allow fast flicks to overshoot past the hero context
      if (!isNavEstablished && window.scrollY >= MAX_INITIAL_SCROLL && e.deltaY > 0) {
        e.preventDefault();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isNavEstablished && window.scrollY >= MAX_INITIAL_SCROLL) {
        const deltaY = touchStartY - e.touches[0].clientY;
        if (deltaY > 0) {
          e.preventDefault();
        }
      }
    };

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!isNavEstablished) {
        // Prevent scrolling too far down the page on initial scroll
        if (currentY > MAX_INITIAL_SCROLL) {
          window.scrollTo({ top: MAX_INITIAL_SCROLL });
        }

        // Once coin has reached the navbar, establish after a brief settling pause
        if (currentY >= MAX_INITIAL_SCROLL) {
          if (!navTimerRef.current) {
            navTimerRef.current = setTimeout(() => {
              setIsNavEstablished(true);
              navTimerRef.current = null;
            }, 200);
          }
        }
      } else if (currentY <= 10) {
        // Re-arm initial guard when user returns to the top of the page
        setIsNavEstablished(false);
        if (navTimerRef.current) {
          clearTimeout(navTimerRef.current);
          navTimerRef.current = null;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
      if (navTimerRef.current) {
        clearTimeout(navTimerRef.current);
      }
    };
  }, [isNavEstablished, MAX_INITIAL_SCROLL]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between overflow-x-clip">
      {/* Scroll-animated profile picture bridging hero and navbar */}
      <ScrollMorphAvatar />

      {/* ========================================================= */}
      {/* 1. TOP NAVIGATION BAR (FIXED, NO-PRINT) */}
      {/* ========================================================= */}
      <Navbar />

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
