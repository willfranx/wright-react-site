import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { blockComponents } from './content/siteComponents'
import { BlogIndexPage, BlogPostPage } from './pages'
import ActivismPage from './pages/ActivismPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PhotographyPage from './pages/PhotographyPage'

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

function navClassName(isActive: boolean): string {
  return isActive
    ? `${blockComponents.navLink} ${blockComponents.navLinkActive}`
    : blockComponents.navLink
}

function SiteHeader({
  isDarkMode,
  onToggleTheme,
}: {
  isDarkMode: boolean
  onToggleTheme: () => void
}) {
  return (
    <header className={blockComponents.topbar}>
      <Link className={blockComponents.brand} to="/">
        Wright Franklin
      </Link>

      <nav aria-label="Primary navigation">
        <ul className={blockComponents.navList}>
          <li className={blockComponents.navItem}>
            <NavLink
              end
              className={({ isActive }) => navClassName(isActive)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={blockComponents.navItem}>
            <NavLink className={({ isActive }) => navClassName(isActive)} to="/about">
              About Me
            </NavLink>
          </li>
          <li className={blockComponents.navItem}>
            <NavLink
              className={({ isActive }) => navClassName(isActive)}
              to="/activism"
            >
              Activism
            </NavLink>
          </li>
          <li className={blockComponents.navItem}>
            <NavLink
              className={({ isActive }) => navClassName(isActive)}
              to="/photography"
            >
              Photography
            </NavLink>
          </li>
          <li className={blockComponents.navItem}>
            <NavLink className={({ isActive }) => navClassName(isActive)} to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        className={blockComponents.themeToggle}
        onClick={onToggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Light mode' : 'Dark mode'}
      >
        <span className={blockComponents.themeIcon}>{isDarkMode ? '☀️' : '🌙'}</span>
      </button>
    </header>
  )
}

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
    <div className={blockComponents.siteShell}>
      <SiteHeader
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <main className={blockComponents.container}>
        <div className={blockComponents.pageFrame}>
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
