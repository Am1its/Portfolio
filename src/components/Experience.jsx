import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROLES = [
  {
    company:   'Moveo Group',
    title:     'Full-Stack Developer',
    period:    'May 2026 — Present',
    location:  'Tel Aviv, Israel',
    current:   true,
    bullets: [
      'Building and shipping end-to-end features across React and Angular frontends and a Node.js backend.',
      'Working closely with product and design to take features from spec to production.',
      'Integrating with Localize, a SaaS translation management platform.',
    ],
    tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'REST APIs', 'Localize'],
  },
]

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="light w-[600px] h-[600px] bg-indigo-500/3 blur-[160px] drift-c" style={{ bottom: '-10%', right: '-5%' }} />

      <div ref={ref} className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="section-title text-white">Where I've worked</h2>
        </motion.div>

        <div className="max-w-3xl">
          {ROLES.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="border-t-2 border-emerald-500/60 pt-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  {/* Company */}
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <span className="font-bold text-emerald-400 text-xs">M</span>
                    </div>
                    <span className="font-bold text-white text-lg">{role.company}</span>
                    {role.current && (
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        current
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 font-semibold">{role.title}</p>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-xs text-emerald-400 mb-0.5">{role.period}</p>
                  <p className="text-xs text-slate-600">{role.location}</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {role.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="text-emerald-500 mt-0.5 shrink-0">–</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
