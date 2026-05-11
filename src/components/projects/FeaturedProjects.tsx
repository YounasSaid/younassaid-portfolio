import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientButton } from '@/components/ui/GradientButton'
import { fadeInUp } from '@/lib/motion'
import { projects } from '@/data/projects'

const FEATURED_SLUGS = ['asemai', 'sep4-drivhus', 'hi-jewelry']

export function FeaturedProjects() {
  const featured = FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean)

  return (
    <Section id="projekter-preview">
      <SectionHeading label="Projekter" title="Udvalgte projekter" />

      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((project, i) => (
          <Link key={project.slug} to={`/projekter/${project.slug}`}>
            <GlassCard hover custom={i} className="h-full p-6">
              {project.image ? (
                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-bg-elevated">
                  <img src={project.image} alt={project.title} className="size-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-bg-elevated">
                  <span className="text-3xl">
                    {project.slug === 'asemai' ? '🤖' : project.slug === 'sep4-drivhus' ? '🌱' : '💎'}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-md bg-accent-purple/10 px-2 py-0.5 text-xs text-accent-purple">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-text-muted line-clamp-2">{project.shortDesc}</p>
            </GlassCard>
          </Link>
        ))}
      </div>

      <motion.div variants={fadeInUp} className="mt-10 text-center">
        <GradientButton href="/projekter">
          Se alle projekter
          <span aria-hidden>→</span>
        </GradientButton>
      </motion.div>
    </Section>
  )
}
