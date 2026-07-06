/**
 * B1 + B2 · Homepage Copy — Structured Content Object
 * Task: B1 (Hero), B2 (Value Props)
 * Usage: import { homeContent } from './home.content.js'
 */

export const homeContent = {

  // ─── HERO SECTION ───────────────────────────────────────────────────────────
  // Using Option 3 (Transformation) as per B1 spec — most emotive variant
  hero: {
    en: {
      h1: "This Is Not a Tour. This Is a Transformation.",
      h2: "Wine & Flow is a curated sanctuary day in the heart of Málaga — crafted for those who seek presence, beauty, and the quiet luxury of being entirely here.",
      cta: "Begin Your Journey",
      ctaHref: "/en/book",
    },
    es: {
      h1: "Esto No Es un Tour. Es una Transformación.",
      h2: "Wine & Flow es un día santuario en el corazón de Málaga — diseñado para quienes buscan presencia, belleza y el lujo silencioso de estar completamente aquí.",
      cta: "Comienza Tu Viaje",
      ctaHref: "/es/reservar",
    },
  },

  // ─── VALUE PROPOSITIONS (3 PILLARS) ─────────────────────────────────────────
  // B2: History / Wellness / Sensory — tone must flow History → Wellness → Luxury
  valueProp: {
    en: [
      {
        id: "history",
        label: "History & Authenticity",
        body: "Andalusia has been fermenting stories for over three thousand years. The soil beneath your feet remembers Phoenician traders, Moorish philosophers, and generations of families who pressed grapes by hand at dawn. When you sit with our Bodega partners — masters of their lineage — you are not attending a tasting. You are being initiated into a living tradition that no guidebook can replicate. This is authenticity that cannot be manufactured.",
      },
      {
        id: "wellness",
        label: "Wellness & Restoration",
        body: "True rest is not the absence of movement — it is the discovery of your own rhythm. Our certified yoga sessions are designed not for performance, but for arrival. Arrival in your body, in the breath, in the golden Spanish morning. Whether you have practiced for decades or never unrolled a mat, you will be held in a space of radical welcome. You leave lighter than you arrived. That is the promise.",
      },
      {
        id: "sensory",
        label: "Sensory Experience & Luxury",
        body: "Luxury here is not marble and chandeliers. It is the weight of a cold, perfectly poured glass of Moscatel on a warm afternoon. It is the silence between yoga poses when you realize you have not thought of your inbox in two hours. It is a plate of grilled dorada, caught that morning, dressed in nothing but lemon and sea salt, placed before you as the sun descends over the harbour. This is the luxury of total sensory immersion — curated so precisely that it feels entirely effortless.",
      },
    ],
    es: [
      {
        id: "history",
        label: "Historia y Autenticidad",
        body: "Andalucía lleva más de tres mil años fermentando historias. La tierra bajo tus pies recuerda a los comerciantes fenicios, a los filósofos moros y a generaciones de familias que pisaban uvas a mano al amanecer. Cuando te sientas con nuestros socios de la Bodega — maestros de su linaje — no asistes a una cata. Eres iniciado en una tradición viva que ninguna guía puede replicar. Esta es una autenticidad que no puede fabricarse.",
      },
      {
        id: "wellness",
        label: "Bienestar y Restauración",
        body: "El verdadero descanso no es la ausencia de movimiento — es el descubrimiento de tu propio ritmo. Nuestras sesiones de yoga certificadas no están diseñadas para el rendimiento, sino para la llegada. Llegada a tu cuerpo, a la respiración, a la dorada mañana española. Ya sea que hayas practicado durante décadas o nunca hayas extendido una esterilla, serás acogido en un espacio de bienvenida radical. Sales más ligero de lo que llegaste. Esa es la promesa.",
      },
      {
        id: "sensory",
        label: "Experiencia Sensorial y Lujo",
        body: "El lujo aquí no es mármol ni lámparas de araña. Es el peso de una copa fría de Moscatel perfectamente servida en una tarde cálida. Es el silencio entre las posturas de yoga cuando te das cuenta de que no has pensado en tu bandeja de entrada durante dos horas. Es un plato de dorada a la parrilla, capturada esa mañana, aderezada únicamente con limón y sal marina, colocada ante ti mientras el sol desciende sobre el puerto. Este es el lujo de la inmersión sensorial total — curado con tanta precisión que parece completamente natural.",
      },
    ],
  },

  // ─── PACKAGE TEASER (Homepage card) ─────────────────────────────────────────
  packageTeaser: {
    en: {
      label: "Signature Experience",
      title: "The Sunset Harmony Package",
      description: "A full-day arc of yoga, wine, and coastal cuisine. Málaga, from first light to golden hour.",
      priceFrom: "From €395 per person",
      cta: "Explore the Experience",
      ctaHref: "/en/experiences/sunset-harmony",
    },
    es: {
      label: "Experiencia Estrella",
      title: "El Paquete Sunset Harmony",
      description: "Un día completo de yoga, vino y cocina costera. Málaga, desde la primera luz hasta la hora dorada.",
      priceFrom: "Desde €395 por persona",
      cta: "Explora la Experiencia",
      ctaHref: "/es/experiencias/sunset-harmony",
    },
  },

  // ─── BOOKING CTA BANNER ──────────────────────────────────────────────────────
  bookingBanner: {
    en: {
      headline: "Spaces Are Intentionally Limited.",
      sub: "Ten guests. One day. Málaga.",
      cta: "Reserve My Sanctuary Day",
      ctaHref: "/en/book",
      note: "Personal response within 24 hours.",
    },
    es: {
      headline: "Las Plazas Son Intencionalmente Limitadas.",
      sub: "Diez huéspedes. Un día. Málaga.",
      cta: "Reserva Mi Día Santuario",
      ctaHref: "/es/reservar",
      note: "Respuesta personal en 24 horas.",
    },
  },

};
