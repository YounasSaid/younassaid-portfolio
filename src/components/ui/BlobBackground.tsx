import { motion } from 'framer-motion'

const blobs = [
  { color: 'bg-accent-purple/25', size: 'size-[600px]', pos: '-top-40 -left-40', delay: 0 },
  { color: 'bg-accent-cyan/15', size: 'size-[500px]', pos: 'top-1/3 -right-40', delay: 2 },
  { color: 'bg-accent-pink/15', size: 'size-[400px]', pos: 'bottom-0 left-1/3', delay: 4 },
]

export function BlobBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${blob.color} ${blob.size} ${blob.pos}`}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: blob.delay,
          }}
        />
      ))}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
