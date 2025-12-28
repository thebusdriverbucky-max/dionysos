import { lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Menu from './components/sections/Menu'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import LoadingSpinner from './components/ui/LoadingSpinner'
import PageLoader from './components/ui/PageLoader'
import GoldParticles from './components/ui/GoldParticles'

const LazyReservation = lazy(() => import('./components/sections/Reservation'))

function App() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-background relative">
        <GoldParticles />
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Suspense fallback={<LoadingSpinner />}>
            <LazyReservation />
          </Suspense>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
