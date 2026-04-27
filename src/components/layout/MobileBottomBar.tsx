import { MapPin, Phone, Wrench } from 'lucide-react'
import { formatPhoneForHref } from '../../lib/utils'

const actions = [
  { label: 'Call', href: formatPhoneForHref('(03) 9018 2100'), icon: Phone },
  { label: 'Book', href: '/contact', icon: Wrench },
  { label: 'Find Centre', href: '/locations', icon: MapPin },
]

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 rounded-[24px] border border-white/10 bg-graphite-950/92 p-2 shadow-2xl backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        {actions.map((action) => {
          const Icon = action.icon

          return (
            <a
              className="flex flex-col items-center justify-center gap-1 rounded-[18px] bg-white/6 px-2 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white"
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
