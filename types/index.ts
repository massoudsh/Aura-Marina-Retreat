export type Locale = 'en' | 'es';

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
