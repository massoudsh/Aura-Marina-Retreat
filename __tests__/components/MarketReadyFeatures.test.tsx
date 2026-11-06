import { render, screen } from '@testing-library/react';
import MarketReadyFeatures from '@/components/sections/MarketReadyFeatures';

describe('MarketReadyFeatures — English', () => {
  it('renders the section heading', () => {
    render(<MarketReadyFeatures locale="en" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Everything clear before you arrive.');
  });

  it('renders all five confidence features', () => {
    render(<MarketReadyFeatures locale="en" />);
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(5);
    expect(headings.map((h) => h.textContent)).toEqual([
      'WhatsApp concierge',
      'Flexible payment path',
      'One clear total',
      'Date-change care',
      'Personal preparation',
    ]);
  });

  it('renders the no-hidden-add-ons note', () => {
    render(<MarketReadyFeatures locale="en" />);
    expect(screen.getByText('No hidden add-ons · Personal response within 24 hours')).toBeInTheDocument();
  });

  it('links the WhatsApp card to a prefilled wa.me conversation', () => {
    render(<MarketReadyFeatures locale="en" />);
    const link = screen.getByRole('link', { name: /WhatsApp concierge/i });
    const href = link.getAttribute('href') ?? '';
    expect(href.startsWith('https://wa.me/')).toBe(true);
    expect(href).toContain('text=');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('MarketReadyFeatures — Spanish', () => {
  it('renders localized heading and features', () => {
    render(<MarketReadyFeatures locale="es" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Todo claro antes de llegar.');
    expect(screen.getByRole('heading', { level: 3, name: 'Atención por WhatsApp' })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5);
  });

  it('localizes the WhatsApp link label', () => {
    render(<MarketReadyFeatures locale="es" />);
    expect(screen.getByRole('link', { name: /Abrir WhatsApp/i })).toBeInTheDocument();
  });
});

describe('MarketReadyFeatures — Persian', () => {
  it('renders Persian heading and features', () => {
    render(<MarketReadyFeatures locale="fa" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('همه‌چیز پیش از رسیدن روشن است.');
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5);
  });

  it('localizes the WhatsApp link label', () => {
    render(<MarketReadyFeatures locale="fa" />);
    expect(screen.getByRole('link', { name: /باز کردن واتساپ/i })).toBeInTheDocument();
  });
});
