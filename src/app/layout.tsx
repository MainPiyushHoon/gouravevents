import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { siteConfig } from "@/data/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0B0909",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Gourav Events | Luxury & Royal Wedding Planners",
    template: "%s | Gourav Events",
  },
  description:
    "Bespoke luxury wedding planning and event design studio crafting extraordinary royal and scenic celebrations in Jaipur, Udaipur, Jim Corbett, and Rishikesh.",
  keywords: [
    "luxury wedding planner India",
    "royal destination wedding Jaipur",
    "lake palace wedding Udaipur",
    "wilderness wedding Jim Corbett",
    "riverside wedding Rishikesh",
    "Gourav Events",
  ],
  authors: [{ name: "Gourav Events", url: siteConfig.url }],
  creator: "Gourav Events",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Gourav Events | Luxury & Royal Wedding Planners",
    description:
      "Crafting extraordinary weddings where royalty meets emotion across Jaipur, Udaipur, Jim Corbett, and Rishikesh.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourav Events | Luxury & Royal Wedding Planners",
    description:
      "Crafting extraordinary weddings where royalty meets emotion across Jaipur, Udaipur, Jim Corbett, and Rishikesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="bg-obsidian text-ivory antialiased min-h-screen flex flex-col font-sans selection:bg-burgundy selection:text-champagne">
        <SmoothScroll>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
