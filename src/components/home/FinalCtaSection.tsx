import { Button } from '../ui/Button'

export function FinalCtaSection() {
  return (
    <section className="pb-20 pt-6 sm:pb-24">
      <div className="section-wrap">
        <div className="panel-dark overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="eyebrow">Ready To Book?</span>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold uppercase leading-none tracking-tight text-graphite-950 sm:text-5xl">
                Need a mobile mechanic at your home, office or roadside location?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-metal-300 sm:text-lg">
                Tell us where the vehicle is, what it is doing, and what kind of help you need. We will get you moving on the next step quickly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact">Book Mobile Mechanic</Button>
              <Button to="/contact" variant="secondary">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
