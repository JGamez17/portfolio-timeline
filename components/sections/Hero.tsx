import React from "react";

export default function Hero(): React.ReactElement {
  return (
    <section style={{
      background: "#1C1F26",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Mono', monospace",
    }}>

      {/* slate left accent bar */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0,
        width: 6, background: "#708090"
      }} />

      {/* subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(112,128,144,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(112,128,144,0.07) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      {/* stack pills — top right */}
      <div style={{
        position: "absolute", right: 48, top: 64,
        display: "flex", flexDirection: "column",
        gap: 10, alignItems: "flex-end"
      }}>
        {[
          "React · Next.js",
          "TypeScript",
          "Python · Node.js",
          "Jest · RTL · TDD",
          "Firebase · REST APIs",
          "Apple Inc. · 5 yrs",
        ].map((label) => (
          <span key={label} style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11, color: "#708090",
            background: "#21252E",
            border: "1px solid #3A4252",
            padding: "6px 14px", borderRadius: 2,
            letterSpacing: "0.06em"
          }}>
            {label}
          </span>
        ))}
      </div>

      {/* main content */}
      <div style={{
        position: "relative",
        padding: "64px 56px 56px 72px",
        maxWidth: 900
      }}>

        <div style={{
          display: "inline-block", fontSize: 11, fontWeight: 500,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#708090", border: "1px solid #2E3340",
          padding: "5px 12px", borderRadius: 2, marginBottom: 28
        }}>
          Available for hire · New York
        </div>

        <h1 style={{
          fontFamily:"var(--font-playfair), Georgia, serif",
          fontSize: "clamp(56px, 9vw, 88px)",
          fontWeight: 900, lineHeight: 0.95,
          color: "#F4F0E8", letterSpacing: "-0.02em",
          margin: "0 0 12px"
        }}>
          Jess<br />
          <span style={{ color: "#708090" }}>//</span> Gamez
        </h1>

        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(18px, 3vw, 26px)",
          fontWeight: 700, color: "#A8B4BE",
          margin: "0 0 32px"
        }}>
          <span style={{ color: "#C8D4DC" }}>Full-Stack Engineer</span> &amp; QA Specialist
        </p>

        <div style={{
          width: 48, height: 2,
          background: "#708090", marginBottom: 28
        }} />

        <p style={{
          fontSize: 13, color: "#6B7A86",
          lineHeight: 1.8, maxWidth: 520, marginBottom: 44
        }}>
          5+ years engineering and quality assurance at{" "}
          <strong style={{ color: "#A8B4BE", fontWeight: 500 }}>Apple Inc.</strong>
          <br />
          Building reliable, well-tested software with a{" "}
          <strong style={{ color: "#A8B4BE", fontWeight: 500 }}>QA-first mindset</strong>.
          <br />
          Flatiron School · M.A. Health Studies · Based in New York.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" style={{
            fontSize: 12, fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#1C1F26", background: "#F4F0E8",
            padding: "14px 28px", borderRadius: 2,
            textDecoration: "none", display: "inline-block"
          }}>
            View Projects
          </a>
          <a href="#contact" style={{
            fontSize: 12, fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#708090", background: "transparent",
            border: "1px solid #2E3340",
            padding: "13px 28px", borderRadius: 2,
            textDecoration: "none", display: "inline-block"
          }}>
            Get in Touch
          </a>
        </div>
      </div>

      {/* bottom scroll hint */}
      <div style={{
        position: "absolute", bottom: 32, left: 72,
        display: "flex", alignItems: "center", gap: 10,
        fontSize: 10, color: "#2E3340",
        letterSpacing: "0.12em", textTransform: "uppercase"
      }}>
        <div style={{ width: 32, height: 1, background: "#2E3340" }} />
        scroll to explore
      </div>

    </section>
  );
}