import { ArrowRight, Clock3, MapPin, Phone, Star } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { locationMap } from '../data/locations'
import { formatPhoneForHref } from '../lib/utils'

export function LocationDetailPage() {
  const { locationSlug } = useParams()
  const location = locationSlug ? locationMap[locationSlug] : undefined

  if (!location) {
    return <Navigate replace to="/locations" />
  }

  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              Centre details
            </p>
            <div className="mt-6 space-y-4 text-sm text-metal-200">
              <p className="inline-flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {location.address}
              </p>
              <p className="inline-flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {location.phone}
              </p>
              <p className="inline-flex items-start gap-2">
                <Clock3 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {location.hours[0]}
              </p>
            </div>
          </div>
        }
        copy={location.summary}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Locations', to: '/locations' },
          { label: location.suburb },
        ]}
        eyebrow="Location Detail"
        primaryCta={{ label: 'Book This Centre', to: '/contact' }}
        secondaryCta={{ label: 'Call the Centre', to: '/contact' }}
        title={location.name}
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="panel-light p-7">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Centre overview
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite-700">{location.summary}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-graphite-900/10 bg-metal-100 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-graphite-600">Opening hours</p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-graphite-800">
                  {location.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-graphite-900/10 bg-metal-100 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-graphite-600">Contact</p>
                <p className="mt-3 text-sm leading-7 text-graphite-800">{location.address}</p>
                <a className="mt-2 inline-flex text-sm font-semibold text-graphite-950" href={formatPhoneForHref(location.phone)}>
                  {location.phone}
                </a>
              </div>
            </div>
          </div>

          <aside className="panel-dark p-7">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-graphite-950">
              Map placeholder
            </p>
            <div className="mt-5 rounded-[28px] border border-graphite-900/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.7))] p-5">
              <div className="grid-road flex h-64 items-end rounded-[20px] border border-graphite-900/8 p-5">
                <div>
                  <p className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
                    {location.suburb}
                  </p>
                  <p className="mt-2 text-sm text-metal-300">{location.coordinatesLabel}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent">
                    Interactive map to be connected later
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-graphite-900/8 bg-[#eef1f4] py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-3">
          <article className="panel-dark p-7">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Services available
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {location.services.map((service) => (
                <span className="rounded-full border border-graphite-900/8 px-4 py-2 text-sm text-metal-200" key={service}>
                  {service}
                </span>
              ))}
            </div>
          </article>
          <article className="panel-dark p-7">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Local trust points
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-metal-300">
              {location.trustPoints.map((point) => (
                <li className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
          <article className="panel-dark p-7">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Nearby suburbs
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-metal-300">
              {location.nearbySuburbs.map((suburb) => (
                <li className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3" key={suburb}>
                  {suburb}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Customer feedback
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {location.reviews.map((review) => (
                <article className="panel-dark p-6" key={review.name}>
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star className="h-4 w-4 fill-current" key={index} />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-7 text-metal-200">“{review.quote}”</p>
                  <p className="mt-4 font-semibold text-graphite-950">{review.name}</p>
                  <p className="text-sm text-metal-300">{review.service}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="panel-dark p-7">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-graphite-950">
              Book this centre
            </p>
            <p className="mt-4 text-sm leading-7 text-metal-300">
              Choose {location.suburb} if you want a local workshop backed by the wider AutoPlus service network.
            </p>
            <div className="mt-8 space-y-3">
              <Button className="w-full" to="/contact">
                Book Now
              </Button>
              <Button className="w-full" href={formatPhoneForHref(location.phone)} variant="secondary">
                Call Centre
              </Button>
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950"
                to="/locations"
              >
                View other centres <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
