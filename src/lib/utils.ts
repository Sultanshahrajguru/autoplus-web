import { clsx } from 'clsx'

export function cn(...inputs: Array<string | false | null | undefined>) {
  return clsx(inputs)
}

export function formatPhoneForHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, '')}`
}
