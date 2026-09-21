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
  title: "Tyler Lindow — Elevating Developer Fintech",
  description:
    "Elevating Developer Fintech. Top-of-funnel marketing and enterprise B2B portals. Beginner and DevX for educational institutions and the developer market.",
  openGraph: {
    title: "Tyler Lindow — Elevating Developer Fintech",
    description:
      "Elevating Developer Fintech. Top-of-funnel marketing and enterprise B2B portals. Beginner and DevX for educational institutions and the developer market.",
    url: "https://tlindow.github.io",
    siteName: "Tyler Lindow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Lindow — Elevating Developer Fintech",
    description:
      "Elevating Developer Fintech. Top-of-funnel marketing and enterprise B2B portals. Beginner and DevX for educational institutions and the developer market.",
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
      "jobTitle": "Elevating Developer Fintech",
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
