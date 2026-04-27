"use client"

import { motion } from "framer-motion"

const projects = [
  {
    num: "01",
    name: "Leica Gallery",
    description:
      "A full-stack photo gallery application built for photographers who care about craft. Images served via Cloudinary CDN, metadata persisted in PostgreSQL.",
    specs: [
      { key: "Type", value: "Full-Stack Web App" },
      { key: "Year", value: "2025" },
      { key: "Database", value: "PostgreSQL · Neon" },
      { key: "Storage", value: "Cloudinary CDN" },
    ],
    tags: ["Next.js 15", "TypeScript", "Tailwind", "Prisma", "Framer Motion", "Cloudinary"],
    live: "https://leica-gallery-4qm8.vercel.app",
    github: "https://github.com/JGamez17/Leica-Gallery",
    gradient: "linear-gradient(135deg, #1a1a18 0%, #2c2a24 50%, #1e1c18 100%)",
    hero: true,
  },
  {
    num: "02",
    name: "TMDB Discovery",
    description:
      "Movie discovery app with a full Jest + RTL test suite. SWR data fetching, TypeScript throughout.",
    specs: [
      { key: "Type", value: "Frontend App" },
      { key: "Year", value: "2024" },
      { key: "Testing", value: "Jest · RTL" },
      { key: "Data", value: "TMDB API · SWR" },
    ],
    tags: ["Next.js 15", "TypeScript", "Jest · RTL", "SWR"],
    live: null,
    github: "https://github.com/JGamez17/tmdb-movie-app",
    gradient: "linear-gradient(135deg, #111318 0%, #1a1f2e 50%, #111318 100%)",
    hero: false,
  },
  {
    num: "03",
    name: "PlayGuard",
    description:
      "Age rating advisor mobile app with Firebase auth and a Next.js marketing landing page.",
    specs: [
      { key: "Type", value: "Mobile + Web" },
      { key: "Year", value: "2024" },
      { key: "Auth", value: "Firebase" },
      { key: "Platform", value: "iOS · Android" },
    ],
    tags: ["React Native", "Expo", "Firebase", "Next.js"],
    live: "https://age-rating-advisor.vercel.app",
    github: "https://github.com/JGamez17/age-rating-advisor",
    gradient: "linear-gradient(135deg, #141118 0%, #1e1a2a 50%, #141118 100%)",
    hero: false,
  },
]

export default function LookBook() {
  return (
    <section className="px-12 py-20 border-b border-white/[0.08]">
      <p className="text-[11px] tracking-[0.16em] uppercase text-[#5F5E5A] mb-12">
        Selected Work
      </p>

      <div
        className="border border-white/[0.08]"
        style={{ display: "grid", gap: "1px", background: "rgba(255,255,255,0.08)" }}
      >
        <motion.div
          key={projects[0].num}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 bg-[#111110]"
          >

          <div
            className="min-h-[320px] flex items-center justify-center"
            style={{ background: projects[0].gradient }}
          >
            <span className="text-[10px] tracking-[0.16em] uppercase text-white/[0.07]">
              Leica Gallery — Screenshot Coming Soon
            </span>
          </div>

          <div className="p-8 border-l border-white/[0.08] flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.16em] uppercase text-[#5F5E5A] mb-4">
                01 — Hero Project
              </p>
              <h3 className="text-[22px] font-medium text-[#e8e6e0] tracking-[-0.01em] mb-2">
                Leica Gallery
              </h3>
              <p className="text-[12px] text-[#888780] leading-relaxed max-w-xs mb-6">
                {projects[0].description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {projects[0].specs.map((s) => (
                  <div key={s.key}>
                    <p className="text-[9px] tracking-[0.14em] uppercase text-[#444441] mb-1">{s.key}</p>
                    <p className="text-[11px] text-[#888780]">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.08em] uppercase text-[#5F5E5A] border border-white/[0.07] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={projects[0].live!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.1em] uppercase text-[#888780] border-b border-white/[0.1] pb-0.5 hover:text-[#e8e6e0] transition-colors"
                >
                Live Site ↗
              </a>
              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.1em] uppercase text-[#888780] border-b border-white/[0.1] pb-0.5 hover:text-[#e8e6e0] transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* Row 2 — TMDB + PlayGuard */}
        <div
          className="grid grid-cols-2 bg-[#111110]"
          style={{ gap: "1px", background: "rgba(255,255,255,0.08)" }}
        >
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111110]"
            >
              {/* Image */}
              <div
                className="h-[200px] flex items-center justify-center"
                style={{ background: project.gradient }}
              >
                <span className="text-[10px] tracking-[0.14em] uppercase text-white/[0.07]">
                  {project.name} — Screenshot Coming Soon
                </span>
              </div>

              {/* Spec */}
              <div className="p-6 border-t border-white/[0.08]">
                <p className="text-[9px] tracking-[0.16em] uppercase text-[#5F5E5A] mb-3">
                  {project.num}
                </p>
                <h3 className="text-[16px] font-medium text-[#e8e6e0] mb-2">
                  {project.name}
                </h3>
                <p className="text-[11px] text-[#888780] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.specs.map((s) => (
                    <div key={s.key}>
                      <p className="text-[9px] tracking-[0.12em] uppercase text-[#444441] mb-1">{s.key}</p>
                      <p className="text-[11px] text-[#888780]">{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[0.08em] uppercase text-[#5F5E5A] border border-white/[0.07] px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-[0.1em] uppercase text-[#888780] border-b border-white/[0.1] pb-0.5 hover:text-[#e8e6e0] transition-colors"
                    >
                      Live Site ↗
                    </a>
                    )}
                    {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-[0.1em] uppercase text-[#888780] border-b border-white/[0.1] pb-0.5 hover:text-[#e8e6e0] transition-colors"
                    >
                      GitHub ↗
                    </a>
                    )}
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}