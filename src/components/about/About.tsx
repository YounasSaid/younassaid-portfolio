import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp } from '@/lib/motion'

export function About() {
  return (
    <Section id="om">
      <SectionHeading label="Om mig" title="Hvem er Younas?" />

      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        {/* Photo */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto size-56 overflow-hidden rounded-full ring-2 ring-accent-purple/40 ring-offset-4 ring-offset-bg-deep md:size-64"
        >
          <img
            src="/profilbillede.jpg"
            alt="Younas Said"
            className="size-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-text-muted">
            Hej, jeg hedder Younas. Jeg læser softwareingeniør på 4. semester på VIA UC i Horsens,
            hvor jeg pt. arbejder på et IoT-baseret smart drivhus med C# backend og machine
            learning-forudsigelser.
          </motion.p>
          <motion.p variants={fadeInUp} custom={1} className="text-lg leading-relaxed text-text-muted">
            Jeg er drevet af projekter der kombinerer kode med noget visuelt eller fysisk — det er
            derfor jeg både har lavet en AI-baseret samlevejlednings-generator (ASEMAI) og en
            webshop til en smykke-startup ved siden af studiet.
          </motion.p>

          <GlassCard className="inline-block px-5 py-3">
            <p className="text-sm text-text-muted">
              <span className="text-accent-cyan">→</span> Lige nu fokuserer jeg på{' '}
              <span className="text-text-primary">SEP4</span>,{' '}
              <span className="text-text-primary">Machine Learning</span> og{' '}
              <span className="text-text-primary">at finde en praktikplads</span>
            </p>
          </GlassCard>
        </div>
      </div>
    </Section>
  )
}
