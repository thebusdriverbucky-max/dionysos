import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-accent tracking-widest text-sm mb-4 uppercase">
            Get in Touch
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-text-cream mb-4">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-cinzel text-accent text-xl mb-3 tracking-wider">LOCATION</h3>
              <p className="font-lato text-text-cream/80 text-lg">
                123 Ancient Street<br />
                Old Town, Larnaca 6021<br />
                Cyprus
              </p>
            </div>

            <div>
              <h3 className="font-cinzel text-accent text-xl mb-3 tracking-wider">CONTACT</h3>
              <p className="font-lato text-text-cream/80 text-lg">
                Phone: +357 24 123 456<br />
                Email: neodesignengineering@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-cinzel text-accent text-xl mb-3 tracking-wider">PARKING</h3>
              <p className="font-lato text-text-cream/80 text-lg">
                Complimentary valet parking available<br />
                from 18:00 daily
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="h-96 luxury-shadow relative overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52386.8179586693!2d33.5683326!3d34.9119364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1653a48179c1%3A0x6c7f7c9b8e8e8e0!2sLarnaca%2C%20Cyprus!5e0!3m2!1sen!2s!4v1234567890"
              className="w-full h-full border-0 filter grayscale contrast-125"
              allowFullScreen
              loading="lazy"
              title="Restaurant location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
