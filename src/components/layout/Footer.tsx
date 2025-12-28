import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-cormorant text-3xl font-bold gold-text mb-4">Dionysos</h3>
            <p className="font-lato text-text-cream/70 leading-relaxed">
              Experience the finest Cypriot cuisine in an atmosphere of ancient luxury
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-accent text-lg mb-4 tracking-wider">HOURS</h4>
            <div className="font-lato text-text-cream/70 space-y-2">
              <p>Monday - Thursday: 18:00 - 23:00</p>
              <p>Friday - Saturday: 18:00 - 00:00</p>
              <p>Sunday: 12:00 - 22:00</p>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-accent text-lg mb-4 tracking-wider">CONTACT</h4>
            <div className="font-lato text-text-cream/70 space-y-2">
              <p>123 Ancient Street</p>
              <p>Larnaca, Cyprus</p>
              <p>+357 24 123 456</p>
              <p>neodesignengineering@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent/20 text-center">
          <motion.p
            className="font-lato text-text-cream/50 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            © {currentYear} Dionysos Restaurant. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
