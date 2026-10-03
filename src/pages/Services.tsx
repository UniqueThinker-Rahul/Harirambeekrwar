import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, CheckCircle, Sparkles, Star } from 'lucide-react';

const SERVICES = [
  { slug: 'advanced-numerology', name: 'Advanced Numerology Consultation', emoji: '✨', price: '₹3,200', offer: '50% Off', offerColor: 'text-emerald-700 bg-emerald-50 border-emerald-200', desc: 'Through a detailed analysis of your birth date and name, I help you understand your strengths, weaknesses, and future cycles. Includes Name Correction, Career & Business Growth, Life Path Analysis, and selecting the perfect wrist watch design and colour for success.', highlights: ['Life Path & Destiny Number Analysis', 'Name Correction & Vibration Alignment', 'Career, Business & Finance Guidance', 'Lucky Colours, Numbers & Wristwatch'], accentFrom: 'from-amber-400', accentTo: 'to-orange-400' },
  { slug: 'vastu-consultation', name: 'Scientific & Traditional Vastu', emoji: '🏡', price: '₹20,000+', offer: 'Custom', offerColor: 'text-blue-700 bg-blue-50 border-blue-200', desc: 'Your home or workplace heavily influences your mental peace and financial growth. I provide Vastu evaluations (Residential, Commercial, Remedial) using colours, elements, and simple placement shifts to fix existing Vastu Doshas without demolition.', highlights: ['Residential & Commercial Evaluation', 'No Demolition — Simple Remedies', 'Colour & Element Corrections', 'Entry, Kitchen & Bedroom Alignment'], accentFrom: 'from-indigo-500', accentTo: 'to-blue-500' },
];

const Services = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEO title="Services Offered | Numerology & Vastu — Hari ram Beekrwar" description="Specialized Numerology and Vastu consultation services to bring balance to your personal and professional life. Book today." />
      <div className="bg-light-grey text-dark-grey min-h-screen pb-24">
        {/* Hero */}
        <section className="bg-hero-dark py-32 text-center px-4 relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-navy/80 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 px-6 py-2 rounded-full font-bold mb-6 text-sm tracking-widest uppercase">Our Services</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Specialized, Data-Driven<br />Consultations</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">We offer specialized, data-driven, and intuitive consultation services to bring balance to your personal and professional life.</p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="max-w-5xl mx-auto px-4 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map(s => (
              <div key={s.slug} className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col group hover:-translate-y-3 transition-transform duration-400 overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${s.accentFrom} ${s.accentTo}`} />
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-6xl">{s.emoji}</div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-dark-grey">{s.price}</div>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${s.offerColor}`}>{s.offer}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-dark-grey mb-3 group-hover:text-secondary transition-colors">{s.name}</h2>
                  <p className="text-medium-grey mb-6 flex-grow leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2 mb-7">{s.highlights.map((h, i) => (<li key={i} className="flex items-center gap-2 text-sm text-dark-grey font-medium"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> {h}</li>))}</ul>
                  <div className="flex gap-3 border-t border-gray-100 pt-6">
                    <Link to="/booking" className="flex-1 text-center btn-sweep bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold py-3 rounded-full hover:from-amber-500 hover:to-amber-600 transition-all shadow-sm text-sm">Book Now</Link>
                    <Link to={`/services/${s.slug}`} className="flex-1 text-center border-2 border-gray-200 text-dark-grey font-bold py-3 rounded-full hover:border-amber-400 hover:text-secondary transition-all text-sm flex items-center justify-center gap-1">Learn More <ArrowRight className="w-3.5 h-3.5" /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 mt-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-4">What You Get</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey">What You Get With Every Session</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5"><img src="/Resource/3.png" alt="Session Benefits" className="rounded-3xl shadow-2xl w-full object-cover h-full min-h-[420px]" /></div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{ title: 'Practical Solutions', desc: 'For real-life challenges. We focus on non-destructive, modern solutions that actually work.' }, { title: 'No Superstitions', desc: 'We tell you exactly what the numbers say — good or bad — so you can prepare practically.' }, { title: 'Strict Confidentiality', desc: 'Every consultation is treated with absolute privacy, tailored to your unique blueprint.' }, { title: 'Committed Support', desc: 'Dedicated to helping you achieve success, peace & prosperity in every area of life.' }].map((b, i) => (
                  <div key={i} className="bg-gray-50 p-7 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow group">
                    <CheckCircle className="w-9 h-9 text-secondary mb-5 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-dark-grey mb-2">{b.title}</h3>
                    <p className="text-medium-grey text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-hero-dark text-center px-4 mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-300 px-5 py-2 rounded-full text-sm font-bold mb-8"><Sparkles className="w-4 h-4" /> Ready to Transform?</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Are You Ready to Transform Your Life?</h2>
            <p className="text-gray-300 text-xl md:text-2xl mb-12 font-light leading-relaxed">Don't let hidden energies hold you back. Take the first step today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-xl hover:-translate-y-1">Book Consultation NOW <Sparkles className="ml-3 w-5 h-5" /></Link>
              <a href="https://wa.me/919509610711" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all">💬 WhatsApp Us</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;