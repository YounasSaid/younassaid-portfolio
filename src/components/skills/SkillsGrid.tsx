import { motion, AnimatePresence } from 'framer-motion'
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
      <span className="glass inline-block cursor-default rounded-lg px-3 py-1.5 text-sm text-text-primary transition-all duration-300 hover:bg-accent-purple/10 hover:shadow-[0_0_20px_-6px_rgba(139,92,246,0.4)] hover:ring-1 hover:ring-accent-purple/30 hover:text-white">
        {skill.name}
      </span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg bg-bg-elevated px-3 py-2 text-xs shadow-lg ring-1 ring-white/10"
          >
            <p className="text-text-muted">
              <span className="text-accent-cyan">Brugt i:</span>{' '}
              {skill.usedIn.join(', ')}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-bg-elevated" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function SkillsGrid() {
  const categories = Object.keys(categoryLabels) as Skill['category'][]

  return (
    <Section id="skills">
      <SectionHeading label="Teknologier" title="Hvad jeg arbejder med" />

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((cat, catIndex) => {
          const catSkills = skills.filter((s) => s.category === cat)
          if (catSkills.length === 0) return null

          return (
            <motion.div
              key={cat}
              variants={fadeInUp}
              custom={catIndex}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.3)] hover:border-accent-purple/15"
            >
              <h3 className="mb-4 font-mono text-xs tracking-wider text-accent-purple uppercase">
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent-purple" />
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
