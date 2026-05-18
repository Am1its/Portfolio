import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projectsData'

const C = {
  cyan:   { badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',   category: 'text-cyan-400',   hl: 'bg-cyan-500/10 text-cyan-300',   dot: 'bg-cyan-400',   icon: 'bg-cyan-500/10',   border: 'hover:border-cyan-500/50',   glow: 'hover:shadow-cyan-500/10'   },
  purple: { badge: 'bg-purple-500/10 text-purple-400 border-purple-500/25', category: 'text-purple-400', hl: 'bg-purple-500/10 text-purple-300', dot: 'bg-purple-400', icon: 'bg-purple-500/10', border: 'hover:border-purple-500/50', glow: 'hover:shadow-purple-500/10' },
  blue:   { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/25',   category: 'text-blue-400',   hl: 'bg-blue-500/10 text-blue-300',   dot: 'bg-blue-400',   icon: 'bg-blue-500/10',   border: 'hover:border-blue-500/50',   glow: 'hover:shadow-blue-500/10'   },
  orange: { badge: 'bg-orange-500/10 text-orange-400 border-orange-500/25', category: 'text-orange-400', hl: 'bg-orange-500/10 text-orange-300', dot: 'bg-orange-400', icon: 'bg-orange-500/10', border: 'hover:border-orange-500/50', glow: 'hover:shadow-orange-500/10' },
  red:    { badge: 'bg-red-500/10 text-red-400 border-red-500/25',       category: 'text-red-400',    hl: 'bg-red-500/10 text-red-300',     dot: 'bg-red-400',    icon: 'bg-red-500/10',    border: 'hover:border-red-500/50',    glow: 'hover:shadow-red-500/10'    },
}

const GH_PATH = 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'

const containerVar = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const itemVar = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

function ProjectCard({ project }) {
  const c = C[project.color]
  return (
    <motion.article
      variants={itemVar}
      className={`glass-card p-6 flex flex-col group hover:shadow-xl ${c.glow} ${c.border} transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-3">
        <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl`}>
          {project.icon}
        </div>
        <div className="flex gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-700 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={GH_PATH} />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Category */}
      <span className={`text-xs font-mono font-medium ${c.category} mb-1.5`}>{project.category}</span>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-100 mb-2.5 group-hover:text-white transition-colors leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      {/* Key highlights */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.highlights.map((h) => (
          <span key={h} className={`${c.hl} text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5`}>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
            {h}
          </span>
        ))}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/50">
        {project.tags.map((tag) => (
          <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border ${c.badge}`}>
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3">What I've built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            A selection spanning full-stack web, cloud infrastructure, systems engineering, and cybersecurity.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/Am1its"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d={GH_PATH} />
            </svg>
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
