/**
 * B3 · Winery Page — Structured Content Object
 * Task: B3 | Source: pages/winery-program.md
 * Usage: import { wineryContent } from './winery.content.js'
 */

export const wineryContent = {

  // ─── PAGE HERO ───────────────────────────────────────────────────────────────
  hero: {
    en: {
      label: "The Winery",
      h1: "Learn the Language the Land Speaks",
      sub: "An intimate workshop experience with the masters of Andalusian viticulture — inside the very Bodega where the wine is born.",
      cta: "Reserve My Workshop Place",
      ctaHref: "/en/book?type=workshop",
    },
    es: {
      label: "La Bodega",
      h1: "Aprende el Idioma que Habla la Tierra",
      sub: "Un taller íntimo con los maestros de la viticultura andaluza — dentro de la misma Bodega donde nace el vino.",
      cta: "Reserva Mi Lugar en el Taller",
      ctaHref: "/es/reservar?tipo=taller",
    },
  },

  // ─── INTRO ───────────────────────────────────────────────────────────────────
  intro: {
    en: {
      label: "Inside the Bodega",
      body: "There is a particular quality of silence inside an old wine cellar. Cool, still, heavy with the faint perfume of oak and fermentation. It is the silence of patience — of wine that has been waiting, quietly, for the right moment to be understood.\n\nThis is where your education begins.\n\nOur partner Bodega is not a winery that welcomes tourists. It is a working estate, one whose wines are distributed to a small, carefully selected network of sommeliers and private collectors across Europe. An invitation to learn here is genuinely rare — and we extend it to Wine & Flow guests as an act of trust that has been years in the building.",
    },
    es: {
      label: "Dentro de la Bodega",
      body: "Hay una calidad particular en el silencio de una bodega antigua. Fresco, quieto, cargado con el tenue perfume del roble y la fermentación. Es el silencio de la paciencia — de un vino que ha estado esperando, en silencio, el momento justo para ser comprendido.\n\nAquí es donde comienza tu educación.\n\nNuestra Bodega socia no es una bodega que recibe turistas. Es una finca en plena producción, cuyos vinos se distribuyen a una pequeña red cuidadosamente seleccionada de sommeliers y coleccionistas privados en toda Europa. Una invitación a aprender aquí es genuinamente escasa — y la extendemos a los huéspedes de Wine & Flow como un acto de confianza que ha llevado años construir.",
    },
  },

  // ─── WORKSHOP 3 MOVEMENTS ────────────────────────────────────────────────────
  movements: {
    en: {
      label: "What You Will Learn",
      preamble: "The workshop is structured across three movements — mirroring, intentionally, the arc of a yoga practice: grounding, opening, integration.",
      items: [
        {
          number: "I",
          title: "Grounding — The Terroir",
          body: "Begin in the vineyard itself. Your guide walks you through the specific geological and climatic conditions that make Málaga's wine region unlike any other in Spain — the altitude, the schist soils, the proximity of the sea, the ferocity of the Málaga sun. This is not theory. You are standing in it.",
        },
        {
          number: "II",
          title: "Opening — The Tasting",
          body: "Return to the cellar for a structured tasting of four Bodega wines — from a young, mineral-driven white to the estate's flagship aged red. Your sommelier will teach you a precise tasting vocabulary that replaces vague impressions with genuine observation. By the end of this movement, you will be able to articulate what you taste — and why it matters.",
        },
        {
          number: "III",
          title: "Integration — The Pairing",
          body: "The workshop closes with a seated pairing session: each wine is matched to a single, carefully selected local ingredient. A wedge of aged Manchego. A slice of house-cured Iberian ham. A square of dark chocolate from a single-origin Málaga producer. The pairing session is as much a meditation on contrast and harmony as it is a lesson in gastronomy.",
        },
      ],
    },
    es: {
      label: "Lo Que Aprenderás",
      preamble: "El taller se estructura en tres movimientos — reflejando, intencionalmente, el arco de una práctica de yoga: arraigo, apertura, integración.",
      items: [
        {
          number: "I",
          title: "Arraigo — El Terroir",
          body: "Comienza en el propio viñedo. Tu guía te lleva a través de las condiciones geológicas y climáticas específicas que hacen que la región vinícola de Málaga sea diferente a cualquier otra en España — la altitud, los suelos de esquisto, la proximidad al mar, la fiereza del sol malagueño. Esto no es teoría. Estás de pie en ella.",
        },
        {
          number: "II",
          title: "Apertura — La Cata",
          body: "Regresa a la bodega para una cata estructurada de cuatro vinos — desde un blanco joven de carácter mineral hasta el tinto reserva estrella de la finca. Tu sommelier te enseñará un vocabulario de cata preciso que reemplaza las impresiones vagas con observación genuina. Al final de este movimiento, podrás articular lo que saboreas — y por qué importa.",
        },
        {
          number: "III",
          title: "Integración — El Maridaje",
          body: "El taller concluye con una sesión de maridaje: cada vino se combina con un único ingrediente local cuidadosamente seleccionado. Una cuña de Manchego curado. Una loncha de jamón ibérico de la casa. Un cuadrado de chocolate negro de un productor malagueño de origen único. La sesión de maridaje es tanto una meditación sobre el contraste y la armonía como una lección de gastronomía.",
        },
      ],
    },
  },

  // ─── PROGRAMME DETAILS ───────────────────────────────────────────────────────
  details: {
    en: {
      label: "Programme Details",
      items: [
        { key: "Duration", value: "3.5 hours" },
        { key: "Location", value: "Our partner Bodega estate — transport from central Málaga included" },
        { key: "Group size", value: "Maximum 8 participants — private sessions available" },
        { key: "Language", value: "English, Spanish, or bilingual" },
        { key: "Includes", value: "Vineyard walk, cellar access, 4-wine structured tasting, pairing session, Bodega take-home bottle" },
        { key: "Available as", value: "Standalone booking, or integrated within the Sunset Harmony Package" },
      ],
      pricing: {
        label: "Investment",
        price: "From €185 per person",
        privateNote: "Private group sessions from €1,200 (up to 8 guests)",
      },
      cta: "Reserve My Workshop Place",
      ctaSecondary: "Enquire About Private Groups",
    },
    es: {
      label: "Detalles del Programa",
      items: [
        { key: "Duración", value: "3,5 horas" },
        { key: "Ubicación", value: "Finca de nuestra Bodega socia — transporte desde el centro de Málaga incluido" },
        { key: "Tamaño del grupo", value: "Máximo 8 participantes — sesiones privadas disponibles" },
        { key: "Idioma", value: "Inglés, español o bilingüe" },
        { key: "Incluye", value: "Paseo por el viñedo, acceso a la bodega, cata estructurada de 4 vinos, sesión de maridaje, botella de la Bodega para llevar a casa" },
        { key: "Disponible como", value: "Reserva individual, o integrado en el Paquete Sunset Harmony" },
      ],
      pricing: {
        label: "Inversión",
        price: "Desde €185 por persona",
        privateNote: "Sesiones privadas en grupo desde €1.200 (hasta 8 huéspedes)",
      },
      cta: "Reserva Mi Lugar en el Taller",
      ctaSecondary: "Consultar Grupos Privados",
    },
  },

  // ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
  testimonials: {
    en: [
      {
        quote: "I have attended wine tastings in Bordeaux, in Tuscany, in the Douro Valley. What happened in that cellar in Málaga was different. It felt less like a lesson and more like a confession.",
        author: "M.T.",
        location: "London",
        year: 2025,
      },
      {
        quote: "I expected a pleasant afternoon. I left with a fundamentally different relationship to wine — and to Málaga. The sommelier's knowledge runs so deep it's almost uncomfortable.",
        author: "Max S.",
        location: "Barcelona",
        year: 2026,
        services: "Wine Workshop + Restaurant",
        rating: "Satisfied",
      },
    ],
    es: [
      {
        quote: "He asistido a catas de vino en Burdeos, en la Toscana, en el Valle del Duero. Lo que ocurrió en aquella bodega de Málaga fue diferente. Se sintió menos como una lección y más como una confesión.",
        author: "M.T.",
        location: "Londres",
        year: 2025,
      },
      {
        quote: "Esperaba una tarde agradable. Me fui con una relación fundamentalmente distinta con el vino — y con Málaga. El conocimiento del sommelier es tan profundo que resulta casi incómodo.",
        author: "Max S.",
        location: "Barcelona",
        year: 2026,
        services: "Taller de Vino + Restaurante",
        rating: "Satisfecho",
      },
    ],
  },

};
