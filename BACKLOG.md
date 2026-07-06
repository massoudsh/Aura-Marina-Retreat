# Wine & Flow — Project Backlog

> Brand: Wine & Flow | Location: Málaga, Andalusia
> Positioning: Premium / Luxury Wellness & Wine Experience
> Languages: EN (primary) + ES (primary — not a translation)
> Last updated: 2026-07-06

---

## STATUS KEY
- `[ ]` To Do
- `[x]` Done
- `[~]` In Progress

---

## EPIC 1 — Messaging & Voice
> Core brand copy. Tone: Soulful, Spiritual, Cinematic.

- [x] TASK-01 · Homepage Hero — 3 Headline/Sub-headline options (EN + ES)
- [x] TASK-02 · Homepage Hero — Primary CTA copy (EN + ES)
- [x] TASK-03 · Value Proposition — 3 pillars copy (History, Wellness, Sensory) EN + ES

---

## EPIC 2 — Page Content (Priority)
> Deliverable: production-ready copy blocks per page.

- [x] TASK-04 · Experiences Page — "Sunset Harmony Package" full narrative (EN + ES)
- [x] TASK-05 · Experiences Page — Inclusions bullet list (EN + ES)
- [x] TASK-06 · Experiences Page — Pricing anchor statement (EN + ES)
- [x] TASK-07 · Restaurant Page — Origin story / cuisine narrative (EN + ES)
- [x] TASK-08 · Winery Program Page — Workshop educational appeal (EN + ES)

---

## EPIC 3 — UX & Micro-copy
- [x] TASK-09 · CTA Copy Bank — 5 variations with emotional stage mapping (EN + ES)
- [x] TASK-10 · FAQ — 3 Q&A blocks (Dress Code, Beginner-friendly, Dietary) EN + ES

---

## EPIC 4 — Visual Direction
- [x] TASK-11 · Homepage — 7 Photography directives (cinematic/lifestyle brief)
- [x] TASK-12 · Experiences Page — 6 Photography directives
- [x] TASK-13 · Restaurant Page — 6 Photography directives

---

## EPIC 5 — Site Architecture & Pages
- [x] TASK-14 · About Page — Brand story & founding narrative (EN + ES)
- [x] TASK-15 · Winery Program Page — Full structured page copy (EN + ES)
- [x] TASK-16 · Booking/Contact Page — Form micro-copy + pre-booking messaging (EN + ES)
- [x] TASK-17 · Footer — Legal copy, tagline, social proof line (EN + ES)
- [x] TASK-18 · SEO Meta — Title tags + meta descriptions for all 5 pages (EN + ES)

---

## EPIC 6 — Brand System
- [x] TASK-19 · Color Palette — 5-token palette with hex codes & usage rules
- [x] TASK-20 · Typography System — Font pairing + hierarchy rules
- [x] TASK-21 · Design Tokens — Spacing, radius, shadow, motion system
- [x] TASK-22 · Logo Usage Guidelines — Clear space, backgrounds, sizing minimums

---

## EPIC 7 — Photography Production
- [x] TASK-23 · Winery Program Page — Photography directives (6 shots)
- [x] TASK-24 · About Page — Photography directives (5 shots)
- [x] TASK-25 · Master Shot List — Consolidated brief for photographer (36 editorial + 20 social)

---

## EPIC 8 — Social & Marketing
- [x] TASK-26 · Instagram Caption Bank — 10 captions (EN + ES), lifestyle tone
- [x] TASK-27 · Email Welcome Sequence — 3-email post-booking flow (EN + ES)
- [x] TASK-28 · Google Ads Copy — 3 RSA variants (EN + ES)

---

## EPIC 9 — Developer Platform Build (from README spec)
> Team: Team Devs | Role: UX/UI & Web Developer

### 🔴 P1 — Foundation (Week 1–2)
- [x] README.md — Full project spec with brand guardrails, task matrix, file structure
- [x] A1 · docs/sitemap.md — 7-page site structure, section breakdowns, routing, SEO URLs
- [x] B1 · src/pages/home.content.js — Hero (Option 3), Value Props, Package Teaser, CTA Banner
- [x] B2 · Value Props finalized in home.content.js — 3 pillars with tone flow intact
- [x] A2 · docs/booking-engine-spec.md — Multi-service booking logic, Stripe spec, UX rules

### 🟠 P2 — Construction (Week 3–4)
- [x] B3 · src/pages/experiences.content.js — Full Sunset Harmony Package structured content
- [x] A3 · docs/i18n-spec.md — Language switcher architecture, URL paths, hreflang
- [x] src/i18n/en.json — All English UI strings, nav, CTAs, form, errors, a11y
- [x] src/i18n/es.json — All Spanish UI strings (primary voice, not translation)
- [x] C2 · docs/image-editing-spec.md — Color grade direction, selection criteria, checklist

### 🟡 P3 — Polishing (Week 5)
- [x] A4 · docs/gallery-spec.md — Gallery types, performance rules, lazy load, lightbox
- [x] B4 · src/components/ui.copy.js — 5 CTA variants, full FAQ, nav, footer, forms, 404
- [x] C3 · docs/asset-delivery-spec.md — File formats, naming convention, folder structure
- [x] src/styles/tokens.css — Full design token system (colors, type, spacing, motion)

### 🟡 P3 — Polishing (complete)
- [x] src/pages/dining.content.js — Kitchen story, menu preview, sourcing, chef quote (EN+ES)
- [x] src/pages/winery.content.js — Bodega workshop, 3 movements, details, testimonials (EN+ES)
- [x] src/pages/about.content.js — Origin, philosophy, team, values, closing CTA (EN+ES)
- [x] src/pages/booking.content.js — Pre-book note, contact, gift voucher, confirmation, testimonials (EN+ES)
- [x] docs/qa-checklist.md — Full launch QA checklist (content, functional, design, performance, SEO, mobile)
- [x] README.md — Fixed FILE STRUCTURE: wine-and-flow/ → Aura-Marina-Retreat/, added qa-checklist + missing files
- [x] Testimonial (max shemirani) — Integrated across winery.content.js + booking.content.js

### 🟢 Launch
- [ ] QA pass — all pages, both languages, mobile + desktop (see docs/qa-checklist.md)
- [ ] Fill placeholders: phone number, email, physical address, pick-up point
- [ ] Booking flow end-to-end test (Stripe sandbox)
- [ ] Performance audit — LCP < 2.5s, Core Web Vitals green
- [ ] Final sign-off by full team (see sign-off table in qa-checklist.md)

---

## NOTES
- EPICs 1–9: ALL TASKS COMPLETE ✓ — except Launch QA (requires live environment)
- Total files: 27 across pages/, assets/, content/, docs/, src/
- Duplications reviewed: pages/ (raw markdown) and src/pages/ (JS objects) are intentionally different — writers review pages/, developers import src/pages/
- Remaining action: fill phone/email placeholders before going live
