"use client"

import { motion } from "framer-motion"
import { timelineData } from "./timeline-data"

export default function Timeline() {
  return (
    <section className="px-12 py-20 border-b border-white/[0.08]">
      <p className="text-[11px] tracking-[0.16em] uppercase text-[#5F5E5A] mb-16">
        Timeline
      </p>

      <div className="relative pl-6 border-l border-white/[0.08]">
        {timelineData.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative mb-14 last:mb-0 pl-8"
          >
            {/* dot */}
            <div className="absolute -left-[25px] top-[6px] w-[7px] h-[7px] rounded-full bg-[#5F5E5A]" />

            <p className="text-[11px] tracking-[0.12em] uppercase text-[#5F5E5A] mb-2">
              {event.year}
            </p>

            <h3 className="text-[16px] font-medium text-[#e8e6e0] mb-1">
              {event.title}
            </h3>

            <p className="text-[13px] text-[#888780] mb-3">
              {event.organization}
            </p>

            <p className="text-[13px] text-[#5F5E5A] leading-relaxed max-w-xl mb-4">
              {event.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {event.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] tracking-[0.08em] uppercase text-[#5F5E5A] border border-white/[0.07] px-2.5 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}