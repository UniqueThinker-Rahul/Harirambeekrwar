import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Heart, Sparkles, CheckCircle, Clock, Users, BookOpen, ChevronDown, ChevronUp, Send, Lock } from 'lucide-react';
import SEO from '../components/SEO';

const FAQS = [
  { q: 'How does Numerology actually help me?', a: 'Numerology decodes the hidden vibrations in your date of birth and name. It reveals your Life Path, strengths, challenges, and future cycles — giving you clarity to make better decisions in career, relationships, and finances.' },
  { q: 'Is Vastu suitable for existing homes and offices?', a: 'Absolutely. Most of our Vastu recommendations use simple adjustments — colours, placement shifts, and elemental corrections — that work perfectly in existing properties without any major demolition.' },
  { q: 'Are consultations truly personalized for me?', a: 'Every consultation is strictly tailored to your unique birth details, personal goals, and current life situation. There are no generic scripts or copy-paste answers here.' },
  { q: 'Can I book an online consultation from outside India?', a: 'Yes. Consultations are available via Video Call / Voice Call for clients across India and worldwide. International clients are warmly welcome.' },
  { q: 'What happens after I pay and book?', a: 'Immediately after payment, you will be redirected to WhatsApp with your full details pre-filled. Our team will confirm your slot within 2–4 hours and arrange a direct call with Hari ram Beekrwar ji.' },
  { q: 'Are there any superstitious rituals involved?', a: 'None whatsoever. Our remedies are logical, modern, and practical — no expensive pujas, no complex rituals. Just science-backed energy alignment through numbers and space.' },
];

const TESTIMONIALS = [
  { name: 'Ramesh S.', city: 'Jaipur', text: 'My business turned around completely after following Hari Ram Ji\'s numerology guidance. The clarity I gained was life-changing. Highly recommend!', initials: 'RS', color: 'from-amber-500 to-orange-500' },
  { name: 'Priya M.', city: 'Delhi', text: 'Our home feels so much more peaceful and financially blessed after the Vastu consultation. We noticed positive changes within weeks!', initials: 'PM', color: 'from-indigo-500 to-purple-500' },
  { name: 'Vikram T.', city: 'Mumbai', text: 'I was sceptical at first, but the name correction advice genuinely improved my professional relationships and career growth dramatically.', initials: 'VT', color: 'from-emerald-500 to-teal-500' },
  { name: 'Sunita K.', city: 'Bharatpur', text: 'Got guidance on my marriage prospects and the remedies were so practical and easy. Within 3 months, things fell into place naturally.', initials: 'SK', color: 'from-rose-500 to-pink-500' },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 ${open ? 'border-amber-300 shadow-md shadow-amber-100' : 'border-gray-100 shadow-sm'}`}>
      <button onClick={() => setOpen(prev => !prev)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 focus:outline-none group" aria-expanded={open}>
        <span className={`font-bold text-base leading-snug transition-colors ${open ? 'text-secondary' : 'text-dark-grey group-hover:text-secondary'}`}>{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open ? 'bg-amber-100 text-secondary' : 'bg-gray-100 text-medium-grey'}`}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div><p className="px-6 pb-5 text-medium-grey leading-relaxed text-sm">{a}</p></div>
      </div>
    </div>
  );
};

