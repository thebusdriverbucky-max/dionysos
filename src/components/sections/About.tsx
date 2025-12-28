import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import LazyImage from '../ui/LazyImage'
import GreekOrnament from '../ui/GreekOrnament'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <GreekOrnament position="top-left" />
      <GreekOrnament position="bottom-right" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden luxury-shadow">
              <LazyImage
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="Our restaurant"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-accent -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-cinzel text-accent tracking-widest text-sm mb-4 uppercase">
              Our Story
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-text-cream mb-6">
              A Culinary Journey Through Time
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mb-6" />
            <p className="font-lato text-text-cream/80 text-lg leading-relaxed mb-6">
              Nestled in the heart of Larnaca, Dionysos brings the ancient Greek concept of
              'food of the gods' to modern Cyprus. Our chefs masterfully blend traditional
              Mediterranean recipes with contemporary culinary artistry.
            </p>
            <p className="font-lato text-text-cream/80 text-lg leading-relaxed mb-8">
              Every dish tells a story of heritage, passion, and the finest local ingredients
              sourced from trusted Cypriot producers who share our commitment to excellence.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="font-cinzel text-4xl text-accent mb-2">15+</p>
                <p className="font-lato text-text-cream/70 text-sm">Years of Excellence</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="font-cinzel text-4xl text-accent mb-2">50+</p>
                <p className="font-lato text-text-cream/70 text-sm">Signature Dishes</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="font-cinzel text-4xl text-accent mb-2">5★</p>
                <p className="font-lato text-text-cream/70 text-sm">Average Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
