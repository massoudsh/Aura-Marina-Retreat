import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BookingBanner from '@/components/sections/BookingBanner';
import { aboutContent } from '@/src/pages/about.content';
import { homeContent } from '@/src/pages/home.content';
import type { Locale } from '@/types';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const titles: Record<Locale, string> = {
    en: 'Our Story | The People Behind Wine & Flow Málaga',
    es: 'Nuestra Historia | Las Personas Detrás de Wine & Flow Málaga',
  };
  return { title: titles[locale] };
}

export default function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  const hero        = aboutContent.hero[locale];
  const origin      = aboutContent.origin[locale];
  const philosophy  = aboutContent.philosophy[locale];
  const team        = aboutContent.team[locale];
  const values      = aboutContent.values[locale];
  const closing     = aboutContent.closing[locale];
  const banner      = homeContent.bookingBanner[locale];

  return (
    <>
      <Hero label={hero.label} h1={hero.h1} h2={hero.sub} imageSrc="/assets/images/about_team_01.jpg" imageAlt="The Wine & Flow team on the Málaga terrace" />

      {/* Origin */}
      <section className="section-padding bg-linen">
        <div className="container-site max-w-3xl mx-auto space-y-6">
          {origin.map((para, i) => (
            <p key={i} className={`font-body text-body-lg text-soul leading-relaxed ${i === 0 ? 'narrative-text' : ''}`}>{para}</p>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-soul">
        <div className="container-site max-w-3xl mx-auto">
          <p className="section-label mb-6">{philosophy.label}</p>
          <h2 className="font-display text-display-lg text-linen font-light mb-8 max-w-none">{philosophy.headline}</h2>
          {philosophy.body.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-lg text-linen/70 leading-relaxed mb-5">{para}</p>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-linen">
        <div className="container-site">
          <p className="section-label mb-4">{team.label}</p>
          <p className="font-body text-body-lg text-soul/70 max-w-2xl mb-16">{team.intro}</p>
          <div className="grid lg:grid-cols-3 gap-10">
            {team.members.map((member) => (
              <div key={member.role} className="border-t border-gold/30 pt-8">
                <p className="section-label mb-2">{member.role}</p>
                <p className="font-body text-caption text-sage mb-5">{member.credential}</p>
                <p className="font-body text-body-lg text-soul leading-relaxed mb-6">{member.bio}</p>
                <p className="font-display text-lg text-soul italic">&ldquo;{member.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-soul">
        <div className="container-site grid lg:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.label}>
              <h3 className="font-display text-xl text-gold font-light mb-3 max-w-none">{v.label}</h3>
              <p className="font-body text-body-lg text-linen/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 bg-linen text-center">
        <div className="container-site">
          <p className="narrative-text mb-10 mx-auto">{closing.quote}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={closing.ctaHref} className="btn btn-primary">{closing.cta}</a>
            <a href={closing.ctaSecondaryHref} className="btn btn-secondary">{closing.ctaSecondary}</a>
          </div>
        </div>
      </section>
    </>
  );
}
