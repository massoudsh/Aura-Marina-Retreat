import Image from 'next/image';

interface BookingBannerProps {
  headline: string;
  sub: string;
  cta: { text: string; href: string };
  note: string;
  imageSrc: string;
}

export default function BookingBanner({ headline, sub, cta, note, imageSrc }: BookingBannerProps) {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <Image src={imageSrc} alt="" fill className="object-cover object-center" aria-hidden />
      <div className="absolute inset-0 bg-soul/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-soul/90 via-soul/55 to-transparent" />
      <div className="relative container-site">
        <div className="max-w-2xl">
          <p className="section-label mb-5">Heaven Flow · Málaga</p>
          <h2 className="font-display text-[2.75rem] sm:text-5xl lg:text-6xl text-linen font-light leading-[1.05] mb-5 max-w-[13ch]">{headline}</h2>
          <p className="font-display text-2xl text-linen/75 italic mb-10">{sub}</p>
          <a href={cta.href} className="btn btn-primary">{cta.text}</a>
          <p className="font-body text-caption text-linen/55 mt-6">{note}</p>
        </div>
      </div>
    </section>
  );
}
