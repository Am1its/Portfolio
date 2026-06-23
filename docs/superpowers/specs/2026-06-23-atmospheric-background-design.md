# Atmospheric Background Redesign

**Date:** 2026-06-23
**Goal:** Replace generic AI-template glow blobs and bouncing orbs with a deliberate cinematographer's lighting rig using emerald (key) + indigo/violet (fill) color temperature contrast.

---

## Problem

The current background uses:
- Two uniform circular blobs (`bg-emerald-500/5`, `bg-teal-500/5`) — perfectly round, identically sized, algorithmically placed
- Five small orbs with a `float` animation that bounces vertically — cheap rubber-ball motion
- Single-temperature green throughout — no depth, no perceived light source

These patterns are the most recognizable fingerprint of AI-generated dark-mode portfolios.

---

## Design

### Color Temperature Split

- **Key light:** emerald-500 (`rgb(16, 185, 129)`) — warm-green, directional, the primary light source
- **Fill light:** indigo-500 (`rgb(99, 102, 241)`) — cool-violet, wide and diffuse, the ambient fill
- **Rim light:** violet-500 (`rgb(139, 92, 246)`) — thin strip, depth separation only

### Animation

Remove `float-orb` (vertical bounce). Replace with three drift keyframes:
- `drift-a` — 22s cycle, gentle Lissajous path (~28px range), `transform: translate + scale`
- `drift-b` — 27s cycle, different phase
- `drift-c` — 19s cycle, different phase

Different durations prevent synchronization. All use `transform` only — GPU-accelerated, no layout reflow.

### Hero Lighting Rig

Three placed lights replacing the two blobs and five orbs entirely:

| Light | Color | Size | Blur | Opacity | Animation | Position |
|---|---|---|---|---|---|---|
| Key | emerald-500 | 900×900px | 180px | 8% | `drift-a`, scale breathe 0.95→1.05 | top-center, slightly left |
| Fill | indigo-500 | 800×800px | 200px | 5% | `drift-b` | bottom-right quadrant |
| Rim | violet-500 | 120×500px | 80px | 4% | `drift-c` | far left edge |

### Section Atmospheres

Each non-hero section gets a quieter version. Single pools, no orbs.

| Section | Lights |
|---|---|
| About | Indigo pool, bottom-right, 3% opacity |
| Experience | Indigo pool, bottom-right, 3% opacity |
| Projects | Emerald key, centered, 4% opacity — backlights the bento grid |
| Skills | Indigo top-right (4%) + small emerald bottom-left (3%) — inverted from hero |
| Contact | Deep indigo, centered, 3% opacity |

### Background Base

Page root gets a subtle gradient: `#070C14` (top) → `#080B18` (bottom, 2% more blue). Adds bottom weight — page feels like it has depth rather than being a flat surface.

### Hero Grid

Keep in hero only (already the case). Reduce opacity by ~30% so it reads as texture, not a grid pattern.

---

## File Changes

| File | Change |
|---|---|
| `src/index.css` | Remove `float-orb`. Add `drift-a/b/c` keyframes. Add `.light` base class. Add page gradient. Update `prefers-reduced-motion`. Reduce hero-grid opacity. |
| `src/components/Hero.jsx` | Remove 2 blobs + 5 orbs. Add 3 lights (key, fill, rim). |
| `src/components/About.jsx` | Replace `bg-gradient-to-b` backdrop with indigo pool. |
| `src/components/Experience.jsx` | Replace emerald right blob with indigo pool. |
| `src/components/Projects.jsx` | Reposition centered emerald blob as deliberate key. |
| `src/components/Skills.jsx` | Replace 2 corner blobs with inverted indigo/emerald scheme. |
| `src/components/Contact.jsx` | Replace emerald blob with deep indigo centered pool. |

---

## Constraints

- No new npm dependencies
- No WebGL or Canvas
- All animations use `transform` + `opacity` only (GPU path)
- `prefers-reduced-motion` disables all drift animations
- Does not touch component logic, only the decorative background layers
