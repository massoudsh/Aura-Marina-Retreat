import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Locale } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Pick a localized string from an en/es/fa record. */
export function t(locale: Locale, strings: Record<Locale, string>): string {
  return strings[locale];
}

const INTL_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  es: 'es-ES',
  fa: 'fa-IR',
};

export function intlLocale(locale: Locale): string {
  return INTL_LOCALE[locale];
}

export function formatPrice(amount: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Indicative EUR→IRR rate. Override with NEXT_PUBLIC_EUR_TOMAN_RATE when the
 * published rate changes; the UI always labels the conversion as approximate.
 */
export const EUR_TO_TOMAN_RATE = Number(process.env.NEXT_PUBLIC_EUR_TOMAN_RATE ?? 0);

export function formatToman(amountEur: number): string | null {
  if (!Number.isFinite(EUR_TO_TOMAN_RATE) || EUR_TO_TOMAN_RATE <= 0) return null;
  const toman = Math.round((amountEur * EUR_TO_TOMAN_RATE) / 1000) * 1000;
  return new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 0 }).format(toman);
}

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
