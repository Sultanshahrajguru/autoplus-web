import { ClipboardCheck, FileText, Search, Wrench } from 'lucide-react'
import { Button } from '../ui/Button'
import { SectionIntro } from '../ui/SectionIntro'

const steps = [
  { title: 'Book', copy: 'Choose your service and nearest centre in a few clicks.', icon: ClipboardCheck },
  { title: 'Inspect', copy: 'Our team checks the vehicle properly before recommending work.', icon: Search },
  { title: 'Quote', copy: 'You receive clear pricing and priority guidance.', icon: FileText },
  { title: 'Approve', copy: 'Nothing proceeds until you are comfortable with the plan.', icon: ClipboardCheck },
  { title: 'Complete', copy: 'The work is carried out and reviewed before handover.', icon: Wrench },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrap space-y-10">
        <SectionIntro
          eyebrow="How It Works"
          title="A cleaner process from booking through to handover."
          copy="The AutoPlus model is designed to remove confusion. Customers know what happens next, what the issue is, and what they are approving."
          align="center"
        />
        <div className="grid gap-4 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="panel-dark relative p-6" key={step.title}>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-metal-400">
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
          <Button to="/contact">Start a Booking</Button>
        </div>
      </div>
    </section>
  )
}
