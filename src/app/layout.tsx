import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Gourav Events | Luxury & Royal Wedding Planners",
  description: "Premier luxury wedding planning and event design studio in Jaipur, Udaipur, Jim Corbett, and Rishikesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-ivory antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
