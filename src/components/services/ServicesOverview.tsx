import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-ivory-subtle/40 border-t border-champagne-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold">
            Architectural Precision & Design
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal-deep mt-3 mb-6 font-normal">
            The Four Disciplines of Mastery
          </h2>
          <p className="text-sm md:text-base text-charcoal-muted font-light leading-relaxed">
            Every celebration requires four fundamental pillars of craftsmanship operating in total unison. We don’t outsource vision; we architect each discipline in-house with obsessive precision.
          </p>
        </div>

        {/* Editorial Stacked Layout - Refusing generic icon-box cards */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Anchor Column */}
                <div
                  className={`lg:col-span-6 relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-champagne-border/50 shadow-xl group bg-white ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 font-serif text-3xl md:text-4xl text-ivory/80 drop-shadow-sm">
                    {service.number}
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-rosegold font-medium">
                    <span>Discipline {service.number}</span>
                    <span className="w-8 h-[1px] bg-rosegold/50" />
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-burgundy font-normal">
                    {service.title}
                  </h3>

                  <p className="text-xs uppercase tracking-[0.15em] text-taupe font-semibold">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Curated Scope Checklist */}
                  <div className="pt-2 pb-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-burgundy block mb-3 font-semibold">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-xs text-charcoal/80 font-light flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rosegold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-2 border-burgundy/40 bg-white/70 pl-4 py-2.5 rounded-r-lg text-xs italic text-charcoal/80 font-serif shadow-sm">
                    &ldquo;{service.philosophy}&rdquo;
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Link to Full Services Breakdown */}
        <div className="mt-20 pt-12 border-t border-champagne-border/40 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-burgundy/30 text-burgundy text-xs uppercase tracking-[0.2em] hover:bg-burgundy hover:text-ivory transition-all duration-300 shadow-sm"
          >
            <span>Explore Complete Disciplines & Timeline</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
