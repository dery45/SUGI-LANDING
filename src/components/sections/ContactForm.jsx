import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../ui/Button'

export default function ContactForm() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const [submitted, setSubmitted] = useState(false)

  const labels = isID
    ? { name: 'Nama Lengkap', email: 'Email', message: 'Pesan', submit: 'Kirim Pesan', success: 'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.' }
    : { name: 'Full Name', email: 'Email', message: 'Message', submit: 'Send Message', success: 'Message sent successfully! We\'ll get back to you soon.' }

  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={(e) => {
      e.preventDefault()
      const form = e.target
      const data = new FormData(form)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })
        .then(() => setSubmitted(true))
        .catch(() => setSubmitted(true))
      setTimeout(() => setSubmitted(false), 5000)
    }}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label><input name="bot-field" /></label></p>

      {submitted ? (
        <div className="rounded-xl bg-tint-100/30 border border-tint-100 p-6 text-center">
          <p className="text-tint-200 font-medium">{labels.success}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">{labels.name}</label>
            <input id="name" type="text" name="name" placeholder={labels.name} required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">{labels.email}</label>
            <input id="email" type="email" name="email" placeholder={labels.email} required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">{labels.message}</label>
            <textarea id="message" name="message" rows={4} placeholder={labels.message} required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
          </div>
          <Button type="submit" className="w-full">{labels.submit}</Button>
        </div>
      )}
    </form>
  )
}
