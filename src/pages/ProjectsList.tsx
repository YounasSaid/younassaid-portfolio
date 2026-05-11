import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp } from '@/lib/motion'
import { projects, categoryLabels } from '@/data/projects'
import type { ProjectCategory } from '@/data/projects'

const ALL_CATEGORIES: ('all' | ProjectCategory)[] = ['all', 'ml', 'web', 'backend', 'skoleprojekt', 'personligt']

export default function ProjectsList() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <Section>
      <SectionHeading label="Alle projekter" title="Hvad jeg har bygget" />

      {/* Filter chips */}
      <motion.div variants={fadeInUp} className="mb-12 flex flex-wrap justify-center gap-2">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
              filter === cat
                ? 'bg-accent-purple text-white shadow-glow-purple'
                : 'glass text-text-muted hover:text-text-primary'
            }`}
          >
            {cat === 'all' ? 'Alle' : categoryLabels[cat]}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Link key={project.slug} to={`/projekter/${project.slug}`}>
            <GlassCard hover custom={i} className="h-full p-6">
              {project.image ? (
                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-bg-elevated">
                  <img src={project.image} alt={project.title} className="size-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-bg-elevated">
                  <span className="font-mono text-sm text-text-muted">{project.stack[0]}</span>
                </div>
              )}

              <div className="mb-2 flex flex-wrap gap-1.5">
                {project.categories.map((cat) => (
                  <span key={cat} className="rounded-md bg-accent-purple/10 px-2 py-0.5 text-xs text-accent-purple">
                    {categoryLabels[cat]}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-text-muted line-clamp-2">{project.shortDesc}</p>

              <div className="mt-3 flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>

      {/* GitHub link */}
      <motion.p variants={fadeInUp} className="mt-12 text-center text-sm text-text-muted">
        Flere projekter på{' '}
        <a
          href="https://github.com/YounasSaid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-cyan underline underline-offset-2 hover:text-accent-purple"
        >
          GitHub →
        </a>
      </motion.p>
    </Section>
  )
}
