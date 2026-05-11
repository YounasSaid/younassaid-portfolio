export type Course = {
  code: string
  name: string
  ects: number
  description: string
  languages: string[]
}

export type Semester = {
  number: number
  period: string
  title: string
  description: string
  courses: Course[]
  project?: {
    name: string
    description: string
    languages: string[]
  }
}

export const education: Semester[] = [
  {
    number: 1,
    period: 'Sep 2023 – Jan 2024',
    title: 'Grundlæggende programmering & webudvikling',
    description:
      'Introduktion til softwareudvikling med objektorienteret Java, grundlæggende webudvikling og matematisk fundament for IT.',
    courses: [
      {
        code: 'SW-PRO1',
        name: 'Programmering 1',
        ects: 10,
        description:
          'Grundlæggende objektorienteret programmering i Java med fokus på klasser, nedarvning, UML-modellering og unit-testing.',
        languages: ['Java'],
      },
      {
        code: 'SW-WEB1',
        name: 'Webudvikling 1',
        ects: 5,
        description:
          'Frontend-webudvikling med HTML, CSS og JavaScript. Responsivt layout med flexbox/grid, DOM-manipulation og JSON-håndtering.',
        languages: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        code: 'SW-MSE1',
        name: 'Matematik for softwareingeniører',
        ects: 5,
        description:
          'Matematisk fundament til IT: lineær algebra (vektorer, matricer), sandsynlighedsregning, talrepræsentation (binær, hexadecimal) og grundlæggende calculus.',
        languages: [],
      },
      {
        code: 'SW-CAO1',
        name: 'Computerarkitektur og -organisering',
        ects: 5,
        description:
          'Forståelse af CPU-arkitektur, logiske porte, flip-flops, instruktionssæt og assemblerprogrammering til microcontrollere. Boolsk algebra og digitale kredsløb.',
        languages: ['Assembly'],
      },
    ],
    project: {
      name: 'SEP1 — Enkeltbrugersystem',
      description:
        'Analyse, design og implementering af et Java-baseret enkeltbrugersystem. Krav indsamlet via use cases, systemet dokumenteret med UML og testet efter testspecifikationer.',
      languages: ['Java', 'JavaScript'],
    },
  },
  {
    number: 2,
    period: 'Feb 2024 – Jun 2024',
    title: 'Objektorienteret design, databaser & software engineering',
    description:
      'Avanceret Java-programmering med designmønstre og multithreading, relationelle databaser og professionel softwareudviklingsproces med Scrum og UML.',
    courses: [
      {
        code: 'SW-PRO2',
        name: 'Programmering 2',
        ects: 10,
        description:
          'Objektorienteret systemudvikling i Java med designmønstre, multithreading, unit/systemtest og klient/server-kommunikation via sockets.',
        languages: ['Java'],
      },
      {
        code: 'SW-SWE1',
        name: 'Software Engineering',
        ects: 5,
        description:
          'Softwareudviklingsproces med Unified Process (UP) og Scrum. UML-modellering (domænemodel, sekvensdiagrammer, designklassediagrammer), SOLID-principper og testspecifikationer.',
        languages: ['Java', 'UML'],
      },
      {
        code: 'SW-DBS1',
        name: 'Database systemer',
        ects: 5,
        description:
          'Design og implementering af relationelle databaser: ER-modellering, normalisering til 3NF, DDL/DML i SQL, transaktioner, views og triggers.',
        languages: ['SQL'],
      },
    ],
    project: {
      name: 'SEP2 — Client/Server System',
      description:
        'Analyse, design og implementering af et Java client/server-system med normaliseret SQL-database. Brugte Scrum + Unified Process, UML og use case testing.',
      languages: ['Java', 'SQL', 'UML'],
    },
  },
  {
    number: 3,
    period: 'Sep 2024 – Jan 2025',
    title: 'Distribuerede systemer, .NET & embedded software',
    description:
      'Distribuerede og heterogene systemer med Java og C#, embedded C-programmering til mikrocontrollere, og algoritmedesign.',
    courses: [
      {
        code: 'SW-DNP1',
        name: '.NET Programmering',
        ects: 5,
        description:
          'C# og .NET-platformen med fokus på ASP.NET REST API-udvikling, asynkron programmering, Entity Framework (ORM), autentificering og autorisation.',
        languages: ['C#', '.NET', 'SQL'],
      },
      {
        code: 'SW-PRO3',
        name: 'Programmering 3',
        ects: 5,
        description:
          'Distribuerede systemarkitekturer: kommunikationsparadigmer (RPC, messaging, REST), middleware, sikkerhed i distribuerede systemer og peer-to-peer.',
        languages: ['Java', 'C#'],
      },
      {
        code: 'SW-ESW1',
        name: 'Embedded Software',
        ects: 5,
        description:
          'Embedded C-programmering til mikrocontrollere: tasks, queues, semaforer, mutex-synkronisering, memory management og unit-test i C.',
        languages: ['C'],
      },
      {
        code: 'SW-ADS1',
        name: 'Algoritmer og datastrukturer',
        ects: 5,
        description:
          'Algoritmedesign og analyse: tidskompleksitet (Big-O), lineære og ikke-lineære datastrukturer (grafer, træer), abstrakte datatyper og sorteringsalgoritmer.',
        languages: ['Java'],
      },
    ],
    project: {
      name: 'SEP3 — Heterogene Systemer',
      description:
        'Distribueret system med heterogene komponenter: sikkerhedsanalyse, multiple netværksprotokoller og versionsstyring. Java-frontend kommunikerer med C# backend.',
      languages: ['Java', 'C#', '.NET', 'SQL'],
    },
  },
  {
    number: 4,
    period: 'Feb 2025 – Jun 2025',
    title: 'IoT, Machine Learning, DevOps & moderne webudvikling',
    description:
      'Den fulde IoT-stak: ML-modeller i Python, C# cloud-backend, embedded C til sensorer, React-frontend og CI/CD-pipelines.',
    courses: [
      {
        code: 'SW-MAL1',
        name: 'Machine Learning og AI',
        ects: 5,
        description:
          'Komplet ML-workflow fra data til model: klassifikation, regression, clustering og PCA. Brugte scikit-learn, pandas og neural networks (MLPClassifier).',
        languages: ['Python', 'scikit-learn', 'Jupyter'],
      },
      {
        code: 'SW-DOC1',
        name: 'DevOps & Cloud',
        ects: 5,
        description:
          'DevOps-tankegang med Docker, GitHub Actions CI/CD-pipelines, cloud-deployment og automatisering af softwareleveringspipelinen.',
        languages: ['Docker', 'GitHub Actions', 'YAML'],
      },
      {
        code: 'SW-WEB2',
        name: 'Webudvikling 2',
        ects: 5,
        description:
          'Moderne JavaScript og React: closures, prototyper, TypeScript, komponenter, state management og både CSR/SSR render-mønstre.',
        languages: ['React', 'TypeScript', 'JavaScript'],
      },
    ],
    project: {
      name: 'SEP4 — Smart Drivhus (IoT)',
      description:
        'Storskala IoT-løsning med embedded C til sensorer, C# cloud-backend, ML-forudsigelse af vækstrate, React-webinterface og GitHub Actions CI/CD-pipelines.',
      languages: ['C', 'C#', 'Python', 'React', 'TypeScript', 'Docker'],
    },
  },
]
