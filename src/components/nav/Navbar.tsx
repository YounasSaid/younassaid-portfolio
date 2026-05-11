import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setMobileOpen(false)
        return
      }
    }
    setMobileOpen(false)
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
        <Link to="/" className="font-display text-lg font-bold gradient-text">
          YS
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              {item.href.startsWith('/#') ? (
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
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
                  {item.href.startsWith('/#') ? (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="text-base text-text-muted transition-colors hover:text-text-primary"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-base text-text-muted transition-colors hover:text-text-primary"
                    >
                      {item.label}
                    </Link>
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
