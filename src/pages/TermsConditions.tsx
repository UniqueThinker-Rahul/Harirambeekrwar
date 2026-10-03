import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Scale, Briefcase, CalendarCheck, User, ShieldAlert, Globe, Gavel, CheckSquare } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Terms & Conditions | Hari ram Beekrwar" description="Terms and Conditions for Hari ram Beekrwar Numerology and Vastu Consultation." />
      
      <div className="bg-light-grey min-h-screen pb-24 text-dark-grey">
        {/* Hero Section */}
        <section className="bg-hero-dark py-24 text-center px-4 relative overflow-hidden text-white starfield" style={{ backgroundColor: '#0F172A' }}>
           <div className="relative z-10 max-w-4xl mx-auto">
             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-amber-300 rounded-full mb-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <Scale className="w-8 h-8" />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms &amp; Conditions</h1>
             <p className="text-lg text-gray-300 leading-relaxed font-light">
               By accessing this website or booking any consultation with Hari ram Beekrwar, you agree to the following Terms &amp; Conditions.
             </p>
           </div>
        </section>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
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
                content: "All brand assets, website copy, proprietary numerology algorithms, report templates, and consultation methodologies are the intellectual property of Hari ram Beekrwar (ANKO KA MAYAZAAL)." 
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
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-primary hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-50 p-3 rounded-xl shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-dark-grey">{section.title}</h2>
                </div>
                <div className="text-base sm:text-lg text-medium-grey leading-relaxed sm:ml-16">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}

            {/* Outro Block */}
            <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200/80 text-center shadow-sm">
              <div className="flex items-center justify-center gap-3">
                 <CheckSquare className="w-6 h-6 text-primary shrink-0" />
                 <p className="font-bold text-dark-grey text-base sm:text-lg">
                   By continuing to use this website, you acknowledge that you have read and agreed to these Terms &amp; Conditions.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;