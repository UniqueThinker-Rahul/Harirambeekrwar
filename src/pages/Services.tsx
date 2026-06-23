import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, CheckCircle, Sparkles, Star } from 'lucide-react';

const Services = () => {
  const services = [
    { slug: "kundli", name: "Deep Kundli & Birth Chart Reading", desc: "Unlock the mysteries of your life path. Discover the exact planetary forces shaping your career, wealth, and relationships, and learn how to navigate them successfully using our mathematical approach.", icon: "🌌" },
    { slug: "vastu", name: "Premium Vastu Shastra Audit", desc: "Is your home or office secretly blocking your growth? We analyze spatial energies across 16 zones to bring harmony, health, and uninterrupted financial flow into your space without doing demolition.", icon: "🏡" },
    { slug: "numerology", name: "Numerology & Name Correction", desc: "Every number vibrates with a specific cosmic energy. Find out if your current name is lucky for you and discover simple spelling corrections to align your destiny with ultimate massive success.", icon: "🔢" },
    { slug: "gemstone", name: "Lab-Tested Gemstone Mapping", desc: "Not all gemstones are lucky. Wearing the wrong gem can be disastrous. Get expert advice on which exact authentic crystal will amplify your planetary strengths safely.", icon: "💎" },
    { slug: "marriage", name: "Comprehensive Marriage Matchmaking", desc: "Ensure a blissful, legally and spiritually harmonious married life. We perform deep Ashtakoot Milan and analyze Mangal Dosha before you make the absolute biggest decision of your life.", icon: "❤️" },
    { slug: "career", name: "Executive Career & Business Strategy", desc: "Stuck in a dead end job? Business facing unexplainable losses? Understand your 10th and 11th houses to make the precise right career moves and attract massive incoming wealth.", icon: "📈" },
  ];

  return (
    <>
      <SEO 
        title="Premium Astrology & Vastu Services" 
        description="Explore premium spiritual services including Kundli reading, Vastu Shastra consultation, numerology, and matchmaking by Arviend Sud."
      />
      <div className="bg-light-grey min-h-screen pb-24">
        {/* Hero Section */}
        <section className="bg-dark-grey py-32 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/40 via-dark-grey to-dark-grey"></div>
           <div className="relative z-10 max-w-5xl mx-auto">
             <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-primary px-6 py-2 rounded-full font-bold mb-6 text-sm tracking-widest uppercase">Our Master Offerings</div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Master Level Consultations</h1>
             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                Brutally accurate predictions. Highly logical explanations. Immensely powerful remedies.<br className="hidden md:block"/> Choose the exact service you need to remove your life's roadblocks today.
             </p>
           </div>
        </section>

        {/* Core Services Grid */}
        <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-16">What You Get With Every Session</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                    { title: "Audio Recordings", desc: "You are allowed (and encouraged) to record your session so you don't miss any remedies." },
                    { title: "No Sugarcoating", desc: "We tell you exactly what the planets say—good or bad—so you can prepare practically." },
                    { title: "Post-Session Support", desc: "Got questions about a remedy? Send us a quick text and our team will clarify it." },
                    { title: "Custom Prescriptions", desc: "A typed PDF prescription of all your remedies sent directly securely to your email." },
                 ].map((ben, i) => (
                    <div key={i} className="text-center p-6">
                       <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-6" />
                       <h3 className="text-xl font-bold text-dark-grey mb-3">{ben.title}</h3>
                       <p className="text-medium-grey">{ben.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-center px-4 mt-12 shadow-inner">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-dark-grey mb-6">Stop Guessing. Start Growing.</h2>
              <p className="text-dark-grey/80 text-xl md:text-2xl mb-12 font-medium">Book your 1-on-1 private consultation with Arviend Sud today and secure your spot.</p>
              <Link to="/booking" className="inline-flex justify-center items-center px-12 py-6 rounded-full bg-dark-grey text-white font-black text-xl hover:bg-black transition-all shadow-xl transform hover:-translate-y-1">
                Book Your Consultation <Sparkles className="ml-3 w-6 h-6 text-primary" />
              </Link>
           </div>
        </section>
      </div>
    </>
  );
};

export default Services;
