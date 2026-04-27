import { LocationCard } from '../components/locations/LocationCard'
import { PageHero } from '../components/ui/PageHero'
import { SectionIntro } from '../components/ui/SectionIntro'
import { locations } from '../data/locations'

export function LocationsPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              Find your nearest centre
            </p>
            <div className="mt-6 grid gap-3">
              {['Metro East and South-East', 'Inner and outer west', 'Regional Victoria coverage'].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="AutoPlus locations are structured to make booking simple whether you need a local commuter service, a warning-light diagnosis, or a practical repair quote."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Locations' }]}
        eyebrow="Locations"
        primaryCta={{ label: 'Book a Service', to: '/contact' }}
        secondaryCta={{ label: 'Browse Services', to: '/services' }}
        title="Eleven service centres positioned across Victoria."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap space-y-10">
          <SectionIntro
            eyebrow="Centre Directory"
            title="Choose the workshop that fits your route."
            copy="Each AutoPlus location offers core servicing and repair capability, with local teams ready to inspect, quote, and coordinate the work clearly."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
