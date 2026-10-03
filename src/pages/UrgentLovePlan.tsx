import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Zap, Clock, ShieldCheck, Star, ArrowRight, MessageCircle, CheckCircle, Lock } from 'lucide-react';
import SEO from '../components/SEO';

const UrgentLovePlan = () => (
  <>
    <SEO title="Urgent Love Karna Hai Plan | Priority Consultation | Hari ram Beekrwar" description="Priority Numerology & Vastu consultation for love, relationships, and marriage. Get fast-tracked remedies from Hari ram Beekrwar." />
    <div className="bg-light-grey min-h-screen">
      {/* Hero */}
      <section className="relative bg-love-dark text-white overflow-hidden py-14 sm:py-28 starfield" style={{ backgroundColor: '#3B0716' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500 opacity-15 rounded-full blur-3xl" />
          <div className="absolute top-40 -left-20 w-72 h-72 bg-amber-400 opacity-8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-[0_0_35px_rgba(244,63,94,0.3)]">
            <Heart className="w-10 h-10 fill-rose-500/30 text-rose-300 animate-pulse" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-shimmer">"Urgent Love Karna Hai"</span>
            <br className="hidden md:block" />
            <span className="text-2xl sm:text-3xl md:text-5xl text-gray-200 mt-4 block font-semibold">Attract & Manifest True Love</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">Facing constant delays in marriage, heartbreak, or relationship misunderstandings? Get an immediate, high-priority energetic alignment to attract the love you deserve.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-8 py-4 rounded-full bg-red-500 text-white font-black hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(239,68,68,0.35)] transform hover:-translate-y-1 text-lg">Book Priority Slot NOW <ArrowRight className="ml-2 w-5 h-5" /></Link>
            <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20the%20Urgent%20Love%20Karna%20Hai%20Plan%20for%20₹3200/-" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-all shadow-lg hover:-translate-y-1 text-lg"><MessageCircle className="w-5 h-5 mr-2" /> Book via WhatsApp</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><ShieldCheck className="w-4 h-4 text-primary" /> 100% Confidential</span>
            <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Star className="w-4 h-4 text-primary" /> 2,200+ Clients Helped</span>
            <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Clock className="w-4 h-4 text-primary" /> 24-Hour Priority Slot</span>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary bg-red-50 border border-red-200 px-4 py-1.5 rounded-full mb-4">Who Is This For?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-4">Is This Plan For You?</h2>
            <p className="text-medium-grey text-lg max-w-2xl mx-auto">If you are experiencing any of the following, this urgent intervention plan is designed specifically for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-10 h-10 text-red-500" />, title: 'Relationship Conflicts', desc: 'Constant arguments, misunderstandings, or distancing with your current partner.', bg: 'bg-red-50 border-red-100' },
              { icon: <Clock className="w-10 h-10 text-red-500" />, title: 'Delays in Marriage', desc: 'Struggling to find the right life partner or facing repeated obstacles in fixing a marriage.', bg: 'bg-rose-50 border-rose-100' },
              { icon: <Zap className="w-10 h-10 text-red-500" />, title: 'Attracting a Specific Person', desc: 'Wanting to align your energies to attract a specific person or win back a lost love.', bg: 'bg-pink-50 border-pink-100' },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} p-5 sm:p-8 rounded-3xl border hover:shadow-lg transition-all hover:-translate-y-1 text-center group`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-dark-grey mb-3">{item.title}</h3>
                <p className="text-medium-grey leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Details */}
      <section className="py-14 sm:py-24 bg-light-grey border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-3/5 p-6 sm:p-10 md:p-14">
              <div className="inline-block bg-amber-50 text-secondary font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase text-xs sm:text-sm border border-amber-100">What's Included</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-grey mb-6 sm:mb-8">Priority Love & Relationship Blueprint</h2>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  { title: 'Immediate Slot Allocation', desc: 'Skip the waiting line. Get a priority consultation within 24 hours.' },
                  { title: 'Deep Compatibility Check', desc: "Advanced numerology matching of your date of birth with your partner's." },
                  { title: 'Vastu for Romance', desc: 'Specific bedroom and home energy alignments to foster love and harmony.' },
                  { title: 'Secret Custom Remedies', desc: 'Practical, non-destructive remedies to remove blockages in your love life immediately.' },
                  { title: 'Dedicated Q&A Segment', desc: 'Ask unlimited questions about your relationship situation directly to Hari Ram Ji.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" /></div>
                    <div><span className="text-dark-grey font-bold text-sm sm:text-base block">{item.title}</span><span className="text-medium-grey text-xs sm:text-sm">{item.desc}</span></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-2/5 bg-gradient-to-br from-rose-950 via-dark-grey to-cosmic-navy text-white p-6 sm:p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-red-400 pointer-events-none"><Heart className="w-48 h-48" /></div>
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Consultation Fee</h3>
                <div className="mb-4 sm:mb-5"><span className="line-through text-gray-400 text-lg sm:text-xl mr-2">₹6,400/-</span><span className="bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-md text-xs sm:text-sm uppercase animate-pulse inline-block">50% Off</span></div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-300 mb-2">₹3,200</div>
                <p className="text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8">One-on-One Voice/Video Call Consultation</p>
                <Link to="/booking" className="btn-sweep w-full inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-base sm:text-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg hover:-translate-y-1 mb-4"><Lock className="w-4 h-4 mr-2" /> Book Priority Call Now</Link>
                <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20the%20Urgent%20Love%20Karna%20Hai%20Plan%20for%20₹3200/-" target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20b858] transition-all shadow-md hover:-translate-y-1 mb-6"><MessageCircle className="w-4 h-4 mr-2" /> Book via WhatsApp</a>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Secure & Confidential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">Don't Wait Any Longer</h2>
          <p className="text-medium-grey text-lg mb-8 leading-relaxed">Love delayed is love denied. Take action today — every day you wait is a day without the relationship you deserve.</p>
          <Link to="/booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 text-white font-black px-10 py-5 rounded-full text-lg hover:from-red-600 hover:to-rose-700 transition-all shadow-xl hover:-translate-y-1">Book Priority Slot NOW <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </div>
  </>
);

export default UrgentLovePlan;