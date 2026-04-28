import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../../data/site'
import { formatPhoneForHref } from '../../lib/utils'
import { Button } from '../ui/Button'

const activeClass = ({ isActive }: { isActive: boolean }) =>
  `transition ${isActive ? 'text-graphite-950' : 'text-metal-300 hover:text-graphite-950'}`

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite-900/8 bg-white/88 backdrop-blur-md">
      <div className="section-wrap">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link className="flex items-center gap-3" to="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-graphite-900/10 bg-metal-100 font-display text-lg font-bold tracking-[0.18em] text-graphite-950">
              AP
            </span>
            <div>
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.12em] text-graphite-950">
                AutoPlus
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-metal-300">
                Service Centres Victoria
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink className={activeClass} key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              className="inline-flex items-center gap-2 text-sm text-metal-300 transition hover:text-graphite-950"
              href={formatPhoneForHref('(03) 9018 2100')}
            >
              <Phone className="h-4 w-4 text-accent" />
              (03) 9018 2100
            </a>
            <Button to="/contact">Book Now</Button>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-graphite-900/10 bg-white text-graphite-950 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-graphite-900/8 bg-white/96 lg:hidden">
          <div className="section-wrap flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <NavLink
                className={activeClass}
                key={item.to}
                onClick={() => setIsOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <Button to="/contact">Book Now</Button>
              <Button href={formatPhoneForHref('(03) 9018 2100')} variant="secondary">
                Call AutoPlus
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
