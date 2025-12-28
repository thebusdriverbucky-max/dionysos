import { motion } from 'framer-motion'
import { useState } from 'react'
import GreekOrnament from '../ui/GreekOrnament'

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation submitted:', formData)
    alert('Thank you for your reservation request! We will contact you shortly to confirm.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="reservation" className="py-24 bg-primary relative overflow-hidden">
      <GreekOrnament position="top-left" />
      <GreekOrnament position="top-right" />
      <GreekOrnament position="bottom-right" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gold-gradient" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-cinzel text-accent tracking-widest text-sm mb-4 uppercase">
              Book Your Experience
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-text-cream mb-4">
              Make a Reservation
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto" />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-lato text-text-cream/80 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-accent/30 text-text-cream focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-lato text-text-cream/80 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-accent/30 text-text-cream focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-lato text-text-cream/80 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-accent/30 text-text-cream focus:border-accent focus:outline-none transition-colors"
                  placeholder="+357 XX XX XX XX"
                />
              </div>
              <div>
                <label className="block font-lato text-text-cream/80 mb-2">Number of Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-accent/30 text-text-cream focus:border-accent focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-lato text-text-cream/80 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-background/50 border border-accent/30 text-text-cream focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-lato text-text-cream/80 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  min="18:00"
                  max="23:00"
                  className="w-full px-4 py-3 bg-background/50 border border-accent/30 text-text-cream focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 bg-accent text-primary font-cinzel tracking-wider hover:bg-accent/90 transition-all duration-300 luxury-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reserve Now
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
