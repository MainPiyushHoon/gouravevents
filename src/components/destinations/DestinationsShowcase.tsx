"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig, type DestinationInfo } from "@/data/site";
import Swup from "swup";

export default function DestinationsShowcase() {
  const [activeId, setActiveId] = useState<DestinationInfo["id"]>("corbett");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const swupRef = useRef<Swup | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // Initialize Swup instance targeting the destinations container
      const swup = new Swup({
        containers: ["#swup-destinations"],
        animationSelector: '[class*="transition-"]',
        cache: false,
        linkSelector: "a[data-swup-link]",
      });

      swupRef.current = swup;
      (window as any).swupInstance = swup;

      return () => {
        swup.destroy();
        swupRef.current = null;
      };
    } catch (e) {
      console.warn("Swup initialization:", e);
    }
  }, []);

  const handleDestinationChange = (newId: DestinationInfo["id"]) => {
    if (newId === activeId || isTransitioning) return;

    setIsTransitioning(true);
    const container = containerRef.current;

    if (container) {
      // Swup Phase 1: leaving animation
      container.classList.add("is-animating", "is-leaving");
      container.classList.remove("is-rendering");

      // Notify swup hook listeners
      swupRef.current?.hooks?.callSync?.("animation:out:start", undefined as any, undefined as any);

      setTimeout(() => {
        // Swup Phase 2: replace destination data
        setActiveId(newId);

        // Next animation frame: Swup Phase 3: render incoming content
        requestAnimationFrame(() => {
          container.classList.remove("is-leaving");
          container.classList.add("is-rendering");
          swupRef.current?.hooks?.callSync?.("content:replace", undefined as any, undefined as any);

          setTimeout(() => {
            // Swup Phase 4: cleanup transition classes
            container.classList.remove("is-animating", "is-rendering");
            swupRef.current?.hooks?.callSync?.("animation:in:end", undefined as any, undefined as any);
            setIsTransitioning(false);
          }, 350);
        });
      }, 260);
    } else {
      setActiveId(newId);
      setIsTransitioning(false);
    }
  };

  const current =
    siteConfig.destinations.find((d) => d.id === activeId) ||
    siteConfig.destinations[0];

  const destinationWhatsAppUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(
    `Hi Gourav, I'm interested in discussing a destination wedding in ${current.name}. Could we connect?`
  )}`;

  return (
    <section id="destinations" className="py-24 bg-ivory-subtle/40 relative overflow-hidden border-t border-champagne-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold">
            Destinations of Distinction
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal-deep mt-3 mb-6 font-normal">
            Where Your Story Unfolds
          </h2>
          <p className="text-sm md:text-base text-charcoal-muted font-light leading-relaxed">
            We focus our artistry on four iconic Indian landscapes. Each offers a completely distinct sensory world, from centuries-old royal palaces to sacred riverbanks and tranquil jungle reserves.
          </p>
        </div>

        {/* Destination Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-14">
          {siteConfig.destinations.map((dest) => {
            const isActive = dest.id === activeId;
            return (
              <button
                key={dest.id}
                onClick={() => handleDestinationChange(dest.id)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-burgundy text-ivory font-medium shadow-md shadow-burgundy/20 scale-105"
                    : "border border-champagne-border/50 text-charcoal/80 hover:border-burgundy hover:text-burgundy bg-white shadow-sm"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-champagne-light" : "text-rosegold"}`} />
                <span>{dest.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Destination Card with Swup Transition Container */}
        <div
          id="swup-destinations"
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-champagne-border/60 bg-white p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden"
        >
          {/* Left Column: Visual Canvas */}
          <div className="lg:col-span-7 transition-fade relative h-[360px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden border border-champagne-border/40 shadow-lg group">
            <Image
              src={current.heroImage}
              alt={`${current.name} luxury wedding scene`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
                  Landscape Setting
                </span>
                <p className="font-serif text-lg md:text-xl text-ivory mt-0.5 font-light">
                  {current.landscape}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details & Action */}
          <div className="lg:col-span-5 transition-fade-delayed flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rosegold mb-2 font-medium">
                <span>Destination Mastery</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-burgundy font-normal mb-2">
                {current.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-4 font-medium">
                {current.tagline}
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed font-light mb-6">
                {current.description}
              </p>

              {/* Signature Venues */}
              <div className="mb-6 pt-4 border-t border-champagne-border/40">
                <span className="text-[11px] uppercase tracking-[0.25em] text-burgundy block mb-2 font-semibold">
                  Iconic Partner Venues
                </span>
                <p className="text-xs text-charcoal/80 leading-relaxed font-light">
                  {current.signatureVenues.join(" · ")}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-8">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/80 font-light">
                    <CheckCircle2 className="w-4 h-4 text-rosegold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contextual Action Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-champagne-border/40">
              <a
                href={destinationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.15em] font-medium hover:bg-burgundy-light transition-all duration-300 shadow-md shadow-burgundy/15"
              >
                <MessageCircle className="w-4 h-4 text-champagne-light" />
                <span>Plan in {current.name}</span>
              </a>

              <Link
                href={`/weddings?destination=${current.id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-charcoal/20 text-charcoal text-xs uppercase tracking-[0.15em] hover:text-burgundy hover:border-burgundy transition-colors"
              >
                <span>View {current.name} Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-rosegold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
