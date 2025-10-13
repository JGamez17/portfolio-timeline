"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { TimelineEventType } from "./timeline-data"

interface TimelineModalProps {
  event: TimelineEventType | null
  onClose: () => void
}

export default function TimelineModal({ event, onClose }: TimelineModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (event) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [event, onClose])

  return (
    <AnimatePresence>
      {event && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl">
                    {event.icon}
                  </div>
                  <div>
                    <div className="text-sm text-primary font-mono mb-1">{event.year}</div>
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    <p className="text-muted-foreground">{event.organization}</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">About</h3>
                  <p className="text-foreground leading-relaxed">{event.description}</p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded bg-primary/10 text-primary border border-primary/20 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category badge */}
                <div className="pt-4 border-t border-border">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/20">
                    {event.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
