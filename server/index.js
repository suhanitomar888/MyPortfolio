import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true, service: 'portfolio-contact-api' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' })
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.RECEIVER_EMAIL) {
    return res.status(500).json({ message: 'Email service is not configured on the server.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact API error:', error)
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' })
  }
})

app.listen(port, () => {
  console.log(`Contact API server running on http://localhost:${port}`)
})
