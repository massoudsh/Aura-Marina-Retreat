/**
 * B3 · Booking/Contact Page — Structured Content Object
 * Task: B3 | Source: pages/booking-contact.md + src/components/ui.copy.js (form)
 * Usage: import { bookingContent } from './booking.content.js'
 *
 * NOTE: Form field strings are also in ui.copy.js (form object) and en/es.json.
 * This file provides PAGE-LEVEL layout copy. Use ui.copy.js for component-level strings.
 */

export const bookingContent = {

  // ─── PAGE HERO ───────────────────────────────────────────────────────────────
  hero: {
    en: {
      label: "Reserve Your Day",
      h1: "Your Day Begins Here",
      sub: "Spaces are intentionally limited. Every enquiry receives a personal response within 24 hours.",
    },
    es: {
      label: "Reserva Tu Día",
      h1: "Tu Día Empieza Aquí",
      sub: "Las plazas son intencionalmente limitadas. Cada consulta recibe una respuesta personal en 24 horas.",
    },
  },

  // ─── PRE-BOOKING NOTE ────────────────────────────────────────────────────────
  prebookingNote: {
    en: {
      label: "Before You Book — A Note from Us",
      paragraphs: [
        "Wine & Flow is a small, deeply intentional experience. We cap every session at ten guests — not as a marketing decision, but because anything larger would compromise the quality of what we offer.",
        "This means dates fill quickly, and we do not hold provisional spaces without confirmation. If a date matters to you, we recommend enquiring early.",
        "We also take a moment with every booking to understand who is coming. If you have dietary needs, physical considerations, or simply want to tell us what you are hoping to carry home from this day — please include that in your message. It helps us take better care of you.",
      ],
    },
    es: {
      label: "Antes de Reservar — Una Nota de Nuestra Parte",
      paragraphs: [
        "Wine & Flow es una experiencia pequeña y profundamente intencional. Limitamos cada sesión a diez huéspedes — no como una decisión de marketing, sino porque cualquier número mayor comprometería la calidad de lo que ofrecemos.",
        "Esto significa que las fechas se llenan rápidamente, y no reservamos plazas provisionales sin confirmación. Si una fecha es importante para ti, recomendamos consultar con antelación.",
        "También aprovechamos cada reserva para entender quién viene. Si tienes necesidades dietéticas, consideraciones físicas, o simplemente quieres contarnos qué esperas llevarte de este día — inclúyelo en tu mensaje. Nos ayuda a cuidarte mejor.",
      ],
    },
  },

  // ─── CONTACT BLOCK ───────────────────────────────────────────────────────────
  contact: {
    en: {
      label: "Prefer a Direct Conversation?",
      body: "Some things are better said than typed. If you would like to speak with us before booking — or if you are planning a private group or special occasion — we welcome a call or WhatsApp message.",
      whatsapp: "+34 612 345 678",
      email: "hello@wineandflow.com",
      hours: "Monday to Saturday, 9:00–18:00 CET",
    },
    es: {
      label: "¿Prefieres una Conversación Directa?",
      body: "Algunas cosas se dicen mejor de viva voz. Si deseas hablar con nosotros antes de reservar — o si planeas un grupo privado o una ocasión especial — bienvenida una llamada o mensaje de WhatsApp.",
      whatsapp: "+34 612 345 678",
      email: "hola@wineandflow.com",
      hours: "Lunes a sábado, 9:00–18:00 CET",
    },
  },

  // ─── GIFT VOUCHER CALLOUT ────────────────────────────────────────────────────
  giftVoucher: {
    en: {
      label: "Give the Gift of Presence",
      body: "Wine & Flow gift vouchers are available for the full Sunset Harmony Package or the Wine Workshop. Each voucher is printed on premium cotton paper, hand-signed, and shipped in a branded envelope.",
      note: "Perfect for birthdays, anniversaries, corporate gifting, or simply because someone deserves a day that matters.",
      cta: "Enquire About Gift Vouchers",
      ctaHref: "/en/book?type=gift",
    },
    es: {
      label: "Regala la Presencia",
      body: "Los vouchers de regalo de Wine & Flow están disponibles para el Paquete Sunset Harmony completo o el Taller de Vino. Cada voucher se imprime en papel de algodón premium, se firma a mano y se envía en un sobre con la marca.",
      note: "Perfecto para cumpleaños, aniversarios, regalos corporativos, o simplemente porque alguien merece un día que importe.",
      cta: "Consultar Vouchers de Regalo",
      ctaHref: "/es/reservar?tipo=regalo",
    },
  },

  // ─── POST-BOOKING CONFIRMATION PAGE (/book/confirmation) ────────────────────
  confirmation: {
    en: {
      heading: "Your Day is Reserved.",
      sub: "A confirmation has been sent to your email. We will be in touch within 24 hours with your full day briefing.",
      addToCalendar: "Add to Calendar",
      share: "Share This",
      exploreLinks: [
        { label: "Explore the Experience", href: "/en/experiences" },
        { label: "Read the Winery Story", href: "/en/winery" },
      ],
    },
    es: {
      heading: "Tu Día Está Reservado.",
      sub: "Se ha enviado una confirmación a tu correo. Nos pondremos en contacto contigo en 24 horas con toda la información del día.",
      addToCalendar: "Añadir al Calendario",
      share: "Compartir",
      exploreLinks: [
        { label: "Conoce la Experiencia", href: "/es/experiencias" },
        { label: "Lee la Historia de la Bodega", href: "/es/bodega" },
      ],
    },
  },

  // ─── TESTIMONIALS (booking page trust signals) ───────────────────────────────
  testimonials: {
    en: [
      {
        quote: "The booking process itself felt different — like writing to a person, not filling out a form. They remembered what I said about my dietary needs. That detail alone told me everything.",
        author: "S.L.",
        location: "New York",
        year: 2025,
      },
      {
        quote: "I was nervous to spend this kind of money on a single day. The note they sent before arrival completely removed that feeling. By the time I got there, I already trusted them.",
        author: "Max S.",
        location: "Barcelona",
        year: 2026,
        services: "Restaurant, Spa & Wellness Treatments",
      },
    ],
    es: [
      {
        quote: "El propio proceso de reserva se sintió diferente — como escribir a una persona, no rellenar un formulario. Recordaron lo que dije sobre mis necesidades dietéticas. Ese detalle solo me lo dijo todo.",
        author: "S.L.",
        location: "Nueva York",
        year: 2025,
      },
      {
        quote: "Me daba miedo gastar este dinero en un solo día. La nota que enviaron antes de la llegada eliminó por completo ese sentimiento. Para cuando llegué, ya confiaba en ellos.",
        author: "Max S.",
        location: "Barcelona",
        year: 2026,
        services: "Restaurante, Spa y Tratamientos de Bienestar",
      },
    ],
  },

};
