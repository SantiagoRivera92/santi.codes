export default function Footer() {
  return (
    <footer className="border-t border-foil-dim/20 py-8 px-6 text-center text-sm text-muted">
      &copy; {new Date().getFullYear()} santi.codes was built with React, Tailwind CSS and a lot of love.
    </footer>
  )
}
