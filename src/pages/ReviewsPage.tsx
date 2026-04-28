import { PageHero } from '../components/ui/PageHero'
import { ReviewCard } from '../components/ui/ReviewCard'
import { locations } from '../data/locations'
import { featuredReviews } from '../data/site'

export function ReviewsPage() {
  const allReviews = [...featuredReviews, ...locations.flatMap((location) => location.reviews)]

  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              Why people book
            </p>
            <div className="mt-6 grid gap-3">
              {['Saves time', 'No waiting rooms', 'Convenient on-site help', 'Clear communication'].map((item) => (
                <div className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="Customer feedback on a mobile mechanic site should reinforce convenience, clarity, and the value of getting help where the vehicle is located."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
        eyebrow="Reviews"
        primaryCta={{ label: 'Book Mobile Mechanic', to: '/contact' }}
        secondaryCta={{ label: 'Get a Quote', to: '/contact' }}
        title="Real-world reasons customers choose a mobile mechanic."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {allReviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${review.location}-${index}`} review={review} />
          ))}
        </div>
      </section>
    </>
  )
}
