import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GH_PATH = 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
const LI_PATH = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const CONTACT_CARDS = [
  {
    label: 'Email',
    value: 'amitoved12@gmail.com',
    href:  'mailto:amitoved12@gmail.com',
    color: 'emerald',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/amit-oved',
    href:  'https://www.linkedin.com/in/amit-oved-37365493/',
    color: 'blue',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={LI_PATH} />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Am1its',
    href:  'https://github.com/Am1its',
    color: 'slate',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={GH_PATH} />
      </svg>
    ),
  },
]

const COLOR_CLS = {
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  blue:    'text-blue-400   bg-blue-500/10   border-blue-500/25',
  slate:   'text-slate-300  bg-white/[0.04]  border-white/[0.08]',
  muted:   'text-slate-600  bg-white/[0.02]  border-white/[0.04]',
}

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form,      setForm]      = useState(EMPTY)
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  const fadeLeft  = { initial: { opacity: 0, x: -25 }, animate: inView ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.65, delay: 0.2 } }
  const fadeRight = { initial: { opacity: 0, x:  25 }, animate: inView ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.65, delay: 0.3 } }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070C14] via-[#090F1A] to-[#070C14] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">// 05 contact</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-12 h-px bg-emerald-500/60 mx-auto mt-5" />
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            Open to new roles, collaborations, and great conversations about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left: cards */}
          <motion.div {...fadeLeft} className="lg:col-span-2 space-y-4">
            <div className="glass-card p-6 border-l-2 border-emerald-500/50">
              <h3 className="font-semibold text-slate-200 mb-1.5">Open to new opportunities</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Have a project, a role, or just want to talk tech — send a message and I'll
                get back to you.
              </p>
            </div>

            {CONTACT_CARDS.map((card) => (
              <div
                key={card.label}
                className={`flex items-center gap-4 rounded-2xl border px-4 py-3.5 ${COLOR_CLS[card.color]}`}
              >
                <div className="shrink-0">{card.icon}</div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-600 mb-0.5 uppercase tracking-wider font-mono">{card.label}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-slate-300 hover:text-white truncate block transition-colors"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-600">{card.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.div {...fadeRight} className="lg:col-span-3">
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message sent</h3>
                  <p className="text-slate-500 text-sm">
                    Got it, {form.name}. I'll reply soon.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(EMPTY) }}
                    className="btn-secondary mt-6 text-sm px-5 py-2.5"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Your Name</label>
                      <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe" required className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Subject</label>
                    <input name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Project inquiry · Collaboration · Just saying hi" required className="input-field" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your idea or project..." required className="input-field resize-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
