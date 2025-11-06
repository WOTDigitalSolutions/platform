"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { prayerRequestSchema, type PrayerRequestData } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createClient } from '@/lib/supabase/client'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export function PrayerRequestForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<PrayerRequestData>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      is_anonymous: false,
    },
  })

  const isAnonymous = watch('is_anonymous')

  const onSubmit = async (data: PrayerRequestData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const supabase = createClient()
      const { error} = await supabase
        .from('prayer_requests')
        .insert([{
          name: data.is_anonymous ? 'Anonymous' : data.name,
          email: data.email || null,
          phone: data.phone || null,
          request: data.request,
          is_anonymous: data.is_anonymous,
          status: 'new',
        }])

      if (error) throw error

      setStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting prayer request:', error)
      setStatus('error')
      setErrorMessage('Failed to submit your prayer request. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Anonymous Checkbox */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('is_anonymous')}
            className="w-5 h-5 text-blue-700 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">
            Submit this request anonymously
          </span>
        </label>
        <p className="text-sm text-gray-600 mt-2 ml-8">
          Your prayer request will be kept confidential and anonymous
        </p>
      </div>

      {/* Name Field */}
      {!isAnonymous && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            type="text"
            {...register('name')}
            placeholder="Your name"
            className={errors.name ? 'border-red-500' : ''}
            disabled={status === 'loading'}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
      )}

      {/* Email Field (Optional) */}
      {!isAnonymous && (
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email (Optional)
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
          <p className="text-sm text-gray-500 mt-1">
            We'll only use this to follow up if you'd like us to
          </p>
        </div>
      )}

      {/* Phone Field (Optional) */}
      {!isAnonymous && (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number (Optional)
          </label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+234 XXX XXX XXXX"
            disabled={status === 'loading'}
          />
        </div>
      )}

      {/* Prayer Request Field */}
      <div>
        <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-2">
          Prayer Request <span className="text-red-500">*</span>
        </label>
        <textarea
          id="request"
          {...register('request')}
          rows={8}
          placeholder="Share your prayer request with us. We will be praying for you..."
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.request ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={status === 'loading'}
        />
        {errors.request && (
          <p className="text-red-500 text-sm mt-1">{errors.request.message}</p>
        )}
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-3">
          <CheckCircle2 size={20} />
          <p className="font-medium">
            Thank you for sharing your prayer request. Our team will be praying for you!
          </p>
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
            Submitting...
          </>
        ) : (
          'Submit Prayer Request'
        )}
      </Button>
    </form>
  )
}
