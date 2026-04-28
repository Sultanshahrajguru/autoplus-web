import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Location } from '../../lib/types'
import { formatPhoneForHref } from '../../lib/utils'

export function LocationCard({ location }: { location: Location }) {
  return (
    <article className="panel-dark flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
            {location.suburb}
          </h3>
          <p className="mt-4 inline-flex items-start gap-2 text-sm leading-7 text-metal-300">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
            {location.address}
          </p>
        </div>
        <span className="rounded-full border border-graphite-900/8 px-3 py-1 text-xs uppercase tracking-[0.18em] text-metal-300">
          {location.coordinatesLabel}
        </span>
      </div>
      <div className="mt-6 space-y-3 text-sm text-metal-300">
        <p className="inline-flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-accent" />
          {location.hours[0]}
        </p>
        <a className="inline-flex items-center gap-2" href={formatPhoneForHref(location.phone)}>
          <Phone className="h-4 w-4 text-accent" />
          {location.phone}
        </a>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {location.services.slice(0, 4).map((service) => (
          <span className="rounded-full border border-graphite-900/8 px-3 py-1 text-xs uppercase tracking-[0.14em] text-metal-300" key={service}>
            {service}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-metal-300">{location.summary}</p>
      <div className="mt-auto pt-8">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950"
          to={`/locations/${location.slug}`}
        >
          View Centre
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
