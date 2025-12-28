import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface GreekOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export default function GreekOrnament({ position }: GreekOrnamentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  }

  return (
    <motion.div
      ref={ref}
      className={`absolute ${positionClasses[position]} w-16 h-16 md:w-24 md:h-24 opacity-30`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
        <motion.path
          d="M10,10 L30,10 L30,30 L50,30 L50,10 L70,10 L70,30 L90,30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle
          cx="10"
          cy="10"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.path
          d="M10,40 L90,40 M10,50 L90,50 M10,60 L90,60"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </svg>
    </motion.div>
  )
}
