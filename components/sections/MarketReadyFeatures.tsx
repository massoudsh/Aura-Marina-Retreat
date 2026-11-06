import type { Locale } from '@/types';

const copy = {
  en: {
    label: 'Designed for confident travel',
    title: 'Everything clear before you arrive.',
    intro: 'A more reassuring way to plan a Málaga day from Iran — with a real person available when you need one.',
    features: [
      { number: '01', title: 'WhatsApp concierge', body: 'Ask questions, share arrival details, and get a personal reply without waiting for a call centre.' },
      { number: '02', title: 'Flexible payment path', body: 'Start with a booking enquiry and agree the deposit and balance timing with our team before you commit.' },
      { number: '03', title: 'One clear total', body: 'See what is included in your day, from the first movement session to the final coastal aperitivo.' },
      { number: '04', title: 'Date-change care', body: 'Plans move. We will work with you early to find another suitable date when availability allows.' },
      { number: '05', title: 'Personal preparation', body: 'Dietary needs, mobility considerations, private groups, and celebrations are discussed before arrival.' },
    ],
    note: 'No hidden add-ons · Personal response within 24 hours',
  },
  es: {
    label: 'Diseñado para viajar con confianza',
    title: 'Todo claro antes de llegar.',
    intro: 'Una forma más tranquila de preparar tu día en Málaga desde Irán — con una persona real disponible cuando la necesites.',
    features: [
      { number: '01', title: 'Atención por WhatsApp', body: 'Haz preguntas, comparte tus detalles de llegada y recibe una respuesta personal sin esperar a un call center.' },
      { number: '02', title: 'Pago flexible', body: 'Empieza con una consulta y acuerda con nuestro equipo el depósito y el calendario del saldo antes de confirmar.' },
      { number: '03', title: 'Un total transparente', body: 'Sabrás qué incluye tu día, desde la primera sesión de movimiento hasta el aperitivo costero final.' },
      { number: '04', title: 'Cuidado con las fechas', body: 'Los planes cambian. Trabajaremos contigo para encontrar otra fecha cuando haya disponibilidad.' },
      { number: '05', title: 'Preparación personal', body: 'Necesidades dietéticas, movilidad, grupos privados y celebraciones se hablan antes de tu llegada.' },
    ],
    note: 'Sin extras ocultos · Respuesta personal en 24 horas',
  },
  fa: {
    label: 'طراحی‌شده برای سفر با اطمینان',
    title: 'همه‌چیز پیش از رسیدن روشن است.',
    intro: 'راهی آرام‌تر برای برنامه‌ریزی یک روز در مالاگا از ایران — با یک انسان واقعی که هر وقت لازم داشتید در دسترس است.',
    features: [
      { number: '۰۱', title: 'پشتیبانی واتساپ', body: 'پرسش بپرسید، جزئیات رسیدن را بگویید و بدون انتظار در مرکز تماس، پاسخ شخصی بگیرید.' },
      { number: '۰۲', title: 'مسیر پرداخت منعطف', body: 'با درخواست رزرو شروع کنید و پیش از تعهد، زمان‌بندی بیعانه و مانده را با تیم ما توافق کنید.' },
      { number: '۰۳', title: 'یک مبلغ شفاف', body: 'ببینید روز شما چه چیزی را شامل می‌شود، از نخستین جلسهٔ حرکت تا آخرین آپریتیف ساحلی.' },
      { number: '۰۴', title: 'تغییر تاریخ با آرامش', body: 'برنامه‌ها تغییر می‌کنند. اگر ظرفیت اجازه دهد، زودتر با شما تاریخ مناسب دیگری پیدا می‌کنیم.' },
      { number: '۰۵', title: 'آماده‌سازی شخصی', body: 'نیازهای غذایی، محدودیت حرکتی، گروه‌های خصوصی و جشن‌ها پیش از رسیدن بررسی می‌شوند.' },
    ],
    note: 'بدون هزینهٔ پنهان · پاسخ شخصی ظرف ۲۴ ساعت',
  },
} as const;

export default function MarketReadyFeatures({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <section className="section-padding bg-[#ebe4d8]">
      <div className="container-site">
        <div className="grid lg:grid-cols-[.8fr_1.5fr] gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="section-label mb-5">{content.label}</p>
            <h2 className="font-display text-display-lg text-soul font-light max-w-none mb-6">{content.title}</h2>
            <p className="font-body text-body-lg text-soul/65 leading-relaxed max-w-prose-luxury mb-8">{content.intro}</p>
            <p className="font-body text-caption text-sage uppercase tracking-[.12em]">{content.note}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-soul/15 border border-soul/15">
            {content.features.map((feature, index) => (
              <article
                key={feature.number}
                className={`bg-[#ebe4d8] p-7 lg:p-9 min-h-[220px] transition-colors duration-300 hover:bg-linen ${index === content.features.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <span className="font-display text-4xl text-gold/70 font-light">{feature.number}</span>
                <h3 className="font-display text-2xl text-soul font-light mt-8 mb-3 max-w-none">{feature.title}</h3>
                <p className="font-body text-caption text-soul/65 leading-relaxed">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
