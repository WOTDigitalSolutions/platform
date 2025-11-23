import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTALink } from '@/components/cta-link'
import { createClient } from '@/lib/supabase/server'
import {
  Heart,
  Users,
  Target,
  Award,
  ArrowRight,
  Quote,
  Star,
  Globe,
  Code,
  Lightbulb,
  Zap,
  Shield,
  Clock
} from 'lucide-react'

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
                  OUR STORY
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {page?.title || 'Building Digital Solutions That Carry The Spirit of the House'}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {page?.meta_description || 'We are ministers who understand ministry - creating technology that amplifies truth and multiplies vision'}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="mb-4 mx-auto w-16 h-16 bg-blue-700 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="text-blue-200" size={32} />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">15+</div>
                <div className="text-blue-200 font-medium">Years of Ministry</div>
              </div>

              <div className="group">
                <div className="mb-4 mx-auto w-16 h-16 bg-amber-600 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="text-amber-200" size={32} />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent">50+</div>
                <div className="text-blue-200 font-medium">Projects Completed</div>
              </div>

              <div className="group">
                <div className="mb-4 mx-auto w-16 h-16 bg-green-600 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-green-200" size={32} />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-green-200 to-white bg-clip-text text-transparent">100+</div>
                <div className="text-blue-200 font-medium">Ministries Served</div>
              </div>

              <div className="group">
                <div className="mb-4 mx-auto w-16 h-16 bg-purple-600 bg-opacity-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="text-purple-200" size={32} />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">15+</div>
                <div className="text-blue-200 font-medium">Nations Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">WHO WE ARE</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  Ministers Building For Ministers
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    WOT Digital Solutions was born from a simple frustration: ministry technology that doesn't understand ministry.
                  </p>
                  <p>
                    After years of watching ministers struggle with expensive agencies, generic templates, and tools built for corporations—not churches—we knew there had to be a better way.
                  </p>
                  <p>
                    We're not just developers. We're ministers, leaders, and marketplace ministers who understand what it means to balance the Word, administration, and vision.
                  </p>
                  <p className="font-semibold text-blue-700">
                    That's why every solution we build carries the Spirit of the House—purpose-built for kingdom impact.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border-4 border-blue-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">WHAT DRIVES US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Mission, Vision & Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-blue-700" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower ministers and ministries with affordable, purpose-built digital solutions that free them to focus on the Word while technology handles the rest.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="text-amber-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where every minister—regardless of budget or technical skill—has access to professional digital platforms that amplify their voice and multiply their impact.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="text-blue-700" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Kingdom First</h4>
                  <p className="text-gray-600">
                    Every project is an act of worship—we build for eternal impact, not just digital presence.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award className="text-green-600" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
                  <p className="text-gray-600">
                    We give our best in all we do, honoring God with excellence in every line of code.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="text-purple-600" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Empowerment</h4>
                  <p className="text-gray-600">
                    We equip ministers with tools they can manage—no technical degrees required.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="text-amber-600" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Speed</h4>
                  <p className="text-gray-600">
                    Vision delayed is impact lost—we deliver in days, not months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">WHY CHOOSE US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're not just another web agency—we're your ministry's technology partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Code className="text-blue-700" size={40} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Built By Ministers</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the unique challenges of ministry administration because we live it every day
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Shield className="text-green-600" size={40} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Ministry-First Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every feature is designed for ministry impact, not corporate metrics
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Clock className="text-amber-600" size={40} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Fast & Affordable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Launch in 7-10 days for $200-$1000, not $5000+ and 3 months
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">CLIENT TESTIMONIALS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                What Ministers Are Saying
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from ministry leaders who have experienced transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute top-6 right-6 text-blue-100">
                  <Quote size={48} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "WOT Digital Solutions transformed our ministry's online presence. The website is beautiful, functional, and perfectly captures our vision. Our members can now access sermons and events easily!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Pastor Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">New Life Chapel, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute top-6 right-6 text-blue-100">
                  <Quote size={48} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "From the first call to launch, the team was professional and understanding of our ministry needs. They delivered a powerful platform in just 10 days. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      DR
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Dr. David Omondi</h4>
                      <p className="text-sm text-gray-600">Faith Embassy, Uganda</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute top-6 right-6 text-blue-100">
                  <Quote size={48} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "The network portal has revolutionized how we manage our branches. Real-time reports, centralized content, and seamless communication. This is exactly what we needed!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      AP
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Apostle Peter Mensah</h4>
                      <p className="text-sm text-gray-600">Kingdom Network, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready To Transform Your Ministry?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join 100+ ministries worldwide who have discovered the freedom of purpose-built digital solutions. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTALink
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                variant="primary"
                eventProperties={{ location: 'about_cta', action: 'get_started' }}
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </CTALink>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-900 transition-all border-2 border-blue-600"
              >
                Schedule Discovery Call
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-blue-600">
              <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold mb-1">7-10</div>
                  <div className="text-blue-200 text-sm">Days to Launch</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">$200+</div>
                  <div className="text-blue-200 text-sm">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
