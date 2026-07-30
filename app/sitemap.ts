import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flowhaven.co';

// Localized paths per route, mirrored from middleware.ts pathnames mapping.
const routes: { en: string; es: string; priority: number }[] = [
  { en: '',             es: '',                priority: 1.0 },
  { en: '/journey',     es: '/viaje',           priority: 0.9 },
  { en: '/experiences', es: '/experiencias',    priority: 0.9 },
  { en: '/dining',      es: '/cocina',          priority: 0.8 },
  { en: '/winery',      es: '/bodega',          priority: 0.8 },
  { en: '/about',       es: '/nosotros',        priority: 0.6 },
  { en: '/book',        es: '/reservar',        priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ en, es, priority }) => ({
    url: `${siteUrl}/en${en}`,
    lastModified: new Date(),
    priority,
    alternates: {
      languages: {
        en: `${siteUrl}/en${en}`,
        es: `${siteUrl}/es${es}`,
      },
    },
  }));
}
