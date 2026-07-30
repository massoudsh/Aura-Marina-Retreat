import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flowhaven.co';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/en/book/confirmation', '/es/reservar/confirmacion'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