const Home = () => {
  const [leadForm, setLeadForm] = useState({ name: '', email: '' });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`*🌟 FREE REPORT REQUEST 🌟*\n\n*Name:* ${leadForm.name}\n*Email:* ${leadForm.email}\n\nPlease send me my Free Planetary Impact Report.`);
    window.open(`https://wa.me/919509610711?text=${text}`, '_blank');
  };

  return (
    <>
      <SEO title="Numerology & Vastu Consultant | Hari ram Beekrwar" description="Transform Your Life Through the Power of Numerology & Vastu. Discover clarity, success, and lasting prosperity with personalized guidance from Hari ram Beekrwar — trusted by 2,200+ clients." keywords="Numerology, Vastu Shastra, Hari ram Beekrwar, numerology consultation, vastu consultant India" />
      <div>
        {/* HERO */}
        <section className="relative bg-hero-dark text-white overflow-hidden py-24 sm:py-32 starfield" style={{ backgroundColor: '#0F172A' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-3xl" />
            <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-600 opacity-15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-primary opacity-5 blur-3xl rounded-full" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="animate-fadeInUp ring-pulse inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-amber-400/30 backdrop-blur-sm text-sm font-semibold mb-8 text-amber-300">
              <Sparkles className="w-4 h-4" /> Numerology & Vastu Consultant
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight animate-fadeInUp">
              Transform Your Life Through<br className="hidden md:block" /> the Power of{' '}
              <span className="text-shimmer">Numerology & Vastu</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Welcome! I am <strong className="text-white">Hari ram Beekrwar</strong>. Every individual carries a unique energy — when aligned with the right numbers and surroundings, extraordinary growth becomes possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black hover:from-amber-500 hover:to-primary-deep transition-all shadow-[0_0_30px_rgba(245,158,11,0.35)] transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] text-base">
                Book Your Consultation NOW <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="https://wa.me/919509610711?text=Hello%20Hari%20Ram%20Ji,%20I%20want%20to%20know%20more%20about%20your%20consultation%20services." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white font-bold hover:bg-white/20 transition-all text-base">
                <span className="mr-2">💬</span> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-14 flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Star className="w-4 h-4 text-primary" /> 2,200+ Lives Transformed</div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><ShieldCheck className="w-4 h-4 text-primary" /> 100% Confidentiality</div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><CheckCircle className="w-4 h-4 text-primary" /> Practical Remedies</div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><Heart className="w-4 h-4 text-primary" /> 5+ Years Experience</div>
            </div>
          </div>
        </section>

        {/* ABOUT EXPERT */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex justify-center">
                <div className="relative max-w-md w-full p-3">
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.18)] border border-amber-200/50 bg-gray-50 p-2.5">
                    <img src="/Resource/2.png" alt="Hari ram Beekrwar — Numerology & Vastu Expert" className="rounded-2xl w-full h-auto max-h-[540px] object-contain block" />
                    
                    {/* Floating Badges cleanly positioned inside the card */}
                    <div className="absolute top-5 right-5 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black px-3.5 py-1.5 rounded-xl shadow-xl text-xs sm:text-sm">
                      5+ Years ✨
                    </div>
                    <div className="absolute bottom-5 left-5 bg-slate-950/90 backdrop-blur-sm text-white font-bold px-3.5 py-2 rounded-xl shadow-xl text-xs border border-indigo-700/80">
                      🌟 2,200+ Clients
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/95 backdrop-blur-sm border border-emerald-300 text-emerald-800 font-bold px-3 py-1.5 rounded-xl shadow-lg text-xs flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />100% Confidential
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-4">About the Expert</span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6">Meet Hari ram Beekrwar</h2>
                <p className="text-medium-grey text-lg mb-6 leading-relaxed">With over <strong className="text-dark-grey">5 years of rich experience</strong> in the science of energies, I have successfully guided more than <strong className="text-dark-grey">2,200 clients worldwide</strong>. My mission is to decode the hidden patterns of your life using numbers and optimize your surroundings using the ancient wisdom of Vastu Shastra.</p>
                <div className="bg-gradient-to-br from-cosmic-navy to-dark-grey border border-indigo-800/60 p-6 rounded-2xl mb-8 relative overflow-hidden">
                  <div className="absolute top-2 left-4 text-5xl text-amber-400/20 font-serif leading-none">"</div>
                  <p className="text-gray-200 text-base italic font-medium relative z-10 leading-relaxed">"Your date of birth holds the blueprint of your destiny, and your space holds the power to manifest it. Let's align them together."</p>
                  <p className="text-amber-400 font-bold text-sm mt-3 relative z-10">— Hari ram Beekrwar</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {['5+ Years of Professional Consultation Experience', 'Committed to Your Success, Peace & Prosperity', 'No Superstitions — Only Logical, Practical Remedies'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-dark-grey font-medium">{item}</span></li>
                  ))}
                </ul>
                <Link to="/about" className="inline-flex items-center text-secondary font-bold hover:underline transition-all group">Read Full Biography <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-4">Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">Services Offered</h2>
              <p className="text-medium-grey max-w-2xl mx-auto text-lg">Specialized, data-driven consultations to bring balance and prosperity to your personal and professional life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: 'Advanced Numerology', price: '₹3,200', offer: '50% Off', emoji: '✨', desc: 'Deep analysis of your birth date and name to uncover your Life Path, strengths, future cycles, name correction, and career-business guidance.', link: '/services/advanced-numerology', color: 'from-amber-500 to-orange-500' },
                { title: 'Scientific & Traditional Vastu', price: '₹20,000+', offer: 'Custom', emoji: '🏡', desc: 'Vastu evaluations for your home or workplace using colours, elements, and placement corrections — no major demolition required.', link: '/services/vastu-consultation', color: 'from-indigo-500 to-blue-600' },
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-2">
                  <div className={`h-1.5 -mx-8 -mt-8 mb-8 rounded-t-3xl bg-gradient-to-r ${service.color}`} />
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{service.emoji}</div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-dark-grey">{service.price}</div>
                      <div className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">{service.offer}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-grey mb-3">{service.title}</h3>
                  <p className="text-medium-grey mb-6 flex-grow leading-relaxed">{service.desc}</p>
                  <div className="flex gap-3">
                    <Link to="/booking" className="flex-1 text-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-4 py-3 rounded-full hover:from-amber-500 hover:to-amber-600 transition-all shadow-sm text-sm">Book Now</Link>
                    <Link to={service.link} className="flex-1 text-center border-2 border-gray-200 text-dark-grey font-bold px-4 py-3 rounded-full hover:border-amber-400 hover:text-secondary transition-all text-sm">Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 rounded-full border-2 border-dark-grey text-dark-grey font-bold hover:bg-dark-grey hover:text-white transition-all">Browse All Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-4">Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">How Our Process Works</h2>
              <p className="text-medium-grey text-lg max-w-2xl mx-auto">A seamless, fully transparent process designed to give you clarity and deliver absolute value.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-amber-200 z-0" />
              {[
                { step: '01', icon: <Clock className="w-7 h-7" />, title: 'Book a Slot', desc: 'Choose a time that works for you and securely pay ₹3,200 via Razorpay.' },
                { step: '02', icon: <Users className="w-7 h-7" />, title: 'Share Details', desc: 'After payment, send your birth details via WhatsApp for analysis.' },
                { step: '03', icon: <BookOpen className="w-7 h-7" />, title: 'Private Consultation', desc: 'Speak directly with Hari ram Beekrwar — safely and confidentially.' },
                { step: '04', icon: <Sparkles className="w-7 h-7" />, title: 'Witness Growth', desc: 'Execute practical remedies and observe profound positive shifts.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 text-center p-8 rounded-3xl relative shadow-sm hover:shadow-lg transition-shadow group z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-300/30 absolute -top-10 left-1/2 -translate-x-1/2 border-4 border-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="mt-12">
                    <h3 className="text-xl font-bold text-dark-grey mb-3">{item.step}. {item.title}</h3>
                    <p className="text-medium-grey text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US + TESTIMONIALS */}
        <section className="py-24 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-6">Why Choose Us</span>
                <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-6 leading-tight">The Most Trusted Name in Numerology & Vastu</h2>
                <p className="text-medium-grey text-lg mb-10 leading-relaxed">Finding an authentic consultant can be overwhelming. We pride ourselves on pure accuracy, highly ethical practices, and actionable remedies for real-life challenges.</p>
                <ul className="space-y-6">
                  {[
                    { icon: <ShieldCheck className="w-8 h-8 text-tertiary" />, title: 'Confidential & Personalized', desc: 'Every consultation is treated with absolute privacy and tailored to your unique energetic blueprint.' },
                    { icon: <Heart className="w-8 h-8 text-secondary" />, title: 'Practical & Easy Remedies', desc: 'No superstitions or expensive changes — only logical, modern, and highly effective remedies.' },
                    { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: 'Proven Track Record', desc: '2,200+ clients successfully guided across India and worldwide over 5+ years of practice.' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm gap-5 hover:shadow-md transition-shadow">
                      <div className="shrink-0 mt-0.5">{item.icon}</div>
                      <div><h4 className="text-xl font-bold text-dark-grey mb-2">{item.title}</h4><p className="text-medium-grey leading-relaxed">{item.desc}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-6">Client Testimonials</span>
                <h3 className="text-2xl font-bold text-dark-grey mb-8">What Our Clients Say</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                      <div className="flex text-primary mb-3">{[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}</div>
                      <p className="text-medium-grey text-sm italic mb-4 leading-relaxed">"{t.text}"</p>
                      <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>{t.initials}</div>
                        <div>
                          <p className="font-bold text-dark-grey text-sm">{t.name}</p>
                          <p className="text-xs text-medium-grey flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-500" /> Verified Client · {t.city}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-4">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">Frequently Asked Questions</h2>
              <p className="text-medium-grey text-lg">Clear up your doubts before deciding to book.</p>
            </div>
            <div className="space-y-4">{FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}</div>
          </div>
        </section>

        {/* FREE REPORT */}
        <section className="py-20 bg-hero-dark starfield border-t border-indigo-900/60" style={{ backgroundColor: '#0F172A' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full mb-6">Free Resource</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get Your FREE Planetary Impact Report</h2>
            <p className="text-gray-300 text-xl mb-10 font-medium leading-relaxed max-w-2xl mx-auto">Enter your name and email — receive a personal blueprint revealing how upcoming energy cycles will impact your money and career this year.</p>
            <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input type="text" required value={leadForm.name} onChange={e => setLeadForm(p => ({ ...p, name: e.target.value }))} placeholder="Your First Name" className="flex-1 px-6 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base" />
              <input type="email" required value={leadForm.email} onChange={e => setLeadForm(p => ({ ...p, email: e.target.value }))} placeholder="Your Best Email" className="flex-1 px-6 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base" />
              <button type="submit" className="btn-sweep shrink-0 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-8 py-4 rounded-full font-black text-base transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] shadow-lg flex items-center gap-2">
                <Send className="w-4 h-4" /> Send My Free Report
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-4">We'll connect you on WhatsApp to deliver your free report. No spam, ever.</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-light-grey px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-[3rem] p-10 sm:p-16 text-center text-slate-950 shadow-2xl relative overflow-hidden border border-amber-300" style={{background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)'}}>
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-700/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tight">Are You Ready to Transform Your Life?</h2>
              <p className="text-slate-900/90 text-lg sm:text-xl mb-8 font-medium leading-relaxed">Don't let hidden energies hold you back. Take the first step toward a balanced and prosperous future today.</p>
              <p className="text-indigo-950 font-bold text-lg sm:text-xl mb-10 bg-white/40 backdrop-blur-sm py-2 px-6 rounded-full inline-block border border-white/50 shadow-sm">Your journey toward balance and success begins now.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-10 py-5 rounded-full bg-slate-950 text-amber-300 font-black text-lg hover:bg-slate-900 hover:text-amber-200 transition-all shadow-2xl transform hover:-translate-y-1">
                  Book Consultation NOW <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
                <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20a%20consultation%20with%20Hari%20Ram%20Ji." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-white/30 text-slate-950 font-black text-lg hover:bg-white/50 transition-all border border-white/40">
                  <span className="mr-2">💬</span> WhatsApp Us
                </a>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 bg-white text-rose-700 font-bold px-5 py-2.5 rounded-full text-sm shadow-md border border-rose-200/80">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" /> 3 Consultation Slots Available Today
              </div>
              <p className="text-slate-800 text-sm mt-5 flex items-center justify-center gap-2 font-medium"><Lock className="w-4 h-4" /> 100% Secure Payment · Powered by Razorpay</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;