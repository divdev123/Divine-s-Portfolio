"use client";

import { useState } from "react";
import { projects, archiveProjects } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

function PreviewThumbnail({ url, name, tag }: { url: string; name: string; tag: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        flexShrink: 0,
        width: "130px",
        height: "86px",
        border: "1px solid var(--border)",
        overflow: "hidden",
        background: "var(--surface)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Browser chrome bar */}
      <div
        style={{
          height: "14px",
          minHeight: "14px",
          background: "#161616",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          paddingLeft: "6px",
          gap: "3px",
        }}
      >
        {(["rgba(255,95,87,0.6)", "rgba(255,189,46,0.6)", "rgba(39,201,63,0.6)"] as const).map((c, i) => (
          <span key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: c, display: "inline-block" }} />
        ))}
      </div>

      {/* Scaled live iframe */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {/* Placeholder shown while loading */}
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
              zIndex: 1,
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {tag}
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "0.6rem", color: "var(--muted)", textAlign: "center", padding: "0 4px", lineHeight: 1.3 }}>
              {name}
            </span>
          </div>
        )}

        {/* iframe scaled to 1/10th of a 1300×720 desktop viewport */}
        <iframe
          src={url}
          title={name}
          loading="lazy"
          style={{
            width: "1300px",
            height: "720px",
            transform: "scale(0.1)",
            transformOrigin: "0 0",
            border: "none",
            pointerEvents: "none",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      style={{
        padding: "8rem 2.5rem",
        borderTop: "1px solid var(--border)",
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
              03 — Projects
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
              <rect x="15" y="20" width="150" height="110" rx="6" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
              <line x1="15" y1="40" x2="165" y2="40" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
              <circle cx="30" cy="30" r="4" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
              <circle cx="44" cy="30" r="4" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
              <circle cx="58" cy="30" r="4" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
              <line x1="30" y1="58" x2="90" y2="58" stroke="#c9a84c" strokeWidth="1.5" opacity="0.8"/>
              <line x1="30" y1="72" x2="130" y2="72" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
              <line x1="30" y1="86" x2="75" y2="86" stroke="#c9a84c" strokeWidth="1.5" opacity="0.6"/>
              <line x1="30" y1="100" x2="110" y2="100" stroke="#c9a84c" strokeWidth="1.5" opacity="0.4"/>
              <line x1="30" y1="114" x2="60" y2="114" stroke="#c9a84c" strokeWidth="1.5" opacity="0.7"/>
              <circle cx="90" cy="165" r="8" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
              <circle cx="45" cy="200" r="6" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.7"/>
              <circle cx="135" cy="200" r="6" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.7"/>
              <circle cx="90" cy="200" r="4" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
              <line x1="90" y1="173" x2="45" y2="194" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
              <line x1="90" y1="173" x2="135" y2="194" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
              <line x1="90" y1="173" x2="90" y2="196" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3,3" opacity="0.3"/>
              <line x1="90" y1="130" x2="90" y2="157" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
              <circle cx="90" cy="165" r="3" fill="#c9a84c" opacity="0.6"/>
            </svg>
          </div>
        </div>

        {/* Right — project cards + archive */}
        <div>
          {/* Featured cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "var(--text)",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  alignItems: "flex-start",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {/* Left — text content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Tag */}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.tag}
                  </span>

                  {/* Name + arrow */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {project.name}
                    <span style={{ color: "var(--accent)", fontSize: "0.95rem", fontWeight: 400 }}>↗</span>
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                      marginBottom: "0.9rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          padding: "0.2rem 0.5rem",
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — live website preview */}
                <PreviewThumbnail
                  url={project.url}
                  name={project.name}
                  tag={project.tag}
                />
              </a>
            ))}
          </div>

          {/* Archive */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "1rem",
              }}
            >
              Archive
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {archiveProjects.map((project, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "1rem",
                    padding: "0.9rem 0",
                    borderBottom: "1px solid var(--border)",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.2rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          color: "var(--text)",
                        }}
                      >
                        {project.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.58rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>
                    <p style={{ color: "var(--muted)", fontSize: "0.8rem", lineHeight: 1.5 }}>
                      {project.description}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", justifyContent: "flex-end" }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.58rem",
                          letterSpacing: "0.1em",
                          padding: "0.15rem 0.4rem",
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
