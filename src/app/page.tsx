import Hero from "@/components/hero/Hero";
import DestinationsShowcase from "@/components/destinations/DestinationsShowcase";
import FeaturedWeddings from "@/components/weddings/FeaturedWeddings";
import ServicesOverview from "@/components/services/ServicesOverview";
import FounderEthos from "@/components/home/FounderEthos";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster">
      <Hero />
      <FeaturedWeddings />
      <DestinationsShowcase />
      <ServicesOverview />
      <FounderEthos />
      <TestimonialSlider />

      {/* Direct VIP WhatsApp Concierge Section on Homepage */}
      <section id="inquiry" className="py-24 bg-gradient-to-t from-alabaster via-ivory-subtle/50 to-alabaster border-t border-champagne-border/40 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-rosegold font-semibold">
              Private Commission
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal-deep mt-2 mb-4 font-normal">
              Begin Planning with Gourav
            </h2>
            <p className="text-sm text-charcoal-muted font-light max-w-xl mx-auto leading-relaxed">
              Every detail is held in sacred trust. Share your celebration vision to launch an immediate private conversation on WhatsApp.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
