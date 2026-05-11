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
        {label}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        custom={1}
        className="mt-3 text-4xl font-bold sm:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  )
}
