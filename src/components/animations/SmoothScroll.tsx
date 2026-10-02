"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      // Expose on window matching the exact reference site pattern
      (window as unknown as { lenisInstance: unknown }).lenisInstance =
        lenisRef.current.lenis;
    }
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: true,
        duration: 1.8, // Stately, longer transition to prevent fast abrupt rushes
        wheelMultiplier: 0.65, // Calibrated distance per wheel tick so content doesn't fly past
        touchMultiplier: 1.2,
        smoothWheel: true,
        syncTouch: false,
        // Quartic ease-out: starts gently and softly decelerates, eliminating the sudden 50% jump
        easing: (t) => 1 - Math.pow(1 - t, 4),
      }}
    >
      {children}
    </ReactLenis>
  );
}
