# TrialBridge — CAR-T & Proton Therapy Trials in China

A lead-generation site that lists **actively recruiting CAR-T and proton therapy
clinical trials in China** (pulled live from ClinicalTrials.gov) for patients in
the US and Europe. Visitors chat with an AI navigator ("Nora", powered by
DeepSeek) or fill a form; every lead is emailed to you. **No database.**

## What's inside
- **Live trial data** from the public ClinicalTrials.gov API v2, cached 12h.
- **SEO landing pages**: `/car-t-cell-therapy-china`, `/proton-therapy-china`,
  per-trial pages at `/trials/NCT…`, auto sitemap + robots + structured data.
- **AI chat** (DeepSeek) tuned to inform, build trust, and ask for contact
  details. When a visitor types an email/phone, the whole transcript is emailed
  to you automatically.
- **Lead form** on every page → emailed to you.
- Leads are delivered by email via **Resend** (free tier, no card needed).

## Deploy to Vercel (≈10 minutes)
1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Add these Environment Variables (Settings → Environment Variables):

   | Name | Value |
   |------|-------|
   | `DEEPSEEK_API_KEY` | from https://platform.deepseek.com |
   | `RESEND_API_KEY`   | from https://resend.com |
   | `LEAD_EMAIL`       | `naanaajie@gmail.com` |
   | `LEAD_FROM`        | `onboarding@resend.dev` (works instantly; later use your own verified domain) |
   | `NEXT_PUBLIC_SITE_URL` | your final URL, e.g. `https://yourdomain.com` |

4. Click **Deploy**. Done.

### Getting the two keys
- **DeepSeek**: sign up → API keys → create key. Pay-as-you-go, very cheap.
- **Resend**: sign up → API Keys → create. The free plan sends 100 emails/day
  from `onboarding@resend.dev` with zero setup. To send from your own domain
  (better deliverability), add + verify your domain in Resend, then set
  `LEAD_FROM` to e.g. `leads@yourdomain.com`.

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev                  # http://localhost:3000
```

## How leads reach you
- **Form**: name + contact + message → email to `LEAD_EMAIL`.
- **Chat**: when the visitor's message contains an email or phone number, the
  full conversation is emailed to `LEAD_EMAIL`. No storage, no dashboard.

## Customize
- **AI behavior / persuasion**: edit `SYSTEM_PROMPT` in `app/api/chat/route.ts`.
- **Which trials show**: edit the query terms in `lib/trials.ts` (`THERAPY_QUERY`).
- **Copy & design**: `app/page.tsx`, `components/`, colors in `app/globals.css`.

## Important
This site links people to medical trials. Keep the disclaimer and privacy pages,
and have a lawyer review them for your market (GDPR applies to EU visitors).
The AI must never promise cures or give personal medical advice — the current
prompt enforces this; keep it that way if you edit it.
