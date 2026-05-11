export type Semester = {
  number: number
  period: string
  title: string
  description: string
  courses: string[]
  project?: string
}

export const education: Semester[] = [
  {
    number: 1,
    period: 'Sep 2023 – Jan 2024',
    title: 'Grundlæggende programmering',
    description: 'Introduktion til softwareudvikling med Java og objektorienteret design.',
    courses: ['PRO1 – Programmering 1', 'SDJ1 – Software Design 1', 'SEP1 – Semesterprojekt 1'],
    project: 'SEP-1: Java-baseret systemprojekt',
  },
  {
    number: 2,
    period: 'Feb 2024 – Jun 2024',
    title: 'Objektorienteret design & databaser',
    description: 'Avanceret Java, design patterns, databaser og Scrum-baseret teamwork.',
    courses: ['PRO2 – Programmering 2', 'SDJ2 – Software Design 2', 'DBS1 – Databaser', 'SEP2 – Semesterprojekt 2'],
    project: 'SEP-2: Analyse, design og test med Scrum + UML',
  },
  {
    number: 3,
    period: 'Sep 2024 – Jan 2025',
    title: 'Distribuerede systemer & sikkerhed',
    description: 'Distribuerede og heterogene systemer, netværk, kommunikationsprotokoller og sikkerhed.',
    courses: ['DNP – Distribueret Programmering (C#)', 'WEB1 – Webudvikling 1', 'SEP3 – Semesterprojekt 3'],
    project: 'SEP-3: Distribueret system med Blazor + REST API',
  },
  {
    number: 4,
    period: 'Feb 2025 – Jun 2025',
    title: 'IoT, Machine Learning & Cloud',
    description: 'IoT-sensorer, machine learning, DevOps, cloud-infrastruktur og storskala-systemer.',
    courses: ['MAL1 – Machine Learning', 'DOC1 – DevOps & Cloud', 'WEB2 – Webudvikling 2 (React)', 'SEP4 – Semesterprojekt 4'],
    project: 'SEP-4: Smart Drivhus — IoT + C# backend + ML-forudsigelse',
  },
]
