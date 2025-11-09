import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  Zap,
  TrendingUp,
  Music,
  CreditCard,
  Heart,
  Users,
  BarChart3,
  Network,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Code,
  Palette,
  Globe,
  Video,
  Award,
  Target,
  Quote,
  Clock,
  Star,
  Shield
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-full">
                  DIGITAL SOLUTIONS & MINISTRY TECHNOLOGY
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Making Ministry Easy Through Smart Digital Systems
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Purpose-built websites and platforms that help ministers focus on what matters most: the ministry of the Word.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From simple church websites to complete network management portals – we handle the tech so you can handle the harvest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white border-2 border-blue-700 rounded-lg hover:bg-blue-50 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Image - Hexagonal Frame */}
            <div className="relative hidden md:block">
              <div className="relative">
                {/* Hexagonal image container with CSS clip-path */}
                <div
                  className="relative w-full aspect-square max-w-2xl mx-auto"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: 'white',
                    padding: '8px'
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-60 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-300 rounded-full opacity-40 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">MEET THE TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              A Message From Pastor Emma
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear the heart and vision behind WOT Digital Solutions
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Video Container - 16:9 aspect ratio */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-700">
              {/* Placeholder - Replace with actual YouTube embed or video URL */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border-2 border-white/40 hover:bg-white/30 transition-all cursor-pointer group">
                  <Video className="text-white group-hover:scale-110 transition-transform" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Welcome to WOT Digital Solutions</h3>
                <p className="text-blue-100 text-center max-w-md mb-6">
                  Pastor Emma shares the vision and mission behind building digital solutions that carry the Spirit of the House
                </p>
                <p className="text-sm text-blue-200 bg-blue-800/30 px-4 py-2 rounded-full">
                  Video coming soon - Stay tuned!
                </p>
              </div>

              {/* Uncomment when video is ready */}
              {/*
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="WOT Digital Solutions Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>

            {/* Video Stats/Info */}
            <div className="grid grid-cols-3 divide-x divide-gray-200 bg-gray-50 p-6">
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-blue-700 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years in Ministry</div>
              </div>
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-blue-700 mb-1">50+</div>
                <div className="text-sm text-gray-600">Ministries Served</div>
              </div>
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-blue-700 mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Optional: Key Points */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-700" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Built by Ministers</h4>
              <p className="text-sm text-gray-600">We understand ministry because we live it</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-700" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence Driven</h4>
              <p className="text-sm text-gray-600">Every project reflects Kingdom quality</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-700" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Global Impact</h4>
              <p className="text-sm text-gray-600">Serving ministries across nations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to amplify truth and multiply vision through technology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Code className="text-blue-700" size={36} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom websites and platforms built with modern technology for ministry excellence
              </p>
            </div>

            <div className="group text-center">
              <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Palette className="text-amber-600" size={36} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Brand Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visual identity and creative media that reflect the Spirit of your House
              </p>
            </div>

            <div className="group text-center">
              <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Video className="text-green-600" size={36} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Digital Media</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sermon recording, editing, and distribution across multiple platforms
              </p>
            </div>

            <div className="group text-center">
              <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Globe className="text-red-600" size={36} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Content Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Easy-to-use systems for managing sermons, events, and ministry content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
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
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">10+</div>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">CLIENT TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from ministry leaders who have experienced transformation through our digital solutions
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
                    <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
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
                    <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
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
                    <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
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

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              See What We've Built
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real ministry websites and platforms we've delivered - from vision to launch in days
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Project 1 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop"
                  alt="Church Website"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-amber-400 fill-amber-400" size={18} />
                    <span className="text-sm font-medium">Featured Project</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Covenant Church Website</h3>
                  <p className="text-blue-200 mb-4">5-page ministry site with sermon player, events calendar, and online giving integration</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>Delivered in 8 days</span>
                    </div>
                    <div className="text-amber-400 font-semibold">$250</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                  alt="Ministry Portal"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-amber-400 fill-amber-400" size={18} />
                    <span className="text-sm font-medium">Featured Project</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Kingdom Network Portal</h3>
                  <p className="text-blue-200 mb-4">Multi-branch management system with real-time reporting, resource library, and team dashboards</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>Delivered in 12 days</span>
                    </div>
                    <div className="text-amber-400 font-semibold">$1,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Before/After Transformation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">THE TRANSFORMATION</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              From Chaos to Clarity in Days
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we transform scattered ministry operations into streamlined digital excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* BEFORE */}
            <div className="bg-white rounded-2xl p-8 border-4 border-red-200 relative">
              <div className="absolute -top-4 left-8 bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                BEFORE WOT
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ministry Struggles</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-0.5">✕</div>
                    <div>
                      <p className="font-semibold text-gray-900">No Online Presence</p>
                      <p className="text-sm text-gray-600">Members can't find sermon recordings or event info</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-0.5">✕</div>
                    <div>
                      <p className="font-semibold text-gray-900">Manual Everything</p>
                      <p className="text-sm text-gray-600">Hours spent compiling reports from WhatsApp and Excel</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-0.5">✕</div>
                    <div>
                      <p className="font-semibold text-gray-900">Scattered Tools</p>
                      <p className="text-sm text-gray-600">Data lost across multiple platforms and devices</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-0.5">✕</div>
                    <div>
                      <p className="font-semibold text-gray-900">No Visibility</p>
                      <p className="text-sm text-gray-600">Can't track growth, attendance, or ministry impact</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-0.5">✕</div>
                    <div>
                      <p className="font-semibold text-gray-900">Expensive Quotes</p>
                      <p className="text-sm text-gray-600">Agencies want $5,000+ and 3 months timeline</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* AFTER */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-4 border-green-400 relative shadow-2xl">
              <div className="absolute -top-4 left-8 bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                AFTER WOT ✨
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital Excellence</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">✓</div>
                    <div>
                      <p className="font-semibold text-gray-900">Professional Website</p>
                      <p className="text-sm text-gray-600">Beautiful, mobile-friendly site with sermons, events, giving</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">✓</div>
                    <div>
                      <p className="font-semibold text-gray-900">Automated Systems</p>
                      <p className="text-sm text-gray-600">Reports auto-generated, data centralized, zero manual work</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">✓</div>
                    <div>
                      <p className="font-semibold text-gray-900">One Platform</p>
                      <p className="text-sm text-gray-600">Everything in one place - accessible from anywhere</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">✓</div>
                    <div>
                      <p className="font-semibold text-gray-900">Real-Time Insights</p>
                      <p className="text-sm text-gray-600">See trends, track metrics, make data-driven decisions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">✓</div>
                    <div>
                      <p className="font-semibold text-gray-900">Affordable & Fast</p>
                      <p className="text-sm text-gray-600">$200-$1,000 budget, delivered in 7-12 days</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="text-4xl">🚀</div>
              <div className="text-left">
                <p className="text-sm text-gray-600">Average transformation time</p>
                <p className="text-2xl font-bold text-blue-700">7-10 Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Is Ministry Admin Taking You Away From The Word?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            You're not alone. Many ministers struggle with scattered tools and manual processes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Scattered Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MessageCircle className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <span>WhatsApp for reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <span>Email for prayer requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <span>Excel for attendance</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-gray-500">
                  "You're spending hours compiling data instead of preaching."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">No Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <span>Can't see growth trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <span>Don't know which teams need help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <span>Hard to measure outreach impact</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-gray-500">
                  "You're leading blind without clear metrics."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Generic Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">💼</span>
                    <span>Corporate tools don't fit ministry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">💸</span>
                    <span>Expensive agencies charge $5,000+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">⏳</span>
                    <span>Takes months to launch</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-gray-500">
                  "You need something built for ministers, by ministers."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Digital Tools Built For Spiritual Impact
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything your ministry needs, purpose-built for kingdom work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <Sparkles className="text-blue-700 mb-2" size={48} />
                <CardTitle>Purpose-Built, Not Generic</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Sermon players, prayer forms, giving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Ministry reporting (attendance, outreach)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>AI-powered summaries and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Not a business website template</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100">
              <CardHeader>
                <Zap className="text-amber-500 mb-2" size={48} />
                <CardTitle>Fast & Affordable</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Launch in 7-10 days (not months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>$200-$1,000 (not $5,000+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>50/50 payment (no huge upfront cost)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Free support included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100">
              <CardHeader>
                <TrendingUp className="text-green-500 mb-2" size={48} />
                <CardTitle>Grows With Your Ministry</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Start simple (5-page website)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Add team features (reports, dashboards)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Scale to networks (multi-branch portals)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Upgrade anytime (special discounts)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Everything Your Ministry Needs, Nothing It Doesn't
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Powerful features that serve your ministry, not complicate it.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
              <Music className="text-blue-700 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Sermon Management</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Upload sermons (audio, video, text)</li>
                <li>• Embed YouTube, SoundCloud, Spotify</li>
                <li>• Auto-generate summaries (AI)</li>
                <li>• Tag by topic, scripture</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
              <CreditCard className="text-blue-700 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Online Giving</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Flutterwave integration (Nigeria)</li>
                <li>• Stripe (international)</li>
                <li>• Recurring donations</li>
                <li>• Instant receipts</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
              <Heart className="text-blue-700 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Prayer Requests</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Secure submission forms</li>
                <li>• Email notifications</li>
                <li>• Track and follow up</li>
                <li>• Export to Excel</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
              <Users className="text-blue-700 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Team Portal</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Secure login for staff</li>
                <li>• Submit reports (attendance, outreach)</li>
                <li>• Access resources (manuals, training)</li>
                <li>• Role-based permissions</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
              <BarChart3 className="text-blue-700 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Admin Dashboard</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• See all metrics at a glance</li>
                <li>• Filter by date, team, location</li>
                <li>• Export reports (CSV, PDF)</li>
                <li>• Track growth trends</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
              <Network className="text-blue-700 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Network Management</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-branch oversight</li>
                <li>• Aggregate metrics</li>
                <li>• Resource distribution</li>
                <li>• Internal messaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-center text-gray-600 mb-12">
            All plans include mobile-responsive design, free support, and lifetime updates. No hidden fees.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Card>
              <CardHeader>
                <CardDescription>Best for: New ministries, fellowships</CardDescription>
                <CardTitle className="text-2xl">Ministry Starter Site</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-700">$200</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">5 custom pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Sermon media player</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Online giving integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Contact & prayer forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Mobile-responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">1 month free support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Hub */}
            <Card className="border-2 border-amber-500 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader>
                <CardDescription>Best for: Growing ministries with teams</CardDescription>
                <CardTitle className="text-2xl">Ministry Hub</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-700">$500</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2 text-sm">Everything in Starter, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Team portal (secure login)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Resource library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Ministry reports & dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">AI summaries & tagging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Google Sheets export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">2 months free support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="secondary">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Portal */}
            <Card>
              <CardHeader>
                <CardDescription>Best for: Multi-church networks</CardDescription>
                <CardTitle className="text-2xl">Apostolic Network Portal</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-700">$1,000</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2 text-sm">Everything in Hub, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Multi-branch architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Network-wide dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Branch-level access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Internal messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Automated monthly summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">3 months free support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to know about our digital solutions
          </p>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>How long does it take to build my website?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Most websites are live in 7-10 days from kickoff. Simple sites can be done in 5 days, while custom projects may take 2-3 weeks. We'll give you an exact timeline after our discovery call.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Do I need technical knowledge to manage my site?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Not at all! We build user-friendly sites with easy-to-use dashboards. We also provide training and ongoing support. If you can use WhatsApp, you can manage your site.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>What if I don't have content ready (photos, text, etc.)?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                No problem! We can help create content, write copy, source stock images, or work with what you have. We'll guide you through exactly what we need.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Can I update my website after it's launched?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Absolutely! With our Website PRO plan, you get a content management system (CMS) to make updates yourself. Or choose our maintenance package and we'll handle updates for you.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>What's included in the monthly hosting fee?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Your hosting includes: secure web hosting, SSL certificate (https://), email addresses, automatic backups, security updates, and 24/7 technical support. Everything to keep your site running smoothly.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Do you work with ministries outside Uganda?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes! We serve ministries worldwide. All communication and collaboration happens online via WhatsApp, email, and video calls. Payment can be made via bank transfer or mobile money.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>What payment methods do you accept?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                We accept bank transfers, mobile money (MTN & Airtel), and international payments via Wise or PayPal. Payment is split: 50% to start, 50% before launch.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>What happens if I'm not happy with the design?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Your satisfaction is important to us! We include 2 rounds of revisions in every package. We'll work closely with you to ensure the final design matches your vision.
              </p>
            </details>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="https://wa.me/256701141534?text=I have a question about WOT Digital Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors"
            >
              <MessageCircle className="mr-2" />
              Chat With Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            From Vision To Launch In Days, Not Months
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our simple 4-step process gets you online fast.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Discovery Call</h3>
                <p className="text-gray-600 mb-2">Day 1</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Schedule 30-minute call (WhatsApp or phone)</li>
                  <li>• Share your vision, needs, content</li>
                  <li>• Receive custom proposal within 24 hours</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Kick Off</h3>
                <p className="text-gray-600 mb-2">Days 2-3</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Pay 50% deposit</li>
                  <li>• Provide content (text, images, videos)</li>
                  <li>• Approve initial design mockup</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Build & Review</h3>
                <p className="text-gray-600 mb-2">Days 4-8</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• We build your platform</li>
                  <li>• You review at milestones</li>
                  <li>• Request changes (2 revisions included)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Launch!</h3>
                <p className="text-gray-600 mb-2">Days 9-10</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Final approval</li>
                  <li>• Pay remaining 50%</li>
                  <li>• Go live!</li>
                  <li>• 1-hour training walkthrough</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" size="lg">
              Schedule Your Discovery Call
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready To Focus On Ministry Instead Of Admin?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build your digital platform together. Schedule a free 30-minute discovery call – no pressure, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Discovery Call
              <Phone className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
              See Plans & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          {/* Trust Badges */}
          <div className="mb-12 pb-8 border-b border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                  <Shield className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">100% Secure</h4>
                <p className="text-xs text-gray-400">SSL Encrypted</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                  <Check className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">Money-Back Guarantee</h4>
                <p className="text-xs text-gray-400">30 Days</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">50+ Ministries</h4>
                <p className="text-xs text-gray-400">Served Worldwide</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-3">
                  <Star className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">5-Star Reviews</h4>
                <p className="text-xs text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Ministry Starter Site</a></li>
                <li><a href="#" className="hover:text-white">Ministry Hub</a></li>
                <li><a href="#" className="hover:text-white">Network Portal</a></li>
                <li><a href="#" className="hover:text-white">Maintenance Plans</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Blog (coming soon)</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Support Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: wotdigitalsolutions@gmail.com</li>
                <li>WhatsApp: [Coming soon]</li>
                <li>Location: Nigeria</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 WOT Digital Solutions. All rights reserved.</p>
            <p className="mt-2">Built with ❤️ for ministers by ministers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
