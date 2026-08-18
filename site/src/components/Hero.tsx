"use client";

import Image from "next/image";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GradientBeam from "@/components/animations/GradientBeam";
import AnimatedText from "@/components/animations/AnimatedText";
import MagneticButton from "@/components/animations/MagneticButton";
import AISearchBar from "@/components/AISearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-14 sm:pt-16 overflow-hidden">
      <FloatingOrbs />
      <GradientBeam />

      <div className="max-w-3xl text-center">
        <motion.div
          className="mb-6 sm:mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-br from-violet/30 via-indigo/20 to-sky/30 blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-violet/20 ring-offset-4 ring-offset-background shadow-lg">
              <Image
                src="/IMG_0548.jpeg"
                alt="Tyler Lindow"
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Founder &middot; Software Developer &middot; Mentor
        </motion.p>

        <AnimatedText
          text="Hey, I'm Tyler."
          as="h1"
          className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-foreground"
          delay={0.5}
        />

        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-xl leading-relaxed text-muted max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          I build products for the web, mentor developers, and explore where
          human creativity meets artificial intelligence. Founder of{" "}
          <em className="italic">beginner</em> and maker of hāpi. Based in San
          Diego.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <MagneticButton
            href="#mentoring"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
          >
            Work With Me
          </MagneticButton>
          <div className="flex gap-3 w-full sm:w-auto">
            <MagneticButton
              href="https://www.linkedin.com/in/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              <Linkedin size={16} />
              <span className="sm:inline">LinkedIn</span>
            </MagneticButton>
            <MagneticButton
              href="https://github.com/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              <Github size={16} />
              <span className="sm:inline">GitHub</span>
            </MagneticButton>
            <MagneticButton
              href="mailto:tyler.lindow@gmail.com"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              <Mail size={16} />
              <span className="sm:inline">Email</span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* AI Search Assistant Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25 }}
        >
          <AISearchBar />
        </motion.div>

        <motion.a
          href="#about"
          className="inline-flex items-center gap-2 mt-8 sm:mt-12 text-sm text-muted hover:text-foreground transition-colors"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>

      {/* Gradient fade into the next section for a seamless scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
