import { useState } from 'react'

const Resume = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleEducation = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      institution: 'Lovely Professional University, Phagwara, Punjab',
      duration: 'Aug 2023 - Present',
      grade: 'CGPA: 7.1',
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'Silver Bells School, Gwalior, Madhya Pradesh',
      duration: 'Apr 2022 - Mar 2023',
      grade: 'Percentage: 66',
    },
    {
      degree: 'Matriculation (10th)',
      institution: 'Delhi Public School, Hisar, Haryana',
      duration: 'Apr 2020 - Mar 2021',
      grade: 'Percentage: 87.4',
    },
  ]

  const training = [
    {
      title: 'From Data to Decision: A Hands-On Approach to Data Science | LPU',
      duration: 'Jun 2025 - Jul 2025',
      points: [
        'Completed an intensive summer training focused on applying data science concepts to real-world datasets, covering the full analytics pipeline from data extraction to predictive modeling.',
        'Strengthened practical skills in data cleaning, exploratory data analysis, dashboard development, and predictive modeling, with a strong emphasis on interpreting data and communicating insights.',
        'Tech: SQL, Microsoft Excel, Power BI, Python Libraries, Machine Learning Models',
      ],
      credentialUrl: 'https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12318295_846_20_08_2025.pdf?_gl=1*z9o2uq*_gcl_au*NzYyNDU2OS4xNzczMTU1MDAx',
    },
  ]

  return (
    <section className="page-shell">
      <div className="mx-auto max-w-4xl">
        <div className="reveal-up mb-12 text-center">
          <h1 className="section-title mb-3">My Resume</h1>
          <p className="section-copy mx-auto mb-8 max-w-2xl">
            A summary of my education, training, and qualifications.
          </p>

          <a
            href="/GeneralCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume (PDF)
          </a>
        </div>

        <div className="reveal-up mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="glass-card flex h-10 w-10 items-center justify-center rounded-lg">
              <svg
                className="w-5 h-5 text-[color:var(--brand)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--text)]">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-6 cursor-pointer select-none"
                onClick={() => toggleEducation(index)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[color:var(--text)]">{edu.degree}</h3>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-sm text-[color:var(--muted)]">{edu.duration}</span>
                    <span className="text-sm text-[color:var(--muted)] transition-transform duration-300" style={{ display: 'inline-block', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                  </div>
                </div>
                <p className="mb-1 font-medium text-[color:var(--brand)]">{edu.institution}</p>
                <div
                  style={{
                    maxHeight: openIndex === index ? '60px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease, opacity 0.3s ease',
                  }}
                >
                  <p className="text-sm font-medium text-[color:var(--muted)] mt-2">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="glass-card flex h-10 w-10 items-center justify-center rounded-lg">
              <svg
                className="w-5 h-5 text-[color:var(--brand)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--text)]">Training</h2>
          </div>

          <div className="space-y-6">
            {training.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
                  <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-sm text-[color:var(--muted)]">{item.duration}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                {item.credentialUrl && (
                  <div className="mt-2 text-left">
                    <a 
                      href={item.credentialUrl} 
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
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Resume
