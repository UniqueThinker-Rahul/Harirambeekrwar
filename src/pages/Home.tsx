import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Heart, Sparkles, CheckCircle, Clock, Users, BookOpen, ChevronDown, ChevronUp, Send, Lock, MessageCircle, Home as HomeIcon } from 'lucide-react';
import SEO from '../components/SEO';

const FAQS = [
  { q: 'How does Numerology actually help me?', a: 'Numerology decodes the hidden vibrations in your date of birth and name. It reveals your Life Path, strengths, challenges, and future cycles — giving you clarity to make better decisions in career, relationships, and finances.' },
  { q: 'Is Vastu suitable for existing homes and offices?', a: 'Absolutely. Most of our Vastu recommendations use simple adjustments — colours, placement shifts, and elemental corrections — that work perfectly in existing properties without any major demolition.' },
  { q: 'Are consultations truly personalized for me?', a: 'Every consultation is strictly tailored to your unique birth details, personal goals, and current life situation. There are no generic scripts or copy-paste answers here.' },
  { q: 'Can I book an online consultation from outside India?', a: 'Yes. Consultations are available via Video Call / Voice Call for clients across India and worldwide. International clients are warmly welcome.' },
  { q: 'What happens after I pay and book?', a: 'Immediately after payment, you will be redirected to WhatsApp with your full details pre-filled. Our team will confirm your slot within 2–4 hours and arrange a direct call with Hari Ram Beekrwar.' },
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
      <button onClick={() => setOpen(prev => !prev)} className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 focus:outline-none group" aria-expanded={open}>
        <span className={`font-bold text-sm sm:text-base md:text-lg leading-snug transition-colors ${open ? 'text-secondary' : 'text-dark-grey group-hover:text-secondary'}`}>{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open ? 'bg-amber-100 text-secondary' : 'bg-gray-100 text-medium-grey'}`}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div><p className="px-5 sm:px-6 pb-4 sm:pb-5 text-medium-grey leading-relaxed text-xs sm:text-sm md:text-base">{a}</p></div>
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
      <SEO />
      <div>
        {/* HERO */}
        <section className="relative bg-hero-dark text-white overflow-hidden py-10 sm:py-20 md:py-28 lg:py-32 starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 sm:h-32 bg-primary/5 blur-3xl rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            {/* Eyebrow Badge */}
            <div className="animate-fadeInUp inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1 sm:py-2 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-5 sm:mb-8 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">Numerology &amp; Vastu Consultant</span>
            </div>

            {/* Main Fluid Heading */}
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.2] sm:leading-[1.15] animate-fadeInUp">
              Transform Your Life Through the Power of{' '}
              <span className="text-shimmer inline-block">Numerology &amp; Vastu</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal px-1 sm:px-0">
              Welcome! I am <strong className="text-white font-medium">Hari Ram Beekrwar</strong>. Align your personal numbers and living space with proven remedies to unlock peace, growth, and lasting abundance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto w-full">
              <Link
                to="/booking"
                className="btn-sweep group w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black hover:brightness-110 transition-all shadow-[0_0_30px_rgba(245,158,11,0.35)] active:scale-[0.98] text-sm sm:text-base"
              >
                <span>Book Consultation · ₹3,200</span>
                <span className="ml-2 hidden xs:inline-block px-1.5 py-0.5 rounded bg-black/20 text-[10px] uppercase font-bold tracking-wider">50% Off</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919509610711?text=Hello%20Hari%20Ram%20Ji,%20I%20want%20to%20know%20more%20about%20your%20consultation%20services."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-bold transition-all text-sm sm:text-base active:scale-[0.98] group hover:border-amber-400/40"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Glassmorphic Trust Metrics (2x2 on mobile, 4-col on desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-14">
              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md p-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl hover:border-amber-400/40 transition-colors shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-200 text-left leading-snug">2,200+ Lives Transformed</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md p-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl hover:border-amber-400/40 transition-colors shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-200 text-left leading-snug">100% Confidential</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md p-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl hover:border-amber-400/40 transition-colors shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-200 text-left leading-snug">Logical Remedies</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md p-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl hover:border-amber-400/40 transition-colors shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-rose-400" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-200 text-left leading-snug">5+ Years Mastery</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT EXPERT */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              <div className="md:w-1/2 flex justify-center w-full" data-reveal="fade-up">
                <div className="relative max-w-md w-full p-2 sm:p-3">
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.18)] border border-amber-200/50 bg-gradient-to-b from-amber-50/50 via-slate-50 to-amber-50/20 p-2.5 min-h-[360px] sm:min-h-[460px] md:min-h-[500px] flex items-center justify-center">
                    <picture className="w-full flex items-center justify-center">
                      <source type="image/webp" srcSet="/Resource/2.webp" />
                      <source type="image/jpeg" srcSet="/Resource/2.jpg" />
                      <img
                        src="/Resource/2.jpg"
                        alt="Hari Ram Beekrwar — Numerology & Vastu Expert"
                        width="500"
                        height="540"
                        loading="eager"
                        decoding="async"
                        className="rounded-2xl w-full h-auto max-h-[540px] object-contain block transition-opacity duration-300"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('Hariram.webp')) {
                            target.src = '/Resource/Hariram.webp';
                          }
                        }}
                      />
                    </picture>
                    
                    {/* Floating Badges cleanly positioned inside the card */}
                    <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-xl shadow-xl text-xs sm:text-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-slate-950" /> 5+ Years
                    </div>
                    <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 bg-slate-950/90 backdrop-blur-sm text-white font-bold px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-xl text-xs border border-indigo-700/80 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-400" /> 2,200+ Clients
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 bg-white/95 backdrop-blur-sm border border-emerald-300 text-emerald-800 font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-lg text-xs hidden sm:flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />100% Confidential
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full" data-reveal="fade-up" data-delay="100">
                <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">About the Expert</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-4 sm:mb-6 leading-tight">Meet Hari Ram Beekrwar</h2>
                <p className="text-medium-grey text-sm sm:text-base md:text-lg mb-6 leading-relaxed">With over <strong className="text-dark-grey font-semibold">5 years of rich experience</strong> in the science of energies, I have successfully guided more than <strong className="text-dark-grey font-semibold">2,200 clients worldwide</strong>. My mission is to decode the hidden patterns of your life using numbers and optimize your surroundings using the ancient wisdom of Vastu Shastra.</p>
                <div className="bg-gradient-to-br from-cosmic-navy to-dark-grey border border-indigo-800/60 p-5 sm:p-6 rounded-2xl mb-6 sm:mb-8 relative overflow-hidden">
                  <div className="absolute top-2 left-4 text-4xl sm:text-5xl text-amber-400/20 font-serif leading-none">"</div>
                  <p className="text-gray-200 text-sm sm:text-base italic font-medium relative z-10 leading-relaxed">"Your date of birth holds the blueprint of your destiny, and your space holds the power to manifest it. Let's align them together."</p>
                  <p className="text-amber-400 font-bold text-xs sm:text-sm mt-2.5 sm:mt-3 relative z-10">— Hari Ram Beekrwar</p>
                </div>
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {['5+ Years of Professional Consultation Experience', 'Committed to Your Success, Peace & Prosperity', 'No Superstitions — Only Logical, Practical Remedies'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" /><span className="text-dark-grey font-medium text-xs sm:text-sm md:text-base">{item}</span></li>
                  ))}
                </ul>
                <Link to="/about" className="inline-flex items-center text-secondary font-bold hover:underline transition-all group text-sm sm:text-base">Read Full Biography <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-14 sm:py-24 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16" data-reveal="fade-up">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">Services</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-3 sm:mb-4">Services Offered</h2>
              <p className="text-medium-grey max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">Specialized, data-driven consultations to bring balance and prosperity to your personal and professional life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[
                { title: 'Advanced Numerology', price: '₹3,200', offer: '50% Off', icon: Sparkles, iconBg: 'bg-amber-50 text-amber-600 border-amber-200/80', desc: 'Deep analysis of your birth date and name to uncover your Life Path, strengths, future cycles, name correction, and career-business guidance.', link: '/services/advanced-numerology', color: 'from-amber-500 to-orange-500' },
                { title: 'Scientific & Traditional Vastu', price: '₹20,000+', offer: 'Custom', icon: HomeIcon, iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80', desc: 'Vastu evaluations for your home or workplace using colours, elements, and placement corrections — no major demolition required.', link: '/services/vastu-consultation', color: 'from-indigo-500 to-blue-600' },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} data-reveal="fade-up" data-delay={idx * 150} className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-2">
                    <div className={`h-1.5 -mx-5 sm:-mx-8 -mt-5 sm:-mt-8 mb-5 sm:mb-8 rounded-t-2xl sm:rounded-t-3xl bg-gradient-to-r ${service.color}`} />
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform ${service.iconBg}`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-black text-dark-grey">{service.price}</div>
                        <div className="text-[11px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">{service.offer}</div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-2.5 sm:mb-3">{service.title}</h3>
                    <p className="text-medium-grey text-xs sm:text-sm md:text-base mb-6 flex-grow leading-relaxed">{service.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                      <Link to="/booking" className="flex-1 text-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-4 py-3 rounded-full hover:from-amber-500 hover:to-amber-600 transition-all shadow-sm text-xs sm:text-sm">Book Now</Link>
                      <Link to={service.link} className="flex-1 text-center border-2 border-gray-200 text-dark-grey font-bold px-4 py-3 rounded-full hover:border-amber-400 hover:text-secondary transition-all text-xs sm:text-sm">Learn More</Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8 sm:mt-10" data-reveal="fade-up">
              <Link to="/services" className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-dark-grey text-dark-grey font-bold hover:bg-dark-grey hover:text-white transition-all text-sm sm:text-base">Browse All Services <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" /></Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-14 sm:py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20" data-reveal="fade-up">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">Process</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-3 sm:mb-4">How Our Process Works</h2>
              <p className="text-medium-grey text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">A seamless, fully transparent process designed to give you clarity and deliver absolute value.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-6 relative">
              {/* Connector line — only visible on md+ where cards are in a row */}
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-amber-200 z-0" />
              {[
                { step: '01', icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Book a Slot', desc: 'Choose a time that works for you and securely pay ₹3,200 via Razorpay.' },
                { step: '02', icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Share Details', desc: 'After payment, send your birth details via WhatsApp for analysis.' },
                { step: '03', icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Private Consultation', desc: 'Speak directly with Hari Ram Beekrwar — safely and confidentially.' },
                { step: '04', icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Witness Growth', desc: 'Execute practical remedies and observe profound positive shifts.' },
              ].map((item, idx) => (
                <div key={idx} data-reveal="fade-up" data-delay={idx * 100} className="bg-white border border-gray-100 hover:border-amber-200/90 text-center rounded-3xl relative shadow-sm hover:shadow-xl transition-all duration-300 group z-10 flex flex-col items-center mt-6 md:mt-0 hover:-translate-y-1">
                  {/* Mobile: icon floating above card. Desktop: absolute circle centered */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 rounded-full flex items-center justify-center shadow-lg shadow-amber-300/30 border-4 border-white group-hover:scale-110 transition-transform
                    -mt-8 sm:-mt-10 md:absolute md:-top-10 md:left-1/2 md:-translate-x-1/2 md:mt-0">
                    {item.icon}
                  </div>
                  <div className="pt-4 md:mt-12 pb-6 sm:pb-8 px-5 sm:px-6">
                    <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-2">{item.step}. {item.title}</h3>
                    <p className="text-medium-grey text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US + TESTIMONIALS */}
        <section className="py-14 sm:py-24 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
              <div data-reveal="fade-right">
                <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6">Why Choose Us</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-4 sm:mb-6 leading-tight">The Most Trusted Name in Numerology &amp; Vastu</h2>
                <p className="text-medium-grey text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed">Finding an authentic consultant can be overwhelming. We pride ourselves on pure accuracy, highly ethical practices, and actionable remedies for real-life challenges.</p>
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    { icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-tertiary" />, title: 'Confidential & Personalized', desc: 'Every consultation is treated with absolute privacy and tailored to your unique energetic blueprint.' },
                    { icon: <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />, title: 'Practical & Easy Remedies', desc: 'No superstitions or expensive changes — only logical, modern, and highly effective remedies.' },
                    { icon: <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: 'Proven Track Record', desc: '2,200+ clients successfully guided across India and worldwide over 5+ years of practice.' },
                  ].map((item, i) => (
                    <li key={i} data-reveal="fade-up" data-delay={i * 100} className="flex items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-amber-200/80 shadow-sm gap-4 sm:gap-5 hover:shadow-md transition-all">
                      <div className="shrink-0 mt-0.5">{item.icon}</div>
                      <div><h4 className="text-base sm:text-lg font-bold text-dark-grey mb-1.5">{item.title}</h4><p className="text-medium-grey text-xs sm:text-sm leading-relaxed">{item.desc}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-reveal="fade-left">
                <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6">Client Testimonials</span>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-6 sm:mb-8">What Our Clients Say</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} data-reveal="fade-up" data-delay={i * 100} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`} />
                      <div className="flex text-amber-400 mb-2.5 sm:mb-3">{[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />)}</div>
                      <p className="text-medium-grey text-xs sm:text-sm italic mb-4 leading-relaxed">"{t.text}"</p>
                      <div className="flex items-center gap-3 border-t border-gray-50 pt-3.5 sm:pt-4">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>{t.initials}</div>
                        <div>
                          <p className="font-bold text-dark-grey text-xs sm:text-sm">{t.name}</p>
                          <p className="text-[11px] sm:text-xs text-medium-grey flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-500" /> Verified Client · {t.city}</p>
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
        <section className="py-14 sm:py-24 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14" data-reveal="fade-up">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">FAQs</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-3 sm:mb-4">Frequently Asked Questions</h2>
              <p className="text-medium-grey text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Clear up your doubts before deciding to book.</p>
            </div>
            <div className="space-y-3.5 sm:space-y-4" data-reveal="fade-up">{FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}</div>
          </div>
        </section>

        {/* FREE REPORT */}
        <section className="py-14 sm:py-20 bg-hero-dark starfield border-t border-indigo-900/60" style={{ backgroundColor: '#0F172A' }}>
          <div className="max-w-4xl mx-auto px-4 text-center" data-reveal="scale-up">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6">Free Resource</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Get Your FREE Planetary Impact Report</h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-normal leading-relaxed max-w-2xl mx-auto">Enter your name and email — receive a personal blueprint revealing how upcoming energy cycles will impact your money and career this year.</p>
            {/* Form: stacked on mobile, side-by-side on md+ only */}
            <form onSubmit={handleLeadSubmit} className="flex flex-col md:flex-row gap-3 justify-center max-w-xl mx-auto">
              <input id="lead-name" name="leadName" aria-label="Your First Name" type="text" required value={leadForm.name} onChange={e => setLeadForm(p => ({ ...p, name: e.target.value }))} placeholder="Your First Name" className="w-full px-5 py-3.5 sm:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base" />
              <input id="lead-email" name="leadEmail" aria-label="Your Best Email" type="email" required value={leadForm.email} onChange={e => setLeadForm(p => ({ ...p, email: e.target.value }))} placeholder="Your Best Email" className="w-full px-5 py-3.5 sm:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base" />
              <button type="submit" className="btn-sweep w-full md:w-auto shrink-0 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-sm sm:text-base transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] shadow-lg flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send My Free Report
              </button>
            </form>
            <p className="text-gray-500 text-[11px] sm:text-xs mt-3.5 sm:mt-4">We'll connect you on WhatsApp to deliver your free report. No spam, ever.</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-12 sm:py-20 bg-light-grey px-4 sm:px-6 lg:px-8">
          <div data-reveal="scale-up" className="max-w-5xl mx-auto rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 md:p-16 text-center text-slate-950 shadow-2xl relative overflow-hidden border border-amber-300" style={{background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)'}}>
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/20 rounded-full blur-2xl pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-700/20 rounded-full blur-2xl pointer-events-none hidden sm:block" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 mb-4 sm:mb-6 tracking-tight">Are You Ready to Transform Your Life?</h2>
              <p className="text-slate-900/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-normal leading-relaxed">Don't let hidden energies hold you back. Take the first step toward a balanced and prosperous future today.</p>
              <p className="text-indigo-950 font-bold text-xs sm:text-sm md:text-base mb-8 sm:mb-10 bg-white/40 backdrop-blur-sm py-2 px-5 sm:px-6 rounded-full inline-block border border-white/50 shadow-sm">Your journey toward balance and success begins now.</p>
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center">
                <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-slate-950 text-amber-300 font-black text-base sm:text-lg hover:bg-slate-900 hover:text-amber-200 transition-all shadow-2xl transform hover:-translate-y-1">
                  Book Consultation NOW <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20a%20consultation%20with%20Hari%20Ram%20Ji." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/30 text-slate-950 font-black text-base sm:text-lg hover:bg-white/50 transition-all border border-white/40">
                  <MessageCircle className="w-5 h-5 mr-2 text-slate-950" /> WhatsApp Us
                </a>
              </div>
              <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-white text-rose-700 font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-md border border-rose-200/80">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" /> 3 Consultation Slots Available Today
              </div>
              <p className="text-slate-800 text-xs sm:text-sm mt-4 sm:mt-5 flex items-center justify-center gap-1.5 sm:gap-2 font-medium"><Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 100% Secure Payment · Powered by Razorpay</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;