/**
 * Curated Unsplash placeholder images — swap out for real photography before launch.
 * All images are free to use under the Unsplash license.
 */

const u = (id: string, w = 2400, q = 85) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const siteImages = {
  // ── Hero images (full-bleed) ──────────────────────────────────────────────
  homeHero:              u('1566073771259-6a8506099945'),   // infinity pool, coastal view
  homeCoast:             u('1507525428034-b723cf961d3e'),   // turquoise coast
  experiencesYoga:       u('1506126613408-eca07ce68773'),   // outdoor yoga at sunrise
  experiencesSavasana:   u('1544367567-0f2fcb009e0b'),      // savasana / relaxation
  diningTable:           u('1414235077428-338989a2e8c0'),   // refined restaurant interior
  diningChef:            u('1555396273-367ea4eb4db5'),      // artful food plating
  wineryCellar:          u('1474722927740-84e793e3c713'),   // vineyard / wine estate
  aboutTeam:             u('1529156069898-49953e39b3ac'),   // warm team gathering

  // ── Gallery grid (experiences page) ──────────────────────────────────────
  gallery: [
    { src: u('1506126613408-eca07ce68773', 900), alt: 'Morning yoga on the terrace' },
    { src: u('1510812431401-41d2bd2722f3', 900), alt: 'Sommelier wine tasting' },
    { src: u('1414235077428-338989a2e8c0', 900), alt: "Chef's table dining" },
    { src: u('1566073771259-6a8506099945', 900), alt: 'Coastal retreat pool' },
    { src: u('1474722927740-84e793e3c713', 900), alt: 'Estate vineyard at golden hour' },
    { src: u('1540206395-68808572332f',   900), alt: 'Sunset over Málaga bay' },
  ],
} as const;
