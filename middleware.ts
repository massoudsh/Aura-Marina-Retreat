import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es', 'fa'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always',
  pathnames: {
    '/journey':                  { en: '/journey',        es: '/viaje',        fa: '/سفر' },
    '/experiences':              { en: '/experiences',    es: '/experiencias', fa: '/تجربه‌ها' },
    '/experiences/[slug]':       { en: '/experiences/[slug]', es: '/experiencias/[slug]', fa: '/تجربه‌ها/[slug]' },
    '/dining':                   { en: '/dining',         es: '/cocina',       fa: '/غذا' },
    '/winery':                   { en: '/winery',         es: '/bodega',       fa: '/شراب‌سازی' },
    '/winery/workshop':          { en: '/winery/workshop',es: '/bodega/taller', fa: '/شراب‌سازی/کارگاه' },
    '/about':                    { en: '/about',          es: '/nosotros',     fa: '/درباره-ما' },
    '/book':                     { en: '/book',           es: '/reservar',     fa: '/رزرو' },
    '/book/confirmation':        { en: '/book/confirmation', es: '/reservar/confirmacion', fa: '/رزرو/تأیید' },
  },
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
