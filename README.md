# Wine & Flow | Málaga Immersive Retreat
**Version:** 1.0 — Initial Build Specification
**Team:** Team Devs
**Last Updated:** 2026-07-06

---

## PROJECT MISSION

Build a website that does not just inform, but **convinces**.

The site must function as an extension of the luxurious, restorative experience itself.
It should feel less like a commercial booking page and more like entering an exclusive
member's portal or a high-end travel magazine feature.

> **Core Mandate:** Every element — the color palette, the font choice, the photo caption,
> the CTA button — must evoke restraint, deep warmth, sophistication, and the sense of
> total presence. Never look cheap, hurried, or generic.

---

## TONE GUIDE (Must be maintained everywhere)

`Soulful` · `Elevated` · `Expert` · `Mediterranean Luxury` · `Intimate` · `Grounded`

**Primary Conversion Goal:** Booking a full-day experience through the dedicated booking widget.

---

## BRAND GUARDRAILS

### Aesthetic Mandate — Cinematic Coastal Warmth

- **Visual Feel:** Golden Hour lighting is mandatory. Deep shadows contrasted with luminous light.
- **Reference:** Condé Nast Traveller, Kinfolk Magazine.
- **Color Palette:**
  - Primary: Indigo Blue (`#3D5A6C`) · Terracotta Orange (`#C8713A`) · Creamy Beige (`#F5F0E8`)
  - Accent: Gold/Copper (`#C8A96E`) — used sparingly for CTAs and dividers only
  - Text base: Cellar Shadow (`#1C1810`) — never pure black
- **Typography:**
  - Headings (H1–H3): `Cormorant Garamond` — Light 300, implies history and tradition
  - Body/UI: `DM Sans` — Regular 400, clean and mobile-optimized

### Core Message Pillars

| Pillar | The Feeling | Proof Point | Keywords |
|---|---|---|---|
| **Wine** | Education, Lineage, Deep Connection to the Land | Bodega Partnerships, Sommelier Expertise, Varietal Storytelling | Ancient, Terroir, Legacy, Master |
| **Wellness** | Restoration, Effortless Presence, Inner Peace | Certified Instructors, Yoga Flow Integration, Quiet Sanctuary | Arrival, Breath, Stillness, Ritual |
| **Cuisine** | Fidelity to the Source, Seasonal Abundance, Simplicity | Local Fisherman Deliveries, Minimal Ingredients, Chef's Table | Coastal, Harvest, Simple, Fresh |

---

## TASK STREAMS OVERVIEW

### Stream A — UX/UI & Web Development
| Task | Description | Priority | Status |
|---|---|---|---|
| A1 | Site Structure / Sitemap (7 pages) | 🔴 P1 | → `docs/sitemap.md` |
| A2 | Booking Engine Integration | 🔴 P1 | → `docs/booking-engine-spec.md` |
| A3 | Language Switcher EN ↔ ES | 🟠 P2 | → `docs/i18n-spec.md` |
| A4 | Photo Gallery System | 🟡 P3 | → `docs/gallery-spec.md` |

### Stream B — Copywriting & Integration
| Task | Description | Priority | Source |
|---|---|---|---|
| B1 | Homepage Copy | 🔴 P1 | → `src/pages/home.content.js` |
| B2 | Value Prop Finalization | 🔴 P1 | → `src/pages/home.content.js` |
| B3 | Page Content Drafts | 🟠 P2 | → `src/pages/*.content.js` |
| B4 | Micro-Copy / FAQ | 🟡 P3 | → `src/components/ui.copy.js` |

### Stream C — Photography & Visuals
| Task | Description | Priority | Brief |
|---|---|---|---|
| C1 | Shoot Execution | 🔴 P1 | → `assets/photo-briefs/master-shot-list.md` |
| C2 | Image Selection & Editing | 🟠 P2 | → `docs/image-editing-spec.md` |
| C3 | Asset Delivery Format | 🟡 P3 | → `docs/asset-delivery-spec.md` |

---

## PROJECT TIMELINE

| Phase | Weeks | Tasks | Gate |
|---|---|---|---|
| 🔴 **P1 Foundation** | 1–2 | A1, B1, B2, C1 | Legal copy review + Sitemap approval |
| 🟠 **P2 Construction** | 3–4 | A2, B3, C2 | Finalized P1 assets handed off simultaneously |
| 🟡 **P3 Polishing** | 5 | A3, A4, B4, C3 | QA by all parties |
| 🟢 **Launch** | 6 | Full sign-off | Entire user journey approved |

---

## FILE STRUCTURE

```
wine-and-flow/
├── README.md                         ← You are here
├── BACKLOG.md                        ← Task tracking (28 content tasks)
├── docs/                             ← Technical specifications
│   ├── sitemap.md                    ← A1
│   ├── booking-engine-spec.md        ← A2
│   ├── i18n-spec.md                  ← A3
│   ├── gallery-spec.md               ← A4
│   ├── image-editing-spec.md         ← C2
│   └── asset-delivery-spec.md        ← C3
├── src/
│   ├── pages/                        ← Per-page content files (B1–B3)
│   │   ├── home.content.js
│   │   ├── experiences.content.js
│   │   ├── dining.content.js
│   │   ├── winery.content.js
│   │   ├── about.content.js
│   │   └── booking.content.js
│   ├── components/
│   │   └── ui.copy.js                ← B4: CTAs, FAQ, micro-copy
│   ├── i18n/
│   │   ├── en.json                   ← All EN strings
│   │   └── es.json                   ← All ES strings
│   └── styles/
│       └── tokens.css                ← Design tokens
├── pages/                            ← Raw copy drafts (source)
├── content/                          ← Marketing copy (source)
└── assets/
    ├── brand-system.md               ← Full brand guide
    └── photo-briefs/
        └── master-shot-list.md       ← C1 photographer brief
```

---

## QUICK LINKS FOR TEAM

| Need | Go To |
|---|---|
| Brand colors & fonts | `assets/brand-system.md` |
| All page copy (raw) | `pages/*.md` |
| Photo shoot brief | `assets/photo-briefs/master-shot-list.md` |
| Booking engine spec | `docs/booking-engine-spec.md` |
| Content as JS objects | `src/pages/*.content.js` |
| All strings (EN+ES) | `src/i18n/en.json` + `es.json` |
