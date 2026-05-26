"use client";

import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
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
            04 — Contact
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
            Let's build something remarkable together.
          </h2>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.9,
              marginBottom: "3rem",
              fontSize: "0.95rem",
            }}
          >
            Whether you have a project in mind, want to collaborate, or just
            want to say hello — my inbox is always open.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={`mailto:${personal.email}`}
              style={{
                padding: "0.875rem 2rem",
                backgroundColor: "var(--accent)",
                color: "var(--bg)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Send a message
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.875rem 2rem",
                border: "1px solid var(--border)",
                color: "var(--text)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
