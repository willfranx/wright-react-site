import { createElement, useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
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

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Me' },
  { to: '/activism', label: 'Activism' },
  { to: '/photography', label: 'Photography' },
  { to: '/blog', label: 'Blog' },
]

function SiteHeader({
  isDarkMode,
  onToggleTheme,
}: {
  isDarkMode: boolean
  onToggleTheme: () => void
}) {
  return (
    <header className={blockComponents.topbar}>
      <div className="flex w-full items-center justify-between gap-3 lg:gap-6">
        <Link className={blockComponents.brand} to="/">
          Wright Franklin
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className={blockComponents.navList}>
            {navItems.map((item) => (
              <li className={blockComponents.navItem} key={item.to}>
                <NavLink
                  end={item.end}
                  className={({ isActive }) => navClassName(isActive)}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

          <div className="flex items-center gap-2">
          <button
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[rgba(28,23,18,0.12)] bg-[rgba(255,255,255,0.6)] text-[#171412] transition-all duration-300 hover:-translate-y-px hover:bg-[rgba(255,255,255,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b34f28] focus-visible:outline-offset-[3px] dark:border-[rgba(245,242,238,0.12)] dark:bg-[rgba(60,54,48,0.6)] dark:text-[#f5f2ee] dark:hover:bg-[rgba(60,54,48,0.85)] lg:hidden"
            type="button"
            command="--toggle"
            commandfor="mobile-menu"
            aria-label="Open main menu"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6 in-aria-expanded:hidden"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6 not-in-aria-expanded:hidden"
            >
              <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            className={blockComponents.themeToggle}
            type="button"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            <span className={blockComponents.themeIcon}>{isDarkMode ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
      {createElement(
        'el-disclosure',
        { id: 'mobile-menu', hidden: true, className: 'mt-2 block lg:hidden' },
        <div className="space-y-1 rounded-2xl bg-[rgba(255,255,255,0.8)] p-2 shadow-[rgba(15,12,8,0.08)_0_10px_24px_-12px] backdrop-blur-[12px] dark:bg-[rgba(30,26,23,0.9)]">
          {navItems.map((item) => (
            <NavLink
              key={`mobile-${item.to}`}
              end={item.end}
              className={({ isActive }) =>
                `${navClassName(isActive)} block w-full justify-start rounded-xl px-4 py-3 text-left`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>,
      )}
    </header>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => getDarkModePreference())
  const location = useLocation()

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark')
    } else {
      htmlElement.setAttribute('data-theme', 'light')
    }
    setDarkModePreference(isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    document.getElementById('mobile-menu')?.setAttribute('hidden', '')
  }, [location.pathname])

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
