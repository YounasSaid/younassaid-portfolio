import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/about/About'
import { SkillsGrid } from '@/components/skills/SkillsGrid'
import { Timeline } from '@/components/education/Timeline'
import { FeaturedProjects } from '@/components/projects/FeaturedProjects'
import { ContactForm } from '@/components/contact/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <Timeline />
      <FeaturedProjects />
      <ContactForm />
    </>
  )
}
