import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  to: string
}

export type Service = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  intro: string
  includes: string[]
  symptoms: string[]
  whyItMatters: string[]
  estimate: string
  faq: Array<{ question: string; answer: string }>
  relatedSlugs: string[]
  icon: LucideIcon
}

export type Review = {
  name: string
  location: string
  quote: string
  service: string
  rating: number
}

export type Location = {
  slug: string
  name: string
  address: string
  suburb: string
  phone: string
  hours: string[]
  services: string[]
  summary: string
  trustPoints: string[]
  nearbySuburbs: string[]
  reviews: Review[]
  coordinatesLabel: string
}
