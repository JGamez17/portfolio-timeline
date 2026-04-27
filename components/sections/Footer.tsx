export default function Footer() {
    return (
      <footer className="border-t border-white/[0.08] px-12 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600" />
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#5F5E5A]">
            Available for hire
          </span>
        </div>
        <span className="text-[11px] tracking-[0.08em] text-[#444441]">
          Built with ☕, Next.js, and innovation. © 2025 Jessica Gamez
        </span>
      </footer>
    )
  }