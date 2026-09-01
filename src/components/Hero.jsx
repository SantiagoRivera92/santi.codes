export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] px-6 pt-20 pb-16 card-back-pattern">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase mb-6">
          Full-Stack Developer
        </div>

        <h1 className="font-urbanist text-5xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-2">
          Santiago Rivera
        </h1>
        <p className="text-xl text-white/70 font-light mb-4">
          I build things for the web
        </p>
        <p className="text-muted leading-relaxed max-w-lg mx-auto">
          Developer behind Excavate, Spellbook, and Edison Database, crafting tools
          for the Yu-Gi-Oh! community and more. I also write music with Strudel (strudel.cc).
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            View my work
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-5 py-2.5 text-sm font-medium text-white hover:border-primary hover:text-primary transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
