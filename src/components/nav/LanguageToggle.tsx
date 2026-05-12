import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const toggle = () => {
    const next = current === 'da' ? 'en' : 'da'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="glass rounded-lg px-2.5 py-1 font-mono text-xs text-text-muted transition-all hover:text-text-primary hover:bg-white/[0.08]"
      aria-label={current === 'da' ? 'Switch to English' : 'Skift til dansk'}
    >
      {current === 'da' ? 'EN' : 'DA'}
    </button>
  )
}
