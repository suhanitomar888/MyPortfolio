const techIcons = {
  // Web Technologies
  'HTML': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 5l1.6 12L12 22l8.4-5L22 5m-2 2l-7.4-2L3.6 7m8.4 13L4.8 16l-1.3-9H20.5l-1.3 9-7.2 4" /></svg>,
  'CSS': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 5l1.6 12L12 22l8.4-5L22 5m-2 2l-7.4-2L3.6 7m8.4 13L4.8 16l-1.3-9H20.5l-1.3 9-7.2 4" /></svg>,

  // Libraries
  'Pandas': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16v14H4zm2 2v10h12V7zm2 2h8v2H8zm0 4h5v2H8z" /></svg>,
  'NumPy': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-4-4H9v-2h6v2zm0-4H9V9h6v2z" /></svg>,
  'Matplotlib': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-2-2L6 8v9h11v-2l-3 4-4-5-4 4z" /></svg>,
  'Seaborn': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H9V8h4c2.21 0 4 1.79 4 4s-1.79 4-4 4zm-2-2h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v4z" /></svg>,

  // Tools / Platforms
  'MySQL': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 3 5 3 7.5v9C3 19 7 21 12 21s9-2 9-4.5v-9C21 5 17 3 12 3zm0 3.5c4.4 0 7 1.6 7 2.5s-2.6 2.5-7 2.5-7-1.6-7-2.5S7.6 6.5 12 6.5zm0 13c-4.4 0-7-1.6-7-2.5v-3c2 1.3 4.5 2 7 2s5-.7 7-2v3c0 .9-2.6 2.5-7 2.5z" /></svg>,
  'Microsoft Excel': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm1 4v10h4v-2.5l2 2.5h3.5l-3-4 3-4H12l-2 2.5V7H6z" /></svg>,
  'Power BI': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 10h5v11H4zm6-6h5v17h-5zm6 4h5v13h-5z" /></svg>,
  'Tableau': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><circle cx="12" cy="4" r="2" /><circle cx="12" cy="20" r="2" /><circle cx="4" cy="12" r="2" /><circle cx="20" cy="12" r="2" /></svg>,
  'Machine Learning': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  'Hadoop': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M21 10.5C21 8 19 6 16.5 6c-1.5 0-2.8.7-3.6 1.8C12 7.3 11 7 10 7c-2.8 0-5 2.2-5 5H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v1h2v-1h2v1h2v-1h3c1.7 0 3-1.3 3-3V10.5z" /></svg>,

  // Soft Skills
  'Problem Solving': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3v-3z" /></svg>,
  'Team Collaboration': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>,
  'Adaptability': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" /></svg>,

  // Data Skills
  'Data Visualization': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" /></svg>,
  'Data Pre-processing': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" /></svg>,
  'EDA': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>,
  'Forecasting': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>,
  'Anomaly Detection': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>,

  // Languages
  'Python': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.25 21c-2.07 0-4.04-.3-4.48-1.52-.16-.43-.16-1.16-.16-1.99V16h4.51c.32 0 .58-.26.58-.58v-2.04c-.31-3.61-2.92-3.88-5.71-3.88H6.55c-1.38 0-2.43 1.05-2.43 2.43v1.89C4.12 15.2 4.41 18 6.48 18h1.2v.94c0 3.09 1.94 4.56 6.57 4.56 2.06 0 3.99-.29 4.44-1.5l-1.03-.54c-.21.57-1.42.79-3.41.79zm-7.7-16C8.61 5.3 10.02 5.09 12 5.09c2.07 0 4.04.3 4.48 1.52.16.43.16 1.16.16 1.99V10h-4.51c-.32 0-.58.26-.58.58v2.04c.31 3.61 2.92 3.88 5.71 3.88h2.44c1.38 0 2.43-1.05 2.43-2.43v-1.89c0-1.38-.29-4.18-2.36-4.18h-1.21v-.94C18.56 5.3 16.62 3.83 12 3.83 9.94 3.83 8.01 4.12 7.56 5.33l1.03.54c.21-.57 1.42-.79 3.41-.79h-5.45z" /></svg>,
  'Java': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-9h-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h4v1H9v2h4c1.1 0 2-.9 2-2v-4c0-.55-.45-1-1-1z" /></svg>,
  'C++': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 14v-4c0-1.1.9-2 2-2h4v2H8v4h4v2H8c-1.1 0-2-.9-2-2m6-1.5v-1h2v-2h1v2h2v1h-2v2h-1v-2h-2zm6 0v-1h2v-2h1v2h2v1h-2v2h-1v-2h-2z" /></svg>,
  'C': <svg className="w-4 h-4 mr-1.5 inline-block align-text-bottom text-[color:var(--brand)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.4 0 4.61-.85 6.32-2.28l-1.49-1.49C15.48 19.34 13.82 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.82 0 3.48.66 4.83 1.77l1.49-1.49C16.61 2.85 14.4 2 12 2z" /></svg>
}

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: ['C++', 'C', 'Python', 'Java'] },
    { title: 'Web Technologies', skills: ['HTML', 'CSS'] },
    { title: 'Libraries', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
    { title: 'Tools / Platforms', skills: ['MySQL', 'Microsoft Excel', 'Power BI', 'Tableau', 'Machine Learning', 'Hadoop'] },
    { title: 'Soft Skills', skills: ['Problem Solving', 'Team Collaboration', 'Adaptability'] },
    { title: 'Data Skills', skills: ['Data Visualization', 'Data Pre-processing', 'EDA', 'Forecasting', 'Anomaly Detection'] },
  ]

  return (
    <section className="page-shell">
      <header className="reveal-up mb-12 text-center">
        <h1 className="section-title mb-3 text-5xl">My Skills</h1>
        <p className="section-copy mx-auto max-w-2xl text-lg">
          A practical set of technologies and tools I use to analyze data, build models, and create insightful visualizations.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <article
            key={category.title}
            className="skills-card glass-card reveal-up p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl cursor-default group"
            style={{ animationDelay: `${120 + index * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="category-icon w-10 h-10 rounded-lg bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-strong)] flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                {category.title[0]}
              </div>
              <h3 className="font-display text-xl font-bold text-[color:var(--text)] group-hover:text-[color:var(--brand)] transition-colors duration-300">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="skill-badge rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-semibold text-[color:var(--muted)] flex items-center transition-all duration-300 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] hover:bg-[color:var(--brand)]/5 hover:scale-110 hover:-translate-y-1"
                  style={{ transitionDelay: `${skillIndex * 30}ms` }}
                >
                  {techIcons[skill] ? techIcons[skill] : null}
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
