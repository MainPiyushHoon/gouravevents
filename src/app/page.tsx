import Hero from "@/components/hero/Hero";
import DestinationsShowcase from "@/components/destinations/DestinationsShowcase";
import ServicesOverview from "@/components/services/ServicesOverview";
import FounderEthos from "@/components/home/FounderEthos";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Hero />
      <DestinationsShowcase />
      <ServicesOverview />
      <FounderEthos />
      <TestimonialSlider />
    </main>
  );
}
