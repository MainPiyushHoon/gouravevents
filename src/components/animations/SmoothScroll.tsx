"use client";

import { useEffect, useMemo, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisOptions } from "lenis";

function LenisGlobalAttacher() {
  const lenis = useLenis();
  useEffect(() => {
    if (typeof window !== "undefined" && lenis) {
      (window as any).lenisInstance = lenis;
    }
  }, [lenis]);
  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // Exact implementation tracked from https://theweddingco.in/:
  // - autoRaf: true
  // - lerp: 0.1
  // - duration: 1.2
  // - wheelMultiplier: 1
  // - easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x))
  const options = useMemo<LenisOptions>(
    () => ({
      autoRaf: true,
      duration: 1.2,
      lerp: 0.1,
      wheelMultiplier: 1,
      easing: (x: number) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
      touchMultiplier: 1.0,
      smoothWheel: true,
      syncTouch: false, // 100% native touch scrolling on mobile (no gesture hijacking)
      anchors: true, // Smooth anchor link navigation (#destinations, #inquiry)
      autoResize: true,
      respectReducedMotion: true, // Accessibility: 1:1 native tracking when reduced motion is preferred
    }),
    []
  );

  return (
    <ReactLenis root options={options}>
      <LenisGlobalAttacher />
      {children}
    </ReactLenis>
  );
}

