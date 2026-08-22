import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Zap, Clock, ShieldCheck, Star, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const UrgentLovePlan = () => {
  return (
    <>
      <SEO 
        title="Urgent Love Karna Hai Plan | Hari ram Beekrwar" 
        description="Priority Numerology & Vastu consultation for love, relationships, and marriage. Get fast-tracked remedies for your love life."
      />
      
      <div className="bg-light-grey min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-dark-grey text-white overflow-hidden py-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500 opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 bg-primary opacity-10 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm text-sm font-bold mb-8 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-pulse">
              <Zap className="w-4 h-4" /> PRIORITY CONSULTATION PLAN
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-primary">"Urgent Love Karna Hai"</span> <br className="hidden md:block" /> 
              <span className="text-3xl md:text-5xl text-gray-200 mt-4 block">Attract & Manifest True Love</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Facing constant delays in marriage, heartbreak, or relationship misunderstandings? Get an immediate, high-priority energetic alignment to clear your blockages and attract the love you deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] transform hover:-translate-y-1">
                Book Priority Slot NOW <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why This Plan Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">Is This Plan For You?</h2>
              <p className="text-medium-grey text-lg max-w-2xl mx-auto">If you are experiencing any of the following, this urgent intervention plan is designed specifically to bring fast clarity and solutions.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 hover:shadow-lg transition-shadow text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-6 opacity-80" />
                <h3 className="text-xl font-bold text-dark-grey mb-3">Relationship Conflicts</h3>
                <p className="text-medium-grey">Constant arguments, misunderstandings, or distancing with your current partner.</p>
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 hover:shadow-lg transition-shadow text-center">
                <Clock className="w-12 h-12 text-red-500 mx-auto mb-6 opacity-80" />
                <h3 className="text-xl font-bold text-dark-grey mb-3">Delays in Marriage</h3>
                <p className="text-medium-grey">Struggling to find the right life partner or facing repeated obstacles in fixing a marriage.</p>
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 hover:shadow-lg transition-shadow text-center">
                <Zap className="w-12 h-12 text-red-500 mx-auto mb-6 opacity-80" />
                <h3 className="text-xl font-bold text-dark-grey mb-3">Attracting a Specific Person</h3>
                <p className="text-medium-grey">Wanting to align your energies to attract a specific person or win back a lost love.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Details & Pricing */}
        <section className="py-24 bg-light-grey border-y border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
              
              {/* Features List */}
              <div className="lg:w-3/5 p-10 md:p-14">
                <div className="inline-block bg-yellow-50 text-secondary font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase text-sm">What's Included</div>
                <h2 className="text-3xl font-bold text-dark-grey mb-8">Priority Love & Relationship Blueprint</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" /> 
                    <div>
                      <span className="text-dark-grey font-bold text-lg block">Immediate Slot Allocation</span>
                      <span className="text-medium-grey">Skip the waiting line. Get a priority consultation within 24 hours.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" /> 
                    <div>
                      <span className="text-dark-grey font-bold text-lg block">Deep Compatibility Check</span>
                      <span className="text-medium-grey">Advanced numerology matching of your date of birth with your partner's.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" /> 
                    <div>
                      <span className="text-dark-grey font-bold text-lg block">Vastu for Romance</span>
                      <span className="text-medium-grey">Specific bedroom and home energy alignments to foster love and harmony.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" /> 
                    <div>
                      <span className="text-dark-grey font-bold text-lg block">Secret Custom Remedies</span>
                      <span className="text-medium-grey">Practical, non-destructive remedies to remove blockages in your love life immediately.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pricing Box */}
              <div className="lg:w-2/5 bg-dark-grey text-white p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
                  <Heart className="w-48 h-48" />
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-2">Consultation Fee</h3>
                  <div className="mb-4">
                     <span className="line-through text-gray-400 text-2xl mr-2">₹6400/-</span>
                     <span className="bg-yellow-400 text-dark-grey font-black px-3 py-1 rounded-md text-sm uppercase animate-pulse inline-block mb-2">50% Discount</span>
                  </div>
                  <div className="text-6xl font-black text-primary mb-2 shadow-sm">
                    ₹3200<span className="text-2xl text-gray-300">/-</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-8">One-on-One Voice/Video Call Consultation</p>
                  
                  <Link to="/booking" className="w-full inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary text-dark-grey font-black text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)] transform hover:-translate-y-1 mb-4">
                    Book Priority Call Now
                  </Link>

                  <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20the%20Urgent%20Love%20Karna%20Hai%20Plan%20for%203200/-" target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#20b858] transition-all shadow-lg transform hover:-translate-y-1">
                    <MessageCircle className="w-5 h-5 mr-2" /> Book via WhatsApp
                  </a>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <ShieldCheck className="w-4 h-4" /> 100% Secure & Confidential
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default UrgentLovePlan;