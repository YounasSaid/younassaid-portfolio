import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Props = ComponentPropsWithoutRef<'button'> & {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

export function GradientButton({ href, children, variant = 'primary', className = '', ...rest }: Props) {
  const base =
    'inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-purple'

  const variants = {
    primary:
      'relative overflow-hidden bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.6)] hover:shadow-[0_0_50px_-8px_rgba(34,211,238,0.7)] hover:scale-[1.04]',
    ghost:
      'glass text-text-primary hover:bg-white/[0.08] hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] hover:border-accent-purple/20',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const inner = (
    <motion.span
      className={classes}
      whileTap={{ scale: 0.96 }}
    >
      {/* Shimmer overlay for primary buttons */}
      {variant === 'primary' && (
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background:
              'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          }}
        />
      )}
      {children}
    </motion.span>
  )

  if (href) {
    return <a href={href} className="inline-block">{inner}</a>
  }

  return (
    <button type="button" className="inline-block" {...rest}>
      {inner}
    </button>
  )
}
