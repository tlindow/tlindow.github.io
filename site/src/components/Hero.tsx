"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  Printer,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GradientBeam from "@/components/animations/GradientBeam";
import { resumeContact } from "@/data/resumeData";

export default function Hero() {
  const [copiedContact, setCopiedContact] = useState(false);

  const handleCopyContact = async () => {
    const contactString = `${resumeContact.name}\n${resumeContact.title}\n${resumeContact.location} | ${resumeContact.phone} | ${resumeContact.email}\nLinkedIn: ${resumeContact.linkedin}\nGitHub: ${resumeContact.github}`;
    try {
      await navigator.clipboard.writeText(contactString);
      setCopiedContact(true);
      setTimeout(() => setCopiedContact(false), 2500);
    } catch {
      setCopiedContact(true);
      setTimeout(() => setCopiedContact(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 overflow-hidden border-b border-border/70">
      <div className="no-print">
        <FloatingOrbs />
        <GradientBeam />
      </div>

      <div className="w-full max-w-4xl mx-auto z-10 relative flex flex-col items-center text-center">
        {/* Avatar & Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 relative flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/IMG_0548.jpeg`}
            alt="Tyler Lindow"
            width={96}
            height={96}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-[center_20%] ring-4 ring-indigo/25 shadow-md"
            loading="eager"
          />
          <span className="absolute bottom-0 right-1 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-indigo-dark text-sand border-2 border-surface shadow-sm">
            Resume
          </span>
        </motion.div>

        {/* Full Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground font-normal tracking-tight"
        >
          {resumeContact.name}
        </motion.h1>

        {/* Title / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 text-base sm:text-lg md:text-xl font-sans font-medium text-indigo-dark max-w-2xl"
        >
          {resumeContact.title}
        </motion.p>

        {/* Contact Info Pills / Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 border border-border">
            <MapPin size={13} className="text-indigo-dark" />
            <span>{resumeContact.location}</span>
          </span>

          <a
            href={`tel:${resumeContact.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-surface hover:bg-surface-alt px-3 py-1 border border-border hover:border-indigo/40 transition-colors"
          >
            <Phone size={13} className="text-sky" />
            <span>{resumeContact.phone}</span>
          </a>

          <a
            href={`mailto:${resumeContact.email}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-surface hover:bg-surface-alt px-3 py-1 border border-border hover:border-indigo/40 transition-colors"
          >
            <Mail size={13} className="text-violet" />
            <span>{resumeContact.email}</span>
          </a>

          <a
            href={resumeContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-surface hover:bg-surface-alt px-3 py-1 border border-border hover:border-indigo/40 transition-colors"
          >
            <Linkedin size={13} className="text-[#0A66C2]" />
            <span>{resumeContact.linkedinDisplay}</span>
          </a>

          <a
            href={resumeContact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-surface hover:bg-surface-alt px-3 py-1 border border-border hover:border-indigo/40 transition-colors"
          >
            <Github size={13} className="text-foreground" />
            <span>{resumeContact.githubDisplay}</span>
          </a>
        </motion.div>

        {/* Primary Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 no-print"
        >
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-dark text-sand hover:bg-labs-primary-dark px-5 py-2.5 text-xs sm:text-sm font-mono font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <Printer size={15} />
            <span>Print / Save PDF</span>
          </button>

          <button
            type="button"
            onClick={handleCopyContact}
            className="inline-flex items-center gap-2 rounded-full bg-surface text-foreground hover:bg-surface-alt px-4 py-2.5 text-xs sm:text-sm font-mono font-medium border border-border hover:border-indigo/40 shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            {copiedContact ? (
              <>
                <Check size={15} className="text-sky" />
                <span>Contact Copied!</span>
              </>
            ) : (
              <>
                <Copy size={15} className="text-muted" />
                <span>Copy Contact</span>
              </>
            )}
          </button>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-surface text-foreground hover:bg-surface-alt px-4 py-2.5 text-xs sm:text-sm font-mono font-medium border border-border hover:border-indigo/40 shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Experience</span>
            <ArrowDown size={14} className="text-muted" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
