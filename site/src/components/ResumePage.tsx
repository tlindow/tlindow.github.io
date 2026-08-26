"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { ChevronDown, FileText, CheckCircle2 } from "lucide-react";

export interface ResumePageProps {
  pageNumber: number;
  totalPages?: number;
  headerTitle?: string;
  headerSubtitle?: string;
  showHeaderBadge?: boolean;
  showFooterBadge?: boolean;
  footerHint?: string;
  topOffsetRem?: number;
  bottomOffsetRem?: number;
  zIndex?: number;
  children: ReactNode;
  className?: string;
}

export default function ResumePage({
  pageNumber,
  totalPages = 2,
  headerTitle,
  headerSubtitle,
  showHeaderBadge = pageNumber > 1,
  showFooterBadge = true,
  footerHint,
  topOffsetRem = pageNumber === 1 ? 1.5 : 2.5,
  bottomOffsetRem = 1.5,
  zIndex = pageNumber * 10,
  children,
  className = "",
}: ResumePageProps) {
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === totalPages;
  const pageRef = useRef<HTMLDivElement>(null);

  // Measure element height and update CSS custom property --page-height
  // This ensures pages taller than the viewport scroll naturally all the way
  // to their bottom before sticking and allowing the next page to stack over them.
  useEffect(() => {
    const el = pageRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const updateHeight = () => {
      const height = el.getBoundingClientRect().height;
      if (height > 0) {
        el.style.setProperty("--page-height", `${height}px`);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(() => updateHeight());
    observer.observe(el);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className={`resume-page-wrapper sticky transition-all duration-300 print:static print:top-auto print:m-0 print:p-0 ${
        !isFirstPage ? "mt-8 sm:mt-14" : ""
      }`}
      style={{
        zIndex,
        top: `min(${topOffsetRem}rem, calc(100dvh - var(--page-height, 100vh) - ${bottomOffsetRem}rem))`,
      }}
      data-page-number={pageNumber}
    >
      <article
        className={`resume-page-sheet resume-paper rounded-3xl bg-surface border border-border p-6 sm:p-16 font-mono text-foreground leading-relaxed selection:bg-indigo-light relative overflow-visible print:p-0 print:m-0 print:border-none print:shadow-none print:rounded-none ${
          pageNumber > 1
            ? "shadow-[0_-12px_36px_rgba(0,0,0,0.09),0_20px_40px_rgba(0,0,0,0.06)] ring-1 ring-border/60"
            : "shadow-md hover:shadow-lg"
        } ${className}`}
      >
        {/* Web-Only Top Page Badge / Continuation Header (Pages 2+) */}
        {showHeaderBadge && (
          <div className="no-print mb-4 pb-3 border-b border-border-subtle flex items-center justify-between text-xs font-mono select-none">
            <div className="flex items-center gap-2 text-muted">
              <span className="w-2 h-2 rounded-full bg-indigo-dark shrink-0" />
              <span className="font-bold text-foreground tracking-tight">
                {headerTitle || "Tyler Lindow"}
              </span>
              {headerSubtitle && (
                <>
                  <span className="text-border select-none">•</span>
                  <span className="text-muted hidden sm:inline">{headerSubtitle}</span>
                </>
              )}
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-light text-indigo-dark font-semibold text-[11px] border border-indigo/15">
              <FileText size={11} />
              <span>
                Page {pageNumber} of {totalPages}
              </span>
            </div>
          </div>
        )}

        {/* Page Main Content */}
        <div className="resume-page-content">{children}</div>

        {/* Web-Only Bottom Page Navigation / Stacking Hint */}
        {showFooterBadge && (
          <footer className="no-print mt-6 pt-3.5 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted select-none">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted">
                Tyler Lindow &bull; Page {pageNumber} of {totalPages}
              </span>
            </div>

            {isFirstPage ? (
              <div className="flex items-center gap-1.5 text-indigo-dark font-semibold text-[11px] animate-pulse">
                <span>{footerHint || "Scroll down for Page 2"}</span>
                <ChevronDown size={13} className="text-indigo-dark animate-bounce" />
              </div>
            ) : isLastPage ? (
              <div className="flex items-center gap-1 text-indigo-dark font-medium text-[11px]">
                <CheckCircle2 size={12} className="text-sky" />
                <span>End of Resume</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-indigo-dark font-semibold text-[11px]">
                <span>Scroll for Next Page</span>
                <ChevronDown size={13} />
              </div>
            )}
          </footer>
        )}
      </article>
    </div>
  );
}
