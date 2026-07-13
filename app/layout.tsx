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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flowhaven.co'),
  title: {
    default: 'Flowhaven Málaga | Luxury Wine, Yoga & Coastal Cuisine',
    template: '%s | Flowhaven Málaga',
  },
  description:
    'Where movement meets the vine — an immersive couples sanctuary in Málaga with restorative yoga, sommelier-led wine, and coastal dining.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'es_ES',
    siteName: 'Flowhaven',
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
