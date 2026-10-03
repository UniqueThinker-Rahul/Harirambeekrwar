import React from 'react';
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
    <SEO
      title="In-Depth Numerology Reports | HARI RAM BEEKRWAR"
      description="Get deeply researched, manually prepared numerology reports by Hari ram Beekrwar. Covering Marriage, Career, Wealth, and complete life blueprint."
    />
    <div className="min-h-screen bg-light-grey pb-32">
      {/* Hero Banner with Cosmic Starfield */}
      <section className="bg-hero-dark text-white py-16 sm:py-24 md:py-32 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-navy/80 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 px-6 py-2 rounded-full font-bold mb-6 text-xs sm:text-sm tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" /> Premium Hand-Crafted Reports
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Comprehensive Personal<br />Numerology Reports
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light">
            Unlike generic, computer-generated PDFs, these reports are <strong className="text-white font-semibold">meticulously crafted by hand</strong> — spending hours mathematically analysing your unique planetary alignments and numbers.
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REPORTS.map((r, idx) => {
            const Icon = r.icon;
            const waUrl = `https://wa.me/919509610711?text=${encodeURIComponent(r.waMsg)}`;
            return (
              <div key={idx} className="bg-white rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-1.5 flex flex-col">
                <div className={`h-1.5 w-full bg-gradient-to-r ${r.accentFrom} ${r.accentTo}`} />
                <div className="p-6 sm:p-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform ${r.iconBg}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase border ${r.badge.color}`}>
                      {r.badge.label}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-dark-grey mb-3">{r.title}</h2>
                  <p className="text-medium-grey text-sm sm:text-base mb-6 leading-relaxed flex-grow">{r.desc}</p>

                  <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl mb-7">
                    <h4 className="font-bold text-dark-grey mb-3 text-xs uppercase tracking-wide flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> What's Included
                    </h4>
                    <ul className="space-y-2.5">
                      {r.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-medium-grey text-xs sm:text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100 pt-6">
                    <div>
                      <div className="text-xs text-medium-grey line-through mb-0.5">{r.originalPrice}</div>
                      <div className="font-black text-3xl sm:text-4xl text-dark-grey">{r.price}</div>
                      <div className="text-xs text-emerald-600 font-bold mt-0.5">Special Launch Fee</div>
                    </div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-sweep w-full sm:w-auto text-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-full hover:from-amber-500 hover:to-primary-deep transition-all shadow-md flex items-center gap-2 text-sm hover:-translate-y-0.5"
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
      <div className="max-w-5xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-3">
            Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            { icon: <FileText className="w-7 h-7" />, color: 'bg-amber-50 text-amber-600 border border-amber-200/80', title: '1. Place Request', desc: 'Send your birth details (Date, Time, Place of Birth) and report preference via WhatsApp.' },
            { icon: <Clock className="w-7 h-7" />, color: 'bg-indigo-50 text-indigo-600 border border-indigo-200/80', title: '2. Manual Calculation', desc: 'Hari ram Ji spends 2–3 business days carefully calculating and crafting your personalized report.' },
            { icon: <Mail className="w-7 h-7" />, color: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80', title: '3. Secure Delivery', desc: 'Your comprehensive PDF report is delivered straight to your email and WhatsApp to keep forever.' },
          ].map((step, i) => (
            <div key={i} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-grey mb-2">{step.title}</h3>
              <p className="text-medium-grey text-sm sm:text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Alternative Banner */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden border border-indigo-800/60 text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-primary pointer-events-none">
            <ShieldCheck className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4">
              Need Live Clarity?
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Report to Get?</h3>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Written reports provide deep reference, but a direct 1-on-1 consultation lets you ask unlimited personal questions in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-sweep inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-base hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg hover:-translate-y-0.5">
                Book a Consultation Call <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20numerology%20reports." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-base hover:bg-white/20 transition-all">
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Reports;
