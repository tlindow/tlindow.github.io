import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tyler Lindow — Fintech Product-Eng Manager";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBF9F5",
          padding: "48px 56px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Accent Gradient Border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "linear-gradient(90deg, #E06D53 0%, #EAA844 20%, #4D8B6F 40%, #4A7A96 60%, #4361EE 80%, #7209B7 100%)",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "#2E4057",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F4EBD9",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              TL
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  color: "#1C1917",
                  letterSpacing: "-0.03em",
                }}
              >
                Tyler Lindow
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2E4057",
                  fontFamily: "monospace",
                }}
              >
                Software Engineering Manager &lt;&gt; PM
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D6D3D1",
              borderRadius: "9999px",
              padding: "8px 18px",
              fontSize: "14px",
              fontWeight: "700",
              color: "#2E4057",
              fontFamily: "monospace",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            tlindow.github.io
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              fontSize: "58px",
              fontWeight: "900",
              color: "#1C1917",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Fintech Product-Eng</span>
            <span style={{ color: "#2E4057" }}>Manager</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              backgroundColor: "#FFFFFF",
              padding: "14px 22px",
              borderRadius: "14px",
              border: "1px solid #E7E5E4",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                fontSize: "23px",
                fontWeight: "700",
                color: "#1C1917",
                letterSpacing: "-0.01em",
              }}
            >
              B2B SaaS on curiosity-safe, GenAI Rails
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#78716C",
                fontFamily: "monospace",
              }}
            >
              <span>Onboarding</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="#4F46E5"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <span>$0 – $10B+ GMV enterprises</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Previous Employers & Education Badges */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderTop: "1px solid #E7E5E4",
            paddingTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: "700",
                color: "#78716C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              Previous Employers & Educational Institutions
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {[
              { name: "Affirm", role: "Merchant Advocacy" },
              { name: "Beginner", role: "Founder / DevRel" },
              { name: "Galvanize", role: "Lead SWE" },
              { name: "The Tech Interactive", role: "" },
              { name: "Computer History Museum", role: "" },
              { name: "Northwestern University", role: "Graduate" },
              { name: "UC San Diego", role: "NanoEngineering" },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D6D3D1",
                  borderRadius: "8px",
                  padding: "5px 12px",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#1C1917",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                }}
              >
                <span>{item.name}</span>
                {item.role && (
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "500",
                      color: "#78716C",
                      fontFamily: "monospace",
                    }}
                  >
                    ({item.role})
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
