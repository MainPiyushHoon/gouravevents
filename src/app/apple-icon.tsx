import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  const logoPath = path.join(process.cwd(), "public", "brand-logo.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const base64Logo = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#2A080C",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          border: "4px solid #C59B4B",
          padding: "20px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64Logo}
          alt="Gaurav Events"
          style={{ width: "130px", height: "130px", objectFit: "contain" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

