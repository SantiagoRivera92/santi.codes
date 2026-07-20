export default function HireMe() {
  return (
    <section id="hire" className="py-24 px-6">
      <div className="section-divider mb-16" />
      <div className="max-w-2xl mx-auto text-center">
        <div className="card-frame">
          <div className="card-frame-inner">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for hire
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Looking for my next opportunity
            </h2>

            <p className="text-muted mb-8 max-w-md mx-auto leading-relaxed">
              I am currently open to full-time roles, and freelance projects. I live in Spain and am not looking to relocate. If you think I would be a good fit for your team, let's talk.
            </p>

            <a
              href="mailto:santirivera92@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              santirivera92@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
