import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projectsData'

const GH_PATH = 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'

const COLOR = {
  emerald: {
    symbol: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    cat:    'text-emerald-400',
    hl:     'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    dot:    'bg-emerald-400',
    hover:  'hover:border-emerald-500/40',
    glow:   'hover:shadow-emerald-500/10',
    tag:    'border-emerald-500/20 text-emerald-600',
  },
  red: {
    symbol: 'text-red-400 bg-red-500/10 border-red-500/20',
    cat:    'text-red-400',
    hl:     'bg-red-500/10 text-red-300 border-red-500/20',
    dot:    'bg-red-400',
    hover:  'hover:border-red-500/40',
    glow:   'hover:shadow-red-500/10',
    tag:    'border-red-500/20 text-red-600',
  },
  blue: {
    symbol: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    cat:    'text-blue-400',
    hl:     'bg-blue-500/10 text-blue-300 border-blue-500/20',
    dot:    'bg-blue-400',
    hover:  'hover:border-blue-500/40',
    glow:   'hover:shadow-blue-500/10',
    tag:    'border-blue-500/20 text-blue-600',
  },
  violet: {
    symbol: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    cat:    'text-violet-400',
    hl:     'bg-violet-500/10 text-violet-300 border-violet-500/20',
    dot:    'bg-violet-400',
    hover:  'hover:border-violet-500/40',
    glow:   'hover:shadow-violet-500/10',
    tag:    'border-violet-500/20 text-violet-600',
  },
}

function GhostLink({ project }) {
  if (!project.github) return null
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all duration-200 shrink-0"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={GH_PATH} /></svg>
    </a>
  )
}

/* ── Featured card (spans 2 cols) ─────────────────────────── */
function FeaturedCard({ project }) {
  const c = COLOR[project.color]
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`glass-card p-8 flex flex-col lg:flex-row gap-8 group hover:shadow-xl ${c.glow} ${c.hover} transition-all duration-300 col-span-1 md:col-span-2`}
    >
      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl border font-mono font-bold text-lg flex items-center justify-center shrink-0 ${c.symbol}`}>
            {project.symbol}
          </div>
          <GhostLink project={project} />
        </div>
        <p className={`font-mono text-xs mb-1.5 ${c.cat}`}>{project.category}</p>
        <h3 className="text-xl font-bold text-white mb-3 leading-snug">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((h) => (
            <span key={h} className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border ${c.hl}`}>
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
              {h}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
          {project.tags.map((tag) => (
            <span key={tag} className={`tag-pill border ${c.tag}`}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Architecture panel */}
      <div className="lg:w-48 shrink-0 flex items-center justify-center">
        <div className="border border-white/[0.07] rounded-xl p-4 bg-white/[0.02] font-mono text-xs text-center w-full">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-3">architecture</p>
          {['Core Engine', 'Multi-User Server', 'React Web Client'].map((layer, i) => (
            <div key={layer}>
              <div className={`rounded-lg px-2 py-2 border text-[11px] ${
                i === 0 ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' :
                i === 1 ? 'border-white/[0.08] bg-white/[0.03] text-slate-400' :
                          'border-blue-500/30 bg-blue-500/10 text-blue-300'
              }`}>{layer}</div>
              {i < 2 && <div className="text-slate-700 my-1 text-[10px]">↕</div>}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

/* ── Regular card (1 col) ──────────────────────────────────── */
function RegularCard({ project, delay = 0 }) {
  const c = COLOR[project.color]
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card p-6 flex flex-col group hover:shadow-xl ${c.glow} ${c.hover} transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl border font-mono font-bold text-base flex items-center justify-center shrink-0 ${c.symbol}`}>
          {project.symbol}
        </div>
        <GhostLink project={project} />
      </div>
      <p className={`font-mono text-xs mb-1.5 ${c.cat}`}>{project.category}</p>
      <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.highlights.map((h) => (
          <span key={h} className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border ${c.hl}`}>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
            {h}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
        {project.tags.map((tag) => (
          <span key={tag} className={`tag-pill border ${c.tag}`}>{tag}</span>
        ))}
      </div>
    </motion.article>
  )
}

/* ── Compact GitHub CTA (1 col) ────────────────────────────── */
function GitHubCTACard() {
  return (
    <motion.a
      href="https://github.com/Am1its"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="glass-card p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-emerald-500/30 hover:shadow-emerald-500/8 transition-all duration-300 group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={GH_PATH} /></svg>
      </div>
      <div>
        <p className="font-mono text-xs text-slate-600 mb-1">// more projects</p>
        <p className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">View all on GitHub</p>
        <p className="text-slate-600 text-xs mt-1">K8s · C++ · Linux &amp; more</p>
      </div>
      <span className="text-emerald-500 text-xs font-mono group-hover:text-emerald-400 transition-colors">
        github.com/Am1its →
      </span>
    </motion.a>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = projects.find((p) => p.featured)
  const rest     = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">// 03 projects</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-12 h-px bg-emerald-500/60 mx-auto mt-5" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            A selection spanning full-stack web, systems engineering, cybersecurity, and UI/UX design.
          </p>
        </motion.div>

        {/*
          Bento grid — 3 cols desktop:
          Row 1: [S-Emulator 2 cols] [Email Phishing 1 col]
          Row 2: [Crypto 1 col]      [SportLink 1 col]      [GitHub CTA 1 col]
        */}
        <div className="bento-grid">
          {featured && <FeaturedCard project={featured} />}
          {rest.map((p, i) => (
            <RegularCard key={p.id} project={p} delay={i * 0.08} />
          ))}
          <GitHubCTACard />
        </div>
      </div>
    </section>
  )
}
