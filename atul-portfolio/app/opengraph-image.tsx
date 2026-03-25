import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Atul — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 64px",
            flex: 1,
            zIndex: 1,
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: "flex",
              background: "#f97316",
              color: "#111",
              fontSize: 14,
              fontWeight: 800,
              padding: "6px 14px",
              marginBottom: 28,
              width: "fit-content",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>

          {/* Name */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Atul
          </div>

          {/* Role */}
          <div
            style={{
              color: "#f97316",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 24,
              letterSpacing: "0.02em",
            }}
          >
            Backend Engineer
          </div>

          {/* Tagline */}
          <div
            style={{
              color: "#9ca3af",
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.5,
              marginBottom: 40,
              maxWidth: 480,
            }}
          >
            I build systems that don&apos;t break. APIs, queues, distributed systems — the infrastructure layer that keeps everything from falling apart.
          </div>

          {/* Tech stack pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "TypeScript"].map((tag) => (
              <div
                key={tag}
                style={{
                  border: "1.5px solid #374151",
                  color: "#d1d5db",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "5px 12px",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right decorative panel */}
        <div
          style={{
            width: 260,
            background: "#1a1a1a",
            borderLeft: "2px solid #1f2937",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Big orange symbol */}
          <div
            style={{
              fontSize: 180,
              color: "#f97316",
              opacity: 0.15,
              fontWeight: 900,
              position: "absolute",
            }}
          >
            {"{}"}
          </div>
          {/* Vertical text */}
          <div
            style={{
              color: "#374151",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              transform: "rotate(90deg)",
              whiteSpace: "nowrap",
            }}
          >
            atulkr20 · github.com
          </div>
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#f97316",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
