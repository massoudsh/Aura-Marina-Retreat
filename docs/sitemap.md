# A1 · Site Structure & Sitemap
> Task: A1 | Priority: 🔴 P1 | Owner: Developer

---

## 7 PRIMARY PAGES

```
/ (Home)
├── /experiences
│   └── /experiences/sunset-harmony       ← Package detail
├── /dining
├── /winery
│   └── /winery/workshop                  ← Workshop detail
├── /retreats                             ← Future: multi-day packages
├── /about
└── /book
    ├── /book/confirmation                ← Post-payment success
    └── /book/gift-voucher               ← Gift flow
```

---

## PAGE-BY-PAGE SPEC

### `/` — Home
**Purpose:** Emotional entry. Sell the feeling. Convert to `/book` or `/experiences`.
**Sections (in order):**
1. `Hero` — Full-bleed video/image, H1 headline, sub-headline, CTA
2. `Value Props` — 3 pillars (Wine / Wellness / Cuisine) with short copy
3. `Package Teaser` — Sunset Harmony card with price anchor + CTA
4. `Experience Scroll` — Horizontal or vertical scroll of 4–5 experience moments (image + caption)
5. `Testimonials` — 2–3 pull quotes, no star ratings (too commercial)
6. `As Seen In` — Logo bar: press mentions (if available)
7. `Booking CTA Banner` — Full-width warm image, CTA: "Reserve My Day"
8. `Footer`

**Hero Variants (A/B test):**
- Variant A: Autoplay video (muted, looped, golden hour footage)
- Variant B: Full-bleed still — Option 3 headline ("This Is Not a Tour. This Is a Transformation.")

---

### `/experiences`
**Purpose:** Detail the Sunset Harmony Package. Justify the price point.
**Sections:**
1. `Hero` — Page title + atmospheric sub-headline
2. `Narrative` — Full descriptive copy (existing draft)
3. `What's Included` — Bullet list with icons
4. `Timeline` — Visual day arc (06:30 → Sunset) — horizontal timeline component
5. `Price Block` — Investment, group options, private enquiry CTA
6. `Gallery Strip` — 5 curated experience photos
7. `FAQ Accordion` — 3 questions minimum
8. `Booking CTA` — Sticky on mobile, inline on desktop

---

### `/dining`
**Purpose:** Establish culinary credibility. Origin story. Local sourcing.
**Sections:**
1. `Hero` — Full-bleed kitchen/table photo
2. `The Story` — Origin narrative (existing draft: "Born from the Sea")
3. `Seasonal Menu Preview` — Rotating 3–4 dish descriptions (not a full menu)
4. `Sourcing Map` — Illustrated map of Málaga coast showing fish/farm origins
5. `Chef Portrait` — Short bio + quote
6. `Gallery` — 4 food/table shots
7. `CTA` — Link to `/book` or `/experiences`

---

### `/winery`
**Purpose:** Educate & invite. Build authority through Bodega partnership.
**Sections:**
1. `Hero` — Cellar/barrel room image
2. `Intro Paragraph` — "Learn to Drink With Your Whole Self"
3. `Workshop Detail` — 3 movements (Grounding / Opening / Integration)
4. `Programme Details` — Duration, size, price, includes
5. `Bodega Partner Feature` — Logo, short bio, trust signal
6. `Testimonial Pull Quote`
7. `CTA` — "Reserve My Workshop Place"

---

### `/retreats`
**Purpose:** Future placeholder. Multi-day retreat offering (not yet active).
**MVP State:** Coming Soon page with email capture.
**Content:** Headline + 2-line teaser + email form.
**Do not link in primary nav on launch — only in footer.**

---

### `/about`
**Purpose:** Build human trust. Tell the founding story.
**Sections:**
1. `Hero` — Terrace/founding image
2. `Origin Story` — "Born from a Single Afternoon" (existing draft)
3. `The Philosophy` — "We believe depth is not about addition"
4. `Team Portraits` — Sommelier / Yoga Teacher / Chef (3 cards)
5. `Values` — 3 short statements
6. `CTA` — "Come Meet Us in Málaga"

---

### `/book`
**Purpose:** Convert. Minimum friction. Maximum trust.
**Sections:**
1. `Pre-booking note` — Reassurance copy (existing draft)
2. `Booking Widget` — Multi-service selector (see A2 spec)
3. `Contact Alternative` — WhatsApp + Email
4. `Gift Voucher Callout`
5. `FAQ Mini` — 2 Q&As to reduce hesitation

**UX Rules:**
- No distractions on this page. No nav links that lead away.
- Progress indicator on booking flow (Step 1 / 2 / 3)
- Trust signals: SSL badge, "Personal response in 24h" line

---

## NAVIGATION STRUCTURE

### Primary Nav (Desktop — top right, minimal)
```
The Experience  |  Dining  |  The Winery  |  Our Story  |  Book Now →
```
- "Book Now" is always a filled button (gold), all others are text links
- Logo centered or left depending on final design decision

### Mobile Nav
- Hamburger → full-screen overlay
- Same 5 links + language toggle at bottom
- "Book Now" pinned as sticky bottom bar on all pages except `/book`

### Footer Nav
```
Column 1: Experiences | Dining | Winery | Retreats
Column 2: About | Press | Sustainability | Gift Vouchers
Column 3: Contact | WhatsApp | Privacy Policy | Terms
Tagline: "Where the vine meets the soul — Málaga, Andalusia"
Language toggle: EN | ES
```

---

## ROUTING NOTES

- All routes support EN and ES via path prefix OR subdomain (decision in A3 spec)
  - Option A: `/en/experiences` · `/es/experiences`
  - Option B: `wineandflow.com/experiences` (EN default) + `es.wineandflow.com/experiences`
- Recommend **Option A** for simpler SEO and single deployment
- `/retreats` → redirect to homepage until launch-ready
- 404 page must match brand aesthetic — not generic. Include: headline, 1 CTA back to home

---

## SEO URL STRUCTURE

| Page | EN URL | ES URL |
|---|---|---|
| Home | `/en/` | `/es/` |
| Experiences | `/en/experiences` | `/es/experiencias` |
| Package Detail | `/en/experiences/sunset-harmony` | `/es/experiencias/sunset-harmony` |
| Dining | `/en/dining` | `/es/cocina` |
| Winery | `/en/winery` | `/es/bodega` |
| Workshop | `/en/winery/workshop` | `/es/bodega/taller` |
| About | `/en/about` | `/es/nosotros` |
| Book | `/en/book` | `/es/reservar` |
