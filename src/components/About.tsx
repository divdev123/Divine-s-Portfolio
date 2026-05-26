"use client";

import { personal } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
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
        {/* Left — section label */}
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
            01 — About
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "var(--accent)",
            }}
          />
        </div>

        {/* Right — content */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "2rem",
              fontStyle: "italic",
            }}
          >
            Building intelligent systems at the intersection of engineering and product.
          </h2>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.9,
              marginBottom: "1.5rem",
              fontSize: "0.95rem",
            }}
          >
            I'm Divine — Founder and Director of Finnitrex Solutions Ltd., a UK-based
            applied intelligence studio. I design and build AI-integrated platforms,
            learning management systems, fintech dashboards, high-performance websites,
            and data pipelines.
          </p>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.9,
              marginBottom: "3rem",
              fontSize: "0.95rem",
            }}
          >
            My background spans computer science, electronics, and robotics — giving me
            a full-stack perspective from low-level hardware to production-grade software.
            I build things that work, scale, and matter.
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent)",
                paddingBottom: "2px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              LinkedIn ↗
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent)",
                paddingBottom: "2px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              GitHub ↗
            </a>
            <a
              href={personal.finnitrex}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent)",
                paddingBottom: "2px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Finnitrex ↗
            </a>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #about > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}