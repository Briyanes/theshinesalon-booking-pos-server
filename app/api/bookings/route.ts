import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)
    
    const date = searchParams.get('date')
    const stylist = searchParams.get('stylist')
    const status = searchParams.get('status')

    let query = supabase
      .from('bookings')
      .select(`
        *,
        customer:customers(*),
        stylist:stylists(*),
        services:booking_services(service:services(*))
      `)
      .order('booking_date', { ascending: true })
      .order('booking_time', { ascending: true })

    if (date) {
      query = query.eq('booking_date', date)
    }
    if (stylist) {
      query = query.eq('stylist_id', stylist)
    }
    if (status) {
      query = query.eq('status', status)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const body = await request.json()

    const {
      customer_name,
      customer_phone,
      stylist_id,
      service_ids,
      booking_date,
      booking_time,
      notes
    } = body

    // Create or find customer
    let customerId: string

    const { data: existingCustomer } = await supabase
      .from('customers')
      .select('id')
      .eq('phone', customer_phone)
      .single()

    if (existingCustomer) {
      customerId = existingCustomer.id
    } else {
      const { data: newCustomer, error: customerError } = await supabase
        .from('customers')
        .insert({ name: customer_name, phone: customer_phone })
        .select('id')
        .single()

      if (customerError) throw customerError
      customerId = newCustomer.id
    }

    // Generate booking code
    const bookingCode = `TSB-${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`

    // Create booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert({
        code: bookingCode,
        customer_id: customerId,
        stylist_id,
        booking_date,
        booking_time,
        notes,
        status: 'pending'
      })
      .select()
      .single()

    if (bookingError) throw bookingError

    // Add booking services
    const bookingServices = service_ids.map((serviceId: string) => ({
      booking_id: booking.id,
      service_id: serviceId
    }))

    const { error: servicesError } = await supabase
      .from('booking_services')
      .insert(bookingServices)

    if (servicesError) throw servicesError

    return NextResponse.json({ 
      data: booking,
      message: 'Booking created successfully' 
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}
