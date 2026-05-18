import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Languages',
    icon: '{ }',
    color: 'cyan',
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Web & Mobile',
    icon: '◈',
    color: 'purple',
    skills: ['React', 'Node.js', 'REST APIs', 'Responsive Design', 'UI/UX Principles', 'Figma'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '⬡',
    color: 'blue',
    skills: ['Docker', 'Kubernetes', 'Linux', 'Nginx', 'CI/CD', 'Microservices'],
  },
  {
    title: 'Tools & Workflow',
    icon: '⚙',
    color: 'orange',
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Bash'],
  },
  {
    title: 'Cybersecurity',
    icon: '🔐',
    color: 'red',
    skills: ['Network Security', 'SQL Injection', 'Malware Analysis', 'Docker Sandboxing', 'Phishing Detection', 'Flask'],
  },
  {
    title: 'Learning Now',
    icon: '🌱',
    color: 'slate',
    skills: ['TypeScript', 'Next.js', 'AWS', 'Terraform', 'Go'],
    muted: true,
  },
]

const C = {
  cyan:   { header: 'text-cyan-400',   icon: 'bg-cyan-500/10 text-cyan-400',   badge: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20',   border: 'hover:border-cyan-500/40',   glow: 'hover:shadow-cyan-500/10'   },
  purple: { header: 'text-purple-400', icon: 'bg-purple-500/10 text-purple-400', badge: 'bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20', border: 'hover:border-purple-500/40', glow: 'hover:shadow-purple-500/10' },
  blue:   { header: 'text-blue-400',   icon: 'bg-blue-500/10 text-blue-400',   badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20',   border: 'hover:border-blue-500/40',   glow: 'hover:shadow-blue-500/10'   },
  orange: { header: 'text-orange-400', icon: 'bg-orange-500/10 text-orange-400', badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20', border: 'hover:border-orange-500/40', glow: 'hover:shadow-orange-500/10' },
  red:    { header: 'text-red-400',    icon: 'bg-red-500/10 text-red-400',     badge: 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20',       border: 'hover:border-red-500/40',    glow: 'hover:shadow-red-500/10'    },
  slate:  { header: 'text-slate-400',  icon: 'bg-slate-700/50 text-slate-400', badge: 'bg-slate-700/40 text-slate-500 border border-slate-600/30',                      border: 'hover:border-slate-500/40',  glow: ''                            },
}

const containerVar = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
}
const itemVar = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0    right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0  w-96 h-96 bg-cyan-500/5   rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3">What I work with</p>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            A versatile skill set spanning systems programming, cloud orchestration, and security tooling.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CATEGORIES.map((cat) => {
            const c = C[cat.color]
            return (
              <motion.div
                key={cat.title}
                variants={itemVar}
                className={`glass-card p-6 hover:shadow-xl ${c.glow} ${c.border} transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${c.icon} flex items-center justify-center font-mono font-bold text-base shrink-0`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-semibold text-base ${c.header}`}>{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 cursor-default ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cat.muted && (
                  <p className="text-xs text-slate-600 mt-4 font-mono">// always expanding the toolkit</p>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
