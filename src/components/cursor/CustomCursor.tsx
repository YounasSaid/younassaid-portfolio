import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    setVisible(true)

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-2 rounded-full bg-accent-purple mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: clicking ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] size-8 rounded-full border border-accent-cyan/40"
        animate={{ x: pos.x - 16, y: pos.y - 16, scale: clicking ? 0.8 : 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.8 }}
      />
    </>
  )
}
