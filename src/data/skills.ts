export type Skill = {
  name: string
  category: 'languages' | 'frameworks' | 'tools' | 'cloud'
  usedIn: string[]
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'languages', usedIn: ['ASEMAI', 'MAL1 ML Portfolio'] },
  { name: 'C#', category: 'languages', usedIn: ['SEP4 Drivhus', 'DNP'] },
  { name: 'Java', category: 'languages', usedIn: ['SEP-1', 'SDJ2'] },
  { name: 'JavaScript', category: 'languages', usedIn: ['WEB2 Pokédex', 'HI Jewelry'] },
  { name: 'TypeScript', category: 'languages', usedIn: ['Denne portfolio'] },
  { name: 'C', category: 'languages', usedIn: ['SEP4 Drivhus (IoT)'] },
  { name: 'SQL', category: 'languages', usedIn: ['SEP4 Drivhus', 'SEP-3'] },
  { name: 'HTML/CSS', category: 'languages', usedIn: ['HI Jewelry', 'WEB2', 'Denne portfolio'] },

  // Frameworks
  { name: 'React', category: 'frameworks', usedIn: ['WEB2 Pokédex', 'Denne portfolio'] },
  { name: '.NET', category: 'frameworks', usedIn: ['SEP4 Drivhus', 'DNP'] },
  { name: 'Vite', category: 'frameworks', usedIn: ['WEB2 Pokédex', 'Denne portfolio'] },
  { name: 'Tailwind CSS', category: 'frameworks', usedIn: ['Denne portfolio'] },
  { name: 'scikit-learn', category: 'frameworks', usedIn: ['MAL1 ML Portfolio'] },
  { name: 'Framer Motion', category: 'frameworks', usedIn: ['Denne portfolio'] },

  // Tools
  { name: 'Git', category: 'tools', usedIn: ['Alle projekter'] },
  { name: 'Docker', category: 'tools', usedIn: ['DOC1', 'SEP4 Drivhus'] },
  { name: 'Jupyter', category: 'tools', usedIn: ['MAL1 ML Portfolio'] },
  { name: 'VS Code', category: 'tools', usedIn: ['Alle projekter'] },
  { name: 'Claude AI', category: 'tools', usedIn: ['ASEMAI', 'Denne portfolio'] },

  // Cloud
  { name: 'Vercel', category: 'cloud', usedIn: ['Denne portfolio'] },
  { name: 'GitHub Actions', category: 'cloud', usedIn: ['DOC1', 'SEP4 Drivhus'] },
]

export const categoryLabels: Record<Skill['category'], string> = {
  languages: 'Sprog',
  frameworks: 'Frameworks',
  tools: 'Værktøjer',
  cloud: 'Cloud & CI/CD',
}
