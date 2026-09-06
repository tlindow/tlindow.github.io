"use client";

import { TinkerGlobeMark } from "@/components/brand/BeginnerMarks";

export default function Navbar() {
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
                Fintech Product-Eng Manager
              </span>
            </div>
          </a>

          {/* Right: Nav Links */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="https://tinker.beginner.work"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-bold transition-all hover:scale-[1.02] active:scale-[0.98] bg-sand/80 hover:bg-sand text-foreground/90 hover:text-indigo-dark border border-border hover:border-indigo/40 shadow-2xs"
              title="Signup to tinker"
            >
              <TinkerGlobeMark className="w-3.5 h-3.5 shrink-0 group-hover:scale-105 transition-transform" />
              <span>Signup to tinker</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
