# Launch QA Checklist
> Epic 9 — Launch | Team: Team Devs
> Complete before final sign-off.

---

## 1. CONTENT QA — Both Languages

### Pages to check (EN + ES for each)
- [ ] `/en/` + `/es/` — Home: hero, 3 pillars, package teaser, booking banner, footer
- [ ] `/en/experiences` + `/es/experiencias` — Sunset Harmony: narrative, inclusions, timeline, pricing
- [ ] `/en/dining` + `/es/cocina` — Origin story, menu preview, sourcing, chef quote
- [ ] `/en/winery` + `/es/bodega` — Hero, 3 movements, programme details, testimonials
- [ ] `/en/about` + `/es/nosotros` — Origin, philosophy, team cards, values, closing CTA
- [ ] `/en/book` + `/es/reservar` — Pre-booking note, form, contact block, gift voucher
- [ ] `/en/book/confirmation` + `/es/reservar/confirmacion` — Confirmation copy, links

### Content checks per page
- [ ] No placeholder text remaining (`[number]`, `[address]`, `[time]`, etc.)
- [ ] No raw key strings visible (e.g. `nav.book` instead of "Book Now")
- [ ] ES copy reads as original voice — not as a translation
- [ ] All CTAs link to correct localized URLs (`/en/...` vs `/es/...`)
- [ ] FAQ accordion opens/closes correctly and copy is complete

---

## 2. FUNCTIONAL QA — Booking Flow

### Self-serve booking (PKG_SUNSET + WRK_WINE)
- [ ] Step 1: Experience selector shows correct options in both languages
- [ ] Step 2: Date picker shows unavailable dates correctly (filled sessions greyed out)
- [ ] Step 3: Group size limiter respects max (10 for full day, 8 for workshop)
- [ ] Step 4: Form validates required fields (name, email)
- [ ] Step 4: Optional fields (phone, dietary, message) submit correctly when empty
- [ ] Step 5: Order summary displays correct experience, date, group size, price
- [ ] Step 5: Refund policy text visible before payment button
- [ ] Stripe sandbox: test card `4242 4242 4242 4242` completes successfully
- [ ] Stripe sandbox: card decline `4000 0000 0000 0002` shows warm error (not red)
- [ ] Step 6: Confirmation page loads after successful payment
- [ ] Step 6: Confirmation email arrives within 2 minutes (check spam)
- [ ] Apple Pay / Google Pay buttons appear on mobile (Safari / Chrome)

### Enquiry flow (private groups + gift vouchers)
- [ ] `/en/book?type=gift` loads gift voucher variant correctly
- [ ] `/en/book?type=private` loads private group enquiry variant
- [ ] Enquiry form submits and auto-reply email arrives within 1 minute
- [ ] Admin receives notification of new enquiry

---

## 3. LANGUAGE SWITCHER QA

- [ ] EN → ES switch: stays on equivalent page (not redirected to home)
- [ ] ES → EN switch: stays on equivalent page
- [ ] Language preference saved in `localStorage` key `wf_locale`
- [ ] On return visit: redirected to stored language preference
- [ ] `/` root: auto-detects browser language and redirects correctly
- [ ] `hreflang` tags present and correct on all pages (check page source)
- [ ] Active locale styled correctly (weight 500, `--color-soul`)
- [ ] Inactive locale styled correctly (weight 400, `--color-sage`)

---

## 4. VISUAL / DESIGN QA

### Typography
- [ ] H1–H3: Cormorant Garamond Light 300 rendering on all major browsers
- [ ] Body: DM Sans Regular 400 rendering correctly
- [ ] Section labels: ALL CAPS + letter-spacing `0.15em` + `--color-gold`
- [ ] No body text wider than 65ch on desktop
- [ ] H2 appears in italic (Cormorant Garamond Light Italic)

### Color
- [ ] No pure `#000000` or `#FFFFFF` used anywhere — verify in inspector
- [ ] `--color-gold` appears maximum 2× per page (CTAs + dividers only)
- [ ] Dark sections: `--color-soul` background with `--color-linen` text
- [ ] Form input focus ring: `--color-gold`, not browser default blue

### Buttons
- [ ] Primary (`.btn-primary`): gold fill → transparent/gold outline on hover
- [ ] Secondary (`.btn-secondary`): soul outline → soul fill on hover
- [ ] Ghost (`.btn-ghost`): linen outline → linen fill on hover
- [ ] All CTAs: ALL CAPS, letter-spacing `0.1em`, `--radius-pill`
- [ ] Hover transitions: `150ms --ease-brand` (not instant, not slow)

### Images
- [ ] All hero images preloaded (`<link rel="preload">`)
- [ ] All gallery images lazy-loaded (`loading="lazy"`)
- [ ] WebP served with JPEG fallback (`<picture>` tag)
- [ ] No alt text empty on content images
- [ ] Lightbox: warm dark overlay, no star ratings, no image counter

---

## 5. PERFORMANCE QA

Run with Chrome DevTools Lighthouse on mobile preset (slow 4G):

- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID / INP (Interaction): < 200ms
- [ ] CLS (Layout Shift): < 0.1
- [ ] Accessibility score: ≥ 90
- [ ] SEO score: 100

Additional checks:
- [ ] All images: < 500KB (hero), < 300KB (gallery)
- [ ] Google Fonts: self-hosted or preconnected (`rel="preconnect"`)
- [ ] No render-blocking scripts in `<head>` (defer/async JS)

---

## 6. SEO QA

- [ ] `<title>` tags: correct for each page and locale (see `pages/footer-seo.md`)
- [ ] `<meta description>`: correct for each page and locale
- [ ] `hreflang` tags on every page: `en`, `es`, `x-default`
- [ ] `/sitemap.xml` generated and accessible
- [ ] `/robots.txt` allows crawling of all public pages
- [ ] `/retreats` redirects to homepage (not indexed)
- [ ] 404 page: branded, includes CTA back to home, returns HTTP 404 (not 200)
- [ ] Canonical tags: each page has correct canonical URL

---

## 7. MOBILE QA (test on real devices or BrowserStack)

### Devices to test
- iPhone 14 Pro (Safari) — primary mobile target
- Samsung Galaxy S23 (Chrome)
- iPad (Safari) — tablet breakpoint

### Checks
- [ ] Sticky "Book Now" bar appears on all pages except `/book`
- [ ] Mobile hamburger → full-screen overlay opens/closes cleanly
- [ ] Language toggle at bottom of mobile nav
- [ ] Booking flow: each step is full-screen, no horizontal scroll
- [ ] Hero images: portrait crop (9:16) used on mobile, not desktop crop
- [ ] Touch targets: all buttons ≥ 44×44px
- [ ] Form fields: native keyboard opens on focus (not blocked)

---

## 8. FINAL SIGN-OFF

| Sign-off | Name | Date | Status |
|---|---|---|---|
| Developer (functional QA) | | | [ ] |
| Designer (visual QA) | | | [ ] |
| Copywriter (content QA — EN) | | | [ ] |
| Copywriter (content QA — ES) | | | [ ] |
| Client / Founder | | | [ ] |
| **LAUNCH** | | | [ ] |
