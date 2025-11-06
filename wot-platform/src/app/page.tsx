import { Navigation } from "@/components/navigation"
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
  MessageCircle
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Making Ministry Easy Through Smart Digital Systems
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Purpose-built websites and platforms that help ministers focus on what matters most: the ministry of the Word.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            From simple church websites to complete network management portals – we handle the tech so you can handle the harvest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              See Plans & Pricing
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
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
