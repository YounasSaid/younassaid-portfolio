import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

type Props = {
  label: string
  title: string
}

export function SectionHeading({ label, title }: Props) {
  return (
    <div className="mb-16 text-center">
      <motion.p
        variants={fadeInUp}
        className="font-mono text-sm tracking-wider text-accent-cyan uppercase"
      >
        <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent-cyan" />
        {label}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        custom={1}
        className="mt-3 text-4xl font-bold sm:text-5xl"
        style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeInUp}
        custom={2}
        className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent-purple to-transparent"
      />
    </div>
  )
}
