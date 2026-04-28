import { CarTaxiFront, ClipboardList, Clock3, ShieldCheck, UserRoundCog } from 'lucide-react'
import { SectionIntro } from '../ui/SectionIntro'

const points = [
  {
    title: 'Convenient mobile service',
    copy: 'We come to your home, office, or other suitable location so you do not lose time travelling to a garage.',
    icon: CarTaxiFront,
  },
  {
    title: 'Clear quotes before work',
    copy: 'You get practical information about the issue and clear approval steps before repair work goes ahead.',
    icon: ClipboardList,
  },
  {
    title: 'Experienced mechanics',
    copy: 'On-Spot is focused on solving common car service and repair problems efficiently at the location that suits you.',
    icon: UserRoundCog,
  },
  {
    title: 'No waiting rooms',
    copy: 'A mobile visit makes everyday servicing easier for workdays, family schedules, and urgent car issues.',
    icon: Clock3,
  },
  {
    title: 'Service at home or work',
    copy: 'Many maintenance and repair jobs can be inspected and completed where the vehicle is already parked.',
    icon: ShieldCheck,
  },
]

export function WhyChooseSection() {
  return (
    <section className="border-y border-graphite-900/8 bg-[#f4f5f8] py-20 sm:py-24">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.88fr_minmax(0,1fr)]">
        <SectionIntro
          eyebrow="Why Choose On-Spot"
          title="A mobile mechanic service built around convenience and clear communication."
          copy="This site should feel like a practical service business: local, responsive, and focused on getting your car checked without the hassle of a garage visit."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <article className="panel-dark p-6" key={point.title}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-graphite-900/8 bg-metal-100">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-graphite-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-metal-300">{point.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
