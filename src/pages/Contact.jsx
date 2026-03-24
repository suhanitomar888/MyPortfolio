import { useState } from 'react'
import { profile } from '../data/siteData'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, text: '', error: false })
  const [focusedField, setFocusedField] = useState(null)

  const apiBase = import.meta.env.VITE_API_URL || ''

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({ loading: true, text: '', error: false })

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Something went wrong while sending your message.')
      }

      setStatus({ loading: false, text: 'Message sent successfully. I will get back to you soon.', error: false })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ loading: false, text: error.message || 'Could not send the message.', error: true })
    }
  }

  const contactInfo = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: 'from-orange-400 to-red-500' },
    { icon: 'github', label: 'GitHub', value: 'github.com/Faiziya30', href: profile.github, color: 'from-slate-400 to-slate-600' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/faiziya-ansari', href: profile.linkedin, color: 'from-blue-400 to-blue-600' },
    { icon: 'phone', label: 'Phone', value: '+91-9644033984', href: 'tel:+919644033984', color: 'from-green-400 to-emerald-600' },
  ]

  const renderContactIcon = (icon) => {
    switch (icon) {
      case 'mail':
        return (
          <svg className="h-6 w-6 text-[color:var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 7.5v9A2.25 2.25 0 0119.5 18.75h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-1.07 1.918l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.918V7.5" />
          </svg>
        )
      case 'github':
        return (
          <svg className="h-6 w-6 text-[color:var(--text)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="h-6 w-6 text-[color:var(--text)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 003.28 4.97 1.97 1.97 0 005.25 6.94a1.97 1.97 0 001.97-1.97A1.97 1.97 0 005.25 3zm14.69 9.9c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.63 1-3.09 1.7V8.5H9.52c.05.98 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.91-1.39 1.35 0 1.89 1.03 1.89 2.54V20h3.38v-7.1z" />
          </svg>
        )
      default:
        return (
          <svg className="h-6 w-6 text-[color:var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 4.5A2.25 2.25 0 014.5 2.25h2.25A2.25 2.25 0 019 4.5v2.25A2.25 2.25 0 016.75 9H4.5A2.25 2.25 0 012.25 6.75V4.5zM15 4.5a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0119.5 9h-2.25A2.25 2.25 0 0115 6.75V4.5zM2.25 17.25A2.25 2.25 0 014.5 15h2.25A2.25 2.25 0 019 17.25v2.25a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-2.25zM16.5 15.75h4.5m-2.25-2.25v4.5" />
          </svg>
        )
    }
  }

  return (
    <section className="page-shell">
      {/* Header Section */}
      <div className="reveal-up mb-20 text-center">
        <div className="mb-6 inline-flex items-center justify-center">
          <div className="contact-header-gradient absolute h-32 w-32 rounded-full blur-3xl" />
          <div className="relative">
            <h1 className="section-title text-5xl mb-3">Let's Create Together</h1>
          </div>
        </div>
        <p className="section-copy mx-auto max-w-2xl text-lg">
          Got an exciting project? Let's discuss ideas, collaborate, and bring something amazing to life.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Left Side - Contact Info with Icons */}
        <div className="space-y-6">
          <div className="reveal-up delay-1">
            <h2 className="font-display text-3xl font-bold text-[color:var(--text)] mb-2">Reach Out</h2>
            <p className="section-copy text-base leading-relaxed">
              Whether you have a question, idea, or just want to say hello, I'm always excited to connect with creative minds.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4 mt-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-400 hover:shadow-xl reveal-up"
                style={{ animationDelay: `${120 + index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-400`} />
                <div className="relative flex items-center gap-4">
                  <div className={`contact-icon-wrapper inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} p-0.5`}>
                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[color:var(--surface)]">
                      {renderContactIcon(info.icon)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)] group-hover:text-[color:var(--brand)] transition-colors duration-300">
                      {info.label}
                    </p>
                    <p className="font-bold text-[color:var(--text)] group-hover:translate-x-1 transition-transform duration-300 mt-1">
                      {info.value}
                    </p>
                  </div>
                  <div className="hidden sm:flex">
                    <svg className="h-5 w-5 text-[color:var(--brand)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 pt-8 border-t border-[color:var(--line)] reveal-up delay-2">
            <div>
              <p className="text-3xl font-bold text-[color:var(--brand)]">24h</p>
              <p className="text-sm text-[color:var(--muted)]">Response time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[color:var(--brand)]">Projects</p>
              <p className="text-sm text-[color:var(--muted)]">Always open</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="reveal-up delay-2">
          <div className="contact-form-wrapper relative rounded-3xl p-8 lg:p-10">
            {/* Background gradient circles */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-[color:var(--brand)]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-[color:var(--brand-soft)]/5 rounded-full blur-3xl -z-10" />

            <h3 className="font-display text-2xl font-bold text-[color:var(--text)] mb-1">Send a Message</h3>
            <p className="text-sm text-[color:var(--muted)] mb-8">Tell me about your project or idea</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="form-group">
                <label className="mb-2 block text-sm font-semibold text-[color:var(--text)] capitalize tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="John Doe"
                  className={`contact-input w-full rounded-xl border-2 bg-transparent px-5 py-3 outline-none transition-all duration-300 ${
                    focusedField === 'name'
                      ? 'border-[color:var(--brand)] shadow-lg shadow-[color:var(--brand)]/20'
                      : 'border-[color:var(--line)] hover:border-[color:var(--brand)]/40'
                  }`}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="mb-2 block text-sm font-semibold text-[color:var(--text)] capitalize tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your@email.com"
                  className={`contact-input w-full rounded-xl border-2 bg-transparent px-5 py-3 outline-none transition-all duration-300 ${
                    focusedField === 'email'
                      ? 'border-[color:var(--brand)] shadow-lg shadow-[color:var(--brand)]/20'
                      : 'border-[color:var(--line)] hover:border-[color:var(--brand)]/40'
                  }`}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label className="mb-2 block text-sm font-semibold text-[color:var(--text)] capitalize tracking-wide">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`contact-input w-full resize-none rounded-xl border-2 bg-transparent px-5 py-3 outline-none transition-all duration-300 ${
                    focusedField === 'message'
                      ? 'border-[color:var(--brand)] shadow-lg shadow-[color:var(--brand)]/20'
                      : 'border-[color:var(--line)] hover:border-[color:var(--brand)]/40'
                  }`}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="contact-submit-btn w-full mt-8 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status.loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.5 6h3m-7.5 6h3m6 0h3m-7.5 6h3M6.22 6.22l2.12 2.12m7.32 7.32l2.12 2.12m0-11.56l-2.12 2.12m-7.32 7.32l-2.12 2.12" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Status Message */}
              {status.text && (
                <div className={`mt-4 p-4 rounded-lg text-sm font-medium transition-all duration-300 animate-pulse ${
                  status.error
                    ? 'bg-red-500/20 text-red-600 border border-red-500/30'
                    : 'bg-green-500/20 text-green-600 border border-green-500/30'
                }`}>
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
