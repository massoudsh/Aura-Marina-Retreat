import type { Locale } from '@/types';

interface Pillar {
  id: string;
  label: string;
  body: string;
}

const ICONS: Record<string, string> = {
  history: '01',
  wellness: '02',
  sensory: '03',
};

export default function ValueProps({ pillars, locale }: { pillars: Pillar[]; locale: Locale }) {
  return (
    <section className="section-padding bg-linen border-y border-soul/5">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16">
          <div>
            <p className="section-label mb-4">{locale === 'en' ? 'The Heaven Flow Difference' : 'La Diferencia Heaven Flow'}</p>
            <h2 className="font-display text-display-lg text-soul font-light max-w-[16ch]">{locale === 'en' ? 'A day designed to be felt.' : 'Un día diseñado para sentirse.'}</h2>
          </div>
          <p className="font-body text-body-lg text-soul/65 max-w-md">{locale === 'en' ? 'Not a checklist of activities. A carefully held rhythm of movement, taste, and stillness.' : 'No es una lista de actividades. Es un ritmo cuidado de movimiento, sabor y quietud.'}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="group rounded-sm border border-soul/10 bg-white/30 p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-card">
              <span className="font-display text-4xl text-gold/70 font-light" aria-hidden>{ICONS[pillar.id] ?? '—'}</span>
              <div className="mt-10 border-t border-soul/10 pt-5">
                <h3 className="font-display text-display-md text-soul font-light max-w-none mb-4">{pillar.label}</h3>
                <p className="font-body text-body-lg text-soul/70 leading-relaxed max-w-prose-luxury line-clamp-5">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
