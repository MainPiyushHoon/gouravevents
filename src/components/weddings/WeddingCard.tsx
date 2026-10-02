import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import type { Wedding } from "@/data/weddings";

interface WeddingCardProps {
  wedding: Wedding;
  priority?: boolean;
}

export default function WeddingCard({ wedding, priority = false }: WeddingCardProps) {
  return (
    <article className="group relative rounded-2xl overflow-hidden border border-champagne/15 bg-burgundy-deep/40 transition-all duration-500 hover:border-champagne/40 hover:shadow-2xl hover:shadow-burgundy/50 flex flex-col">
      {/* Visual Media Canvas */}
      <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
        <Image
          src={wedding.heroImage}
          alt={`${wedding.title} - ${wedding.couple}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Layered luxury lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Location pill */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian/80 backdrop-blur-md border border-champagne/20 text-[10px] uppercase tracking-[0.2em] text-champagne">
          <MapPin className="w-3 h-3 text-rosegold" />
          <span>{wedding.location.split(",")[0]}</span>
        </div>

        {/* Year tag */}
        <div className="absolute top-4 right-4 text-[10px] font-serif text-taupe/90 tracking-widest px-2 py-1 rounded bg-obsidian/60 backdrop-blur-sm">
          {wedding.year}
        </div>
      </div>

      {/* Editorial Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-center gap-4 text-xs text-taupe tracking-wider mb-2 font-light">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-rosegold" />
              {wedding.guestScale}
            </span>
            <span>·</span>
            <span className="text-rosegold/90 truncate">{wedding.venue}</span>
          </div>

          <h3 className="font-serif text-xl md:text-2xl text-ivory font-normal group-hover:text-champagne transition-colors leading-snug">
            {wedding.title}
          </h3>

          <p className="text-xs uppercase tracking-[0.2em] text-rosegold font-light mt-1 mb-3">
            {wedding.couple}
          </p>

          <p className="text-xs text-ivory/70 font-light leading-relaxed line-clamp-2">
            {wedding.description}
          </p>
        </div>

        {/* Deep Dive Action */}
        <div className="pt-4 border-t border-champagne/10 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-champagne font-medium">
          <span>Explore The Chronicle</span>
          <div className="w-8 h-8 rounded-full border border-champagne/20 flex items-center justify-center group-hover:bg-champagne group-hover:text-obsidian transition-all duration-300">
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
