# C2 · Image Selection & Editing Spec
> Task: C2 | Priority: 🟠 P2 | Owner: Photo Editor + Developer

---

## SELECTION CRITERIA

From every shot sequence, select only the image where:
1. **No one is looking at the camera** (unless it is an intentional portrait)
2. **The light is the hero** — the subject should be secondary to atmosphere
3. **There is room to breathe** — negative space for text overlay on hero images
4. **The emotion reads in a thumbnail** — test at 300px wide before final selection

Reject any image that feels: posed, rushed, oversaturated, or stock-photo-like.

---

## COLOR GRADE DIRECTION — "Warm/Filmic"

Target aesthetic: warm film emulation, not digital sharpness.

| Parameter | Direction |
|---|---|
| **Shadows** | Lifted slightly — never crushed black. Warm tint (slight amber/red in shadows) |
| **Highlights** | Desaturated, slightly rolled off — not blown-out white |
| **Midtones** | Warm gold-orange push |
| **Saturation** | Pull down 10–15% overall. Boost orange/red channel only (+15%) |
| **Whites** | Slightly warm (not clinical) |
| **Blacks** | Warm — never neutral grey |
| **Grain** | Add subtle film grain (ISO 400 equivalent) — especially on hero images |
| **Sharpness** | Reduce slightly. Soft, not tack-sharp. Luxury feels analog, not digital. |

**LUT Reference (if using Lightroom/Capture One):**
- Starting point: Kodak Portra 400 emulation preset
- Then adjust per above parameters manually
- Export a reference LUT file and apply consistently across all images

---

## CONSISTENCY RULE

All images on the site must feel like they were shot on the same day, in the same light.
If two images with different source lighting appear on the same page, grade them to match.

The homepage hero and the dining page hero must feel like siblings — not strangers.

---

## FINAL DELIVERY CHECKLIST (per image)

- [ ] Color graded to spec
- [ ] Exported in correct dimensions (see C3)
- [ ] Named per convention: `[page]_[section]_[number].jpg`
- [ ] WebP version generated alongside JPEG
- [ ] Alt text written and attached in delivery spreadsheet
- [ ] Hero images verified: enough empty space in upper-third for headline overlay
- [ ] No visible logos, phone screens, or brand names in frame (legal)
- [ ] Skin tones reviewed — no color casts on people
