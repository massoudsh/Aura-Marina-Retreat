/**
 * B3 · Dining Page — Structured Content Object
 * Task: B3 | Source: Restaurant Page copy (Session 1 — "Born from the Sea")
 * Usage: import { diningContent } from './dining.content.js'
 */

export const diningContent = {

  // ─── PAGE HERO ───────────────────────────────────────────────────────────────
  hero: {
    en: {
      label: "The Kitchen",
      h1: "Born from the Sea. Rooted in the Land.",
      sub: "Locally sourced coastal cuisine — where the menu begins at the harbour, not the spreadsheet.",
    },
    es: {
      label: "La Cocina",
      h1: "Nacida del Mar. Arraigada en la Tierra.",
      sub: "Cocina costera de producto local — donde el menú empieza en el puerto, no en la hoja de cálculo.",
    },
  },

  // ─── ORIGIN STORY ────────────────────────────────────────────────────────────
  originStory: {
    en: [
      "There is a particular kind of wisdom that lives in the hands of a fisherman who has worked the same stretch of coast for forty years. He does not consult a menu. He reads the water, the wind, and the season — and what he brings back to shore becomes the foundation of everything we serve.",
      "Our kitchen does not begin with a recipe. It begins with a relationship — with the fishermen of the Málaga coast who deliver before sunrise, with the small inland farms where the olive trees are older than the country itself, and with the Andalusian grandmothers whose instinct for salt, acid, and heat has never required formal training.",
      "The result is a table that changes with the tide. Today it might be espeto de sardinas — the iconic Málaga skewered sardine, grilled over driftwood with nothing more than sea salt — or a delicate ceviche of local sea bass with avocado and cold-pressed Arbequina oil. Tomorrow it could be salt-crusted bream, roasted whole, presented tableside like the ceremony it deserves to be.",
      "We do not use the word 'fusion.' We use the word 'fidelity' — fidelity to the ingredient, to the season, and to the Mediterranean philosophy that great food needs only the confidence to stay simple.",
      "You are not eating a dish. You are eating a place.",
    ],
    es: [
      "Hay una sabiduría particular que vive en las manos de un pescador que ha trabajado el mismo tramo de costa durante cuarenta años. No consulta un menú. Lee el agua, el viento y la estación — y lo que trae de vuelta a la orilla se convierte en el fundamento de todo lo que servimos.",
      "Nuestra cocina no comienza con una receta. Comienza con una relación — con los pescadores de la costa malagueña que entregan antes del amanecer, con las pequeñas granjas del interior donde los olivos son más viejos que el propio país, y con las abuelas andaluzas cuyo instinto para la sal, la acidez y el calor nunca ha necesitado formación formal.",
      "El resultado es una mesa que cambia con la marea. Hoy pueden ser espetos de sardinas — el icónico espeto malagueño asado en madera con nada más que sal marina — o un delicado ceviche de lubina local con aguacate y aceite de Arbequina prensado en frío. Mañana podría ser una dorada a la sal, asada entera, presentada en la mesa como la ceremonia que merece ser.",
      "No usamos la palabra 'fusión.' Usamos la palabra 'fidelidad' — fidelidad al ingrediente, a la temporada y a la filosofía mediterránea de que la gran comida solo necesita la confianza de permanecer simple.",
      "No estás comiendo un plato. Estás comiendo un lugar.",
    ],
  },

  // ─── SEASONAL MENU PREVIEW (rotating — 4 dishes max shown) ──────────────────
  menuPreview: {
    en: {
      label: "Today's Table",
      note: "Our menu changes daily with the catch and season. What follows is a glimpse — not a guarantee.",
      dishes: [
        {
          name: "Espeto de Sardinas",
          description: "Málaga coast sardines, wood-grilled on traditional cane skewers over driftwood embers. Sea salt only.",
          dietary: ["GF", "DF"],
        },
        {
          name: "Ceviche de Lubina",
          description: "Local sea bass, cold-pressed Arbequina oil, avocado, fresh citrus, coastal herbs.",
          dietary: ["GF", "DF"],
        },
        {
          name: "Dorada a la Sal",
          description: "Whole gilt-head bream in a salt crust, roasted and broken tableside. Lemon, capers, olive oil.",
          dietary: ["GF", "DF"],
        },
        {
          name: "Tarta de Almendra",
          description: "Málaga almond tart, aged honey, local goat's cheese cream. A dessert with centuries of precedent.",
          dietary: ["GF", "V"],
        },
      ],
      dietaryKey: { GF: "Gluten Free", DF: "Dairy Free", V: "Vegetarian" },
    },
    es: {
      label: "La Mesa de Hoy",
      note: "Nuestro menú cambia diariamente con la pesca y la temporada. Lo que sigue es un anticipo — no una garantía.",
      dishes: [
        {
          name: "Espeto de Sardinas",
          description: "Sardinas de la costa malagueña, asadas en espeto tradicional sobre brasas de madera. Solo sal marina.",
          dietary: ["SG", "SL"],
        },
        {
          name: "Ceviche de Lubina",
          description: "Lubina local, aceite de Arbequina prensado en frío, aguacate, cítricos frescos, hierbas costeras.",
          dietary: ["SG", "SL"],
        },
        {
          name: "Dorada a la Sal",
          description: "Dorada entera en costra de sal, asada y abierta en la mesa. Limón, alcaparras, aceite de oliva.",
          dietary: ["SG", "SL"],
        },
        {
          name: "Tarta de Almendra",
          description: "Tarta de almendra malagueña, miel añejada, crema de queso de cabra local. Un postre con siglos de precedente.",
          dietary: ["SG", "V"],
        },
      ],
      dietaryKey: { SG: "Sin Gluten", SL: "Sin Lácteos", V: "Vegetariano" },
    },
  },

  // ─── SOURCING MAP LABELS ──────────────────────────────────────────────────────
  sourcingMap: {
    en: {
      label: "Where It Comes From",
      sources: [
        { id: "fish", label: "Daily catch — Málaga harbour fishermen" },
        { id: "oil", label: "Cold-pressed Arbequina — inland Andalusian groves" },
        { id: "produce", label: "Seasonal vegetables — small coastal farms" },
        { id: "almonds", label: "Málaga almonds — local orchards, harvested September" },
        { id: "wine", label: "Wines — our partner Bodega estate" },
      ],
    },
    es: {
      label: "De Dónde Viene",
      sources: [
        { id: "fish", label: "Pesca diaria — pescadores del puerto de Málaga" },
        { id: "oil", label: "Arbequina prensada en frío — olivares del interior andaluz" },
        { id: "produce", label: "Verduras de temporada — pequeñas granjas costeras" },
        { id: "almonds", label: "Almendras malagueñas — huertos locales, cosecha de septiembre" },
        { id: "wine", label: "Vinos — nuestra Bodega socia" },
      ],
    },
  },

  // ─── CHEF QUOTE ───────────────────────────────────────────────────────────────
  chefQuote: {
    en: {
      quote: "The sea is the recipe. I am simply the translator.",
      attribution: "— Head Chef, Heaven Flow",
    },
    es: {
      quote: "El mar es la receta. Yo soy simplemente el traductor.",
      attribution: "— Chef Principal, Heaven Flow",
    },
  },

  // ─── CTA ─────────────────────────────────────────────────────────────────────
  cta: {
    en: { text: "Reserve My Seat at the Table", href: "/en/book" },
    es: { text: "Reserva Mi Lugar en la Mesa", href: "/es/reservar" },
  },

};
