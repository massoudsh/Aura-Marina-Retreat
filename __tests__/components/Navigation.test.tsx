import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '@/components/layout/Navigation';

jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('Navigation — EN locale', () => {
  beforeEach(() => render(<Navigation locale="en" />));

  it('renders brand logo', () => {
    expect(screen.getAllByText('Heaven Flow')[0]).toBeInTheDocument();
  });

  it('renders Experience nav link', () => {
    expect(screen.getAllByText('The Experience').length).toBeGreaterThan(0);
  });

  it('renders Dining nav link', () => {
    expect(screen.getAllByText('Dining').length).toBeGreaterThan(0);
  });

  it('renders Winery nav link', () => {
    expect(screen.getAllByText('The Winery').length).toBeGreaterThan(0);
  });

  it('renders About nav link', () => {
    expect(screen.getAllByText('Our Story').length).toBeGreaterThan(0);
  });

  it('renders language toggle to ES', () => {
    expect(screen.getAllByText('ES').length).toBeGreaterThan(0);
  });

  it('renders Book Now CTA linking to /en/book', () => {
    const bookLinks = screen.getAllByRole('link').filter(l => l.getAttribute('href') === '/en/book');
    expect(bookLinks.length).toBeGreaterThan(0);
  });

  it('logo links to /en', () => {
    const logoLinks = screen.getAllByRole('link').filter(l => l.getAttribute('href') === '/en');
    expect(logoLinks.length).toBeGreaterThan(0);
  });
});

describe('Navigation — ES locale', () => {
  it('renders Spanish nav links', () => {
    render(<Navigation locale="es" />);
    expect(screen.getAllByText('La Experiencia').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Cocina').length).toBeGreaterThan(0);
    expect(screen.getAllByText('La Bodega').length).toBeGreaterThan(0);
  });

  it('shows EN toggle when on ES', () => {
    render(<Navigation locale="es" />);
    expect(screen.getAllByText('EN').length).toBeGreaterThan(0);
  });

  it('Book CTA links to /es/book', () => {
    render(<Navigation locale="es" />);
    const bookLinks = screen.getAllByRole('link').filter(l => l.getAttribute('href') === '/es/book');
    expect(bookLinks.length).toBeGreaterThan(0);
  });
});

describe('Navigation — mobile menu', () => {
  it('opens mobile menu on burger click', () => {
    render(<Navigation locale="en" />);
    const burger = screen.getByRole('button', { name: /open navigation menu/i });
    fireEvent.click(burger);
    // After opening, close button should appear
    expect(screen.getByRole('button', { name: /close navigation menu/i })).toBeInTheDocument();
  });

  it('closes mobile menu on close click', () => {
    render(<Navigation locale="en" />);
    fireEvent.click(screen.getByRole('button', { name: /open navigation menu/i }));
    fireEvent.click(screen.getByRole('button', { name: /close navigation menu/i }));
    // Close button should be gone
    expect(screen.queryByRole('button', { name: /close navigation menu/i })).not.toBeInTheDocument();
  });
});
