import { profile } from '../data/siteData'
import { useState } from 'react'
import { downloadResume } from '../utils/downloadResume'

const Resume = () => {
  const [resumeError, setResumeError] = useState('')

  const handleResumeDownload = async () => {
    setResumeError('')
    const downloaded = await downloadResume(profile.resume, profile.resumeFileName)

    if (!downloaded) {
      setResumeError('Resume file not found yet. Add resume.pdf in public/ to enable download.')
    }
  }

  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      institution: 'Lovely Professional University, Phagwara, Punjab',
      duration: 'August 2023 - Present',
      grade: 'CGPA: 8.49',
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'Shri Kanwartara Public Higher Secondary School, Khargone, MP',
      duration: 'March 2023',
      grade: 'Percentage: 82.4%',
    },
    {
      degree: 'Matriculation (10th)',
      institution: 'Shri Kanwartara Public Higher Secondary School, Khargone, MP',
      duration: 'March 2021',
      grade: 'Percentage: 92.6%',
    },
  ]

  const training = [
    {
      title: 'AlgoTutor - Summer Training Program on DSA',
      duration: 'July 2025',
      points: [
        'Enhanced ability to analyze problems logically and choose the most efficient solution approach',
        'Improved confidence in tackling complex DSA questions through consistent practice',
        'Strengthened competitive programming skills for faster reasoning and cleaner code',
      ],
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

          <button
            type="button"
            onClick={handleResumeDownload}
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
          </button>
          {resumeError && <p className="mt-3 text-sm text-[color:var(--brand-strong)]">{resumeError}</p>}
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
                className="glass-card p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[color:var(--text)]">{edu.degree}</h3>
                  <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-sm text-[color:var(--muted)]">{edu.duration}</span>
                </div>
                <p className="mb-1 font-medium text-[color:var(--brand)]">{edu.institution}</p>
                <p className="text-sm font-medium text-[color:var(--muted)]">{edu.grade}</p>
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
                <ul className="space-y-2">
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
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-[color:var(--text)]">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'C++',
              'JavaScript',
              'React.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'MySQL',
              'Tailwind CSS',
              'Git',
              'GitHub',
              'Docker',
              'REST APIs',
              'DSA',
              'OOPS',
            ].map((skill, index) => (
              <span
                key={index}
                className="rounded-lg border border-[color:var(--line)] px-3 py-1.5 text-sm font-medium text-[color:var(--muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
