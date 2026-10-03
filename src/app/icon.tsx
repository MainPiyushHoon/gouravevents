import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "6px",
          border: "1px solid #C59B4B",
          padding: "2px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64Logo}
          alt="Gaurav Events"
          style={{ width: "26px", height: "26px", objectFit: "contain" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

