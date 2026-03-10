const About = () => {
  const highlights = [
    { label: 'Projects Built', value: '3+' },
    { label: 'Certifications', value: '4+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Hackathons', value: '2+' },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl font-bold text-dark mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="animate-slideIn">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
              <div className="relative rounded-2xl shadow-xl w-full bg-gradient-to-br from-pink-50 to-purple-100 p-8 flex items-center justify-center min-h-[400px] transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Girl Developer Clipart */}
                <svg viewBox="0 0 300 350" className="w-full max-w-[280px] h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Laptop */}
                  <rect x="80" y="220" width="140" height="90" rx="5" fill="#374151"/>
                  <rect x="90" y="230" width="120" height="70" rx="2" fill="#60A5FA"/>
                  <rect x="95" y="235" width="50" height="8" rx="1" fill="#34D399"/>
                  <rect x="95" y="248" width="70" height="6" rx="1" fill="#FCD34D"/>
                  <rect x="95" y="259" width="40" height="6" rx="1" fill="#F472B6"/>
                  <rect x="95" y="270" width="60" height="6" rx="1" fill="#A78BFA"/>
                  <rect x="60" y="310" width="180" height="8" rx="2" fill="#6B7280"/>
                  
                  {/* Hair Back */}
                  <ellipse cx="150" cy="100" rx="70" ry="75" fill="#4A3728"/>
                  <path d="M80 100 Q75 180 100 220 Q90 160 85 100" fill="#4A3728"/>
                  <path d="M220 100 Q225 180 200 220 Q210 160 215 100" fill="#4A3728"/>
                  
                  {/* Neck */}
                  <rect x="135" y="155" width="30" height="35" fill="#FDBCB4"/>
                  
                  {/* Body/Shirt */}
                  <path d="M100 190 Q150 175 200 190 L220 320 L80 320 Z" fill="#3B82F6"/>
                  <path d="M120 190 Q150 205 180 190" fill="#2563EB"/>
                  
                  {/* Arms */}
                  <path d="M100 195 Q60 230 75 270 Q80 250 95 240" fill="#FDBCB4"/>
                  <path d="M200 195 Q240 230 225 270 Q220 250 205 240" fill="#FDBCB4"/>
                  
                  {/* Hands on laptop */}
                  <ellipse cx="95" cy="255" rx="18" ry="12" fill="#FDBCB4"/>
                  <ellipse cx="205" cy="255" rx="18" ry="12" fill="#FDBCB4"/>
                  
                  {/* Face */}
                  <ellipse cx="150" cy="110" rx="50" ry="55" fill="#FDBCB4"/>
                  
                  {/* Hair Front */}
                  <path d="M100 75 Q150 50 200 75 Q200 60 150 55 Q100 60 100 75" fill="#4A3728"/>
                  <path d="M100 80 Q110 95 105 110" stroke="#4A3728" strokeWidth="8" fill="none"/>
                  
                  {/* Glasses */}
                  <rect x="115" y="98" width="25" height="20" rx="3" stroke="#374151" strokeWidth="2" fill="none"/>
                  <rect x="160" y="98" width="25" height="20" rx="3" stroke="#374151" strokeWidth="2" fill="none"/>
                  <line x1="140" y1="108" x2="160" y2="108" stroke="#374151" strokeWidth="2"/>
                  
                  {/* Eyes */}
                  <ellipse cx="127" cy="108" rx="6" ry="4" fill="#4A3728"/>
                  <ellipse cx="173" cy="108" rx="6" ry="4" fill="#4A3728"/>
                  <circle cx="129" cy="107" r="1.5" fill="white"/>
                  <circle cx="175" cy="107" r="1.5" fill="white"/>
                  
                  {/* Eyebrows */}
                  <path d="M115 95 Q127 90 138 95" stroke="#4A3728" strokeWidth="2" fill="none"/>
                  <path d="M162 95 Q173 90 185 95" stroke="#4A3728" strokeWidth="2" fill="none"/>
                  
                  {/* Nose */}
                  <path d="M150 115 Q153 125 150 130" stroke="#E8A090" strokeWidth="2" fill="none"/>
                  
                  {/* Smile */}
                  <path d="M135 143 Q150 155 165 143" stroke="#D4736A" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  
                  {/* Blush */}
                  <ellipse cx="115" cy="130" rx="10" ry="6" fill="#FFB6C1" opacity="0.4"/>
                  <ellipse cx="185" cy="130" rx="10" ry="6" fill="#FFB6C1" opacity="0.4"/>
                  
                  {/* Code sparkles */}
                  <text x="170" y="250" fill="#FCD34D" fontSize="16" fontWeight="bold">&lt;/&gt;</text>
                  <circle cx="230" y="200" r="4" fill="#F472B6"/>
                  <circle cx="70" y="200" r="3" fill="#60A5FA"/>
                  <circle cx="250" y="250" r="3" fill="#34D399"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-semibold text-dark hover:text-primary transition-colors duration-300">
              A Passionate Full Stack Developer Based in India
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p className="hover:translate-x-1 transition-transform duration-300">
                Hello! I'm Faiziya Ansari, a B.Tech Computer Science student at Lovely Professional University 
                with a strong foundation in Full Stack Development. My journey in tech started with a curiosity 
                to build solutions that make a difference.
              </p>
              
              <p>
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with 
                C++, JavaScript, and various modern frameworks. I've built projects like E-commerce platforms, 
                PDF analysis tools, and more. I believe in writing clean, efficient code.
              </p>
              
              <p>
                I actively participate in hackathons like Adobe India Hackathon and Flipkart Runway, 
                and constantly improve my DSA skills. I'm always eager to learn new technologies 
                and take on challenging projects.
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium text-dark">Faiziya Ansari</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-dark">faiziyaansari@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-dark">India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium text-green-600">Available for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
