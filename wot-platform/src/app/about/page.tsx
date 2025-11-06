import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { createClient } from '@/lib/supabase/server'
import { Heart, Users, Target, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | WOT Digital Solutions',
  description: 'Learn about our mission, vision, and values. Discover what makes our ministry unique and how we serve our community.',
}

export default async function AboutPage() {
  const supabase = await createClient()

  // Fetch About page content from Supabase
  const { data: page } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', 'about')
    .eq('published', true)
    .single()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {page?.title || 'About Us'}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {page?.meta_description || 'Discover who we are and what we stand for'}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            {page?.content ? (
              <div
                className="prose prose-lg max-w-none prose-headings:text-blue-800 prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-12 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:space-y-2 prose-li:text-gray-700 prose-strong:text-blue-700"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            ) : (
              // Fallback content if database is empty
              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are a vibrant community of believers dedicated to spreading the Gospel and making disciples of all nations.
                    Our ministry is built on the foundation of faith, hope, and love.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To see lives transformed by the power of God, communities restored, and the Kingdom of Heaven advanced
                    in every sphere of society.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Values</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Heart className="text-blue-700" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Faith</h3>
                        <p className="text-gray-600">
                          We believe in the power of God to transform lives and work miracles in every situation.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="text-blue-700" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                        <p className="text-gray-600">
                          We are stronger together. Our community is built on love, support, and genuine fellowship.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Target className="text-blue-700" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Service</h3>
                        <p className="text-gray-600">
                          We exist to serve God and others with humility, compassion, and dedication.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Award className="text-blue-700" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                        <p className="text-gray-600">
                          We give our best in all we do, honoring God with excellence in every aspect of ministry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">Leadership</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our ministry is led by dedicated spiritual leaders who are committed to providing guidance,
                    support, and biblical teaching to our community. Together with our team of pastors and leaders,
                    we work to create an environment where everyone can grow in their faith and relationship with God.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the love of Christ and grow in your faith with us. You're always welcome here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/events"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-blue-600"
              >
                View Events
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
