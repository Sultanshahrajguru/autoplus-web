import { Mail, MapPinned, Phone, Send } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { formatPhoneForHref } from '../lib/utils'

export function ContactPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              Book or quote
            </p>
            <div className="mt-6 space-y-4 text-sm text-metal-200">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                0400 000 000
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                bookings@onspotmobilemechanix.example
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPinned className="h-4 w-4 text-accent" />
                Home, office or roadside location
              </p>
            </div>
          </div>
        }
        copy="Use the booking form to request mobile servicing, diagnostics, repairs, or a quote based on your location and vehicle issue."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Contact"
        primaryCta={{ label: 'Book Mobile Mechanic', to: '/contact' }}
        secondaryCta={{ label: 'Call Now', to: '/contact' }}
        title="Tell us where the car is and what help you need."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <form className="panel-light space-y-5 p-8">
            <div>
              <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
                Book mobile mechanic or request quote
              </h2>
              <p className="mt-3 text-base leading-8 text-graphite-700">
                This is a frontend-only placeholder form. It is structured around the practical information a mobile mechanic needs before attending.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Name</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Your name" type="text" />
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
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Suburb / service location</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Suburb or address area" type="text" />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Vehicle make / model / year</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Example: Toyota Corolla 2018" type="text" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Service needed</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Battery, service, brakes, diagnostics..." type="text" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Preferred date / time</span>
                <input className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Preferred booking window" type="text" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Location type</span>
                <select className="w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" defaultValue="">
                  <option value="" disabled>
                    Select location type
                  </option>
                  <option>Home</option>
                  <option>Office</option>
                  <option>Roadside</option>
                </select>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite-700">Issue description</span>
                <textarea className="min-h-36 w-full rounded-2xl border border-graphite-900/10 bg-white px-4 py-3 text-graphite-950 outline-none transition focus:border-accent" placeholder="Describe the issue, symptoms, warning lights, or the service you need." />
              </label>
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#dd2676]"
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
                Call to discuss your issue, check service area availability, or request a quote before booking.
              </p>
              <a
                className="mt-6 inline-flex text-lg font-semibold text-graphite-950"
                href={formatPhoneForHref('0400 000 000')}
              >
                0400 000 000
              </a>
            </div>
            <div className="panel-dark p-7">
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-graphite-950">
                Helpful booking details
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-metal-300">
                {['Exact suburb or location', 'Vehicle make, model and year', 'What the car is doing', 'Whether the vehicle is at home, work or roadside'].map((item) => (
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
