# A3 · Language Switcher Spec — EN ↔ ES
> Task: A3 | Priority: 🟠 P2 | Owner: Developer

---

## ARCHITECTURE DECISION

**Chosen approach: URL path prefix**
- EN: `wineandflow.com/en/...`
- ES: `wineandflow.com/es/...`
- Root `/` → auto-detect browser language → redirect to `/en/` or `/es/`

**Why not subdomain?** Single deployment, simpler SSL, better for small team maintenance.
**Why not query param (`?lang=es`)?** Bad for SEO — each language needs a canonical URL.

---

## FRAMEWORK RECOMMENDATION

If using **Next.js** (recommended for this project):
```js
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: true,  // auto-redirect based on Accept-Language header
  },
};
```

If using a static site generator (Astro, Eleventy):
- Use `astro-i18next` or similar
- Maintain separate content files per locale

---

## CONTENT FILE STRUCTURE

```
src/i18n/
├── en.json       ← All English strings
└── es.json       ← All Spanish strings
```

All UI strings, navigation labels, CTA text, FAQ, form labels, error messages,
and micro-copy must live in these files — **never hardcoded in components**.

Page-level long-form copy lives in `src/pages/*.content.js` (keyed by locale).

---

## SWITCHER UI SPEC

### Placement
- Desktop nav: far right, after "Book Now" button. Small text: `EN | ES`
- Mobile nav overlay: bottom of menu list
- Footer: bottom right corner, same styling

### Visual design
```
EN · ES
```
- Active locale: `--color-soul` weight `500`
- Inactive locale: `--color-sage` weight `400`
- Separator: `·` in `--color-sage`
- No flags. Flags are reductive and imprecise for international audiences.
- No dropdown. Just a toggle — two locales only.

### Behavior
- Switching language: stay on the same page (equivalent URL in other locale)
- Store preference in `localStorage` key `wf_locale`
- On return visit: redirect to stored preference if set

---

## HREFLANG TAGS (SEO)

Every page must include both hreflang tags in `<head>`:
```html
<link rel="alternate" hreflang="en" href="https://wineandflow.com/en/experiences" />
<link rel="alternate" hreflang="es" href="https://wineandflow.com/es/experiencias" />
<link rel="alternate" hreflang="x-default" href="https://wineandflow.com/en/experiences" />
```

---

## TRANSLATION RULES

1. ES content is **not a translation** — it is an original. Treat each locale as a primary voice.
2. All ES copy is provided in `pages/*.md` and `src/pages/*.content.js` — do not auto-translate.
3. If a string is missing in ES, fall back to EN and log a warning in dev. Never show raw key strings.
4. Date formats:
   - EN: `Saturday, 12 July 2026`
   - ES: `Sábado, 12 de julio de 2026`
5. Currency: always EUR (€) — no locale-specific currency switching.
6. Phone numbers: always display in international format `+34 xxx xxx xxx`.
