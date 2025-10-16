import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import FAQItem from '@/components/faq/FAQItem'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about our AI automation services',
}

const FAQ_ITEMS = [
  {
    question: 'What is n8n and how does it work?',
    answer: 'n8n is a powerful workflow automation tool that allows you to connect different services and automate tasks. It provides a visual interface where you can design workflows by connecting nodes representing different services and actions.',
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Simple automations can be implemented within days, while complex enterprise solutions typically take 2-6 weeks depending on the scope and integration requirements.',
  },
  {
    question: 'Do I need technical knowledge to use the automations?',
    answer: 'No! Once we implement your automations, they run automatically. We provide training and documentation, and our support team is always available to help.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer: 'Most clients see 40-85% time savings on automated tasks, with typical ROI realized within 3-6 months. We provide detailed ROI calculations during consultation.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We implement enterprise-grade security measures, including encryption, secure API connections, and compliance with data protection regulations.',
  },
  {
    question: 'Can you integrate with my existing systems?',
    answer: 'Yes! We specialize in integrating with virtually any system that has an API, including legacy systems, custom databases, and modern SaaS platforms.',
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our AI automation services
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <FAQItem question={item.question} answer={item.answer} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  )
}