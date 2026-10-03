import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { FloralDivider, BotanicalWatermark, RoyalBlossomMedallion } from "@/components/ui/FloralMotif";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Gourav, I was admiring your wedding work on gouravevents.com and would love to consult with you."
  )}`;

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-alabaster">
      {/* Subtle Atmospheric Botanical Watermarks to enrich whitespace */}
      <BotanicalWatermark orientation="left" className="!text-gold/[0.18]" />
      <BotanicalWatermark orientation="right" className="!text-gold/[0.18]" />

      {/* Atmospheric Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-twilight-palace.jpg"
          alt="Majestic royal Indian wedding palace courtyard at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80 scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Balanced Scenography Vignette: Preserves image clarity while framing typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster via-alabaster/25 to-alabaster/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-alabaster/45 via-transparent to-alabaster/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(250,248,245,0.48)_0%,_transparent_75%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Royal Blossom Monogram Medallion */}
        <RoyalBlossomMedallion className="text-gold" />

        {/* Editorial Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/95 backdrop-blur-md text-[11px] uppercase tracking-[0.3em] text-burgundy mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="font-medium">Haute-Couture Wedding Production</span>
        </div>

        {/* Central Thesis Headline with Elevated Serif & Script Typography */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light tracking-tight text-charcoal-deep max-w-4xl leading-[1.08] mb-6 drop-shadow-2xs">
          Crafting Extraordinary Weddings Where{" "}
          <span className="font-script text-5xl sm:text-7xl md:text-8xl text-burgundy font-normal not-italic px-1">
            Royalty
          </span>{" "}
          Meets{" "}
          <span className="font-script text-5xl sm:text-7xl md:text-8xl text-rosegold font-normal not-italic px-1">
            Emotion.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-charcoal-deep/85 font-light leading-relaxed mb-10 tracking-wide">
          From the ancient wilderness sanctuaries of Jim Corbett to the regal palace courtyards of Jaipur and Udaipur, and the sacred riverbanks of Rishikesh — every celebration is personally curated and masterminded by Gourav.
        </p>

        {/* Dual Luxury Action Pathways */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary: Direct WhatsApp with Gourav */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-burgundy text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-light hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-burgundy/15"
          >
            <MessageCircle className="w-4 h-4 text-champagne-light" />
            <span>Consult Gourav on WhatsApp</span>
          </a>

          {/* Secondary: Explore Works */}
          <Link
            href="/weddings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-charcoal/20 bg-white/80 backdrop-blur-md text-charcoal text-xs uppercase tracking-[0.2em] hover:border-burgundy hover:text-burgundy transition-all duration-300 shadow-sm"
          >
            <span>Explore The Portfolio</span>
          </Link>
        </div>

        {/* Subtle Floral Divider to bridge vertical whitespace */}
        <FloralDivider className="mt-12 mb-4 w-full max-w-md" />

        {/* Destination Footnotes */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs uppercase tracking-[0.25em] text-taupe font-medium">
          <span className="hover:text-burgundy transition-colors">Jim Corbett</span>
          <span className="text-rosegold/50">✦</span>
          <span className="hover:text-burgundy transition-colors">Jaipur</span>
          <span className="text-rosegold/50">✦</span>
          <span className="hover:text-burgundy transition-colors">Udaipur</span>
          <span className="text-rosegold/50">✦</span>
          <span className="hover:text-burgundy transition-colors">Rishikesh</span>
        </div>

        {/* Gentle Destinations Pathway */}
        <Link
          href="/destinations"
          className="mt-8 flex flex-col items-center gap-2 text-taupe/70 hover:text-burgundy transition-colors group cursor-pointer focus:outline-none focus:ring-1 focus:ring-burgundy/40 rounded-lg px-3 py-1"
          aria-label="Discover destinations"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Discover The Monograph</span>
          <ArrowDown className="w-4 h-4 text-rosegold transition-transform duration-500 group-hover:translate-y-1" />
        </Link>
      </div>
    </section>
  );
}
