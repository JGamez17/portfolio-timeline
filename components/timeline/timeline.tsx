"use client"

import { useState, useEffect, useRef } from "react"
import TimelineEvent from "./timeline-event"
import TimelineModal from "./timeline-modal"
import { timelineData, type TimelineEventType } from "./timeline-data"

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEventType | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const eventRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return

      const container = scrollContainerRef.current
      const scrollPosition = container.scrollLeft + container.clientWidth / 2

      // Find which event is closest to the center of the viewport
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      eventRefs.current.forEach((ref, index) => {
        if (!ref) return
        const eventLeft = ref.offsetLeft + ref.clientWidth / 2
        const distance = Math.abs(scrollPosition - eventLeft)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      handleScroll() // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden pb-8 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
      >
        <div className="relative min-w-max px-8 md:px-16">
          <div className="absolute left-0 right-0 top-16 h-0.5 bg-border" />

          <div className="flex gap-8 md:gap-16 pt-8">
            {timelineData.map((event, index) => (
              <div
                key={event.id}
                ref={(el) => {
                  eventRefs.current[index] = el
                }}
                className="flex-shrink-0"
              >
                <TimelineEvent
                  event={event}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={() => setSelectedEvent(event)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <TimelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  )
}
