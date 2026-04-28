import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../lib/types'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <article className="panel-dark group flex h-full flex-col p-6">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-graphite-900/8 bg-metal-100">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-metal-300">{service.summary}</p>
      <div className="mt-auto pt-8">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950"
          to={`/services/${service.slug}`}
        >
          View details
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
