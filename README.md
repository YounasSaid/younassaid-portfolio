# Younas Said — Portfolio

Personlig portfolio-hjemmeside bygget med React + Vite + TypeScript.

## Tech stack

- **React 19** + **Vite 8** + **TypeScript**
- **Tailwind CSS v4** (med `@tailwindcss/vite`)
- **Framer Motion** — scroll-reveal animationer
- **React Router v6** — multi-page (`/`, `/projekter`, `/projekter/:slug`)
- **react-i18next** — dansk + engelsk
- **Vercel** serverless function til kontaktformular (via Resend)

## Kør lokalt

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

## Struktur

```
src/
├── components/    # genbrugelige UI-komponenter
├── pages/         # Home, ProjectsList, ProjectDetail
├── data/          # projects.ts, skills.ts, education.ts (kilde til truth)
├── locales/       # da.json, en.json
├── lib/           # utils (motion-variants mm.)
└── styles/        # globals.css, print.css
api/
└── contact.ts     # Vercel serverless function
```

## Design

- Mørk baggrund `#0A0118` med lilla→cyan→pink gradient-accenter
- Glassmorphism cards med `backdrop-blur(20px)`
- Space Grotesk (display) · Inter (body) · JetBrains Mono (code)
- Custom glow-cursor + scroll-reveal animationer

## Status

🚧 Under bygning — se [planen](../../.claude/plans/) for faser.
