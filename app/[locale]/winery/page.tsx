import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import { wineryContent } from '@/src/pages/winery.content';
import { siteImages } from '@/src/lib/images';
import type { Locale } from '@/types';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const titles: Record<Locale, string> = {
    en: 'Bodega Wine Workshop Málaga | Learn Andalusian Wine',
    es: 'Taller de Vino en Bodega Málaga | Aprende Vino Andaluz',
  };
  return { title: titles[locale] };
}

export default function WineryPage({ params: { locale } }: { params: { locale: Locale } }) {
  const hero       = wineryContent.hero[locale];
  const intro      = wineryContent.intro[locale];
  const movements  = wineryContent.movements[locale];
  const details    = wineryContent.details[locale];
  const testimonials = wineryContent.testimonials[locale];

  return (
    <>
      <Hero label={hero.label} h1={hero.h1} h2={hero.sub} cta={{ text: hero.cta, href: hero.ctaHref }} imageSrc={siteImages.wineryCellar} imageAlt="Wine cellar at our partner Bodega in Málaga" />

      {/* Intro */}
      <section className="section-padding bg-linen">
        <div className="container-site grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-6">{intro.label}</p>
            {intro.body.split('\n\n').map((para, i) => (
              <p key={i} className={`font-body text-body-lg text-soul leading-relaxed mb-5 ${i === 0 ? 'narrative-text' : ''}`}>{para}</p>
            ))}
          </div>
          <div className="bg-soul p-12">
            <p className="font-display text-3xl text-linen font-light italic leading-snug">
              &ldquo;The barrel room smells like time. Like patience. Like something becoming what it was always meant to be.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 3 Movements */}
      <section className="section-padding bg-soul">
        <div className="container-site">
          <p className="section-label mb-4">{movements.label}</p>
          <p className="font-body text-body-lg text-linen/60 max-w-xl mb-16">{movements.preamble}</p>
          <div className="space-y-px">
            {movements.items.map((item) => (
              <div key={item.number} className="grid lg:grid-cols-[80px_1fr] gap-8 bg-soul border border-linen/10 p-10">
                <span className="font-display text-5xl text-gold font-light leading-none">{item.number}</span>
                <div>
                  <h3 className="font-display text-xl text-linen font-light mb-3 max-w-none">{item.title}</h3>
                  <p className="font-body text-body-lg text-linen/70 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme details + pricing */}
      <section className="section-padding bg-linen">
        <div className="container-site grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label mb-8">{details.label}</p>
            <dl className="space-y-5">
              {details.items.map((item) => (
                <div key={item.key} className="border-b border-soul/10 pb-5">
                  <dt className="font-body text-caption font-medium uppercase tracking-widest text-sage mb-1">{item.key}</dt>
                  <dd className="font-body text-body-lg text-soul">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-soul p-12 rounded-sm self-start">
            <p className="section-label mb-4">{details.pricing.label}</p>
            <p className="font-display text-4xl text-linen font-light mb-2">{details.pricing.price}</p>
            <p className="font-body text-caption text-sage mb-10">{details.pricing.privateNote}</p>
            <a href={hero.ctaHref} className="btn btn-primary w-full justify-center mb-4">{details.cta}</a>
            <a href={`/${locale}/book?type=private`} className="btn btn-ghost w-full justify-center text-xs">{details.ctaSecondary}</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-linen border-t border-soul/10">
        <div className="container-site grid lg:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="flex flex-col gap-5">
              <p className="font-display text-xl text-soul font-light italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                <cite className="font-body text-caption text-sage not-italic">{t.author} · {t.location}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
