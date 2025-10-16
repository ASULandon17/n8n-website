import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ServiceCard from '@/components/services/ServiceCard'
import { SERVICES } from '@/lib/constants'
import AnimatedSection from '@/components/shared/AnimatedSection'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive AI automation services powered by n8n',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive automation solutions tailored to your business needs. 
            From simple workflows to complex AI integrations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm border border-gray-800 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We specialize in creating bespoke automation solutions that perfectly 
              match your unique business requirements.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}