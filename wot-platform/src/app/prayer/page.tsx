import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { PrayerRequestForm } from '@/components/prayer-request-form'
import { Heart, Users, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Prayer Request | WOT Digital Solutions',
  description: 'Submit your prayer request. We believe in the power of prayer and our team is ready to pray with you and for you.',
}

export default function PrayerPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Heart size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Prayer Request
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We believe prayer changes things. Share your request with us and let us stand in faith with you.
              </p>
            </div>
          </div>
        </section>

        {/* Prayer Request Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Prayer Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    We're Here to Pray With You
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Prayer is powerful. James 5:16 tells us that "the prayer of a righteous person is powerful and effective."
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="text-blue-700" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Confidential</h3>
                        <p className="text-sm text-gray-600">
                          All prayer requests are kept confidential. Only our prayer team will see your request.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="text-blue-700" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Team Prayer</h3>
                        <p className="text-sm text-gray-600">
                          Our dedicated prayer team commits to praying for every request submitted.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Heart className="text-blue-700" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Anonymous Option</h3>
                        <p className="text-sm text-gray-600">
                          You can submit your request anonymously if you prefer. God knows your heart.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Scripture Promise</h3>
                  <p className="text-sm text-gray-700 italic">
                    "Do not be anxious about anything, but in every situation, by prayer and petition,
                    with thanksgiving, present your requests to God."
                  </p>
                  <p className="text-xs text-blue-700 font-medium mt-2">
                    - Philippians 4:6
                  </p>
                </div>
              </div>

              {/* Prayer Request Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Submit Your Prayer Request</CardTitle>
                    <p className="text-gray-600">
                      Share what's on your heart. We'll be praying for you.
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <PrayerRequestForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonies Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                God Answers Prayer
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've seen God move powerfully in response to prayer. Here are some testimonies from our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} size={16} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Thank you for praying for my job situation. God opened a door I never expected and
                    I got the position! Your prayers made all the difference."
                  </p>
                  <p className="text-sm font-medium text-gray-900">- Sarah M.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} size={16} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "After months of struggling with my health, your prayers lifted my spirits.
                    I'm now completely healed! God is faithful."
                  </p>
                  <p className="text-sm font-medium text-gray-900">- David K.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us This Sunday
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the power of corporate prayer and worship. All are welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                View Events
              </a>
              <a
                href="/contact"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-blue-600 inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
