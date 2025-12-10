// Meta Pixel (Facebook)
export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params)
  }
}

// Google Analytics 4
export const trackGAEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params)
  }
}

// TikTok Pixel
export const trackTikTokEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).ttq) {
    (window as any).ttq.track(eventName, params)
  }
}

// Track all pixels at once
export const trackAllPixels = (eventName: string, params?: Record<string, unknown>) => {
  trackMetaEvent(eventName, params)
  trackGAEvent(eventName, params)
  trackTikTokEvent(eventName, params)
}

// Common events
export const trackPageView = () => {
  trackMetaEvent('PageView')
  trackGAEvent('page_view')
  trackTikTokEvent('ViewContent')
}

export const trackBookingStarted = (serviceType: string) => {
  const params = { content_type: 'service', content_name: serviceType }
  trackMetaEvent('InitiateCheckout', params)
  trackGAEvent('begin_checkout', params)
  trackTikTokEvent('InitiateCheckout', params)
}

export const trackBookingCompleted = (bookingId: string, value: number) => {
  const params = { 
    content_type: 'booking',
    content_id: bookingId,
    value,
    currency: 'IDR'
  }
  trackMetaEvent('Purchase', params)
  trackGAEvent('purchase', params)
  trackTikTokEvent('CompletePayment', params)
}
