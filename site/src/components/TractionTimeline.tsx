"use client";

import React from "react";
import {
  AffirmLogo,
  GalvanizeLogo,
  TheTechLogo,
  CHMLogo,
} from "@/components/brand/PartnerLogos";
import { BeginnerSeedMark } from "@/components/brand/BeginnerMarks";

export interface GMVLineItem {
  id: string;
  year: string;
  title: string;
  gmv?: string;
  users: string;
  ownership: string;
  description: string;
}

export interface BeginnerStyleCard {
  id: string;
  companyName: string;
  wordmark: string;
  cardKind: string;
  cardNumber: string;
  holderName: string;
  frontBgStyle: React.CSSProperties;
  boxShadow: string;
  borderClass: string;
  trimColor: string;
  brandMark: React.ReactNode;
  linkedinUrl: string;
  totalVolumeSummary: string;
  lineItems: GMVLineItem[];
}

export const companyCards: BeginnerStyleCard[] = [
  // 1. Computer History Museum (2017) — Plum / Violet
  {
    id: "chm",
    companyName: "Computer History Museum",
    wordmark: "chm",
    cardKind: "",
    cardNumber: "•••• 2017",
    holderName: "Tyler Lindow",
    frontBgStyle: { background: "#ffffff" },
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    borderClass: "border-purple-200",
    trimColor: "#C4B5FD",
    brandMark: <CHMLogo className="h-5 w-auto" />,
    linkedinUrl: "https://www.linkedin.com/in/tlindow/details/experience/",
    totalVolumeSummary: "Education & Physical Computing",
    lineItems: [
      {
        id: "chm-1",
        year: "2017",
        title: "Design Code Build & Physical Computing Event Support",
        users: "500+ DEVs",
        ownership: "Workshop Instructor",
        description:
          "Taught software engineering and physical computing triggers (Rube Goldberg machines) to ~500 Silicon Valley students and Title I school cohorts.",
      },
    ],
  },

  // 2. The Tech Interactive (2017 - 2018) — Teal / Cyan
  {
    id: "tech-interactive",
    companyName: "The Tech Interactive",
    wordmark: "the tech",
    cardKind: "",
    cardNumber: "•••• 2018",
    holderName: "Tyler Lindow",
    frontBgStyle: { background: "#ffffff" },
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    borderClass: "border-indigo-200",
    trimColor: "#A5B4FC",
    brandMark: <TheTechLogo className="h-5 w-auto" />,
    linkedinUrl: "https://www.linkedin.com/in/tlindow/details/experience/",
    totalVolumeSummary: "Exhibit & Curriculum Delivery",
    lineItems: [
      {
        id: "tech-1",
        year: "2018",
        title: "Sustainability Exhibit Prototyping & Generative Signage",
        users: "3 DEVs",
        ownership: "Studio Coordinator & UX Research",
        description:
          "Prototyped sustainability city exhibits with 3D projection mapping and p5.js generative signage with staff engineers.",
      },
      {
        id: "tech-2",
        year: "2017",
        title: "Google Data Literacy Curriculum and Workshops",
        users: "100 DEVs",
        ownership: "Curriculum Specialist",
        description:
          "Co-designed and launched hands-on data literacy workshops with Google utilizing mobile accelerometers.",
      },
    ],
  },

  // 3. Galvanize Inc (2019) — Galvanize Orange
  {
    id: "galvanize",
    companyName: "Galvanize Inc",
    wordmark: "galvanize",
    cardKind: "GMV",
    cardNumber: "•••• 2019",
    holderName: "Tyler Lindow",
    frontBgStyle: { background: "#ffffff" },
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    borderClass: "border-sky-200",
    trimColor: "#7DD3FC",
    brandMark: <GalvanizeLogo className="h-4 sm:h-5 w-auto" />,
    linkedinUrl: "https://www.linkedin.com/in/tlindow/details/experience/",
    totalVolumeSummary: "$400K GMV Handled",
    lineItems: [
      {
        id: "galv-1",
        year: "2019",
        title: "Developer Onboarding",
        gmv: "$400K GMV",
        users: "20 DEVs",
        ownership: "Lead Immersive Resident",
        description:
          "Mentored incoming Hack Reactor engineers through full-stack software development, code reviews, and multi-repo grading.",
      },
      {
        id: "galv-2",
        year: "2019",
        title: "Multi-Repo Grading & Empathetic Code Reviews",
        users: "20 DEVs",
        ownership: "Lead Immersive Resident",
        description:
          "Managed multi-repo grading and delivered constructive code reviews, building psychological safety and technical confidence for career transitioners.",
      },
    ],
  },

  // 4. Affirm (2019 - 2026) — Affirm Royal Blue
  {
    id: "affirm",
    companyName: "Affirm",
    wordmark: "affirm",
    cardKind: "GMV",
    cardNumber: "•••• 2024",
    holderName: "Tyler Lindow",
    frontBgStyle: { background: "#ffffff" },
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    borderClass: "border-emerald-200",
    trimColor: "#6EE7B7",
    brandMark: <AffirmLogo className="h-5 sm:h-6 w-auto" />,
    linkedinUrl: "https://www.linkedin.com/in/tlindow/details/experience/",
    totalVolumeSummary: "$10.11B+ GMV Handled",
    lineItems: [
      {
        id: "aff-1",
        year: "2024",
        title: "Flagship Partner Scale ($10B+ Amazon Portfolio)",
        gmv: "$10B+ GMV",
        users: "6 DEVs",
        ownership: "Engineering Lead, Flagship SRE",
        description:
          "Oversaw site reliability engineering for Affirm's largest enterprise partner ($10B+ annual GMV volume) with 99.99% SLAs.",
      },
      {
        id: "aff-2",
        year: "2023",
        title: "Enterprise SLA & Telemetry Pipelines",
        gmv: "$100M+ GMV",
        users: "PARTNER DEVs",
        ownership: "Site Reliability Lead",
        description:
          "Founded merchant reliability squad (1 → 6 engineers) with automated Python/Snowflake reporting pipelines.",
      },
      {
        id: "aff-3",
        year: "2021",
        title: "Introductory AI Developer Paved Paths",
        users: "7 DEVs",
        ownership: "Developer Productivity Lead",
        description:
          "Scaled self-service onboarding pipelines and CLI developer tools, cutting onboarding time by ~50%.",
      },
      {
        id: "aff-4",
        year: "2019",
        title: "Merchant Integration Triage & ETL Advocacy",
        gmv: "$10M+ GMV",
        users: "300+ DEVs",
        ownership: "Technical Partner Liaison",
        description:
          "Primary technical liaison diagnosing e-commerce integration bugs and establishing ETL partner telemetry.",
      },
      {
        id: "aff-5",
        year: "2025",
        title: "Affirm.com site Re-launch",
        gmv: "$500K GMV",
        users: "TECH LEADs",
        ownership: "Mobile SRE / Observability",
        description:
          "Facilitated engineering trade-offs during affirm.com revamp, delivering $500K incremental GMV before BFCM.",
      },
    ],
  },

  // 5. Beginner (2026) — Authentic Beginner Forest Green
  {
    id: "beginner",
    companyName: "Beginner",
    wordmark: "beginner",
    cardKind: "",
    cardNumber: "•••• 2026",
    holderName: "Tyler Lindow",
    frontBgStyle: { background: "#ffffff" },
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    borderClass: "border-orange-200",
    trimColor: "#FDBA74",
    brandMark: <BeginnerSeedMark className="w-6 h-6 rounded-lg shrink-0 shadow-xs" />,
    linkedinUrl: "https://www.linkedin.com/in/tlindow/details/experience/",
    totalVolumeSummary: "Founder Discovery & Hub",
    lineItems: [
      {
        id: "beg-1",
        year: "Early 2026",
        title: "0-to-1 Founder PWA & Pitch Engine",
        users: "20 DEVs",
        ownership: "Founder & Product Lead",
        description:
          "Built and launched progressive web app enabling founders to practice pitches and validate fundraising in-person.",
      },
      {
        id: "beg-2",
        year: "Mid 2026",
        title: "Technical Community & Product Network",
        users: "27 DEVs",
        ownership: "Community Architecture",
        description:
          "Architected and hosted high-trust technical forums for product-focused engineers and leaders in San Diego.",
      },
    ],
  },
];

