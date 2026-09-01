import { useState } from "react"

const links = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Hire me", href: "#hire" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-foil-dim/20 bg-darker/85 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-14">
        <a href="#hero" className="font-semibold tracking-tight text-lg">
          <span className="text-white">santi</span>
          <span className="text-primary">.codes</span>
        </a>

        <button
          className="sm:hidden p-1 text-muted hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-foil-dim/20 bg-darker px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
