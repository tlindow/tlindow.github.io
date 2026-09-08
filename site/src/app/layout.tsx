import type { Metadata } from "next";
import { Inter, Space_Mono, Silkscreen, Fraunces } from "next/font/google";
import { AnalyticsProvider } from "@/context/AnalyticsProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz", "WONK"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tlindow.github.io"),
  title: "Tyler Lindow — Fintech Engineering & Product",
  description:
    "Portfolio & Resume for Tyler Lindow. Fintech Engineering & Product. Onboarding $0 – $10B+ GMV enterprises. Former Affirm, Beginner, Galvanize.",
  openGraph: {
    title: "Tyler Lindow — Fintech Engineering & Product",
    description:
      "Portfolio & Resume for Tyler Lindow. Fintech Engineering & Product. Onboarding $0 – $10B+ GMV enterprises. Former Affirm, Beginner, Galvanize.",
    url: "https://tlindow.github.io",
    siteName: "Tyler Lindow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Lindow — Fintech Engineering & Product",
    description:
      "Portfolio & Resume for Tyler Lindow. Fintech Engineering & Product. Onboarding $0 – $10B+ GMV enterprises. Former Affirm, Beginner, Galvanize.",
  },
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tlindow.github.io/#person",
      "name": "Tyler Lindow",
      "jobTitle": "Fintech Engineering & Product",
      "telephone": "(650) 580-5788",
      "email": "tyler.lindow@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "postalCode": "92102",
        "addressCountry": "US"
      },
      "url": "https://tlindow.github.io",
      "sameAs": [
        "https://www.linkedin.com/in/tlindow",
        "https://github.com/tlindow"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} ${silkscreen.variable} ${fraunces.variable} font-mono antialiased bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark`}
      >
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
