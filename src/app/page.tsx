import HeroSection from '@/components/home/HeroSection'
import BenefitsList from '@/components/home/BenefitsList'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'
import ParticlesBackground from '@/components/shared/ParticlesBackground'

export default function HomePage() {
  return (
    <>
      <ParticlesBackground />
      <HeroSection />
      <BenefitsList />
      <Testimonials />
      <CTASection />
    </>
  )
}