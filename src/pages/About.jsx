import { profile } from '../data/siteData'

const About = () => {
  const highlights = [
    { label: 'Projects Built', value: '3+' },
    { label: 'Certifications', value: '4+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Hackathons', value: '2+' },
  ]

  return (
    <section className="page-shell">
      <header className="reveal-up mb-12 text-center">
        <h1 className="section-title mb-3 text-5xl">About Me</h1>
        <p className="section-copy mx-auto max-w-2xl text-lg">
          Curiosity-driven data enthusiast focused on turning raw data into actionable insights and meaningful stories.
        </p>
      </header>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="reveal-up delay-1">
          <div className="about-image-card glass-card p-4 group relative">
            <div className="about-image-glow absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[color:var(--brand)]/20 blur-3xl group-hover:h-28 group-hover:w-28 group-hover:blur-[3rem] transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-[color:var(--line)]/50 group-hover:border-[color:var(--brand)]/50 transition-all duration-300">
              <img
                src={profile.photo}
                alt="Suhani Tomar"
                className="h-[28rem] w-full rounded-2xl object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        <div className="reveal-up delay-2 space-y-6">
          <h2 className="section-title text-3xl font-bold text-[color:var(--text)]">
            Passionate Data Science Enthusiast based in India
          </h2>
          <p className="section-copy text-base leading-relaxed">
            Data is messy — I like making sense of it.
          </p>
          <p className="section-copy text-base leading-relaxed">
            I’m a Computer Science student who enjoys working with data and building AI-driven solutions for real-world problems. I’m naturally curious and love uncovering patterns that others might miss.
          </p>
          <p className="section-copy text-base leading-relaxed">
            Most of what I’ve learned comes from building projects — from analysing datasets to creating machine learning models and interactive dashboards. I enjoy turning ideas into something practical and meaningful.
          </p>
          <p className="section-copy text-base leading-relaxed">
            Outside of academics, I’m always learning and experimenting, whether through hackathons, certifications, or trying out new tools and technologies.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="about-info-card glass-card p-5 transition-all duration-300 hover:border-[color:var(--brand)]/60 hover:shadow-lg hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--muted)] mb-2">Email</p>
              <p className="font-semibold text-sm text-[color:var(--text)] break-words">{profile.email}</p>
            </div>
            <div className="about-info-card glass-card p-5 transition-all duration-300 hover:border-[color:var(--brand)]/60 hover:shadow-lg hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--muted)] mb-2">Status</p>
              <p className="font-semibold text-[color:var(--brand)]">Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card glass-card p-6 text-center transition-all duration-400 hover:-translate-y-2 hover:shadow-lg cursor-pointer reveal-up"
              style={{ animationDelay: `${120 + index * 80}ms` }}
            >
              <p className="font-display mb-2 text-4xl font-extrabold bg-gradient-to-r from-[color:var(--brand)] to-[color:var(--brand-soft)] bg-clip-text text-transparent">{item.value}</p>
              <p className="text-sm font-medium text-[color:var(--muted)]">{item.label}</p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default About
