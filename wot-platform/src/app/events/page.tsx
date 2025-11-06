import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { createClient } from '@/lib/supabase/server'
import { Calendar, Clock, MapPin, ExternalLink, CalendarDays } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Events | WOT Digital Solutions',
  description: 'Join us for upcoming services, prayer meetings, conferences, and special events. Everyone is welcome!',
}

export default async function EventsPage() {
  const supabase = await createClient()

  // Fetch published events from Supabase, ordered by date (upcoming first)
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .eq('published', true)
    .gte('event_date', new Date().toISOString().split('T')[0]) // Only future/today events
    .order('event_date', { ascending: true })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatTime = (timeString: string | null) => {
    if (!timeString) return null
    const [hours, minutes] = timeString.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <CalendarDays size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Upcoming Events
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join us for inspiring worship, powerful teaching, and authentic community. All are welcome!
              </p>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
                <p className="font-semibold">Error loading events</p>
                <p className="text-sm mt-1">Please try refreshing the page.</p>
              </div>
            )}

            {events && events.length > 0 ? (
              <div className="space-y-6">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      {/* Date Badge */}
                      <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white p-6 md:p-8 flex-shrink-0 flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start md:w-40 text-center md:text-left">
                        <div>
                          <div className="text-3xl md:text-4xl font-bold">
                            {new Date(event.event_date).getDate()}
                          </div>
                          <div className="text-lg md:text-xl font-medium uppercase tracking-wide">
                            {new Date(event.event_date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                          <div className="text-sm text-blue-100 mt-1">
                            {new Date(event.event_date).getFullYear()}
                          </div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 p-6">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl text-gray-900">
                            {event.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="p-0 space-y-4">
                          {event.description && (
                            <p className="text-gray-700 leading-relaxed">
                              {event.description}
                            </p>
                          )}

                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-gray-600">
                              <Calendar size={18} className="text-blue-700" />
                              <span>{formatDate(event.event_date)}</span>
                            </div>

                            {event.event_time && (
                              <div className="flex items-center gap-3 text-gray-600">
                                <Clock size={18} className="text-blue-700" />
                                <span>{formatTime(event.event_time)}</span>
                              </div>
                            )}

                            {event.location && (
                              <div className="flex items-center gap-3 text-gray-600">
                                <MapPin size={18} className="text-blue-700" />
                                <span>{event.location}</span>
                              </div>
                            )}
                          </div>

                          {event.registration_url && (
                            <div className="pt-2">
                              <Button
                                variant="primary"
                                size="sm"
                                asChild
                              >
                                <a
                                  href={event.registration_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2"
                                >
                                  Register Now
                                  <ExternalLink size={16} />
                                </a>
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                  <CalendarDays size={40} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Upcoming Events
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Check back soon for information about our upcoming services and special events.
                </p>
                <Button variant="primary" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Never miss an event! Get in touch with us to learn more about our regular services and special gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-blue-600 inline-block"
              >
                About Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
