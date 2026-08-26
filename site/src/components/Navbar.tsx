"use client";

import { Github } from "lucide-react";
import { resumeContact } from "@/data/resumeData";
import { useAnalytics } from "@/context/AnalyticsProvider";

export default function Navbar() {
  const { logRecruitClick } = useAnalytics();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 no-print">
      <div className="bg-background/90 backdrop-blur-md border-b border-border shadow-xs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          {/* Left: Avatar & Identity */}
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || "/"}`}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/IMG_0548.jpeg`}
              alt="Tyler Lindow"
              width={36}
              height={36}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover object-[center_20%] ring-2 ring-border group-hover:ring-indigo/50 transition-all shrink-0"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-foreground group-hover:text-indigo-dark transition-colors leading-tight font-mono">
                Tyler Lindow
              </span>
              <span className="text-[10px] text-muted font-mono leading-none hidden sm:inline">
                Staff B2B Product Manager
              </span>
            </div>
          </a>

          {/* Right: Persistent Deploy Button */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Persistent Build CTA Button linking to GitHub */}
            <a
              href={resumeContact.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                logRecruitClick({
                  location: "navbar",
                  label: "Build with me",
                  variant: "beginner_green:Build with me",
                })
              }
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono font-bold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] bg-[#2d5a3d] text-[#f5f3ef] hover:bg-[#234731] ring-1 ring-[#2d5a3d]/30"
              title="Build with me (Tyler's GitHub)"
            >
              <Github size={13} />
              <span>Build with me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
