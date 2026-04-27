"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const links = [
  { label: "Work", href: "/work" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Contact", href: "/contact" },
]

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 flex justify-between items-center px-12 py-6 border-b border-white/[0.08] bg-[#111110]/90 backdrop-blur-sm"
    >
      <Link
        href="/"
        className="text-[13px] tracking-[0.12em] uppercase text-[#888780] hover:text-[#e8e6e0] transition-colors"
      >
        Jess Gamez
      </Link>

      <nav className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[12px] tracking-[0.1em] uppercase text-[#5F5E5A] hover:text-[#e8e6e0] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  )
}