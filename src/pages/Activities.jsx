const Activities = () => {
  const activities = [
    {
      title: 'Adobe India Hackathon',
      type: 'Hackathon',
      date: 'October 2025',
      description:
        'Qualified for Round 2 — Build and Connect Round of the Adobe India Hackathon, representing LPU as Team Stack Overflow. Demonstrated strong problem-solving and teamwork skills.',
      achievement: 'Round 2 Qualifier',
      icon: '🏆',
    },
    {
      title: 'Flipkart Runway: Season 5',
      type: 'Coding Competition',
      date: 'March 2025',
      description:
        'Advanced through the Online Assessment stage of Flipkart Runway Season 5, demonstrating strong problem-solving and algorithmic skills in a competitive environment.',
      achievement: 'OA Cleared',
      icon: '🛒',
    },
    {
      title: 'AlgoTutor - DSA Training Program',
      type: 'Training',
      date: 'July 2025',
      description:
        'Completed intensive summer training program on Data Structures and Algorithms. Enhanced ability to analyze problems logically and improved competitive programming skills.',
      achievement: 'Certificate of Completion',
      icon: '📚',
    },
    {
      title: 'Full Stack Development Journey',
      type: 'Learning',
      date: 'Ongoing',
      description:
        'Continuously learning and building projects using MERN stack. Actively practicing on platforms like LeetCode and participating in coding contests.',
      achievement: 'Self-Driven Learning',
      icon: '💻',
    },
  ]

  const getTypeColor = (type) => {
    const colors = {
      Hackathon: 'bg-purple-100 text-purple-700',
      'Coding Competition': 'bg-blue-100 text-blue-700',
      'Open Source': 'bg-green-100 text-green-700',
      Speaking: 'bg-orange-100 text-orange-700',
      Workshop: 'bg-pink-100 text-pink-700',
    }
    return colors[type] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl font-bold text-dark mb-4">
            My <span className="text-primary">Activities</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond coding, I actively participate in hackathons, coding competitions, and community
            events to grow and give back.
          </p>
        </div>

        {/* Activities Timeline */}
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0">{activity.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-dark">{activity.title}</h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(
                        activity.type
                      )}`}
                    >
                      {activity.type}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">{activity.description}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {activity.date}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      {activity.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Hackathons', value: '2+' },
            { label: 'Projects Built', value: '3+' },
            { label: 'Certifications', value: '4+' },
            { label: 'Technologies', value: '15+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm"
            >
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Activities
