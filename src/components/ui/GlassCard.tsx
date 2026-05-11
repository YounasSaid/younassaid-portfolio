import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'
import { fadeInUp } from '@/lib/motion'

type Props = ComponentPropsWithoutRef<typeof motion.div> & {
  hover?: boolean
}

export function GlassCard({ className = '', hover = false, children, ...rest }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`glass rounded-2xl ${hover ? 'transition-shadow duration-300 hover:shadow-glow-purple' : ''} ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
