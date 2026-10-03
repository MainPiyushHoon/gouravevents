import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  Sparkles,
  MessageCircle,
  Quote,
} from "lucide-react";
import { weddings } from "@/data/weddings";
import { siteConfig } from "@/data/site";
import {
  FloralDivider,
  FloralCorner,
  BotanicalWatermark,
  RoyalBlossomMedallion,
  FloralSideGutter,
} from "@/components/ui/FloralMotif";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return weddings.map((w) => ({
    slug: w.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wedding = weddings.find((w) => w.slug === slug);
  if (!wedding) {
    return { title: "Wedding Not Found | Gourav Events" };
  }
  return {
    title: `${wedding.title} (${wedding.couple})`,
    description: wedding.description,
    openGraph: {
      title: `${wedding.title} | Gourav Events`,
      description: wedding.description,
      images: [wedding.heroImage],
    },
  };
}

export default async function WeddingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const wedding = weddings.find((w) => w.slug === slug);

  if (!wedding) {
    notFound();
  }

  const directWhatsAppUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(
    `Hi Gourav, I was admiring the ${wedding.title} celebration (${wedding.location}) on gouravevents.com and would love to discuss planning our wedding.`
  )}`;

  return (
    <main className="min-h-screen bg-alabaster pt-28 pb-24 text-charcoal relative overflow-hidden">
      {/* Delicate Side Gutters filling outer whitespace */}
      <FloralSideGutter side="left" className="top-40" />
      <FloralSideGutter side="right" className="top-72" />

      {/* Top Breadcrumb & Back Action */}
      <div className="max-w-6xl mx-auto px-6 mb-8 relative z-10">
        <Link
          href="/weddings"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal-muted hover:text-burgundy transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 text-rosegold" />
          <span>Back to All Chronicles</span>
        </Link>
      </div>

      <article className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Monograph Header */}
        <header className="max-w-4xl mb-12 relative">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-rosegold font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Royal Chronicle</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-deep font-normal mb-4 leading-tight">
            {wedding.title}
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-burgundy italic font-light mb-4">
            {wedding.couple}
          </p>

          <FloralDivider variant="compact" className="my-4 max-w-xs !justify-start" />

          {/* Key Facts Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-taupe-light/60 text-xs text-charcoal-muted">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold font-semibold">
                Destination
              </span>
              <span className="text-charcoal-deep mt-1 flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-burgundy" />
                {wedding.location}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold font-semibold">
                Venue
              </span>
              <span className="text-charcoal-deep mt-1 block truncate font-medium">
                {wedding.venue}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold font-semibold">
                Scale
              </span>
              <span className="text-charcoal-deep mt-1 flex items-center gap-1 font-medium">
                <Users className="w-3.5 h-3.5 text-burgundy" />
                {wedding.guestScale}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold font-semibold">
                Season
              </span>
              <span className="text-charcoal-deep mt-1 flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-burgundy" />
                {wedding.year}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Visual Showcase */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-taupe-light/60 shadow-xl mb-16">
          <Image
            src={wedding.heroImage}
            alt={wedding.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/30 via-transparent to-transparent" />
        </div>

        {/* Narrative & Concept Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-8 space-y-6 relative">
            <BotanicalWatermark orientation="left" />
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-deep font-normal">
              The Celebration Narrative
            </h2>
            <FloralDivider variant="compact" className="!my-2 !justify-start" />
            <p className="text-base text-charcoal/90 font-light leading-relaxed">
              {wedding.narrative}
            </p>
            <p className="text-sm text-charcoal-muted font-light leading-relaxed">
              {wedding.description}
            </p>

            {wedding.testimonial && (
              <div className="relative rounded-2xl border border-gold/25 bg-ivory-warm/60 p-8 my-8 shadow-2xs overflow-hidden">
                <FloralCorner position="top-right" className="!text-gold/80" />
                <Quote className="w-8 h-8 text-gold/60 mb-3" />
                <p className="font-serif text-lg text-charcoal-deep italic leading-relaxed mb-4">
                  &ldquo;{wedding.testimonial.quote}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-burgundy font-semibold">
                  — {wedding.testimonial.author}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar: Decor Theme & Scenography Highlights */}
          <div className="relative lg:col-span-4 rounded-2xl border border-gold/25 bg-white p-6 sm:p-8 space-y-6 shadow-sm overflow-hidden">
            <FloralCorner position="top-right" className="!text-gold/80" />
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
                Scenography Theme
              </span>
              <p className="font-serif text-lg text-charcoal-deep mt-1 leading-snug">
                {wedding.decorTheme}
              </p>
            </div>

            <div className="pt-4 border-t border-taupe-light/40">
              <span className="text-[11px] uppercase tracking-[0.2em] text-burgundy block mb-4 font-semibold">
                Design & Production Highlights
              </span>
              <ul className="space-y-3">
                {wedding.decorHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-charcoal/80 font-light flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contextual Consultation Action */}
            <div className="pt-6 border-t border-taupe-light/40">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-burgundy text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-deep transition-all duration-300 shadow-lg shadow-burgundy/15"
              >
                <MessageCircle className="w-4 h-4 text-champagne" />
                <span>Discuss a Celebration Like This</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-24 relative">
          <BotanicalWatermark orientation="right" />
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
              Visual Monograph
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-deep mt-2 mb-3 font-normal">
              Atmospheric Moments
            </h2>
            <FloralDivider variant="compact" className="!my-2 !justify-start" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {wedding.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] rounded-xl overflow-hidden border border-taupe-light/60 group shadow-md"
              >
                <Image
                  src={img}
                  alt={`${wedding.title} moment ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/30 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative rounded-2xl border border-gold/30 bg-gradient-to-br from-ivory-warm via-white to-alabaster p-10 text-center shadow-sm overflow-hidden">
          <FloralCorner position="top-left" className="!text-gold/80" />
          <FloralCorner position="top-right" className="!text-gold/80" />
          <FloralCorner position="bottom-left" className="!text-gold/80" />
          <FloralCorner position="bottom-right" className="!text-gold/80" />
          <BotanicalWatermark orientation="left" />
          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl text-charcoal-deep mb-3">
              Curate Your Own Unforgettable Chapter
            </h3>
            <FloralDivider variant="compact" />
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto mb-6 font-light">
              Every palace, every courtyard, and every riverbank holds untold magic. Connect directly with Gourav on WhatsApp to discuss your wedding dreams.
            </p>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-burgundy text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-burgundy-deep transition-all duration-300 shadow-lg shadow-burgundy/15"
            >
              <MessageCircle className="w-4 h-4 text-champagne" />
              <span>Consult Gourav on WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
