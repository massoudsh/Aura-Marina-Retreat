import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always',
  pathnames: {
    '/experiences':              { en: '/experiences',    es: '/experiencias' },
    '/experiences/[slug]':       { en: '/experiences/[slug]', es: '/experiencias/[slug]' },
    '/dining':                   { en: '/dining',         es: '/cocina' },
    '/winery':                   { en: '/winery',         es: '/bodega' },
    '/winery/workshop':          { en: '/winery/workshop',es: '/bodega/taller' },
    '/about':                    { en: '/about',          es: '/nosotros' },
    '/book':                     { en: '/book',           es: '/reservar' },
    '/book/confirmation':        { en: '/book/confirmation', es: '/reservar/confirmacion' },
  },
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
