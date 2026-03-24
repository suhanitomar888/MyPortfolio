const Activities = () => {
  const activities = [
    {
      title: 'Adobe India Hackathon',
      date: 'October 2025',
      description: 'Qualified for Round 2 and represented LPU as Team Stack Overflow.',
      achievement: 'Round 2 Qualifier',
    },
    {
      title: 'Flipkart Runway: Season 5',
      date: 'March 2025',
      description: 'Cleared the online assessment through strong algorithmic performance.',
      achievement: 'OA Cleared',
    },
    {
      title: 'AlgoTutor DSA Training Program',
      date: 'July 2025',
      description: 'Completed intensive DSA training with regular competitive problem solving.',
      achievement: 'Certificate of Completion',
    },
    {
      title: 'Full Stack Development Journey',
      date: 'Ongoing',
      description: 'Continuously building with MERN stack and practicing through coding platforms.',
      achievement: 'Self-Driven Learning',
    },
  ]

  return (
    <section className="page-shell">
      <header className="reveal-up mb-12 text-center">
        <h1 className="section-title mb-3">Activities</h1>
        <p className="section-copy mx-auto max-w-2xl">
          Hackathons, competitions, and focused learning moments that shape how I build products.
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
            <span className="text-sm font-semibold text-[color:var(--brand)]">{activity.achievement}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Activities
