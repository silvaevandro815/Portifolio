import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-cyber-accent selection:text-black">
      <div className="scanline"></div>
      <ThreeBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}

export default App
