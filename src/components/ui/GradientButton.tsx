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
      'bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink text-white shadow-glow-purple hover:shadow-glow-cyan hover:scale-[1.03]',
    ghost:
      'glass text-text-primary hover:bg-white/[0.06] hover:shadow-glow-purple',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const inner = (
    <motion.span
      className={classes}
      whileTap={{ scale: 0.97 }}
    >
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
