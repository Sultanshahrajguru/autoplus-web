import type { NavItem, Review } from '../lib/types'

export const navItems: NavItem[] = [
  { label: 'Services', to: '/services' },
  { label: 'Locations', to: '/locations' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Franchising', to: '/franchising' },
  { label: 'Contact', to: '/contact' },
]

export const trustStats = [
  { label: 'Since 1990', value: '35+ Years' },
  { label: 'Qualified Mechanics', value: 'Dealer-grade care' },
  { label: '11 Locations', value: 'Across Victoria' },
  { label: 'Warranty-Safe Servicing', value: 'Manufacturer-aware' },
]

export const featuredReviews: Review[] = [
  {
    name: 'Melissa T.',
    location: 'Geelong',
    service: 'Log Book Service',
    rating: 5,
    quote:
      'AutoPlus handled the service exactly as promised, explained what could wait, and had the car ready before school pickup.',
  },
  {
    name: 'Daniel R.',
    location: 'Bendigo',
    service: 'Brake Repairs',
    rating: 5,
    quote:
      'The quote was clear, the technicians showed me the worn parts, and there were no surprises when I collected the vehicle.',
  },
  {
    name: 'Priya S.',
    location: 'Ringwood',
    service: 'Diagnostics',
    rating: 5,
    quote:
      'We needed a fast answer on an engine warning light before a regional trip. AutoPlus diagnosed it, quoted it, and fixed it the same day.',
  },
]
