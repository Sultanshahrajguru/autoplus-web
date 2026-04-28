import { MapPin, Phone, Wrench } from 'lucide-react'
import { formatPhoneForHref } from '../../lib/utils'

const actions = [
  { label: 'Call', href: formatPhoneForHref('0400 000 000'), icon: Phone },
  { label: 'Book', href: '/contact', icon: Wrench },
  { label: 'Quote', href: '/contact', icon: MapPin },
]

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 rounded-[24px] border border-graphite-900/10 bg-white/94 p-2 shadow-2xl backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        {actions.map((action) => {
          const Icon = action.icon

          return (
            <a
              className="flex flex-col items-center justify-center gap-1 rounded-[18px] bg-metal-100 px-2 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-graphite-950"
              href={action.href}
              key={action.label}
            >
              <Icon className="h-4 w-4 text-accent" />
              {action.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
