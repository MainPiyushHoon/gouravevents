import Hero from "@/components/hero/Hero";
import DestinationsShowcase from "@/components/destinations/DestinationsShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Hero />
      <DestinationsShowcase />
    </main>
  );
}
