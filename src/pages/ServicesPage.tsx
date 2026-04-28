import { ServiceCard } from '../components/services/ServiceCard'
import { PageHero } from '../components/ui/PageHero'
import { SectionIntro } from '../components/ui/SectionIntro'
import { services } from '../data/services'

export function ServicesPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              Workshop Coverage
            </p>
            <div className="mt-6 grid gap-3">
              {['Scheduled servicing', 'Warning-light diagnostics', 'Brake and suspension work', 'Everyday mechanical repairs'].map((item) => (
                <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="Explore AutoPlus services designed for everyday reliability, warranty-safe maintenance, and clear repair planning."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Services"
        primaryCta={{ label: 'Book a Service', to: '/contact' }}
        secondaryCta={{ label: 'Find a Centre', to: '/locations' }}
        title="Automotive services built for reliability and clear decision-making."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap space-y-10">
          <SectionIntro
            eyebrow="Service Menu"
            title="From scheduled maintenance to fault diagnosis."
            copy="Each service page is structured around what drivers actually need to know: what is included, what symptoms matter, what happens next, and how to book."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
