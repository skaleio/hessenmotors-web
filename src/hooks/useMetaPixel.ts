import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: Record<string, any>
    ) => void;
  }
}

export const useMetaPixel = () => {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params);
    }
  };

  return { trackEvent };
};

// Eventos comunes predefinidos
export const MetaPixelEvents = {
  // Eventos estándar
  PageView: 'PageView',
  ViewContent: 'ViewContent',
  Search: 'Search',
  AddToCart: 'AddToCart',
  InitiateCheckout: 'InitiateCheckout',
  Lead: 'Lead',
  CompleteRegistration: 'CompleteRegistration',
  Contact: 'Contact',
  
  // Eventos personalizados
  FormSubmit: 'FormSubmit',
  VehicleView: 'VehicleView',
  CatalogView: 'CatalogView',
};
