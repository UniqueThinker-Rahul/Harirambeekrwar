import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Zap, Clock, ShieldCheck, Star, ArrowRight, MessageCircle, CheckCircle, Lock, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const UrgentLovePlan = () => (
  <>
    <SEO />
    <div className="bg-light-grey min-h-screen">
      {/* Hero */}
      <section className="relative bg-love-dark text-white overflow-hidden py-10 sm:py-20 md:py-28 starfield" style={{ backgroundColor: '#3B0716' }}>
        {/* Ambient Rose Cosmic Lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-80 h-48 sm:h-80 bg-amber-500/10 rounded-full blur-[80px] sm:blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Glowing Heart Container */}
          <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3.5 sm:mb-5 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-600/10 border border-rose-500/40 flex items-center justify-center text-rose-300 shadow-[0_0_35px_rgba(244,63,94,0.35)] ring-1 ring-rose-400/20">
            <Heart className="w-7 h-7 sm:w-10 sm:h-10 fill-rose-500/40 text-rose-300 animate-pulse" />
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3.5 sm:mb-5 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.2)] max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
            </span>
            <span>Priority Energetic Alignment</span>
          </div>

          {/* Main Fluid Heading */}
          <h1 className="text-[1.65rem] xs:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 sm:mb-5 leading-[1.2] sm:leading-[1.15]">
            <span className="text-shimmer inline-block">"Urgent Love Karna Hai"</span>
            <span className="block text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl text-rose-100 font-semibold mt-1.5 sm:mt-3">
              Attract &amp; Manifest True Love and Marriage Alignment
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-rose-100/90 max-w-2xl mx-auto mb-5 sm:mb-7 leading-relaxed font-normal px-1 sm:px-0">
            High-priority energetic alignment to overcome relationship delays, misunderstandings, and attract lasting marital harmony.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto w-full">
            <Link
              to="/booking"
              className="btn-sweep group w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-red-600 text-white font-black hover:brightness-110 transition-all shadow-[0_0_35px_rgba(244,63,94,0.4)] active:scale-[0.98] text-sm sm:text-base"
            >
              <span>Book Priority Slot · ₹3,200</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20the%20Urgent%20Love%20Karna%20Hai%20Plan%20for%20₹3200/-"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20ba59] transition-all shadow-[0_0_25px_rgba(37,211,102,0.25)] text-sm sm:text-base active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Glassmorphic Trust Row */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-rose-100/90 mt-8 sm:mt-12">
            <span className="flex items-center gap-1 bg-rose-950/60 border border-rose-500/30 backdrop-blur-md px-2.5 sm:px-4 py-1.5 rounded-full">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> 100% Confidential
            </span>
            <span className="flex items-center gap-1 bg-rose-950/60 border border-rose-500/30 backdrop-blur-md px-2.5 sm:px-4 py-1.5 rounded-full">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 fill-amber-400" /> 2,200+ Clients
            </span>
            <span className="flex items-center gap-1 bg-rose-950/60 border border-rose-500/30 backdrop-blur-md px-2.5 sm:px-4 py-1.5 rounded-full">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-300" /> 24-Hour Priority
            </span>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14" data-reveal="fade-up">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              Diagnostic Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-grey mb-3 sm:mb-4 tracking-tight">
              Is This Priority Plan For You?
            </h2>
            <p className="text-medium-grey text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              If you are experiencing any of the following life hurdles, this urgent energetic intervention is designed specifically to resolve blockages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-rose-600" />,
                title: 'Relationship Conflicts',
                desc: 'Constant heated arguments, emotional misunderstandings, or cold distance creeping into your current partnership.',
                badge: 'Active Friction',
                accent: 'from-rose-500 to-red-500',
                border: 'border-rose-100 hover:border-rose-300'
              },
              {
                icon: <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />,
                title: 'Delays in Marriage',
                desc: 'Struggling to find the right partner or facing repeated last-minute obstacles in proposals and marriage talks.',
                badge: 'Time Sensitivity',
                accent: 'from-amber-400 to-orange-500',
                border: 'border-amber-100 hover:border-amber-300'
              },
              {
                icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600" />,
                title: 'Specific Person Alignment',
                desc: 'Aligning your energetic vibration and directional aura to heal a broken connection or attract a soulmate.',
                badge: 'Frequency Tuning',
                accent: 'from-pink-500 to-rose-600',
                border: 'border-pink-100 hover:border-pink-300'
              },
            ].map((item, i) => (
              <div
                key={i}
                data-reveal="fade-up"
                data-delay={i * 150}
                className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${item.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col relative overflow-hidden group`}
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-dark-grey bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-2.5">{item.title}</h3>
                <p className="text-medium-grey text-xs sm:text-sm leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Details */}
      <section className="py-14 sm:py-24 bg-light-grey border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal="scale-up" className="bg-white rounded-3xl sm:rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row relative">
            {/* Top Luxury Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-600 z-10" />

            <div className="lg:w-3/5 p-6 sm:p-10 md:p-12">
              <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 font-bold px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 tracking-wider uppercase text-[11px] sm:text-xs border border-rose-200">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" /> Complete Deliverables
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-dark-grey mb-4 sm:mb-6 tracking-tight">
                Priority Love &amp; Relationship Blueprint
              </h2>
              <ul className="space-y-3.5 sm:space-y-4">
                {[
                  { title: 'Immediate Slot Allocation', desc: 'Skip the normal waiting line. Get a priority consultation confirmed within 24 hours.' },
                  { title: 'Deep Compatibility Check', desc: "Advanced numerology matching of your date of birth with your partner's planetary chart." },
                  { title: 'Vastu for Romance & Bonding', desc: 'Specific bedroom and home energy alignments to foster love, attraction, and emotional harmony.' },
                  { title: 'Custom Non-Destructive Remedies', desc: 'Practical, logical remedies to remove energetic blockages in your love life immediately.' },
                  { title: 'Dedicated Q&A Segment', desc: 'Ask unlimited questions about your relationship situation directly to Hari Ram Ji.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-dark-grey font-bold text-xs sm:text-sm md:text-base block">{item.title}</span>
                      <span className="text-medium-grey text-xs sm:text-sm leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-2/5 bg-gradient-to-br from-rose-950 via-slate-900 to-cosmic-navy text-white p-6 sm:p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-rose-400 pointer-events-none">
                <Heart className="w-48 h-48" />
              </div>
              <div className="relative z-10 text-center">
                <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-500/20 border border-rose-400/30 px-3 py-1 rounded-full mb-3">
                  Urgent Priority Slot
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 text-white">Consultation Fee</h3>
                <div className="mb-3 sm:mb-4 flex items-center justify-center gap-2">
                  <span className="line-through text-slate-400 text-base sm:text-lg">₹6,400/-</span>
                  <span className="bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-md text-[11px] sm:text-xs uppercase shadow-sm">
                    50% Off Today
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-300 mb-2">₹3,200</div>
                <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 font-light">
                  One-on-One Voice / Video Call Consultation
                </p>
                <Link
                  to="/booking"
                  className="btn-sweep w-full inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm sm:text-base hover:from-amber-500 hover:to-amber-700 transition-all shadow-lg hover:-translate-y-0.5 mb-3"
                >
                  <Lock className="w-4 h-4 mr-2" /> Book Priority Call Now
                </Link>
                <a
                  href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20the%20Urgent%20Love%20Karna%20Hai%20Plan%20for%20₹3200/-"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex justify-center items-center px-6 sm:px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20b858] transition-all shadow-md hover:-translate-y-0.5 mb-4"
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Book via WhatsApp
                </a>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-slate-400 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Secure &amp; Confidential
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-24 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto" data-reveal="scale-up">
          <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-cosmic-navy rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-rose-900/60">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-rose-500 pointer-events-none">
              <Heart className="w-56 h-56" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-500/20 border border-rose-400/30 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                Don't Wait Any Longer
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                Reclaim Your Love &amp; Emotional Peace
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed font-light">
                Love delayed is love denied. Take action today — every single day you wait is another day without the clarity and emotional harmony you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/booking"
                  className="btn-sweep inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:from-amber-500 hover:to-amber-700 transition-all shadow-xl hover:-translate-y-1"
                >
                  Book Priority Slot NOW <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a
                  href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20the%20Urgent%20Love%20Karna%20Hai%20Plan%20for%20₹3200/-"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#25D366]" /> Talk on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default UrgentLovePlan;