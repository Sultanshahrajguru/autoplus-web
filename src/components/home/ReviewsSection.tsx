import { featuredReviews } from '../../data/site'
import { Button } from '../ui/Button'
import { ReviewCard } from '../ui/ReviewCard'
import { SectionIntro } from '../ui/SectionIntro'

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Reviews"
            title="Why customers come back to AutoPlus."
            copy="The strongest trust signal in automotive service is repeat behaviour. These review-style snapshots reflect the professionalism, clarity, and follow-through customers expect."
          />
          <Button to="/reviews" variant="secondary">
            Read More Reviews
          </Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <ReviewCard key={`${review.name}-${review.location}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
