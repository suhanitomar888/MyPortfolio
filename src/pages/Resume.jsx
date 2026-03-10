const Resume = () => {
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
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-dark mb-4">
            My <span className="text-primary">Resume</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A summary of my education, training, and qualifications.
          </p>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-xl hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 hover:scale-105"
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

        {/* Education Section */}
        <div className="mb-12 animate-fadeIn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-600"
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
            <h2 className="text-2xl font-semibold text-dark">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-dark">{edu.degree}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{edu.duration}</span>
                </div>
                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-600 font-medium">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Training Section */}
        <div className="mb-12 animate-fadeIn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-purple-600"
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
            <h2 className="text-2xl font-semibold text-dark">Training</h2>
          </div>

          <div className="space-y-6">
            {training.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.duration}</span>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
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

        {/* Skills Summary */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500">
          <h3 className="text-lg font-semibold text-dark mb-4">Key Skills</h3>
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
                className="px-3 py-1.5 bg-blue-50 text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
