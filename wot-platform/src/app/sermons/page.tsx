import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { SermonCard } from '@/components/sermon-card'
import { createClient } from '@/lib/supabase/server'
import { Book } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sermons | WOT Digital Solutions',
  description: 'Watch and listen to our latest sermon messages. Be encouraged, inspired, and equipped through the Word of God.',
}

export default async function SermonsPage() {
  const supabase = await createClient()

  // Fetch published sermons from Supabase, ordered by date (newest first)
  const { data: sermons, error } = await supabase
    .from('sermons')
    .select('*')
    .eq('published', true)
    .order('sermon_date', { ascending: false })

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Book size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sermons
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Watch and listen to powerful messages that will encourage your faith and deepen your relationship with God.
              </p>
            </div>
          </div>
        </section>

        {/* Sermons Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
                <p className="font-semibold">Error loading sermons</p>
                <p className="text-sm mt-1">Please try refreshing the page.</p>
              </div>
            )}

            {sermons && sermons.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <p className="text-gray-600">
                    {sermons.length} {sermons.length === 1 ? 'sermon' : 'sermons'} available
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sermons.map((sermon) => (
                    <SermonCard key={sermon.id} sermon={sermon} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                  <Book size={40} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Sermons Yet
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Check back soon for inspiring messages and teachings. New sermons are added regularly.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience It Live
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join us in person for our weekly services and special events. Nothing compares to worshiping together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Events
              </a>
              <a
                href="/contact"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-blue-600"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
