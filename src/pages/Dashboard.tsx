import React from 'react';
import { Calendar as CalendarIcon, ArrowRight, BookOpen, Download, User as UserIcon, Sparkles, MessageCircle, ShieldCheck, Compass, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Dashboard = () => (
  <>
    <SEO
      title="Client Portal & Account Dashboard | HARI RAM BEEKRWAR"
      description="Access your consultation details, spiritual reports, and free energy alignment resources."
    />
    <div className="min-h-screen bg-light-grey py-10 sm:py-20 px-4 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Card */}
        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-secondary border border-amber-200 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Client Portal
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-dark-grey flex items-center gap-2.5 sm:gap-3">
              <UserIcon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" /> My Spiritual Journey
            </h1>
            <p className="text-medium-grey text-xs sm:text-base mt-1">
              Manage your consultations, remedies, and cosmic alignment tools.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 sm:px-5 py-2 bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold rounded-full text-xs sm:text-sm flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Active Session: Guest
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Area: Consultations */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-8 md:p-10 bg-white rounded-2xl sm:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-2xl text-dark-grey">My Consultations</h3>
                    <p className="text-xs sm:text-sm text-medium-grey">Upcoming appointments and past session notes</p>
                  </div>
                </div>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center text-center py-8 sm:py-12 px-4 sm:px-6 bg-gray-50/70 rounded-2xl sm:rounded-3xl border border-dashed border-gray-200">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-medium-grey shadow-sm mb-4 border border-gray-100">
                  <CalendarIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-dark-grey mb-1">No Active Bookings Found</h4>
                <p className="text-medium-grey text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
                  You haven't scheduled a live 1-on-1 session yet. Book now to get your numbers and living space aligned.
                </p>
                <Link
                  to="/booking"
                  className="btn-sweep bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Lock className="w-4 h-4 text-slate-950" /> Book a Consultation (₹3,200) <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Quick Access Tools */}
            <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg sm:text-xl text-dark-grey mb-3 sm:mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" /> Free Cosmic Calculators
              </h3>
              <p className="text-medium-grey text-xs sm:text-sm mb-5 sm:mb-6">
                Calculate your Destiny Number and find your planetary frequency in real time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/tools"
                  className="flex-1 p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 hover:bg-amber-100/60 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-bold text-dark-grey group-hover:text-secondary text-sm sm:text-base">
                      Name Numerology Calculator
                    </h4>
                    <p className="text-xs text-medium-grey mt-0.5">Free instant Chaldean & Pythagorean analysis</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Free Downloadable Guides */}
            <div className="bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-xl text-white border border-indigo-800/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-amber-400 pointer-events-none">
                <BookOpen className="w-32 h-32" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 flex items-center gap-2 text-white relative z-10">
                <BookOpen className="w-5 h-5 text-amber-400" /> Free Resources
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-5 sm:mb-6 relative z-10 leading-relaxed">
                Download these essential starter guides prepared by Hari ram Beekrwar.
              </p>
              <div className="space-y-3 relative z-10">
                <a
                  href="https://wa.me/919509610711?text=Hello!%20Please%20send%20me%20the%20Daily%20Mantra%20Sheet."
                  target="_blank"
                  rel="noreferrer"
                  className="block p-3.5 sm:p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10 group"
                >
                  <h4 className="font-bold text-xs sm:text-sm mb-0.5 group-hover:text-amber-300 transition-colors flex justify-between items-center">
                    Daily Mantra Sheet <Download className="w-4 h-4 text-amber-400" />
                  </h4>
                  <p className="text-xs text-gray-300">Basic chants for wealth & health.</p>
                </a>
                <a
                  href="https://wa.me/919509610711?text=Hello!%20Please%20send%20me%20the%20Vastu%20Direction%20Guide."
                  target="_blank"
                  rel="noreferrer"
                  className="block p-3.5 sm:p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10 group"
                >
                  <h4 className="font-bold text-xs sm:text-sm mb-0.5 group-hover:text-amber-300 transition-colors flex justify-between items-center">
                    Vastu Direction Guide <Download className="w-4 h-4 text-amber-400" />
                  </h4>
                  <p className="text-xs text-gray-300">Quick 1-page compass map for home & office.</p>
                </a>
              </div>
            </div>

            {/* Direct Support Card */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-sm border border-gray-100 text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 border border-green-100">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-dark-grey mb-1.5 sm:mb-2">Need Priority Support?</h3>
              <p className="text-medium-grey text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Have questions regarding your payment receipt or slot timing? Connect with our team directly.
              </p>
              <a
                href="https://wa.me/919509610711?text=Hello!%20I%20need%20assistance%20with%20my%20consultation%20booking."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Dashboard;