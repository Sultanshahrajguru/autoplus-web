import { CheckCheck, MapPinned, Shield, Sparkles } from 'lucide-react'
import { SectionIntro } from '../ui/SectionIntro'

const points = [
  {
    title: 'Qualified mechanics',
    copy: 'Every AutoPlus centre is built around skilled workshop processes, modern inspections, and proper service discipline.',
    icon: Shield,
  },
  {
    title: 'Transparent advice',
    copy: 'You get practical recommendations with clear priorities, not vague jargon or pressure-driven upselling.',
    icon: CheckCheck,
  },
  {
    title: 'Local service centres',
    copy: 'A multi-location Victoria footprint makes it easier to book close to home, work, or the school run.',
    icon: MapPinned,
  },
  {
    title: 'Reliable repairs',
    copy: 'We focus on diagnosing correctly, quoting clearly, and delivering dependable repair outcomes the first time.',
    icon: Sparkles,
  },
]

export function WhyChooseSection() {
  return (
    <section className="border-y border-white/8 bg-white/[0.025] py-20 sm:py-24">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.88fr_minmax(0,1fr)]">
        <SectionIntro
          eyebrow="Why Choose AutoPlus"
          title="Automotive service built for trust, not guesswork."
          copy="AutoPlus is positioned between the impersonal dealership experience and the inconsistent local workshop. The result is a cleaner, more dependable ownership experience."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <article className="panel-dark p-6" key={point.title}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-white">
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
