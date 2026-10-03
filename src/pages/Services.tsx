import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, CheckCircle, Sparkles, Star, Home as HomeIcon, MessageCircle } from 'lucide-react';

const SERVICES = [
  {
    slug: 'advanced-numerology',
    name: 'Advanced Numerology Consultation',
    icon: Sparkles,
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
    price: '₹3,200',
    offer: '50% Off',
    offerColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    desc: 'Through a detailed analysis of your birth date and name, I help you understand your strengths, weaknesses, and future cycles. Includes Name Correction, Career & Business Growth, Life Path Analysis, and selecting the perfect wrist watch design and colour for success.',
    highlights: ['Life Path & Destiny Number Analysis', 'Name Correction & Vibration Alignment', 'Career, Business & Finance Guidance', 'Lucky Colours, Numbers & Wristwatch'],
    accentFrom: 'from-amber-400',
    accentTo: 'to-orange-400'
  },
  {
    slug: 'vastu-consultation',
    name: 'Scientific & Traditional Vastu',
    icon: HomeIcon,
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
    price: '₹20,000+',
    offer: 'Custom',
    offerColor: 'text-blue-700 bg-blue-50 border-blue-200',
    desc: 'Your home or workplace heavily influences your mental peace and financial growth. I provide Vastu evaluations (Residential, Commercial, Remedial) using colours, elements, and simple placement shifts to fix existing Vastu Doshas without demolition.',
    highlights: ['Residential & Commercial Evaluation', 'No Demolition — Simple Remedies', 'Colour & Element Corrections', 'Entry, Kitchen & Bedroom Alignment'],
    accentFrom: 'from-indigo-500',
    accentTo: 'to-blue-500'
  },
];

const Services = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEO />
      <div className="bg-light-grey text-dark-grey min-h-screen pb-24">
        {/* Hero */}
        <section className="bg-hero-dark pt-10 pb-12 sm:pt-20 sm:pb-20 md:pt-28 md:pb-24 text-center px-4 relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">Vedic Consultation Offerings</span>
            </div>

            {/* Main Fluid Heading */}
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-5 leading-[1.2] sm:leading-[1.15] tracking-tight">
              Numerology &amp; Vastu{' '}
              <span className="text-shimmer inline-block">Consultation Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed max-w-2xl mx-auto font-normal mb-2 px-1 sm:px-0">
              Mathematical sound frequency analysis and non-demolition space alignment to dissolve life blockages and attract prosperity.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="max-w-5xl mx-auto px-4 -mt-6 sm:-mt-10 md:-mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES.map((s, idx) => {
              const ServiceIcon = s.icon;
              return (
                <div key={s.slug} data-reveal="fade-up" data-delay={idx * 150} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${s.accentFrom} ${s.accentTo}`} />
                  <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center shadow-inner ${s.iconBg}`}>
                        <ServiceIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-black text-dark-grey">{s.price}</div>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${s.offerColor}`}>{s.offer}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-2 sm:mb-3 group-hover:text-secondary transition-colors">{s.name}</h3>
                    <p className="text-medium-grey mb-5 sm:mb-6 flex-grow leading-relaxed text-xs sm:text-sm md:text-base">{s.desc}</p>
                    <ul className="space-y-2 sm:space-y-2.5 mb-6">{s.highlights.map((h, i) => (<li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-dark-grey font-medium"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> {h}</li>))}</ul>
                    <div className="flex flex-col sm:flex-row gap-3 border-t border-gray-100 pt-5 sm:pt-6">
                      <Link to="/booking" className="w-full sm:flex-1 text-center btn-sweep bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-primary-deep text-slate-950 font-black py-3.5 rounded-full transition-all shadow-md text-sm">Book Now</Link>
                      <Link to={`/services/${s.slug}`} className="w-full sm:flex-1 text-center border-2 border-gray-200 text-dark-grey font-bold py-3.5 rounded-full hover:border-amber-400 hover:text-secondary transition-all text-sm flex items-center justify-center gap-1.5">Learn More <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 sm:py-24 mt-12 sm:mt-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14" data-reveal="fade-up">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3">What You Get</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-3 sm:mb-4">What You Get With Every Session</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-5" data-reveal="fade-right">
                <picture>
                  <source type="image/webp" srcSet="/Resource/3.webp" />
                  <img
                    src="/Resource/3.png"
                    alt="Hari Ram Beekrwar Consultation Session Benefits"
                    width="500"
                    height="420"
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[420px]"
                  />
                </picture>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-reveal="fade-left">
                {[
                  { title: 'Practical Solutions', desc: 'For real-life challenges. We focus on non-destructive, modern solutions that actually work.', accent: 'from-amber-400 to-orange-400' },
                  { title: 'No Superstitions', desc: 'We tell you exactly what the numbers say — good or bad — so you can prepare practically.', accent: 'from-blue-500 to-indigo-500' },
                  { title: 'Strict Confidentiality', desc: 'Every consultation is treated with absolute privacy, tailored to your unique blueprint.', accent: 'from-emerald-500 to-teal-500' },
                  { title: 'Committed Support', desc: 'Dedicated to helping you achieve success, peace & prosperity in every area of life.', accent: 'from-rose-500 to-pink-500' }
                ].map((b, i) => (
                  <div
                    key={i}
                    data-reveal="fade-up"
                    data-delay={i * 100}
                    className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${b.accent}`} />
                    
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-dark-grey mb-1.5">{b.title}</h3>
                    <p className="text-medium-grey text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-24 bg-hero-dark text-center px-4 mt-8 sm:mt-12 relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10" data-reveal="scale-up">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-300 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <Sparkles className="w-3.5 h-3.5" /> Ready to Transform?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">Are You Ready to Transform Your Life?</h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-light leading-relaxed max-w-xl mx-auto">Don't let hidden energies hold you back. Take the first step today toward harmony and abundance.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm sm:text-base hover:from-amber-500 hover:to-amber-700 transition-all shadow-xl hover:-translate-y-1">
                Book Consultation NOW <Sparkles className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20services." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/20 transition-all">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#25D366]" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;