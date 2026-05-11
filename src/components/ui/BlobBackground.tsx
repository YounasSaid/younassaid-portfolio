import { motion } from 'framer-motion'
import { useMemo } from 'react'

const blobs = [
  { color: 'bg-accent-purple/30', size: 'size-[700px]', pos: '-top-60 -left-60', delay: 0 },
  { color: 'bg-accent-cyan/20', size: 'size-[600px]', pos: 'top-1/4 -right-60', delay: 2 },
  { color: 'bg-accent-pink/15', size: 'size-[500px]', pos: 'bottom-20 left-1/4', delay: 4 },
  { color: 'bg-accent-purple/10', size: 'size-[400px]', pos: 'top-2/3 right-1/4', delay: 6 },
]

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 20,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    [],
  )

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-accent-cyan"
          style={{
            left: p.left,
            bottom: '-5%',
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </>
  )
}

export function BlobBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid" />

      {/* Aurora blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[150px] ${blob.color} ${blob.size} ${blob.pos}`}
          style={{ animation: `aurora-drift ${20 + i * 5}s ease-in-out ${blob.delay}s infinite` }}
        />
      ))}

      {/* Floating particles */}
      <Particles />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, #0a0118 80%)',
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
