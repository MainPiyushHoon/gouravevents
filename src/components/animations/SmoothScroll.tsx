"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Continuous smooth-scrolling physics feature using Lenis
    // Completely omits duration/easing so Lenis does NOT run a scripted animation
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085, // Continuous linear interpolation (damped physics momentum)
      wheelMultiplier: 0.85, // Calibrated distance per wheel tick
      touchMultiplier: 1.5,
      smoothWheel: true,
      syncTouch: false,
    });

    // Expose on window for direct inspection
    (window as unknown as { lenis: Lenis; lenisInstance: Lenis }).lenis = lenis;
    (window as unknown as { lenis: Lenis; lenisInstance: Lenis }).lenisInstance = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
