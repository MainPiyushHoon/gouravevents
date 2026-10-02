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
    <main className="min-h-screen bg-obsidian pt-28 pb-24 text-ivory">
      {/* Top Breadcrumb & Back Action */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <Link
          href="/weddings"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-taupe hover:text-champagne transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-rosegold" />
          <span>Back to All Chronicles</span>
        </Link>
      </div>

      <article className="max-w-6xl mx-auto px-6">
        {/* Monograph Header */}
        <header className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-rosegold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Royal Chronicle</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne font-normal mb-4 leading-tight">
            {wedding.title}
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-ivory/90 italic font-light mb-8">
            {wedding.couple}
          </p>

          {/* Key Facts Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-champagne/15 text-xs text-taupe">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold/90">
                Destination
              </span>
              <span className="text-ivory mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-champagne" />
                {wedding.location}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold/90">
                Venue
              </span>
              <span className="text-ivory mt-1 block truncate">
                {wedding.venue}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold/90">
                Scale
              </span>
              <span className="text-ivory mt-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-champagne" />
                {wedding.guestScale}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-rosegold/90">
                Season
              </span>
              <span className="text-ivory mt-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-champagne" />
                {wedding.year}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Visual Showcase */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-champagne/20 shadow-2xl mb-16">
          <Image
            src={wedding.heroImage}
            alt={wedding.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
        </div>

        {/* Narrative & Concept Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-champagne font-normal">
              The Celebration Narrative
            </h2>
            <p className="text-base text-ivory/85 font-light leading-relaxed">
              {wedding.narrative}
            </p>
            <p className="text-sm text-taupe font-light leading-relaxed">
              {wedding.description}
            </p>

            {wedding.testimonial && (
              <div className="rounded-2xl border border-champagne/20 bg-burgundy/30 p-8 my-8 relative">
                <Quote className="w-8 h-8 text-rosegold/40 mb-3" />
                <p className="font-serif text-lg text-ivory italic leading-relaxed mb-4">
                  &ldquo;{wedding.testimonial.quote}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-champagne font-medium">
                  — {wedding.testimonial.author}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar: Decor Theme & Scenography Highlights */}
          <div className="lg:col-span-4 rounded-2xl border border-champagne/15 bg-burgundy-deep/60 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-rosegold font-medium">
                Scenography Theme
              </span>
              <p className="font-serif text-lg text-champagne mt-1 leading-snug">
                {wedding.decorTheme}
              </p>
            </div>

            <div className="pt-4 border-t border-champagne/10">
              <span className="text-[11px] uppercase tracking-[0.25em] text-champagne block mb-4 font-medium">
                Design & Production Highlights
              </span>
              <ul className="space-y-3">
                {wedding.decorHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-ivory/80 font-light flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rosegold shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contextual Consultation Action */}
            <div className="pt-6 border-t border-champagne/10">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle transition-all duration-300 shadow-lg shadow-champagne/10"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss a Celebration Like This</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-24">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-medium">
              Visual Monograph
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-champagne mt-2 font-normal">
              Atmospheric Moments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {wedding.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] rounded-xl overflow-hidden border border-champagne/15 group shadow-lg"
              >
                <Image
                  src={img}
                  alt={`${wedding.title} moment ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl border border-champagne/20 bg-gradient-to-r from-burgundy/40 via-burgundy-deep to-obsidian p-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-champagne mb-4">
            Curate Your Own Unforgettable Chapter
          </h3>
          <p className="text-xs sm:text-sm text-ivory/80 max-w-lg mx-auto mb-6 font-light">
            Every palace, every courtyard, and every riverbank holds untold magic. Connect directly with Gourav on WhatsApp to discuss your wedding dreams.
          </p>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-champagne-subtle transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult Gourav on WhatsApp</span>
          </a>
        </div>
      </article>
    </main>
  );
}
