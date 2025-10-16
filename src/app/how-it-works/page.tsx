import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ProcessStep from '@/components/how-it-works/ProcessStep'
import { PROCESS_STEPS } from '@/lib/constants'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Our proven process for implementing successful automation solutions',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven 4-step process ensures successful automation implementation 
            with minimal disruption to your operations.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <AnimatedSection key={step.id} delay={index * 0.1}>
              <ProcessStep step={step} index={index} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 backdrop-blur-sm border border-gray-800 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with intelligent automation. 
              Schedule a free consultation to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}