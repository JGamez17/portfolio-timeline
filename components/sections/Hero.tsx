import React from "react";

export default function Hero(): React.ReactElement {
  return (
    <section className="min-h-screen border-b border-white/[0.08] px-12 py-28 flex flex-col justify-center">

      <p className="text-[11px] tracking-[0.16em] uppercase text-[#5F5E5A] mb-8">
        Full-Stack Engineer · New York
      </p>

      <h1 className="text-[clamp(56px,9vw,88px)] font-medium leading-[1.0] tracking-[-0.02em] text-[#e8e6e0] mb-6">
        Building things<br />that matter.
      </h1>

      <p className="text-[18px] text-[#888780] leading-relaxed max-w-md mb-12">
        Engineer with 5+ years at Apple. QA-first mindset.
        TypeScript, Next.js, and a photographer&apos;s eye for detail.
      </p>

      <div className="flex flex-wrap gap-2 mb-16">
        {[
          "TypeScript",
          "Next.js",
          "React",
          "QA Engineering",
          "Node.js",
          "PostgreSQL",
        ].map((tag) => (
          <span
            key={tag}
            className="text-[11px] tracking-[0.1em] uppercase text-[#5F5E5A] border border-white/[0.07] px-3 py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}