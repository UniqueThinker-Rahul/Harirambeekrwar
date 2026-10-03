import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import { AppContent } from './App';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ROUTES_SEO, RouteSEOConfig, generateStructuredData, SITE_URL, BRAND_NAME, DEFAULT_OG_IMAGE } from './config/seo';

export function render(url: string) {
  const helmetContext = {} as FilledContext;

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <CartProvider>
          <MemoryRouter initialEntries={[url]}>
            <AppContent />
          </MemoryRouter>
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
}

export { ROUTES_SEO, SITE_URL, BRAND_NAME, DEFAULT_OG_IMAGE, generateStructuredData };
