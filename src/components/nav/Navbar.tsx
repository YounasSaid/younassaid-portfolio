import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Hjem', href: '/' },
  { label: 'Om mig', href: '/#om' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Uddannelse', href: '/#uddannelse' },
  { label: 'Projekter', href: '/projekter' },
  { label: 'Kontakt', href: '/#kontakt' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false)

      // "Hjem" or logo — scroll to top if on /, else navigate to /
      if (href === '/') {
        if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          navigate('/')
          // Scroll to top after navigation
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
        }
        return
      }

      // Section links like /#om, /#skills, etc.
      if (href.startsWith('/#')) {
        const id = href.slice(2)

        if (location.pathname === '/') {
          // Already on home — just scroll
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        } else {
          // Navigate to home first, then scroll to section
          navigate('/')
          setTimeout(() => {
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 150)
        }
        return
      }
    },
    [location.pathname, navigate],
  )

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    handleNavClick('/')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)] border-b border-white/[0.04]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" onClick={handleLogoClick} className="font-display text-lg font-bold gradient-text">
          YS
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              {item.href === '/projekter' ? (
                <Link
                  to={item.href}
                  className="text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={mobileOpen ? 'Luk menu' : 'Åbn menu'}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text-primary"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-text-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text-primary"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  {item.href === '/projekter' ? (
                    <Link
                      to={item.href}
                      className="text-base text-text-muted transition-colors hover:text-text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="text-base text-text-muted transition-colors hover:text-text-primary"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
