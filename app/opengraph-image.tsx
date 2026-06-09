import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yaacob Martinez — Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0b0b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent line */}
        <div
          style={{
            width: 56,
            height: 4,
            background: "#c8a96e",
            borderRadius: 2,
            marginBottom: 48,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}
        >
          Yaacob Martinez
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#b4b4b4",
            marginTop: 20,
            letterSpacing: "-0.5px",
          }}
        >
          Full Stack Web Developer
        </div>

        {/* Stack chips row */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "React", "TypeScript", "Node.js", "AWS"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: 999,
                padding: "8px 18px",
                fontSize: 18,
                color: "#6b6b6b",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom-right: availability badge */}
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 96,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span style={{ fontSize: 20, color: "#6b6b6b" }}>
            Available for remote work
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
