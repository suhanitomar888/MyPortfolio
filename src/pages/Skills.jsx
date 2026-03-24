const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'] },
    { title: 'Database', skills: ['MongoDB', 'MySQL', 'DBMS'] },
    { title: 'Languages', skills: ['C++', 'JavaScript', 'C'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Docker'] },
    { title: 'Core Concepts', skills: ['DSA', 'OOPS', 'Operating Systems', 'Networking', 'Generative AI'] },
  ]

  return (
    <section className="page-shell">
      <header className="reveal-up mb-12 text-center">
        <h1 className="section-title mb-3 text-5xl">My Skills</h1>
        <p className="section-copy mx-auto max-w-2xl text-lg">
          A practical set of technologies I use to build polished and production-ready solutions.
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
                  className="skill-badge rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-semibold text-[color:var(--muted)] transition-all duration-300 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] hover:bg-[color:var(--brand)]/5 hover:scale-110 hover:-translate-y-1"
                  style={{ transitionDelay: `${skillIndex * 30}ms` }}
                >
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
