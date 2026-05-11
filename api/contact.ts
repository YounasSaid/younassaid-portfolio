import type { VercelRequest, VercelResponse } from '@vercel/node'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RECIPIENT = process.env.CONTACT_RECIPIENT || 'younassaid@hotmail.com'

const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT = 3
const RATE_WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip)?.filter((t) => now - t < RATE_WINDOW_MS) ?? []
  rateLimitMap.set(ip, timestamps)
  if (timestamps.length >= RATE_LIMIT) return true
  timestamps.push(now)
  return false
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ?? 'unknown'
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'For mange henvendelser. Prøv igen om et minut.' })
  }

  const { name, email, message } = req.body ?? {}

  if (!name || typeof name !== 'string' || name.length > 200) {
    return res.status(400).json({ error: 'Ugyldigt navn' })
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Ugyldig email' })
  }
  if (!message || typeof message !== 'string' || message.length > 5000) {
    return res.status(400).json({ error: 'Ugyldig besked' })
  }

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return res.status(500).json({ error: 'Email-service ikke konfigureret' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: [RECIPIENT],
        subject: `Portfolio kontakt: ${name}`,
        reply_to: email,
        html: `
          <h2>Ny besked fra din portfolio</h2>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Resend error:', err)
      return res.status(500).json({ error: 'Kunne ikke sende email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact handler error:', err)
    return res.status(500).json({ error: 'Server-fejl' })
  }
}
