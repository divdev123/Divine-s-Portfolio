"use client";

import { education } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section
      id="education"
      style={{
        padding: "8rem 2.5rem",
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left — label + illustration */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              02 — Education
            </span>
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "var(--accent)",
              }}
            />
          </div>

          {/* Animated SVG */}
          <div
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-60px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <svg
              viewBox="0 0 200 220"
              width="100%"
              style={{ maxWidth: "180px", opacity: 0.85 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="160" width="130" height="18" rx="3" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
              <rect x="28" y="138" width="115" height="18" rx="3" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.7"/>
              <rect x="36" y="116" width="100" height="18" rx="3" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
              <line x1="40" y1="160" x2="40" y2="178" stroke="#c9a84c" strokeWidth="1"/>
              <line x1="48" y1="138" x2="48" y2="156" stroke="#c9a84c" strokeWidth="1" opacity="0.7"/>
              <line x1="56" y1="116" x2="56" y2="134" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
              <polygon points="85,40 140,62 85,84 30,62" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
              <rect x="122" y="62" width="3" height="28" fill="#c9a84c" opacity="0.8"/>
              <circle cx="123.5" cy="93" r="5" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
              <polygon points="85,40 140,62 85,62" fill="rgba(201,168,76,0.07)"/>
              <line x1="85" y1="95" x2="85" y2="113" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
              <circle cx="85" cy="62" r="3" fill="#c9a84c"/>
              <circle cx="20" cy="169" r="2" fill="#c9a84c" opacity="0.5"/>
              <circle cx="28" cy="147" r="2" fill="#c9a84c" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Right — timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {education.map((item, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "2rem",
                padding: "2rem 0",
                borderBottom: "1px solid var(--border)",
                alignItems: "start",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--accent-dim)";
                (e.currentTarget as HTMLDivElement).style.paddingLeft = "1rem";
                (e.currentTarget as HTMLDivElement).style.paddingRight = "1rem";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLDivElement).style.paddingLeft = "0";
                (e.currentTarget as HTMLDivElement).style.paddingRight = "0";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  paddingTop: "0.25rem",
                }}
              >
                {item.period}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    marginBottom: "0.4rem",
                    color: "var(--text)",
                  }}
                >
                  {item.institution}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #education > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}