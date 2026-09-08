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

  const rawContactProgress = useMotionValue(0);
  const contactProgress = useSpring(rawContactProgress, {
    stiffness: 220,
    damping: 24,
    mass: 0.4,
  });

  const rawQuickUp = useMotionValue(0);
  const isQuickUp = useSpring(rawQuickUp, {
    stiffness: 280,
    damping: 28,
    mass: 0.3,
  });

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { logResumeView } = useAnalytics();

  const computeContactProgress = (latestY: number) => {
    if (typeof window === "undefined") return 0;
    const contactEl = document.getElementById("contact-avatar-target");
    if (!contactEl) return 0;
    const rect = contactEl.getBoundingClientRect();
    const contactAbsoluteY = rect.top + window.scrollY;
    // Contact section reaches the middle of the viewport when:
    // window.scrollY = contactAbsoluteY - window.innerHeight * 0.5
    const targetMidScrollY = contactAbsoluteY - window.innerHeight * 0.5;
    const transitDistance = Math.min(320, window.innerHeight * 0.45);
    const startScrollY = targetMidScrollY - transitDistance;

    if (latestY <= startScrollY) return 0;
    if (latestY >= targetMidScrollY) return 1;
    return (latestY - startScrollY) / transitDistance;
  };

  // If page loads already scrolled down, initialize progress appropriately
  useEffect(() => {
    if (typeof window !== "undefined") {
      const heroP = Math.min(Math.max(window.scrollY / HERO_PIN_SCROLL_DISTANCE, 0), 1);
      rawProgress.set(heroP);
      avatarProgress.jump(heroP);

      requestAnimationFrame(() => {
        const contactP = computeContactProgress(window.scrollY);
        rawContactProgress.set(contactP);
        contactProgress.jump(contactP);
      });
    }
  }, [rawProgress, avatarProgress, rawContactProgress, contactProgress]);

  // Synchronize avatar & navbar progress smoothly with scroll position:
  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let lastTime = performance.now();

    const unsubscribe = scrollY.on("change", (latestY) => {
      const now = performance.now();
      const dt = now - lastTime;
      const dy = latestY - lastY;
      lastY = latestY;
      lastTime = now;

      // Detect high-velocity upward scroll
      if (dt > 0) {
        const velocity = (dy / dt) * 1000;
        if (velocity < -400) {
          rawQuickUp.set(1);
        } else if (velocity > 120) {
          rawQuickUp.set(0);
        }
      }

      if (latestY <= 15) {
        rawQuickUp.set(0);
      }

      const heroP = Math.min(Math.max(latestY / HERO_PIN_SCROLL_DISTANCE, 0), 1);
      rawProgress.set(heroP);

      const contactP = computeContactProgress(latestY);
      rawContactProgress.set(contactP);
    });

    return () => unsubscribe();
  }, [scrollY, rawProgress, rawContactProgress, rawQuickUp]);

  // Wheel and touch listeners to instantly detect quick upward flicks
  useEffect(() => {
    let idleTimer: NodeJS.Timeout | null = null;

    const triggerQuickUp = () => {
      rawQuickUp.set(1);
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        if (window.scrollY > 20) {
          rawQuickUp.set(0);
        }
      }, 700);
    };

    const cancelQuickUp = () => {
      rawQuickUp.set(0);
      if (idleTimer) {
        clearTimeout(idleTimer);
        idleTimer = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const normalizedDelta = e.deltaMode === 1 ? e.deltaY * 30 : e.deltaY;
      if (normalizedDelta < -20) {
        triggerQuickUp();
      } else if (normalizedDelta > 15) {
        cancelQuickUp();
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
      const deltaTime = performance.now() - touchStartTime;

      if (deltaY < -20 || (deltaTime > 0 && deltaY / deltaTime < -0.3)) {
        triggerQuickUp();
      } else if (deltaY > 15) {
        cancelQuickUp();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [rawQuickUp]);

  // Handle window resizing or dynamic layout changes
  useEffect(() => {
    const handleLayoutChange = () => {
      if (typeof window !== "undefined") {
        const contactP = computeContactProgress(window.scrollY);
        rawContactProgress.set(contactP);
      }
    };

    window.addEventListener("resize", handleLayoutChange);
    const observer = new ResizeObserver(handleLayoutChange);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("resize", handleLayoutChange);
      observer.disconnect();
    };
  }, [rawContactProgress]);

  const handleReturnToHero = () => {
    rawQuickUp.set(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between overflow-x-clip">
      {/* Scroll-animated profile picture bridging hero, navbar, and contact section */}
      <ScrollMorphAvatar
        progress={avatarProgress}
        contactProgress={contactProgress}
        isQuickUp={isQuickUp}
        onReturnToHero={handleReturnToHero}
      />

      {/* ========================================================= */}
      {/* 1. TOP NAVIGATION BAR (FIXED, NO-PRINT) */}
      {/* ========================================================= */}
      <Navbar
        progress={avatarProgress}
        contactProgress={contactProgress}
        isQuickUp={isQuickUp}
        onReturnToHero={handleReturnToHero}
      />

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
                  With top of funnel marketing and enterprise B2B portals
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
