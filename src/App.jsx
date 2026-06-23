import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="text-slate-100 overflow-x-hidden">
      {/* Page-wide animated orbs — fixed so they span all sections */}
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="light w-[900px] h-[700px] bg-emerald-500/[0.14] blur-[120px] drift-a" style={{ top: '-20%', left: '-15%' }} />
        <div className="light w-[750px] h-[850px] bg-indigo-500/[0.10] blur-[140px] drift-b" style={{ bottom: '-20%', right: '-15%' }} />
        <div className="light w-[550px] h-[550px] bg-violet-500/[0.07] blur-[100px] drift-c" style={{ top: '42%', right: '22%' }} />
      </div>

      {/* All content sits above the orbs */}
      <div className="relative z-[1]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
