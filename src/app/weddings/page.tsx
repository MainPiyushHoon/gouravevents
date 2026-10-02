"use client";

import { useState, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { weddings } from "@/data/weddings";
import { siteConfig } from "@/data/site";
import WeddingCard from "@/components/weddings/WeddingCard";

const filterTabs = [
  { id: "all", label: "All Celebrations" },
  { id: "jaipur", label: "Jaipur" },
  { id: "udaipur", label: "Udaipur" },
  { id: "corbett", label: "Jim Corbett" },
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
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Header Monograph */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
          The Portfolio
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne mt-3 mb-6 font-normal">
          Wedding Chronicles
        </h1>
        <p className="text-sm md:text-base text-ivory/80 font-light leading-relaxed">
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
                  ? "bg-champagne text-obsidian font-medium shadow-md shadow-champagne/10"
                  : "border border-champagne/20 text-ivory/70 hover:border-champagne/50 hover:text-champagne bg-burgundy/20"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
        {filteredWeddings.map((wedding, idx) => (
          <WeddingCard key={wedding.slug} wedding={wedding} priority={idx < 2} />
        ))}
      </div>

      {/* Direct Founder Banner */}
      <div className="rounded-3xl border border-champagne/20 bg-gradient-to-r from-burgundy/40 via-burgundy-deep to-obsidian p-8 md:p-14 text-center max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
          Your Bespoke Celebration
        </span>
        <h2 className="font-serif text-2xl md:text-4xl text-champagne mt-2 mb-4 font-normal">
          Envisioning Your Own Wedding?
        </h2>
        <p className="text-sm text-ivory/80 font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Discuss dates, palace options, and bespoke design possibilities directly with Gourav on WhatsApp.
        </p>
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle transition-all duration-300 shadow-xl shadow-champagne/10"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-32 pb-24">
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-champagne">Loading portfolio...</div>}>
        <WeddingsContent />
      </Suspense>
    </main>
  );
}
