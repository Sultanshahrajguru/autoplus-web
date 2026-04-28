import {
  Activity,
  BatteryCharging,
  CarFront,
  CircleAlert,
  SearchCheck,
  ShieldCheck,
  TimerReset,
  Wrench,
} from 'lucide-react'
import type { Service } from '../lib/types'

export const services: Service[] = [
  {
    slug: 'mobile-log-book-servicing',
    title: 'Mobile Log Book Servicing',
    shortTitle: 'Mobile Log Book Servicing',
    summary: 'Scheduled servicing carried out at your home or workplace using a practical mobile setup.',
    intro:
      'On-Spot Mobile Mechanix performs log book servicing on-site for many everyday vehicles, helping you keep up with maintenance without organising a garage drop-off.',
    includes: [
      'Scheduled service items completed on-site where suitable',
      'Oil, filters, fluid checks, and general safety inspection',
      'Service notes and practical maintenance advice',
      'Convenient booking at your home or workplace',
    ],
    symptoms: [
      'Your service interval is due',
      'You want routine maintenance without losing time at a garage',
      'You need a more convenient option for a busy weekday',
    ],
    whyItMatters: [
      'Routine servicing helps reduce breakdown risk',
      'Keeping maintenance up to date can prevent larger repair bills',
      'A mobile visit saves time and keeps your day moving',
    ],
    estimate:
      'Service timing depends on the vehicle and service schedule. Share your make, model, year, and the service due if known.',
    faq: [
      {
        question: 'What details should I share before booking?',
        answer:
          'Let us know the vehicle make, model, year, registration if available, and whether you know which service is due.',
      },
      {
        question: 'Can this be done at my home or office?',
        answer:
          'Yes. Mobile servicing is commonly carried out at home or at work where the vehicle can be accessed safely.',
      },
    ],
    relatedSlugs: ['mobile-diagnostics', 'battery-replacement', 'general-mechanical-repairs'],
    icon: ShieldCheck,
  },
  {
    slug: 'mobile-diagnostics',
    title: 'Mobile Diagnostics',
    shortTitle: 'Mobile Diagnostics',
    summary: 'On-site fault finding for warning lights, starting issues, and drivability concerns.',
    intro:
      'If your car is showing a warning light, running poorly, or not starting properly, On-Spot can inspect and diagnose the issue on-site before recommending the next step.',
    includes: [
      'Scan-tool diagnostics and fault-code review',
      'Basic electrical and performance checks',
      'Clear explanation of likely causes and repair options',
      'Advice on whether the issue can be repaired on-site',
    ],
    symptoms: [
      'Check engine or other warning lights',
      'Poor starting, rough running, or reduced power',
      'Intermittent issues you want checked before they worsen',
    ],
    whyItMatters: [
      'Proper diagnosis avoids replacing the wrong parts',
      'Early inspection can prevent a simple issue becoming a breakdown',
      'An on-site visit can save towing or garage coordination',
    ],
    estimate:
      'To help us prepare, share the warning light, symptoms, and whether the vehicle is at home, work, or roadside.',
    faq: [
      {
        question: 'Can you diagnose a car that will not start?',
        answer:
          'Yes, in many cases we can inspect non-start issues on-site and determine whether the fault is battery, starter, charging, fuel, or another system.',
      },
      {
        question: 'Will the mechanic come to roadside locations?',
        answer:
          'Roadside support depends on access and the type of fault, but we can often assist or advise on the best next step.',
      },
    ],
    relatedSlugs: ['battery-replacement', 'starter-and-alternator', 'emergency-breakdown-help'],
    icon: SearchCheck,
  },
  {
    slug: 'battery-replacement',
    title: 'Battery Replacement',
    shortTitle: 'Battery Replacement',
    summary: 'Mobile battery testing and replacement so you can get back on the road quickly.',
    intro:
      'A flat or failing battery is one of the most common mobile mechanic callouts. On-Spot can test the system, confirm the issue, and replace the battery on-site where required.',
    includes: [
      'Battery condition and charging checks',
      'On-site replacement where suitable',
      'Terminal and starting-system inspection',
      'Advice if the issue appears to be alternator-related',
    ],
    symptoms: [
      'Car will not start',
      'Slow cranking or repeated flat battery issues',
      'Low-voltage warnings or electrical resets',
    ],
    whyItMatters: [
      'Battery faults can leave you stranded without warning',
      'A mobile replacement avoids towing or jump-start hassle',
      'Testing helps confirm whether the battery is actually the problem',
    ],
    estimate:
      'Share your location, vehicle details, and whether the car is currently not starting so we can plan the visit properly.',
    faq: [
      {
        question: 'Can you replace a battery at my home or work?',
        answer:
          'Yes. Battery replacements are commonly handled at homes, offices, and other accessible parking locations.',
      },
      {
        question: 'What if the battery is not the real issue?',
        answer:
          'We check the charging and starting system as part of the visit so you have a clearer idea of the actual fault.',
      },
    ],
    relatedSlugs: ['starter-and-alternator', 'mobile-diagnostics', 'emergency-breakdown-help'],
    icon: BatteryCharging,
  },
  {
    slug: 'brake-repairs',
    title: 'Brake Repairs',
    shortTitle: 'Brake Repairs',
    summary: 'Mobile brake inspections and repair work for common braking issues.',
    intro:
      'On-Spot can inspect common brake concerns on-site and advise whether the repair can be completed during the visit or needs a different next step.',
    includes: [
      'Brake noise and brake feel inspection',
      'Assessment of pads, rotors, and related components',
      'Quote before work is approved',
      'Practical advice about urgency and safe next steps',
    ],
    symptoms: [
      'Squealing, grinding, or vibration while braking',
      'Soft pedal or reduced braking confidence',
      'Vehicle pulling while braking',
    ],
    whyItMatters: [
      'Brakes are critical to vehicle safety',
      'Early inspection can prevent further wear and higher costs',
      'Convenient mobile advice helps you act sooner',
    ],
    estimate:
      'When booking, tell us what the brakes are doing, whether the vehicle is safe to drive, and where the car is located.',
    faq: [
      {
        question: 'Can brake repairs be completed on-site?',
        answer:
          'Many common brake jobs can be handled on-site, depending on access, parts required, and the condition of the vehicle.',
      },
      {
        question: 'Should I keep driving with noisy brakes?',
        answer:
          'Not without caution. Brake noises can range from minor wear indicators to urgent faults, so inspection should be arranged promptly.',
      },
    ],
    relatedSlugs: ['general-mechanical-repairs', 'mobile-diagnostics', 'emergency-breakdown-help'],
    icon: Activity,
  },
  {
    slug: 'starter-and-alternator',
    title: 'Starter & Alternator',
    shortTitle: 'Starter & Alternator',
    summary: 'Mobile inspection and repair guidance for common starting and charging faults.',
    intro:
      'When a car clicks, cranks poorly, or loses charge repeatedly, the issue may be related to the starter motor or alternator. On-Spot can inspect the system on-site and advise the best repair path.',
    includes: [
      'Starting and charging-system testing',
      'Battery, starter, and alternator fault isolation',
      'Advice on whether replacement can be completed on-site',
      'Clear explanation before work proceeds',
    ],
    symptoms: [
      'Clicking when trying to start',
      'Repeated battery drain',
      'Charging warnings or electrical dropouts while driving',
    ],
    whyItMatters: [
      'Starting faults can quickly leave the vehicle unusable',
      'Correct testing prevents unnecessary part replacement',
      'Mobile assessment is often the fastest way to confirm the issue',
    ],
    estimate:
      'Please tell us whether the vehicle starts at all, whether it needs jump-starting, and where it is currently parked.',
    faq: [
      {
        question: 'Can this be checked roadside?',
        answer:
          'In many cases, yes. Access and safety matter, but roadside inspections for no-start and charging problems are a common request.',
      },
      {
        question: 'How do I know whether it is the battery or alternator?',
        answer:
          'The symptoms can overlap, which is why proper on-site testing is important before deciding what to replace.',
      },
    ],
    relatedSlugs: ['battery-replacement', 'mobile-diagnostics', 'emergency-breakdown-help'],
    icon: TimerReset,
  },
  {
    slug: 'general-mechanical-repairs',
    title: 'General Mechanical Repairs',
    shortTitle: 'General Mechanical Repairs',
    summary: 'Practical on-site mechanical help for common faults, leaks, noises, and repair concerns.',
    intro:
      'On-Spot handles a wide range of everyday mechanical problems, with an honest assessment of what can be repaired mobile and what may need a different next step.',
    includes: [
      'Inspection of common mechanical concerns',
      'Repair advice and quoting before work starts',
      'Mobile repair work where suitable',
      'Clear explanation of parts, labour, and urgency',
    ],
    symptoms: [
      'Unusual noises, leaks, or vibration',
      'The vehicle feels unreliable or unsafe',
      'You need a mechanic to inspect a problem at your location',
    ],
    whyItMatters: [
      'A practical inspection helps prioritise urgent issues',
      'Mobile access makes it easier to get answers quickly',
      'Timely repairs can prevent larger failures later',
    ],
    estimate:
      'For accurate booking, describe the issue, the vehicle, and whether the car is at home, work, or another location.',
    faq: [
      {
        question: 'Can every repair be done on-site?',
        answer:
          'No. Many common repairs can be handled mobile, but some jobs depend on access, tooling, parts, or safety requirements.',
      },
      {
        question: 'What should I send before requesting a quote?',
        answer:
          'Vehicle details, a short description of the problem, any warning lights, and photos if helpful will speed up quoting.',
      },
    ],
    relatedSlugs: ['mobile-diagnostics', 'brake-repairs', 'starter-and-alternator'],
    icon: Wrench,
  },
  {
    slug: 'pre-purchase-inspections',
    title: 'Pre-Purchase Inspections',
    shortTitle: 'Pre-Purchase Inspections',
    summary: 'On-site vehicle inspections to help you make a more informed buying decision.',
    intro:
      'If you are considering a used vehicle, On-Spot can inspect it at the seller’s location and provide practical feedback on condition, visible issues, and obvious concerns.',
    includes: [
      'On-site condition inspection',
      'Visible mechanical and safety observations',
      'Practical feedback before you commit to the purchase',
      'Convenient booking at the vehicle location',
    ],
    symptoms: [
      'You are buying a used car privately',
      'You want another set of eyes before paying a deposit',
      'You need an inspection at the seller’s home or workplace',
    ],
    whyItMatters: [
      'An inspection can highlight issues you may otherwise miss',
      'It supports a more confident purchasing decision',
      'Mobile inspections save time when the car is not near you',
    ],
    estimate:
      'Share the vehicle details, seller location, and timing pressure so we can confirm whether the inspection can be scheduled.',
    faq: [
      {
        question: 'Can you inspect a car at the seller’s home?',
        answer:
          'Yes, provided the location is accessible and the seller is available for the inspection window.',
      },
      {
        question: 'Is a pre-purchase inspection a guarantee?',
        answer:
          'No inspection can guarantee future reliability, but it can reveal visible faults and help you make a more informed decision.',
      },
    ],
    relatedSlugs: ['mobile-diagnostics', 'general-mechanical-repairs', 'mobile-log-book-servicing'],
    icon: CarFront,
  },
  {
    slug: 'emergency-breakdown-help',
    title: 'Emergency Breakdown Help',
    shortTitle: 'Emergency Breakdown Help',
    summary: 'Fast mobile support for common roadside or no-start issues where access and safety allow.',
    intro:
      'When your car lets you down unexpectedly, On-Spot can assist with common urgent issues such as no-start faults, battery problems, and basic breakdown diagnosis.',
    includes: [
      'Roadside or on-location inspection where suitable',
      'Battery, starting, and obvious fault checks',
      'Advice on immediate next steps if full repair is not possible on-site',
      'Clear communication about access, urgency, and safety',
    ],
    symptoms: [
      'Vehicle will not start away from home',
      'You need urgent help at roadside, work, or another location',
      'A fault has left the car unsafe or unreliable to move',
    ],
    whyItMatters: [
      'Quick on-site help can reduce stress and downtime',
      'Some issues can be resolved without towing',
      'A mechanic’s assessment helps you decide the safest next move',
    ],
    estimate:
      'Share your exact location, the issue, and whether the vehicle is in a safe place so we can advise on attendance.',
    faq: [
      {
        question: 'Do you attend roadside callouts?',
        answer:
          'We can assist with many roadside situations depending on location access, conditions, and the type of fault.',
      },
      {
        question: 'What if the repair cannot be done on-site?',
        answer:
          'We will explain what has been found and help you understand the most practical next step, including whether towing is needed.',
      },
    ],
    relatedSlugs: ['battery-replacement', 'starter-and-alternator', 'mobile-diagnostics'],
    icon: CircleAlert,
  },
]

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]))
