import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductGallery } from './components/ProductGallery'
import { SeasonalSection } from './components/SeasonalSection'
import { SpecialsSection } from './components/SpecialsSection'
import { PreorderSection } from './components/PreorderSection'
import { PreorderBar } from './components/PreorderBar'
import { PreorderModal } from './components/PreorderModal'
import { Footer } from './components/Footer'
import { PreorderProvider } from './context/PreorderContext'

export default function App() {
  return (
    <PreorderProvider>
      <Header />
      <main>
        <Hero />
        <ProductGallery />
        <SeasonalSection />
        <SpecialsSection />
        <PreorderSection />
      </main>
      <Footer />
      <PreorderBar />
      <PreorderModal />
    </PreorderProvider>
  )
}
