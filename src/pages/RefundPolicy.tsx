import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { CreditCard, CalendarX, RefreshCcw, Download, Phone, ReceiptText } from 'lucide-react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Refund & Cancellation Policy | Hari ram Beekrwar" description="Refund and Cancellation Policy for Hari ram Beekrwar Numerology and Vastu Consultation." />
      
      <div className="bg-light-grey min-h-screen pb-24 text-dark-grey">
        {/* Hero Section */}
        <section className="bg-hero-dark py-14 sm:py-24 text-center px-4 relative overflow-hidden text-white starfield" style={{ backgroundColor: '#0F172A' }}>
           <div className="relative z-10 max-w-4xl mx-auto">
             <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 text-amber-300 rounded-full mb-5 backdrop-blur-sm border border-white/20 shadow-lg">
                <ReceiptText className="w-7 h-7 sm:w-8 sm:h-8" />
             </div>
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Refund &amp; Cancellation Policy</h1>
             <p className="text-base sm:text-lg text-amber-300 font-medium tracking-wide">
               We value your time and appreciate your trust in our services.
             </p>
           </div>
        </section>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="space-y-6">
            {[
              { 
                icon: <CreditCard className="w-6 h-6 text-primary" />, 
                title: "Consultation Fees", 
                content: "All consultation fees are charged for the dedicated preparation time, mathematical chart calculation, and personalized guidance provided by Hari ram Beekrwar." 
              },
              { 
                icon: <CalendarX className="w-6 h-6 text-primary" />, 
                title: "Rescheduling & Cancellation", 
                content: "Appointments may be rescheduled if requested at least 24 hours prior to the scheduled consultation call, subject to calendar slot availability." 
              },
              { 
                icon: <RefreshCcw className="w-6 h-6 text-primary" />, 
                title: "Refund Terms", 
                content: (
                  <ul className="list-none space-y-3">
                    {["Consultation fees are non-refundable once the consultation session has taken place.", "Cancellation requests submitted at least 24 hours before the booked slot are eligible for a 100% refund or slot transfer.", "No refunds will be provided for client no-shows without at least 6 hours prior written notice on WhatsApp."].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                        <span className="text-medium-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              },
              { 
                icon: <Download className="w-6 h-6 text-primary" />, 
                title: "Custom Reports & Deliverables", 
                content: "Customized numerology reports, hand-prepared birth blueprints, or downloadable PDF analysis files are non-refundable once calculation work has commenced." 
              },
              { 
                icon: <Phone className="w-6 h-6 text-primary" />, 
                title: "Fast Assistance", 
                content: "For any scheduling emergency or billing clarification, please contact our support team immediately via WhatsApp at +91 9509610711." 
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
                  {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;