'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = '+256701141534' // WOT Digital Solutions WhatsApp number
  const defaultMessage = "Hello! I'm interested in learning more about WOT Digital Solutions for my ministry."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Chat with us!</h3>
                  <p className="text-sm text-gray-600">We typically reply instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-700 mb-4 text-sm">
              Have questions about our digital solutions? We&apos;re here to help! Click below to start a conversation on WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Start WhatsApp Chat
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? (
            <X size={28} className="group-hover:rotate-90 transition-transform" />
          ) : (
            <MessageCircle size={28} className="animate-pulse" />
          )}
        </button>
      </div>
    </>
  )
}
