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

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
