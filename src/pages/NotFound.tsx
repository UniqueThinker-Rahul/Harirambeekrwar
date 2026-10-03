import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Hari Ram Beekrwar"
        description="The page you are looking for does not exist on Hari Ram Beekrwar's website. Return home or contact us for numerology guidance."
        noindex={true}
      />
      <div className="min-h-[80vh] flex items-center justify-center bg-hero-dark starfield py-10 sm:py-16 px-4 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Ambient Lighting Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-36 -left-20 sm:top-40 sm:-left-20 w-64 sm:w-72 h-64 sm:h-72 bg-indigo-600/15 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
        </div>

        <div className="max-w-xl w-full text-center bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 shadow-2xl border border-slate-700/80 relative z-10 text-white overflow-hidden" data-reveal="scale-up">
          {/* Top Luxury Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />

          <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.25)]">
            <Compass className="w-7 h-7 sm:w-10 sm:h-10 animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-500/10 px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-400/30 mb-3 sm:mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            Cosmic Alignment Lost · 404
          </span>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white mb-2.5 sm:mb-3 tracking-tight">
            Page <span className="text-shimmer inline-block">Not Found</span>
          </h1>

          <p className="text-slate-300 text-xs xs:text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed font-light">
            The cosmic pathway or page you are seeking could not be found. It may have been relocated or does not exist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black py-3 sm:py-3.5 px-5 sm:px-6 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:brightness-110 transition-all text-xs sm:text-sm group"
            >
              <Home className="w-4 h-4" /> Return to Home
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold py-3 sm:py-3.5 px-5 sm:px-6 rounded-full backdrop-blur-md transition-all text-xs sm:text-sm group"
            >
              <Phone className="w-4 h-4" /> Contact Support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400">
            Need urgent assistance? WhatsApp{' '}
            <a
              href="https://wa.me/919509610711"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-amber-300 hover:underline transition-colors"
            >
              +91 9509610711
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
