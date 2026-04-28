import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { SectionIntro } from '../ui/SectionIntro'

export function PopularServicesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <SectionIntro
          eyebrow="Mobile Mechanic Services"
          title="Practical services handled where your car is parked."
          copy="On-Spot focuses on mobile mechanic work that saves time and makes it easier to organise servicing, inspections, and common repairs."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="panel-dark group flex h-full flex-col p-6" key={service.slug}>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-graphite-900/8 bg-metal-100">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
                  {service.shortTitle}
                </h3>
                <p className="mt-4 text-sm leading-7 text-metal-300">{service.summary}</p>
                <Link
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950"
                  to={`/services/${service.slug}`}
                >
                  View service
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
