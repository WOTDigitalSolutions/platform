"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">
              WOT Digital Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              About
            </a>
            <a href="/sermons" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Sermons
            </a>
            <a href="/events" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Events
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Contact
            </a>
            <a
              href="/prayer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm bg-blue-700 text-white hover:bg-blue-800 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Prayer Request
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/sermons"
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sermons
              </a>
              <a
                href="/events"
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/prayer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm bg-blue-700 text-white hover:bg-blue-800 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prayer Request
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
