import { motion } from 'framer-motion'
import { Typewriter } from './Typewriter'
import { GradientButton } from '@/components/ui/GradientButton'
import { fadeInUp } from '@/lib/motion'

const TITLES = [
  'Softwareingeniørstuderende',
  'Backend & ML',
  'Builder of things',
]

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-mono text-sm tracking-wider text-text-muted uppercase"
      >
        Portfolio &middot; Younas Said
      </motion.p>

      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="mt-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Hej, jeg er{' '}
        <span className="gradient-text">Younas</span>
      </motion.h1>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="mt-4 h-12 text-xl text-text-muted sm:text-2xl md:text-3xl"
      >
        <Typewriter words={TITLES} />
      </motion.div>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="mt-6 max-w-lg text-text-muted"
      >
        4. semester på VIA UC &middot; Backend, machine learning og fullstack-projekter
      </motion.p>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={4}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <GradientButton href="/projekter">
          Se mine projekter
          <span aria-hidden>→</span>
        </GradientButton>
        <GradientButton
          variant="ghost"
          onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Kontakt mig
        </GradientButton>
      </motion.div>
    </section>
  )
}
