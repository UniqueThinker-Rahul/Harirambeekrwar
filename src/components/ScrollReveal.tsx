import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type RevealAnimation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'fade-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: RevealAnimation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

/**
 * ScrollReveal Component
 * Wraps content with an ultra-smooth, SSR-safe scroll-in-view reveal.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration,
  threshold = 0.1,
  className = '',
  as: Component = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const currentEl = ref.current;
    if (!currentEl) return;

    // Check if element is already in the viewport on mount
    const rect = currentEl.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (delay > 0) {
        const timer = setTimeout(() => setIsRevealed(true), delay);
        return () => clearTimeout(timer);
      } else {
        setIsRevealed(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => setIsRevealed(true), delay);
            } else {
              setIsRevealed(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px 120px 0px',
      }
    );

    observer.observe(currentEl);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const customStyle: React.CSSProperties = {
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
  };

  return (
    <Component
      ref={ref}
      style={customStyle}
      className={`reveal-init reveal-${animation} ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};

/**
 * GlobalScrollObserver Component
 * Placed once in Layout to automatically animate any element marked with `data-reveal="..."`
 * across all pages and route navigations.
 */
export const GlobalScrollObserver: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const delayStr = el.dataset.delay;
              const delay = delayStr ? parseInt(delayStr, 10) : 0;
              if (delay > 0) {
                setTimeout(() => {
                  el.classList.add('revealed');
                }, delay);
              } else {
                el.classList.add('revealed');
              }
              observer?.unobserve(el);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: '0px 0px 120px 0px',
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('revealed')) {
          const rect = el.getBoundingClientRect();
          // Proactive viewport check: if already in or near viewport, reveal immediately without hiding
          if (rect.top <= window.innerHeight + 150 && rect.bottom >= -50) {
            el.classList.add('revealed');
          } else {
            const anim = el.dataset.reveal || 'fade-up';
            el.classList.add('reveal-init', `reveal-${anim}`);
            observer?.observe(el);
          }
        }
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
};
