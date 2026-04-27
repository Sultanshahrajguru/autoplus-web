import {
  Activity,
  BatteryCharging,
  Gauge,
  SearchCheck,
  ShieldCheck,
  Snowflake,
  Wrench,
} from 'lucide-react'
import type { Service } from '../lib/types'

export const services: Service[] = [
  {
    slug: 'log-book-servicing',
    title: 'Log Book Servicing',
    shortTitle: 'Log Book Service',
    summary: 'Dealer-standard servicing that protects your warranty and keeps your maintenance history in shape.',
    intro:
      'AutoPlus delivers scheduled servicing to manufacturer requirements using quality parts, approved fluids, and a clear report on your vehicle’s condition.',
    includes: [
      'Manufacturer-scheduled checks and maintenance items',
      'Engine oil, filters, and fluid top-ups where applicable',
      'Tyre, brake, battery, and safety inspection',
      'Digital service report with recommendations in plain language',
    ],
    symptoms: [
      'Upcoming service interval or dashboard reminder',
      'Vehicle due for capped-price or scheduled maintenance',
      'You want warranty-safe servicing outside the dealership network',
    ],
    whyItMatters: [
      'Protects resale value with a complete service history',
      'Keeps wear items monitored before they become bigger repairs',
      'Maintains performance, efficiency, and manufacturer compliance',
    ],
    estimate: 'Most log book services are completed same day. Final pricing depends on vehicle make, model, and required service interval.',
    faq: [
      {
        question: 'Will an independent log book service affect my warranty?',
        answer:
          'No. Your vehicle can be serviced by a qualified independent workshop as long as the work follows manufacturer requirements and suitable parts and fluids are used.',
      },
      {
        question: 'Can AutoPlus service European or late-model vehicles?',
        answer:
          'Yes. Our centres work across everyday family vehicles, fleet vehicles, and many late-model makes requiring model-specific service procedures.',
      },
    ],
    relatedSlugs: ['diagnostics', 'batteries', 'air-conditioning'],
    icon: ShieldCheck,
  },
  {
    slug: 'brake-repairs',
    title: 'Brake Repairs',
    shortTitle: 'Brakes',
    summary: 'Brake inspections and repairs that prioritise stopping confidence, consistency, and safety.',
    intro:
      'From pads and rotors to hydraulic issues and brake feel concerns, AutoPlus diagnoses brake systems properly and explains what is urgent versus what can be planned.',
    includes: [
      'Brake pad and rotor inspection or replacement',
      'Brake fluid checks and bleeding where required',
      'Brake noise, pulsation, and pulling diagnosis',
      'Road-test verification after repair',
    ],
    symptoms: [
      'Squealing, grinding, or pulsation under braking',
      'Longer stopping distance or soft brake pedal',
      'Vehicle pulling to one side while braking',
    ],
    whyItMatters: [
      'Brakes are a primary vehicle safety system',
      'Early repair often prevents extra rotor and caliper wear',
      'Consistent braking improves confidence in city and freeway driving',
    ],
    estimate: 'Many pad and rotor jobs can be completed within the day. More complex system faults may require inspection first.',
    faq: [
      {
        question: 'How often should brakes be checked?',
        answer:
          'Brake condition should be checked at every scheduled service, or sooner if you notice noise, vibration, or reduced stopping performance.',
      },
      {
        question: 'Do you machine rotors or replace them?',
        answer:
          'That depends on rotor thickness, surface condition, and manufacturer specifications. We recommend the safest and most economical path after inspection.',
      },
    ],
    relatedSlugs: ['suspension', 'mechanical-repairs', 'diagnostics'],
    icon: Activity,
  },
  {
    slug: 'mechanical-repairs',
    title: 'Mechanical Repairs',
    shortTitle: 'Mechanical Repairs',
    summary: 'Professional repair work for the systems that keep your vehicle dependable day to day.',
    intro:
      'AutoPlus handles general mechanical repairs with clear inspection reporting, realistic lead times, and advice designed for long-term reliability.',
    includes: [
      'Engine, cooling, steering, and driveline repair work',
      'Leak, noise, vibration, and warning-light investigation',
      'Quality parts matched to vehicle usage and budget',
      'Post-repair testing and workshop quality checks',
    ],
    symptoms: [
      'Fluid leaks, unusual noises, or drivability concerns',
      'Warning lights or recurring faults',
      'A vehicle that feels unreliable or overdue for repair',
    ],
    whyItMatters: [
      'Timely repair prevents breakdowns and cascading faults',
      'A proper diagnostic path reduces wasted spend on guesswork',
      'Reliable repairs keep the car safer and easier to live with',
    ],
    estimate: 'Repair timing depends on diagnosis, parts availability, and vehicle access. We provide a quote before approved work begins.',
    faq: [
      {
        question: 'Can I get an inspection before approving repairs?',
        answer:
          'Yes. We can inspect the issue first, explain the cause, and then provide a quote so you can approve the next step with confidence.',
      },
      {
        question: 'Do you work on older vehicles?',
        answer:
          'Yes. We maintain a wide mix of daily drivers and ageing vehicles, balancing safety, longevity, and sensible repair planning.',
      },
    ],
    relatedSlugs: ['diagnostics', 'suspension', 'brake-repairs'],
    icon: Wrench,
  },
  {
    slug: 'diagnostics',
    title: 'Diagnostics',
    shortTitle: 'Diagnostics',
    summary: 'Accurate fault finding for warning lights, performance issues, and intermittent problems.',
    intro:
      'When a car is not behaving as it should, AutoPlus uses a methodical diagnostic process to identify the actual cause before recommending repairs.',
    includes: [
      'Scan-tool testing and system fault-code review',
      'Electrical and sensor fault investigation',
      'Performance, idle, and warning-light diagnosis',
      'Explanation of findings and next recommended action',
    ],
    symptoms: [
      'Check engine or other dashboard warning lights',
      'Poor fuel economy, rough idle, or loss of power',
      'Intermittent issues that are hard to pinpoint',
    ],
    whyItMatters: [
      'Correct diagnosis avoids replacing parts unnecessarily',
      'Hidden faults can affect safety, fuel use, or emissions compliance',
      'A clear diagnostic outcome creates a more reliable repair plan',
    ],
    estimate: 'Diagnostic inspections are quoted first. Further work is only recommended once the findings are confirmed.',
    faq: [
      {
        question: 'Can you diagnose an issue even if the warning light turns off?',
        answer:
          'Often, yes. Stored historical faults and system testing can still provide direction, especially if the vehicle is booked in soon after the issue occurs.',
      },
      {
        question: 'Do diagnostics include a repair?',
        answer:
          'Not automatically. Diagnostics identify the fault and the appropriate remedy. Repairs are quoted separately for approval.',
      },
    ],
    relatedSlugs: ['mechanical-repairs', 'batteries', 'air-conditioning'],
    icon: SearchCheck,
  },
  {
    slug: 'batteries',
    title: 'Batteries',
    shortTitle: 'Batteries',
    summary: 'Battery testing and replacement service to keep your vehicle starting reliably.',
    intro:
      'Whether the issue is a tired battery, charging-system problem, or intermittent starting concern, AutoPlus checks the broader system before recommending replacement.',
    includes: [
      'Battery health and charging-system testing',
      'Replacement battery fitting where required',
      'Terminal inspection and starting-system checks',
      'Advice on battery life and usage patterns',
    ],
    symptoms: [
      'Slow cranking or no-start condition',
      'Electrical resets or low-voltage warnings',
      'Battery older than expected service life',
    ],
    whyItMatters: [
      'Battery and charging issues can cause unexpected breakdowns',
      'System testing avoids replacing a battery when another fault is present',
      'Reliable starting matters for daily commuting and family travel',
    ],
    estimate: 'Battery testing is quick, and many replacements can be completed in a short workshop visit.',
    faq: [
      {
        question: 'How long should a car battery last?',
        answer:
          'Typical life is often three to five years, but climate, trip length, start-stop systems, and driving habits all affect battery longevity.',
      },
      {
        question: 'Can you test the alternator too?',
        answer:
          'Yes. We check the broader charging system so the cause of the issue is properly understood before any replacement is recommended.',
      },
    ],
    relatedSlugs: ['diagnostics', 'log-book-servicing', 'mechanical-repairs'],
    icon: BatteryCharging,
  },
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    shortTitle: 'Air Conditioning',
    summary: 'Cabin comfort and climate-system servicing for stronger cooling and reliable performance.',
    intro:
      'AutoPlus inspects air conditioning performance, system pressures, and related components to restore cooling properly rather than treating only the symptom.',
    includes: [
      'Cooling performance inspection and leak awareness',
      'System pressure and component checks',
      'Air conditioning service guidance and quoting',
      'Advice on cabin filters and comfort-related maintenance',
    ],
    symptoms: [
      'Weak or inconsistent cooling',
      'Unpleasant odours from vents',
      'A/C not engaging or taking too long to cool',
    ],
    whyItMatters: [
      'Comfort affects driver concentration and everyday usability',
      'Ignoring small faults can lead to larger compressor or seal issues',
      'Healthy airflow improves demisting and cabin environment',
    ],
    estimate: 'A/C inspections are quoted up front. Time required depends on whether the issue is service-related or a component fault.',
    faq: [
      {
        question: 'Should I service my A/C even if it still works?',
        answer:
          'If performance is dropping, airflow smells stale, or cooling is inconsistent, it is worth inspecting early before the system deteriorates further.',
      },
      {
        question: 'Do you check cabin filters as part of the visit?',
        answer:
          'Yes. Cabin filters are commonly reviewed because they influence airflow, odour, and interior comfort.',
      },
    ],
    relatedSlugs: ['log-book-servicing', 'diagnostics', 'batteries'],
    icon: Snowflake,
  },
  {
    slug: 'suspension',
    title: 'Suspension',
    shortTitle: 'Suspension',
    summary: 'Ride, steering, and suspension repair work that improves comfort, control, and tyre wear.',
    intro:
      'AutoPlus checks shocks, struts, mounts, bushes, and related steering components when a vehicle no longer feels composed or wears tyres unevenly.',
    includes: [
      'Shock, strut, and suspension component inspection',
      'Noise, looseness, and ride-quality diagnosis',
      'Steering and front-end repair recommendations',
      'Guidance on follow-up alignment where required',
    ],
    symptoms: [
      'Knocking noises over bumps',
      'Vehicle feels unstable or unsettled in corners',
      'Uneven tyre wear or vague steering feel',
    ],
    whyItMatters: [
      'Suspension affects braking stability and road holding',
      'Unresolved wear can accelerate tyre and component damage',
      'A composed vehicle is safer and more comfortable on long drives',
    ],
    estimate: 'Inspection comes first. Repair timing depends on the components involved and whether alignment or additional steering work is needed.',
    faq: [
      {
        question: 'How do I know if my suspension needs attention?',
        answer:
          'Clunks, bouncing, poor steering feel, and uneven tyre wear are common indicators that the system should be checked.',
      },
      {
        question: 'Will suspension repairs improve tyre life?',
        answer:
          'Often, yes. Worn suspension and steering components can cause poor tyre contact and irregular wear patterns.',
      },
    ],
    relatedSlugs: ['brake-repairs', 'mechanical-repairs', 'log-book-servicing'],
    icon: Gauge,
  },
]

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]))
