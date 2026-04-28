import { ClipboardCheck, CreditCard, MessageSquareMore, UserRoundSearch, Wrench } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'

const steps = [
  {
    title: 'Request a Booking',
    copy: 'Tell us what you need, where the vehicle is, and when you would like a mobile mechanic to attend.',
    icon: ClipboardCheck,
  },
  {
    title: 'Share Your Vehicle Issue',
    copy: 'Provide the make, model, year, symptoms, warning lights, and whether the car is at home, work, or roadside.',
    icon: MessageSquareMore,
  },
  {
    title: 'Mechanic Comes To You',
    copy: 'We attend the location you have provided, subject to service area, access, and booking availability.',
    icon: UserRoundSearch,
  },
  {
    title: 'Service or Repair Completed',
    copy: 'Where the job can be handled on-site, the mechanic completes the work and explains what was done.',
    icon: Wrench,
  },
  {
    title: 'Pay & Drive With Confidence',
    copy: 'You receive a clear summary and practical next-step advice so you know exactly where things stand.',
    icon: CreditCard,
  },
]

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              Mobile mechanic process
            </p>
            <div className="mt-6 grid gap-3">
              {['Home bookings', 'Office callouts', 'Selected roadside help'].map((item) => (
                <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="On-Spot Mobile Mechanix is designed to save you time by bringing servicing, diagnostics, and practical repairs to your location."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'How It Works' }]}
        eyebrow="How It Works"
        primaryCta={{ label: 'Book Mobile Mechanic', to: '/contact' }}
        secondaryCta={{ label: 'Get a Quote', to: '/contact' }}
        title="A clear mobile mechanic process from booking through to completion."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-5 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="panel-dark p-6" key={step.title}>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-metal-300">
                    0{index + 1}
                  </span>
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h2 className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-metal-300">{step.copy}</p>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
