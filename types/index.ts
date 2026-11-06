export type Locale = 'en' | 'es' | 'fa';

export const LOCALES: readonly Locale[] = ['en', 'es', 'fa'] as const;

export const RTL_LOCALES: readonly Locale[] = ['fa'] as const;

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

export interface PageProps {
  params: { locale: Locale };
  searchParams?: Record<string, string>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  year: number;
}

export interface TimelineItem {
  time: string;
  event: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  date: string;
  experience: string;
  groupSize: string;
  dietary?: string;
  message?: string;
}
