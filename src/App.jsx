import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Music from "./components/Music"
import About from "./components/About"
import HireMe from "./components/HireMe"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Music />
        <About />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
