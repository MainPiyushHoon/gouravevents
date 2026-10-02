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
        lerp: 0.1,
        duration: 1.2,
        wheelMultiplier: 1,
        easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
