import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle, Clock, Video, Star, ShieldCheck, ArrowRight, MessageCircle, Lock, Sparkles, Home as HomeIcon, LucideIcon } from 'lucide-react';

const SERVICE_DATA: Record<string, { title: string; subtitle: string; icon: LucideIcon; price: string; originalPrice: string; duration: string; format: string; description: string; benefits: string[]; accentFrom: string; accentTo: string; waMsg: string; }> = {
  'advanced-numerology': { title: 'Advanced Numerology Consultation', subtitle: 'Decode the hidden blueprint of your destiny', icon: Sparkles, price: '₹3,200', originalPrice: '₹6,400', duration: '45 – 60 Minutes', format: 'Video Call / Voice Call', description: 'Our Advanced Numerology Consultation is not a generic computer-generated report. It is a deep, personalized analysis performed by Hari Ram Beekrwar to give you accurate insights into your past, present, and future through the science of numbers.', benefits: ['Life Path & Destiny Number deep analysis', 'Name Correction for stronger cosmic vibration', 'Career, business & financial cycle guidance', 'Lucky colours, numbers & wristwatch selection', 'Relationship & compatibility insights', 'Dedicated Q&A segment — unlimited questions'], accentFrom: 'from-amber-400', accentTo: 'to-orange-400', waMsg: 'Hello! I want to book an *Advanced Numerology Consultation* for ₹3,200. Please guide me on the next steps.' },
  'vastu-consultation': { title: 'Scientific & Traditional Vastu Consultation', subtitle: 'Transform your space, transform your life', icon: HomeIcon, price: '₹20,000+', originalPrice: '', duration: '60 – 90 Minutes', format: 'Video Call / On-Site Visit', description: 'Your home or workplace heavily influences your mental peace and financial growth. Our Vastu consultation provides detailed evaluations for Residential, Commercial, and Industrial properties using colours, elements, and simple placement shifts — no major demolition required.', benefits: ['Residential & Commercial property evaluation', 'No demolition — only simple, effective remedies', 'Colour, element & direction corrections', 'Entry, kitchen, bedroom & office alignment', 'Vastu Dosha identification & neutralization', 'Follow-up support for implementation'], accentFrom: 'from-indigo-500', accentTo: 'to-blue-500', waMsg: 'Hello! I want to know more about *Vastu Consultation* services. Please share pricing and availability.' },
};

