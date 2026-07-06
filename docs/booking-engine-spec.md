# A2 · Booking Engine Integration Spec
> Task: A2 | Priority: 🔴 P1 | Owner: Developer

---

## OVERVIEW

The booking engine is the **single most critical functional component** of the site.
It must handle multi-service logic while preserving the luxury feel at every step.
A clunky booking flow will destroy the brand promise built by the rest of the site.

---

## BOOKING TYPES

| Type | ID | Price | Max Guests | Notes |
|---|---|---|---|---|
| Sunset Harmony Package (full day) | `PKG_SUNSET` | From €395/pp | 10 | Priority offering |
| Wine Workshop (standalone) | `WRK_WINE` | From €185/pp | 8 | Bodega location |
| Private Group — Full Day | `PRIV_FULL` | From €1,200 | 10 | Enquiry-only, not self-serve |
| Private Group — Workshop | `PRIV_WINE` | On request | 8 | Enquiry-only |
| Gift Voucher | `GIFT_ANY` | Variable | N/A | Email delivery + physical option |

---

## BOOKING FLOW — SELF-SERVE (PKG_SUNSET & WRK_WINE)

```
Step 1: SELECT EXPERIENCE
        ↓
Step 2: SELECT DATE
        (calendar — shows available/unavailable dates in real time)
        ↓
Step 3: SELECT GROUP SIZE
        (1–10 for full day / 1–8 for workshop)
        ↓
Step 4: GUEST DETAILS
        Name / Email / Phone / Dietary notes / Special requests
        ↓
Step 5: REVIEW & PAY
        Order summary + Payment
        ↓
Step 6: CONFIRMATION
        On-screen + email (see email spec in social-marketing.md EMAIL 1)
```

---

## UX RULES — NON-NEGOTIABLE

- **No step should feel like a form.** Labels must use the brand copy voice.
- Date picker: custom styled — no default browser/Stripe default look.
- Progress bar: subtle, minimal. "Step 1 of 3" in small DM Sans, not a chunky stepper.
- Error states: warm-toned, never red. Use `--color-sage` for validation messages.
- Mobile: each step is full-screen. No horizontal scrolling.
- On desktop: 2-column layout — form left, order summary right (sticky).

---

## PAYMENT GATEWAY

**Recommended: Stripe**

| Feature | Requirement |
|---|---|
| Currency | EUR primary. USD + GBP auto-conversion via Stripe |
| 3D Secure | Mandatory (EU compliance) |
| Apple Pay / Google Pay | Enable — reduces friction on mobile significantly |
| Deposit option | Consider 30% deposit at booking, remainder 7 days before |
| Refund policy display | Must appear on Step 5 before payment button |
| SSL | Required — display trust badge in footer of booking widget |

**Stripe Elements styling:** Must match brand tokens. Use `appearance` API to override defaults:
```js
const appearance = {
  theme: 'flat',
  variables: {
    colorPrimary: '#C8A96E',       // --color-gold
    colorBackground: '#F5F0E8',    // --color-linen
    colorText: '#1C1810',          // --color-soul
    colorDanger: '#8A6A5C',        // warm error tone
    fontFamily: 'DM Sans, system-ui, sans-serif',
    borderRadius: '4px',           // --radius-sm
    fontSizeBase: '16px',
  },
};
```

---

## AVAILABILITY LOGIC

- Each session date has a `max_capacity` (10 or 8 depending on type).
- When `bookings_confirmed >= max_capacity` → date shows as unavailable in calendar.
- Buffer: Hold a 1-slot reserve for late walk-in / partner allocations. Display max as `9` publicly.
- Private group dates are blocked manually by admin — not self-serve.

---

## ENQUIRY FLOW — PRIVATE GROUPS & SPECIAL REQUESTS

For `PRIV_FULL`, `PRIV_WINE`, gift vouchers, and any group > standard capacity:

```
"Enquire" CTA → Modal or dedicated /book?type=private page
                ↓
Simple form: Name / Email / Date preference / Group size / Message
                ↓
Auto-reply email in < 1 minute (branded, warm tone — see Email 1 draft)
                ↓
Manual follow-up by team within 24h
```

Do NOT route private enquiries through the self-serve flow — the experience must feel bespoke.

---

## ADMIN REQUIREMENTS

- Dashboard: View all bookings by date, type, status
- Manual block dates (holidays, private events)
- Export bookings to CSV for external management
- Send custom emails to individual bookings
- Edit availability in real time

**Recommended backend:** Supabase (simple) or a booking SaaS like Checkfront / FareHarbor if timeline is tight.

> **Note:** If using a third-party booking SaaS (Checkfront, FareHarbor, Rezdy),
> embed via iframe with CSS overrides to match brand. Never use their default UI exposed.
> Use their API if time allows for a fully native implementation.

---

## CONFIRMATION PAGE — /book/confirmation

Content after successful payment:

```
[Brand logo]

Your Day is Reserved.

[Date] · [Package Name] · [Guest Count]

A confirmation has been sent to [email].
We will be in touch within 24 hours with your full day briefing.

[ Add to Calendar ]   [ Share This ]

—

While you wait:
→ Explore the Experience
→ Read the Winery Story
```

**Do not** show upsell banners or unrelated CTAs on this page. The transaction is complete. Let the moment breathe.
