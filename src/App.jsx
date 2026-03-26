import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Activities from './pages/Activities'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
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
  }, [])

  const isDark = useMemo(() => theme === 'dark', [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="site-shell flex min-h-screen flex-col">
      <ParticlesBackground />
      <CustomCursor />
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="flex-grow flex flex-col gap-24 py-16">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="certificates"><Certificates /></div>
        <div id="activities"><Activities /></div>
        <div id="resume"><Resume /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
