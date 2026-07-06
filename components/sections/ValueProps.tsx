import type { Locale } from '@/types';

interface Pillar {
  id: string;
  label: string;
  body: string;
}

const ICONS: Record<string, string> = {
  history:  '◈',
  wellness: '◉',
  sensory:  '◇',
};

export default function ValueProps({ pillars, locale }: { pillars: Pillar[]; locale: Locale }) {
  return (
    <section className="section-padding bg-linen">
      <div className="container-site">
        <p className="section-label mb-16 text-center">
          {locale === 'en' ? 'Why Choose Us' : 'Por Qué Elegirnos'}
        </p>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="flex flex-col gap-5">
              <span className="text-gold text-2xl" aria-hidden>{ICONS[pillar.id] ?? '—'}</span>
              <h3 className="font-display text-display-md text-soul font-light max-w-none">{pillar.label}</h3>
              <p className="font-body text-body-lg text-soul/80 leading-relaxed max-w-prose-luxury">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
