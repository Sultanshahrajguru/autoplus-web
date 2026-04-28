import { Star } from 'lucide-react'
import type { Review } from '../../lib/types'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="panel-dark flex h-full flex-col gap-5 p-6">
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star className="h-4 w-4 fill-current" key={index} />
        ))}
      </div>
      <p className="text-base leading-7 text-metal-200">“{review.quote}”</p>
      <div className="mt-auto border-t border-graphite-900/8 pt-4">
        <p className="font-semibold text-graphite-950">{review.name}</p>
        <p className="text-sm text-metal-300">
          {review.location} • {review.service}
        </p>
      </div>
    </article>
  )
}
