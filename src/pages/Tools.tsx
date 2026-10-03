import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck, MessageCircle, Star } from 'lucide-react';

const NUMBER_INTERPRETATIONS: Record<number, { title: string; ruler: string; traits: string; strengths: string; advice: string }> = {
  1: {
    title: 'The Leader & Trailblazer',
    ruler: 'Sun (Surya)',
    traits: 'Independent, ambitious, pioneering, courageous',
    strengths: 'Natural leadership, self-confidence, initiative',
    advice: 'Channel your strong determination into creative ventures and avoid unnecessary rigidity with partners.'
  },
  2: {
    title: 'The Diplomat & Peacemaker',
    ruler: 'Moon (Chandra)',
    traits: 'Intuitive, gentle, cooperative, emotionally perceptive',
    strengths: 'Conflict resolution, partnerships, empathy',
    advice: 'Trust your deep intuition and maintain clear personal boundaries in relationships.'
  },
  3: {
    title: 'The Creative Communicator',
    ruler: 'Jupiter (Brihaspati)',
    traits: 'Expressive, joyful, imaginative, charismatic',
    strengths: 'Artistic talent, verbal charisma, social optimism',
    advice: 'Focus your vast creative energies on single tangible milestones to maximize financial success.'
  },
  4: {
    title: 'The Disciplined Architect',
    ruler: 'Rahu',
    traits: 'Organized, systematic, reliable, practical',
    strengths: 'Building solid systems, perseverance, dedication',
    advice: 'Embrace progressive change alongside your practical foundation for accelerated wealth growth.'
  },
  5: {
    title: 'The Versatile Explorer',
    ruler: 'Mercury (Budh)',
    traits: 'Dynamic, adaptive, quick-witted, freedom-oriented',
    strengths: 'Communication, business acumen, rapid learning',
    advice: 'Anchor your multi-talented nature with dedicated focus in your core career field.'
  },
  6: {
    title: 'The Nurturing Harmonizer',
    ruler: 'Venus (Shukra)',
    traits: 'Loving, aesthetic, responsible, protective',
    strengths: 'Creating luxury, family harmony, high ethics',
    advice: 'Prioritize your personal self-care while supporting your family and community.'
  },
  7: {
    title: 'The Mystic & Truth Seeker',
    ruler: 'Ketu',
    traits: 'Analytical, contemplative, spiritual, insightful',
    strengths: 'Deep research, esoteric wisdom, spiritual intuition',
    advice: 'Balance your quiet introspective gifts with active external business execution.'
  },
  8: {
    title: 'The Powerhouse & Strategist',
    ruler: 'Saturn (Shani)',
    traits: 'Authoritative, vision-driven, disciplined, enduring',
    strengths: 'Material mastery, high endurance, financial leadership',
    advice: 'Integrate ethical alignment with your business ambitions for unstoppable long-term legacy.'
  },
  9: {
    title: 'The Compassionate Visionary',
    ruler: 'Mars (Mangal)',
    traits: 'Humanitarian, passionate, courageous, universal mind',
    strengths: 'Inspiring people, global vision, noble character',
    advice: 'Channel your natural passion into uplifting others to attract automatic abundance.'
  }
};

const Tools = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateNumerology = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      const charCode = name.toLowerCase().charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        sum += (charCode - 96) % 9 || 9;
      }
    }
    while (sum > 9) {
      sum = String(sum).split('').reduce((a, b) => Number(a) + Number(b), 0);
    }
    setResult(sum);
  };

  const currentInsight = result ? NUMBER_INTERPRETATIONS[result] : null;

  return (
    <>
      <SEO
        title="Free Numerology Calculator | Destiny & Name Number"
        description="Calculate your Destiny Number instantly with Hari ram Beekrwar's free Numerology Calculator. Discover your planetary ruler and core cosmic traits."
      />
      
      <div className="min-h-screen bg-light-grey pb-24 text-dark-grey">
        {/* Hero Section */}
        <section className="bg-hero-dark py-14 sm:py-24 text-center px-4 relative overflow-hidden text-white starfield" style={{ backgroundColor: '#0F172A' }}>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 px-4 sm:px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" /> Free Interactive Tool
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Vedic <span className="text-shimmer">Numerology Calculator</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Decode the unique frequency of your name. Calculate your destiny vibration and understand your planetary alignment in seconds.
            </p>
          </div>
        </section>

        {/* Calculator Body */}
        <div className="max-w-3xl mx-auto px-4 -mt-8 sm:-mt-10 relative z-20">
          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-gray-100 p-5 sm:p-8 md:p-12 text-center">
            <h2 className="text-xl sm:text-3xl font-bold text-dark-grey mb-2 sm:mb-3">Calculate Your Destiny Number</h2>
            <p className="text-medium-grey text-xs sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
              Enter your full legal or frequently used name to calculate your primary name vibration.
            </p>

            <form onSubmit={calculateNumerology} className="space-y-4 max-w-md mx-auto">
              <input
                required
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base sm:text-lg text-dark-grey placeholder:text-gray-400 font-medium"
              />
              <button
                type="submit"
                className="btn-sweep w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-primary-deep text-slate-950 font-black py-3.5 sm:py-4 rounded-full text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Calculate Destiny Vibration &rarr;
              </button>
            </form>

            {/* Result Display */}
            {result !== null && currentInsight && (
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100 animate-fadeInUp text-left">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
                        Ruler: {currentInsight.ruler}
                      </span>
                      <h3 className="text-xl sm:text-3xl font-black text-dark-grey mt-2">
                        {currentInsight.title}
                      </h3>
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg shrink-0">
                      {result}
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-medium-grey">
                    <p>
                      <strong className="text-dark-grey">Core Cosmic Traits:</strong> {currentInsight.traits}
                    </p>
                    <p>
                      <strong className="text-dark-grey">Natural Strengths:</strong> {currentInsight.strengths}
                    </p>
                    <p className="bg-white/80 p-3.5 sm:p-4 rounded-xl border border-amber-200/50 text-dark-grey italic flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong>Vedic Advice:</strong> "{currentInsight.advice}"</span>
                    </p>
                  </div>
                </div>

                {/* Direct High-Converting Funnel CTA */}
                <div className="mt-6 sm:mt-8 bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center relative overflow-hidden shadow-2xl border border-indigo-800/80">
                  <div className="relative z-10 max-w-lg mx-auto">
                    <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Complete Analysis
                    </span>
                    <h4 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">
                      Your Name Number is Just 10% of Your Blueprint
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                      True transformation happens when your <strong className="text-white">Life Path (DOB)</strong>, <strong className="text-white">Name Vibration</strong>, and <strong className="text-white">Living Space (Vastu)</strong> align together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        to="/booking"
                        className="btn-sweep inline-flex justify-center items-center px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-primary-deep text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg hover:-translate-y-0.5"
                      >
                        Book Full Consultation (₹3,200) <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <a
                        href={`https://wa.me/919509610711?text=${encodeURIComponent(`Hello Hari Ram Ji! My name is ${name} and my Destiny Number is ${result}. I want to book a complete personalized Numerology consultation.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center items-center px-5 sm:px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" /> Discuss on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-500 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Free Calculator</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-500" /> Based on Vedic Numerology</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Instant Results</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
