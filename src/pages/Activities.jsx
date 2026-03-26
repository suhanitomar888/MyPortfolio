const Activities = () => {
  const activities = [
    {
      title: 'Participated in Concoction 2024 – Intra-University Tech Fusion Hackathon',
      date: 'March 2024',
      description: 'Collaborated in a team to build innovative tech solutions at the LPU intra-university hackathon, working across disciplines.',
      achievement: 'View Certificate',
      link: '/Hackathon.png',
    },
    {
      title: 'Secured 2nd place in a Case-Based Presentation Competition',
      date: 'April 2024',
      description: 'Presented a case-based analytical solution at Lovely Professional University, demonstrating strong problem-solving and data-driven presentation skills.',
      achievement: '2nd Place Winner',
    },
    {
      title: 'Data Science & Analytics Journey',
      date: 'Ongoing',
      description: 'Continuously building with Python, Power BI, Machine Learning, and practicing through real-world data projects and certifications.',
      achievement: 'Self-Driven Learning',
    },
  ]

  return (
    <section className="page-shell">
      <header className="reveal-up mb-12 text-center">
        <h1 className="section-title mb-3">Learning & Experiences</h1>
        <p className="section-copy mx-auto max-w-2xl">
          Hackathons, competitions, and focused learning moments that shape how I approach data and build solutions.
        </p>
      </header>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <article key={activity.title} className="glass-card reveal-up p-6" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{activity.title}</h3>
              <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--muted)]">{activity.date}</span>
            </div>
            <p className="my-3 text-sm text-[color:var(--muted)]">{activity.description}</p>
            {activity.link ? (
              <a 
                href={activity.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-[color:var(--brand)] hover:underline inline-flex items-center gap-1 group"
              >
                {activity.achievement}
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <span className="text-sm font-semibold text-[color:var(--brand)]">{activity.achievement}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Activities
