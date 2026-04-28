import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locations } from '../../data/locations'
import { navItems } from '../../data/site'
import { formatPhoneForHref } from '../../lib/utils'

export function Footer() {
  return (
    <footer className="border-t border-graphite-900/8 bg-[#f0f2f4]">
      <div className="section-wrap grid gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-graphite-900/10 bg-white font-display text-lg font-bold tracking-[0.18em] text-graphite-950">
              AP
            </span>
            <div>
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.12em] text-graphite-950">
                AutoPlus
              </p>
              <p className="text-sm text-metal-300">
                Multi-location automotive servicing and repairs across Victoria.
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-metal-300">
            AutoPlus combines dealership-grade processes with practical local service. Book servicing, diagnostics, brake work, batteries, and repairs with a team built for reliability.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-graphite-900/8 bg-white p-4">
              <Phone className="mb-3 h-5 w-5 text-accent" />
              <a className="text-sm text-graphite-900" href={formatPhoneForHref('(03) 9018 2100')}>
                (03) 9018 2100
              </a>
            </div>
            <div className="rounded-2xl border border-graphite-900/8 bg-white p-4">
              <MapPin className="mb-3 h-5 w-5 text-accent" />
              <p className="text-sm text-graphite-900">11 centres across Victoria</p>
            </div>
            <div className="rounded-2xl border border-graphite-900/8 bg-white p-4">
              <Clock3 className="mb-3 h-5 w-5 text-accent" />
              <p className="text-sm text-graphite-900">Mon to Sat availability</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-5 font-display text-lg font-semibold uppercase tracking-[0.12em] text-graphite-950">
            Explore
          </p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link className="text-metal-300 transition hover:text-graphite-950" key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 font-display text-lg font-semibold uppercase tracking-[0.12em] text-graphite-950">
            Popular Centres
          </p>
          <div className="grid gap-3">
            {locations.slice(0, 4).map((location) => (
              <Link
                className="group inline-flex items-center justify-between rounded-2xl border border-graphite-900/8 bg-white px-4 py-3 transition hover:border-graphite-900/16 hover:bg-metal-100"
                key={location.slug}
                to={`/locations/${location.slug}`}
              >
                <span>
                  <span className="block font-medium text-graphite-950">{location.suburb}</span>
                  <span className="block text-sm text-metal-300">{location.address}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-accent transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
