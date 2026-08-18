import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyler Lindow — Founder, Developer, Mentor",
  description:
    "Personal website of Tyler Lindow. Founder of beginner, maker of hāpi, developer, and mentor building for the web in San Diego.",
  openGraph: {
    title: "Tyler Lindow — Founder, Developer, Mentor",
    description:
      "Founder of beginner, maker of hāpi, software developer, and mentor building for the web in San Diego.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
