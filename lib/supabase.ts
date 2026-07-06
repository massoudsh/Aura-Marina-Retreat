import { createClient } from '@supabase/supabase-js';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

// ─── Types ───────────────────────────────────────────────────────────────────
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';
export type ExperienceType = 'PKG_SUNSET' | 'WRK_WINE' | 'PRIV_FULL' | 'GIFT_ANY';

export interface Booking {
  id: string;
  created_at: string;
  experience_type: ExperienceType;
  date: string;
  group_size: number;
  name: string;
  email: string;
  phone?: string;
  dietary_notes?: string;
  message?: string;
  status: BookingStatus;
  stripe_session_id?: string;
  locale: 'en' | 'es';
}

// ─── Browser client (for client components) ──────────────────────────────────
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ─── Server client (for server components + API routes) ──────────────────────
export function createServerSupabase() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value; },
        set(name: string, value: string, options: CookieOptions) {
          try { cookieStore.set({ name, value, ...options }); } catch {}
        },
        remove(name: string, options: CookieOptions) {
          try { cookieStore.set({ name, value: '', ...options }); } catch {}
        },
      },
    }
  );
}

// ─── Admin client (for service-role operations) ───────────────────────────────
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);
