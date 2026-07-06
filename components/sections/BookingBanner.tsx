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
    <section className="relative py-32 overflow-hidden">
      <Image src={imageSrc} alt="" fill className="object-cover object-center" aria-hidden />
      <div className="absolute inset-0 bg-soul/70" />
      <div className="relative container-site text-center">
        <h2 className="font-display text-display-lg text-linen font-light mb-4 mx-auto">{headline}</h2>
        <p className="font-display text-xl text-linen/70 italic mb-10">{sub}</p>
        <a href={cta.href} className="btn btn-primary mb-4">{cta.text}</a>
        <p className="font-body text-caption text-linen/50 mt-6">{note}</p>
      </div>
    </section>
  );
}
