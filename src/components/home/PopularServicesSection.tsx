import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { SectionIntro } from '../ui/SectionIntro'

export function PopularServicesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <SectionIntro
          eyebrow="Popular Services"
          title="The core work Victorian drivers book most often."
          copy="Built around real workshop demand, these services cover the maintenance, warning-light, brake, battery, and general repair work that keeps vehicles dependable."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon
            return (
              <article className="panel-dark group flex h-full flex-col p-6" key={service.slug}>
                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.05em] text-white">
                  {service.shortTitle}
                </h3>
                <p className="mt-4 text-sm leading-7 text-metal-300">{service.summary}</p>
                <Link
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                  to={`/services/${service.slug}`}
                >
                  Explore service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
