function getDarkModePreference(): boolean {
  if (typeof localStorage === 'undefined') return false
  const stored = localStorage.getItem('theme-mode')
  if (stored) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function setDarkModePreference(isDark: boolean): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem('theme-mode', isDark ? 'dark' : 'light')
}

function SiteHeader({
  isDarkMode,
  onToggleTheme,
}: {
  isDarkMode: boolean
  onToggleTheme: () => void
}) {
  return (
    <header className="topbar">
      <Link className="brand" to="/">
        Wright Franklin
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          <li>
            <NavLink end className={({ isActive }) => (isActive ? 'active' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/activism"
            >
              Activism
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/photography"
            >
              Photography
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Light mode' : 'Dark mode'}
      >
        <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
      </button>
    </header>
  )
}
import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { BlogIndexPage, BlogPostPage } from './pages'
import ActivismPage from './pages/ActivismPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PhotographyPage from './pages/PhotographyPage'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => getDarkModePreference())

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark')
    } else {
      htmlElement.setAttribute('data-theme', 'light')
    }
    setDarkModePreference(isDarkMode)
  }, [isDarkMode])

  return (
    <div className="site-shell">
      <SiteHeader
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="content-area">
        <div className="page-frame">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/activism" element={<ActivismPage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
