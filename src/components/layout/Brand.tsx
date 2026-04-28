import { useState } from 'react'
import { Link } from 'react-router-dom'

type BrandProps = {
  compact?: boolean
}

export function Brand({ compact = false }: BrandProps) {
  const [logoVisible, setLogoVisible] = useState(true)

  return (
    <Link aria-label="On-Spot Mobile Mechanix home" className="flex items-center" to="/">
      {logoVisible ? (
        <img
          alt="On-Spot Mobile Mechanix"
          className={compact ? 'h-10 w-auto' : 'h-11 sm:h-12 w-auto'}
          onError={() => setLogoVisible(false)}
          src="/on-spot-logo.png"
        />
      ) : (
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-extrabold tracking-[0.18em] text-white shadow-sm">
            OS
          </span>
          <div>
            <p
              className={`font-display font-semibold uppercase tracking-[0.08em] text-graphite-950 ${compact ? 'text-xl' : 'text-2xl'}`}
            >
              On-Spot
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-metal-300">
              Mobile Mechanix
            </p>
          </div>
        </div>
      )}
    </Link>
  )
}
