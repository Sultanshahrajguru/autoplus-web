import { CarFront, ClipboardCheck, CreditCard, MessageSquareMore, Wrench } from 'lucide-react'
import { Button } from '../ui/Button'
import { SectionIntro } from '../ui/SectionIntro'

const steps = [
  { title: 'Request a Booking', copy: 'Choose a time and tell us where the vehicle is located.', icon: ClipboardCheck },
  { title: 'Share Your Vehicle Issue', copy: 'Let us know the service needed, symptoms, and vehicle details.', icon: MessageSquareMore },
  { title: 'Mechanic Comes To You', copy: 'We attend your home, office, or another suitable location.', icon: CarFront },
  { title: 'Service or Repair Completed', copy: 'Where suitable, the work is carried out on-site.', icon: Wrench },
  { title: 'Pay & Drive With Confidence', copy: 'You receive a clear summary and can get back on the road.', icon: CreditCard },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <SectionIntro
          eyebrow="How It Works"
          title="A simple mobile mechanic process."
          copy="On-Spot is built around making the booking, inspection, and repair process easier to understand and easier to organise."
          align="center"
        />
        <div className="grid gap-4 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="panel-dark relative p-6" key={step.title}>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-metal-300">
                    0{index + 1}
                  </span>
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-metal-300">{step.copy}</p>
              </article>
            )
          })}
        </div>
        <div className="flex justify-center">
          <Button to="/how-it-works" variant="secondary">
            View Full Process
          </Button>
        </div>
      </div>
    </section>
  )
}
