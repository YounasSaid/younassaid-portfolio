import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
}: Props) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1))
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          setText(current.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="inline-flex items-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="gradient-text"
        >
          {text}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.1em] bg-accent-cyan"
      />
    </span>
  )
}
