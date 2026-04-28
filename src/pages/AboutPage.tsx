import { Clock3, MapPinned, MessageSquareQuote, Wrench } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'

const pillars = [
  {
    title: 'Mobile-first convenience',
    copy: 'On-Spot Mobile Mechanix is built around helping customers avoid unnecessary garage visits by bringing servicing and repairs to them.',
    icon: MapPinned,
  },
  {
    title: 'Clear communication',
    copy: 'Customers need direct answers, practical quoting, and honest advice about what can be done on-site and what cannot.',
    icon: MessageSquareQuote,
  },
  {
    title: 'Practical automotive support',
    copy: 'The focus is on mobile servicing, diagnostics, repairs, and common breakdown-related problems for everyday vehicles.',
    icon: Wrench,
  },
  {
    title: 'Time-saving service',
    copy: 'A mobile mechanic visit should reduce disruption, especially for busy workdays, family schedules, or urgent car issues.',
    icon: Clock3,
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              On-Spot Mobile Mechanix
            </p>
            <div className="mt-6 grid gap-3">
              {['Servicing at your location', 'Home, office and roadside callouts', 'Practical mobile mechanic support'].map((item) => (
                <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="On-Spot Mobile Mechanix is positioned as a practical local service business focused on making car servicing and repairs more convenient."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="About"
        primaryCta={{ label: 'Book Mobile Mechanic', to: '/contact' }}
        secondaryCta={{ label: 'Get a Quote', to: '/contact' }}
        title="A mobile mechanic service designed to save customers time."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-[0.9fr_minmax(0,1fr)]">
          <article className="panel-light p-8">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              What the business should communicate
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite-700">
              On-Spot is not a fixed-site service chain. It is a mobile mechanic service that comes to the customer. The site should make that clear at every step, from the hero section to the booking form.
            </p>
            <p className="mt-5 text-base leading-8 text-graphite-700">
              The strongest value proposition is convenience: servicing, diagnostics, and practical repairs carried out at home, at work, or at another accessible location where the car already is.
            </p>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article className="panel-dark p-6" key={pillar.title}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-graphite-900/8 bg-metal-100">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-metal-300">{pillar.copy}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
