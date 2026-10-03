import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle, Clock, ShieldCheck, Mail, MessageCircle, HeartHandshake, TrendingUp, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const REPORTS = [
  {
    badge: { label: 'Bestseller', color: 'bg-rose-50 text-rose-600 border-rose-200' },
    icon: HeartHandshake,
    iconBg: 'bg-rose-50 text-rose-600 border-rose-200/80',
    title: 'Marriage & Compatibility Blueprint',
    desc: 'Complete decoding of your 7th house and Venus vibrations. Uncover the exact timing of marriage, characteristics of your ideal spouse, and highly practical remedies for hurdles.',
    includes: ['15+ Pages of deep manual analysis', 'Exact timing & prediction of marriage', 'Manglik check & neutralization remedies', 'Potential spouse characteristics & compatibility'],
    originalPrice: '₹6,999',
    price: '₹3,999',
    waMsg: 'Hello! I want to order the *Marriage & Compatibility Blueprint* numerology report for ₹3,999. Please guide me on payment.',
    accentFrom: 'from-rose-500',
    accentTo: 'to-amber-500',
  },
  {
    badge: { label: 'Highly Requested', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    icon: TrendingUp,
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
    title: 'Career & Wealth Matrix',
    desc: 'A powerful deep-dive into your 10th and 11th houses. Discover your true professional calling, incoming wealth periods, and exactly how to stop financial leakage entirely.',
    includes: ['20+ Pages of deep manual analysis', 'Year-by-year income prediction map', 'Gemstone & routine wealth remedies', 'Suitable business vs job breakdown'],
    originalPrice: '₹8,999',
    price: '₹5,499',
    waMsg: 'Hello! I want to order the *Career & Wealth Matrix* numerology report for ₹5,499. Please guide me on payment.',
    accentFrom: 'from-indigo-500',
    accentTo: 'to-cyan-500',
  },
];

const Reports = () => (
  <>
    <SEO />
    <div className="min-h-screen bg-light-grey pb-32">
      {/* Hero Banner with Cosmic Starfield */}
      <section className="bg-hero-dark text-white pt-10 pb-14 sm:pt-20 sm:pb-20 md:pt-28 md:pb-24 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
        {/* Ambient Lighting Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="truncate">Premium Hand-Crafted Blueprints</span>
          </div>

          {/* Fluid Heading */}
          <h1 className="text-[1.75rem] xs:text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-5 text-white leading-[1.2] sm:leading-[1.15] tracking-tight">
            Comprehensive Personal{' '}
            <span className="text-shimmer inline-block">Numerology Reports</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-normal mb-5 sm:mb-7 px-1 sm:px-0">
            Hand-crafted personal blueprints calculating your exact planetary houses, karmic timelines, and non-destructive remedies.
          </p>

          {/* Trust Meta Row */}
          <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
              <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" /> 100% Hand-Crafted Calculations
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" /> 48-72h PDF Delivery
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> 100% Confidential
            </span>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-20 mb-20 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REPORTS.map((r, idx) => {
            const Icon = r.icon;
            const waUrl = `https://wa.me/919509610711?text=${encodeURIComponent(r.waMsg)}`;
            return (
              <div
                key={idx}
                data-reveal="fade-up"
                data-delay={idx * 150}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:border-amber-200/90 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${r.accentFrom} ${r.accentTo}`} />
                <div className="p-6 sm:p-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform ${r.iconBg}`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className={`inline-block px-3 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase border shadow-xs ${r.badge.color}`}>
                      {r.badge.label}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-dark-grey mb-2.5 sm:mb-3 tracking-tight">{r.title}</h3>
                  <p className="text-medium-grey text-xs sm:text-sm md:text-base mb-6 leading-relaxed flex-grow">{r.desc}</p>

                  <div className="bg-gray-50/80 border border-gray-100 p-4 sm:p-5 rounded-2xl mb-6 sm:mb-7">
                    <h4 className="font-bold text-dark-grey mb-2.5 sm:mb-3 text-[11px] sm:text-xs uppercase tracking-wide flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Complete Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {r.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-medium-grey text-xs sm:text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                          <span className="text-dark-grey font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100 pt-5 sm:pt-6">
                    <div>
                      <div className="text-xs text-medium-grey line-through mb-0.5">{r.originalPrice}</div>
                      <div className="font-black text-2xl sm:text-3xl text-dark-grey">{r.price}</div>
                      <div className="text-[11px] sm:text-xs text-emerald-600 font-bold mt-0.5">Special Launch Fee</div>
                    </div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-sweep w-full sm:w-auto text-center justify-center bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black px-6 py-3.5 rounded-full hover:from-amber-500 hover:to-amber-700 transition-all shadow-md flex items-center gap-2 text-sm hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4 text-slate-950" /> Order via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* How It Works Steps */}
      <div className="max-w-5xl mx-auto px-4 mb-16 sm:mb-24">
        <div className="text-center mb-10 sm:mb-12" data-reveal="fade-up">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-secondary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3">
            Hand-Crafted Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-grey mb-3 sm:mb-4 tracking-tight">How It Works</h2>
          <p className="text-medium-grey text-xs sm:text-sm md:text-base max-w-xl mx-auto">Three simple steps from initial birth data submission to lifelong personal dossier.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            { step: '01', icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7" />, color: 'bg-amber-50 text-amber-600 border border-amber-200/80', accent: 'from-amber-400 to-orange-400', title: 'Place Request', desc: 'Send your birth details (Date, Time, Place of Birth) and report preference via WhatsApp.' },
            { step: '02', icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />, color: 'bg-indigo-50 text-indigo-600 border border-indigo-200/80', accent: 'from-indigo-500 to-purple-500', title: 'Manual Calculation', desc: 'Hari Ram Beekrwar Ji spends 2–3 business days carefully calculating and crafting your personalized report.' },
            { step: '03', icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7" />, color: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80', accent: 'from-emerald-500 to-teal-500', title: 'Secure Delivery', desc: 'Your comprehensive PDF report is delivered straight to your email and WhatsApp to keep forever.' },
          ].map((item, i) => (
            <div
              key={i}
              data-reveal="fade-up"
              data-delay={i * 100}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:border-amber-200/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center relative overflow-hidden group"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />

              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 bg-gray-100 px-2.5 py-0.5 rounded-full mb-4">
                Step {item.step}
              </span>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-sm group-hover:scale-105 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-2">{item.title}</h3>
              <p className="text-medium-grey text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Alternative Banner */}
      <div className="max-w-4xl mx-auto px-4" data-reveal="scale-up">
        <div className="bg-gradient-to-br from-cosmic-navy via-slate-900 to-cosmic-navy rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-14 text-center shadow-2xl relative overflow-hidden border border-indigo-800/60 text-white">
          {/* Top Luxury Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400 pointer-events-none">
            <ShieldCheck className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 border border-amber-400/30 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              Need Live Clarity?
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tight">Not Sure Which Report to Get?</h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Written reports provide deep lifelong reference, but a direct 1-on-1 consultation lets you ask unlimited personal questions in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm sm:text-base hover:from-amber-500 hover:to-amber-700 transition-all shadow-lg hover:-translate-y-0.5">
                Book a Consultation Call <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20numerology%20reports." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/20 transition-all">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#25D366]" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Reports;
