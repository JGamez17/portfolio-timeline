"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TMDB Movie Discovery App",
    description:
      "Full-stack TypeScript application with comprehensive Jest & RTL coverage across REST API handlers, custom hooks, and UI components. Implements multi-layer caching, typed fetch wrappers, and graceful API fallbacks.",
    stack: ["Next.js 15", "TypeScript", "Jest", "RTL", "SWR", "Vercel"],
    live: "https://github.com/JGamez17",
    github: "https://github.com/JGamez17",
    accent: "#4A6FA5",
  },
  {
    title: "PlayGuard",
    description:
      "Full-stack parental controls mobile app built with React Native and Firebase, plus a Next.js web proof-of-concept. Architected real-time database integration, authentication flows, and cross-platform UI components.",
    stack: ["React Native", "Expo", "Firebase", "Next.js"],
    live: "https://age-rating-advisor.vercel.app/",
    github: "https://github.com/JGamez17",
    accent: "#708090",
  },
  {
    title: "Leica Gallery",
    description:
      "A curated photo gallery web app built to showcase photography with a minimal, high-fidelity aesthetic. Focuses on clean layout, image performance, and responsive design across all screen sizes.",
    stack: ["React", "Next.js", "CSS"],
    live: "https://github.com/JGamez17",
    github: "https://github.com/JGamez17",
    accent: "#C0A882",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects(): React.ReactElement {
  return (
    <section
      id="projects"
      style={{
        background: "#16191F",
        padding: "clamp(48px, 8vw, 96px) clamp(20px, 5vw, 72px)",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 64 }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: "#708090",
            marginBottom: 12,
          }}
        >
          Selected Work
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 900,
            color: "#F4F0E8",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Grail Projects
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{
              background: "#1C1F26",
              border: "1px solid #2A2F3A",
              borderRadius: 4,
              padding: "clamp(20px, 4vw, 32px)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: project.accent,
              }}
            />

            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(17px, 2.5vw, 20px)",
                fontWeight: 700,
                color: "#F4F0E8",
                margin: 0,
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: "clamp(12px, 1.5vw, 13px)",
                color: "#6B7A86",
                lineHeight: 1.8,
                margin: 0,
                flex: 1,
              }}
            >
              {project.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: project.accent,
                    border: `1px solid ${project.accent}40`,
                    padding: "4px 10px",
                    borderRadius: 2,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#F4F0E8",
                  textDecoration: "none",
                  borderBottom: `1px solid ${project.accent}`,
                  paddingBottom: 2,
                }}
               >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#6B7A86",
                  textDecoration: "none",
                  borderBottom: "1px solid #2A2F3A",
                  paddingBottom: 2,
                }}
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}