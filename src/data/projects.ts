export type ProjectCategory = 'ml' | 'web' | 'backend' | 'skoleprojekt' | 'personligt'

export type Project = {
  slug: string
  title: string
  shortDesc: string
  longDesc: string
  categories: ProjectCategory[]
  stack: string[]
  github?: string
  demo?: string
  image?: string
  period: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'asemai',
    title: 'ASEMAI-Pro',
    shortDesc: 'AI-drevet samlevejlednings-generator — analyserer tekniske tegninger med Claude Vision AI og genererer professionelle trin-for-trin samlevejledninger som PDF.',
    longDesc: 'ASEMAI bruger Claude Vision AI til at analysere tekniske tegninger og generere professionelle samlevejledninger. Brugeren uploader en tegning, og AI\'en producerer en detaljeret PDF med trin-for-trin instruktioner.',
    categories: ['personligt', 'ml'],
    stack: ['Python', 'Claude API', 'PDF Generation'],
    github: 'https://github.com/YounasSaid/AssemAI',
    period: 'Forår 2026',
    highlights: [
      'Claude Vision AI til billedanalyse',
      'Automatisk PDF-generering',
      'MVP-udvikling fra idé til produkt',
    ],
  },
  {
    slug: 'hi-jewelry',
    title: 'HI Jewelry',
    shortDesc: 'Hjemmeside og design system til en startup-smykkebutik.',
    longDesc: 'Komplet webshop og brand-identitet til HI Jewelry, en smykke-startup. Inkluderer design system, produktvisning og responsivt layout.',
    categories: ['personligt', 'web'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Design System'],
    period: '2025',
    highlights: [
      'Freelance-projekt for startup',
      'Design system fra bunden',
      'Responsivt og visuelt brand-identitet',
    ],
  },
  {
    slug: 'sep4-drivhus',
    title: 'SEP4 — Smart Drivhus',
    shortDesc: 'Storskala IoT-projekt med sensor-dataindsamling, C# backend, ML-forudsigelse af vækstrate og web-interface.',
    longDesc: 'End-to-end IoT-løsning for et smart drivhus. Sensorer indsamler temperatur, fugtighed og lysniveauer. Data sendes til en C# backend der kører machine learning-modeller til at forudsige planters vækstrate og automatisk styre vanding.',
    categories: ['skoleprojekt', 'backend', 'ml'],
    stack: ['C#', '.NET', 'C', 'Python', 'SQL', 'Docker', 'IoT Sensorer'],
    github: 'https://github.com/YounasSaid/Sep4',
    period: 'Forår 2025 — 4. semester',
    highlights: [
      'IoT-sensorer → Cloud → ML pipeline',
      'C# REST API med .NET',
      'ML-modeller til vækstrate-forudsigelse',
      'CI/CD med GitHub Actions',
    ],
  },
  {
    slug: 'mal1-ml-portfolio',
    title: 'Machine Learning Portfolio',
    shortDesc: '5 ML-afleveringer: regression, klassifikation, neural networks, clustering og PCA.',
    longDesc: 'Samling af 5 machine learning-projekter fra MAL1-faget. Dækker supervised og unsupervised learning, fra lineær regression til neurale netværk.',
    categories: ['skoleprojekt', 'ml'],
    stack: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Jupyter'],
    github: 'https://github.com/YounasSaid/MAL1',
    period: 'Forår 2025 — 4. semester',
    highlights: [
      'EV-bilpriser: Regression (R² ≈ 0.87)',
      'Kandidattest: Random Forest (94% accuracy)',
      'Exoplaneter: SVM-klassifikation',
      'Sentiment Analysis: Neural network (88%)',
      'Clustering & PCA på politiske data',
    ],
  },
  {
    slug: 'web2-pokedex',
    title: 'Pokédex',
    shortDesc: 'Pokédex web-app bygget med Vite + React + React Router. Bruger PokeAPI.',
    longDesc: 'Interaktiv Pokédex-applikation der henter data fra PokeAPI. Bygget med React og React Router for at demonstrere SPA-routing og API-integration.',
    categories: ['skoleprojekt', 'web'],
    stack: ['React', 'Vite', 'JavaScript', 'React Router', 'PokeAPI'],
    github: 'https://github.com/YounasSaid/WEB2-Pokedex',
    period: 'Forår 2026',
    highlights: [
      'React + React Router SPA',
      'PokeAPI-integration',
      'Søgning og filtrering',
    ],
  },
  {
    slug: 'sep1',
    title: 'Semester 1 Projekt',
    shortDesc: 'Grundlæggende softwareudviklingsprojekt i Java.',
    longDesc: 'Første semesterprojekt med fokus på grundlæggende Java-programmering og teamsamarbejde.',
    categories: ['skoleprojekt', 'backend'],
    stack: ['Java'],
    github: 'https://github.com/YounasSaid/SEP-1',
    period: 'Efterår 2023 — 1. semester',
    highlights: ['Java grundprojekt', 'Teamsamarbejde'],
  },
  {
    slug: 'sep3',
    title: 'Semester 3 Projekt',
    shortDesc: 'Distribueret system med fokus på heterogene systemer og sikkerhed.',
    longDesc: 'Projekt med fokus på distribuerede og heterogene systemer, kommunikationsprotokoller og sikkerhed.',
    categories: ['skoleprojekt', 'backend', 'web'],
    stack: ['C#', 'Blazor', 'REST API', 'HTML'],
    github: 'https://github.com/YounasSaid/SemesterProjekt-3',
    period: 'Efterår 2024 — 3. semester',
    highlights: [
      'Distribueret arkitektur',
      'Blazor frontend',
      'REST API integration',
    ],
  },
  {
    slug: 'doc1-devops',
    title: 'DOC1 — DevOps & Cloud',
    shortDesc: 'Afleveringer og øvelser i DevOps, CI/CD og cloud-infrastruktur.',
    longDesc: 'Kursusarbejde i DevOps og cloud computing med fokus på Docker, GitHub Actions og cloud-deployment.',
    categories: ['skoleprojekt'],
    stack: ['Docker', 'GitHub Actions', 'CI/CD'],
    github: 'https://github.com/YounasSaid/DOC1',
    period: 'Forår 2025 — 4. semester',
    highlights: ['Docker containers', 'CI/CD pipelines', 'Cloud deployment'],
  },
  {
    slug: 'dnp',
    title: 'DNP — Distribueret Programmering',
    shortDesc: 'Kursusopgave i distribueret og netværksbaseret programmering i C#.',
    longDesc: 'Opgaveprojekt i distribueret og netværksbaseret programmering med C# og .NET.',
    categories: ['skoleprojekt', 'backend'],
    stack: ['C#', '.NET'],
    github: 'https://github.com/YounasSaid/Aflevering-DNP',
    period: 'Efterår 2024 — 3. semester',
    highlights: ['Netværksprogrammering', 'C# distribuerede systemer'],
  },
]

export const categoryLabels: Record<ProjectCategory, string> = {
  ml: 'ML/AI',
  web: 'Web',
  backend: 'Backend',
  skoleprojekt: 'Skoleprojekt',
  personligt: 'Personligt',
}
