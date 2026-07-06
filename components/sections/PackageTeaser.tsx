import Image from 'next/image';
import type { Locale } from '@/types';

interface PackageTeaserProps {
  label: string;
  title: string;
  description: string;
  priceFrom: string;
  cta: { text: string; href: string };
  imageSrc: string;
  locale: Locale;
}

export default function PackageTeaser({ label, title, description, priceFrom, cta, imageSrc, locale }: PackageTeaserProps) {
  return (
    <section className="section-padding bg-soul">
      <div className="container-site grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-deep order-2 lg:order-1">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="section-label mb-4">{label}</p>
          <h2 className="font-display text-display-lg text-linen font-light mb-6 max-w-none">{title}</h2>
          <p className="font-body text-body-lg text-linen/70 max-w-prose-luxury mb-8">{description}</p>
          <p className="font-display text-3xl text-gold font-light italic mb-10">{priceFrom}</p>
          <a href={cta.href} className="btn btn-primary">{cta.text}</a>
        </div>
      </div>
    </section>
  );
}
