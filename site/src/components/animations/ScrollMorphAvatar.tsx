"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import * as THREE from "three";

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
  progress?: MotionValue<number>;
  onReturnToHero?: () => void;
}

/**
 * Creates a subtle milled coin edge normal texture.
 */
function createMilledRimTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, 512, 32);
    for (let x = 0; x < 512; x += 4) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(x, 0, 2, 32);
      ctx.fillStyle = "#404040";
      ctx.fillRect(x + 2, 0, 2, 32);
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(4, 1);
  return texture;
}

/**
 * Distance in pixels that the profile avatar morphs from its hero anchor position
 * to the docked top navbar slot.
 */
export const AVATAR_MORPH_SCROLL_DISTANCE = 160;
export const HERO_PIN_SCROLL_DISTANCE = AVATAR_MORPH_SCROLL_DISTANCE;

export default function ScrollMorphAvatar({
  onReady,
  progress: customProgress,
  onReturnToHero,
}: ScrollMorphAvatarProps) {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [webglReady, setWebglReady] = useState(false);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);
  const clickImpulseRef = useRef(0);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Fallback internal scroll progress if customProgress is not passed
  const { scrollY } = useScroll();
  const internalProgress = useTransform(scrollY, [0, HERO_PIN_SCROLL_DISTANCE], [0, 1], { clamp: true });
  const progress = customProgress || internalProgress;

  // 1. Measure coordinates between Hero Anchor and Navbar Target
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

      // Reconstruct the initial hero viewport Y (as if scrollY was 0)
      const initialHeroY = heroRect.top + currentScrollY;
      const initialHeroX = heroRect.left;

      setCoords({
        heroX: initialHeroX,
        heroY: initialHeroY,
        heroSize: heroRect.width,
        navX: navRect.left,
        navY: navRect.top,
        navSize: navRect.width,
      });

      setIsReady(true);
    };

    measureCoords();

    window.addEventListener("resize", measureCoords);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measureCoords);
    };
  }, [onReady]);

  // 2. Three.js WebGL Profile Coin Setup
  useEffect(() => {
    if (!isReady || !canvasContainerRef.current) return;
    const container = canvasContainerRef.current;

    const size = 384; // Crisp texture resolution

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(4, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight2.position.set(-4, -3, -4);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.4, 10);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    // Materials & Textures
    const rimBump = createMilledRimTexture();

    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5dfd5, // Elegant warm gold/sand coin edge
      metalness: 0.85,
      roughness: 0.3,
      bumpMap: rimBump,
      bumpScale: 0.04,
    });

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    const frontCanvas = document.createElement("canvas");
    frontCanvas.width = 1024;
    frontCanvas.height = 1024;
    const frontTexture = new THREE.CanvasTexture(frontCanvas);
    frontTexture.colorSpace = THREE.SRGBColorSpace;
    frontTexture.anisotropy = maxAnisotropy;

    const backCanvas = document.createElement("canvas");
    backCanvas.width = 1024;
    backCanvas.height = 1024;
    const backTexture = new THREE.CanvasTexture(backCanvas);
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.anisotropy = maxAnisotropy;

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontTexture,
      metalness: 0.2,
      roughness: 0.35,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTexture,
      metalness: 0.2,
      roughness: 0.35,
    });

    // 3D Coin Cylinder Geometry
    const coinGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.22, 64);
    coinGeometry.rotateX(Math.PI / 2); // Orient front face towards camera

    const coinMesh = new THREE.Mesh(coinGeometry, [
      rimMaterial,
      frontMaterial,
      backMaterial,
    ]);
    scene.add(coinMesh);

    let lastScrollProgress = -1;
    let isDisposed = false;

    // Load Profile Image Texture
    const img = new Image();
    const handleImageLoad = () => {
      if (isDisposed) return;
      const sw = img.naturalWidth || img.width;
      const sh = img.naturalHeight || img.height;
      if (!sw || !sh) return;
      const cropSize = Math.min(sw, sh);
      const sx = (sw - cropSize) / 2;
      const sy = Math.max(0, Math.min(sh - cropSize, (sh - cropSize) * 0.2));

      // Draw Front Face (1024x1024 High-DPI Texture)
      const fCtx = frontCanvas.getContext("2d");
      if (fCtx) {
        fCtx.fillStyle = "#FFFDF7";
        fCtx.fillRect(0, 0, 1024, 1024);

        fCtx.save();
        fCtx.beginPath();
        fCtx.arc(512, 512, 504, 0, Math.PI * 2);
        fCtx.clip();

        // Rotate counterclockwise 90 degrees so image is upright on Three.js cap
        fCtx.translate(512, 512);
        fCtx.rotate(-Math.PI / 2);
        fCtx.drawImage(img, sx, sy, cropSize, cropSize, -512, -512, 1024, 1024);
        fCtx.restore();

        // Subtle minted inner coin ring
        fCtx.beginPath();
        fCtx.arc(512, 512, 500, 0, Math.PI * 2);
        fCtx.strokeStyle = "#E6E2D8";
        fCtx.lineWidth = 8;
        fCtx.stroke();

        frontTexture.needsUpdate = true;
      }

      // Draw Back Face (1024x1024 High-DPI Texture)
      const bCtx = backCanvas.getContext("2d");
      if (bCtx) {
        bCtx.fillStyle = "#FFFDF7";
        bCtx.fillRect(0, 0, 1024, 1024);

        bCtx.save();
        bCtx.beginPath();
        bCtx.arc(512, 512, 504, 0, Math.PI * 2);
        bCtx.clip();

        bCtx.translate(512, 512);
        bCtx.rotate(-Math.PI / 2);
        bCtx.drawImage(img, sx, sy, cropSize, cropSize, -512, -512, 1024, 1024);
        bCtx.restore();

        bCtx.beginPath();
        bCtx.arc(512, 512, 500, 0, Math.PI * 2);
        bCtx.strokeStyle = "#E6E2D8";
        bCtx.lineWidth = 8;
        bCtx.stroke();

        backTexture.needsUpdate = true;
      }

      // Render the first complete, textured frame immediately
      renderer.render(scene, camera);
      setWebglReady(true);
      if (onReady) {
        onReady();
      }

      lastScrollProgress = -1;
    };

    img.onload = handleImageLoad;
    img.src = `${basePath}/IMG_0548.jpeg`;
    if (img.complete && img.naturalWidth > 0) {
      handleImageLoad();
    }

    // Animation Loop: Coin rotates ONLY when moving between starting position and nav position, or on hover/click
    let animationFrameId: number;
    let hoverSpin = 0;

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);

      // Progress from 0 (hero starting position) to 1 (nav position)
      const rawProgress = Math.min(Math.max(progress.get(), 0), 1);
      const isHovered = isHoveredRef.current;
      const hasClick = clickImpulseRef.current > 0.001;

      if (rawProgress !== lastScrollProgress || isHovered || hasClick || hoverSpin > 0.001) {
        lastScrollProgress = rawProgress;

        // Smooth easing quad
        const eased = rawProgress * (2 - rawProgress);

        // Hover spin accumulation
        if (isHovered) {
          hoverSpin += 0.032;
        } else if (hoverSpin > 0) {
          hoverSpin *= 0.92;
        }

        if (hasClick) {
          clickImpulseRef.current *= 0.92;
        }

        // Complete 360-degree rotation during scroll + hover/click extra spin
        coinMesh.rotation.y = eased * Math.PI * 2 + hoverSpin + clickImpulseRef.current;

        // Subtle 3D tilt exposing the metallic milled edge during transit or hover
        const scrollTilt = Math.sin(eased * Math.PI) * 0.28;
        const hoverTilt = isHovered ? 0.15 : 0;
        coinMesh.rotation.x = scrollTilt + hoverTilt;

        renderer.render(scene, camera);
      }
    };

    renderLoop();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coinGeometry.dispose();
      rimMaterial.dispose();
      frontMaterial.dispose();
      backMaterial.dispose();
      frontTexture.dispose();
      backTexture.dispose();
      rimBump.dispose();
      renderer.dispose();
    };
  }, [isReady, basePath, onReady, progress]);

  // 3. Motion Interpolation for position & scale
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
      initial={{ opacity: 0 }}
      animate={{ opacity: webglReady ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      style={{
        position: "fixed",
        left: x,
        top: y,
        width: size,
        height: size,
        zIndex: 60,
        pointerEvents: webglReady ? "auto" : "none",
      }}
      className="group cursor-pointer focus:outline-none select-none drop-shadow-md hover:drop-shadow-xl transition-all"
      onMouseEnter={() => {
        if (!webglReady) return;
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onClick={(e) => {
        if (!webglReady) return;
        e.preventDefault();
        clickImpulseRef.current = Math.PI * 2;
        if (onReturnToHero) {
          onReturnToHero();
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      title="Tyler Lindow - Back to top"
      aria-label="Tyler Lindow profile coin - Back to top"
    >
      {/* 3D WebGL Coin Canvas Container */}
      <div
        ref={canvasContainerRef}
        className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
      />
    </motion.div>
  );
}
