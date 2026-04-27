import { ArrowRight, ChartColumnIncreasing, MapPinned, ShieldCheck, UsersRound } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'

const franchisePoints = [
  {
    title: 'Established brand positioning',
    copy: 'AutoPlus is framed as a premium, trustworthy automotive network rather than a bargain workshop chain.',
    icon: ShieldCheck,
  },
  {
    title: 'Operational playbook',
    copy: 'Franchisees benefit from structured customer experience, service presentation, and local-area lead capture.',
    icon: ChartColumnIncreasing,
  },
  {
    title: 'Multi-location growth model',
    copy: 'The concept is designed for metro and regional rollout across Victoria and beyond.',
    icon: MapPinned,
  },
  {
    title: 'Support-led culture',
    copy: 'Brand growth depends on consistency, training, and local leadership rather than generic templated marketing.',
    icon: UsersRound,
  },
]

export function FranchisingPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              Franchise interest
            </p>
            <p className="mt-4 text-sm leading-7 text-metal-300">
              Placeholder content for future network expansion. This page positions AutoPlus as an investable automotive service brand with scalable customer-facing standards.
            </p>
          </div>
        }
        copy="AutoPlus is designed as a brand-led service network with the operational discipline and customer positioning required for measured expansion."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Franchising' }]}
        eyebrow="Franchising"
        primaryCta={{ label: 'Enquire About Franchising', to: '/contact' }}
        secondaryCta={{ label: 'View Locations', to: '/locations' }}
        title="A premium automotive service model built to scale with consistency."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap space-y-10">
          <div className="grid gap-5 md:grid-cols-2">
            {franchisePoints.map((point) => {
              const Icon = point.icon
              return (
                <article className="panel-dark p-6" key={point.title}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.05em] text-white">
                    {point.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-metal-300">{point.copy}</p>
                </article>
              )
            })}
          </div>

          <div className="panel-light grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
                Looking for the franchise pathway?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-graphite-700">
                This site includes placeholder franchising content only, but the structure is ready for future expansion into investment details, market opportunity, operator profiles, and enquiry capture.
              </p>
            </div>
            <Button to="/contact" variant="ghost">
              Contact the Growth Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
