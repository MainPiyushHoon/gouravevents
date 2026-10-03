import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: "#4A0E17",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37",
          fontWeight: 700,
          borderRadius: "36px",
          border: "4px solid #D4AF37",
        }}
      >
        GE
      </div>
    ),
    {
      ...size,
    }
  );
}
