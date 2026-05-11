import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GradientButton } from '@/components/ui/GradientButton'
import { fadeInUp } from '@/lib/motion'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const form = e.currentTarget
      const data = {
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="kontakt">
      <SectionHeading label="Kontakt" title="Skriv til mig" />

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[1fr_300px]">
        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="glass space-y-5 rounded-2xl p-6"
        >
          <div>
            <label htmlFor="name" className="mb-1 block font-mono text-xs text-text-muted uppercase">
              Navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-glass-stroke bg-white/[0.03] px-4 py-2.5 text-text-primary outline-none transition-all focus:ring-2 focus:ring-accent-purple/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block font-mono text-xs text-text-muted uppercase">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-glass-stroke bg-white/[0.03] px-4 py-2.5 text-text-primary outline-none transition-all focus:ring-2 focus:ring-accent-purple/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block font-mono text-xs text-text-muted uppercase">
              Besked
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-glass-stroke bg-white/[0.03] px-4 py-2.5 text-text-primary outline-none transition-all focus:ring-2 focus:ring-accent-purple/50"
            />
          </div>

          <GradientButton>
            {status === 'sending' ? 'Sender...' : status === 'sent' ? 'Sendt ✓' : 'Send besked'}
          </GradientButton>

          {status === 'error' && (
            <p className="text-sm text-accent-pink">Noget gik galt. Prøv igen eller send en email direkte.</p>
          )}
        </motion.form>

        <motion.div variants={fadeInUp} custom={1} className="space-y-6">
          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-accent-cyan uppercase">Email</p>
            <a href="mailto:younassaid@hotmail.com" className="mt-1 block text-sm text-text-primary hover:text-accent-purple">
              younassaid@hotmail.com
            </a>
          </div>
          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-accent-cyan uppercase">GitHub</p>
            <a href="https://github.com/YounasSaid" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-text-primary hover:text-accent-purple">
              github.com/YounasSaid
            </a>
          </div>
          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-accent-cyan uppercase">LinkedIn</p>
            <a href="https://www.linkedin.com/in/younas-said-966a6028b/" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-text-primary hover:text-accent-purple">
              linkedin.com/in/younas-said
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