export default function TractionTimeline() {
  return (
    <div className="w-full select-none space-y-12 py-4">
      {/* ========================================================= */}
      {/* ALL COMPANY CARDS WITH GMV LINE ITEMS                      */}
      {/* ========================================================= */}
      {companyCards.map((card) => (
        <div
          key={card.id}
          id={`wallet-card-${card.id}`}
          className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10"
        >
          {/* Card (consistent w-80 sizing across viewports, responsive max-w-full on small mobile) */}
          <div className="w-80 max-w-full shrink-0">
            <div className="w-full aspect-[1.586/1] rounded-[20px]">
              <CardFace card={card} />
            </div>
          </div>

          {/* GMV Ledger (right on desktop, below on mobile) */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Ledger Header Bar */}
            <div className="flex items-center gap-2 pb-2 border-b border-border/80">
              <h3
                className="text-base sm:text-lg font-bold text-foreground tracking-tight"
                style={{
                  fontFamily:
                    '"Fraunces", var(--font-fraunces), "Plus Jakarta Sans", Georgia, serif',
                }}
              >
                {card.companyName}
              </h3>
            </div>

            {/* Transaction Line Items */}
            <div className="divide-y divide-border/60">
              {card.lineItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-3"
                >
                  <span className="text-sm text-foreground truncate">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-start sm:self-auto">
                    {item.gmv ? (
                      <span className="text-sm font-bold font-mono text-foreground shrink-0 whitespace-nowrap">
                        {item.gmv}
                      </span>
                    ) : item.users ? (
                      <span className="text-sm font-bold font-mono text-foreground shrink-0 whitespace-nowrap">
                        {item.users}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================= */
/* Shared Card Face Component                                        */
/* ================================================================= */
function CardFace({ card }: { card: BeginnerStyleCard }) {
  return (
    <div
      style={{
        ...card.frontBgStyle,
        boxShadow: card.boxShadow,
      }}
      className={`relative w-full h-full rounded-[20px] border flex flex-col overflow-hidden ${card.borderClass}`}
    >
      {/* Color Trim Strip */}
      <div
        className="h-2 w-full shrink-0"
        style={{ background: card.trimColor }}
      />

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-1 p-5 sm:p-6">
        {/* Top Bar: Brand Mark & Holder Name */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {card.brandMark}
          </div>

          <span
            className="text-xs sm:text-sm font-bold text-gray-700 truncate max-w-[50%] text-right leading-none"
            style={{
              fontFamily:
                '"Fraunces", var(--font-fraunces), "Plus Jakarta Sans", Georgia, serif',
            }}
          >
            {card.holderName}
          </span>
        </div>

        {/* Bottom Bar: Masked Number & Card Kind */}
        <div className="flex items-end justify-between gap-3 pt-4">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-gray-500 tabular-nums">
            {card.cardNumber}
          </span>

          <div className="flex flex-col items-end gap-0.5">
            <span
              className="font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider leading-none"
              style={{ color: card.trimColor }}
            >
              {card.cardKind}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
