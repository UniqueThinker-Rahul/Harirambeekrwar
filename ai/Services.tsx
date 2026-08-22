import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, CheckCircle, Sparkles, Star } from 'lucide-react';

const Services = () => {
  // This hook ensures the page automatically scrolls to the top when it loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { 
      slug: "advanced-numerology", 
      name: "1. Advanced Numerology Consultation", 
      desc: "Through a detailed analysis of your birth date and name, I help you understand your strengths, weaknesses, and future cycles. Includes Name Correction, Career & Business Growth, Life Path Analysis, and selecting the perfect wrist watch designe and colour for success.", 
      icon: "✨" 
    },
    { 
      slug: "vastu-consultation", 
      name: "2. Scientific & Traditional Vastu", 
      desc: "Your home or workplace heavily influences your mental peace and financial growth. I provide Vastu evaluations (Residential, Commercial, Remedial) using colors, elements, and simple placement shifts to fix existing Vastu Doshas.", 
      icon: "🏠" 
    },
    { 
      slug: "signature-mobile-numerology", 
      name: "3. Signature & Mobile Numerology", 
      desc: "Small changes can yield massive results. Your daily interactions can impact your subconscious growth. Includes crafting a progressive signature that attracts wealth and choosing a lucky mobile number combination.", 
      icon: "📱" 
    }
  ];

  return (
    <>
      <SEO 
        title="Services Offered | Numerology & Vastu" 
        description="We offer specialized, data-driven, and intuitive consultation services to bring balance to your personal and professional life."
      />
      <div className="bg-light-grey text-dark-grey min-h-screen pb-24">
        {/* Hero Section */}
        <section className="bg-dark-grey py-32 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/40 via-dark-grey to-dark-grey"></div>
           <div className="relative z-10 max-w-5xl mx-auto">
             <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-primary px-6 py-2 rounded-full font-bold mb-6 text-sm tracking-widest uppercase">Services Offered</div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Specialized, Data-Driven Consultations</h1>
             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
               We offer specialized, data-driven, and intuitive consultation services to bring balance to your personal and professional life.
             </p>
           </div>
        </section>

        {/* Core Services Grid */}
        <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {services.map(s => (
              <div key={s.slug} className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col group hover:-translate-y-3 transition-transform duration-500">
                <div className="text-6xl mb-6">{s.icon}</div>
                <h2 className="text-2xl font-bold text-dark-grey mb-4 group-hover:text-secondary transition-colors">{s.name}</h2>
                <p className="text-medium-grey mb-8 flex-grow leading-relaxed text-lg">{s.desc}</p>
                <div className="border-t border-gray-100 pt-6">
                  <Link to={`/services/${s.slug}`} className="inline-flex items-center justify-between w-full text-primary font-bold hover:text-yellow-600 transition-colors uppercase tracking-wide">
                    <span>View Package Details</span>
                    <div className="bg-yellow-50 p-3 rounded-full group-hover:bg-primary group-hover:text-dark-grey transition-colors">
                       <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 mt-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-16 text-center">What You Get With Every Session</h2>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                 <div className="lg:col-span-5">
                    <img src="/Resource/image_9e22c5.jpg" alt="Session Benefits" className="rounded-3xl shadow-2xl w-full object-cover h-full min-h-[450px]" />
                 </div>
                 <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                       { title: "Practical Solutions", desc: "For Real-Life Challenges. We focus on non-destructive solutions." },
                       { title: "No Superstitions", desc: "We tell you exactly what the numbers say—good or bad—so you can prepare practically." },
                       { title: "Confidentiality", desc: "Every consultation is treated with absolute privacy and tailored strictly to your unique energetic blueprint." },
                       { title: "Committed Support", desc: "Committed to Helping You Achieve Success, Peace & Prosperity." },
                    ].map((ben, i) => (
                       <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-left hover:shadow-md transition-shadow">
                          <CheckCircle className="w-10 h-10 text-secondary mb-6" />
                          <h3 className="text-xl font-bold text-dark-grey mb-3">{ben.title}</h3>
                          <p className="text-medium-grey">{ben.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-center px-4 mt-12 shadow-inner">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-dark-grey mb-6">Are You Ready to Transform Your Life?</h2>
              <p className="text-dark-grey/80 text-xl md:text-2xl mb-12 font-medium">Don't let hidden energies hold you back from achieving your true potential. Take the first step toward a balanced and prosperous future today.</p>
              <Link to="/booking" className="inline-flex justify-center items-center px-12 py-6 rounded-full bg-dark-grey text-white font-extrabold text-xl hover:bg-gray-900 transition-all shadow-xl transform hover:-translate-y-1">
                Book Your Consultation NOW <Sparkles className="ml-3 w-6 h-6 text-primary" />
              </Link>
           </div>
        </section>
      </div>
    </>
  );
};

export default Services;