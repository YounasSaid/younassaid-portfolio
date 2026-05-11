import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientButton } from '@/components/ui/GradientButton'
import { fadeInUp } from '@/lib/motion'
import { projects, categoryLabels } from '@/data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-text-muted">Projektet blev ikke fundet.</p>
        <Link to="/projekter" className="mt-6 text-accent-cyan underline">
          ← Tilbage til projekter
        </Link>
      </Section>
    )
  }

  return (
    <Section>
      {/* Back link */}
      <motion.div variants={fadeInUp}>
        <Link to="/projekter" className="inline-flex items-center gap-1 font-mono text-sm text-text-muted hover:text-accent-cyan">
          ← Alle projekter
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div variants={fadeInUp} custom={1} className="mt-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span key={cat} className="rounded-md bg-accent-purple/10 px-2 py-0.5 text-xs text-accent-purple">
              {categoryLabels[cat]}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl">{project.title}</h1>
        <p className="mt-2 font-mono text-sm text-text-muted">{project.period}</p>
      </motion.div>

      {/* Image or placeholder */}
      {project.image ? (
        <motion.div variants={fadeInUp} custom={2} className="mt-8 overflow-hidden rounded-2xl">
          <img src={project.image} alt={project.title} className="w-full" />
        </motion.div>
      ) : (
        <motion.div
          variants={fadeInUp}
          custom={2}
          className="mt-8 flex aspect-video max-h-80 items-center justify-center rounded-2xl bg-bg-elevated"
        >
          <span className="font-mono text-lg text-text-muted">Screenshot kommer snart</span>
        </motion.div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_300px]">
        {/* Main content */}
        <div className="space-y-8">
          <motion.div variants={fadeInUp}>
            <h2 className="font-mono text-xs tracking-wider text-accent-cyan uppercase">Beskrivelse</h2>
            <p className="mt-3 text-lg leading-relaxed text-text-muted">{project.longDesc}</p>
          </motion.div>

          {project.highlights.length > 0 && (
            <motion.div variants={fadeInUp}>
              <h2 className="font-mono text-xs tracking-wider text-accent-cyan uppercase">Hvad jeg lærte</h2>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h) => (
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
            <h3 className="font-mono text-xs tracking-wider text-accent-purple uppercase">Tech stack</h3>
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
                GitHub →
              </GradientButton>
            )}
            {project.demo && (
              <GradientButton href={project.demo}>
                Live demo →
              </GradientButton>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
