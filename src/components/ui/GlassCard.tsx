import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp } from '@/lib/motion'

type Props = {
  className?: string
  hover?: boolean
  custom?: number
  children: ReactNode
}

export function GlassCard({ className = '', hover = false, custom, children }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={`glass group relative rounded-2xl ${
        hover
          ? 'transition-shadow duration-300 hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.5),0_0_30px_-8px_rgba(34,211,238,0.3)] hover:border-accent-purple/20'
          : ''
      } ${className}`}
    >
      {/* Gradient border glow on hover */}
      {hover && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(34,211,238,0.2) 50%, rgba(236,72,153,0.3) 100%)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            padding: '1px',
            borderRadius: 'inherit',
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
