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
              What we handle
            </p>
            <div className="mt-6 grid gap-3">
              {['Routine mobile servicing', 'Warning-light diagnostics', 'Starting and battery issues', 'Practical on-site repairs'].map((item) => (
                <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="Explore the mobile mechanic services On-Spot can provide at your home, office, or other accessible location."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Services"
        primaryCta={{ label: 'Book Mobile Mechanic', to: '/contact' }}
        secondaryCta={{ label: 'Get a Quote', to: '/contact' }}
        title="Mobile mechanic services focused on convenience and practical repairs."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap space-y-10">
          <SectionIntro
            eyebrow="Service Menu"
            title="What can often be handled on-site."
            copy="Each service page explains what may be done on-site, what details to send before booking, and when a mobile mechanic visit is the most practical next step."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
