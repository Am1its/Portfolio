import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '3+', label: 'Years coding'     },
  { value: '5+', label: 'Projects built'   },
  { value: '2',  label: 'Languages spoken' },
  { value: '∞',  label: 'Drive to learn'   },
]

const TIMELINE = [
  { year: '2019–2021', event: 'Naval service as a fitness instructor in the Israeli Navy', accent: false },
  { year: '2022',      event: 'Began B.Sc. Computer Science at Tel Aviv-Yafo Academic College', accent: false },
  { year: '2023',      event: 'Built first full-stack projects; dove into cloud & DevOps', accent: false },
  { year: '2024–2025', event: 'Exploring Kubernetes, microservices & kernel-level systems programming', accent: false },
  { year: '2026',      event: 'Graduated with a B.Sc. in Computer Science; shipped SportLink, a React Native mobile app', accent: false },
  { year: '2026',      event: 'Joined Moveo Group as a Full-Stack Developer', accent: true },
]

const INFO = [
  { label: 'Location', value: 'Tel Aviv, Israel' },
  { label: 'Degree',   value: 'B.Sc. Computer Science' },
  { label: 'College',  value: 'Tel Aviv-Yafo Academic College' },
  { label: 'Status',   value: 'Graduated 2026' },
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
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <h2 className="section-title text-white">About me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Bio + Timeline ─────────────────────────── */}
          <div className="lg:col-span-3 space-y-6">
            <motion.p {...fadeUp(0.15)} className="text-slate-300 text-lg leading-relaxed">
              I am a{' '}
              <span className="text-emerald-400 font-semibold">Full-Stack Developer</span> currently
              working at Moveo Group, and a Computer Science graduate (B.Sc., 2026) of The Academic
              College of Tel Aviv-Yafo.
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
              <h3 className="text-sm text-slate-500 mb-6">Journey</h3>
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

          {/* ── Stats + Info ───────────────────────────── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Stat row */}
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 border-t border-l border-white/[0.08]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="border-b border-r border-white/[0.08] p-5"
                >
                  <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Info list */}
            <motion.div {...fadeUp(0.42)}>
              <h3 className="text-sm text-slate-500 mb-4">Quick info</h3>
              <div className="border-t border-white/[0.08]">
                {INFO.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3 text-sm py-3 border-b border-white/[0.08]">
                    <span className="text-slate-500 shrink-0">{label}</span>
                    <span className="text-slate-300 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
