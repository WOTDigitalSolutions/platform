import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { contactFormSchema } from '@/lib/validations/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const validatedData = contactFormSchema.parse(body)

    // Create Supabase client with service role key (bypasses RLS)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Save to database
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        message: validatedData.message,
        status: 'new',
      }])
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      throw new Error('Failed to save contact submission')
    }

    // Send email notification to admin
    try {
      await resend.emails.send({
        from: 'WOT Digital Solutions <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL || 'wotdigitalsolutions@gmail.com',
        subject: `New Contact Form Submission from ${validatedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1d4ed8;">New Contact Form Submission</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              ${validatedData.phone ? `<p><strong>Phone:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>` : ''}
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>
            <p style="font-size: 12px; color: #6b7280;">Submitted at: ${new Date().toLocaleString()}</p>
            <p style="font-size: 12px; color: #6b7280;">Submission ID: ${submission?.id}</p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send admin notification email:', emailError)
      // Continue even if email fails - submission is already saved
    }

    // Send auto-reply to customer
    try {
      await resend.emails.send({
        from: 'WOT Digital Solutions <onboarding@resend.dev>',
        to: validatedData.email,
        subject: 'Thank you for contacting WOT Digital Solutions',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1d4ed8; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">WOT Digital Solutions</h1>
              <p style="margin: 10px 0 0 0;">Making Ministry Easy Through Smart Digital Systems</p>
            </div>

            <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1d4ed8;">Hi ${validatedData.name}!</h2>

              <p>Thank you for reaching out to us. We've received your message and will get back to you as soon as possible, typically within 24 hours.</p>

              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #374151;">Your Message:</h3>
                <p style="white-space: pre-wrap; color: #6b7280;">${validatedData.message}</p>
              </div>

              <p>In the meantime, feel free to:</p>
              <ul style="color: #6b7280;">
                <li>Visit our website: <a href="https://wotdigitalsolutions.online" style="color: #1d4ed8;">wotdigitalsolutions.online</a></li>
                <li>Call us: +256 700 123 456</li>
                <li>Send us a WhatsApp message</li>
              </ul>

              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

              <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                This is an automated response. Please do not reply to this email. If you need immediate assistance, please contact us at wotdigitalsolutions@gmail.com
              </p>
            </div>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send auto-reply email:', emailError)
      // Continue even if auto-reply fails - submission is already saved
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        submissionId: submission?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
