import { useState } from 'react'

const Certificates = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const certificates = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
      issuer: 'MyLearn (Oracle)',
      date: 'October 2025',
      credentialId: 'OCI-DS-2025',
      description: 'Professional certification in Oracle Cloud Infrastructure for data science workflows and cloud-based analytics.',
      image: '/oracle.png',
      credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1E3370AA1F4D8E5D48E86A646120B21FA0F8CDDED09C56B2B31C41B561905936',
    },
    {
      title: 'Deloitte Australia Data Analytics Job Simulation',
      issuer: 'Forage',
      date: 'June 2025',
      credentialId: 'DELOITTE-DA-2025',
      description: 'Completed a data analytics job simulation covering real-world business analytics scenarios and data-driven decision making.',
      image: '/deloitte.png',
      credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_H9q9AT2cWsjPJnDMi_1749268510861_completion_certificate.pdf',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'May 2025',
      credentialId: 'NPTEL-CC-2025',
      description: 'Comprehensive certification covering cloud computing fundamentals, architectures, and deployment models.',
      image: '/nptel.png',
      credentialUrl: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730104904254461.pdf',
    },
    {
      title: 'Responsive Web Design Certification',
      issuer: 'freeCodeCamp',
      date: 'October 2023',
      credentialId: 'FCC-RWD-2023',
      description: 'Certification in responsive design principles and modern layout techniques.',
      image: '/freecodecamp.png',
      credentialUrl: 'https://www.freecodecamp.org/certification/suhanitomar_123/responsive-web-design',
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

      {/* Mobile/Tablet Stacked Layout */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:hidden">
        {certificates.map((cert, index) => (
          <article 
            key={cert.credentialId} 
            className="glass-card reveal-up group relative z-0 flex flex-col p-4 transition-all duration-300 hover:z-10 hover:scale-[1.02]" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {cert.image && (
              <div className="certificate-image-wrapper relative mb-4 flex aspect-[4/3] items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/50">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="h-full w-full rounded-lg object-contain p-2 transition-all duration-300 ease-in-out group-hover:z-20 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-2xl"
                />
              </div>
            )}
            <div className="flex flex-grow flex-col">
              <h3 className="mb-1 text-base font-semibold text-[color:var(--text)] line-clamp-2">{cert.title}</h3>
              <p className="mb-2 text-sm font-semibold text-[color:var(--brand)]">{cert.issuer}</p>
              
              <div className="mb-4 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-wider">
                <span className="rounded-full border border-[color:var(--line)] px-2 py-0.5 text-[color:var(--muted)]">{cert.date}</span>
                <span className="rounded-full border border-[color:var(--line)] px-2 py-0.5 text-[color:var(--muted)]">{cert.credentialId}</span>
              </div>

              <div className="mt-auto">
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-secondary)] px-4 py-2 text-xs font-semibold text-[color:var(--text)] transition-all duration-300 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] hover:shadow-md"
                >
                  View Certificate
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop Accordion Layout */}
      <div 
        className="hidden lg:flex w-full h-[380px] gap-4" 
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {certificates.map((cert, index) => {
          const isActive = hoveredIndex === index;
          return (
            <div
              key={`accordion-${cert.credentialId}`}
              className={`group relative rounded-2xl transition-all duration-500 ease-in-out cursor-pointer ${
                hoveredIndex === null ? 'flex-1' : isActive ? 'flex-[4.5]' : 'flex-[0.8]'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Background Image & Accordion Dark Overlay (Standalone Pop-out mechanics) */}
              <div 
                className={`absolute inset-0 w-full h-full rounded-2xl transition-all duration-300 ease-in-out ${
                  hoveredIndex === null ? 'opacity-0 z-0' : 'opacity-100 z-0 hover:z-50 hover:scale-[1.15] hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                }`}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="h-full w-full object-cover rounded-2xl transition-transform duration-500" 
                />
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${isActive ? 'bg-black/10' : 'bg-black/70 backdrop-blur-[2px]'}`} />
              </div>

              {/* Standard Neutral View */}
              <div 
                className={`absolute inset-0 transition-all duration-500 ease-in-out z-20 glass-card bg-[color:var(--bg)] w-full h-full flex flex-col p-4 ${
                  hoveredIndex === null ? 'opacity-100 scale-100 delay-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {cert.image && (
                  <div className="relative mb-4 flex aspect-[4/3] w-full shrink-0 border items-center justify-center rounded-xl border-[color:var(--line)] bg-white/50 overflow-hidden">
                    <img src={cert.image} alt={cert.title} className="h-full w-full object-contain p-2" />
                  </div>
                )}
                <div className="flex flex-grow flex-col">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-[color:var(--text)] line-clamp-2">{cert.title}</h3>
                    <span className="font-display text-xl font-bold text-[color:var(--brand)]/50 shrink-0">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <p className="mb-2 text-sm font-semibold text-[color:var(--brand)]">{cert.issuer}</p>
                  <div className="flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-wider">
                    <span className="rounded-full border border-[color:var(--line)] px-2 py-0.5 text-[color:var(--muted)]">{cert.date}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 pointer-events-none">
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${hoveredIndex !== null && !isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
                   <span className="font-display text-4xl font-bold text-white/50">{(index + 1).toString().padStart(2, '0')}</span>
                </div>

                <div className={`relative flex flex-col border border-white/20 bg-black/60 p-6 backdrop-blur-md rounded-xl w-full transition-all duration-500 transform pointer-events-auto ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8 absolute bottom-5 left-5 right-5 w-auto pointer-events-none'}`}>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="line-clamp-2 text-xl font-bold text-white drop-shadow-md">{cert.title}</h3>
                      <span className="font-display text-3xl font-bold text-white/30 hidden xl:block">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <p className="mb-3 font-semibold text-[color:var(--brand-soft)]">{cert.issuer}</p>
                    {cert.description && (
                      <p className="mb-5 line-clamp-2 text-sm text-white/80">{cert.description}</p>
                    )}
                    <div className="mt-auto flex">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[color:var(--brand)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] pointer-events-auto"
                      >
                        View Certificate
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Certificates
