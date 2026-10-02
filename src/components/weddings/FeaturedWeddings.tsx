import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { weddings } from "@/data/weddings";
import WeddingCard from "./WeddingCard";

export default function FeaturedWeddings() {
  return (
    <section className="py-24 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
              Curated Chronicles
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-champagne mt-3 font-normal">
              Stories of Royalty & Emotion
            </h2>
            <p className="text-sm text-ivory/80 font-light mt-4 leading-relaxed">
              A private selection of weddings designed, curated, and produced by Gourav Events. Each reflects the architectural spirit of its destination.
            </p>
          </div>

          <Link
            href="/weddings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-champagne/30 text-xs uppercase tracking-[0.2em] text-champagne hover:bg-champagne hover:text-obsidian transition-all duration-300 self-start md:self-auto"
          >
            <span>View All Works</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {weddings.map((wedding, idx) => (
            <WeddingCard key={wedding.slug} wedding={wedding} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
