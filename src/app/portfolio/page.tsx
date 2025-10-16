import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import AnimatedSection from '@/components/shared/AnimatedSection'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our successful AI automation projects and case studies',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real businesses. Discover how we've helped companies 
            transform their operations with intelligent automation.
          </p>
        </AnimatedSection>

        <PortfolioGrid />
      </Container>
    </div>
  )
}