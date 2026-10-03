import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel, Pinyon_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { siteConfig } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Gourav Events | Luxury & Royal Wedding Planners",
    template: "%s | Gourav Events",
  },
  description:
    "Bespoke luxury wedding planning and event design studio crafting extraordinary royal and scenic celebrations in Jim Corbett, Jaipur, Udaipur, and Rishikesh.",
  keywords: [
    "wilderness wedding Jim Corbett",
    "luxury wedding planner India",
    "royal destination wedding Jaipur",
    "lake palace wedding Udaipur",
    "riverside wedding Rishikesh",
    "Gourav Events",
  ],
  authors: [{ name: "Gourav Events", url: siteConfig.url }],
  creator: "Gourav Events",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Gourav Events | Luxury & Royal Wedding Planners",
    description:
      "Crafting extraordinary weddings where royalty meets emotion across Jim Corbett, Jaipur, Udaipur, and Rishikesh.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourav Events | Luxury & Royal Wedding Planners",
    description:
      "Crafting extraordinary weddings where royalty meets emotion across Jim Corbett, Jaipur, Udaipur, and Rishikesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  image: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneDisplay,
  priceRange: "$$$$",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Jim Corbett" },
    { "@type": "AdministrativeArea", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Udaipur" },
    { "@type": "AdministrativeArea", name: "Rishikesh" },
    { "@type": "Country", name: "India" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  sameAs: [
    siteConfig.socials.instagram,
    siteConfig.socials.pinterest,
    siteConfig.socials.youtube,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${plusJakartaSans.variable} ${pinyonScript.variable}`}
    >
      <body className="bg-alabaster text-charcoal antialiased min-h-screen flex flex-col font-sans selection:bg-burgundy selection:text-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
