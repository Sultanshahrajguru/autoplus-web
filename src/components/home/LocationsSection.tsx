import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locations } from '../../data/locations'
import { Button } from '../ui/Button'
import { SectionIntro } from '../ui/SectionIntro'

export function LocationsSection() {
  return (
    <section className="border-y border-graphite-900/8 bg-[#f4f5f8] py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Areas We Serve"
            title="Check whether mobile service is available in your area."
            copy="On-Spot covers selected Melbourne and surrounding areas. Service availability depends on your exact suburb, access conditions, and booking demand on the day."
          />
          <Button to="/areas-we-serve" variant="secondary">
            Check Your Area
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {locations.map((location) => (
            <article className="panel-dark p-5" key={location.slug}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
                    {location.suburb}
                  </h3>
                  <p className="mt-3 inline-flex items-start gap-2 text-sm leading-6 text-metal-300">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {location.address}
                  </p>
                </div>
                <Link
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-graphite-900/8 bg-metal-100"
                  to={`/areas-we-serve/${location.slug}`}
                >
                  <ArrowRight className="h-4 w-4 text-graphite-950" />
                </Link>
              </div>
              <p className="mt-5 text-sm leading-7 text-metal-300">{location.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {location.nearbySuburbs.slice(0, 4).map((suburb) => (
                  <span className="rounded-full border border-graphite-900/8 px-3 py-1 text-xs uppercase tracking-[0.14em] text-metal-300" key={suburb}>
                    {suburb}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
