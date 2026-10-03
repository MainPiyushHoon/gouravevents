"use client";

import { useState, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { weddings } from "@/data/weddings";
import { siteConfig } from "@/data/site";
import WeddingCard from "@/components/weddings/WeddingCard";
import {
  FloralDivider,
  FloralCorner,
  BotanicalWatermark,
  RoyalBlossomMedallion,
  FloralSideGutter,
} from "@/components/ui/FloralMotif";

const filterTabs = [
  { id: "all", label: "All Celebrations" },
  { id: "corbett", label: "Jim Corbett" },
  { id: "jaipur", label: "Jaipur" },
  { id: "udaipur", label: "Udaipur" },
  { id: "rishikesh", label: "Rishikesh" },
];

function WeddingsContent() {
  const searchParams = useSearchParams();
  const initialDestination = searchParams?.get("destination") || "all";
  const [selectedTag, setSelectedTag] = useState(initialDestination);
  const [, startTransition] = useTransition();

  const handleFilter = (tag: string) => {
    startTransition(() => {
      setSelectedTag(tag);
    });
  };

  const filteredWeddings =
    selectedTag === "all"
      ? weddings
      : weddings.filter((w) => w.destinationTag === selectedTag);

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was admiring the wedding chronicles on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      {/* Header Monograph */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative">
        <RoyalBlossomMedallion />
        <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
          The Portfolio
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-deep mt-3 mb-4 font-normal">
          Wedding Chronicles
        </h1>
        <FloralDivider variant="compact" />
        <p className="text-sm md:text-base text-charcoal-muted font-light leading-relaxed mt-4">
          Every celebration we orchestrate is a bespoke narrative. Explore our royal palace spectacles and tranquil natural sanctuary weddings across India.
        </p>
      </div>

      {/* Destination Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-16">
        {filterTabs.map((tab) => {
          const isActive = selectedTag === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                isActive
                  ? "bg-burgundy text-white font-medium shadow-md shadow-burgundy/10"
                  : "border border-taupe-light/60 text-charcoal-muted hover:border-burgundy/40 hover:text-burgundy bg-white shadow-2xs"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid with background watermark in negative space */}
      <div className="relative mb-24">
        <BotanicalWatermark orientation="left" className="-top-10" />
        <BotanicalWatermark orientation="right" className="top-96" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {filteredWeddings.map((wedding, idx) => (
            <WeddingCard key={wedding.slug} wedding={wedding} priority={idx < 2} />
          ))}
        </div>
      </div>

      {/* Direct Founder Banner */}
      <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-ivory-warm via-white to-alabaster p-8 md:p-14 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
        <BotanicalWatermark orientation="right" />
        <FloralCorner position="top-left" className="!text-gold/80" />
        <FloralCorner position="top-right" className="!text-gold/80" />
        <FloralCorner position="bottom-left" className="!text-gold/80" />
        <FloralCorner position="bottom-right" className="!text-gold/80" />
        <div className="relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold block">
            Your Bespoke Celebration
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-charcoal-deep mt-2 mb-3 font-normal">
            Envisioning Your Own Wedding?
          </h2>
          <FloralDivider variant="compact" />
          <p className="text-sm text-charcoal-muted font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Discuss dates, palace options, and bespoke design possibilities directly with Gourav on WhatsApp.
          </p>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-burgundy text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-deep transition-all duration-300 shadow-lg shadow-burgundy/15"
          >
            <MessageCircle className="w-4 h-4 text-champagne" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-alabaster text-charcoal pt-32 pb-24 relative overflow-hidden">
      {/* Delicate Side Gutters filling outer whitespace */}
      <FloralSideGutter side="left" className="top-40" />
      <FloralSideGutter side="right" className="top-72" />

      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-burgundy">Loading portfolio...</div>}>
        <WeddingsContent />
      </Suspense>
    </main>
  );
}
