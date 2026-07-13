import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingBanner from '@/components/sections/BookingBanner';
import { diningContent } from '@/src/pages/dining.content';
import { homeContent } from '@/src/pages/home.content';
import { siteImages } from '@/src/lib/images';
import type { Locale } from '@/types';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const titles: Record<Locale, string> = {
    en: 'The Kitchen | Locally Sourced Coastal Cuisine in Málaga',
    es: 'La Cocina | Cocina Costera de Producto Local en Málaga',
  };
  return { title: titles[locale], alternates: { languages: { en: '/en/dining', es: '/es/cocina' } } };
}

export default function DiningPage({ params: { locale } }: { params: { locale: Locale } }) {
  const hero   = diningContent.hero[locale];
  const story  = diningContent.originStory[locale];
  const menu   = diningContent.menuPreview[locale];
  const map    = diningContent.sourcingMap[locale];
  const quote  = diningContent.chefQuote[locale];
  const cta    = diningContent.cta[locale];
  const banner = homeContent.bookingBanner[locale];

  return (
    <>
      <Hero label={hero.label} h1={hero.h1} h2={hero.sub} imageSrc={siteImages.diningTable} imageAlt="Chef's table at Flowhaven dining" />

      {/* Origin story */}
      <section className="section-padding bg-linen">
        <div className="container-site max-w-3xl mx-auto space-y-6">
          {story.map((para, i) => (
            <p key={i} className={`font-body text-body-lg text-soul leading-relaxed ${i === 0 ? 'narrative-text' : ''} ${i === story.length - 1 ? 'font-display text-xl italic' : ''}`}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Menu preview */}
      <section className="section-padding bg-soul">
        <div className="container-site">
          <div className="flex items-baseline justify-between mb-12">
            <p className="section-label">{menu.label}</p>
            <p className="font-body text-caption text-sage italic">{menu.note}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-gold/10">
            {menu.dishes.map((dish) => (
              <div key={dish.name} className="bg-soul p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl text-linen font-light max-w-none">{dish.name}</h3>
                  <div className="flex gap-1 shrink-0 mt-1">
                    {dish.dietary.map((d) => (
                      <span key={d} className="font-body text-caption text-gold/70 uppercase">{d}</span>
                    ))}
                  </div>
                </div>
                <p className="font-body text-caption text-sage leading-relaxed">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="section-padding bg-linen">
        <div className="container-site">
          <p className="section-label mb-10">{map.label}</p>
          <ul className="space-y-4 max-w-xl">
            {map.sources.map((src) => (
              <li key={src.id} className="flex items-start gap-4">
                <span className="text-gold mt-1">—</span>
                <span className="font-body text-body-lg text-soul">{src.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Chef quote */}
      <section className="py-24 bg-soul">
        <div className="container-site text-center">
          <blockquote className="font-display text-3xl lg:text-4xl text-linen font-light italic max-w-2xl mx-auto mb-6">
            &ldquo;{quote.quote}&rdquo;
          </blockquote>
          <cite className="font-body text-caption text-sage not-italic">{quote.attribution}</cite>
        </div>
      </section>

      <BookingBanner headline={banner.headline} sub={banner.sub} cta={{ text: cta.text, href: cta.href }} note={banner.note} imageSrc={siteImages.diningChef} />
    </>
  );
}
