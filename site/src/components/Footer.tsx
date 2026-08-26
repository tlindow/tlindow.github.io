"use client";

import { useState } from "react";
import { FileText, Cpu } from "lucide-react";
import { resumeContact } from "@/data/resumeData";

export default function Footer() {
  const [revealPhone, setRevealPhone] = useState(false);

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-border bg-surface-alt/70 no-print">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          {/* Contact summary */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="text-foreground font-medium">{resumeContact.name}</span>
            <span>&bull;</span>
            <span>{resumeContact.location}</span>
            <span>&bull;</span>
            <a href={`mailto:${resumeContact.email}`} className="hover:text-foreground underline underline-offset-2">
              {resumeContact.email}
            </a>
            <span>&bull;</span>
            {revealPhone ? (
              <a href={`tel:${resumeContact.phone.replace(/[^0-9]/g, "")}`} className="hover:text-foreground underline underline-offset-2">
                {resumeContact.phone}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setRevealPhone(true)}
                className="hover:text-foreground underline underline-offset-2 cursor-pointer font-mono"
                title="Click to reveal phone number"
              >
                {resumeContact.phoneObscured || "(650) •••-••••"}
              </button>
            )}
          </div>

          {/* Machine knowledge endpoints */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground underline underline-offset-2 transition-colors"
            >
              <FileText size={12} className="text-indigo-dark" />
              <span>llms.txt</span>
            </a>
            <span>&bull;</span>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/llms-full.txt`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground underline underline-offset-2 transition-colors"
            >
              <FileText size={12} className="text-sky" />
              <span>llms-full.txt</span>
            </a>
            <span>&bull;</span>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/mcp.json`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground underline underline-offset-2 transition-colors"
            >
              <Cpu size={12} className="text-sky" />
              <span>mcp.json</span>
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-muted/80">
          <p>&copy; {new Date().getFullYear()} Tyler Lindow &middot; Senior Technical Leader &middot; Engineering Management &amp; DevRel</p>
          <p>San Diego, CA &middot; Built with Next.js, React, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
