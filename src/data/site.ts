import type { NavItem, Review } from '../lib/types'

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Areas We Serve', to: '/areas-we-serve' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const trustStats = [
  { label: 'We Come To You', value: 'On-Site Service' },
  { label: 'Mobile Servicing', value: 'Home Or Work' },
  { label: 'Diagnostics & Repairs', value: 'Practical Support' },
  { label: 'Home, Office & Roadside', value: 'Where You Need Us' },
]

export const featuredReviews: Review[] = [
  {
    name: 'Melissa T.',
    location: 'Werribee',
    service: 'Mobile Log Book Servicing',
    rating: 5,
    quote:
      'The mechanic arrived at my office car park, completed the service on-site, and explained everything clearly before leaving.',
  },
  {
    name: 'Daniel R.',
    location: 'Dandenong',
    service: 'Brake Repairs',
    rating: 5,
    quote:
      'Booking was simple, the quote was clear, and having the repair done at home saved me most of the day.',
  },
  {
    name: 'Priya S.',
    location: 'Ringwood',
    service: 'Mobile Diagnostics',
    rating: 5,
    quote:
      'We had a warning light come on before a trip and On-Spot worked through the issue on-site without us needing a tow or garage visit.',
  },
]
