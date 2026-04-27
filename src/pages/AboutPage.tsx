import { Award, Building2, ShieldCheck, Users2 } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'

const pillars = [
  {
    title: 'Professional standards',
    copy: 'AutoPlus is built around workshop discipline, qualified technicians, and a service experience that feels organised from first contact to collection.',
    icon: Award,
  },
  {
    title: 'Network convenience',
    copy: 'Multiple Victorian locations help customers stay close to home or work while still dealing with one recognisable automotive brand.',
    icon: Building2,
  },
  {
    title: 'Trust-first communication',
    copy: 'Customers need clear advice, prioritised recommendations, and repair explanations that make sense without technical theatre.',
    icon: ShieldCheck,
  },
  {
    title: 'Long-term relationships',
    copy: 'The business model is designed around repeat service, referral trust, and consistent workmanship across locations.',
    icon: Users2,
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              AutoPlus at a glance
            </p>
            <div className="mt-6 grid gap-3">
              {['Established in 1990', '11 Victorian locations', 'Qualified mechanics', 'Conversion-focused customer journey'].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-metal-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        copy="AutoPlus is designed to feel more dependable than the average local garage and more practical than a dealership service desk."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="About AutoPlus"
        primaryCta={{ label: 'Book a Service', to: '/contact' }}
        secondaryCta={{ label: 'View Locations', to: '/locations' }}
        title="A trusted automotive brand built for modern multi-location service."
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-[0.9fr_minmax(0,1fr)]">
          <article className="panel-light p-8">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              The AutoPlus position
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite-700">
              AutoPlus exists for drivers who want the confidence of a professional automotive brand without the friction, opacity, or inflated feel that often comes with dealership servicing. The business is framed around trust, practical advice, and local convenience across Victoria.
            </p>
            <p className="mt-5 text-base leading-8 text-graphite-700">
              Customers are not looking for theatre. They want a vehicle serviced properly, faults diagnosed correctly, repair options prioritised, and communication that respects their time. That operating philosophy sits behind every AutoPlus centre.
            </p>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article className="panel-dark p-6" key={pillar.title}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-metal-300">{pillar.copy}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
