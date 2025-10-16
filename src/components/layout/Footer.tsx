import Link from 'next/link'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants'
import Container from '@/components/ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                AI Automation
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transforming businesses with intelligent automation powered by n8n and AI.
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Workflow Automation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">AI Analytics</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Document Processing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <HiEnvelope className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary-400 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <HiPhone className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <HiMapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AI Automation Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}