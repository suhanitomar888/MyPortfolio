import { useState, useEffect } from 'react'
import { profile } from '../data/siteData'

const Home = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const roles = ['Data Analyst', 'ML Engineer', 'Data Scientist']

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => clearInterval(ticker)
  }, [text, isDeleting, loopNum, typingSpeed])

  const tick = () => {
    let i = loopNum % roles.length
    let fullText = roles[i]

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setTypingSpeed(50)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTypingSpeed(1000)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(100)
    }
  }

  return (
    <section className="page-shell">
      <div className="home-cinematic-grid grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal-up">
          <div className="social-strip mb-6 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-strip-item">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-strip-item">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 003.28 4.97 1.97 1.97 0 005.25 6.94a1.97 1.97 0 001.97-1.97A1.97 1.97 0 005.25 3zm14.69 9.9c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.63 1-3.09 1.7V8.5H9.52c.05.98 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.91-1.39 1.35 0 1.89 1.03 1.89 2.54V20h3.38v-7.1z" />
              </svg>
            </a>
            <span className="social-strip-line" />
            <span className="status-badge inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--muted)]">
              <span className="brand-dot" />
              Open for internships and full-time roles
            </span>
          </div>
          <h1 className="section-title mb-3 text-[color:var(--text)] hero-title">
            I turn data into intelligent solutions using AI & analytics
          </h1>
          <h2 className="hero-name font-display mb-2 text-3xl font-extrabold text-[color:var(--brand)]">
            {profile.name}
          </h2>
          <div className="mb-8 font-display text-xl font-medium text-[color:var(--brand-soft)] h-7">
            {text}
          </div>

          <div className="cta-buttons flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/GeneralCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="reveal-up delay-2 flex justify-center lg:justify-end">
          <div className="profile-card home-visual-shell glass-card float-soft relative w-full max-w-sm p-4 overflow-hidden group">
            <div className="home-orb home-orb-a" />
            <div className="home-orb home-orb-b" />
            <div className="home-chip home-chip-1">Data Science</div>
            <div className="home-chip home-chip-2">Analytics</div>

            <div className="profile-image-frame relative rounded-2xl overflow-hidden border border-[color:var(--line)]/50 group-hover:border-[color:var(--brand)]/50 transition-all duration-300">
              <img
                src="/Pic.jpeg"
                alt="Suhani Tomar"
                className="h-[28rem] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand)]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
