import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures every page transition instantly starts at the top of the viewport
 * while preserving smooth scrolling for on-page anchors (e.g., #hash).
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (hash) {
      // If navigating to a specific in-page anchor, smooth scroll to target
      const timer = setTimeout(() => {
        try {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } catch {
          // Graceful fallback for invalid selector
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // Temporarily disable global smooth scroll to prevent slow/awkward page jumps
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    // Restore smooth scroll on next animation frame for in-page anchors & micro-interactions
    const rafId = requestAnimationFrame(() => {
      html.style.scrollBehavior = prevScrollBehavior || '';
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
