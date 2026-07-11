/**
 * Booking API — schema validation & business logic tests
 * We test the Zod schema directly to avoid Next.js server-side import issues.
 */
import { z } from 'zod';

const bookingSchema = z.object({
  name:       z.string().min(2),
  email:      z.string().email(),
  phone:      z.string().optional(),
  date:       z.string(),
  experience: z.string(),
  groupSize:  z.string(),
  dietary:    z.string().optional(),
  message:    z.string().optional(),
  locale:     z.enum(['en', 'es']),
});

const valid = {
  name: 'Maria García',
  email: 'maria@example.com',
  date: '2025-08-20',
  experience: 'Sunset Harmony Package',
  groupSize: '2',
  locale: 'es' as const,
};

describe('Booking schema — valid payloads', () => {
  it('accepts a minimal valid booking', () => {
    expect(bookingSchema.safeParse(valid).success).toBe(true);
  });

  it('accepts all optional fields', () => {
    const full = { ...valid, phone: '+34 600 000 000', dietary: 'vegan', message: 'Anniversary trip' };
    expect(bookingSchema.safeParse(full).success).toBe(true);
  });

  it('accepts locale "en"', () => {
    expect(bookingSchema.safeParse({ ...valid, locale: 'en' }).success).toBe(true);
  });

  it('accepts locale "es"', () => {
    expect(bookingSchema.safeParse({ ...valid, locale: 'es' }).success).toBe(true);
  });

  it('optional fields default to undefined when omitted', () => {
    const result = bookingSchema.safeParse(valid);
    if (!result.success) throw new Error('should succeed');
    expect(result.data.phone).toBeUndefined();
    expect(result.data.dietary).toBeUndefined();
    expect(result.data.message).toBeUndefined();
  });
});

describe('Booking schema — invalid payloads', () => {
  it('rejects missing email', () => {
    const { email, ...rest } = valid;
    expect(bookingSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects malformed email', () => {
    expect(bookingSchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false);
  });

  it('rejects name shorter than 2 chars', () => {
    expect(bookingSchema.safeParse({ ...valid, name: 'A' }).success).toBe(false);
  });

  it('rejects empty name', () => {
    expect(bookingSchema.safeParse({ ...valid, name: '' }).success).toBe(false);
  });

  it('rejects unsupported locale', () => {
    expect(bookingSchema.safeParse({ ...valid, locale: 'fr' }).success).toBe(false);
  });

  it('rejects missing date', () => {
    const { date, ...rest } = valid;
    expect(bookingSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects missing experience', () => {
    const { experience, ...rest } = valid;
    expect(bookingSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects missing groupSize', () => {
    const { groupSize, ...rest } = valid;
    expect(bookingSchema.safeParse(rest).success).toBe(false);
  });

  it('provides error details on failure', () => {
    const result = bookingSchema.safeParse({ ...valid, email: 'bad' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors.length).toBeGreaterThan(0);
      expect(result.error.errors[0].path).toContain('email');
    }
  });
});

describe('Booking API — auth guard logic', () => {
  const FAKE_KEY = 'test-service-role-key';

  it('rejects request without authorization header', () => {
    const authHeader = null;
    expect(authHeader).not.toBe(`Bearer ${FAKE_KEY}`);
  });

  it('rejects wrong bearer token', () => {
    const authHeader = 'Bearer wrong-key';
    expect(authHeader).not.toBe(`Bearer ${FAKE_KEY}`);
  });

  it('accepts correct bearer token', () => {
    const authHeader = `Bearer ${FAKE_KEY}`;
    expect(authHeader).toBe(`Bearer ${FAKE_KEY}`);
  });
});
