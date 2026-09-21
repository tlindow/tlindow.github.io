"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border/70">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-indigo-dark block">
            About
          </span>
          <h2 className="mt-2 font-mono text-3xl sm:text-4xl tracking-tight text-foreground font-bold">
            Company-scale fintech, chosen again
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted font-mono">
            <p>
              I practice Elevating Developer Fintech: top-of-funnel marketing and
              enterprise B2B portals, plus beginner and DevX work for educational
              institutions and the developer market. The through-lines are Marketing
              as Engineering Leadership, Building Product as System Architecture,
              and B2B Portals as Trust Stores.
            </p>
            <p>
              Affirm was the company-scale engineering management proof. I led the
              marketing site and the merchant portal — the surfaces where developers
              and merchants decide to trust the product. When the business direction
              shifted, I chose to stay and see the work through. The role was
              eliminated later.
            </p>
            <p>
              Beginner was a founder and DevX deep-dive, framed as fintech. I
              practiced fundraising through writing and met developers at
              founder-tech events.
            </p>
            <p>
              I chose company-scale fintech again. I am open to strategic advisory,
              technical leadership, and developer-first enterprise B2B.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
