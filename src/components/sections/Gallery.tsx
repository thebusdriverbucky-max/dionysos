import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import LazyImage from '../ui/LazyImage'
import GreekOrnament from '../ui/GreekOrnament'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  ]

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <GreekOrnament position="top-left" />
      <GreekOrnament position="top-right" />
      <GreekOrnament position="bottom-left" />
      <GreekOrnament position="bottom-right" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-accent tracking-widest text-sm mb-4 uppercase">
            Visual Feast
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-text-cream mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden luxury-shadow group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <LazyImage
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
