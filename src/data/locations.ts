import type { Location } from '../lib/types'

export const locations: Location[] = [
  {
    slug: 'western-suburbs',
    name: 'Western Suburbs Mobile Service',
    suburb: 'Western Suburbs',
    address: 'Home, office and selected roadside callouts across Melbourne’s west',
    phone: '0400 000 000',
    hours: ['Mon to Fri: 7:30am - 5:30pm', 'Saturday: By appointment', 'Sunday: Limited emergency availability'],
    services: ['Mobile Log Book Servicing', 'Battery Replacement', 'Brake Repairs', 'Mobile Diagnostics'],
    summary:
      'On-Spot provides mobile mechanic support across Melbourne’s western suburbs, with service availability depending on booking demand, access, and your exact location.',
    trustPoints: ['Home and workplace bookings', 'Practical same-day availability where possible', 'Clear quoting before work starts'],
    nearbySuburbs: ['Werribee', 'Hoppers Crossing', 'Point Cook', 'Tarneit', 'Sunshine', 'Melton'],
    coordinatesLabel: 'Mobile coverage area',
    reviews: [
      {
        name: 'Melissa T.',
        location: 'Werribee',
        service: 'Mobile Log Book Servicing',
        rating: 5,
        quote: 'The mechanic turned up to my workplace on time and the whole process was far easier than organising a garage visit.',
      },
    ],
  },
  {
    slug: 'south-east-melbourne',
    name: 'South-East Melbourne Mobile Service',
    suburb: 'South-East Melbourne',
    address: 'Home, office and accessible roadside service across the south-east',
    phone: '0400 000 000',
    hours: ['Mon to Fri: 7:30am - 5:30pm', 'Saturday: By appointment', 'Sunday: Limited emergency availability'],
    services: ['Mobile Diagnostics', 'Starter & Alternator', 'Brake Repairs', 'General Mechanical Repairs'],
    summary:
      'For customers in Melbourne’s south-east, On-Spot offers mobile inspections, repairs, and diagnostics where the vehicle can be accessed safely.',
    trustPoints: ['Roadside help where suitable', 'Practical repair advice', 'Convenient suburban callouts'],
    nearbySuburbs: ['Dandenong', 'Noble Park', 'Springvale', 'Keysborough', 'Hallam', 'Endeavour Hills'],
    coordinatesLabel: 'Mobile coverage area',
    reviews: [
      {
        name: 'Daniel R.',
        location: 'Noble Park',
        service: 'Brake Repairs',
        rating: 5,
        quote: 'Having the work checked at home saved a lot of time, and the quote was straightforward before anything started.',
      },
    ],
  },
  {
    slug: 'eastern-suburbs',
    name: 'Eastern Suburbs Mobile Service',
    suburb: 'Eastern Suburbs',
    address: 'On-site mobile mechanic visits across Melbourne’s east',
    phone: '0400 000 000',
    hours: ['Mon to Fri: 7:30am - 5:30pm', 'Saturday: By appointment', 'Sunday: Limited emergency availability'],
    services: ['Mobile Log Book Servicing', 'Mobile Diagnostics', 'Battery Replacement', 'Pre-Purchase Inspections'],
    summary:
      'On-Spot supports drivers across the eastern suburbs with mobile servicing, diagnostics, and inspection work at convenient home or office locations.',
    trustPoints: ['Office car park servicing', 'Pre-purchase inspections at seller locations', 'Flexible weekday bookings'],
    nearbySuburbs: ['Ringwood', 'Croydon', 'Mitcham', 'Heathmont', 'Donvale', 'Vermont'],
    coordinatesLabel: 'Mobile coverage area',
    reviews: [
      {
        name: 'Priya S.',
        location: 'Ringwood',
        service: 'Mobile Diagnostics',
        rating: 5,
        quote: 'We got clear fault finding at home without needing to arrange towing or spend time waiting around.',
      },
    ],
  },
  {
    slug: 'geelong-and-surrounds',
    name: 'Geelong & Surrounds Mobile Service',
    suburb: 'Geelong & Surrounds',
    address: 'Mobile servicing across Geelong and nearby suburbs',
    phone: '0400 000 000',
    hours: ['Mon to Fri: 7:30am - 5:30pm', 'Saturday: By appointment', 'Sunday: Limited emergency availability'],
    services: ['Mobile Log Book Servicing', 'General Mechanical Repairs', 'Battery Replacement', 'Pre-Purchase Inspections'],
    summary:
      'Customers in Geelong and surrounding suburbs can request on-site servicing and repairs, subject to travel time and booking availability.',
    trustPoints: ['Local suburban callouts', 'Used-car inspection bookings', 'Convenient home servicing'],
    nearbySuburbs: ['Geelong', 'Belmont', 'Highton', 'Newtown', 'North Geelong', 'Waurn Ponds'],
    coordinatesLabel: 'Mobile coverage area',
    reviews: [
      {
        name: 'Jason H.',
        location: 'Belmont',
        service: 'Pre-Purchase Inspections',
        rating: 5,
        quote: 'Very practical inspection advice and much easier than trying to organise a car yard or garage check myself.',
      },
    ],
  },
]

export const locationMap = Object.fromEntries(locations.map((location) => [location.slug, location]))
