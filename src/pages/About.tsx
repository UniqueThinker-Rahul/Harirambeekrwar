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
        {/* Hero Section - Solid yellow background with dark grey text */}
        <section className="bg-primary text-dark-grey py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Hari ram Beekrwar</h1>
            <p className="text-xl md:text-2xl text-dark-grey max-w-3xl mx-auto leading-relaxed font-medium">
              Transform Your Life Through the Power of Numerology & Vastu
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <div className="relative z-10 flex justify-center bg-gray-50 rounded-3xl p-4 border border-gray-100 shadow-sm bg-white">
                   <img 
                     src="/Resource/image_9e228d.jpg" 
                     alt="Hari ram Beekrwar Experience" 
                     className="rounded-xl shadow-lg w-full h-auto max-h-[600px] object-contain" 
                   />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
                  <p className="text-5xl font-black text-secondary">5+</p>
                  <p className="text-dark-grey font-bold tracking-wide">Years of Mastery</p>
                </div>
              </div>
              <div>
                <div className="inline-block bg-yellow-50 text-secondary font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase text-sm">Meet Your Consultant</div>
                <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-8 leading-tight">Decoding The Hidden Patterns of Your Life</h2>
                <h3 className="text-2xl font-bold text-dark-grey mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-primary"/> Welcome!</h3>
                <p className="text-medium-grey text-lg leading-relaxed mb-8 italic border-l-4 border-primary pl-6 bg-gray-50 py-4 rounded-r-lg">
                  "I am Hari ram Beekrwar, a professional Numerology and Vastu Consultant dedicated to helping you align your life, career, and living spaces with prosperity, harmony, and success. I believes that every individual carries a unique energy, and when that energy is aligned with the right numbers and surroundings, extraordinary growth becomes possible." <br/><br/><span className="text-dark-grey font-bold">— Hari ram Beekrwar</span>
                </p>
                
                <h3 className="text-2xl font-bold text-dark-grey mb-4 mt-8 flex items-center gap-2"><Target className="w-6 h-6 text-primary"/> What We Do</h3>
                <div className="space-y-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <p className="text-medium-grey text-lg leading-relaxed">
                       <strong className="text-dark-grey block text-xl mb-2">Our Mission:</strong> Whether you are seeking career growth, business success, financial stability, healthier relationships, or a more positive living and working environment, We offers insightful guidance designed to bring clarity, confidence, and lasting results.
                     </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <p className="text-medium-grey text-lg leading-relaxed">
                       <strong className="text-dark-grey block text-xl mb-2">Our Approach:</strong> Whether you are facing roadblocks in your career, experiencing disharmony at home, or looking to boost your business growth, my tailored consultations offer practical, non-destructive solutions that bring measurable shifts in your energy and fortune.
                     </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
                    <h4 className="text-4xl font-black text-dark-grey mb-2">2,200+</h4>
                    <p className="text-sm text-medium-grey font-bold uppercase tracking-widest">Lives Transformed</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <Award className="w-10 h-10 text-tertiary mx-auto mb-4" />
                    <h4 className="text-4xl font-black text-dark-grey mb-2">100%</h4>
                    <p className="text-sm text-medium-grey font-bold uppercase tracking-widest">Confidential</p>
                  </div>
                </div>
                
                {/* Button color changed to green */}
                <Link to="/booking" className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                  Book Your Consultation NOW <Star className="w-5 h-5 ml-2 fill-current text-white" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-light-grey">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-6">Why Choose Us?</h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto mb-16">Here is exactly why thousands of people choose Hari ram Beekrwar for lasting prosperity.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 <div className="bg-white p-10 rounded-3xl shadow-sm text-left">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
                       <ShieldCheck className="w-8 h-8"/>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-4">Confidential & Personalized</h3>
                    <p className="text-medium-grey leading-relaxed text-lg">Every consultation is treated with absolute privacy and tailored strictly to your unique energetic blueprint.</p>
                 </div>
                 <div className="bg-white p-10 rounded-3xl shadow-sm text-left">
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                       <Heart className="w-8 h-8"/>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-4">Practical Solutions</h3>
                    <p className="text-medium-grey leading-relaxed text-lg">No superstitions or expensive structural changes—only logical, modern, and highly effective remedies for real-life challenges.</p>
                 </div>
                 <div className="bg-white p-10 rounded-3xl shadow-sm text-left">
                    <div className="w-16 h-16 bg-yellow-50 text-primary rounded-full flex items-center justify-center mb-6">
                       <Award className="w-8 h-8"/>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-4">Committed to Success</h3>
                    <p className="text-medium-grey leading-relaxed text-lg">We are completely committed to helping you achieve success, peace, and prosperity through data-driven insights.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
};

export default About;