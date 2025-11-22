'use client'

import { trackEvent, type AnalyticsEvent } from '@/lib/analytics'
import Link from 'next/link'

interface CTALinkProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  eventName?: AnalyticsEvent
  eventProperties?: Record<string, string | number | boolean>
}

export function CTALink({
  href,
  children,
  className = '',
  variant = 'primary',
  eventName = 'cta_button_clicked',
  eventProperties = {}
}: CTALinkProps) {
  const handleClick = () => {
    trackEvent(eventName, {
      href,
      variant,
      ...eventProperties
    })
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
