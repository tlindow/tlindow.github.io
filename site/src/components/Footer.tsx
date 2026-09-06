"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-14 sm:py-20 px-4 sm:px-6 border-t border-border bg-surface-alt/70 no-print font-mono">
      <div className="mx-auto max-w-2xl text-center space-y-6">
        {/* Follow on LinkedIn CTA */}
        <div className="space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-dark block">
              Connect &amp; Follow
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-mono">
              Follow my work on LinkedIn
            </h3>
            <p className="text-xs sm:text-sm font-mono text-muted max-w-md mx-auto leading-relaxed">
              I share hands-on reflections on B2B fintech engineering, systems thinking, developer tooling, and shipping 0-to-1 products.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-mono font-bold transition-all hover:scale-[1.02] active:scale-[0.98] bg-[#0A66C2] hover:bg-[#004182] text-white shadow-xs w-full sm:w-auto"
              title="Follow Tyler Lindow on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={16}
                height={16}
                className="text-white shrink-0"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>Follow on LinkedIn</span>
            </a>
          </div>

          <div>
            <a
              href="mailto:tyler.lindow@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-mono font-medium transition-all hover:scale-[1.02] active:scale-[0.98] bg-surface hover:bg-surface-alt text-foreground border border-border shadow-2xs hover:border-indigo/40"
              title="Contact Tyler Lindow"
            >
              <Mail size={16} className="text-indigo-dark shrink-0" />
              <span>Contact me</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
