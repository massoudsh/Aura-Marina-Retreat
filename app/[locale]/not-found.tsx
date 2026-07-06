import Link from 'next/link';
import { ui } from '@/src/components/ui.copy';
import type { Locale } from '@/types';

export default function NotFound() {
  // Default to EN — locale detection in middleware handles redirect
  const locale: Locale = 'en';
  const copy = ui.notFound[locale];

  return (
    <div className="min-h-screen bg-linen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="section-label mb-6">404</p>
        <h1 className="font-display text-display-lg text-soul font-light mb-4 mx-auto">{copy.heading}</h1>
        <p className="font-body text-body-lg text-soul/60 mb-10">{copy.sub}</p>
        <Link href={copy.ctaHref} className="btn btn-primary">{copy.cta}</Link>
      </div>
    </div>
  );
}
