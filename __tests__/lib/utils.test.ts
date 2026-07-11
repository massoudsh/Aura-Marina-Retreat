import { cn, formatPrice, formatDate } from '@/lib/utils';

describe('cn()', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('filters falsy values', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('resolves Tailwind conflicts (last wins)', () => {
    expect(cn('p-4', 'p-8')).toBe('p-8');
  });

  it('handles undefined and null', () => {
    expect(cn('foo', undefined, null as any, 'bar')).toBe('foo bar');
  });

  it('returns empty string with no args', () => {
    expect(cn()).toBe('');
  });
});

describe('formatPrice()', () => {
  it('formats EUR by default', () => {
    const result = formatPrice(1200);
    expect(result).toMatch(/€|EUR/);
    expect(result).toMatch(/1[,.]?200/);
  });

  it('does not show decimal places', () => {
    const result = formatPrice(1000);
    expect(result).not.toMatch(/\.00/);
  });

  it('formats a custom currency', () => {
    const result = formatPrice(500, 'USD');
    expect(result).toMatch(/\$|USD/);
  });

  it('formats zero correctly', () => {
    const result = formatPrice(0);
    expect(result).toMatch(/0/);
  });
});

describe('formatDate()', () => {
  const isoDate = '2025-07-15';

  it('formats in English', () => {
    const result = formatDate(isoDate, 'en');
    // en-GB: Tuesday, 15 July 2025
    expect(result).toMatch(/2025/);
    expect(result).toMatch(/July|Jul/i);
  });

  it('formats in Spanish', () => {
    const result = formatDate(isoDate, 'es');
    // es-ES: martes, 15 de julio de 2025
    expect(result).toMatch(/2025/);
    expect(result).toMatch(/julio/i);
  });

  it('produces different output for EN and ES', () => {
    expect(formatDate(isoDate, 'en')).not.toBe(formatDate(isoDate, 'es'));
  });

  it('includes the weekday', () => {
    // 15 July 2025 is a Tuesday
    const en = formatDate(isoDate, 'en');
    const es = formatDate(isoDate, 'es');
    expect(en).toMatch(/Tuesday/i);
    expect(es).toMatch(/martes/i);
  });
});
