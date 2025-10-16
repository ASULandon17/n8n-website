import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ContactForm from '@/components/contact/ContactForm'
import AnimatedSection from '@/components/shared/AnimatedSection'
import Card from '@/components/ui/Card'
import { HiEnvelope, HiPhone, HiMapPin, HiClock } from 'react-icons/hi2'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us to discuss your automation needs',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Get Started</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with AI automation? 
            We're here to help you every step of the way.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <HiEnvelope className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email Us</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <HiPhone className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Call Us</p>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <HiMapPin className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Visit Us</p>
                      <p className="text-gray-400">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <HiClock className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        24/7 Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary-600/10 to-accent-600/10">
                <h3 className="text-xl font-bold mb-4">Quick Response Time</h3>
                <p className="text-gray-300 mb-4">
                  We typically respond within 2-4 business hours during regular business days.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">Available for consultation</span>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  )
}