'use client'

import { useState, useMemo } from 'react'
import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SermonCard } from '@/components/sermon-card'
import { CTALink } from '@/components/cta-link'
import {
  Book,
  Search,
  Filter,
  PlayCircle,
  Clock,
  Users,
  Star,
  Calendar,
  ArrowRight,
  Video,
  Headphones,
  Globe
} from 'lucide-react'

// This will be replaced with actual data fetch
// For now using client component with mock data structure
export default function SermonsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedPreacher, setSelectedPreacher] = useState<string | null>(null)

  // Mock data - replace with actual Supabase fetch
  const sermons = []
  const error = null

  // Extract unique preachers and tags for filters
  const allPreachers = useMemo(() => {
    if (!sermons) return []
    return Array.from(new Set(sermons.map((s: any) => s.preacher)))
  }, [sermons])

  const allTags = useMemo(() => {
    if (!sermons) return []
    const tags = sermons.flatMap((s: any) => s.tags || [])
    return Array.from(new Set(tags))
  }, [sermons])

  // Filter sermons
  const filteredSermons = useMemo(() => {
    if (!sermons) return []

    return sermons.filter((sermon: any) => {
      const matchesSearch = searchQuery === '' ||
        sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.description?.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTag = !selectedTag || sermon.tags?.includes(selectedTag)
      const matchesPreacher = !selectedPreacher || sermon.preacher === selectedPreacher

      return matchesSearch && matchesTag && matchesPreacher
    })
  }, [sermons, searchQuery, selectedTag, selectedPreacher])

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedTag(null)
    setSelectedPreacher(null)
  }

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-full">
                  SERMON LIBRARY
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Messages That Transform Lives
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Discover powerful teachings from the Word of God. Watch, listen, and grow in your faith journey.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search sermons by title or topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="mb-3 mx-auto w-14 h-14 bg-blue-700 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="text-blue-200" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  {sermons?.length || 0}
                </div>
                <div className="text-blue-200 text-sm">Total Sermons</div>
              </div>

              <div className="group">
                <div className="mb-3 mx-auto w-14 h-14 bg-amber-600 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="text-amber-200" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-blue-200 text-sm">Hours of Content</div>
              </div>

              <div className="group">
                <div className="mb-3 mx-auto w-14 h-14 bg-green-600 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-green-200" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-green-200 to-white bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-blue-200 text-sm">Lives Impacted</div>
              </div>

              <div className="group">
                <div className="mb-3 mx-auto w-14 h-14 bg-purple-600 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="text-purple-200" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-blue-200 text-sm">Countries Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        {sermons && sermons.length > 0 && (
          <section className="py-8 bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Filter size={20} />
                  <span className="font-semibold">Filter by:</span>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  {/* Preacher Filter */}
                  {allPreachers.length > 0 && (
                    <select
                      value={selectedPreacher || ''}
                      onChange={(e) => setSelectedPreacher(e.target.value || null)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="">All Preachers</option>
                      {allPreachers.map((preacher: string) => (
                        <option key={preacher} value={preacher}>{preacher}</option>
                      ))}
                    </select>
                  )}

                  {/* Tag Filter - showing as pills */}
                  {allTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {allTags.slice(0, 5).map((tag: string) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedTag === tag
                              ? 'bg-blue-700 text-white'
                              : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-500'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Reset button */}
                  {(searchQuery || selectedTag || selectedPreacher) && (
                    <button
                      onClick={resetFilters}
                      className="px-4 py-2 text-sm text-blue-700 hover:text-blue-800 font-medium"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>

                <div className="text-sm text-gray-600">
                  {filteredSermons.length} {filteredSermons.length === 1 ? 'sermon' : 'sermons'} found
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Sermon (if available) */}
        {sermons && sermons.length > 0 && !searchQuery && !selectedTag && !selectedPreacher && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <div className="flex items-center gap-3 mb-8">
                <Star className="text-amber-500 fill-amber-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Featured Message</h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 border border-blue-100">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block mb-4">
                      <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                        LATEST MESSAGE
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {sermons[0]?.title}
                    </h3>
                    {sermons[0]?.description && (
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {sermons[0].description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-blue-700" />
                        <span>{sermons[0]?.preacher}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-700" />
                        <span>{new Date(sermons[0]?.sermon_date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl">
                      <PlayCircle className="mr-2" size={20} />
                      Watch Now
                    </button>
                  </div>

                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                    {sermons[0]?.thumbnail_url ? (
                      <img
                        src={sermons[0].thumbnail_url}
                        alt={sermons[0].title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                        <Book className="text-white" size={64} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                        <PlayCircle className="text-blue-700 ml-1" size={40} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sermons Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
                <p className="font-semibold">Error loading sermons</p>
                <p className="text-sm mt-1">Please try refreshing the page.</p>
              </div>
            )}

            {filteredSermons && filteredSermons.length > 0 ? (
              <>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    All Sermons
                  </h2>
                  <p className="text-gray-600">
                    Browse our complete library of life-changing messages
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSermons.map((sermon: any) => (
                    <SermonCard key={sermon.id} sermon={sermon} />
                  ))}
                </div>
              </>
            ) : sermons && sermons.length > 0 && filteredSermons.length === 0 ? (
              // No results after filtering
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                  <Search size={40} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Sermons Found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  We couldn't find any sermons matching your filters. Try adjusting your search or filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              // Empty state - no sermons at all
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6">
                  <Book size={48} className="text-blue-700" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Sermon Library is Coming Soon
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                  We're building an incredible collection of transformative messages. Check back soon for inspiring teachings that will strengthen your faith and deepen your walk with God.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Video className="text-blue-700" size={28} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Video Messages</h4>
                    <p className="text-sm text-gray-600">Full HD sermon recordings</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Headphones className="text-green-600" size={28} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Audio Podcasts</h4>
                    <p className="text-sm text-gray-600">Listen on the go</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Book className="text-purple-600" size={28} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Study Notes</h4>
                    <p className="text-sm text-gray-600">Downloadable resources</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss a Message
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Subscribe to get notified when new sermons are available. Join thousands who receive weekly inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTALink
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                variant="primary"
                eventProperties={{ location: 'sermons_cta', action: 'subscribe' }}
              >
                Subscribe for Updates
                <ArrowRight className="ml-2" size={20} />
              </CTALink>
              <a
                href="/events"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-900 transition-all border-2 border-blue-600"
              >
                Join Us Live
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-blue-600">
              <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold mb-1">Weekly</div>
                  <div className="text-blue-200 text-sm">New Content</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">Free</div>
                  <div className="text-blue-200 text-sm">Always</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">HD</div>
                  <div className="text-blue-200 text-sm">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
