import Hero from "@/components/sections/Hero";
import Timeline from "@/components/timeline/timeline"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Architecting My Evolution</h1>
          <p className="text-lg text-muted-foreground text-balance">
          An interactive journey from user-space to kernel-space. Explore how compounding knowledge took me from my first code to engineering at the core of millions of devices.
          </p>
        </div>
        <Hero />
        <Timeline />
      </div>
    </main>
  )
}
