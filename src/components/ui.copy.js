/**
 * B4 · Global UI Micro-Copy — CTAs, FAQs, Nav, Footer, Forms
 * Task: B4
 * Usage: import { ui } from './ui.copy.js'
 */

export const ui = {

  // ─── CTA COPY BANK (5 variants × emotional stage) ───────────────────────────
  cta: {
    en: {
      discover:    { text: "Explore the Experience",      href: "/en/experiences" },
      desire:      { text: "Reserve My Sanctuary Day",    href: "/en/book" },
      commit:      { text: "Secure My Place",             href: "/en/book" },
      gift:        { text: "Gift This Moment",            href: "/en/book?type=gift" },
      urgent:      { text: "Book Now — Limited Spaces",   href: "/en/book" },
    },
    es: {
      discover:    { text: "Explora la Experiencia",      href: "/es/experiencias" },
      desire:      { text: "Reserva Mi Día Santuario",    href: "/es/reservar" },
      commit:      { text: "Asegura Mi Lugar",            href: "/es/reservar" },
      gift:        { text: "Regala Este Momento",         href: "/es/reservar?tipo=regalo" },
      urgent:      { text: "Reservar Ahora — Plazas Limitadas", href: "/es/reservar" },
    },
  },

  // ─── NAVIGATION ──────────────────────────────────────────────────────────────
  nav: {
    en: {
      experience: "The Experience",
      dining:     "Dining",
      winery:     "The Winery",
      about:      "Our Story",
      book:       "Book Now",
    },
    es: {
      experience: "La Experiencia",
      dining:     "Cocina",
      winery:     "La Bodega",
      about:      "Nuestra Historia",
      book:       "Reservar",
    },
  },

  // ─── FAQ ─────────────────────────────────────────────────────────────────────
  faq: {
    en: [
      {
        question: "What is the dress code?",
        answer: "There is no formal dress code — only an invitation to dress for comfort and ease. We recommend layers you can move in freely for the yoga sessions, and something you feel graceful in for the dining experience. Andalusia's light has a way of making everything look beautiful; we simply suggest you dress in a way that lets you forget about what you're wearing and focus entirely on where you are.",
      },
      {
        question: "Is this suitable for beginners — both in yoga and in wine?",
        answer: "Absolutely. Wine & Flow is designed from the ground up for the curious, not the expert. Our yoga sessions are entirely accessible — no prior experience is required, only willingness. Our sommelier is equally gifted at making the world of wine feel welcoming rather than intimidating. Many of our guests arrive knowing very little and leave feeling deeply connected to both practices. The only qualification for being here is the desire to be present.",
      },
      {
        question: "What if I have a dietary allergy or restriction?",
        answer: "Your wellbeing is our entire purpose, and dietary care is a fundamental part of that. We ask all guests to share any allergies, intolerances, or preferences at the time of booking. Our chef designs around your needs, not in spite of them. We can accommodate most requirements without compromising the quality or intention of the meal. If you are unsure, please contact us directly and we will have a personal conversation before you arrive.",
      },
    ],
    es: [
      {
        question: "¿Cuál es el código de vestimenta?",
        answer: "No existe un código de vestimenta formal — solo una invitación a vestir para la comodidad y la naturalidad. Recomendamos capas con las que puedas moverte libremente para las sesiones de yoga y algo con lo que te sientas elegante para la experiencia gastronómica. La luz de Andalucía tiene el don de embellecer todo; simplemente sugerimos que te vistas de manera que puedas olvidar lo que llevas puesto y centrarte por completo en dónde estás.",
      },
      {
        question: "¿Es adecuado para principiantes — tanto en yoga como en vino?",
        answer: "Absolutamente. Wine & Flow está diseñado desde cero para el curioso, no para el experto. Nuestras sesiones de yoga son completamente accesibles — no se requiere experiencia previa, solo disposición. Nuestro sommelier tiene el mismo don para hacer que el mundo del vino se sienta acogedor en lugar de intimidante. Muchos de nuestros huéspedes llegan sabiendo muy poco y se van sintiéndose profundamente conectados con ambas prácticas. El único requisito para estar aquí es el deseo de estar presente.",
      },
      {
        question: "¿Qué pasa si tengo una alergia o restricción dietética?",
        answer: "Tu bienestar es nuestro propósito completo, y el cuidado dietético es una parte fundamental de ello. Pedimos a todos los huéspedes que compartan cualquier alergia, intolerancia o preferencia en el momento de la reserva. Nuestro chef diseña en torno a tus necesidades, no a pesar de ellas. Podemos acomodar la mayoría de los requisitos sin comprometer la calidad ni la intención de la comida. Si no estás seguro, contáctanos directamente y tendremos una conversación personal antes de tu llegada.",
      },
    ],
  },

  // ─── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    en: {
      tagline:     "Where the vine meets the soul — Málaga, Andalusia",
      brand:       "Wine & Flow is a curated full-day sanctuary experience in Málaga, combining Sommelier-led wine education, restorative yoga, and locally sourced coastal cuisine. Intimate by design. Transformative by nature.",
      socialProof: "Rated 5.0 · Trusted by guests from 24 countries",
      copyright:   "© 2026 Wine & Flow. All rights reserved.",
      links: {
        privacy:   "Privacy Policy",
        terms:     "Terms & Conditions",
        cookies:   "Cookie Preferences",
      },
      columns: {
        experiences: ["The Experience", "Dining", "The Winery", "Retreats"],
        company:     ["About", "Press", "Gift Vouchers", "Sustainability"],
        contact:     ["Contact", "WhatsApp", "Privacy Policy", "Terms"],
      },
    },
    es: {
      tagline:     "Donde la vid se encuentra con el alma — Málaga, Andalucía",
      brand:       "Wine & Flow es una experiencia santuario de día completo en Málaga, que combina educación vinícola dirigida por sommelier, yoga restaurador y cocina costera de producto local. Íntimo por diseño. Transformador por naturaleza.",
      socialProof: "Valoración 5,0 · Huéspedes de confianza de 24 países",
      copyright:   "© 2026 Wine & Flow. Todos los derechos reservados.",
      links: {
        privacy:   "Política de Privacidad",
        terms:     "Términos y Condiciones",
        cookies:   "Preferencias de Cookies",
      },
      columns: {
        experiences: ["La Experiencia", "Cocina", "La Bodega", "Retiros"],
        company:     ["Nosotros", "Prensa", "Vouchers de Regalo", "Sostenibilidad"],
        contact:     ["Contacto", "WhatsApp", "Política de Privacidad", "Términos"],
      },
    },
  },

  // ─── FORM MICRO-COPY ─────────────────────────────────────────────────────────
  form: {
    en: {
      title:       "Make Your Enquiry",
      submit:      "Send My Enquiry",
      trustLine:   "We read every message personally. You will hear from us within 24 hours.",
      fields: {
        name:      { label: "Full Name",          placeholder: "Your name" },
        email:     { label: "Email Address",       placeholder: "your@email.com" },
        phone:     { label: "Phone (optional)",    placeholder: "+1 / +44 / +34..." },
        date:      { label: "Preferred Date",      placeholder: "Select a date" },
        experience:{ label: "Experience",          options: ["Sunset Harmony Package", "Wine Workshop", "Private Group", "I'm not sure yet"] },
        groupSize: { label: "Group Size",          options: ["Just me", "2 people", "3–5", "6–10"] },
        dietary:   { label: "Dietary Notes",       placeholder: "Allergies, intolerances, or preferences" },
        message:   { label: "Your Message",        placeholder: "Tell us anything else — what brings you here, what you're hoping for..." },
      },
      confirmation: {
        heading: "We've Received Your Enquiry",
        body:    "Thank you for reaching out. Someone from the Wine & Flow team will be in touch within 24 hours to confirm your space and answer any questions.",
      },
    },
    es: {
      title:       "Realiza Tu Consulta",
      submit:      "Enviar Mi Consulta",
      trustLine:   "Leemos cada mensaje personalmente. Tendrás respuesta nuestra en 24 horas.",
      fields: {
        name:      { label: "Nombre Completo",     placeholder: "Tu nombre" },
        email:     { label: "Correo Electrónico",  placeholder: "tu@correo.com" },
        phone:     { label: "Teléfono (opcional)", placeholder: "+1 / +44 / +34..." },
        date:      { label: "Fecha Preferida",     placeholder: "Selecciona una fecha" },
        experience:{ label: "Experiencia",         options: ["Paquete Sunset Harmony", "Taller de Vino", "Grupo Privado", "Aún no lo sé"] },
        groupSize: { label: "Tamaño del Grupo",    options: ["Solo yo", "2 personas", "3–5", "6–10"] },
        dietary:   { label: "Notas Dietéticas",    placeholder: "Alergias, intolerancias o preferencias" },
        message:   { label: "Tu Mensaje",          placeholder: "Cuéntanos cualquier cosa — qué te trae aquí, qué esperas..." },
      },
      confirmation: {
        heading: "Hemos Recibido Tu Consulta",
        body:    "Gracias por contactarnos. Alguien del equipo de Wine & Flow se pondrá en contacto contigo en 24 horas para confirmar tu plaza y responder cualquier pregunta.",
      },
    },
  },

  // ─── LANGUAGE TOGGLE ─────────────────────────────────────────────────────────
  langToggle: {
    en: { active: "EN", inactive: "ES", ariaLabel: "Switch to Spanish" },
    es: { active: "ES", inactive: "EN", ariaLabel: "Cambiar a inglés" },
  },

  // ─── ACCESSIBILITY LABELS ─────────────────────────────────────────────────
  accessibility: {
    en: {
      menuOpen:  "Open navigation menu",
      menuClose: "Close navigation menu",
    },
    es: {
      menuOpen:  "Abrir menú de navegación",
      menuClose: "Cerrar menú de navegación",
    },
  },

  // ─── 404 PAGE ────────────────────────────────────────────────────────────────
  notFound: {
    en: {
      heading: "You've Wandered Somewhere Beautiful.",
      sub:     "But this page doesn't exist. Let us guide you back.",
      cta:     "Return to the Experience",
      ctaHref: "/en/",
    },
    es: {
      heading: "Te Has Perdido en Algún Lugar Hermoso.",
      sub:     "Pero esta página no existe. Déjanos guiarte de vuelta.",
      cta:     "Volver a la Experiencia",
      ctaHref: "/es/",
    },
  },

};
