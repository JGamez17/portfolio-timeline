"use client"

import { motion } from "framer-motion"
import type { TimelineEventType } from "./timeline-data"

interface TimelineEventProps {
  event: TimelineEventType
  index: number
  isActive: boolean
  onClick: () => void
}

export default function TimelineEvent({ event, index, isActive, onClick }: TimelineEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center w-64 md:w-80"
    >
      <EventDot isActive={isActive} icon={event.icon} />

      <div className="w-0.5 h-8 bg-border" />

      <motion.div
        whileHover={{ scale: 1.05, y: -4 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        className="cursor-pointer w-full"
      >
        <EventCard event={event} isActive={isActive} />
      </motion.div>
    </motion.div>
  )
}

function EventCard({ event, isActive }: { event: TimelineEventType; isActive: boolean }) {
  return (
    <div
      className={`
        p-6 rounded-lg border transition-all duration-300
        ${
          isActive
            ? "bg-card border-primary shadow-lg shadow-primary/20"
            : "bg-card/50 border-border hover:border-primary/50"
        }
      `}
    >
      <div className="text-sm text-primary font-mono mb-2">{event.year}</div>
      <h3 className="text-lg font-bold mb-1 line-clamp-2">{event.title}</h3>
      <div className="text-sm text-muted-foreground mb-3 line-clamp-1">{event.organization}</div>

      {/* Skills tags */}
      <div className="flex flex-wrap gap-2">
        {event.skills.slice(0, 2).map((skill) => (
          <span
            key={skill}
            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20 line-clamp-1"
          >
            {skill}
          </span>
        ))}
        {event.skills.length > 2 && (
          <span className="text-xs px-2 py-1 text-muted-foreground">+{event.skills.length - 2}</span>
        )}
      </div>
    </div>
  )
}

function EventDot({ isActive, icon }: { isActive: boolean; icon: string }) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1.2 : 1,
        boxShadow: isActive ? "0 0 0 8px rgba(6, 182, 212, 0.2)" : "0 0 0 0px rgba(6, 182, 212, 0)",
      }}
      transition={{ duration: 0.3 }}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center text-xl
        border-2 transition-colors duration-300 bg-background
        ${isActive ? "border-primary text-primary" : "border-border"}
      `}
    >
      {icon}
    </motion.div>
  )
}
