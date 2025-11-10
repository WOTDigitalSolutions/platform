"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send your message. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          placeholder="Your full name"
          className={errors.name ? 'border-red-500' : ''}
          disabled={status === 'loading'}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@example.com"
          className={errors.email ? 'border-red-500' : ''}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number (Optional)
        </label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+256 XXX XXX XXXX"
          disabled={status === 'loading'}
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          placeholder="How can we help you?"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={status === 'loading'}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-3">
          <CheckCircle2 size={20} />
          <div>
            <p className="font-medium">Thank you! Your message has been sent successfully.</p>
            <p className="text-sm text-green-700 mt-1">We've sent a confirmation email to your inbox and will get back to you soon.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-3">
          <AlertCircle size={20} />
          <p className="font-medium">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
