"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { resumeContact } from "@/data/resumeData";
import { useAnalytics, useExperiment } from "@/context/AnalyticsProvider";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { logRecruitClick, logOutboundClick } = useAnalytics();
  const { recruit_cta_label, recruit_cta_style } = useExperiment();

  const getCtaStyleClass = () => {
    switch (recruit_cta_style) {
      case "pulse_accent":
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark ring-2 ring-indigo/40 animate-pulse hover:animate-none shadow-sm";
      case "sprout_glow":
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark ring-2 ring-sky/60 shadow-md shadow-indigo/20";
      case "high_contrast":
        return "bg-foreground text-background hover:bg-foreground/90 ring-1 ring-foreground/20";
      case "forest_solid":
      default:
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark";
    }
  };

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

          {/* Right: Persistent Deploy Button & Quick Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={resumeContact.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logOutboundClick("github", resumeContact.github)}
              aria-label="GitHub Profile"
              className="p-1 text-muted hover:text-indigo-dark transition-colors"
              title="GitHub Profile"
            >
              <Github size={15} />
            </a>

            <a
              href={`mailto:${resumeContact.email}`}
              onClick={() => logOutboundClick("email", `mailto:${resumeContact.email}`)}
              aria-label="Email Tyler"
              className="p-1 text-muted hover:text-indigo-dark transition-colors"
              title={`Email Tyler (${resumeContact.email})`}
            >
              <Mail size={15} />
            </a>

            {/* Persistent Recruit Me Button linking to LinkedIn (A/B Instrumented) */}
            <a
              href={resumeContact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                logRecruitClick({
                  location: "navbar",
                  label: recruit_cta_label,
                  variant: `${recruit_cta_style}:${recruit_cta_label}`,
                })
              }
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono font-bold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] ${getCtaStyleClass()}`}
              title={`${recruit_cta_label} (Connect on LinkedIn)`}
            >
              <Linkedin size={13} />
              <span>{recruit_cta_label}</span>
            </a>
          </div>
        </div>

        {/* Lindow Labs Signature Cool Spectrum Bar */}
        <motion.div
          className="h-[2px] labs-rainbow-gradient origin-left opacity-85"
          style={{ scaleX }}
        />
      </div>
    </header>
  );
}
