import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import type { Wedding } from "@/data/weddings";
import { FloralCorner } from "@/components/ui/FloralMotif";

interface WeddingCardProps {
  wedding: Wedding;
  priority?: boolean;
}

export default function WeddingCard({ wedding, priority = false }: WeddingCardProps) {
  return (
    <article className="group relative rounded-2xl overflow-hidden border border-gold/25 bg-white transition-all duration-500 hover:border-gold/60 hover:shadow-xl hover:shadow-charcoal/5 flex flex-col">
      <FloralCorner position="bottom-left" className="!text-gold/75" />
      <FloralCorner position="bottom-right" className="!text-gold/75" />
      {/* Visual Media Canvas */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ivory-subtle">
        <Image
          src={wedding.heroImage}
          alt={`${wedding.title} - ${wedding.couple}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Layered soft lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Location pill */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-champagne-border/50 text-[10px] uppercase tracking-[0.2em] text-burgundy font-medium shadow-sm">
          <MapPin className="w-3 h-3 text-rosegold" />
          <span>{wedding.location.split(",")[0]}</span>
        </div>

        {/* Year tag */}
        <div className="absolute top-4 right-4 text-[10px] font-serif text-charcoal font-medium tracking-widest px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-champagne-border/40 shadow-sm">
          {wedding.year}
        </div>
      </div>

      {/* Editorial Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-center gap-4 text-xs text-taupe tracking-wider mb-2 font-medium">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-rosegold" />
              {wedding.guestScale}
            </span>
            <span>·</span>
            <span className="text-burgundy truncate font-light">{wedding.venue}</span>
          </div>

          <h3 className="font-serif text-xl md:text-2xl text-charcoal-deep font-normal group-hover:text-burgundy transition-colors leading-snug">
            {wedding.title}
          </h3>

          <p className="text-xs uppercase tracking-[0.2em] text-rosegold font-medium mt-1 mb-3">
            {wedding.couple}
          </p>

          <p className="text-xs text-charcoal-muted font-light leading-relaxed line-clamp-2">
            {wedding.description}
          </p>
        </div>

        {/* Deep Dive Action */}
        <div className="pt-4 border-t border-champagne-border/40 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-burgundy font-semibold">
          <span>Explore The Chronicle</span>
          <div className="w-8 h-8 rounded-full border border-burgundy/25 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-ivory transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Full Click Surface */}
        <Link
          href={`/weddings/${wedding.slug}`}
          className="absolute inset-0 z-20"
          aria-label={`View chronicle for ${wedding.title}`}
        >
          <span className="sr-only">View chronicle for {wedding.title}</span>
        </Link>
      </div>
    </article>
  );
}
