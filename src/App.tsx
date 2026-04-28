import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { LocationDetailPage } from './pages/LocationDetailPage'
import { LocationsPage } from './pages/LocationsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/areas-we-serve" element={<LocationsPage />} />
          <Route path="/areas-we-serve/:locationSlug" element={<LocationDetailPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:locationSlug" element={<LocationDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
