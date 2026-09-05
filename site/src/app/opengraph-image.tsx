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
          backgroundColor: "#FFFDF7",
          padding: "42px 52px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Accent Multi-Color Strip */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "7px",
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
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#1F1D1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFDF7",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              TL
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "900",
                  color: "#1F1D1A",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Tyler Lindow
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#4F46E5",
                  fontFamily: "monospace",
                  letterSpacing: "0.02em",
                }}
              >
                Fintech Product-Eng Manager
              </span>
            </div>
          </div>

          {/* Site Pill Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E6E2D8",
              borderRadius: "9999px",
              padding: "7px 16px",
              fontSize: "13px",
              fontWeight: "700",
              color: "#1F1D1A",
              fontFamily: "monospace",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <span>tlindow.github.io</span>
          </div>
        </div>

        {/* Middle Section: Left Content + Right Card Preview */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "36px",
            width: "100%",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              flex: 1,
              maxWidth: "680px",
            }}
          >
            <div
              style={{
                fontSize: "54px",
                fontWeight: "900",
                color: "#1F1D1A",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Fintech Product-Eng</span>
              <span style={{ color: "#4F46E5" }}>Manager</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                backgroundColor: "#FFFFFF",
                padding: "14px 20px",
                borderRadius: "14px",
                border: "1px solid #E6E2D8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
            >
              <div
                style={{
                  fontSize: "21px",
                  fontWeight: "700",
                  color: "#1F1D1A",
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
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#736E67",
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

            {/* Work with Me Pillars */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#736E67",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "monospace",
                  marginRight: "4px",
                }}
              >
                Work with me:
              </span>
              {["Mentorship", "Culture-Building", "Launch"].map((pillar) => (
                <div
                  key={pillar}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "#EEF2FF",
                    border: "1px solid #C7D2FE",
                    borderRadius: "8px",
                    padding: "4px 10px",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#3730A3",
                    fontFamily: "monospace",
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#4F46E5",
                    }}
                  />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Fintech Debit Card Mockup */}
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "360px",
              height: "230px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Background Layer Card (Subtle Stack Effect) */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "22px",
                width: "324px",
                height: "204px",
                borderRadius: "18px",
                backgroundColor: "#F5F3EF",
                border: "1px solid #E6E2D8",
                display: "flex",
              }}
            />

            {/* Foreground Main Debit Card */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "330px",
                height: "208px",
                borderRadius: "18px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D6D3D1",
                boxShadow: "0 10px 28px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Card Color Trim Strip */}
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background:
                    "linear-gradient(90deg, #4F46E5 0%, #7DD3FC 60%, #6EE7B7 100%)",
                }}
              />

              {/* Card Body */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "16px 18px",
                  flex: 1,
                }}
              >
                {/* Card Top Row: Chip + Contactless + Wordmark */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {/* Gold Smart Chip */}
                    <div
                      style={{
                        width: "38px",
                        height: "28px",
                        borderRadius: "5px",
                        background:
                          "linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)",
                        border: "1px solid #D97706",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "26px",
                          height: "18px",
                          border: "1px solid #B45309",
                          borderRadius: "3px",
                          opacity: 0.6,
                        }}
                      />
                    </div>

                    {/* Contactless waves SVG */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#736E67"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                      <path d="M12 19a8.5 8.5 0 0 0 0-14" />
                      <path d="M15.5 21.5a12 12 0 0 0 0-19" />
                    </svg>
                  </div>

                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                      color: "#1F1D1A",
                      letterSpacing: "0.12em",
                      fontFamily: "monospace",
                    }}
                  >
                    LINDOW LABS
                  </span>
                </div>

                {/* Card Middle: Pillar Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      backgroundColor: "#F5F3EF",
                      border: "1px solid #E6E2D8",
                      borderRadius: "6px",
                      padding: "3px 8px",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: "#1F1D1A",
                      fontFamily: "monospace",
                    }}
                  >
                    <span>DEBIT</span>
                    <span style={{ color: "#736E67" }}>|</span>
                    <span style={{ color: "#4F46E5" }}>WORK WITH ME</span>
                  </div>
                </div>

                {/* Card Bottom: Number + Holder Name */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: "600",
                        color: "#736E67",
                        letterSpacing: "0.08em",
                        fontFamily: "monospace",
                        textTransform: "uppercase",
                      }}
                    >
                      Cardholder
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "800",
                        color: "#1F1D1A",
                        letterSpacing: "0.05em",
                        fontFamily: "monospace",
                      }}
                    >
                      TYLER LINDOW
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#736E67",
                      fontFamily: "monospace",
                      letterSpacing: "0.14em",
                    }}
                  >
                    •••• 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Previous Employers & Education Badges */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            borderTop: "1px solid #E6E2D8",
            paddingTop: "14px",
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
                color: "#736E67",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              Previous Impact & Educational Institutions
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
                  border: "1px solid #E6E2D8",
                  borderRadius: "8px",
                  padding: "4px 11px",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#1F1D1A",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                }}
              >
                <span>{item.name}</span>
                {item.role && (
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "500",
                      color: "#736E67",
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
