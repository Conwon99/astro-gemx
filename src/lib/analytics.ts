// Google Analytics event tracking utility
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common CTA tracking functions
export const trackCTA = (ctaName: string, location: string) => {
  trackEvent('click', 'CTA', `${ctaName} - ${location}`);
};

export const trackBooking = (bookingType: string, location: string) => {
  trackEvent('click', 'Booking', `${bookingType} - ${location}`);
};

export const trackContact = (contactMethod: string, location: string) => {
  trackEvent('click', 'Contact', `${contactMethod} - ${location}`);
};

export const trackNavigation = (page: string, location: string) => {
  trackEvent('click', 'Navigation', `${page} - ${location}`);
};
