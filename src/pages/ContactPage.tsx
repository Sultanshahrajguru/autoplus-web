import { Mail, MapPinned, Phone, Send } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { locations } from '../data/locations'
import { formatPhoneForHref } from '../lib/utils'

export function ContactPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              Quick contact
            </p>
            <div className="mt-6 space-y-4 text-sm text-metal-200">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                (03) 9018 2100
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                bookings@autoplus.example
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPinned className="h-4 w-4 text-accent" />
                11 locations across Victoria
              </p>
            </div>
          </div>
        }
        copy="Use the booking form to request a service, ask for a quote, or direct your enquiry to the closest AutoPlus centre."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact & Book' }]}
        eyebrow="Contact & Book"
        primaryCta={{ label: 'Find a Centre', to: '/locations' }}
        secondaryCta={{ label: 'Browse Services', to: '/services' }}
        title="Booking should feel simple, fast, and easy to trust."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <form className="panel-light space-y-5 p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
                Request a booking or quote
              </h2>
              <p className="mt-3 text-base leading-8 text-graphite-700">
                This is a frontend-only placeholder form. It is designed to show the booking experience and can later be connected to your preferred enquiry system.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Full name</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none ring-0 transition focus:border-accent" placeholder="Your name" type="text" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Phone</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="04xx xxx xxx" type="tel" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Email</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="you@example.com" type="email" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Preferred centre</span>
                <select className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" defaultValue="">
                  <option value="" disabled>
                    Select a location
                  </option>
                  {locations.map((location) => (
                    <option key={location.slug} value={location.slug}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Service needed</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Log book service, brakes, diagnostics, quote request..." type="text" />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Vehicle details</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Make, model, year, rego (optional)" type="text" />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">How can we help?</span>
                <textarea className="min-h-36 w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Tell us what the vehicle needs or what concern you want checked." />
              </label>
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#d56c36]"
              type="submit"
            >
              Submit Enquiry <Send className="h-4 w-4" />
            </button>
          </form>

          <aside className="space-y-6">
            <div className="panel-dark p-7">
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-graphite-950">
                Prefer to call?
              </p>
              <p className="mt-4 text-sm leading-7 text-metal-300">
                Call our central booking line and we will direct you to the most suitable AutoPlus centre.
              </p>
              <a
                className="mt-6 inline-flex text-lg font-semibold text-graphite-950"
                href={formatPhoneForHref('(03) 9018 2100')}
              >
                (03) 9018 2100
              </a>
            </div>
            <div className="panel-dark p-7">
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-graphite-950">
                Why customers enquire
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-metal-300">
                {['Upcoming scheduled service', 'Quote for diagnostics or warning lights', 'Brake, battery, or A/C concerns', 'Help finding the right centre'].map((item) => (
                  <li className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
