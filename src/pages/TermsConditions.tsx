import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Scale, Briefcase, CalendarCheck, User, ShieldAlert, Globe, Gavel, CheckSquare } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO />
      
      <div className="bg-light-grey min-h-screen pb-24 text-dark-grey">
        {/* Hero Section */}
        <section className="bg-hero-dark pt-10 pb-14 sm:pt-16 sm:pb-20 text-center px-4 relative overflow-hidden text-white starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-36 -left-20 sm:top-40 sm:-left-20 w-64 sm:w-72 h-64 sm:h-72 bg-indigo-600/15 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto" data-reveal="fade-down">
            <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_35px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/20">
              <Scale className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <span>Client Agreement</span>
            </div>
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 tracking-tight leading-[1.15]">
              Terms &amp; <span className="text-shimmer inline-block">Conditions</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed font-normal max-w-xl mx-auto">
              Terms of service and operational guidelines governing our consultation sessions, digital deliverables, and advisory services.
            </p>
          </div>
        </section>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20" data-reveal="fade-up">
          <div className="space-y-6">
            {[
              { 
                icon: <Briefcase className="w-6 h-6 text-primary" />, 
                title: "Services & Scope", 
                content: "Our Numerology and Vastu consultations are intended for guidance, spiritual alignment, and personal growth. They are based on traditional Vedic sciences and should not substitute for licensed medical, legal, or psychiatric treatment." 
              },
              { 
                icon: <CalendarCheck className="w-6 h-6 text-primary" />, 
                title: "Appointments & Confirmations", 
                content: "Consultation slots are reserved upon successful payment via Razorpay. Client details (Name, DOB, Time, Place of Birth) are transmitted securely to facilitate chart calculation." 
              },
              { 
                icon: <User className="w-6 h-6 text-primary" />, 
                title: "Client Action & Responsibility", 
                content: "Remedies suggested are natural, practical, and non-destructive. Clients maintain full agency and discretion regarding how they implement recommended shifts in their personal or professional lives." 
              },
              { 
                icon: <ShieldAlert className="w-6 h-6 text-primary" />, 
                title: "Intellectual Property", 
                content: "All brand assets, website copy, proprietary numerology algorithms, report templates, and consultation methodologies are the intellectual property of Hari Ram Beekrwar (ANKO KA MAYAZAAL)." 
              },
              { 
                icon: <Scale className="w-6 h-6 text-primary" />, 
                title: "Limitation of Liability", 
                content: "Consultations provide energetic and mathematical forecasting. While our client satisfaction rate is overwhelmingly high, energetic outcomes can vary based on individual karmic and environmental factors." 
              },
              { 
                icon: <Globe className="w-6 h-6 text-primary" />, 
                title: "Platform Availability", 
                content: "We maintain 99.9% platform availability for online booking and information access. In case of unexpected server downtime, support is accessible via WhatsApp." 
              },
              { 
                icon: <Gavel className="w-6 h-6 text-primary" />, 
                title: "Jurisdiction & Governing Law", 
                content: "These Terms & Conditions are governed by the laws of India. Any legal dispute or interpretation shall fall under the exclusive jurisdiction of the competent courts in Bharatpur, Rajasthan." 
              }
            ].map((section, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 md:p-9 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200/80 relative overflow-hidden group hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40 opacity-80" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-center justify-center text-primary shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-amber-100/70 transition-all">
                      {section.icon}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-dark-grey leading-snug">{section.title}</h2>
                  </div>
                  <span className="self-start sm:self-center text-[10px] sm:text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    Terms 0{index + 1}
                  </span>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-medium-grey leading-relaxed sm:pl-[72px]">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}

            {/* Outro Block */}
            <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-gradient-to-br from-amber-50/90 via-white to-amber-50/70 rounded-2xl sm:rounded-3xl border border-amber-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left" data-reveal="scale-up">
              <div className="flex items-center gap-3">
                 <CheckSquare className="w-7 h-7 text-primary shrink-0" />
                 <div>
                   <h3 className="font-bold text-dark-grey text-sm sm:text-base">Transparent &amp; Fair Agreements</h3>
                   <p className="text-medium-grey text-xs sm:text-sm mt-0.5">By using our platform or booking consultations, you confirm agreement to these clear standards.</p>
                 </div>
              </div>
              <a 
                href="https://wa.me/919509610711?text=Hello%20Hari%20Ram%20Ji,%20I%20have%20a%20legal%20or%20terms%20query." 
                target="_blank" 
                rel="noreferrer"
                className="btn-sweep shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5"
              >
                Need Clarification? Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;