/**
 * B3 · Experiences Page — Structured Content Object
 * Task: B3 | Package: Sunset Harmony
 * Usage: import { experiencesContent } from './experiences.content.js'
 */

export const experiencesContent = {

  // ─── PAGE HERO ───────────────────────────────────────────────────────────────
  hero: {
    en: {
      label: "The Experience",
      h1: "The Sunset Harmony Package",
      sub: "A Full-Day Immersive Experience — Málaga, Andalusia",
    },
    es: {
      label: "La Experiencia",
      h1: "El Paquete Sunset Harmony",
      sub: "Una Experiencia Inmersiva de Día Completo — Málaga, Andalucía",
    },
  },

  // ─── NARRATIVE ───────────────────────────────────────────────────────────────
  narrative: {
    en: [
      "Some days simply pass. This one stays with you.",
      "The Sunset Harmony Package is our signature offering — a meticulously orchestrated twelve-hour arc of sensation, stillness, and celebration, designed for the traveler who understands that the greatest luxury is time spent with exquisite intentionality.",
      "Your day begins not with activity, but with breath. As the morning light bleeds amber across the whitewashed walls of our private terrace, your certified yoga guide invites you into an unhurried practice of grounding and presence. No mirrors. No performance. Simply you, the mat, and the sound of the sea a few hundred meters below.",
      "By late morning, the experience shifts to the sensory and the scholarly. Your sommelier — a certified master who has spent years in collaboration with our partner Bodega — walks you through three extraordinary vintages of Andalusian wine, each one a chapter in the region's viticultural story. You are not just drinking; you are reading the landscape through your palate.",
      "At the height of the day, a long table awaits. The chef, who sources exclusively from local fishermen and coastal farms, presents a curated menu born from whatever the sea offered that morning. The meal is slow. The conversation is easy. The setting — with views over the bay — is designed to make you feel both completely present and beautifully removed from the ordinary world.",
      "As the afternoon softens toward golden hour, there is a final, private moment: a restorative close practice, a traditional herbal infusion, and the quiet understanding that something in you has settled.",
      "This is not a day trip. It is a day transformed.",
    ],
    es: [
      "Algunos días simplemente pasan. Este se queda contigo.",
      "El Paquete Sunset Harmony es nuestra propuesta estrella — un arco de doce horas meticulosamente orquestado de sensación, quietud y celebración, diseñado para el viajero que entiende que el mayor lujo es el tiempo vivido con intencionalidad exquisita.",
      "Tu día comienza no con actividad, sino con respiración. Mientras la luz matutina tiñe de ámbar las paredes encaladas de nuestra terraza privada, tu guía de yoga certificado te invita a una práctica serena de arraigo y presencia. Sin espejos. Sin rendimiento. Solo tú, la esterilla y el sonido del mar a pocos cientos de metros.",
      "A media mañana, la experiencia se transforma en lo sensorial y lo académico. Tu sommelier — un maestro certificado que ha colaborado durante años con nuestra Bodega socia — te guía a través de tres extraordinarios vinos andaluces, cada uno un capítulo en la historia vitivinícola de la región. No solo bebes; lees el paisaje a través de tu paladar.",
      "En el punto álgido del día, una mesa larga te espera. El chef, que abastece exclusivamente de pescadores locales y granjas costeras, presenta un menú curado nacido de lo que el mar ofreció esa mañana. La comida es lenta. La conversación, fluida. El entorno — con vistas a la bahía — está diseñado para hacerte sentir completamente presente y bellamente alejado del mundo ordinario.",
      "Al suavizarse la tarde hacia la hora dorada, llega un momento final y privado: una práctica restauradora de cierre, una infusión de hierbas tradicional y la silenciosa certeza de que algo en ti se ha asentado.",
      "Esto no es una excursión. Es un día transformado.",
    ],
  },

  // ─── INCLUSIONS ──────────────────────────────────────────────────────────────
  inclusions: {
    en: [
      "Morning grounding yoga session (75 min) with a certified instructor on our private terrace",
      "Three curated wine pairings led by our resident Sommelier (certified WSET Level 3+)",
      "Guided sensory tasting: nose, palate, terroir storytelling for each varietal",
      "Chef's table seasonal lunch — locally sourced, seafood-focused, dietary accommodations available",
      "Aperitivo hour: Andalusian charcuterie, artisan cheeses & regional olives",
      "Restorative late-afternoon yoga / breathwork session (45 min)",
      "Traditional herbal tisane ceremony (curated from local botanicals)",
      "Private welcome kit: linen tote, handwritten daily intention card, local botanical water",
      "Curated take-home gift from our Bodega partner",
      "Transport coordination from central Málaga (upon request)",
      "Maximum 10 guests per session — intimate by design",
    ],
    es: [
      "Sesión matutina de yoga de arraigo (75 min) con instructor certificado en nuestra terraza privada",
      "Tres maridajes de vino curados dirigidos por nuestro Sommelier residente (certificado WSET Nivel 3+)",
      "Cata sensorial guiada: nariz, paladar y narrativa del terroir para cada varietal",
      "Almuerzo de temporada en mesa del chef — ingredientes locales, enfoque en mariscos, adaptaciones dietéticas disponibles",
      "Hora del aperitivo: embutidos andaluces, quesos artesanales y aceitunas regionales",
      "Sesión restauradora de yoga/respiración a última hora de la tarde (45 min)",
      "Ceremonia de tisana de hierbas tradicional (curada con botánica local)",
      "Kit de bienvenida privado: bolsa de lino, tarjeta de intención diaria escrita a mano, agua botánica local",
      "Pequeño obsequio curado de nuestra Bodega socia",
      "Coordinación de transporte desde el centro de Málaga (a petición)",
      "Máximo 10 huéspedes por sesión — íntimo por diseño",
    ],
  },

  // ─── PRICING ─────────────────────────────────────────────────────────────────
  pricing: {
    en: {
      label: "Investment",
      price: "From €395 per person",
      note: "Private group rates available upon enquiry.",
      cta: "Reserve My Place",
      ctaSecondary: "Enquire About Private Groups",
    },
    es: {
      label: "Inversión",
      price: "Desde €395 por persona",
      note: "Tarifas para grupos privados disponibles bajo consulta.",
      cta: "Reservar Mi Lugar",
      ctaSecondary: "Consultar Grupos Privados",
    },
  },

  // ─── DAY TIMELINE ─────────────────────────────────────────────────────────────
  timeline: {
    en: [
      { time: "08:00", event: "Arrival & Welcome Kit" },
      { time: "08:30", event: "Morning Grounding Yoga (75 min)" },
      { time: "10:15", event: "Sommelier Wine Tasting — Movement I" },
      { time: "11:30", event: "Bodega Storytelling & Terroir Walk" },
      { time: "13:00", event: "Chef's Table Lunch — Seafood Menu" },
      { time: "15:30", event: "Aperitivo Hour" },
      { time: "16:30", event: "Restorative Yoga & Breathwork (45 min)" },
      { time: "17:30", event: "Herbal Tisane Ceremony" },
      { time: "18:00", event: "Farewell & Take-Home Gift" },
    ],
    es: [
      { time: "08:00", event: "Llegada y Kit de Bienvenida" },
      { time: "08:30", event: "Yoga de Arraigo Matutino (75 min)" },
      { time: "10:15", event: "Cata de Vino con Sommelier — Movimiento I" },
      { time: "11:30", event: "Narrativa de la Bodega y Paseo por el Terroir" },
      { time: "13:00", event: "Almuerzo en Mesa del Chef — Menú de Mariscos" },
      { time: "15:30", event: "Hora del Aperitivo" },
      { time: "16:30", event: "Yoga Restaurador y Respiración (45 min)" },
      { time: "17:30", event: "Ceremonia de Tisana" },
      { time: "18:00", event: "Despedida y Obsequio para Llevar" },
    ],
  },

};
