import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroProps {
  label?: string;
  h1: string;
  h2?: string;
  cta?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  imageSrc: string;
  imageAlt: string;
  fullscreen?: boolean;
}

export default function Hero({ label, h1, h2, cta, ctaSecondary, imageSrc, imageAlt, fullscreen = false }: HeroProps) {
  return (
    <section className={cn('relative flex items-end overflow-hidden', fullscreen ? 'min-h-screen' : 'min-h-[70vh]')}>
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-soul/20 via-soul/30 to-soul/75" />

      {/* Content */}
      <div className="relative container-site pb-20 lg:pb-32 pt-40 lg:pt-48 w-full">
        {label && <p className="section-label text-gold mb-4">{label}</p>}
        <h1 className="font-display text-display-xl text-linen font-light leading-none mb-6 max-w-[14ch] text-balance animate-fade-up">
          {h1}
        </h1>
        {h2 && (
          <p className="font-body text-body-lg text-linen/80 max-w-prose-luxury mb-10 animate-fade-up" style={{ animationDelay: '150ms' }}>
            {h2}
          </p>
        )}
        {(cta || ctaSecondary) && (
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            {cta && (
              <a href={cta.href} className="btn btn-primary">{cta.text}</a>
            )}
            {ctaSecondary && (
              <a href={ctaSecondary.href} className="btn btn-ghost">{ctaSecondary.text}</a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
