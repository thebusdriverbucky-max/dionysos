import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import GreekOrnament from '../ui/GreekOrnament'

type Category = 'starters' | 'mains' | 'desserts' | 'salads' | 'pizzas' | 'beverages'

interface MenuItem {
  name: string
  description: string
  price: string
  vegetarian?: boolean
}

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState<Category>('starters')

  const categories: Record<Category, MenuItem[]> = {
    starters: [
      { name: 'Taramasalata', description: 'Carp roe spread with lemon and olive oil', price: '€12' },
      { name: 'Halloumi Me Meli', description: 'Grilled halloumi with honey and sesame', price: '€14', vegetarian: true },
      { name: 'Greek Salad', description: 'Fresh tomatoes, cucumber, olives, feta', price: '€16', vegetarian: true },
      { name: 'Dolmadakia', description: 'Stuffed vine leaves with rice and herbs', price: '€13', vegetarian: true },
    ],
    mains: [
      { name: 'Moussaka', description: 'Layered eggplant, minced meat, béchamel', price: '€24' },
      { name: 'Lamb Kleftiko', description: 'Slow-roasted lamb with herbs and potatoes', price: '€28' },
      { name: 'Sea Bass Plaki', description: 'Oven-baked sea bass with tomato sauce', price: '€32' },
      { name: 'Souvlaki Platter', description: 'Grilled skewers with tzatziki and pita', price: '€26' },
    ],
    desserts: [
      { name: 'Baklava', description: 'Layers of phyllo, nuts, honey syrup', price: '€10', vegetarian: true },
      { name: 'Galaktoboureko', description: 'Custard pie with phyllo and syrup', price: '€11', vegetarian: true },
      { name: 'Loukoumades', description: 'Honey-soaked dough balls with cinnamon', price: '€9', vegetarian: true },
      { name: 'Ekmek Kataifi', description: 'Shredded pastry with custard and cream', price: '€12', vegetarian: true },
    ],
    salads: [
      { name: 'Traditional Cypriot Village Salad', description: 'Tomatoes, cucumber, feta, olives, oregano', price: '€12.50', vegetarian: true },
      { name: 'Halloumi Salad', description: 'Mixed greens, grilled halloumi, pomegranate', price: '€14.00', vegetarian: true },
      { name: 'Seafood Salad', description: 'Shrimp, octopus, calamari, citrus dressing', price: '€16.00' },
    ],
    pizzas: [
      { name: 'Margherita', description: 'San Marzano tomato, mozzarella, basil', price: '€13.00', vegetarian: true },
      { name: 'Cypriot Special', description: 'Halloumi, lountza, olives, rocket', price: '€16.00' },
      { name: 'Seafood Deluxe', description: 'Prawns, calamari, anchovies, garlic', price: '€18.00' },
      { name: 'Vegetarian Garden', description: 'Grilled vegetables, feta, pesto', price: '€14.50', vegetarian: true },
    ],
    beverages: [
      { name: 'Cypriot Coffee', description: 'Traditional Cypriot coffee', price: '€3.50', vegetarian: true },
      { name: 'Greek Coffee', description: 'Traditional Greek coffee', price: '€3.50', vegetarian: true },
      { name: 'Espresso', description: 'Italian-style espresso', price: '€2.80', vegetarian: true },
      { name: 'Fresh Orange Juice', description: 'Freshly squeezed oranges', price: '€4.50', vegetarian: true },
      { name: 'House Wine (glass)', description: 'Selection of local wines', price: '€6.00', vegetarian: true },
      { name: 'Premium Wine (glass)', description: 'Premium international wines', price: '€9.00', vegetarian: true },
      { name: 'Local Beer Keo', description: 'Cypriot lager beer', price: '€4.50', vegetarian: true },
    ],
  }

  const categoryDisplayNames: Record<Category, string> = {
    starters: 'Starters',
    mains: 'Mains',
    desserts: 'Desserts',
    salads: 'Salads',
    pizzas: 'Wood-Fired Pizzas',
    beverages: 'Beverages',
  }

  return (
    <section id="menu" className="py-24 bg-primary relative overflow-hidden" ref={ref}>
      <GreekOrnament position="top-right" />
      <GreekOrnament position="bottom-left" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-accent tracking-widest text-sm mb-4 uppercase">
            Culinary Delights
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-text-cream mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto" />
        </motion.div>

        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {(Object.keys(categories) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-cinzel tracking-wider text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-primary'
                  : 'border border-accent text-accent hover:bg-accent/10'
              }`}
            >
              {categoryDisplayNames[category]}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {categories[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex justify-between items-start border-b border-accent/20 pb-6 group hover:border-accent/50 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-cormorant text-2xl text-text-cream mb-2 group-hover:text-accent transition-colors">
                  {item.name}
                  {item.vegetarian && (
                    <span className="ml-2 text-accent text-lg font-lato">(v)</span>
                  )}
                </h3>
                <p className="font-lato text-text-cream/70">{item.description}</p>
              </div>
              <span className="font-cinzel text-2xl text-accent ml-4 whitespace-nowrap">{item.price}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="font-lato text-text-cream/50 text-sm">
            (v) = vegetarian
          </p>
        </motion.div>
      </div>
    </section>
  )
}
