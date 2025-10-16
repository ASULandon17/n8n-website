import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import { HiCheck } from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for our AI automation services',
}

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$2,499',
    period: '/month',
    description: 'Perfect for small businesses getting started with automation',
    features: [
      'Up to 10 workflows',
      '5,000 executions/month',
      'Basic integrations',
      'Email support',
      'Documentation access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$5,999',
    period: '/month',
    description: 'For growing businesses ready to scale their automation',
    features: [
      'Unlimited workflows',
      '50,000 executions/month',
      'Advanced AI integrations',
      'Priority support',
      'Custom training',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited everything',
      'Custom AI models',
      'Dedicated support team',
      'SLA guarantee',
      'On-premise deployment',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core automation features.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card
                hover
                className={`relative h-full flex flex-col ${
                  plan.popular ? 'border-primary-500 shadow-xl shadow-primary-500/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <HiCheck className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    asChild
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  )
}