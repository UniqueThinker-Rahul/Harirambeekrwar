import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, Database, Lock, Globe, Cookie, UserCheck, RefreshCcw, Mail, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <ShieldCheck className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <span>Legal &amp; Data Trust</span>
            </div>
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 tracking-tight leading-[1.15]">
              Privacy <span className="text-shimmer inline-block">Policy</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed font-normal max-w-xl mx-auto">
              How we strictly protect, encrypt, and safeguard your personal birth details and consultation records.
            </p>
          </div>
        </section>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20" data-reveal="fade-up">
          <div className="space-y-6">
            {[
              { 
                icon: <Database className="w-6 h-6 text-primary" />, 
                title: "Information We Collect", 
                content: (
                  <>
                    <p className="mb-4 text-medium-grey">We may collect the following information:</p>
                    <ul className="list-none space-y-3">
                      {["Full Name", "Email Address", "Phone Number", "Date of Birth, Time of Birth, and Place of Birth (required for accurate Numerology consultations)", "Payment details (processed securely through Razorpay; we never store your card or banking credentials)", "Any information voluntarily shared during consultations or through enquiry forms"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-secondary text-xs font-bold">✓</span>
                          <span className="text-medium-grey text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )
              },
              { 
                icon: <FileText className="w-6 h-6 text-primary" />, 
                title: "How We Use Your Information", 
                content: (
                  <>
                    <p className="mb-4 text-medium-grey">Your information is used strictly to:</p>
                    <ul className="list-none space-y-3">
                      {["Provide personalized Numerology consultation services.", "Schedule and confirm your one-on-one session slots.", "Respond promptly to your queries via WhatsApp or phone.", "Improve our consultation accuracy and client experience.", "Send appointment reminders and guidance updates (no spam, ever)."].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-secondary text-xs font-bold">✓</span>
                          <span className="text-medium-grey text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )
              },
              { 
                icon: <Lock className="w-6 h-6 text-primary" />, 
                title: "Data Protection & Privacy", 
                content: "We implement 100% confidentiality standards. Your birth details, personal challenges, and astrological readings are never sold, rented, or shared with any third party." 
              },
              { 
                icon: <Globe className="w-6 h-6 text-primary" />, 
                title: "Third-Party Secure Services", 
                content: "Our website uses trusted, enterprise-grade payment gateways (Razorpay) for processing consultation fees. All transactions are protected with 256-bit SSL encryption." 
              },
              { 
                icon: <Cookie className="w-6 h-6 text-primary" />, 
                title: "Cookies & Analytics", 
                content: "We use essential cookies to maintain session states and analyze overall site performance to ensure fast, reliable loading across devices." 
              },
              { 
                icon: <UserCheck className="w-6 h-6 text-primary" />, 
                title: "Your Rights", 
                content: "You may request access to, correction of, or permanent deletion of your stored records at any time by contacting our support team." 
              },
              { 
                icon: <RefreshCcw className="w-6 h-6 text-primary" />, 
                title: "Changes to This Policy", 
                content: "We may update this Privacy Policy periodically. Any updates will be posted directly to this page with an updated effective date." 
              },
              { 
                icon: <Mail className="w-6 h-6 text-primary" />, 
                title: "Contact Us", 
                content: "If you have questions regarding your data privacy, reach out to harirambeekrwar@gmail.com or message us on WhatsApp at +91 9509610711." 
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
                    Article 0{index + 1}
                  </span>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-medium-grey leading-relaxed sm:pl-[72px]">
                  {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
                </div>
              </div>
            ))}

            {/* Assistance Banner */}
            <div className="mt-8 sm:mt-10 bg-gradient-to-br from-green-50/80 via-white to-emerald-50/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-green-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left" data-reveal="scale-up">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg sm:text-xl font-bold text-dark-grey">Your Data is 100% Confidential</h3>
                </div>
                <p className="text-medium-grey text-xs sm:text-sm">We never share your birth chart, personal life details, or payments with any third party.</p>
              </div>
              <a 
                href="https://wa.me/919509610711?text=Hello%20Hari%20Ram%20Ji,%20I%20have%20a%20question%20about%20my%20data%20privacy." 
                target="_blank" 
                rel="noreferrer"
                className="btn-sweep shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" /> Contact Data Officer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;