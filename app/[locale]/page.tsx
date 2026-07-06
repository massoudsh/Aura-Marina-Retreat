import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ValueProps from '@/components/sections/ValueProps';
import PackageTeaser from '@/components/sections/PackageTeaser';
import BookingBanner from '@/components/sections/BookingBanner';
import Testimonials from '@/components/sections/Testimonials';
import { homeContent } from '@/src/pages/home.content';
import type { Locale } from '@/types';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const content = homeContent.hero[locale];
  return {
    title: 'Wine & Flow Málaga | Luxury Wine, Yoga & Coastal Cuisine',
    description: content.h2,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', es: '/es' },
    },
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  const hero       = homeContent.hero[locale];
  const pillars    = homeContent.valueProp[locale];
  const pkg        = homeContent.packageTeaser[locale];
  const banner     = homeContent.bookingBanner[locale];

  return (
    <>
      <Hero
        label="Wine & Flow"
        h1={hero.h1}
        h2={hero.h2}
        cta={{ text: hero.cta, href: hero.ctaHref }}
        imageSrc="/assets/images/home_hero_01.jpg"
        imageAlt="Golden hour on the Málaga terrace — Wine & Flow experience"
        fullscreen
      />

      <ValueProps pillars={pillars} locale={locale} />

      <PackageTeaser
        label={pkg.label}
        title={pkg.title}
        description={pkg.description}
        priceFrom={pkg.priceFrom}
        cta={{ text: pkg.cta, href: pkg.ctaHref }}
        imageSrc="/assets/images/experiences_yoga_01.jpg"
        locale={locale}
      />

      <Testimonials locale={locale} />

      <BookingBanner
        headline={banner.headline}
        sub={banner.sub}
        cta={{ text: banner.cta, href: banner.ctaHref }}
        note={banner.note}
        imageSrc="/assets/images/home_coast_01.jpg"
      />
    </>
  );
}
