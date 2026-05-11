import { motion } from 'framer-motion'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp } from '@/lib/motion'
import { skills, categoryLabels } from '@/data/skills'
import type { Skill } from '@/data/skills'

function SkillTag({ skill }: { skill: Skill }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="glass inline-block cursor-default rounded-lg px-3 py-1.5 text-sm text-text-primary transition-all hover:shadow-glow-purple hover:ring-1 hover:ring-accent-purple/30">
        {skill.name}
      </span>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg bg-bg-elevated px-3 py-2 text-xs shadow-lg ring-1 ring-white/10">
          <p className="text-text-muted">
            <span className="text-accent-cyan">Brugt i:</span>{' '}
            {skill.usedIn.join(', ')}
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-bg-elevated" />
        </div>
      )}
    </motion.div>
  )
}

export function SkillsGrid() {
  const categories = Object.keys(categoryLabels) as Skill['category'][]

  return (
    <Section id="skills">
      <SectionHeading label="Teknologier" title="Hvad jeg arbejder med" />

      <div className="grid gap-10 sm:grid-cols-2">
        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat)
          if (catSkills.length === 0) return null

          return (
            <motion.div key={cat} variants={fadeInUp} className="glass rounded-2xl p-6">
              <h3 className="mb-4 font-mono text-xs tracking-wider text-accent-purple uppercase">
                {categoryLabels[cat]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.p
        variants={fadeInUp}
        className="mt-8 text-center text-sm text-text-muted"
      >
        Hover over en teknologi for at se hvilke projekter den er brugt i.
      </motion.p>
    </Section>
  )
}
