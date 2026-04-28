import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type ButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  to?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
}

const styles = {
  primary:
    'bg-accent text-white hover:bg-[#d56c36] focus-visible:outline-accent',
  secondary:
    'border border-graphite-900/12 bg-white text-graphite-950 hover:bg-metal-100 focus-visible:outline-accent',
  ghost:
    'border border-graphite-900/10 bg-white text-graphite-900 hover:bg-metal-100 focus-visible:outline-accent',
  light:
    'border border-graphite-900/12 bg-white text-graphite-950 hover:bg-metal-100 focus-visible:outline-accent',
}

const baseClass =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

export function Button({
  children,
  className,
  href,
  to,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const classes = cn(baseClass, styles[variant], className)

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  )
}
