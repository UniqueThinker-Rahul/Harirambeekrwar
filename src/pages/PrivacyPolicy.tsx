import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, Database, Lock, Globe, Cookie, UserCheck, RefreshCcw, Mail, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Privacy Policy | Hari ram Beekrwar" description="Privacy Policy for Hari ram Beekrwar Numerology and Vastu Consultation." />
      
      <div className="bg-light-grey min-h-screen pb-24 text-dark-grey">
        {/* Hero Section */}
        <section className="bg-hero-dark py-24 text-center px-4 relative overflow-hidden text-white starfield" style={{ backgroundColor: '#0F172A' }}>
           <div className="relative z-10 max-w-4xl mx-auto">
             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-amber-300 rounded-full mb-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <ShieldCheck className="w-8 h-8" />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
             <p className="text-lg text-gray-300 leading-relaxed font-light">
               At Hari ram Beekrwar, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard the information you provide when you visit our website or book our services.
             </p>
           </div>
        </section>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
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
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                          <span className="text-medium-grey">{item}</span>
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
                      {["Provide personalized Numerology and Vastu consultation services.", "Schedule and confirm your one-on-one session slots.", "Respond promptly to your queries via WhatsApp or phone.", "Improve our consultation accuracy and client experience.", "Send appointment reminders and guidance updates (no spam, ever)."].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                          <span className="text-medium-grey">{item}</span>
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

export default PrivacyPolicy;