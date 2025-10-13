import Timeline from "@/components/timeline/timeline"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Architecting My Evolution</h1>
          <p className="text-lg text-muted-foreground text-balance">
          Navigate the layers of my professional development—from initial user-land applications to kernel-space engineering at Apple CoreOS. This interactive chronicle visualizes the compounding of knowledge and skill, tracing the path from my first line of code to contributing to the core of millions of devices. Explore the milestones of a relentless problem-solver.
          </p>
        </div>

        <Timeline />
      </div>
    </main>
  )
}
