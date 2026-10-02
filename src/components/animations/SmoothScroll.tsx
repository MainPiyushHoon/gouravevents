"use client";

import { useMemo, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // Configured to fulfill exact smooth-scrolling requirements:
  // 1. Subtle, natural inertia: continuous rather than mechanical steps
  // 2. Not over-dampened: responsive 1:1 wheelMultiplier, no sluggish lag
  // 3. Native touch scrolling preserved on mobile: syncTouch is false
  // 4. Accessible & compliant: keyboard navigation and prefers-reduced-motion respected
  // 5. In-page anchor navigation: smoothly resolved via anchors: true
  const options = useMemo<LenisOptions>(
    () => ({
      autoRaf: true,
      lerp: 0.095, // Subtle, natural inertia — continuous, responsive, never laggy
      wheelMultiplier: 1, // Natural 1:1 wheel input ratio
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
      {children}
    </ReactLenis>
  );
}
