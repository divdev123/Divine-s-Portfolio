"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
        }}
      />

      {/* Gold glow blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Two column layout */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* LEFT — Text */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <span style={{ width: "32px", height: "1px", backgroundColor: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Available for work
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "1.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.25s",
            }}
          >
            Divine
            <br />
            <span style={{ color: "var(--accent)" }}>Samuel</span>
            <br />
            Adoyi
          </h1>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "3rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.4s",
            }}
          >
            {personal.title} — Finnitrex Solutions Ltd.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.55s",
            }}
          >
            <a
              href="#projects"
              style={{ padding: "0.875rem 2rem", backgroundColor: "var(--accent)", color: "var(--bg)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Projects
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "0.875rem 2rem", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", transition: "border-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }}
            >
              GitHub
            </a>
            <a
              href={`mailto:${personal.email}`}
              style={{ padding: "0.875rem 2rem", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", transition: "border-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.9s ease 0.5s",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Frame: position:relative so the gold border is anchored here. Padding makes room for the offset. */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              paddingBottom: "16px",
              paddingRight: "16px",
            }}
          >
            {/* Photo box */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                overflow: "hidden",
                border: "2px solid var(--accent)",
                borderRadius: "12px",
                zIndex: 1,
              }}
            >
              <Image
                src="/divine.jpg"
                alt="Divine Samuel Adoyi"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>

            {/* Gold offset border — outside overflow:hidden so it peeks behind the photo */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "calc(100% - 16px)",
                height: "calc(100% - 16px)",
                border: "1px solid var(--accent)",
                opacity: 0.5,
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: visible ? 0.4 : 0,
          transition: "opacity 0.7s ease 1s",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, var(--muted), transparent)" }} />
      </div>
    </section>
  );
}