import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = "Gourav Events - Luxury & Royal Wedding Planners";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A0F11",
          backgroundImage:
            "radial-gradient(circle at 50% 45%, #4A0E17 0%, #1A0F11 75%, #100809 100%)",
          color: "#FAF8F5",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Outer framing line */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid rgba(212, 175, 55, 0.35)",
            display: "flex",
          }}
        />

        {/* Inner subtle border */}
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            right: 36,
            bottom: 36,
            border: "1px solid rgba(212, 175, 55, 0.15)",
            display: "flex",
          }}
        />

        {/* Monogram Crest */}
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            border: "1.5px solid #D4AF37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            color: "#D4AF37",
            fontSize: 26,
            letterSpacing: "0.15em",
            fontWeight: 600,
            background: "rgba(74, 14, 23, 0.6)",
          }}
        >
          GE
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: "0.22em",
            color: "#FAF8F5",
            textTransform: "uppercase",
            marginBottom: 10,
            textAlign: "center",
            display: "flex",
          }}
        >
          Gourav Events
        </div>

        {/* Studio Subheading */}
        <div
          style={{
            fontSize: 15,
            letterSpacing: "0.32em",
            color: "#D4AF37",
            textTransform: "uppercase",
            marginBottom: 26,
            fontWeight: 500,
            display: "flex",
          }}
        >
          Bespoke Luxury & Royal Wedding Studio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            fontStyle: "italic",
            color: "#E2D3B8",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
            marginBottom: 36,
            display: "flex",
          }}
        >
          "{siteConfig.tagline}"
        </div>

        {/* Sanctuary Destination Badges */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            fontSize: 13,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(250, 248, 245, 0.8)",
          }}
        >
          <span>Jaipur</span>
          <span style={{ color: "#D4AF37" }}>•</span>
          <span>Udaipur</span>
          <span style={{ color: "#D4AF37" }}>•</span>
          <span>Jim Corbett</span>
          <span style={{ color: "#D4AF37" }}>•</span>
          <span>Rishikesh</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
