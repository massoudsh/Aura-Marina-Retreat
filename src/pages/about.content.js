/**
 * B3 · About Page — Structured Content Object
 * Task: B3 | Source: pages/about.md
 * Usage: import { aboutContent } from './about.content.js'
 */

export const aboutContent = {

  // ─── PAGE HERO ───────────────────────────────────────────────────────────────
  hero: {
    en: {
      label: "Our Story",
      h1: "Born from a Single Afternoon",
      sub: "Two people. A terrace. The Mediterranean. And a shared conviction that Málaga deserved something no one had built yet.",
    },
    es: {
      label: "Nuestra Historia",
      h1: "Nacida de una Sola Tarde",
      sub: "Dos personas. Una terraza. El Mediterráneo. Y la convicción compartida de que Málaga merecía algo que nadie había construido todavía.",
    },
  },

  // ─── ORIGIN NARRATIVE ────────────────────────────────────────────────────────
  origin: {
    en: [
      "It began the way the best ideas always do — not in a boardroom, but over a glass of wine on a terrace, watching the sun dissolve into the Mediterranean.",
      "Two people. A shared obsession with the way certain experiences — a wine that perfectly mirrors its landscape, a yoga practice that finally quiets the mind, a meal so simple it borders on spiritual — have the capacity to change how you see the rest of your life.",
      "Heaven Flow was not designed. It was recognized. A realization that Málaga — one of Europe's most underestimated destinations, a city of extraordinary wine heritage, ancient Moorish architecture, and some of the most generous coastline in the world — deserved an experience worthy of what it actually is.",
      "Not a tour. Not a tasting. Not another wellness retreat promising transformation through a rebranded programme.",
      "Something rarer: a day in which every element — the wine, the movement, the food, the silence — is in such precise conversation with one another that the guest does not leave feeling entertained. They leave feeling known.",
    ],
    es: [
      "Comenzó como siempre empiezan las mejores ideas — no en una sala de reuniones, sino ante una copa de vino en una terraza, viendo el sol disolverse en el Mediterráneo.",
      "Dos personas. Una obsesión compartida por la manera en que ciertas experiencias — un vino que refleja a la perfección su paisaje, una práctica de yoga que finalmente aquieta la mente, una comida tan sencilla que roza lo espiritual — tienen la capacidad de cambiar cómo ves el resto de tu vida.",
      "Heaven Flow no fue diseñada. Fue reconocida. La constatación de que Málaga — uno de los destinos más subestimados de Europa, una ciudad de extraordinario patrimonio vinícola, arquitectura morisca ancestral y una de las costas más generosas del mundo — merecía una experiencia a la altura de lo que realmente es.",
      "No un tour. No una cata. No otro retiro de bienestar que promete transformación a través de un programa rebautizado.",
      "Algo más raro: un día en que cada elemento — el vino, el movimiento, la comida, el silencio — está en conversación tan precisa entre sí, que el huésped no se va sintiéndose entretenido. Se va sintiéndose reconocido.",
    ],
  },

  // ─── PHILOSOPHY ──────────────────────────────────────────────────────────────
  philosophy: {
    en: {
      label: "The Philosophy",
      headline: "We believe that peace is not about addition.",
      body: "The modern traveller has already stayed in beautiful hotels. They have already eaten at Michelin-starred restaurants. They are not searching for more. They are searching for depth.\n\nAt Heaven Flow, depth is our discipline. We keep groups intimate — never more than ten guests — because intimacy is not a limitation, it is the entire point. We source every ingredient locally not because it is fashionable, but because the fisherman who has worked the Málaga coast for forty years knows things about the sea that no supply chain ever will.\n\nWe are not interested in scale. We are interested in truth.",
    },
    es: {
      label: "La Filosofía",
      headline: "Creemos que la paz no se trata de acumulación.",
      body: "El viajero contemporáneo ya se ha alojado en hoteles hermosos. Ya ha comido en restaurantes con estrellas Michelin. No busca más. Busca profundidad.\n\nEn Heaven Flow, la profundidad es nuestra disciplina. Mantenemos los grupos íntimos — nunca más de diez huéspedes — porque la intimidad no es una limitación, es el punto central. Obtenemos cada ingrediente localmente no porque esté de moda, sino porque el pescador que ha trabajado la costa malagueña durante cuarenta años sabe cosas del mar que ninguna cadena de suministro sabrá jamás.\n\nNo nos interesa la escala. Nos interesa la verdad.",
    },
  },

  // ─── TEAM ────────────────────────────────────────────────────────────────────
  team: {
    en: {
      label: "The People",
      intro: "Heaven Flow is a collaboration between three practitioners who have each spent years becoming genuinely expert in their field — and who believe those fields belong together.",
      members: [
        {
          role: "Sommelier",
          credential: "WSET Level 3 Certified",
          bio: "A certified master whose knowledge of Andalusian viticulture runs several generations deep. He has spent years in collaboration with our partner Bodega — not as a visitor, but as a student of their lineage.",
          quote: "Wine is not a status symbol. It is a language.",
        },
        {
          role: "Yoga Teacher",
          credential: "15+ years certified practice",
          bio: "A practitioner with over fifteen years of teaching experience whose sessions are designed not for performance, but for arrival. She has studied across India, Portugal, and Andalusia, and her practice reflects every landscape she has moved through.",
          quote: "The practice is not about the pose. It is about what the pose makes possible.",
        },
        {
          role: "Head Chef",
          credential: "Local sourcing philosophy",
          bio: "A chef whose entire culinary philosophy can be reduced to one sentence: the sea is the recipe. He sources exclusively from fishermen he knows by name and farms he has visited in person.",
          quote: "I don't write menus. The sea does.",
        },
      ],
    },
    es: {
      label: "Las Personas",
      intro: "Heaven Flow es una colaboración entre tres profesionales que han pasado años convirtiéndose en verdaderos expertos en su campo — y que creen que esos campos pertenecen juntos.",
      members: [
        {
          role: "Sommelier",
          credential: "Certificado WSET Nivel 3",
          bio: "Un maestro certificado cuyo conocimiento de la viticultura andaluza tiene varias generaciones de profundidad. Ha pasado años en colaboración con nuestra Bodega socia — no como visitante, sino como estudiante de su linaje.",
          quote: "El vino no es un símbolo de estatus. Es un idioma.",
        },
        {
          role: "Profesora de Yoga",
          credential: "Más de 15 años de práctica certificada",
          bio: "Una practicante con más de quince años de experiencia docente cuyas sesiones están diseñadas no para el rendimiento, sino para la llegada. Ha estudiado en India, Portugal y Andalucía, y su práctica refleja cada paisaje por el que se ha movido.",
          quote: "La práctica no trata de la postura. Trata de lo que la postura hace posible.",
        },
        {
          role: "Chef Principal",
          credential: "Filosofía de abastecimiento local",
          bio: "Un chef cuya filosofía culinaria entera puede reducirse a una sola frase: el mar es la receta. Abastece exclusivamente de pescadores que conoce por su nombre y granjas que ha visitado en persona.",
          quote: "Yo no escribo menús. Lo hace el mar.",
        },
      ],
    },
  },

  // ─── VALUES (3 short statements) ────────────────────────────────────────────
  values: {
    en: [
      { label: "Intimacy over scale", body: "Never more than ten guests. Always." },
      { label: "Fidelity over fashion", body: "Local sourcing not as a trend, but as a commitment to truth." },
      { label: "Depth over breadth", body: "One extraordinary day, done with complete precision." },
    ],
    es: [
      { label: "Intimidad sobre escala", body: "Nunca más de diez huéspedes. Siempre." },
      { label: "Fidelidad sobre moda", body: "Abastecimiento local no como tendencia, sino como compromiso con la verdad." },
      { label: "Profundidad sobre amplitud", body: "Un día extraordinario, hecho con precisión completa." },
    ],
  },

  // ─── CLOSING CTA ─────────────────────────────────────────────────────────────
  closing: {
    en: {
      quote: "Come as a guest. Leave as someone who has genuinely arrived.",
      cta: "Reserve My Day",
      ctaSecondary: "Explore the Experience",
      ctaHref: "/en/book",
      ctaSecondaryHref: "/en/experiences",
    },
    es: {
      quote: "Llega como huésped. Parte como alguien que genuinamente ha llegado.",
      cta: "Reserva Mi Día",
      ctaSecondary: "Conoce la Experiencia",
      ctaHref: "/es/reservar",
      ctaSecondaryHref: "/es/experiencias",
    },
  },

};
