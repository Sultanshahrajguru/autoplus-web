import { ArrowRight, Clock3, MapPin, ShieldCheck, Wrench } from 'lucide-react'
import { trustStats } from '../../data/site'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pt-28 sm:pt-32">
      <div className="absolute inset-0 grid-road opacity-30" />
      <div className="absolute inset-y-0 right-0 hidden w-[44%] bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.03)_28%,rgba(200,91,34,0.12)_100%)] lg:block" />
      <div className="section-wrap relative grid gap-10 pb-16 pt-8 lg:grid-cols-[minmax(0,1.12fr)_430px] lg:items-end lg:pb-24">
        <div className="flex flex-col gap-6 fade-up">
          <span className="eyebrow">Victoria-wide trusted automotive care</span>
          <h1 className="max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.88] tracking-tight text-white text-balance sm:text-6xl lg:text-8xl">
            Premium servicing and repairs without dealership friction.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-metal-300 sm:text-xl">
            AutoPlus keeps Victorian drivers moving with qualified technicians, multi-location convenience, and clear repair advice you can actually act on.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button to="/contact">Book a Service</Button>
            <Button to="/locations" variant="secondary">
              Find Nearest Centre
            </Button>
          </div>

          <div className="grid gap-4 pt-6 sm:grid-cols-2 xl:grid-cols-4">
            {trustStats.map((item) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4" key={item.label}>
                <p className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-metal-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-dark relative overflow-hidden p-6 float-in sm:p-7">
          <div className="absolute inset-x-6 top-5 h-px metal-line opacity-60" />
          <div className="absolute inset-x-6 bottom-5 h-px metal-line opacity-40" />
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-white">
                Quick Booking
              </p>
              <p className="text-sm text-metal-300">Built for fast service enquiries.</p>
            </div>
            <div className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.24em] text-accent-soft">
              Live today
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-metal-300">Choose a service</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">Log Book Service</span>
                <Wrench className="h-4 w-4 text-accent" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-metal-300">Preferred centre</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">Nearest Victoria location</span>
                <MapPin className="h-4 w-4 text-accent" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-metal-300">When do you need it?</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">This week preferred</span>
                <Clock3 className="h-4 w-4 text-accent" />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-accent/25 bg-accent/10 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-white">
                  Warranty-safe service network
                </p>
                <p className="mt-2 text-sm leading-6 text-metal-200">
                  Qualified mechanics, dealer-standard processes, and local centres that keep booking simple.
                </p>
              </div>
              <ShieldCheck className="h-6 w-6 shrink-0 text-accent" />
            </div>
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              href="/contact"
            >
              Start booking <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
