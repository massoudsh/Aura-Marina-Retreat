import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

const defaults = {
  h1: 'Welcome to Wine & Flow',
  imageSrc: '/assets/images/home_hero_01.jpg',
  imageAlt: 'Golden hour on the Málaga terrace',
};

describe('Hero — rendering', () => {
  it('renders h1 text', () => {
    render(<Hero {...defaults} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Wine & Flow');
  });

  it('renders background image with correct alt', () => {
    render(<Hero {...defaults} />);
    expect(screen.getByAltText('Golden hour on the Málaga terrace')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Hero {...defaults} label="Wine & Flow" />);
    expect(screen.getByText('Wine & Flow')).toBeInTheDocument();
  });

  it('does not render label when omitted', () => {
    const { container } = render(<Hero {...defaults} />);
    expect(container.querySelector('p.section-label')).not.toBeInTheDocument();
  });

  it('renders h2 subtitle when provided', () => {
    render(<Hero {...defaults} h2="Luxury experiences in Málaga" />);
    expect(screen.getByText('Luxury experiences in Málaga')).toBeInTheDocument();
  });

  it('does not render h2 when omitted', () => {
    render(<Hero {...defaults} />);
    // Only h1 heading present
    expect(screen.getAllByRole('heading').length).toBe(1);
  });
});

describe('Hero — CTA buttons', () => {
  it('renders primary CTA link with correct href', () => {
    render(<Hero {...defaults} cta={{ text: 'Book Now', href: '/en/book' }} />);
    const link = screen.getByRole('link', { name: 'Book Now' });
    expect(link).toHaveAttribute('href', '/en/book');
  });

  it('renders secondary CTA link', () => {
    render(<Hero {...defaults} ctaSecondary={{ text: 'Learn More', href: '/en/about' }} />);
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '/en/about');
  });

  it('renders both CTAs together', () => {
    render(
      <Hero
        {...defaults}
        cta={{ text: 'Book Now', href: '/en/book' }}
        ctaSecondary={{ text: 'Learn More', href: '/en/about' }}
      />
    );
    expect(screen.getAllByRole('link').length).toBe(2);
  });

  it('renders no links when no CTAs provided', () => {
    render(<Hero {...defaults} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});

describe('Hero — fullscreen prop', () => {
  it('applies min-h-screen when fullscreen=true', () => {
    const { container } = render(<Hero {...defaults} fullscreen />);
    expect(container.querySelector('section')).toHaveClass('min-h-screen');
  });

  it('applies min-h-[70vh] when fullscreen=false (default)', () => {
    const { container } = render(<Hero {...defaults} />);
    expect(container.querySelector('section')).toHaveClass('min-h-[70vh]');
  });

  it('does not apply min-h-screen when fullscreen=false', () => {
    const { container } = render(<Hero {...defaults} />);
    expect(container.querySelector('section')).not.toHaveClass('min-h-screen');
  });
});
