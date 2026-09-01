export default function About() {
  return (
    <section id="about" className="py-24 px-6 card-back-pattern">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            About me
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            I build full-stack web apps and Android tools, mostly focusing on Yu-Gi-Oh! community platforms.
            I enjoy taking ideas from zero to production, handling everything from the database
            to the UI.
          </p>
          <p className="text-muted leading-relaxed">
            Outside of coding, I am deeply involved in the Yu-Gi-Oh! community, building tools
            that help thousands of players discover cards, build decks, and compete in tournaments.
            I also make music with Strudel (strudel.cc), and I am a Linux
            enthusiast who enjoys tinkering with new technologies and frameworks.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
          <div className="space-y-5">
            {[
              {
                label: "Languages",
                items: ["JavaScript", "TypeScript", "Python", "Kotlin", "Java"],
              },
              {
                label: "Frontend",
                items: ["React", "Next.js", "Svelte", "Tailwind CSS", "Phaser"],
              },
              {
                label: "Backend & DB",
                items: ["Node.js", "Flask", "PostgreSQL", "MongoDB", "SQLite", "Supabase", "D1", "R2"],
              },
              {
                label: "Platforms & Infra",
                items: ["Cloudflare Workers", "Vercel", "GitHub Actions", "Electron", "Android"],
              },
              {
                label: "Tools",
                items: ["Git", "Linux", "Discord Bots", "Google Play Console", "Strudel"],
              },
            ].map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-foil-dim mb-2">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="card-attribute text-[11px] py-1.5 px-3"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}