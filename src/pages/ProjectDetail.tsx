import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientButton } from '@/components/ui/GradientButton'
import { fadeInUp } from '@/lib/motion'
import { projects } from '@/data/projects'

export default function ProjectDetail() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-text-muted">{t('projectDetail.notFound')}</p>
        <Link to="/projekter" className="mt-6 text-accent-cyan underline">
          {t('projectDetail.backToProjects')}
        </Link>
      </Section>
    )
  }

  const highlights = t(`projects.${project.slug}.highlights`, { returnObjects: true }) as string[]

  return (
    <Section>
      {/* Back link */}
      <motion.div variants={fadeInUp}>
        <Link to="/projekter" className="inline-flex items-center gap-1 font-mono text-sm text-text-muted hover:text-accent-cyan">
          {t('projectDetail.backLink')}
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div variants={fadeInUp} custom={1} className="mt-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span key={cat} className="rounded-md bg-accent-purple/10 px-2 py-0.5 text-xs text-accent-purple">
              {t(`projectCategories.${cat}`)}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl">{t(`projects.${project.slug}.title`)}</h1>
        <p className="mt-2 font-mono text-sm text-text-muted">{t(`projects.${project.slug}.period`)}</p>
      </motion.div>

      {/* Demo video (shown instead of image when available) */}
      {project.video ? (
        <motion.div variants={fadeInUp} custom={2} className="mt-8">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/5 bg-bg-elevated">
            <video
              controls
              preload="metadata"
              className="w-full"
              poster={project.image}
            >
              <source src={project.video} type="video/mp4" />
              {t('projectDetail.videoFallback')}
            </video>
          </div>
        </motion.div>
      ) : project.image ? (
        <motion.div variants={fadeInUp} custom={2} className="mt-8 mx-auto max-w-xl overflow-hidden rounded-2xl ring-1 ring-white/5">
          <img src={project.image} alt={t(`projects.${project.slug}.title`)} className="w-full" />
        </motion.div>
      ) : (
        <motion.div
          variants={fadeInUp}
          custom={2}
          className="mt-8 flex aspect-video max-h-80 items-center justify-center rounded-2xl bg-bg-elevated"
        >
          <span className="font-mono text-lg text-text-muted">{t('projectDetail.screenshotSoon')}</span>
        </motion.div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_300px]">
        {/* Main content */}
        <div className="space-y-8">
          <motion.div variants={fadeInUp}>
            <h2 className="font-mono text-xs tracking-wider text-accent-cyan uppercase">{t('projectDetail.description')}</h2>
            <p className="mt-3 text-lg leading-relaxed text-text-muted">{t(`projects.${project.slug}.longDesc`)}</p>
          </motion.div>

          {Array.isArray(highlights) && highlights.length > 0 && (
            <motion.div variants={fadeInUp}>
              <h2 className="font-mono text-xs tracking-wider text-accent-cyan uppercase">{t('projectDetail.highlights')}</h2>
              <ul className="mt-3 space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-text-muted">
                    <span className="mt-1 text-accent-purple">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <GlassCard className="p-5">
            <h3 className="font-mono text-xs tracking-wider text-accent-purple uppercase">{t('projectDetail.techStack')}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-lg bg-accent-purple/10 px-2.5 py-1 text-sm text-accent-purple">
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>

          <div className="flex flex-col gap-3">
            {project.github && (
              <GradientButton href={project.github} variant="ghost">
                {t('projectDetail.github')}
              </GradientButton>
            )}
            {project.demo && (
              <GradientButton href={project.demo}>
                {t('projectDetail.liveDemo')}
              </GradientButton>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
