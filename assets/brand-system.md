# TASK-19 + TASK-20 + TASK-21 + TASK-22 · Brand System
> Status: DONE
> Epic: 6 — Brand System

---

## TASK-19 · Color Palette

### Philosophy
The palette draws from the physical experience of Málaga itself:
the bleached ochre of sun-hit plaster, the cool shadow of a wine cellar,
the deep blue of the Mediterranean at midday, the warm copper of aged Rioja
held up to afternoon light, and the green-grey of wild Andalusian herb.

---

### 5-Token Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-soul` | Cellar Shadow | `#1C1810` | Primary text, headers, background dark mode. Deep, warm near-black. Never pure black. |
| `--color-gold` | Harvest Gold | `#C8A96E` | Accent, CTAs, hover states, decorative dividers. The brand's warmth signal. |
| `--color-linen` | Andalusian Linen | `#F5F0E8` | Primary background (light). Page base, card backgrounds. Warm white — never pure white. |
| `--color-sea` | Mediterranean | `#3D5A6C` | Secondary accent, links, icon tints, section backgrounds. Calm, authoritative. |
| `--color-sage` | Coastal Sage | `#8A9E8C` | Tertiary, subtle UI elements, borders, inactive states. Grounded, restful. |

---

### Usage Rules
- **Never** use pure `#000000` or `#FFFFFF` — the brand lives in warmth, not clinical contrast.
- `--color-gold` is reserved for intentional moments only (1–2 per page). Overuse dilutes its luxury signal.
- Dark sections: use `--color-soul` as background with `--color-linen` text.
- Light sections: use `--color-linen` background with `--color-soul` text.
- `--color-sea` should never appear adjacent to `--color-sage` without a neutral separator.

---

## TASK-20 · Typography System

### Philosophy
Two typefaces only. One with history, one with precision.
Never add a third. Restraint is the brand's typographic signature.

---

### Font Pairing

| Role | Family | Style | Fallback |
|---|---|---|---|
| **Display / H1–H2** | `Cormorant Garamond` | Light (300) & Light Italic | Georgia, serif |
| **Body / UI** | `DM Sans` | Regular (400) & Medium (500) | system-ui, sans-serif |

**Source:** Google Fonts (free, self-hostable for performance)

---

### Hierarchy Rules

| Level | Font | Size (desktop) | Size (mobile) | Weight | Line Height | Color |
|---|---|---|---|---|---|---|
| H1 | Cormorant Garamond | 64px | 40px | 300 | 1.1 | `--color-soul` |
| H2 | Cormorant Garamond | 40px | 28px | 300 Italic | 1.2 | `--color-soul` |
| H3 | Cormorant Garamond | 28px | 22px | 400 | 1.3 | `--color-soul` |
| Section Label | DM Sans | 11px | 11px | 500 — ALL CAPS + letter-spacing 0.15em | 1.4 | `--color-gold` |
| Body | DM Sans | 17px | 16px | 400 | 1.7 | `--color-soul` |
| Caption / Meta | DM Sans | 13px | 13px | 400 | 1.5 | `--color-sage` |
| CTA Button | DM Sans | 14px | 14px | 500 — ALL CAPS + letter-spacing 0.1em | — | varies by variant |

---

### Typography Notes
- Cormorant Garamond Light Italic is the brand's most distinctive typographic voice. Use it for pull quotes, hero sub-headlines, and the opening lines of long narrative copy.
- Body text maximum line length: 65–72 characters. Never allow full-width body text on desktop — it destroys readability and luxury feel.
- Avoid bold (`700+`) in Cormorant — it breaks the elegance. If emphasis is needed in display type, use italic instead.

---

## TASK-21 · Design Tokens — Spacing, Radius, Shadow

### Spacing Scale (8px base)

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `8px` | Inline gaps, icon padding |
| `--space-sm` | `16px` | Component internal padding |
| `--space-md` | `24px` | Card padding, form field spacing |
| `--space-lg` | `48px` | Section internal spacing |
| `--space-xl` | `80px` | Section-to-section vertical rhythm |
| `--space-2xl` | `128px` | Hero padding, major section separators |

---

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Form inputs, small badges |
| `--radius-md` | `8px` | Cards, image frames |
| `--radius-lg` | `16px` | Modal overlays |
| `--radius-pill` | `999px` | CTA buttons only |
| `--radius-none` | `0px` | Full-bleed images, hero sections |

---

### Shadow System

| Token | Value | Usage |
|---|---|---|
| `--shadow-subtle` | `0 2px 12px rgba(28, 24, 16, 0.06)` | Cards, hover lift |
| `--shadow-card` | `0 8px 32px rgba(28, 24, 16, 0.10)` | Modal, floating elements |
| `--shadow-deep` | `0 24px 64px rgba(28, 24, 16, 0.18)` | Dropdown, sticky header on scroll |

**Rule:** Never use colored shadows. All shadows derive from `--color-soul` with opacity — this keeps the shadow system warm and on-brand.

---

### Motion / Animation

| Token | Value | Usage |
|---|---|---|
| `--ease-brand` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | All UI transitions |
| `--duration-fast` | `150ms` | Hover states, focus rings |
| `--duration-base` | `300ms` | Page transitions, accordions |
| `--duration-slow` | `600ms` | Hero entrance, image reveals |

**Rule:** Never use `ease-in` as the primary motion curve — it feels abrupt and cheap. The brand moves like a slow pour, not a click.

---

## TASK-22 · Logo Usage Guidelines

### Clear Space
- Minimum clear space on all sides: equal to the height of the wordmark's capital letter.
- On photography: always place the logo on a region with sufficient contrast. Never on a patterned or busy area of an image.

### Approved Versions
| Variant | Background | Usage |
|---|---|---|
| Primary (dark wordmark) | `--color-linen` or white photography | Default for all light contexts |
| Reversed (linen wordmark) | `--color-soul` or dark photography | Dark sections, email headers |
| Monochrome (single `--color-gold`) | Dark backgrounds only | Special print, embossed applications |

### Sizing Minimums
- **Digital:** 120px width minimum
- **Print:** 25mm width minimum
- **Favicon / App icon:** Use brandmark (initial monogram) only — not full wordmark

### Forbidden Uses
- Do not stretch, rotate, or recolor the logo outside approved variants
- Do not place the logo on `--color-gold` backgrounds (illegible, brand signal conflict)
- Do not add drop shadows to the logo
- Do not enclose the logo in a box or shape unless it is the approved circular badge variant

---
