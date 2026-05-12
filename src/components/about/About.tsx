import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp } from '@/lib/motion'

export function About() {
  const { t } = useTranslation()

  return (
    <Section id="om">
      <SectionHeading label={t('about.label')} title={t('about.title')} />

      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        {/* Photo with animated ring */}
        <motion.div
          variants={fadeInUp}
          className="group relative mx-auto"
        >
          {/* Gradient glow ring behind photo */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-pink opacity-30 blur-lg transition-opacity duration-500 group-hover:opacity-50" />
          <div className="relative size-56 overflow-hidden rounded-full ring-2 ring-accent-purple/40 ring-offset-4 ring-offset-bg-deep md:size-64">
            <img
              src="/profilbillede.jpg"
              alt="Younas Said"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-text-muted">
            {t('about.p1')}
          </motion.p>
          <motion.p variants={fadeInUp} custom={1} className="text-lg leading-relaxed text-text-muted">
            {t('about.p2')}
          </motion.p>

          <GlassCard className="inline-block px-5 py-3">
            <p className="text-sm text-text-muted">
              <span className="text-accent-cyan">{t('about.focusArrow')}</span> {t('about.focusIntro')}{' '}
              <span className="text-text-primary">{t('about.focusSep4')}</span>,{' '}
              <span className="text-text-primary">{t('about.focusAI')}</span> {t('about.and')}{' '}
              <span className="text-text-primary">{t('about.focusJob')}</span>
            </p>
          </GlassCard>
        </div>
      </div>
    </Section>
  )
}
