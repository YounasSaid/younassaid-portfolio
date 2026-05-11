import { motion } from 'framer-motion'
import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp } from '@/lib/motion'
import { education } from '@/data/education'

const LANG_COLORS: Record<string, string> = {
  Java: 'bg-orange-500/15 text-orange-300',
  JavaScript: 'bg-yellow-500/15 text-yellow-300',
  TypeScript: 'bg-blue-500/15 text-blue-300',
  'C#': 'bg-purple-500/15 text-purple-300',
  '.NET': 'bg-purple-500/15 text-purple-300',
  Python: 'bg-emerald-500/15 text-emerald-300',
  C: 'bg-slate-500/15 text-slate-300',
  SQL: 'bg-cyan-500/15 text-cyan-300',
  HTML: 'bg-red-500/15 text-red-300',
  CSS: 'bg-pink-500/15 text-pink-300',
  React: 'bg-sky-500/15 text-sky-300',
  Docker: 'bg-blue-600/15 text-blue-300',
  Assembly: 'bg-amber-700/15 text-amber-400',
  UML: 'bg-indigo-500/15 text-indigo-300',
  'GitHub Actions': 'bg-gray-500/15 text-gray-300',
  YAML: 'bg-gray-500/15 text-gray-300',
  'scikit-learn': 'bg-orange-600/15 text-orange-300',
  Jupyter: 'bg-amber-500/15 text-amber-300',
}

function LangTag({ lang }: { lang: string }) {
  const cls = LANG_COLORS[lang] ?? 'bg-accent-purple/10 text-accent-purple'
  return (
    <span className={`rounded-md px-2 py-0.5 font-mono text-xs ${cls}`}>
      {lang}
    </span>
  )
}

export function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(3)

  return (
    <Section id="uddannelse">
      <SectionHeading label="Uddannelse" title="VIA UC — Softwareingeniør" />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink md:left-1/2" />

        {education.map((sem, i) => {
          const isOpen = openIndex === i
          const isEven = i % 2 === 0
          const allLangs = [
            ...new Set([
              ...sem.courses.flatMap((c) => c.languages),
              ...(sem.project?.languages ?? []),
            ]),
          ]

          return (
            <motion.div
              key={sem.number}
              variants={fadeInUp}
              custom={i}
              className={`relative mb-10 pl-14 md:w-[calc(50%+1px)] md:pl-0 ${
                isEven ? 'md:pr-10' : 'md:ml-auto md:pl-10'
              }`}
            >
              {/* Dot on timeline */}
              <div
                className={`absolute top-3 left-3.5 size-3.5 rounded-full border-2 border-accent-cyan bg-bg-deep ring-2 ring-accent-cyan/20 md:left-auto ${
                  isEven ? 'md:-right-[7px]' : 'md:-left-[7px]'
                }`}
              />

              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="glass w-full cursor-pointer rounded-xl p-5 text-left transition-all duration-200 hover:shadow-glow-purple"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs text-accent-cyan uppercase">
                      Semester {sem.number}
                    </span>
                    <h3 className="mt-0.5 text-base font-semibold leading-tight">{sem.title}</h3>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-text-muted">{sem.period}</span>
                </div>

                {/* Collapsed: show language pills */}
                {!isOpen && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {allLangs.map((l) => (
                      <LangTag key={l} lang={l} />
                    ))}
                  </div>
                )}

                {/* Expanded content */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 space-y-4 overflow-hidden"
                  >
                    <p className="text-sm text-text-muted">{sem.description}</p>

                    {/* Courses */}
                    <div className="space-y-3">
                      <p className="font-mono text-xs tracking-wider text-accent-purple uppercase">
                        Fag
                      </p>
                      {sem.courses.map((course) => (
                        <div key={course.code} className="rounded-lg bg-white/[0.02] p-3">
                          <div className="flex flex-wrap items-baseline justify-between gap-1">
                            <span className="text-sm font-medium text-text-primary">
                              {course.name}
                            </span>
                            <span className="font-mono text-[10px] text-text-muted">
                              {course.code} · {course.ects} ECTS
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-text-muted">
                            {course.description}
                          </p>
                          {course.languages.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {course.languages.map((l) => (
                                <LangTag key={l} lang={l} />
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Semester project */}
                    {sem.project && (
                      <div>
                        <p className="font-mono text-xs tracking-wider text-accent-cyan uppercase">
                          Semesterprojekt
                        </p>
                        <div className="mt-2 rounded-lg border border-accent-cyan/20 bg-accent-cyan/[0.03] p-3">
                          <p className="text-sm font-semibold text-text-primary">
                            {sem.project.name}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-text-muted">
                            {sem.project.description}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {sem.project.languages.map((l) => (
                              <LangTag key={l} lang={l} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Expand/collapse indicator */}
                <div className="mt-3 flex items-center gap-1 text-xs text-text-muted">
                  <span>{isOpen ? '▲ Skjul detaljer' : '▼ Vis fag og projekt'}</span>
                </div>
              </button>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
