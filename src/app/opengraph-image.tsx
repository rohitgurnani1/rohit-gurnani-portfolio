import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #000000 0%, #111827 100%)",
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2997ff",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#a1a1aa",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          AI Engineer. Software Developer. Building products that solve real
          problems.
        </div>
      </div>
    ),
    size,
  );
}
