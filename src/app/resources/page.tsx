import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { HiDocument, HiPlay, HiBookOpen, HiDownload } from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Educational resources for AI automation and n8n',
}

const RESOURCES = [
  {
    icon: <HiDocument className="w-6 h-6" />,
    title: 'Complete Guide to n8n Automation',
    description: 'Learn the fundamentals of workflow automation with n8n',
    type: 'Guide',
    link: '#',
  },
  {
    icon: <HiPlay className="w-6 h-6" />,
    title: 'Video Tutorial: AI Integration Basics',
    description: 'Step-by-step video guide to integrating AI into your workflows',
    type: 'Video',
    link: '#',
  },
  {
    icon: <HiBookOpen className="w-6 h-6" />,
    title: 'Case Study: E-commerce Automation',
    description: 'How we helped an online retailer save 40 hours per week',
    type: 'Case Study',
    link: '#',
  },
  {
    icon: <HiDownload className="w-6 h-6" />,
    title: 'ROI Calculator Template',
    description: 'Calculate your potential savings with automation',
    type: 'Tool',
    link: '#',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Learning <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our collection of guides, tutorials, and tools to help you master AI automation
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {RESOURCES.map((resource, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link href={resource.link}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-primary-400">{resource.icon}</div>
                    <div className="flex-1">
                      <span className="text-xs text-primary-400 font-medium">{resource.type}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">{resource.title}</h3>
                      <p className="text-gray-400 text-sm">{resource.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  )
}