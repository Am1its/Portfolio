import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '3+', label: 'Years Coding',      icon: '💻' },
  { value: '5+', label: 'Projects Built',    icon: '🚀' },
  { value: '2',  label: 'Spoken Languages',  icon: '🌍' },
  { value: '∞',  label: 'Drive to Learn',    icon: '📚' },
]

const TIMELINE = [
  { year: '2019–2021', event: 'Naval service — fitness instructor in the Israeli Navy', icon: '⚓' },
  { year: '2022',      event: 'Began B.Sc. Computer Science at Tel Aviv-Yafo Academic College', icon: '🎓' },
  { year: '2023',      event: 'Built first full-stack projects; dove into cloud & DevOps', icon: '☁️' },
  { year: '2024–Now',  event: 'Exploring Kubernetes, microservices & cybersecurity tooling', icon: '🔐' },
]

const INFO = [
  { label: 'Location',   value: 'Tel Aviv, Israel 🇮🇱' },
  { label: 'Degree',     value: 'B.Sc. Computer Science' },
  { label: 'College',    value: 'Tel Aviv-Yafo Academic College' },
  { label: 'Year',       value: '3rd Year (Current)' },
  { label: 'Focus',      value: 'Full-Stack · Cloud · Security' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay },
  })

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#08101f] to-[#050816] pointer-events-none" />

      <div ref={ref} className="section-container relative z-10">

        {/* Heading */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3">Get to know me</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Bio + Timeline ─────────────────────────── */}
          <div className="lg:col-span-3 space-y-6">
            <motion.p {...fadeUp(0.15)} className="text-slate-300 text-lg leading-relaxed">
              I'm a{' '}
              <span className="text-cyan-400 font-semibold">3rd-year Computer Science student</span> at
              the Academic College of Tel Aviv-Yafo, passionate about building software that is both
              powerful under the hood and beautiful on the surface.
            </motion.p>

            <motion.p {...fadeUp(0.25)} className="text-slate-400 leading-relaxed">
              Before I wrote a single line of code I served as a{' '}
              <span className="text-purple-400 font-semibold">naval fitness instructor</span> in the
              Israeli Navy. That chapter forged in me real discipline, the ability to perform under
              pressure, and a relentless drive to keep pushing — qualities that now shape the way I
              approach every engineering challenge, from a tricky algorithm to a complex cloud deployment.
            </motion.p>

            <motion.p {...fadeUp(0.32)} className="text-slate-400 leading-relaxed">
              Today I specialise in full-stack web development, cloud architecture, and cybersecurity,
              always with a designer's eye for UI/UX. I thrive at the intersection of{' '}
              <span className="text-cyan-400">clean, efficient code</span> and{' '}
              <span className="text-purple-400">intuitive, delightful design</span>.
            </motion.p>

            {/* Timeline */}
            <motion.div {...fadeUp(0.4)} className="mt-8 space-y-1">
              <h3 className="text-sm font-semibold text-slate-300 mb-5 font-mono tracking-wider uppercase">
                // journey
              </h3>
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center pt-1">
                    <span className="text-base">{item.icon}</span>
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-slate-700/60 mt-1 mb-1" />
                    )}
                  </div>
                  <div className="pb-5">
                    <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                    <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Stats + Info card ──────────────────────── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Stat grid */}
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-4 text-center hover:border-cyan-500/40 transition-colors duration-300 group cursor-default"
                >
                  <span className="text-2xl block mb-1">{s.icon}</span>
                  <p className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Info card */}
            <motion.div {...fadeUp(0.45)} className="glass-card p-6 space-y-3">
              <h3 className="font-semibold text-slate-200 pb-3 border-b border-slate-700/60">
                Quick Info
              </h3>
              {INFO.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-3 text-sm">
                  <span className="text-slate-500 shrink-0">{label}</span>
                  <span className="text-slate-300 text-right">{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Navy callout */}
            <motion.div
              {...fadeUp(0.55)}
              className="glass-card p-5 border-l-2 border-cyan-500/60"
            >
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Navy background →</span>{' '}
                Discipline, resilience, and fast self-learning aren't just buzzwords for me — they're
                habits built through real-world high-stakes service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
