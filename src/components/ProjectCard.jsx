import { useState } from 'react'

const ProjectCard = ({ index, title, description, techStack, githubUrl, liveUrl, previewUrl, image }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [showImage, setShowImage] = useState(Boolean(image))

  const safeLiveUrl = liveUrl && liveUrl !== '#' ? liveUrl : githubUrl
  const safePreviewUrl = previewUrl && previewUrl !== '#' ? previewUrl : safeLiveUrl

  return (
    <>
      <article className="project-card glass-card group flex h-full flex-col overflow-hidden p-6 transition-all duration-400">
        <div className="project-card-head mb-4 flex items-center justify-between">
          <span className="project-index">{String(index || '').padStart(2, '0')}</span>
          <span className="project-tagline">Featured build</span>
        </div>
        <div className="project-image-wrapper mb-4 flex h-44 items-center justify-center rounded-xl border border-[color:var(--line)] bg-gradient-to-br from-[color:var(--bg)] to-[color:var(--bg-secondary)] overflow-hidden relative">
          {showImage ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full rounded-xl object-cover transition-transform duration-500"
              onError={() => setShowImage(false)}
            />
          ) : (
            <svg className="h-14 w-14 text-[color:var(--brand)]/50 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )}
        </div>

        <h3 className="font-display mb-2 text-xl font-bold text-[color:var(--text)] transition-colors duration-300 group-hover:text-[color:var(--brand)]">
          {title}
        </h3>
        <p className="mb-4 text-sm text-[color:var(--muted)] line-clamp-3 transition-all duration-300">
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="tech-badge rounded-full border border-[color:var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--muted)] transition-all duration-300 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn btn-secondary flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={safeLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn btn-primary flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span className="hidden sm:inline">Live</span>
          </a>
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="project-btn btn-secondary rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            <span className="hidden sm:inline">Preview</span>
            <span className="sm:hidden inline-flex items-center justify-center">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14.25A2.25 2.25 0 1012 9.75a2.25 2.25 0 000 4.5z" />
              </svg>
            </span>
          </button>
        </div>
      </article>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="glass-card w-full max-w-xl p-6 animate-scale-in" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-start justify-between gap-4">
              <h4 className="font-display text-2xl font-bold text-[color:var(--text)]">{title}</h4>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="rounded-lg border border-[color:var(--line)] px-3 py-1 text-sm text-[color:var(--muted)] transition-all duration-200 hover:bg-[color:var(--line)] hover:text-[color:var(--text)]"
              >
                Close
              </button>
            </div>
            <p className="mb-5 text-[color:var(--muted)]">{description}</p>
            <div className="mb-5 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--muted)]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 rounded-lg px-4 py-2 text-center text-sm font-medium transition-all duration-300 hover:shadow-lg"
              >
                View on GitHub
              </a>
              <a
                href={safePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 rounded-lg px-4 py-2 text-center text-sm font-medium transition-all duration-300 hover:shadow-lg"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
