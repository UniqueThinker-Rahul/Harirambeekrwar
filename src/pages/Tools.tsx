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
      <SEO />
      
      <div className="min-h-screen bg-light-grey pb-24 text-dark-grey">
        {/* Hero Section */}
        <section className="bg-hero-dark pt-10 pb-12 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 text-center px-4 relative overflow-hidden text-white starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3.5 sm:mb-6 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">Free Interactive Tool</span>
            </div>

            {/* Fluid Heading */}
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 text-white leading-[1.2] sm:leading-[1.15] tracking-tight">
              Vedic <span className="text-shimmer inline-block">Numerology Calculator</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-normal mb-5 sm:mb-6 px-1 sm:px-0">
              Discover your core Destiny Number and ruling planetary energies in seconds with free instant analysis.
            </p>

            {/* Quick Meta Row */}
            <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" /> 100% Free Instant Analysis
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> No Registration Required
              </span>
            </div>
          </div>
        </section>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto px-4 -mt-8 sm:-mt-10 relative z-20">
          <div data-reveal="scale-up" className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-gray-100 p-5 sm:p-8 md:p-12 text-center relative overflow-hidden group">
            {/* Top Luxury Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-secondary border border-amber-200 mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Instant Vedic Calculation
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark-grey mb-2 sm:mb-3 tracking-tight">Calculate Your Destiny Number</h2>
            <p className="text-medium-grey text-xs sm:text-sm md:text-base mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
              Enter your full legal or frequently used name to calculate your primary name vibration and decode your ruling planetary energies.
            </p>

            <form onSubmit={calculateNumerology} className="space-y-3.5 sm:space-y-4 max-w-md mx-auto">
              <div className="relative">
                <input
                  id="destiny-name"
                  name="destinyName"
                  aria-label="Enter your full name to calculate destiny vibration"
                  required
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-base sm:text-lg text-dark-grey placeholder:text-gray-400 font-medium transition-all shadow-inner"
                />
              </div>
              <button
                type="submit"
                className="btn-sweep w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black py-3.5 sm:py-4 rounded-full text-xs sm:text-sm md:text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Calculate Destiny Vibration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Result Display */}
            {result !== null && currentInsight && (
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100 animate-fadeInUp text-left">
                <div className="bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 border border-amber-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 sm:mb-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 border border-amber-300/80 px-3 py-1 rounded-full shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Ruling Energy: {currentInsight.ruler}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-dark-grey mt-2 sm:mt-2.5 tracking-tight">
                        {currentInsight.title}
                      </h3>
                    </div>
                    
                    {/* Glowing Cosmic Number Orb */}
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-70 animate-pulse" />
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg border border-amber-200/80">
                        {result}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-medium-grey">
                    <div className="bg-white/80 p-3.5 sm:p-4 rounded-xl border border-amber-100 shadow-xs">
                      <span className="text-dark-grey font-bold block mb-1">Core Cosmic Traits:</span>
                      <p className="text-dark-grey/90 font-medium leading-relaxed">{currentInsight.traits}</p>
                    </div>

                    <div className="bg-white/80 p-3.5 sm:p-4 rounded-xl border border-amber-100 shadow-xs">
                      <span className="text-dark-grey font-bold block mb-1">Natural Strengths:</span>
                      <p className="text-dark-grey/90 font-medium leading-relaxed">{currentInsight.strengths}</p>
                    </div>

                    <div className="bg-gradient-to-r from-amber-100/70 to-orange-100/60 p-4 sm:p-5 rounded-xl border border-amber-300/60 text-dark-grey flex items-start gap-3 shadow-xs">
                      <div className="w-6 h-6 rounded-full bg-amber-400/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                      </div>
                      <div className="text-xs sm:text-sm md:text-base leading-relaxed">
                        <strong className="text-amber-950 block font-bold mb-0.5">Vedic Master Advice:</strong>
                        <span className="italic text-slate-900">"{currentInsight.advice}"</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct High-Converting Funnel CTA */}
                <div className="mt-6 sm:mt-8 bg-gradient-to-br from-cosmic-navy via-slate-900 to-cosmic-navy text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center relative overflow-hidden shadow-2xl border border-indigo-800/80">
                  {/* Top Ambient Glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 max-w-lg mx-auto">
                    <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 border border-amber-400/30">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Complete Chart Synthesis
                    </span>
                    <h4 className="text-lg sm:text-2xl font-black mb-2 sm:mb-3 text-white tracking-tight">
                      Your Name Number is Just 10% of Your Blueprint
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed font-light">
                      True life transformation happens when your <strong className="text-amber-300 font-semibold">Life Path (DOB)</strong>, <strong className="text-amber-300 font-semibold">Name Vibration</strong>, and <strong className="text-amber-300 font-semibold">Living Space (Vastu)</strong> align together in harmony.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        to="/booking"
                        className="btn-sweep inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm md:text-base transition-all shadow-lg hover:-translate-y-0.5"
                      >
                        Book Full Consultation (₹3,200) <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <a
                        href={`https://wa.me/919509610711?text=${encodeURIComponent(`Hello Hari Ram Ji! My name is ${name} and my Destiny Number is ${result}. I want to book a complete personalized Numerology consultation.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center items-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm md:text-base transition-all shadow-md hover:-translate-y-0.5"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" /> Discuss on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Chaldean Vedic Alphabet Reference Grid */}
            <div data-reveal="fade-up" className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-left">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-base font-bold text-dark-grey flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  Vedic &amp; Chaldean Alphabet Vibrational Matrix
                </h3>
                <span className="text-[11px] sm:text-xs text-medium-grey hidden sm:inline-block">Standard Sound Frequencies</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center text-xs">
                {[
                  { num: 1, letters: 'A, I, J, Q, Y' },
                  { num: 2, letters: 'B, K, R' },
                  { num: 3, letters: 'C, G, L, S' },
                  { num: 4, letters: 'D, M, T' },
                  { num: 5, letters: 'E, H, N, X' },
                  { num: 6, letters: 'U, V, W' },
                  { num: 7, letters: 'O, Z' },
                  { num: 8, letters: 'F, P' },
                ].map(item => (
                  <div key={item.num} className="bg-gray-50 border border-gray-100 hover:border-amber-300 p-2.5 rounded-xl transition-colors">
                    <div className="text-xs font-black text-secondary bg-amber-100/60 rounded-md py-0.5 mb-1">{item.num}</div>
                    <div className="text-[11px] font-bold text-dark-grey">{item.letters}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div data-reveal="fade-up" className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-500 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Free Tool</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Authentic Vedic Calculations</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Instant Sound Frequency Match</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
