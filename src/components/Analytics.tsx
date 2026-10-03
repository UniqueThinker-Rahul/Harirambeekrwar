import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Analytics: React.FC = () => {
  const location = useLocation();

  const gscVerification = (
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GSC_VERIFICATION) ||
    (typeof process !== 'undefined' && process.env?.VITE_GSC_VERIFICATION) ||
    ''
  ).trim();

  const gaId = (
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GA_ID) ||
    (typeof process !== 'undefined' && process.env?.VITE_GA_ID) ||
    ''
  ).trim();

  // Initialize GA4 and listen for route changes
  useEffect(() => {
    if (!gaId || typeof window === 'undefined') return;

    // Check if gtag script already loaded
    if (!document.getElementById('ga-gtag-script')) {
      const script = document.createElement('script');
      script.id = 'ga-gtag-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      const initScript = document.createElement('script');
      initScript.id = 'ga-init-script';
      initScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', { send_page_view: false });
      `;
      document.head.appendChild(initScript);
    }

    // Send page view on initial load and route changes
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location, gaId]);

  return (
    <Helmet>
      {gscVerification && (
        <meta name="google-site-verification" content={gscVerification} />
      )}
    </Helmet>
  );
};

export default Analytics;
