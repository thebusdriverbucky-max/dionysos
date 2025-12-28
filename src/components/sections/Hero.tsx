import { motion } from 'framer-motion'
import LazyImage from '../ui/LazyImage'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <LazyImage
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        alt="Luxury restaurant interior"
        className="absolute inset-0 hidden md:block"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background hidden md:block" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center min-h-[60vh] md:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-cinzel text-accent tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
            Welcome to
          </p>
        </motion.div>

        <motion.h1
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-bold gold-text mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          DIONYSOS
        </motion.h1>

        <motion.p
          className="font-lato text-text-cream/90 text-xl md:text-2xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Where Ancient Greek Elegance Meets Modern Luxury
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-accent text-primary font-cinzel tracking-wider hover:bg-accent/90 transition-all duration-300 luxury-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve Your Table
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-accent text-accent font-cinzel tracking-wider hover:bg-accent hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
