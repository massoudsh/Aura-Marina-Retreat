import type { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteImages } from '@/src/lib/images';
import { journeyContent } from '@/src/pages/journey.content';
import type { Locale } from '@/types';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const meta: Record<Locale, string> = {
    en: 'The Journey | What Your Heaven Flow Day Feels Like',
    es: 'El Viaje | Cómo Se Siente Tu Día en Heaven Flow',
  };
  return {
    title: meta[locale],
    alternates: { languages: { en: '/en/journey', es: '/es/viaje' } },
  };
}

const stepImages = [
  siteImages.homeCoast,
  siteImages.experiencesYoga,
  siteImages.wineryCellar,
  siteImages.diningTable,
  siteImages.experiencesSavasana,
  siteImages.aboutTeam,
];

export default function JourneyPage({ params: { locale } }: { params: { locale: Locale } }) {
  const hero = journeyContent.hero[locale];
  const intro = journeyContent.intro[locale];
  const steps = journeyContent.steps[locale];
  const assurance = journeyContent.assurance[locale];
  const close = journeyContent.close[locale];

  return (
    <>
      {/* ── HERO — full screen ───────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-end min-h-screen overflow-hidden">
        <Image
          src={siteImages.journeyCouple}
          alt="A couple watching the golden horizon together"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-soul/10 via-soul/25 to-soul/85" />
        <div className="relative container-site pb-24 lg:pb-40 pt-48 w-full">
          <FadeIn y={12}>
            <p className="section-label text-gold mb-5">{hero.label}</p>
          </FadeIn>
          <FadeIn y={24} delay={0.08}>
            <h1 className="font-display text-[3.2rem] sm:text-[4.5rem] lg:text-[6rem] text-linen font-light leading-[1.05] mb-8 max-w-[16ch] text-balance">
              {hero.title}
            </h1>
          </FadeIn>
          <FadeIn y={18} delay={0.18}>
            <p className="font-body text-body-lg text-linen/80 max-w-[56ch] mb-12 leading-relaxed">
              {hero.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.28}>
            <a href={hero.ctaHref} className="btn btn-primary">{hero.cta}</a>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="relative pb-8 container-site flex items-center gap-3 opacity-50">
          <div className="w-px h-10 bg-gold" />
          <p className="font-body text-xs text-gold uppercase tracking-[0.2em]">
            {locale === 'en' ? 'Scroll to feel the day' : 'Desliza para sentir el día'}
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE — big italic opener ───────────────────────────────── */}
      <section className="py-28 lg:py-40 bg-linen">
        <div className="container-site max-w-4xl mx-auto text-center">
          <FadeIn y={30}>
            <p className="section-label mb-8">{intro.eyebrow}</p>
            <blockquote className="font-display text-[1.9rem] sm:text-[2.5rem] lg:text-[3.25rem] text-soul font-light italic leading-[1.3] text-balance max-w-none">
              &ldquo;{intro.headline}&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="mt-10 w-12 h-px bg-gold mx-auto" />
            <p className="font-body text-body-lg text-soul/65 mt-8 max-w-[62ch] mx-auto leading-relaxed">
              {intro.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STEPS — each step is its own full moment ─────────────────────── */}
      {steps.map((step, i) => {
        const isEven = i % 2 === 0;
        const img = stepImages[i];

        return (
          <section
            key={step.time}
            className={`${isEven ? 'bg-soul' : 'bg-[#111A14]'} overflow-hidden`}
          >
            <div className={`container-site grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

              {/* Text side */}
              <div className={`py-24 lg:py-36 flex flex-col justify-center ${isEven ? 'lg:pr-20' : 'lg:order-2 lg:pl-20'}`}>
                <FadeIn y={20}>
                  <span className="font-display text-[6rem] lg:text-[9rem] leading-none text-gold/10 font-light select-none block mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-xs text-gold uppercase tracking-[0.22em] mb-5">{step.time}</p>
                  <h2 className="font-display text-[2.2rem] lg:text-[3rem] text-linen font-light max-w-none mb-4 leading-tight">
                    {step.title}
                  </h2>
                  <p className="font-display text-xl text-gold/85 italic mb-6 max-w-none font-light">{step.feeling}</p>
                  <p className="font-body text-body-lg text-linen/65 leading-relaxed max-w-[50ch]">{step.body}</p>
                </FadeIn>
              </div>

              {/* Image side */}
              <div className={`relative min-h-[360px] lg:min-h-[560px] ${isEven ? '' : 'lg:order-1'}`}>
                <Image
                  src={img}
                  alt={step.title}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-soul/35" />
              </div>
            </div>

            {/* Step divider — subtle gold line */}
            {i < steps.length - 1 && (
              <div className="container-site">
                <div className="h-px bg-gold/10" />
              </div>
            )}
          </section>
        );
      })}

      {/* ── FULL-BLEED HORIZON BREAK ─────────────────────────────────────── */}
      <section className="relative h-[50vh] lg:h-[65vh] overflow-hidden">
        <Image
          src={siteImages.journeyHorizon}
          alt="The Málaga coastline at golden hour"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn y={16}>
            <p className="font-display text-[2rem] sm:text-[2.8rem] lg:text-[4rem] text-linen font-light italic text-center max-w-[20ch] text-balance leading-snug px-6">
              {locale === 'en'
                ? 'The light here does something to people.'
                : 'La luz de aquí hace algo a las personas.'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── ASSURANCE — manifesto style ──────────────────────────────────── */}
      <section className="section-padding bg-linen">
        <div className="container-site max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

            <FadeIn y={24}>
              <div>
                <p className="section-label mb-8">{locale === 'en' ? 'What you carry home' : 'Lo que te llevas'}</p>
                <h2 className="font-display text-[2.2rem] lg:text-[3.2rem] text-soul font-light max-w-none leading-[1.25] mb-0">
                  {assurance.title}
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} y={24}>
              <ul className="space-y-8 pt-2">
                {assurance.bullets.map((item, idx) => (
                  <li key={item} className="flex items-start gap-5 border-t border-soul/10 pt-7">
                    <span className="font-display text-2xl text-gold font-light leading-none mt-1 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-body text-body-lg text-soul/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── FOR THE RIGHT COUPLE — dark editorial card ───────────────────── */}
      <section className="bg-soul py-20 lg:py-28">
        <div className="container-site max-w-3xl mx-auto text-center">
          <FadeIn y={20}>
            <p className="section-label mb-8">
              {locale === 'en' ? 'Who this is for' : 'Para quién es esto'}
            </p>
            <p className="font-display text-[1.75rem] sm:text-[2.25rem] lg:text-[2.9rem] text-linen font-light italic leading-[1.35] text-balance max-w-none">
              {locale === 'en'
                ? '"This is for the couple who cares less about checking boxes and more about how a day actually feels while they are living it."'
                : '"Esto es para la pareja que se preocupa menos por marcar casillas y más por cómo se siente un día mientras lo está viviendo."'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CLOSING CTA — full dramatic section ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0D1208] py-36 lg:py-52 text-center">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-8">
          <Image
            src={siteImages.journeyCouple}
            alt=""
            fill
            className="object-cover object-center scale-110"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-soul/90" />

        <div className="relative container-site max-w-3xl mx-auto">
          <FadeIn y={28}>
            <p className="section-label mb-8 text-gold">
              {locale === 'en' ? 'Begin here' : 'Empieza aquí'}
            </p>
            <h2 className="font-display text-[2.4rem] sm:text-[3.2rem] lg:text-[4.5rem] text-linen font-light leading-[1.15] mb-8 max-w-none text-balance">
              {close.title}
            </h2>
            <p className="font-body text-body-lg text-linen/60 mb-14 max-w-[44ch] mx-auto leading-relaxed">
              {close.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={close.ctaHref} className="btn btn-primary text-sm px-10 py-4">{close.cta}</a>
              <a
                href={locale === 'en' ? '/en/experiences' : '/es/experiencias'}
                className="btn btn-ghost text-sm px-10 py-4"
              >
                {locale === 'en' ? 'Explore Experiences' : 'Ver Experiencias'}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
