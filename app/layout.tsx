import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import '../src/styles/tokens.css';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wineandflow.com'),
  title: {
    default: 'Wine & Flow Málaga | Luxury Wine, Yoga & Coastal Cuisine',
    template: '%s | Wine & Flow Málaga',
  },
  description:
    'A full-day immersive sanctuary in Málaga — Sommelier-led wine pairings, restorative yoga, and locally sourced seafood cuisine. Intimate groups. Premium experience.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'es_ES',
    siteName: 'Wine & Flow',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${cormorant.variable} ${dmSans.variable} bg-linen text-soul antialiased`}>
        {children}
      </body>
    </html>
  );
}
