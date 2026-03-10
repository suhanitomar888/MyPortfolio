import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fadeIn">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div 
                className="relative w-40 h-40 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 shadow-lg ring-4 ring-white flex items-center justify-center overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-3"
                style={{ width: '160px', height: '160px' }}
              >
                {/* Girl Clipart SVG */}
                <svg viewBox="0 0 200 200" className="w-36 h-36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Hair */}
                  <ellipse cx="100" cy="85" rx="55" ry="60" fill="#4A3728"/>
                  <path d="M45 85 Q45 140 70 160 Q60 120 55 85" fill="#4A3728"/>
                  <path d="M155 85 Q155 140 130 160 Q140 120 145 85" fill="#4A3728"/>
                  {/* Face */}
                  <ellipse cx="100" cy="95" rx="40" ry="45" fill="#FDBCB4"/>
                  {/* Eyes */}
                  <ellipse cx="85" cy="90" rx="8" ry="5" fill="#4A3728"/>
                  <ellipse cx="115" cy="90" rx="8" ry="5" fill="#4A3728"/>
                  <circle cx="87" cy="89" r="2" fill="white"/>
                  <circle cx="117" cy="89" r="2" fill="white"/>
                  {/* Eyebrows */}
                  <path d="M75 82 Q85 78 93 82" stroke="#4A3728" strokeWidth="2" fill="none"/>
                  <path d="M107 82 Q115 78 125 82" stroke="#4A3728" strokeWidth="2" fill="none"/>
                  {/* Nose */}
                  <path d="M100 95 Q103 102 100 105" stroke="#E8A090" strokeWidth="2" fill="none"/>
                  {/* Smile */}
                  <path d="M88 115 Q100 125 112 115" stroke="#D4736A" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  {/* Blush */}
                  <ellipse cx="72" cy="105" rx="8" ry="5" fill="#FFB6C1" opacity="0.5"/>
                  <ellipse cx="128" cy="105" rx="8" ry="5" fill="#FFB6C1" opacity="0.5"/>
                  {/* Neck */}
                  <rect x="90" y="135" width="20" height="20" fill="#FDBCB4"/>
                  {/* Shirt */}
                  <path d="M70 155 Q100 145 130 155 L140 200 L60 200 Z" fill="#3B82F6"/>
                  <path d="M85 155 Q100 165 115 155" fill="#2563EB"/>
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center animate-bounce">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4 animate-slideIn">
            Faiziya <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ansari</span>
          </h1>

          {/* Role */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-medium">Full Stack Developer</span>
          </div>

          {/* Introduction */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            B.Tech CSE student at Lovely Professional University passionate about Full Stack Development. 
            I specialize in building modern web applications using MERN stack with expertise in 
            React.js, Node.js, and MongoDB. Always eager to learn and solve complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 hover:scale-105"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-dark font-medium rounded-xl border-2 border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-16">
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JavaScript'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-600 shadow-sm border border-gray-100 hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
