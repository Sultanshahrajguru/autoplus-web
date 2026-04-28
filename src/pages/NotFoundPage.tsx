import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <section className="section-wrap flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="font-display text-5xl font-semibold uppercase tracking-tight text-graphite-950 sm:text-7xl">
        Page not found
      </h1>
      <p className="max-w-xl text-base leading-8 text-metal-300">
        That page is not available. Head back home, explore services, or request a mobile mechanic booking.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button to="/">Go Home</Button>
        <Button to="/contact" variant="secondary">
          Book Now
        </Button>
      </div>
    </section>
  )
}
