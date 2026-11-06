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
});

describe('MarketReadyFeatures — Spanish', () => {
  it('renders localized heading and features', () => {
    render(<MarketReadyFeatures locale="es" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Todo claro antes de llegar.');
    expect(screen.getByRole('heading', { level: 3, name: 'Atención por WhatsApp' })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5);
  });
});
