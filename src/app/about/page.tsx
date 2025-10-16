import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { HiLightBulb, HiShieldCheck, HiUserGroup, HiTrophy } from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, expertise, and commitment to automation excellence',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">AI Automation Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to democratize AI automation and help businesses 
            of all sizes unlock their full potential.
          </p>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-br from-primary-600/10 to-accent-600/10 backdrop-blur-sm border border-gray-800 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              To empower businesses with cutting-edge AI automation solutions that transform 
              operations, reduce costs, and unlock new opportunities for growth. We believe 
              that intelligent automation should be accessible to everyone, not just tech giants.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HiLightBulb className="w-8 h-8" />,
                title: 'Innovation First',
                description: 'Cutting-edge AI solutions tailored to your unique needs',
              },
              {
                icon: <HiShieldCheck className="w-8 h-8" />,
                title: 'Trusted Expertise',
                description: '10+ years of experience in automation and AI implementation',
              },
              {
                icon: <HiUserGroup className="w-8 h-8" />,
                title: 'Client-Centric',
                description: 'Your success is our priority, with 24/7 dedicated support',
              },
              {
                icon: <HiTrophy className="w-8 h-8" />,
                title: 'Proven Results',
                description: '500+ successful projects with measurable ROI',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover glow className="text-center h-full">
                  <div className="text-primary-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Expertise Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary-400">Technical Excellence</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Expert n8n workflow development and optimization</li>
                <li>• Advanced AI/ML model integration (GPT-4, Claude, Custom Models)</li>
                <li>• 100+ API integrations across major platforms</li>
                <li>• Enterprise-grade security and compliance</li>
                <li>• Scalable cloud infrastructure design</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent-400">Industry Experience</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• E-commerce & Retail automation</li>
                <li>• Healthcare data processing</li>
                <li>• Financial services compliance</li>
                <li>• Manufacturing & Supply Chain</li>
                <li>• SaaS & Technology companies</li>
              </ul>
            </Card>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your automation goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </AnimatedSection>
      </Container>
    </div>
  )
}