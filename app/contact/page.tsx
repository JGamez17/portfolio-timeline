"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Nav from "@/components/sections/Nav"
import Footer from "@/components/sections/Footer"

const phrases = ["Let's Create.", "Let's Innovate.", "Let's Connect."]

const contactInfo = [
  { key: "Email", value: "jpgamez1789@icloud.com", href: "mailto:jpgamez1789@icloud.com" },
  { key: "LinkedIn", value: "linkedin.com/in/jpgamez", href: "https://linkedin.com/in/jpgamez" },
  { key: "GitHub", value: "github.com/JGamez17", href: "https://github.com/JGamez17" },
  { key: "Portfolio", value: "portfolio-timeline.vercel.app", href: "https://portfolio-timeline-60k7ah9ni-jgamez17s-projects.vercel.app" },
  { key: "Location", value: "New York, NY · Open to Remote", href: null },
  { key: "Roles", value: "Full-Stack · QA Engineer · Technical Support", href: null },
]

export default function ContactPage() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (!isDeleting && displayedText === current) {
      const pause = setTimeout(() => setIsDeleting(true), 1800)
      return () => clearTimeout(pause)
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
      return
    }

    const speed = isDeleting ? 30 : 60
    const timeout = setTimeout(() => {
      setDisplayedText(isDeleting
        ? current.slice(0, displayedText.length - 1)
        : current.slice(0, displayedText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, phraseIndex])

  return (
    <main className="min-h-screen bg-[#111110] text-[#e8e6e0]">
      <Nav />

      {/* Hero */}
      <section className="px-12 py-28 border-b border-white/[0.08]">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[11px] tracking-[0.16em] uppercase text-[#5F5E5A] mb-8"
        >
          Contact
        </motion.p>

        {/* Typewriter headline */}
        <div className="text-[clamp(40px,7vw,72px)] font-medium leading-[1.0] tracking-[-0.02em] text-[#e8e6e0] mb-6 min-h-[1.1em] flex items-center">
          <span>{displayedText}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
            className="inline-block w-[3px] h-[0.85em] bg-[#e8e6e0] ml-1 align-middle"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[14px] text-[#888780] leading-relaxed max-w-md"
        >
          Open to full-time engineering roles, freelance projects, and
          interesting conversations. Based in New York — available remotely.
        </motion.p>
      </section>

      {/* Contact info grid */}
      <section className="px-12 py-20 border-b border-white/[0.08]">
        <p className="text-[11px] tracking-[0.16em] uppercase text-[#5F5E5A] mb-12">
          Get in touch
        </p>

        <div
          className="border border-white/[0.08]"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.08)" }}
        >
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-[#111110] p-8"
            >
              <p className="text-[9px] tracking-[0.14em] uppercase text-[#444441] mb-2">
                {item.key}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#888780] hover:text-[#e8e6e0] transition-colors border-b border-white/[0.08] pb-0.5"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[13px] text-[#888780]">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  )
}