# C3 · Asset Delivery Format Spec
> Task: C3 | Priority: 🟡 P3 | Owner: Photographer + Developer

---

## FILE FORMAT REQUIREMENTS

| Use Case | Format | Max Size |
|---|---|---|
| Hero images (web) | JPEG (sRGB, quality 85) | 500 KB |
| Gallery images (web) | JPEG (sRGB, quality 80) | 300 KB |
| Hero images (print-ready) | PNG or TIFF (uncompressed) | No limit |
| Logos | SVG (primary) + PNG @2x | < 100 KB |
| Fonts | WOFF2 (primary) + WOFF fallback | < 50 KB each |

---

## IMAGE DIMENSIONS — BY BREAKPOINT

| Breakpoint | Width (px) | Aspect Ratio | Use |
|---|---|---|---|
| Mobile | 800 | 9:16 (portrait hero) / 4:3 (cards) | Hero, cards |
| Tablet | 1400 | 16:9 / 4:3 | All |
| Desktop | 2400 | 16:9 / 21:9 (ultra-wide hero) | Hero only |
| Square | 1080×1080 | 1:1 | Social media |
| Portrait social | 1080×1350 | 4:5 | Instagram feed |

Photographer delivers RAW + full-res JPEG.
Developer/editor generates web-optimized versions from the master files.

---

## FOLDER STRUCTURE FOR DELIVERY

```
wine-and-flow-assets/
├── 00_RAW/                     ← Photographer originals (not for web)
│   └── [shoot_date]/
├── 01_EDITED_HIRES/            ← Graded, full-resolution masters
│   ├── home/
│   ├── experiences/
│   ├── dining/
│   ├── winery/
│   └── about/
├── 02_WEB_OPTIMIZED/           ← Ready to drop into /public/assets/images/
│   ├── home/
│   │   ├── home_hero_01.jpg
│   │   ├── home_hero_01.webp
│   │   ├── home_gallery_01.jpg
│   │   └── ...
│   ├── experiences/
│   ├── dining/
│   ├── winery/
│   └── about/
└── 03_SOCIAL/                  ← 1:1 and 4:5 crops for Instagram
    ├── 1x1/
    └── 4x5/
```

---

## NAMING CONVENTION

```
[page]_[section]_[sequence].[ext]

Examples:
  home_hero_01.jpg           → Homepage hero, first option
  home_hero_01.webp          → WebP version of same
  experiences_yoga_01.jpg    → Experiences page, yoga section, shot 1
  dining_chef_02.jpg         → Dining page, chef section, shot 2
  winery_cellar_01.jpg       → Winery page, cellar section
  about_team_01.jpg          → About page, team section
```

**Rules:**
- All lowercase
- Hyphens NOT underscores between words within a segment? → underscores within sections
- No spaces, no special characters
- Sequence starts at `01`, not `1`

---

## DELIVERY METHOD

- **Primary:** Shared Google Drive folder or WeTransfer (links valid 14 days)
- **Backup:** Hard drive kept by photographer for 90 days post-shoot
- **Timeline:** Final edited WEB-OPTIMIZED files delivered within **21 days** of shoot date
- **Handoff spreadsheet:** Photographer delivers a Google Sheet with:
  - Filename | Page | Section | Alt Text | Approved (Y/N)

---

## WHAT DEVELOPER NEEDS FROM PHOTOGRAPHER DIRECTLY

1. All web-optimized JPEGs + WebP pairs, named correctly, in folder structure above
2. The spreadsheet with alt text per image
3. Written confirmation that no third-party model releases are needed (or that releases are signed)
4. 5 "hero candidates" flagged as top picks per page for designer review
