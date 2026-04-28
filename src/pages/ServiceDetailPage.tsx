import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { FaqList } from '../components/ui/FaqList'
import { PageHero } from '../components/ui/PageHero'
import { serviceMap } from '../data/services'

export function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = serviceSlug ? serviceMap[serviceSlug] : undefined

  if (!service) {
    return <Navigate replace to="/services" />
  }

  const Icon = service.icon
  const related = service.relatedSlugs
    .map((slug) => serviceMap[slug])
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))

  return (
    <>
      <PageHero
        aside={
          <div className="panel-dark p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-graphite-900/8 bg-metal-100">
              <Icon className="h-7 w-7 text-accent" />
            </div>
            <p className="mt-6 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-graphite-950">
              What to expect
            </p>
            <p className="mt-3 text-sm leading-7 text-metal-300">{service.estimate}</p>
            <div className="mt-6 rounded-2xl border border-graphite-900/8 bg-metal-100 p-4 text-sm leading-7 text-metal-200">
              {service.intro}
            </div>
          </div>
        }
        copy={service.summary}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        eyebrow="Service Detail"
        primaryCta={{ label: 'Book This Service', to: '/contact' }}
        secondaryCta={{ label: 'View Locations', to: '/locations' }}
        title={service.title}
      />

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-3">
          <article className="panel-light p-7 lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              What the service includes
            </h2>
            <ul className="mt-6 grid gap-4 text-base leading-7 text-graphite-700 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li className="rounded-2xl border border-graphite-900/10 bg-metal-100 p-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="panel-dark p-7">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-graphite-950">
              Estimate guidance
            </p>
            <p className="mt-4 text-sm leading-7 text-metal-300">{service.estimate}</p>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-4 text-sm leading-7 text-metal-200">
              Final timing and pricing depend on vehicle type, workshop findings, and whether additional components are required.
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-graphite-900/8 bg-[#eef1f4] py-20 sm:py-24">
        <div className="section-wrap grid gap-6 lg:grid-cols-2">
          <article className="panel-dark p-7">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Common symptoms
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-metal-300">
              {service.symptoms.map((item) => (
                <li className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="panel-dark p-7">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Why it matters
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-metal-300">
              {service.whyItMatters.map((item) => (
                <li className="rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-[0.04em] text-graphite-950">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-metal-300">
              Clear answers help customers make faster decisions. Here are the common questions we would expect around this service.
            </p>
            <div className="mt-8">
              <FaqList items={service.faq} />
            </div>
          </div>
          <aside className="panel-dark p-7">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-graphite-950">
              Related services
            </p>
            <div className="mt-6 space-y-3">
              {related.map((item) => (
                <Link
                  className="flex items-center justify-between rounded-2xl border border-graphite-900/8 bg-metal-100 px-4 py-4 transition hover:border-graphite-900/16"
                  key={item.slug}
                  to={`/services/${item.slug}`}
                >
                  <span className="font-medium text-graphite-950">{item.title}</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <Button className="w-full" to="/contact">
                Book a Service
              </Button>
              <Button className="w-full" to="/locations" variant="secondary">
                Find a Centre
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
