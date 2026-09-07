"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  TrustedPartnersBar,
  EducationInstitutionsBar,
} from "@/components/brand/PartnerLogos";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import ScrollMorphAvatar from "@/components/animations/ScrollMorphAvatar";

export default function Home() {
  const [avatarReady, setAvatarReady] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between overflow-x-clip">
      {/* Scroll-animated profile picture bridging hero and navbar */}
      <ScrollMorphAvatar onReady={() => setAvatarReady(true)} />

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
          <header id="hero" className="min-h-[90vh] sm:min-h-[92vh] flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto space-y-6 sm:space-y-8 relative pt-28 sm:pt-32 pb-10 sm:pb-14 scroll-mt-20">
            {/* Typographic Product Title */}
            <div className="space-y-4 sm:space-y-6 text-center max-w-4xl mx-auto flex flex-col items-center">
              {/* Enlarged Profile Picture Centered Above ex-affirm, ex-founder */}
              <div
                id="hero-avatar-anchor"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shrink-0 relative"
              >
                <div
                  className={`w-full h-full rounded-full overflow-hidden ring-2 ring-indigo/25 shadow-md transition-opacity duration-300 ${
                    avatarReady ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/IMG_0548.jpeg`}
                    alt="Tyler Lindow"
                    className="w-full h-full object-cover object-[center_20%]"
                    loading="eager"
                  />
                </div>
              </div>

              <span className="text-xs sm:text-sm font-mono font-bold text-indigo-dark uppercase tracking-widest block">
                ex-Affirm, ex-founder
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.05] mx-auto">
                Elevating capital-tech
              </h1>

              <div className="pt-2">
                <p className="text-sm sm:text-base md:text-lg font-mono text-muted mx-auto">
                  top of funnel marketing and self service b2b portals
                </p>
              </div>
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
