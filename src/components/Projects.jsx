const projects = [
  {
    title: "Excavate",
    type: "Yu-Gi-Oh! Database and Search Engine",
    description:
      "Syntax-driven Yu-Gi-Oh! card search engine. Browse sets, banlists, rulings, and a golf mini-game.",
    tags: ["Svelte", "Vercel", "MongoDB", "R2"],
    link: "https://excavate.top",
    stars: 5,
  },
  {
    title: "Spellbook",
    type: "Yu-Gi-Oh! Deck Builder",
    description:
      "Full-featured deck builder with public TCG and Master Duel decklists, event search, binders, and tournament results.",
    tags: ["Flask", "MongoDB", "R2"],
    link: "https://spellbook.life",
    stars: 5,
  },
  {
    title: "Edison Database",
    type: "Reference Tool",
    description:
      "Complete card text and ruling database for Edison Format (2010). Available in free ad-supported and paid editions.",
    tags: ["Android", "Kotlin", "Room"],
    links: [
      { label: "Free", href: "https://play.google.com/store/apps/details?id=me.diamonddude.edison.free" },
      { label: "Paid", href: "https://play.google.com/store/apps/details?id=me.diamonddude.edison.paid" },
    ],
    stars: 4,
  },
  {
    title: "Really Big Yugioh Bot",
    type: "Discord Bot",
    description:
      "Feature-rich Discord bot for Yu-Gi-Oh! with card lookup, deck management, league hosting with ELO matchmaking, and card drafting.",
    tags: ["Python", "Discord.py", "GitHub Actions"],
    link: "https://github.com/SantiagoRivera92/really-big-yugioh-bot",
    stars: 4,
  },
  {
    title: "ianthe.online",
    type: "Art Gallery / Portfolio",
    description:
      "A gallery showcasing memes for the 2026 FIFA World Cup hydration breaks. I built the website, but not the memes.",
    tags: ["React", "Cloudflare Pages", "R2"],
    link: "https://ianthe.online",
    stars: 4,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-2">
            Projects
          </h2>
          <p className="text-muted max-w-xl">A selection of things I have built.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-frame">
                <div className="card-frame-inner">
                  <div className="flex items-start gap-4 mb-1">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-foil-dim">
                        [{project.type}]
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="card-attribute">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary hover:bg-primary/20 transition-colors"
                      >
                        Open
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.links &&
                      project.links.map((l) => (
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
