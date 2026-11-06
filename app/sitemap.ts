import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flowhaven.co';

// Localized paths per route, mirrored from middleware.ts pathnames mapping.
const routes: { en: string; es: string; fa: string; priority: number }[] = [
  { en: '',             es: '',                fa: '',                priority: 1.0 },
  { en: '/journey',     es: '/viaje',           fa: '/سفر',            priority: 0.9 },
  { en: '/experiences', es: '/experiencias',    fa: '/تجربه‌ها',        priority: 0.9 },
  { en: '/dining',      es: '/cocina',          fa: '/غذا',            priority: 0.8 },
  { en: '/winery',      es: '/bodega',          fa: '/شراب‌سازی',       priority: 0.8 },
  { en: '/about',       es: '/nosotros',        fa: '/درباره-ما',      priority: 0.6 },
  { en: '/book',        es: '/reservar',        fa: '/رزرو',           priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ en, es, fa, priority }) => ({
    url: `${siteUrl}/en${en}`,
    lastModified: new Date(),
    priority,
    alternates: {
      languages: {
        en: `${siteUrl}/en${en}`,
        es: `${siteUrl}/es${es}`,
        fa: `${siteUrl}/fa${fa}`,
      },
    },
  }));
}
