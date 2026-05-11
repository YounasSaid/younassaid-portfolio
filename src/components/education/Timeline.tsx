import { motion } from 'framer-motion'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp } from '@/lib/motion'
import { education } from '@/data/education'

export function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(3)

  return (
    <Section id="uddannelse">
      <SectionHeading label="Uddannelse" title="VIA UC — Softwareingeniør" />

      <div className="relative mx-auto max-w-2xl">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink md:left-1/2" />

        {education.map((sem, i) => {
          const isOpen = openIndex === i
          const isEven = i % 2 === 0

          return (
            <motion.div
              key={sem.number}
              variants={fadeInUp}
              custom={i}
              className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${
                isEven ? 'md:pr-10' : 'md:ml-auto md:pl-10'
              }`}
            >
              {/* Dot on timeline */}
              <div
                className={`absolute top-2 left-2.5 size-3 rounded-full border-2 border-accent-cyan bg-bg-deep md:left-auto ${
                  isEven ? 'md:-right-[7px]' : 'md:-left-[7px]'
                }`}
              />

              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="glass w-full cursor-pointer rounded-xl p-5 text-left transition-shadow hover:shadow-glow-purple"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs text-accent-cyan">
                      Semester {sem.number}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{sem.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-text-muted">{sem.period}</span>
                </div>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    <p className="text-sm text-text-muted">{sem.description}</p>
                    <div>
                      <p className="font-mono text-xs text-accent-purple uppercase">Fag</p>
                      <ul className="mt-1 space-y-0.5">
                        {sem.courses.map((c) => (
                          <li key={c} className="text-sm text-text-muted">
                            · {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {sem.project && (
                      <div>
                        <p className="font-mono text-xs text-accent-purple uppercase">Projekt</p>
                        <p className="mt-1 text-sm text-text-primary">{sem.project}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </button>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
