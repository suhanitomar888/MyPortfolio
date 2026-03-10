const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack Web Development (MERN Stack)',
      issuer: 'ApnaCollege',
      date: 'November 2025',
      credentialId: 'APNA-MERN-2025',
      description:
        'Comprehensive certification covering MongoDB, Express.js, React.js, and Node.js for full stack development.',
      icon: '🎓',
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'iamneo',
      date: 'July 2025',
      credentialId: 'IAMNEO-DSA-2025',
      description:
        'In-depth certification covering data structures, algorithms, and problem-solving techniques.',
      icon: '📊',
    },
    {
      title: 'Mastering C: Basic to Beyond',
      issuer: 'CSE Pathshala',
      date: 'May 2024',
      credentialId: 'CSE-C-2024',
      description:
        'Complete C programming certification from fundamentals to advanced concepts.',
      icon: '💻',
    },
    {
      title: 'Responsive Web Design Certification',
      issuer: 'FreeCodeCamp',
      date: 'October 2023',
      credentialId: 'FCC-RWD-2023',
      description:
        'Certification in responsive web design, HTML, CSS, and modern layout techniques.',
      icon: '📱',
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl font-bold text-dark mb-4">
            My <span className="text-primary">Certificates</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and courses that validate my skills and commitment to
            continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="text-4xl">{cert.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark mb-1">{cert.title}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-500">
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
                      {cert.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
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
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-dark mb-1">Verification</h4>
              <p className="text-gray-600 text-sm">
                All certificates can be verified through their respective issuing platforms using the
                credential IDs provided above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates
