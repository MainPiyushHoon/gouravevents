import Hero from "@/components/hero/Hero";
import DestinationsShowcase from "@/components/destinations/DestinationsShowcase";
import FeaturedWeddings from "@/components/weddings/FeaturedWeddings";
import ServicesOverview from "@/components/services/ServicesOverview";
import FounderEthos from "@/components/home/FounderEthos";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";
import ContactForm from "@/components/contact/ContactForm";
import { FloralDivider, BotanicalWatermark, RoyalBlossomMedallion, FloralSideGutter } from "@/components/ui/FloralMotif";

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster relative overflow-hidden">
      {/* Subtle outer margin flora for widescreen viewports */}
      <FloralSideGutter side="left" className="top-[900px]" />
      <FloralSideGutter side="right" className="top-[1800px]" />
      <FloralSideGutter side="left" className="top-[3200px]" />
      <FloralSideGutter side="right" className="top-[4600px]" />

      <Hero />
      <FeaturedWeddings />
      <DestinationsShowcase />
      <ServicesOverview />
      <FounderEthos />
      <TestimonialSlider />

      {/* Direct VIP WhatsApp Concierge Section on Homepage */}
      <section id="inquiry" className="py-24 bg-gradient-to-t from-alabaster via-ivory-subtle/50 to-alabaster border-t border-champagne-border/40 relative overflow-hidden">
        <BotanicalWatermark orientation="right" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <RoyalBlossomMedallion className="text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-1">
              Private Commission
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal-deep mt-2 mb-3 font-normal">
              Begin Planning with Gourav
            </h2>
            <p className="text-sm text-charcoal-muted font-light max-w-xl mx-auto leading-relaxed">
              Every detail is held in sacred trust. Share your celebration vision to launch an immediate private conversation on WhatsApp.
            </p>
            <FloralDivider variant="compact" className="mt-5 max-w-xs mx-auto" />
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
