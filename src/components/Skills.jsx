import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CATEGORIES = [
  {
    title:  'Languages',
    symbol: '{ }',
    color:  'emerald',
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    title:  'Frontend',
    symbol: '◈',
    color:  'teal',
    skills: ['React', 'UI/UX Design', 'Figma', 'Responsive Design', 'HTML', 'CSS'],
  },
  {
    title:  'Backend & Systems',
    symbol: '>_',
    color:  'slate',
    skills: ['Linux Kernel', 'Syscalls', 'Node.js', 'REST APIs', 'System Programming', 'Microservices'],
  },
  {
    title:  'DevOps & Cloud',
    symbol: '⬡',
    color:  'slate',
    skills: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Nginx'],
  },
  {
    title:  'Tools & Workflow',
    symbol: '—',
    color:  'slate',
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Bash'],
  },
  {
    title:  'Learning Now',
    symbol: '+',
    color:  'muted',
    skills: ['Go', 'Next.js', 'Terraform', 'Rust', 'Cybersecurity Tooling'],
    muted:  true,
  },
]

const C = {
  emerald: {
    header: 'text-emerald-400',
    symbol: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    badge:  'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 hover:bg-emerald-500/20',
    border: 'hover:border-emerald-500/35',
    glow:   'hover:shadow-emerald-500/8',
  },
  teal: {
    header: 'text-teal-400',
    symbol: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    badge:  'bg-teal-500/10 text-teal-400 border border-teal-500/15 hover:bg-teal-500/20',
    border: 'hover:border-teal-500/35',
    glow:   'hover:shadow-teal-500/8',
  },
  slate: {
    header: 'text-slate-400',
    symbol: 'bg-white/[0.04] text-slate-400 border-white/[0.06]',
    badge:  'bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:bg-white/[0.07]',
    border: 'hover:border-white/[0.12]',
    glow:   '',
  },
  muted: {
    header: 'text-slate-600',
    symbol: 'bg-white/[0.02] text-slate-600 border-white/[0.04]',
    badge:  'bg-white/[0.02] text-slate-600 border border-white/[0.04]',
    border: 'hover:border-white/[0.08]',
    glow:   '',
  },
}

const containerVar = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVar = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-0    right-0 w-96 h-96 bg-teal-500/4   rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0  w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// 04 tech stack</p>
          <h2 className="section-title">
            Tools &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-12 h-px bg-emerald-500/60 mx-auto mt-5" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            A versatile skill set spanning systems programming, cloud orchestration, and modern web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVar}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {CATEGORIES.map((cat) => {
            const c = C[cat.color]
            return (
              <motion.div
                key={cat.title}
                variants={itemVar}
                className={`glass-card p-6 hover:shadow-xl ${c.glow} ${c.border} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg border font-mono font-bold text-sm flex items-center justify-center shrink-0 ${c.symbol}`}>
                    {cat.symbol}
                  </div>
                  <h3 className={`font-semibold text-sm ${c.header}`}>{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-200 cursor-default ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cat.muted && (
                  <p className="text-xs text-slate-700 mt-4 font-mono">// always expanding</p>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
