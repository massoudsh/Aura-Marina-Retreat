/**
 * i18n locale validation logic — mirrors what getRequestConfig does
 */

const SUPPORTED_LOCALES = ['en', 'es'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

function isValidLocale(locale: unknown): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

describe('Locale validation', () => {
  it('accepts "en"', () => {
    expect(isValidLocale('en')).toBe(true);
  });

  it('accepts "es"', () => {
    expect(isValidLocale('es')).toBe(true);
  });

  it('rejects "fr"', () => {
    expect(isValidLocale('fr')).toBe(false);
  });

  it('rejects empty string', () => {
    expect(isValidLocale('')).toBe(false);
  });

  it('rejects undefined', () => {
    expect(isValidLocale(undefined)).toBe(false);
  });

  it('rejects null', () => {
    expect(isValidLocale(null)).toBe(false);
  });

  it('rejects uppercase EN', () => {
    expect(isValidLocale('EN')).toBe(false);
  });

  it('has exactly 2 supported locales', () => {
    expect(SUPPORTED_LOCALES.length).toBe(2);
  });
});

describe('Route prefix logic', () => {
  const buildPrefix = (locale: Locale) => `/${locale}`;

  it('builds /en prefix', () => {
    expect(buildPrefix('en')).toBe('/en');
  });

  it('builds /es prefix', () => {
    expect(buildPrefix('es')).toBe('/es');
  });

  it('language toggle produces the other locale', () => {
    const toggle = (locale: Locale): Locale => locale === 'en' ? 'es' : 'en';
    expect(toggle('en')).toBe('es');
    expect(toggle('es')).toBe('en');
  });
});
