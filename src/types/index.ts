export interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

export interface ProcessStep {
  id: number
  title: string
  description: string
  icon: string
  details: string[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
  company: string
  rating: number
}

export interface PortfolioItem {
  id: number
  title: string
  client: string
  industry: string
  description: string
  results: string[]
  technologies: string[]
  image: string
}

export interface Benefit {
  id: number
  title: string
  description: string
  icon: string
  metric: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  phone?: string
  service: string
  message: string
}