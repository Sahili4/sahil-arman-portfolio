import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090B",
          padding: "60px 80px",
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.25), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            SA
          </div>
          <span style={{ color: "#A78BFA", fontSize: "18px", fontWeight: 700, letterSpacing: "2px" }}>
            SAHIL ARMAN // SENIOR FULL-STACK DEVELOPER
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#F4F4F5", fontSize: "52px", fontWeight: 800, lineHeight: 1.15 }}>
            Building Digital Products That Scale.
          </div>
          <div style={{ color: "#A1A1AA", fontSize: "22px" }}>
            Next.js, Node.js, Laravel, React Native, PostgreSQL &amp; Cloud Systems
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px", color: "#71717A", fontSize: "16px" }}>
          <span>Jaipur, India</span>
          <span>•</span>
          <span>Available for US, UK, CA, AU Contracts</span>
          <span>•</span>
          <span style={{ color: "#A78BFA" }}>sahil-arman-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
