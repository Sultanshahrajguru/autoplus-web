import { featuredReviews } from '../../data/site'
import { ReviewCard } from '../ui/ReviewCard'
import { SectionIntro } from '../ui/SectionIntro'

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <SectionIntro
          eyebrow="Customer Feedback"
          title="The value is in the convenience."
          copy="Customers book mobile mechanics to save time, get practical help, and avoid disrupting the rest of the day. The copy here should reinforce that benefit clearly."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <ReviewCard key={`${review.name}-${review.location}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
