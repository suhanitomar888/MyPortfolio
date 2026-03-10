import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'faiziyaansari@gmail.com', href: 'mailto:faiziyaansari@gmail.com' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Faiziya30', href: 'https://github.com/Faiziya30' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/faiziya-ansari', href: 'https://www.linkedin.com/in/faiziya-ansari/' },
    { icon: '📱', label: 'Phone', value: '+91-9644033984', href: 'tel:+919644033984' },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl font-bold text-dark mb-4">
            Contact <span className="text-primary">Me</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-dark">Get in Touch</h2>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">{info.icon}</span>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium text-dark group-hover:text-primary transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-semibold text-dark mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
