import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);

    const { error } = await supabaseAdmin.from('bookings').insert({
      name:         data.name,
      email:        data.email,
      phone:        data.phone ?? null,
      date:         data.date,
      experience:   data.experience,
      group_size:   data.groupSize,
      dietary_notes: data.dietary ?? null,
      message:      data.message ?? null,
      locale:       data.locale,
      status:       'pending',
    });

    if (error) throw error;

    // Send confirmation email via Resend (non-blocking)
    sendConfirmationEmail(data).catch(console.error);

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: err.errors }, { status: 400 });
    }
    console.error('[bookings/POST]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Admin only — verify session
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ bookings: data });
}

async function sendConfirmationEmail(data: { name: string; email: string; date: string; experience: string; locale: 'en' | 'es' }) {
  if (!process.env.RESEND_API_KEY) return;

  const subject = data.locale === 'en'
    ? 'Your Heaven Flow enquiry has been received'
    : 'Hemos recibido tu consulta de Heaven Flow';

  const body = data.locale === 'en'
    ? `Dear ${data.name},\n\nThank you for reaching out. Someone from the Heaven Flow team will be in touch within 24 hours.\n\n— The Heaven Flow Team`
    : `Estimado/a ${data.name},\n\nGracias por contactarnos. Alguien del equipo se pondrá en contacto contigo en 24 horas.\n\n— El Equipo de Heaven Flow`;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM,
      to:   data.email,
      subject,
      text: body,
    }),
  });
}
