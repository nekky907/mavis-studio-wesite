import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { bookingSchema } from '@/lib/validations';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = bookingSchema.parse(body);

    // Create Supabase client
    const supabase = await createClient();

    // Insert booking into database
    const { data: booking, error } = await (supabase as any)
      .from('bookings')
      .insert([
        {
          ...validatedData,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        {
          error: 'Failed to create booking',
          message: error.message || 'Database error',
          details: error
        },
        { status: 500 }
      );
    }

    // Send email notification to admin
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.ADMIN_EMAIL!,
        subject: `New Booking Request from ${validatedData.name}`,
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Package:</strong> ${validatedData.package_type.replace('_', ' ').toUpperCase()}</p>
          <p><strong>Preferred Date:</strong> ${validatedData.preferred_date || 'Not specified'}</p>
          <p><strong>Currency:</strong> ${validatedData.currency}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message || 'No message provided'}</p>
          <hr>
          <p><small>Booking ID: ${booking.id}</small></p>
        `,
      });

      // Send confirmation email to customer
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: validatedData.email,
        subject: 'Booking Request Received - Mavis Studio',
        html: `
          <h2>Thank You for Your Interest!</h2>
          <p>Dear ${validatedData.name},</p>
          <p>We have received your booking request for our ${validatedData.package_type.replace('_', ' ')} package.</p>
          <p>Our team will review your request and get back to you within 24 hours.</p>
          <h3>Your Booking Details:</h3>
          <ul>
            <li><strong>Package:</strong> ${validatedData.package_type.replace('_', ' ').toUpperCase()}</li>
            <li><strong>Preferred Date:</strong> ${validatedData.preferred_date || 'Not specified'}</li>
            <li><strong>Currency:</strong> ${validatedData.currency}</li>
          </ul>
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>The Mavis Studio Team</strong></p>
          <p style="font-style: italic; color: #7F9492;">Where Every Moment Has a Song</p>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    console.error('Booking creation error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid input data', details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Check if user is authenticated (for admin)
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get query parameters for filtering
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');

    let query = supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query = query.eq('status', status);
    }

    const { data: bookings, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch bookings' },
        { status: 500 }
      );
    }

    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
