import React from 'react';
import SEO from '../components/SEO';
import { Award, BookOpen, Users, Star, Target, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SEO 
        title="About | Numerology & Vastu Consultant" 
        description="Learn more about Hari ram Beekrwar. Transform Your Life Through the Power of Numerology & Vastu."
      />
      <div className="bg-light-grey min-h-screen">
        {/* Hero Section - Cosmic dark matching site design */}
        <section className="bg-hero-dark text-white py-14 sm:py-28 relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block bg-white/10 border border-white/20 text-amber-300 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">Meet the Expert</div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">About Hari ram Beekrwar</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Transform Your Life Through the Power of Numerology &amp; Vastu
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="relative px-2 sm:px-4 pb-4 sm:pb-8">
                <div className="absolute -inset-2 sm:-inset-4 bg-primary/20 rounded-3xl transform rotate-2 sm:rotate-3"></div>
                <div className="relative z-10 flex justify-center bg-gray-50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-sm bg-white">
                   <img 
                     src="/Resource/1.png" 
                     alt="Hari ram Beekrwar Experience" 
                     className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-contain" 
                   />
                </div>
                <div className="absolute bottom-2 left-2 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
                  <p className="text-3xl font-black text-secondary">5+</p>
                  <p className="text-dark-grey font-bold tracking-wide text-xs">Years of Mastery</p>
                </div>
              </div>
              <div>
                <div className="inline-block bg-yellow-50 text-secondary font-bold px-3.5 py-1.5 rounded-full mb-4 tracking-wider uppercase text-xs sm:text-sm">Meet Your Consultant</div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark-grey mb-6 leading-tight">Decoding The Hidden Patterns of Your Life</h2>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary"/> Welcome!</h3>
                <p className="text-medium-grey text-base sm:text-lg leading-relaxed mb-6 italic border-l-4 border-primary pl-4 sm:pl-6 bg-gray-50 py-3 sm:py-4 rounded-r-lg">
                  "I am Hari ram Beekrwar, a professional Numerology and Vastu Consultant dedicated to helping you align your life, career, and living spaces with prosperity, harmony, and success. I believe that every individual carries a unique energy, and when that energy is aligned with the right numbers and surroundings, extraordinary growth becomes possible." <br/><br/><span className="text-dark-grey font-bold">— Hari ram Beekrwar</span>
                </p>
                
                <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-3 mt-6 flex items-center gap-2"><Target className="w-5 h-5 text-primary"/> What We Do</h3>
                <div className="space-y-4 sm:space-y-6 mb-8">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100">
                     <p className="text-medium-grey text-sm sm:text-base leading-relaxed">
                       <strong className="text-dark-grey block text-base sm:text-lg mb-1">Our Mission:</strong> Whether you are seeking career growth, business success, financial stability, healthier relationships, or a more positive living and working environment, We offers insightful guidance designed to bring clarity, confidence, and lasting results.
                     </p>
                  </div>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100">
                     <p className="text-medium-grey text-sm sm:text-base leading-relaxed">
                       <strong className="text-dark-grey block text-base sm:text-lg mb-1">Our Approach:</strong> Whether you are facing roadblocks in your career, experiencing disharmony at home, or looking to boost your business growth, my tailored consultations offer practical, non-destructive solutions that bring measurable shifts in your energy and fortune.
                     </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8">
                  <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mx-auto mb-2 sm:mb-4" />
                    <h4 className="text-xl sm:text-3xl md:text-4xl font-black text-dark-grey mb-1">2,200+</h4>
                    <p className="text-[11px] sm:text-sm text-medium-grey font-bold uppercase tracking-widest">Lives Transformed</p>
                  </div>
                  <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-tertiary mx-auto mb-2 sm:mb-4" />
                    <h4 className="text-xl sm:text-3xl md:text-4xl font-black text-dark-grey mb-1">100%</h4>
                    <p className="text-[11px] sm:text-sm text-medium-grey font-bold uppercase tracking-widest">Confidential</p>
                  </div>
                </div>
                
                {/* Button upgraded to brand gradient */}
                <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-primary-deep text-slate-950 font-black text-base sm:text-lg transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                  Book Your Consultation NOW <Star className="w-5 h-5 ml-2 fill-current text-slate-950" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-24 bg-light-grey">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark-grey mb-4 sm:mb-6">Why Choose Us?</h2>
              <p className="text-base sm:text-xl text-medium-grey max-w-3xl mx-auto mb-10 sm:mb-16">Here is exactly why thousands of people choose Hari ram Beekrwar for lasting prosperity.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                 <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm text-left">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 text-blue-500 rounded-2xl sm:rounded-full flex items-center justify-center mb-4 sm:mb-6">
                       <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-2 sm:mb-4">Confidential & Personalized</h3>
                    <p className="text-medium-grey leading-relaxed text-sm sm:text-base">Every consultation is treated with absolute privacy and tailored strictly to your unique energetic blueprint.</p>
                 </div>
                 <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm text-left">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 text-green-500 rounded-2xl sm:rounded-full flex items-center justify-center mb-4 sm:mb-6">
                       <Heart className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-2 sm:mb-4">Practical Solutions</h3>
                    <p className="text-medium-grey leading-relaxed text-sm sm:text-base">No superstitions or expensive structural changes—only logical, modern, and highly effective remedies for real-life challenges.</p>
                 </div>
                 <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm text-left">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-50 text-primary rounded-2xl sm:rounded-full flex items-center justify-center mb-4 sm:mb-6">
                       <Award className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-2 sm:mb-4">Committed to Success</h3>
                    <p className="text-medium-grey leading-relaxed text-sm sm:text-base">We are completely committed to helping you achieve success, peace, and prosperity through data-driven insights.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
};

export default About;