export const SITE_CONFIG = {
  name: 'AI Automation Solutions',
  description: 'Transform your business with intelligent automation powered by n8n and AI',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourdomain.com',
  phone: '+1 (555) 123-4567',
  social: {
    twitter: 'https://twitter.com/yourhandle',
    linkedin: 'https://linkedin.com/company/yourcompany',
    github: 'https://github.com/yourcompany',
  },
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 1,
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and connect your tools seamlessly with custom n8n workflows',
    icon: '⚡',
    features: [
      'Custom workflow design',
      'Multi-platform integration',
      'Real-time data sync',
      'Error handling & monitoring',
    ],
  },
  {
    id: 2,
    title: 'AI-Powered Analytics',
    description: 'Transform raw data into actionable insights using advanced AI and machine learning',
    icon: '🤖',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Custom AI models',
      'Automated reporting',
    ],
  },
  {
    id: 3,
    title: 'Document Processing',
    description: 'Automate document extraction, classification, and processing with AI',
    icon: '📄',
    features: [
      'OCR & data extraction',
      'Intelligent classification',
      'Automated validation',
      'Multi-format support',
    ],
  },
  {
    id: 4,
    title: 'Customer Support Automation',
    description: 'Deploy intelligent chatbots and automated support systems',
    icon: '💬',
    features: [
      'AI chatbot integration',
      'Ticket automation',
      '24/7 support availability',
      'Multi-channel support',
    ],
  },
  {
    id: 5,
    title: 'Data Integration',
    description: 'Connect disparate systems and create unified data pipelines',
    icon: '🔗',
    features: [
      'API integration',
      'Database synchronization',
      'ETL processes',
      'Real-time data flow',
    ],
  },
  {
    id: 6,
    title: 'Custom AI Solutions',
    description: 'Bespoke AI solutions tailored to your unique business needs',
    icon: '✨',
    features: [
      'Requirement analysis',
      'Custom model training',
      'Integration & deployment',
      'Ongoing optimization',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We start by understanding your business challenges, goals, and current workflows to identify automation opportunities.',
    icon: '🎯',
    details: [
      'Free initial consultation',
      'Process analysis',
      'ROI assessment',
      'Custom recommendations',
    ],
  },
  {
    id: 2,
    title: 'Workflow Design',
    description: 'Our experts design a tailored automation strategy that aligns with your business objectives.',
    icon: '📐',
    details: [
      'Detailed workflow mapping',
      'Technology selection',
      'Integration planning',
      'Timeline & milestones',
    ],
  },
  {
    id: 3,
    title: 'Implementation',
    description: 'We build, test, and deploy your automation solution with minimal disruption to your operations.',
    icon: '🚀',
    details: [
      'Agile development',
      'Rigorous testing',
      'User training',
      'Smooth deployment',
    ],
  },
  {
    id: 4,
    title: 'Ongoing Support',
    description: 'Continuous monitoring, optimization, and support to ensure your automation delivers lasting value.',
    icon: '🛡️',
    details: [
      '24/7 monitoring',
      'Performance optimization',
      'Regular updates',
      'Dedicated support',
    ],
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp Industries',
    content: 'The automation solutions provided have transformed our operations. We\'ve reduced manual data entry by 85% and our team can now focus on strategic initiatives.',
    avatar: '/images/testimonials/avatar1.jpg',
    company: 'TechCorp',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Operations Director, GlobalRetail',
    content: 'Implementing AI-powered workflows has been a game-changer. The ROI was evident within the first quarter, and the support team is exceptional.',
    avatar: '/images/testimonials/avatar2.jpg',
    company: 'GlobalRetail',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CEO, DataDrive Solutions',
    content: 'Their expertise in n8n and AI automation is unmatched. They delivered a complex integration project ahead of schedule and under budget.',
    avatar: '/images/testimonials/avatar3.jpg',
    company: 'DataDrive',
    rating: 5,
  },
]

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'E-commerce Order Processing Automation',
    client: 'Major Retail Chain',
    industry: 'Retail',
    description: 'Automated end-to-end order processing, inventory management, and customer notifications.',
    results: [
      '90% reduction in processing time',
      '99.9% accuracy rate',
      '$500K annual savings',
    ],
    technologies: ['n8n', 'Shopify API', 'PostgreSQL', 'SendGrid'],
    image: '/images/portfolio/ecommerce.jpg',
  },
  {
    id: 2,
    title: 'AI-Powered Document Classification',
    client: 'Legal Services Firm',
    industry: 'Legal',
    description: 'Implemented ML-based document classification and automated routing system.',
    results: [
      '75% faster document processing',
      'Reduced manual errors by 95%',
      'Processing 10K+ documents daily',
    ],
    technologies: ['n8n', 'Python', 'TensorFlow', 'AWS S3'],
    image: '/images/portfolio/document.jpg',
  },
  {
    id: 3,
    title: 'Multi-Platform Customer Support Bot',
    client: 'SaaS Company',
    industry: 'Technology',
    description: 'Deployed intelligent chatbot across web, Slack, and email channels.',
    results: [
      '60% reduction in support tickets',
      '24/7 customer support',
      '4.8/5 customer satisfaction',
    ],
    technologies: ['n8n', 'OpenAI GPT-4', 'Slack API', 'Zendesk'],
    image: '/images/portfolio/chatbot.jpg',
  },
]

export const BENEFITS = [
  {
    id: 1,
    title: 'Increase Efficiency',
    description: 'Automate repetitive tasks and free your team to focus on high-value work',
    icon: '⚡',
    metric: 'Up to 85% time saved',
  },
  {
    id: 2,
    title: 'Reduce Costs',
    description: 'Eliminate manual errors and reduce operational expenses significantly',
    icon: '💰',
    metric: 'Average 40% cost reduction',
  },
  {
    id: 3,
    title: 'Scale Effortlessly',
    description: 'Handle increased workload without proportional resource increases',
    icon: '📈',
    metric: '10x capacity improvement',
  },
  {
    id: 4,
    title: 'Improve Accuracy',
    description: 'Minimize human error with reliable, consistent automated processes',
    icon: '🎯',
    metric: '99.9% accuracy rate',
  },
  {
    id: 5,
    title: 'Real-Time Insights',
    description: 'Get instant visibility into your operations with automated reporting',
    icon: '📊',
    metric: 'Live dashboards',
  },
  {
    id: 6,
    title: '24/7 Operations',
    description: 'Keep your business running around the clock without additional staffing',
    icon: '🌙',
    metric: 'Always-on automation',
  },
]