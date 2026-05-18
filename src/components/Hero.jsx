import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'Software Developer',
  'Full-Stack Engineer',
  'Cloud Architect',
  'UI/UX Enthusiast',
  'Cybersecurity Learner',
]

function useTypewriter(words, speed = 90, pauseMs = 2200) {
  const [display,    setDisplay]    = useState('')
  const [wordIdx,    setWordIdx]    = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx % words.length]
    const delay = isDeleting ? speed / 2 : speed

    const id = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.slice(0, display.length + 1))
        if (display.length + 1 === current.length)
          setTimeout(() => setIsDeleting(true), pauseMs)
      } else {
        setDisplay(current.slice(0, display.length - 1))
        if (display.length === 0) {
          setIsDeleting(false)
          setWordIdx((i) => (i + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(id)
  }, [display, isDeleting, wordIdx, words, speed, pauseMs])

  return display
}

const ORBS = [
  { size: 'w-2 h-2', color: 'bg-cyan-400/40',   top: '18%', left: '8%',  dur: '5s',   delay: '0s'    },
  { size: 'w-1.5 h-1.5', color: 'bg-purple-400/40', top: '35%', left: '22%', dur: '7s', delay: '1s'  },
  { size: 'w-3 h-3', color: 'bg-cyan-500/20',   top: '60%', left: '5%',  dur: '6s',   delay: '0.5s'  },
  { size: 'w-2 h-2', color: 'bg-blue-400/30',   top: '20%', left: '88%', dur: '8s',   delay: '2s'    },
  { size: 'w-1.5 h-1.5', color: 'bg-purple-300/30', top: '70%', left: '82%', dur: '5.5s', delay: '1.5s' },
  { size: 'w-2 h-2', color: 'bg-cyan-300/25',   top: '45%', left: '95%', dur: '9s',   delay: '0.8s'  },
]

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Radial glow spots */}
      <div className="absolute top-1/3 left-1/4  w-[500px] h-[500px] bg-cyan-500/8   rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Vignette fade to section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]" />

      {/* Floating orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full float-orb ${orb.size} ${orb.color}`}
          style={{ top: orb.top, left: orb.left, animationDuration: orb.dur, animationDelay: orb.delay }}
        />
      ))}

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy ─────────────────────────────── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="section-title mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Amit Oved</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-10 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="font-mono text-2xl sm:text-3xl font-semibold text-cyan-300 typewriter-cursor">
                {typed}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Specializing in{' '}
              <span className="text-cyan-400 font-medium">secure cloud environments</span> and{' '}
              <span className="text-purple-400 font-medium">engaging web & mobile applications</span>.
              CS student at Tel Aviv-Yafo Academic College.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                View Projects
              </a>
              <a href="/AmitOved_CV.pdf" download className="btn-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              <span className="text-xs text-slate-500 font-mono">// find me on</span>
              {[
                {
                  label: 'GitHub',
                  href: 'https://github.com/Am1its',
                  d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/amit-oved-37365493/',
                  d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                },
              ].map(({ label, href, d }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: profile image ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative select-none">
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 blur-2xl scale-110 pointer-events-none" />

              {/* Gradient ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src="/myimage.png"
                    alt="Amit Oved"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 40%' }}
                  />
                </div>
              </div>

              {/* Floating badge — location */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-6 bg-slate-900 border border-slate-700/70 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5"
              >
                <span className="text-xl leading-none">⚡</span>
                <div>
                  <p className="text-[10px] text-slate-500 leading-none mb-0.5">Based in</p>
                  <p className="text-xs font-semibold text-white leading-none">Tel Aviv 🇮🇱</p>
                </div>
              </motion.div>

              {/* Floating badge — status */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-6 bg-slate-900 border border-slate-700/70 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5"
              >
                <span className="text-xl leading-none">🎓</span>
                <div>
                  <p className="text-[10px] text-slate-500 leading-none mb-0.5">Currently</p>
                  <p className="text-xs font-semibold text-white leading-none">3rd Year CS</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col items-center gap-2 mt-20 text-slate-600 text-xs"
        >
          <span className="font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-cyan-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
