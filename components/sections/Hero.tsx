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
    <section className={cn('relative flex items-end overflow-hidden bg-soul', fullscreen ? 'min-h-screen' : 'min-h-[70vh]')}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center scale-[1.02]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-soul/85 via-soul/35 to-soul/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-soul/75 via-transparent to-soul/15" />

      <div className="relative container-site pb-16 pt-40 lg:pb-28 lg:pt-48 w-full">
        <div className="max-w-2xl">
          {label && <p className="section-label text-gold mb-5">{label}</p>}
          <h1 className="font-display text-[3.25rem] sm:text-[4.5rem] lg:text-[5.75rem] text-linen font-light leading-[.98] mb-7 max-w-[13ch] text-balance animate-fade-up">
            {h1}
          </h1>
          {h2 && (
            <p className="font-body text-body-lg text-linen/80 max-w-[54ch] mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '150ms' }}>
              {h2}
            </p>
          )}
          {(cta || ctaSecondary) && (
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '300ms' }}>
              {cta && <a href={cta.href} className="btn btn-primary">{cta.text}</a>}
              {ctaSecondary && <a href={ctaSecondary.href} className="btn btn-ghost">{ctaSecondary.text}</a>}
            </div>
          )}
        </div>
        <div className="hidden lg:flex absolute right-12 bottom-12 items-center gap-3 text-linen/60">
          <span className="h-px w-12 bg-gold" />
          <span className="font-body text-[10px] uppercase tracking-[.22em]">Málaga · Andalusia</span>
        </div>
      </div>
    </section>
  );
}
