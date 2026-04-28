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
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              Coverage notes
            </p>
            <div className="mt-6 grid gap-3">
              {['Service availability depends on suburb', 'Access and parking matter', 'Roadside help varies by location'].map((item) => (
                <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="On-Spot Mobile Mechanix services selected Melbourne and nearby areas. Coverage depends on your exact service location, access conditions, and booking availability."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Areas We Serve' }]}
        eyebrow="Areas We Serve"
        primaryCta={{ label: 'Book Mobile Mechanic', to: '/contact' }}
        secondaryCta={{ label: 'Check Your Area', to: '/contact' }}
        title="Areas we serve for mobile mechanic bookings."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap space-y-10">
          <SectionIntro
            eyebrow="Coverage Areas"
            title="Choose the area that is closest to your service location."
            copy="These area pages are designed to help customers understand typical coverage and nearby suburbs. Final availability still depends on the specific address and the type of work requested."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
