const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'],
      color: 'green',
    },
    {
      title: 'Database',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ['MongoDB', 'MySQL', 'DBMS'],
      color: 'purple',
    },
    {
      title: 'Languages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['C++', 'JavaScript', 'C'],
      color: 'orange',
    },
    {
      title: 'Tools & Platforms',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Git', 'GitHub', 'VS Code', 'Docker'],
      color: 'pink',
    },
    {
      title: 'Other Skills',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: ['DSA', 'OOPS', 'Operating Systems', 'Networking', 'Generative AI'],
      color: 'blue',
    },
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      icon: 'text-blue-600',
      tag: 'bg-blue-100 text-blue-700',
      hover: 'hover:border-blue-300',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-100',
      icon: 'text-green-600',
      tag: 'bg-green-100 text-green-700',
      hover: 'hover:border-green-300',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      icon: 'text-purple-600',
      tag: 'bg-purple-100 text-purple-700',
      hover: 'hover:border-purple-300',
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-100',
      icon: 'text-orange-600',
      tag: 'bg-orange-100 text-orange-700',
      hover: 'hover:border-orange-300',
    },
    pink: {
      bg: 'bg-pink-50',
      border: 'border-pink-100',
      icon: 'text-pink-600',
      tag: 'bg-pink-100 text-pink-700',
      hover: 'hover:border-pink-300',
    },
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl font-bold text-dark mb-4">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color]
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl p-6 border ${colors.border} ${colors.hover} shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] animate-fadeIn`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.icon} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 ${colors.tag} text-sm font-medium rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-dark mb-6 text-center">
            Always Learning & Growing
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Technology is constantly evolving, and so am I. I'm committed to continuous learning and 
            staying updated with the latest trends and best practices in web development. Currently 
            exploring Docker, Kubernetes, and AWS services to expand my DevOps capabilities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
