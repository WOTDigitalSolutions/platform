import { track } from '@vercel/analytics'
import { createClient } from '@/lib/supabase/client'

export type AnalyticsEvent =
  | 'contact_form_submitted'
  | 'contact_form_opened'
  | 'whatsapp_clicked'
  | 'video_played'
  | 'video_completed'
  | 'cta_button_clicked'
  | 'phone_number_clicked'
  | 'email_clicked'
  | 'service_card_clicked'
  | 'testimonial_viewed'
  | 'pricing_viewed'

interface EventProperties {
  [key: string]: string | number | boolean | null
}

/**
 * Track custom analytics events
 * Sends to both Vercel Analytics and Supabase for comprehensive tracking
 */
export async function trackEvent(
  event: AnalyticsEvent,
  properties?: EventProperties
) {
  try {
    // Track in Vercel Analytics (for dashboard visibility)
    track(event, properties)

    // Also store in Supabase for custom reporting
    const supabase = createClient()

    await supabase.from('analytics_events').insert([{
      event_name: event,
      properties: properties || {},
      user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null,
      referrer: typeof window !== 'undefined' ? document.referrer : null,
      pathname: typeof window !== 'undefined' ? window.location.pathname : null,
    }])

  } catch (error) {
    // Fail silently - don't break user experience if analytics fails
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track page views (automatically handled by Vercel Analytics, but can add custom logic)
 */
export function trackPageView(pageName: string) {
  trackEvent('cta_button_clicked', {
    page: pageName,
    action: 'page_view'
  })
}
