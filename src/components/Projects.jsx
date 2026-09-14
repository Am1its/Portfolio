import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projectsData'

const GH_PATH = 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'

function GhostLink({ project }) {
  if (!project.github) return null
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200 shrink-0"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={GH_PATH} /></svg>
    </a>
  )
}

/* ── Row ───────────────────────────────────────────────────── */
function ProjectRow({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="grid sm:grid-cols-[auto_1fr] gap-6 py-8 border-b border-white/[0.08] group"
    >
      <div className="w-11 h-11 rounded-lg border border-white/[0.1] text-slate-400 font-mono font-bold text-base flex items-center justify-center shrink-0 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-colors duration-300">
        {project.symbol}
      </div>

      <div>
        <div className="flex items-start justify-between gap-4 mb-1.5">
          <div>
            <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{project.category}</p>
          </div>
          <GhostLink project={project} />
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mt-3 max-w-2xl">{project.description}</p>

        <p className="text-slate-600 text-xs mt-4 flex flex-wrap gap-x-2">
          {project.tags.map((tag, i) => (
            <span key={tag}>
              {tag}
              {i < project.tags.length - 1 && <span className="text-slate-800"> / </span>}
            </span>
          ))}
        </p>
      </div>
    </motion.article>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="light w-[700px] h-[700px] bg-emerald-500/4 blur-[180px] drift-a" style={{ top: '15%', left: '50%', transform: 'translateX(-50%)' }} />
      </div>

      <div ref={ref} className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <h2 className="section-title text-white">Featured projects</h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              A selection spanning full-stack web, systems engineering, cybersecurity, and mobile.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-white/[0.08]">
          {projects.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </div>

        <motion.a
          href="https://github.com/Am1its"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors duration-200 mt-8"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={GH_PATH} /></svg>
          More on GitHub — Kubernetes, C++, Linux, and more
        </motion.a>
      </div>
    </section>
  )
}
