import Link from 'next/link';
import { bookingContent } from '@/src/pages/booking.content';
import type { Locale } from '@/types';

export default function ConfirmationPage({ params: { locale } }: { params: { locale: Locale } }) {
  const conf = bookingContent.confirmation[locale];

  return (
    <div className="min-h-screen bg-soul flex items-center justify-center px-6">
      <div className="max-w-lg text-center py-32">
        <div className="w-16 h-px bg-gold mx-auto mb-12" />
        <p className="section-label mb-6">{locale === 'en' ? 'Confirmed' : 'Confirmado'}</p>
        <h1 className="font-display text-display-xl text-linen font-light mb-6 max-w-none">{conf.heading}</h1>
        <p className="font-body text-body-lg text-linen/60 mb-12">{conf.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {conf.exploreLinks.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn-ghost">{link.label}</Link>
          ))}
        </div>
        <div className="w-16 h-px bg-gold/30 mx-auto mt-12" />
      </div>
    </div>
  );
}
