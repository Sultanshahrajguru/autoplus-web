import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locations } from '../../data/locations'
import { Button } from '../ui/Button'
import { SectionIntro } from '../ui/SectionIntro'

export function LocationsSection() {
  return (
    <section className="border-y border-graphite-900/8 bg-[#eef1f4] py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Locations"
            title="A service network built around Victoria."
            copy="AutoPlus gives customers the confidence of a recognisable automotive brand with the convenience of a local workshop. Find the closest centre and book directly."
          />
          <Button to="/locations" variant="secondary">
            View All Locations
          </Button>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_1fr]">
          <div className="panel-dark relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),transparent_42%,rgba(200,91,34,0.08)_100%)]" />
            <div className="relative">
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
                Victoria Coverage
              </p>
              <p className="mt-3 max-w-lg text-sm leading-7 text-metal-300">
                From Melbourne growth corridors to regional centres, AutoPlus is positioned to make routine servicing and repair access easier.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Metro East', 'Metro West', 'South-East', 'Regional Victoria'].map((zone) => (
                  <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 p-4" key={zone}>
                    <p className="text-xs uppercase tracking-[0.22em] text-metal-400">Zone</p>
                    <p className="mt-2 font-semibold text-graphite-950">{zone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {locations.slice(0, 4).map((location) => (
              <article className="panel-dark p-5" key={location.slug}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
                      {location.suburb}
                    </h3>
                    <p className="mt-2 inline-flex items-start gap-2 text-sm leading-6 text-metal-300">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {location.address}
                    </p>
                    <p className="mt-2 inline-flex items-start gap-2 text-sm leading-6 text-metal-300">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {location.hours[0]}
                    </p>
                  </div>
                  <Link
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-graphite-900/8 bg-metal-100"
                    to={`/locations/${location.slug}`}
                  >
                    <ArrowRight className="h-4 w-4 text-graphite-950" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
