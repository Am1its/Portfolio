import { useEffect, useRef } from 'react'

const COUNT = 80
const CONNECT_R = 140
const CONNECT_SQ = CONNECT_R * CONNECT_R
const REPEL_R = 110
const REPEL_SQ = REPEL_R * REPEL_R
const REPEL_F = 0.07
const PARALLAX = 12
const MAX_SPD = 0.42
const EC = [52, 211, 153] // emerald-400

export default function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    let pts = []
    const mouse = { x: -9999, y: -9999 }
    const rn = (a, b) => a + Math.random() * (b - a)

    function resize() {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    function init() {
      pts = Array.from({ length: COUNT }, () => ({
        x: rn(0, canvas.offsetWidth),
        y: rn(0, canvas.offsetHeight),
        vx: rn(-0.18, 0.18),
        vy: rn(-0.18, 0.18),
        r: rn(1.2, 2.4),
        a: rn(0.3, 0.7),
      }))
    }

    function tick() {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      const { x: mx, y: my } = mouse
      const hasMouse = mx > -9000

      ctx.clearRect(0, 0, W, H)
      ctx.save()
      if (hasMouse) {
        ctx.translate(((mx / W) - 0.5) * PARALLAX, ((my / H) - 0.5) * PARALLAX)
      }

      for (const p of pts) {
        if (hasMouse) {
          const dx = p.x - mx
          const dy = p.y - my
          const d2 = dx * dx + dy * dy
          if (d2 < REPEL_SQ && d2 > 0) {
            const d = Math.sqrt(d2)
            p.vx += (dx / d) * ((REPEL_R - d) / REPEL_R) * REPEL_F
            p.vy += (dy / d) * ((REPEL_R - d) / REPEL_R) * REPEL_F
          }
        }

        p.vx += rn(-0.005, 0.005)
        p.vy += rn(-0.005, 0.005)
        p.vx *= 0.993
        p.vy *= 0.993

        const spd = Math.hypot(p.vx, p.vy)
        if (spd > MAX_SPD) { p.vx = (p.vx / spd) * MAX_SPD; p.vy = (p.vy / spd) * MAX_SPD }

        p.x += p.vx; p.y += p.vy
        if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20
        if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20
      }

      // Nodes
      for (const p of pts) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${EC[0]},${EC[1]},${EC[2]},${p.a})`
        ctx.fill()
      }

      // Edges
      ctx.lineWidth = 0.6
      for (let i = 0; i < pts.length - 1; i++) {
        const { x: ax, y: ay } = pts[i]
        for (let j = i + 1; j < pts.length; j++) {
          const dx = ax - pts[j].x
          const dy = ay - pts[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < CONNECT_SQ) {
            ctx.strokeStyle = `rgba(${EC[0]},${EC[1]},${EC[2]},${(1 - d2 / CONNECT_SQ) * 0.15})`
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.restore()
      raf = requestAnimationFrame(tick)
    }

    resize()
    init()

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)

    const section = canvas.closest('section')
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    section?.addEventListener('mousemove', onMove, { passive: true })
    section?.addEventListener('mouseleave', onLeave)

    const onVis = () => document.hidden ? cancelAnimationFrame(raf) : (raf = requestAnimationFrame(tick))
    document.addEventListener('visibilitychange', onVis)

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      section?.removeEventListener('mousemove', onMove)
      section?.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
