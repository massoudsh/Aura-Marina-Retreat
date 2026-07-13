import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteImages } from '@/src/lib/images';
import { journeyContent } from '@/src/pages/journey.content';
import type { Locale } from '@/types';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const meta: Record<Locale, string> = {
    en: 'The Journey | What Your Flowhaven Day Feels Like',
    es: 'El Viaje | Cómo Se Siente Tu Día en Flowhaven',
  };

  return {
    title: meta[locale],
    alternates: { languages: { en: '/en/journey', es: '/es/viaje' } },
  };
}

export default function JourneyPage({ params: { locale } }: { params: { locale: Locale } }) {
  const hero = journeyContent.hero[locale];
  const intro = journeyContent.intro[locale];
  const steps = journeyContent.steps[locale];
  const assurance = journeyContent.assurance[locale];
  const close = journeyContent.close[locale];

  return (
    <>
      <Hero
        label={hero.label}
        h1={hero.title}
        h2={hero.subtitle}
        cta={{ text: hero.cta, href: hero.ctaHref }}
        imageSrc={siteImages.homeHero}
        imageAlt="A couple arriving into the Flowhaven experience"
      />

      <section className="section-padding bg-linen">
        <div className="container-site max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="section-label mb-4">{intro.eyebrow}</p>
            <h2 className="font-display text-display-lg text-soul font-light mb-6 max-w-none">{intro.headline}</h2>
            <p className="font-body text-body-lg text-soul/75 leading-relaxed">{intro.body}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-soul">
        <div className="container-site">
          <div className="max-w-5xl mx-auto space-y-6 lg:space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.time} delay={i * 0.05}>
                <div className="grid lg:grid-cols-[140px_1fr] gap-6 lg:gap-10 border-t border-gold/15 pt-8 lg:pt-10">
                  <div>
                    <p className="font-body text-gold text-sm font-medium tracking-[0.18em] uppercase">{step.time}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl lg:text-4xl text-linen font-light mb-3 max-w-none">{step.title}</h3>
                    <p className="font-body text-gold/80 text-body-lg mb-4 italic">{step.feeling}</p>
                    <p className="font-body text-linen/75 text-body-lg leading-relaxed max-w-3xl">{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-linen">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <p className="section-label mb-6">{locale === 'en' ? 'Emotional Outcome' : 'Resultado Emocional'}</p>
              <h2 className="font-display text-display-md text-soul font-light max-w-none mb-6">{assurance.title}</h2>
              <ul className="space-y-4">
                {assurance.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-gold mt-1">—</span>
                    <span className="font-body text-body-lg text-soul/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="bg-soul p-10 lg:p-12 rounded-sm shadow-deep">
              <p className="section-label mb-4">{locale === 'en' ? 'For the right couple' : 'Para la pareja adecuada'}</p>
              <p className="font-body text-body-lg text-linen/75 leading-relaxed">
                {locale === 'en'
                  ? 'This page is for couples who care less about checking boxes and more about how a day actually feels while they are living it. If that is you, you already understand the difference.'
                  : 'Esta página es para parejas que se preocupan menos por marcar casillas y más por cómo se siente realmente un día mientras lo viven. Si ese es vuestro caso, ya entendéis la diferencia.'}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-soul text-center">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-display-lg text-linen font-light mb-6 max-w-none">{close.title}</h2>
            <p className="font-body text-body-lg text-linen/70 mb-10">{close.body}</p>
            <a href={close.ctaHref} className="btn btn-primary">{close.cta}</a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
