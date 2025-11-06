import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contact Us | WOT Digital Solutions',
  description: 'Get in touch with us. We would love to hear from you and answer any questions you may have.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <MessageCircle size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We'd love to hear from you! Whether you have questions, need prayer, or just want to connect, reach out to us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Reach out through any of these channels. We typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Mail className="text-blue-700" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                          <a
                            href="mailto:info@example.com"
                            className="text-blue-700 hover:text-blue-800 transition-colors"
                          >
                            info@example.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Phone className="text-blue-700" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                          <a
                            href="tel:+2341234567890"
                            className="text-blue-700 hover:text-blue-800 transition-colors"
                          >
                            +234 123 456 7890
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <MapPin className="text-blue-700" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                          <p className="text-gray-600">
                            123 Ministry Street<br />
                            Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Clock className="text-blue-700" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                          <div className="text-gray-600 space-y-1">
                            <p>Monday - Friday: 9am - 5pm</p>
                            <p>Sunday: Service Times</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Request CTA */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Prayer?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We believe in the power of prayer. Submit your prayer request and our team will be praying for you.
            </p>
            <a
              href="/prayer"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Submit Prayer Request
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
