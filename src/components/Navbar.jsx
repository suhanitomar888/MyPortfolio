import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ isDark, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Activities', path: '/activities' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 navbar-wrapper">
      <div className="mx-auto flex h-16 w-[min(1120px,92vw)] items-center justify-between">
        <NavLink to="/" className="brand-mark" aria-label="Go to home">
          <span className="brand-mark-core" />
          <span className="brand-mark-ring" />
        </NavLink>

        <div className="desktop-nav-shell hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={({ isActive }) =>
                `nav-link relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'nav-link-active'
                    : hoveredLink === link.name
                    ? 'nav-link-hover'
                    : 'text-[color:var(--muted)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && <span className="nav-link-underline absolute bottom-0 left-0 right-0 h-0.5" />}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] text-[color:var(--text)] transition-all duration-500"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="h-5 w-5 theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v2.25M12 18.75V21M4.95 4.95l1.591 1.591M17.459 17.459l1.591 1.591M3 12h2.25M18.75 12H21M4.95 19.05l1.591-1.591M17.459 6.541l1.591-1.591M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12.79A9 9 0 1111.21 3c-.008.16-.012.32-.012.48A9 9 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="menu-toggle rounded-xl border border-[color:var(--line)] p-2 text-[color:var(--text)] transition-all duration-300 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu overflow-hidden border-t border-[color:var(--line)] transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-link block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[color:var(--brand)] to-[color:var(--brand-strong)] text-white shadow-lg shadow-[color:var(--brand)]/25'
                    : 'text-[color:var(--muted)] hover:bg-[color:var(--line)] hover:text-[color:var(--text)]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
