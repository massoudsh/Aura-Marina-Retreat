import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import BookingBanner from '@/components/sections/BookingBanner';
import { experiencesContent } from '@/src/pages/experiences.content';
import { homeContent } from '@/src/pages/home.content';
import { siteImages } from '@/src/lib/images';
import type { Locale } from '@/types';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const titles: Record<Locale, string> = {
    en: 'The Sunset Harmony Package | Full-Day Peaceful Experience in Málaga',
    es: 'El Paquete Sunset Harmony | Experiencia de Paz de Día Completo en Málaga',
  };
  const descs: Record<Locale, string> = {
    en: 'Yoga at dawn, Sommelier wine tasting, and a chef\'s table lunch overlooking the Málaga bay. From €395.',
    es: 'Yoga al amanecer, cata de vino con sommelier y almuerzo de chef con vistas a la bahía de Málaga. Desde €395.',
  };
  return {
    title: titles[locale],
    description: descs[locale],
    alternates: { languages: { en: '/en/experiences', es: '/es/experiencias' } },
  };
}

export default function ExperiencesPage({ params: { locale } }: { params: { locale: Locale } }) {
  const hero      = experiencesContent.hero[locale];
  const narrative = experiencesContent.narrative[locale];
  const included  = experiencesContent.inclusions[locale];
  const pricing   = experiencesContent.pricing[locale];
  const timeline  = experiencesContent.timeline[locale];
  const banner    = homeContent.bookingBanner[locale];

  return (
    <>
      <Hero
        label={hero.label}
        h1={hero.h1}
        h2={hero.sub}
        imageSrc={siteImages.experiencesYoga}
        imageAlt="Morning yoga session on the Málaga terrace"
      />

      {/* Narrative */}
      <section className="section-padding bg-linen">
        <div className="container-site max-w-3xl mx-auto space-y-6">
          {narrative.map((para, i) => (
            <p key={i} className={`font-body text-body-lg text-soul leading-relaxed ${i === 0 ? 'narrative-text' : ''}`}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Day Timeline */}
      <section className="section-padding bg-soul">
        <div className="container-site">
          <p className="section-label mb-12 text-center">
            {locale === 'en' ? 'Your Day' : 'Tu Día'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20">
            {timeline.map((item, i) => (
              <div key={i} className="bg-soul p-8 flex flex-col gap-2">
                <span className="font-body text-gold text-sm font-medium tracking-widest">{item.time}</span>
                <span className="font-display text-linen text-xl font-light">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-linen">
        <div className="container-site grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-6">
              {locale === 'en' ? 'What Is Included' : 'Qué Incluye'}
            </p>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span className="font-body text-body-lg text-soul">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-soul p-12 rounded-sm shadow-deep">
            <p className="section-label mb-4">{pricing.label}</p>
            <p className="font-display text-4xl text-linen font-light mb-2">{pricing.price}</p>
            <p className="font-body text-caption text-sage mb-10">{pricing.note}</p>
            <a href={`/${locale === 'en' ? 'en' : 'es'}/book`} className="btn btn-primary w-full justify-center mb-4">
              {pricing.cta}
            </a>
            <a href={`/${locale === 'en' ? 'en' : 'es'}/book?type=private`} className="btn btn-ghost w-full justify-center">
              {pricing.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <BookingBanner
        headline={banner.headline}
        sub={banner.sub}
        cta={{ text: banner.cta, href: banner.ctaHref }}
        note={banner.note}
        imageSrc={siteImages.experiencesSavasana}
      />
    </>
  );
}
