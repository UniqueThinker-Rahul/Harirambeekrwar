import React from 'react';
import SEO from '../components/SEO';
import { Award, BookOpen, Users, Star, Target, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SEO />
      <div className="bg-light-grey min-h-screen">
        {/* Hero Section - Cosmic dark matching site design */}
        <section className="bg-hero-dark text-white py-10 sm:py-20 md:py-28 relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">Meet Your Vedic Consultant</span>
            </div>

            {/* Fluid Heading */}
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 sm:mb-5 leading-[1.2] sm:leading-[1.15]">
              About <span className="text-shimmer inline-block">Hari Ram Beekrwar</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-normal mb-5 sm:mb-6 px-1 sm:px-0">
              Decoding sacred numbers and directional energies to align your life, career, and space with purposeful success.
            </p>

            {/* Quick Hero Highlights */}
            <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 fill-amber-400" /> 5+ Years Mastery
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" /> 2,200+ Clients
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> 100% Confidential
              </span>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="relative px-2 sm:px-4 pb-4 sm:pb-8" data-reveal="fade-right">
                <div className="absolute -inset-2 sm:-inset-4 bg-primary/20 rounded-3xl transform rotate-2 sm:rotate-3"></div>
                <div className="relative z-10 flex justify-center bg-gray-50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-sm bg-white">
                  <picture>
                    <source type="image/webp" srcSet="/Resource/1.webp" />
                    <img 
                      src="/Resource/1.png" 
                      alt="Hari Ram Beekrwar — Numerology & Vastu Consultant Profile" 
                      width="500"
                      height="500"
                      loading="lazy"
                      decoding="async"
                      className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-contain" 
                    />
                  </picture>
                </div>
                <div className="absolute bottom-2 left-2 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
                  <p className="text-3xl font-black text-secondary">5+</p>
                  <p className="text-dark-grey font-bold tracking-wide text-xs">Years of Mastery</p>
                </div>
              </div>
              <div data-reveal="fade-left">
                <div className="inline-block bg-yellow-50 text-secondary font-bold px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 tracking-wider uppercase text-[11px] sm:text-xs">Meet Your Consultant</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-grey mb-4 sm:mb-6 leading-tight">Decoding The Hidden Patterns of Your Life</h2>
                <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-2 sm:mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary"/> Welcome!</h3>
                <p className="text-medium-grey text-sm sm:text-base leading-relaxed mb-6 italic border-l-4 border-primary pl-4 sm:pl-6 bg-gray-50 py-3 sm:py-4 rounded-r-lg">
                  "I am Hari Ram Beekrwar, a professional Numerology and Vastu Consultant dedicated to helping you align your life, career, and living spaces with prosperity, harmony, and success. I believe that every individual carries a unique energy, and when that energy is aligned with the right numbers and surroundings, extraordinary growth becomes possible." <br/><br/><span className="text-dark-grey font-bold">— Hari Ram Beekrwar</span>
                </p>
                
                <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-2 sm:mb-3 mt-6 flex items-center gap-2"><Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary"/> What We Do</h3>
                <div className="space-y-3.5 sm:space-y-4 mb-8">
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all">
                    <p className="text-medium-grey text-xs sm:text-sm md:text-base leading-relaxed">
                      <strong className="text-dark-grey block text-sm sm:text-base font-bold mb-1">Our Mission:</strong> Whether you are seeking accelerated career growth, business turnaround, financial security, healthier relationships, or a peaceful living space, we offer personalized guidance engineered to bring clarity, confidence, and measurable results.
                    </p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all">
                    <p className="text-medium-grey text-xs sm:text-sm md:text-base leading-relaxed">
                      <strong className="text-dark-grey block text-sm sm:text-base font-bold mb-1">Our Logical Approach:</strong> Whether you are facing career roadblocks, home disharmony, or business stagnation, our consultations prioritize practical, non-destructive solutions without demanding structural breakdown or superstitions.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8">
                  <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:border-amber-200/80 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <Users className="w-7 h-7 sm:w-10 sm:h-10 text-secondary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark-grey mb-1">2,200+</h4>
                    <p className="text-[11px] sm:text-xs text-medium-grey font-bold uppercase tracking-wider">Lives Transformed</p>
                  </div>
                  <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:border-amber-200/80 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <Award className="w-7 h-7 sm:w-10 sm:h-10 text-tertiary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark-grey mb-1">100%</h4>
                    <p className="text-[11px] sm:text-xs text-medium-grey font-bold uppercase tracking-wider">Confidential</p>
                  </div>
                </div>
                
                {/* Button upgraded to brand gradient */}
                <Link to="/booking" className="btn-sweep inline-flex justify-center items-center px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black text-sm sm:text-base transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                  Book Your Consultation NOW <Star className="w-4 h-4 sm:w-5 sm:h-5 ml-2 fill-current text-slate-950" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-24 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-reveal="fade-up">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-secondary bg-amber-50 border border-amber-200 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                Our Core Principles
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-grey mb-3 sm:mb-4 tracking-tight">Why Choose Us?</h2>
              <p className="text-sm sm:text-base md:text-lg text-medium-grey max-w-2xl mx-auto mb-8 sm:mb-14 leading-relaxed">Here is exactly why thousands of individuals and families choose Hari Ram Beekrwar for lasting prosperity.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
                  title: 'Confidential & Personalized',
                  desc: 'Every consultation is treated with absolute privacy and tailored strictly to your unique energetic blueprint.',
                  color: 'bg-blue-50 text-blue-600 border border-blue-200/80',
                  accent: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7" />,
                  title: 'Practical, Logical Solutions',
                  desc: 'No superstitions or expensive structural changes — only logical, modern, and highly effective remedies for real-life challenges.',
                  color: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80',
                  accent: 'from-emerald-500 to-teal-600'
                },
                {
                  icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />,
                  title: 'Committed to Real Success',
                  desc: 'We are completely committed to helping you achieve lasting success, peace, and prosperity through data-driven insights.',
                  color: 'bg-amber-50 text-amber-600 border border-amber-200/80',
                  accent: 'from-amber-400 to-amber-600'
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-reveal="fade-up"
                  data-delay={idx * 150}
                  className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-amber-200/80 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 text-left flex flex-col"
                >
                  {/* Top Luxury Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                  
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-xs group-hover:scale-105 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-medium-grey leading-relaxed text-xs sm:text-sm md:text-base flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;