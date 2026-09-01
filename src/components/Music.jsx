const music = [
  {
    title: "Reincarnation of the True Goddess",
    type: "Chiptune / Electronic Album",
    description:
      "A 13-track chiptune/electronic album inspired by the Shin Megami Tensei series, made with Strudel.",
    tags: ["Chiptune", "Electronic", "Strudel"],
    links: [
      { label: "Spotify", href: "https://open.spotify.com/album/366i9jJs9kiKaMiDdPePFc" },
      { label: "Bandcamp", href: "https://santicodes.bandcamp.com/album/reincarnation-of-the-true-goddess" },
    ],
    stars: 5,
  },
]

export default function Music() {
  return (
    <section id="music" className="py-24 px-6 card-back-pattern">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-2">Music</h2>
          <p className="text-muted max-w-xl">Albums and tracks I have released.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {music.map((album) => (
            <div key={album.title} className="group transition-all duration-300 hover:-translate-y-1">
              <div className="card-frame">
                <div className="card-frame-inner">
                  <div className="flex items-start gap-4 mb-1">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                        {album.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-foil-dim">
                        [{album.type}]
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {album.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {album.tags.map((tag) => (
                      <span key={tag} className="card-attribute">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {album.links &&
                      album.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary hover:bg-primary/20 transition-colors"
                        >
                          {l.label}
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}