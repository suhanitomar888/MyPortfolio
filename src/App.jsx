import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Activities from './pages/Activities'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealElements = Array.from(document.querySelectorAll('.reveal-up'))

    if (!revealElements.length) {
      return undefined
    }

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    if (typeof IntersectionObserver === 'undefined') {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
    )

    const rafId = requestAnimationFrame(() => {
      revealElements.forEach((element) => observer.observe(element))
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [location.pathname])

  const isDark = useMemo(() => theme === 'dark', [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
