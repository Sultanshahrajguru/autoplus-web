import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

type Crumb = {
  label: string
  to?: string
}

type PageHeroProps = {
  eyebrow: string
  title: string
  copy: string
  crumbs: Crumb[]
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  aside?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  copy,
  crumbs,
  primaryCta,
  secondaryCta,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_right,rgba(200,91,34,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_55%)]" />
      <div className="section-wrap relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:items-end">
        <div className="flex flex-col gap-6 fade-up">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-metal-300">
            {crumbs.map((crumb, index) => (
              <span className="inline-flex items-center gap-2" key={`${crumb.label}-${index}`}>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                {index < crumbs.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
              </span>
            ))}
          </nav>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.92] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-metal-300">{copy}</p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {primaryCta ? <Button to={primaryCta.to}>{primaryCta.label}</Button> : null}
              {secondaryCta ? (
                <Button to={secondaryCta.to} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
        {aside ? <div className="float-in">{aside}</div> : null}
      </div>
    </section>
  )
}
