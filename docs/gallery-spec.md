# A4 · Photo Gallery System Spec
> Task: A4 | Priority: 🟡 P3 | Owner: Developer

---

## GALLERY TYPES IN USE

| Type | Pages | Behavior |
|---|---|---|
| `HeroImage` | All pages | Full-bleed, single image, no interaction |
| `ExperienceStrip` | Home, Experiences | Horizontal scroll on mobile, grid on desktop |
| `EditorialGrid` | Dining, About | Masonry or asymmetric grid — never uniform squares |
| `LightboxGallery` | Winery, Experiences | Click to expand — minimal chrome lightbox |
| `SocialFeed` | Home footer (optional) | Latest 6 Instagram posts via API |

---

## PERFORMANCE REQUIREMENTS

- **Lazy loading:** All images below the fold use `loading="lazy"` + Intersection Observer
- **Format:** Serve WebP with JPEG fallback
  ```html
  <picture>
    <source srcset="image.webp" type="image/webp" />
    <img src="image.jpg" alt="..." loading="lazy" />
  </picture>
  ```
- **Sizes:** Generate 3 breakpoints per image:
  - Mobile: 800px wide
  - Tablet: 1400px wide
  - Desktop: 2400px wide (max — hero only)
- **Hero images:** Preload the LCP (Largest Contentful Paint) image:
  ```html
  <link rel="preload" as="image" href="/hero-home.webp" />
  ```
- **Target:** LCP < 2.5s on 4G mobile connection

---

## IMAGE NAMING CONVENTION

Follow the convention from `docs/asset-delivery-spec.md`:
```
[PageID]_[SectionID]_[SequenceNumber].[ext]
Examples:
  home_hero_01.webp
  experiences_gallery_03.webp
  winery_cellar_02.webp
  dining_table_01.webp
```

---

## LIGHTBOX BEHAVIOR

- Open: fade in over 300ms — `--duration-base`
- Background: `rgba(28, 24, 16, 0.92)` — warm dark, not cold black
- Navigation: subtle arrow buttons (left/right) — `--color-linen` at 60% opacity
- Close: `×` top right OR click outside OR `Escape` key
- Caption: appear below image in Cormorant Garamond Light Italic, `--color-linen`
- Do NOT show image counter ("3/12") — too mechanical, breaks luxury feel

---

## ALT TEXT POLICY

All images must have descriptive alt text — written for accessibility AND SEO:
- Describe the subject, mood, and context
- Include location keyword where natural
- Never: `image1.jpg` or empty alt on content images
- Example: `alt="Sommelier pouring Málaga white wine into crystal glass on sunlit terrace"`

---

## INSTAGRAM FEED (Optional — Phase 2)

- Use Instagram Basic Display API (or third-party: EmbedSocial, Curator.io)
- Show 6 most recent posts in a 2×3 grid
- No caption text displayed — image only, with hover showing IG icon
- Clicking → opens Instagram in new tab (not lightbox)
- Label above feed: `Follow our Days` (EN) / `Sigue Nuestros Días` (ES)
