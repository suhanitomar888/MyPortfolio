const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack Web Development (MERN Stack)',
      issuer: 'ApnaCollege',
      date: 'November 2025',
      credentialId: 'APNA-MERN-2025',
      description: 'Comprehensive certification covering MongoDB, Express.js, React.js, and Node.js.',
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'iamneo',
      date: 'July 2025',
      credentialId: 'IAMNEO-DSA-2025',
      description: 'In-depth certification focused on problem solving and algorithm design.',
    },
    {
      title: 'Mastering C: Basic to Beyond',
      issuer: 'CSE Pathshala',
      date: 'May 2024',
      credentialId: 'CSE-C-2024',
      description: 'Complete C programming track from fundamentals to advanced concepts.',
    },
    {
      title: 'Responsive Web Design Certification',
      issuer: 'FreeCodeCamp',
      date: 'October 2023',
      credentialId: 'FCC-RWD-2023',
      description: 'Certification in responsive design principles and modern layout techniques.',
    },
  ]

  return (
    <section className="page-shell">
      <header className="reveal-up mb-12 text-center">
        <h1 className="section-title mb-3">Certificates</h1>
        <p className="section-copy mx-auto max-w-2xl">
          Credentials that reflect my commitment to structured learning and hands-on growth.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <article key={cert.credentialId} className="glass-card reveal-up p-6" style={{ animationDelay: `${index * 100}ms` }}>
            <h3 className="mb-1 text-lg font-semibold text-[color:var(--text)]">{cert.title}</h3>
            <p className="mb-2 text-sm font-semibold text-[color:var(--brand)]">{cert.issuer}</p>
            <p className="mb-4 text-sm text-[color:var(--muted)]">{cert.description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[color:var(--muted)]">{cert.date}</span>
              <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[color:var(--muted)]">{cert.credentialId}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
