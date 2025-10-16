import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// In your POST function:
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: SITE_CONFIG.email,
  subject: `New Contact: ${body.name}`,
  html: `<p>${body.message}</p>`
})