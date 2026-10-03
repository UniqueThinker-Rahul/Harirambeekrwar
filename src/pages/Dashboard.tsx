import React from 'react';
import { Calendar as CalendarIcon, ArrowRight, BookOpen, Download, User as UserIcon, Sparkles, MessageCircle, ShieldCheck, Compass, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Dashboard = () => (
  <>
    <SEO />
    <div className="min-h-screen bg-light-grey pt-6 pb-16 sm:pt-12 sm:pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Hero Card */}
        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-lg border border-amber-100/70 relative overflow-hidden mb-6 sm:mb-10" data-reveal="fade-down">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-secondary border border-amber-200 mb-2.5 sm:mb-3">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Client Portal
              </div>
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-grey flex items-center gap-2.5 sm:gap-3 tracking-tight">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <UserIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span>My Spiritual Journey</span>
              </h1>
              <p className="text-medium-grey text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
                Manage your personalized consultations, Vedic chart remedies, and cosmic alignment tools in one place.
              </p>
            </div>
            <div className="flex items-center sm:self-auto self-start">
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold rounded-full text-xs flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Session: Guest</span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Area: Consultations */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-8 md:p-10 bg-white rounded-2xl sm:rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col relative overflow-hidden" data-reveal="fade-up">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40 opacity-80" />
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                    <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-dark-grey leading-tight">My Consultations</h3>
                    <p className="text-xs sm:text-sm text-medium-grey mt-0.5">Upcoming appointments and past session notes</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-medium-grey">
                  0 Sessions
                </span>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center text-center py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-amber-50/30 via-white to-gray-50/60 rounded-2xl sm:rounded-3xl border border-amber-100/70 shadow-sm relative overflow-hidden">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center text-medium-grey shadow-inner mb-4 border border-amber-200/60 relative">
                  <CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-ping opacity-75" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-dark-grey mb-1">No Active Bookings Found</h4>
                <p className="text-medium-grey text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
                  You haven't scheduled a live 1-on-1 session yet. Book now to get your numbers, name vibration, and living space aligned.
                </p>
                <Link
                  to="/booking"
                  className="btn-sweep bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Lock className="w-4 h-4 text-slate-950" /> Book a Consultation (₹3,200) <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Quick Access Tools */}
            <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all border border-gray-100 relative overflow-hidden" data-reveal="fade-up" data-delay="100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-300 opacity-80" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-5">
                <h3 className="font-bold text-lg sm:text-xl text-dark-grey flex items-center gap-2 leading-snug">
                  <Compass className="w-5 h-5 text-primary" /> Free Cosmic Calculators
                </h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider self-start sm:self-auto">
                  Instant Results
                </span>
              </div>
              <p className="text-medium-grey text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Decode your vibrational frequency, Life Path Number, and Destiny Number in real time without waiting.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/tools"
                  className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 to-orange-50/40 border border-amber-200/80 hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md inline-block mb-1.5">Free Calculator</span>
                    <h4 className="font-bold text-dark-grey group-hover:text-secondary text-sm sm:text-base leading-snug">
                      Name Numerology Tool
                    </h4>
                    <p className="text-xs text-medium-grey mt-0.5 leading-relaxed">Instant Chaldean &amp; Pythagorean grid decoding</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
                </Link>

                <Link
                  to="/tools"
                  className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/40 border border-indigo-200/80 hover:border-indigo-400 hover:shadow-md transition-all flex items-center justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-800 bg-indigo-100/80 px-2 py-0.5 rounded-md inline-block mb-1.5">Vedic Grid</span>
                    <h4 className="font-bold text-dark-grey group-hover:text-indigo-600 text-sm sm:text-base leading-snug">
                      Destiny &amp; Life Path
                    </h4>
                    <p className="text-xs text-medium-grey mt-0.5 leading-relaxed">Calculate karmic numbers from birth date</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Free Downloadable Guides */}
            <div className="bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-xl text-white border border-indigo-800/80 relative overflow-hidden" data-reveal="fade-left">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-amber-400 pointer-events-none">
                <BookOpen className="w-32 h-32" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 flex items-center gap-2 text-white relative z-10 leading-snug">
                <BookOpen className="w-5 h-5 text-amber-400" /> Free Starter Guides
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-5 relative z-10 leading-relaxed">
                Download these essential starter guides prepared by Hari Ram Beekrwar.
              </p>
              <div className="space-y-3 relative z-10">
                <a
                  href="https://wa.me/919509610711?text=Hello!%20Please%20send%20me%20the%20Daily%20Mantra%20Sheet."
                  target="_blank"
                  rel="noreferrer"
                  className="block p-3.5 sm:p-4 bg-white/10 hover:bg-white/15 rounded-2xl transition-all border border-white/10 hover:border-amber-400/40 group hover:-translate-y-0.5"
                >
                  <h4 className="font-bold text-xs sm:text-sm mb-0.5 group-hover:text-amber-300 transition-colors flex justify-between items-center">
                    Daily Mantra Sheet <Download className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-300">Basic chants for wealth, health &amp; mental peace.</p>
                </a>
                <a
                  href="https://wa.me/919509610711?text=Hello!%20Please%20send%20me%20the%20Vastu%20Direction%20Guide."
                  target="_blank"
                  rel="noreferrer"
                  className="block p-3.5 sm:p-4 bg-white/10 hover:bg-white/15 rounded-2xl transition-all border border-white/10 hover:border-amber-400/40 group hover:-translate-y-0.5"
                >
                  <h4 className="font-bold text-xs sm:text-sm mb-0.5 group-hover:text-amber-300 transition-colors flex justify-between items-center">
                    Vastu Direction Guide <Download className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-300">Quick 1-page compass map for home &amp; office energy.</p>
                </a>
              </div>
            </div>

            {/* Direct Support Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-left relative overflow-hidden" data-reveal="fade-left" data-delay="150">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center border border-green-100 shadow-inner">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Support
                </span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-dark-grey mb-1 sm:mb-1.5 leading-snug">Need Priority Support?</h3>
              <p className="text-medium-grey text-xs sm:text-sm mb-5 leading-relaxed">
                Have questions regarding your payment receipt or slot timing? Connect with our team directly.
              </p>
              <a
                href="https://wa.me/919509610711?text=Hello!%20I%20need%20assistance%20with%20my%20consultation%20booking."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Dashboard;