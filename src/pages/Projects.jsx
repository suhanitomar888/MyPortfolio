import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Credit Profit System',
      description:
        'A full-stack E-commerce Credit Profile System enabling users to create credit profiles and track purchase history. Features secure authentication, product browsing, cart management, and credit-based purchase tracking with RESTful APIs.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Faiziya30',
      liveUrl: '#',
    },
    {
      title: 'SmartPDF Insight',
      description:
        'A user-friendly PDF analysis web app to simplify document upload, preview, and insight extraction. Helps students and professionals quickly analyze long PDFs, improving productivity and reducing manual reading time.',
      techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML'],
      githubUrl: 'https://github.com/Faiziya30',
      liveUrl: '#',
    },
    {
      title: 'Ballistic Recognition Tool',
      description:
        'A digital ballistic analysis platform to streamline case tracking and evidence management. Features evidence upload, automated matching workflows, and complete user journey from registration to analysis.',
      techStack: ['React.js', 'JavaScript', 'CSS', 'HTML', 'PHP'],
      githubUrl: 'https://github.com/Faiziya30',
      liveUrl: '#',
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl font-bold text-dark mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Faiziya30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark text-white font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
