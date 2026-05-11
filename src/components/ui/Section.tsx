import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { staggerContainer } from '@/lib/motion'

type Props = {
  id?: string
  children: ReactNode
  className?: string
  wide?: boolean
}

export function Section({ id, children, className = '', wide = false }: Props) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`relative py-24 ${wide ? 'px-6' : 'mx-auto max-w-6xl px-6'} ${className}`}
    >
      {children}
    </motion.section>
  )
}
