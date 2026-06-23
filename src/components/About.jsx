import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '3+', label: 'Years Coding'     },
  { value: '5+', label: 'Projects Built'   },
  { value: '2',  label: 'Languages Spoken' },
  { value: '∞',  label: 'Drive to Learn'   },
]

const TIMELINE = [
  { year: '2019–2021', event: 'Naval service as a fitness instructor in the Israeli Navy', accent: false },
  { year: '2022',      event: 'Began B.Sc. Computer Science at Tel Aviv-Yafo Academic College', accent: false },
  { year: '2023',      event: 'Built first full-stack projects; dove into cloud & DevOps', accent: false },
  { year: '2024–2025', event: 'Exploring Kubernetes, microservices & kernel-level systems programming', accent: false },
  { year: '2026',      event: 'Joined Moveo Group as a Full-Stack Developer', accent: true },
]

const INFO = [
  { label: 'Location', value: 'Tel Aviv, Israel' },
  { label: 'Degree',   value: 'B.Sc. Computer Science' },
  { label: 'College',  value: 'Tel Aviv-Yafo Academic College' },
  { label: 'Status',   value: 'Final Year · Graduating 2026' },
  { label: 'Focus',    value: 'Full-Stack · Cloud · Systems' },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay },
  })

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="light w-[700px] h-[700px] bg-indigo-500/3 blur-[180px] drift-b" style={{ bottom: '-10%', right: '-5%' }} />

      <div ref={ref} className="section-container relative z-10">

        {/* Heading */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="section-label mb-3">// 01 about</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-px bg-emerald-500/60 mx-auto mt-5" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Bio + Timeline ─────────────────────────── */}
          <div className="lg:col-span-3 space-y-6">
            <motion.p {...fadeUp(0.15)} className="text-slate-300 text-lg leading-relaxed">
              I am a{' '}
              <span className="text-emerald-400 font-semibold">Full-Stack Developer</span> currently
              working at Moveo Group and a final-year Computer Science student at The Academic College
              of Tel Aviv-Yafo.
            </motion.p>

            <motion.p {...fadeUp(0.23)} className="text-slate-400 leading-relaxed">
              I have a strong passion for building robust, end-to-end applications — from designing
              intuitive user interfaces to architecting complex backend systems and cloud infrastructure.
              I thrive on solving hard technical problems, whether it means writing{' '}
              <span className="text-emerald-400 font-medium">low-level kernel drivers</span>{' '}
              or crafting{' '}
              <span className="text-teal-300 font-medium">fast, well-designed UIs</span>.
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-slate-400 leading-relaxed">
              Before I wrote a single line of code I served as a{' '}
              <span className="text-slate-300 font-medium">naval fitness instructor</span>{' '}
              in the Israeli Navy — an experience that forged real discipline, the ability to perform
              under pressure, and a relentless drive to keep pushing. Qualities that now shape every
              engineering challenge I take on.
            </motion.p>

            {/* Timeline */}
            <motion.div {...fadeUp(0.38)} className="mt-8">
              <h3 className="font-mono text-xs text-slate-500 tracking-[0.2em] uppercase mb-6">
                // journey
              </h3>
              <div className="space-y-0">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center pt-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-0.5 ${item.accent ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                      {i < TIMELINE.length - 1 && (
                        <div className="w-px flex-1 bg-slate-800 mt-1.5 mb-1.5" />
                      )}
                    </div>
                    <div className="pb-5">
                      <span className={`font-mono text-xs px-2 py-0.5 rounded ${item.accent ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/[0.04] text-slate-500'}`}>
                        {item.year}
                      </span>
                      <p className={`text-sm mt-1.5 leading-relaxed ${item.accent ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Stats + Info card ──────────────────────── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Stat grid */}
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-5 text-center hover:border-emerald-500/30 transition-colors duration-300 cursor-default"
                >
                  <p className="text-2xl font-bold gradient-text mb-1">{s.value}</p>
                  <p className="text-xs text-slate-500 font-mono">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Info card */}
            <motion.div {...fadeUp(0.42)} className="glass-card p-6 space-y-3">
              <h3 className="font-mono text-xs text-slate-500 tracking-[0.2em] uppercase pb-3 border-b border-white/[0.06]">
                // quick info
              </h3>
              {INFO.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-3 text-sm">
                  <span className="text-slate-600 shrink-0 font-mono text-xs">{label}</span>
                  <span className="text-slate-300 text-right text-xs">{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Callout */}
            <motion.div
              {...fadeUp(0.52)}
              className="glass-card p-5 border-l-2 border-emerald-500/50"
            >
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-emerald-400 font-semibold font-mono">$ whoami</span>
                <br />
                <span className="text-slate-500">→</span>{' '}
                A developer who is equally comfortable in a kernel module and a Figma canvas.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
