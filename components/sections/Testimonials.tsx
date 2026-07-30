import type { Locale } from '@/types';

const TESTIMONIALS = {
  en: [
    {
      quote: "I have attended wine tastings in Bordeaux, in Tuscany, in the Douro Valley. What happened in that cellar in Málaga was different. It felt less like a lesson and more like a confession.",
      author: "M.T.", location: "London",
    },
    {
      quote: "Heaven Flow is the most intentional sense of peace I have experienced in years. Every detail — from the handwritten welcome card to the final tisane — felt considered. Not performative. Real.",
      author: "S.L.", location: "New York",
    },
    {
      quote: "I came for the wine. I left understanding something about silence that I didn't know I was looking for.",
      author: "Max S.", location: "Barcelona",
    },
  ],
  es: [
    {
      quote: "He asistido a catas de vino en Burdeos, en la Toscana, en el Valle del Duero. Lo que ocurrió en aquella bodega de Málaga fue diferente. Se sintió menos como una lección y más como una confesión.",
      author: "M.T.", location: "Londres",
    },
    {
      quote: "Heaven Flow es la sensación de paz más intencional que he experimentado en años. Cada detalle — desde la tarjeta de bienvenida escrita a mano hasta la tisana final — parecía pensado. No performativo. Real.",
      author: "S.L.", location: "Nueva York",
    },
    {
      quote: "Vine por el vino. Me fui entendiendo algo sobre el silencio que no sabía que estaba buscando.",
      author: "Max S.", location: "Barcelona",
    },
  ],
};

export default function Testimonials({ locale }: { locale: Locale }) {
  const items = TESTIMONIALS[locale];

  return (
    <section className="section-padding bg-linen">
      <div className="container-site">
        <p className="section-label mb-16 text-center">
          {locale === 'en' ? 'Guest Voices' : 'Voces de Huéspedes'}
        </p>
        <div className="grid lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <blockquote key={i} className="flex flex-col gap-6">
              <p className="font-display text-xl text-soul font-light italic leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                <cite className="font-body text-caption text-sage not-italic">
                  {item.author} · {item.location}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
