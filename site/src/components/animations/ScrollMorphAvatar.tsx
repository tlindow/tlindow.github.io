"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Coords {
  heroX: number;
  heroY: number;
  heroSize: number;
  navX: number;
  navY: number;
  navSize: number;
}

interface ScrollMorphAvatarProps {
  onReady?: () => void;
}

export default function ScrollMorphAvatar({ onReady }: ScrollMorphAvatarProps) {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [isReady, setIsReady] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    let rafId: number;

    const measureCoords = () => {
      const heroEl = document.getElementById("hero-avatar-anchor");
      const navEl = document.getElementById("navbar-avatar-target");

      if (!heroEl || !navEl) {
        rafId = requestAnimationFrame(measureCoords);
        return;
      }

      const heroRect = heroEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      const currentScrollY = window.scrollY;

      // Invariant viewport positions relative to scrollY === 0
      setCoords({
        heroX: heroRect.left,
        heroY: heroRect.top + currentScrollY,
        heroSize: heroRect.width,
        navX: navRect.left,
        navY: navRect.top,
        navSize: navRect.width,
      });

      setIsReady(true);
      if (onReady) {
        onReady();
      }
    };

    measureCoords();

    window.addEventListener("resize", measureCoords);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measureCoords);
    };
  }, [onReady]);

  const { scrollY } = useScroll();

  // Map scroll progress from 0 to 150px with clamp (image is fully in place at 150px)
  const progress = useTransform(scrollY, [0, 150], [0, 1], { clamp: true });

  // Smooth ease-out quad for natural fluid momentum
  const easedProgress = useTransform(progress, (p) => p * (2 - p));

  const x = useTransform(easedProgress, (p) => {
    if (!coords) return 0;
    return coords.heroX + (coords.navX - coords.heroX) * p;
  });

  const y = useTransform(easedProgress, (p) => {
    if (!coords) return 0;
    return coords.heroY + (coords.navY - coords.heroY) * p;
  });

  const size = useTransform(easedProgress, (p) => {
    if (!coords) return 96;
    return coords.heroSize + (coords.navSize - coords.heroSize) * p;
  });

  if (!isReady || !coords) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        left: x,
        top: y,
        width: size,
        height: size,
        zIndex: 60,
      }}
      className="rounded-full overflow-hidden ring-1.5 ring-border/80 shadow-md group cursor-pointer focus:outline-none transition-shadow"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      title="Tyler Lindow - Back to top"
      aria-label="Tyler Lindow profile - Back to top"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/IMG_0548.jpeg`}
        alt="Tyler Lindow avatar"
        className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-300"
        loading="eager"
      />
    </motion.div>
  );
}
