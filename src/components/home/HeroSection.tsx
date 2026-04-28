import { CarFront, MapPin, ScanSearch, Wrench } from 'lucide-react'
import { trustStats } from '../../data/site'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-graphite-900/8 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,23,103,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.6),transparent_30%)]" />
      <div className="section-wrap relative grid gap-10 pb-16 pt-8 lg:grid-cols-[minmax(0,1.12fr)_430px] lg:items-end lg:pb-24">
        <div className="flex flex-col gap-6 fade-up">
          <span className="eyebrow">On-Spot Mobile Mechanix</span>
          <h1 className="max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight text-graphite-950 text-balance sm:text-6xl lg:text-8xl">
            Mobile mechanics that come to you
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-metal-300 sm:text-xl">
            On-Spot Mobile Mechanix provides convenient car servicing, repairs and diagnostics at your home, office or roadside location.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button to="/contact">Book Mobile Mechanic</Button>
            <Button to="/contact" variant="secondary">
              Get a Quote
            </Button>
          </div>

          <div className="grid gap-4 pt-6 sm:grid-cols-2 xl:grid-cols-4">
            {trustStats.map((item) => (
              <div className="rounded-2xl border border-graphite-900/8 bg-white p-4" key={item.label}>
                <p className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-graphite-950">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-metal-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-dark relative overflow-hidden p-6 float-in sm:p-7">
          <div className="flex items-center justify-between border-b border-graphite-900/8 pb-4">
            <div>
              <p className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
                Quick booking details
              </p>
              <p className="text-sm text-metal-300">Tell us what is happening and where the car is.</p>
            </div>
            <div className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-xs uppercase tracking-[0.24em] text-accent">
              Mobile service
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-metal-300">Service needed</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-graphite-950">Diagnostics or service booking</span>
                <ScanSearch className="h-4 w-4 text-accent" />
              </div>
            </div>
            <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-metal-300">Vehicle location</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-graphite-950">Home, office or roadside</span>
                <MapPin className="h-4 w-4 text-accent" />
              </div>
            </div>
            <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-metal-300">Vehicle details</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-graphite-950">Make, model, year and issue</span>
                <CarFront className="h-4 w-4 text-accent" />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-accent/20 bg-accent/8 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-graphite-950">
                  Save time with on-site servicing
                </p>
                <p className="mt-2 text-sm leading-6 text-metal-200">
                  Avoid waiting rooms and organise servicing where the vehicle already is.
                </p>
              </div>
              <Wrench className="h-6 w-6 shrink-0 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
