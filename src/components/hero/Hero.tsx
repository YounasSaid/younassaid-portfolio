import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Typewriter } from './Typewriter'
import { GradientButton } from '@/components/ui/GradientButton'

const TITLES = [
  'Softwareingeniørstuderende',
  'Builder of things',
]

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: 0.5 + i * 0.04,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function AnimatedHeadline() {
  const line1 = 'Hej, jeg er'
  const name = 'Younas'

  return (
    <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
      <span className="inline-block overflow-hidden">
        {line1.split('').map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </span>{' '}
      <span className="inline-block overflow-hidden">
        {name.split('').map((char, i) => (
          <motion.span
            key={`name-${char}-${i}`}
            custom={line1.length + i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block shimmer-text"
          >
            {char}
          </motion.span>
        ))}
      </span>
    </h1>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
      {/* Glowing orb behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="size-[500px] rounded-full bg-accent-purple/15 blur-[100px] md:size-[700px]"
        />
      </div>

      <motion.p
        custom={0.3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative font-mono text-sm tracking-wider text-accent-cyan uppercase"
      >
        <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-accent-cyan" />
        Portfolio &middot; Younas Said
      </motion.p>

      <AnimatedHeadline />

      <motion.div
        custom={1.5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-4 h-12 text-xl text-text-muted sm:text-2xl md:text-3xl"
      >
        <Typewriter words={TITLES} />
      </motion.div>

      <motion.p
        custom={1.8}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative mt-6 max-w-lg text-text-muted"
      >
        4. semester på VIA University &middot; Backend, fullstack og AI-drevne projekter
      </motion.p>

      <motion.div
        custom={2.1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-text-muted/50 uppercase">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-accent-purple/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
