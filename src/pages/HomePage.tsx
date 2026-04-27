import { FinalCtaSection } from '../components/home/FinalCtaSection'
import { HeroSection } from '../components/home/HeroSection'
import { HowItWorksSection } from '../components/home/HowItWorksSection'
import { LocationsSection } from '../components/home/LocationsSection'
import { PopularServicesSection } from '../components/home/PopularServicesSection'
import { ReviewsSection } from '../components/home/ReviewsSection'
import { WhyChooseSection } from '../components/home/WhyChooseSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularServicesSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <LocationsSection />
      <ReviewsSection />
      <FinalCtaSection />
    </>
  )
}