const TESTIMONIALS = [
  { name: 'Aman K.', city: 'Jaipur', text: 'The consultation was an eye-opener. The remedies were simple yet incredibly effective. I felt a positive shift within two weeks.', initials: 'AK', color: 'from-amber-500 to-orange-500' },
  { name: 'Sneha P.', city: 'Delhi', text: 'Highly accurate readings. The guidance for my career obstacles helped me secure the promotion I had been waiting for years.', initials: 'SP', color: 'from-indigo-500 to-purple-500' },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICE_DATA[slug] : null;
  const title = service?.title ?? (slug ? slug.replace(/-/g, ' ') : 'Consultation');
  const waUrl = service ? `https://wa.me/919509610711?text=${encodeURIComponent(service.waMsg)}` : 'https://wa.me/919509610711';
  const IconComponent = service?.icon ?? Sparkles;

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-light-grey text-dark-grey pb-28 lg:pb-24">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-950/40 border-b border-slate-800/60 backdrop-blur-sm">
          <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 py-2.5 text-xs sm:text-sm text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-amber-400 transition-colors font-medium">Home</Link>
            <span className="text-slate-600">/</span>
            <Link to="/services" className="hover:text-amber-400 transition-colors font-medium">Services</Link>
            <span className="text-slate-600">/</span>
            <span className="text-amber-300 font-semibold truncate">{title}</span>
          </nav>
        </div>

        <section className="bg-hero-dark text-white pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Glowing Icon Container */}
            <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3.5 sm:mb-5 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_35px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/20">
              <IconComponent className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span>1-on-1 Consultation</span>
            </div>

            {/* Fluid Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2.5 sm:mb-4 capitalize leading-[1.2] sm:leading-[1.15] tracking-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {service && (
              <p className="text-xs sm:text-sm md:text-base text-slate-300/90 max-w-xl mx-auto font-normal leading-relaxed mb-4 sm:mb-5 px-1 sm:px-0">
                {service.subtitle}
              </p>
            )}

            {/* Hero Quick Meta Pills */}
            {service && (
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm">
                <span className="bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold px-2.5 sm:px-3.5 py-1 rounded-full">
                  {service.price} {service.originalPrice && <span className="line-through text-slate-400 text-[10px] sm:text-xs ml-1 font-normal">{service.originalPrice}</span>}
                </span>
                <span className="bg-slate-800/80 border border-slate-700 text-slate-300 px-2.5 sm:px-3.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" /> {service.duration}
                </span>
                <span className="bg-slate-800/80 border border-slate-700 text-slate-300 px-2.5 sm:px-3.5 py-1 rounded-full flex items-center gap-1">
                  <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> {service.format}
                </span>
              </div>
            )}
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 -mt-8 sm:-mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div data-reveal="fade-up" className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-4 sm:mb-5">What You Will Discover</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                  <div>
                    <picture>
                      <source type="image/webp" srcSet="/Resource/image_9e22c5.webp" />
                      <img
                        src="/Resource/image_9e22c5.jpg"
                        alt={`${title} Consultation by Hari Ram Beekrwar`}
                        width="480"
                        height="280"
                        loading="lazy"
                        decoding="async"
                        className="rounded-2xl shadow-md w-full h-[220px] sm:h-[280px] object-cover"
                        onError={e => { (e.target as HTMLImageElement).src = '/Resource/2.png'; }}
                      />
                    </picture>
                  </div>
                  <div>
                    <p className="text-medium-grey leading-relaxed mb-6 text-xs sm:text-sm md:text-base">{service?.description ?? `Our ${title} consultation is a deep, personalized analysis performed by our expert to give you accurate insights.`}</p>
                    <div className="flex items-center gap-3 mb-3 text-xs sm:text-sm text-medium-grey"><Clock className="w-4 h-4 text-primary shrink-0" /><span><strong className="text-dark-grey">Duration:</strong> {service?.duration ?? '45 – 60 Minutes'}</span></div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-medium-grey"><Video className="w-4 h-4 text-primary shrink-0" /><span><strong className="text-dark-grey">Format:</strong> {service?.format ?? 'Video Call / Voice Call'}</span></div>
                  </div>
                </div>
                {service && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-3 sm:mb-4 border-t border-gray-100 pt-5 sm:pt-6">Session Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {service.benefits.map((b, i) => (<div key={i} className="flex items-start gap-2.5 sm:gap-3 bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-100"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" /><span className="text-dark-grey font-medium text-xs sm:text-sm">{b}</span></div>))}
                    </div>
                  </div>
                )}
              </div>

              <div data-reveal="fade-up" className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-5 sm:mb-6">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-amber-200/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex text-amber-400 mb-3">{[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}</div>
                      <p className="text-medium-grey italic text-xs sm:text-sm mb-4 leading-relaxed">"{t.text}"</p>
                      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs`}>{t.initials}</div>
                        <div><p className="font-bold text-dark-grey text-sm">{t.name}</p><p className="text-xs text-medium-grey flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-500" /> Verified Client · {t.city}</p></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div data-reveal="fade-up" className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-xs">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 shrink-0" />
                <p className="text-xs sm:text-sm text-dark-grey"><strong>100% Confidential.</strong> Your birth details and consultations are encrypted and strictly protected. Trusted by 2,200+ clients worldwide.</p>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1" data-reveal="fade-left">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-cosmic-navy via-slate-900 to-cosmic-navy text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-indigo-800/80 relative overflow-hidden">
                  {/* Top Luxury Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                  {service?.originalPrice && <div className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full mb-4 shadow-sm animate-pulse"><Sparkles className="w-3.5 h-3.5" /> 50% OFF</div>}
                  <h3 className="text-lg sm:text-xl font-bold mb-1 leading-tight text-white">{title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5">{service?.format ?? 'Voice / Video Call'}</p>
                  <div className="border-t border-b border-indigo-800/70 py-3 sm:py-4 mb-4 sm:mb-5">
                    {service?.originalPrice && <div className="flex justify-between items-center text-gray-400 mb-2 text-xs sm:text-sm"><span>Standard Fee:</span><span className="line-through">{service.originalPrice}</span></div>}
                    <div className="flex justify-between items-center text-white font-bold text-base sm:text-lg pt-1"><span>Your Price:</span><span className="text-2xl sm:text-3xl text-amber-300 font-black">{service?.price ?? '₹3,200'}</span></div>
                  </div>
                  <Link to="/booking" className="btn-sweep w-full inline-flex justify-center items-center px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm sm:text-base hover:from-amber-500 hover:to-amber-700 transition-all shadow-lg mb-3 hover:-translate-y-0.5">
                    <Lock className="w-4 h-4 mr-2" /> Book Consultation Now
                  </Link>
                  <a href={waUrl} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all shadow-md mb-5 hover:-translate-y-0.5">
                    <MessageCircle className="w-4 h-4 mr-2" /> Enquire on WhatsApp
                  </a>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {['Personalized 1-on-1 consultation', 'Practical, non-destructive remedies', '100% confidential session', 'Priority slot confirmation'].map((f, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> {f}</li>))}
                  </ul>
                </div>
                <Link to="/services" className="flex items-center gap-2 text-medium-grey hover:text-dark-grey text-sm font-semibold transition-colors group">
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile-only floating bottom CTA — sticky sidebar is useless in 1-col layout */}
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex gap-3">
          <Link to="/booking" className="flex-1 btn-sweep bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black py-3 rounded-full text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg">
            <Lock className="w-3.5 h-3.5" /> Book — {service?.price ?? '₹3,200'}
          </Link>
          <a href={waUrl} target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-full text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;