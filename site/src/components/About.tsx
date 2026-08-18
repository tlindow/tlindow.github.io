"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            About Me
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-sky" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              I got into software development because I realized I had no idea how
              software worked. At the time I was doing research at the Field
              Museum in Chicago when I saw someone pull up a terminal and open an
              application that visitors would interact with. I went through an
              immersive coding program, dove into JavaScript and React, and never
              looked back. Building for the web scratches every itch I have
              &mdash; problem-solving, design, creativity, and the instant feedback
              of seeing something come to life in a browser.
            </p>
            <p>
              Based in San Diego (Stockton &amp; Golden Hill 92102), I&rsquo;m fascinated by
              how technology can genuinely connect and elevate local communities.
              As the founder of <em className="italic font-bold">beginner</em> and creator of{" "}
              <strong>tinker</strong> and <strong>hāpi</strong>, I build tools that
              empower diverse makers, healers, and builders to share their craft,
              mint web applications, and build sustainable independence.
            </p>
            <p>
              I&rsquo;m deeply interested in the intersection of human learning and
              artificial intelligence &mdash; exploring how cognitive models inform
              autonomous agent architecture, speaking at events like DEVx San Diego,
              and mentoring developers 1:1 to help them break through in their careers.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
          <StaggerItem>
            <Stat label="Ventures Shipped" value="3+" color="bg-rose-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Primary Stack" value="Next.js / TS" color="bg-sky-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Focus" value="Founder & Mentor" color="bg-mint-light" />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className={`text-center rounded-xl ${color} py-4 px-2 hover:shadow-md transition-shadow`}>
      <CountUp value={value} className="text-xl sm:text-2xl font-semibold text-foreground block" />
      <p className="mt-0.5 text-xs sm:text-sm text-muted">{label}</p>
    </div>
  );
}
