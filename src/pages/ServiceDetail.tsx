import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle, Clock, Video, Star, ShieldCheck, ArrowRight, MessageCircle, Lock, Sparkles, Home as HomeIcon, LucideIcon } from 'lucide-react';

const SERVICE_DATA: Record<string, { title: string; subtitle: string; icon: LucideIcon; price: string; originalPrice: string; duration: string; format: string; description: string; benefits: string[]; accentFrom: string; accentTo: string; waMsg: string; }> = {
  'advanced-numerology': { title: 'Advanced Numerology Consultation', subtitle: 'Decode the hidden blueprint of your destiny', icon: Sparkles, price: '₹3,200', originalPrice: '₹6,400', duration: '45 – 60 Minutes', format: 'Video Call / Voice Call', description: 'Our Advanced Numerology Consultation is not a generic computer-generated report. It is a deep, personalized analysis performed by Hari ram Beekrwar to give you accurate insights into your past, present, and future through the science of numbers.', benefits: ['Life Path & Destiny Number deep analysis', 'Name Correction for stronger cosmic vibration', 'Career, business & financial cycle guidance', 'Lucky colours, numbers & wristwatch selection', 'Relationship & compatibility insights', 'Dedicated Q&A segment — unlimited questions'], accentFrom: 'from-amber-400', accentTo: 'to-orange-400', waMsg: 'Hello! I want to book an *Advanced Numerology Consultation* for ₹3,200. Please guide me on the next steps.' },
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
      <SEO title={`${title} | Hari ram Beekrwar`} description={service?.description ?? `Book a personalized ${title} session.`} />
      <div className="min-h-screen bg-light-grey text-dark-grey pb-28 lg:pb-24">
        <section className="bg-hero-dark text-white py-14 sm:py-24 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-navy/70 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="inline-block bg-white/10 border border-white/20 text-amber-300 px-4 py-1 sm:px-5 sm:py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Consultation Service</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 capitalize leading-tight">{title}</h1>
            {service && <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">{service.subtitle}</p>}
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 -mt-8 sm:-mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-5">What You Will Discover</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                  <div>
                    <img src="/Resource/image_9e22c5.jpg" alt={title} className="rounded-2xl shadow-md w-full h-[220px] sm:h-[280px] object-cover" onError={e => { (e.target as HTMLImageElement).src = '/Resource/2.png'; }} />
                  </div>
                  <div>
                    <p className="text-medium-grey leading-relaxed mb-6 text-sm sm:text-base">{service?.description ?? `Our ${title} consultation is a deep, personalized analysis performed by our expert to give you accurate insights.`}</p>
                    <div className="flex items-center gap-3 mb-3 text-sm text-medium-grey"><Clock className="w-4 h-4 text-primary shrink-0" /><span><strong className="text-dark-grey">Duration:</strong> {service?.duration ?? '45 – 60 Minutes'}</span></div>
                    <div className="flex items-center gap-3 text-sm text-medium-grey"><Video className="w-4 h-4 text-primary shrink-0" /><span><strong className="text-dark-grey">Format:</strong> {service?.format ?? 'Video Call / Voice Call'}</span></div>
                  </div>
                </div>
                {service && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-4 sm:mb-5 border-t border-gray-100 pt-6">Session Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((b, i) => (<div key={i} className="flex items-start gap-3 bg-gray-50 p-3.5 sm:p-4 rounded-xl border border-gray-100"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-dark-grey font-medium text-xs sm:text-sm">{b}</span></div>))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-6">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
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

              <div className="bg-green-50 border border-green-100 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-tertiary shrink-0" />
                <p className="text-xs sm:text-sm text-dark-grey"><strong>100% Confidential.</strong> Your details are encrypted and never shared. Trusted by 2,200+ clients globally.</p>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-indigo-800/80 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
                  {service?.originalPrice && <div className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full mb-4 animate-pulse"><Sparkles className="w-3.5 h-3.5" /> 50% OFF</div>}
                  <h3 className="text-lg sm:text-xl font-bold mb-1 leading-tight">{title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5">{service?.format ?? 'Voice / Video Call'}</p>
                  <div className="border-t border-b border-indigo-800/70 py-3 sm:py-4 mb-4 sm:mb-5">
                    {service?.originalPrice && <div className="flex justify-between items-center text-gray-400 mb-2 text-xs sm:text-sm"><span>Standard Fee:</span><span className="line-through">{service.originalPrice}</span></div>}
                    <div className="flex justify-between items-center text-white font-bold text-base sm:text-lg pt-1"><span>Your Price:</span><span className="text-2xl sm:text-3xl text-amber-300 font-black">{service?.price ?? '₹3,200'}</span></div>
                  </div>
                  <Link to="/booking" className="btn-sweep w-full inline-flex justify-center items-center px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-sm sm:text-base hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg mb-3 hover:-translate-y-0.5">
                    <Lock className="w-4 h-4 mr-2" /> Book Consultation Now
                  </Link>
                  <a href={waUrl} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-colors mb-5">
                    <MessageCircle className="w-4 h-4 mr-2" /> Enquire on WhatsApp
                  </a>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {['Personalized consultation', 'Practical, non-destructive remedies', '100% confidential session', 'Priority slot confirmation'].map((f, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}</li>))}
                  </ul>
                </div>
                <Link to="/services" className="flex items-center gap-2 text-medium-grey hover:text-dark-grey text-sm font-medium transition-colors group">
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile-only floating bottom CTA — sticky sidebar is useless in 1-col layout */}
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
          <Link to="/booking" className="flex-1 btn-sweep bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black py-3 rounded-full text-sm flex items-center justify-center gap-1.5 shadow-lg">
            <Lock className="w-4 h-4" /> Book — {service?.price ?? '₹3,200'}
          </Link>
          <a href={waUrl} target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-full text-sm flex items-center justify-center gap-1.5">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;