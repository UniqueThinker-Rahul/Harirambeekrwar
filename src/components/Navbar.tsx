import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, PhoneCall, ChevronDown, Sparkles, Heart, Home as HomeIcon, Flame, Star, ShieldCheck, FileText } from 'lucide-react';
import { openEnquiryModal } from './EnquiryModal';

const MARQUEE_ITEMS = [
  { icon: PhoneCall, text: 'For Consultations, Call/WhatsApp: +91 9509610711' },
  { icon: Sparkles, text: '50% Off Numerology Consultation — ₹3,200 Only' },
  { icon: HomeIcon, text: 'Vastu Consultation Starting ₹20,000' },
  { icon: Star, text: '2,200+ Lives Transformed' },
  { icon: ShieldCheck, text: '100% Confidential Guidance' },
  { icon: PhoneCall, text: 'For Consultations, Call/WhatsApp: +91 9509610711' },
  { icon: Sparkles, text: '50% Off Numerology Consultation — ₹3,200 Only' },
  { icon: HomeIcon, text: 'Vastu Consultation Starting ₹20,000' },
  { icon: Star, text: '2,200+ Lives Transformed' },
  { icon: ShieldCheck, text: '100% Confidential Guidance' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [consultationDropdown, setConsultationDropdown] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setConsultationDropdown(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setConsultationDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setConsultationDropdown(false);
    }, 120);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* ─── 1. Main Navigation Bar (Explicit z-30 Stacking Context) ─── */}
      <nav className="relative z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <picture className="shrink-0">
                <source type="image/webp" srcSet="/Resource/logo.webp" />
                <img
                  src="/Resource/logo.jpeg"
                  alt="ANKO KA MAYAZAAL — Hari Ram Beekrwar Logo"
                  width="44"
                  height="44"
                  decoding="async"
                  className="h-10 sm:h-11 w-auto object-contain rounded-xl shadow-sm border border-amber-200/60 group-hover:scale-105 transition-transform duration-300"
                />
              </picture>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base md:text-lg lg:text-xl text-dark-grey tracking-tight group-hover:text-secondary transition-colors leading-tight whitespace-nowrap">
                  ANKO KA MAYAZAAL
                </span>
                <span className="text-[10px] sm:text-xs text-amber-600 font-semibold tracking-wide flex items-center gap-1 whitespace-nowrap">
                  <span>Hari Ram Beekrwar</span>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <span className="hidden sm:inline text-medium-grey font-normal">Numerology &amp; Vastu</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
              <NavLink to="/" label="Home" />
              <NavLink to="/about" label="About" />

              {/* Consultation Dropdown (Higher z-50 with safe mouse bridge) */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={consultationDropdown}
                  onClick={() => setConsultationDropdown(prev => !prev)}
                  className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer focus:outline-none whitespace-nowrap ${
                    consultationDropdown || location.pathname.startsWith('/booking') || location.pathname.startsWith('/services') || location.pathname === '/urgent-love-plan'
                      ? 'text-secondary font-bold'
                      : 'text-medium-grey hover:text-dark-grey'
                  }`}
                >
                  <span>Consultations</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      consultationDropdown ? 'rotate-180 text-primary' : 'text-medium-grey'
                    }`}
                  />
                </button>

                {consultationDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2 z-50 animate-fadeInUp"
                    style={{ filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15))' }}
                  >
                    {/* Invisible hover bridge to prevent premature closing */}
                    <div className="absolute -top-2 left-0 right-0 h-2" />

                    <div className="p-2 border-b border-gray-100 mb-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-600">1-on-1 Consultations</p>
                    </div>

                    <Link
                      to="/booking"
                      onClick={() => setConsultationDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover/item:bg-amber-100 transition-colors">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-sm text-dark-grey group-hover/item:text-secondary transition-colors">
                            Numerology Session
                          </p>
                          <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                            50% Off
                          </span>
                        </div>
                        <p className="text-xs text-medium-grey mt-0.5">₹3,200 only · Complete chart decoding</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/vastu-consultation"
                      onClick={() => setConsultationDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-100 transition-colors">
                        <HomeIcon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-dark-grey group-hover/item:text-secondary transition-colors">
                          Vastu Consultation
                        </p>
                        <p className="text-xs text-medium-grey mt-0.5">From ₹20,000 · Residential &amp; commercial</p>
                      </div>
                    </Link>

                    <Link
                      to="/urgent-love-plan"
                      onClick={() => setConsultationDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-rose-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 group-hover/item:bg-rose-100 transition-colors">
                        <Heart className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-dark-grey group-hover/item:text-secondary transition-colors">
                          Urgent Love Plan
                        </p>
                        <p className="text-xs text-medium-grey mt-0.5">₹3,200 · Priority relationship guidance</p>
                      </div>
                    </Link>

                    <Link
                      to="/reports"
                      onClick={() => setConsultationDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-100 transition-colors">
                        <FileText className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-dark-grey group-hover/item:text-secondary transition-colors">
                          Handcrafted Reports
                        </p>
                        <p className="text-xs text-medium-grey mt-0.5">From ₹3,999 · Deep personal analysis</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/services" label="Services" />
              <NavLink to="/reports" label="Reports" />
              <NavLink to="/tools" label="Calculator" badge="Free" />
              <NavLink to="/blog" label="Blog" />
              <NavLink to="/contact" label="Contact" />
            </div>

            {/* Desktop Action Buttons (Single-Line Enquire Button) */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="btn-sweep bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black px-4 xl:px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Enquire Now</span>
              </button>

              <Link
                to="/dashboard"
                className="text-dark-grey hover:text-primary transition-colors bg-gray-50 hover:bg-amber-50 p-2 rounded-full border border-gray-200 shadow-sm shrink-0"
                aria-label="Client Portal"
                title="Client Portal"
              >
                <User className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex items-center lg:hidden gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="btn-sweep bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-3 py-2 rounded-full text-xs uppercase tracking-wider shadow-sm flex items-center gap-1 shrink-0 whitespace-nowrap"
              >
                <PhoneCall className="w-3 h-3 shrink-0" />
                <span>Enquire</span>
              </button>

              <button
                onClick={() => setIsOpen(prev => !prev)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-dark-grey hover:bg-gray-100 focus:outline-none transition-colors min-w-[40px] min-h-[40px] border border-gray-200 shrink-0"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ─── Mobile Navigation Drawer ─── */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-3 pb-6 space-y-3">
              {/* Consultation Highlights */}
              <div className="bg-gradient-to-br from-amber-50/70 to-orange-50/50 rounded-2xl p-3.5 border border-amber-200/80 space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-amber-800">
                  Book a Consultation
                </span>
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white text-dark-grey hover:text-secondary font-bold text-sm shadow-sm border border-amber-100"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span>Numerology (1-on-1)</span>
                  </span>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-md font-black">₹3,200</span>
                </Link>

                <Link
                  to="/services/vastu-consultation"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white text-dark-grey hover:text-secondary font-bold text-sm shadow-sm border border-indigo-100"
                >
                  <span className="flex items-center gap-2">
                    <HomeIcon className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>Vastu Consultation</span>
                  </span>
                  <span className="text-xs text-indigo-700 font-bold">From ₹20,000</span>
                </Link>

                <Link
                  to="/urgent-love-plan"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white text-dark-grey hover:text-secondary font-bold text-sm shadow-sm border border-rose-100"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Urgent Love Plan</span>
                  </span>
                  <span className="text-xs text-rose-600 font-black">₹3,200</span>
                </Link>

                <Link
                  to="/reports"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white text-dark-grey hover:text-secondary font-bold text-sm shadow-sm border border-emerald-100"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Personal Reports</span>
                  </span>
                  <span className="text-xs text-emerald-700 font-bold">From ₹3,999</span>
                </Link>
              </div>

              {/* Main Pages Navigation */}
              <div className="space-y-1">
                <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
                <MobileNavLink to="/about" label="About Hari Ram Beekrwar" onClick={() => setIsOpen(false)} />
                <MobileNavLink to="/services" label="All Services" onClick={() => setIsOpen(false)} />
                <MobileNavLink to="/tools" label="Free Numerology Calculator" onClick={() => setIsOpen(false)} badge="Free" />
                <MobileNavLink to="/blog" label="Wisdom Blog &amp; Articles" onClick={() => setIsOpen(false)} />
                <MobileNavLink to="/contact" label="Contact &amp; Support" onClick={() => setIsOpen(false)} />
                <MobileNavLink to="/dashboard" label="My Account / Portal" onClick={() => setIsOpen(false)} />
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-2 space-y-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openEnquiryModal();
                  }}
                  className="btn-sweep w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Instant Callback</span>
                </button>

                <a
                  href="https://wa.me/919509610711?text=Hello%20Hari%20Ram%20Ji,%20I%20would%20like%20to%20consult%20you."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-[#20ba59] transition-colors"
                >
                  <span>Chat on WhatsApp (+91 9509610711)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ─── 2. Top Offer Strip (Explicit z-10) ─── */}
      <Link
        to="/booking"
        className="relative z-10 w-full bg-red-50 hover:bg-red-100 transition-colors border-t border-b border-red-100 py-1.5 text-center block cursor-pointer group"
      >
        <span className="font-bold text-red-600 tracking-wide flex items-center justify-center gap-1.5 flex-nowrap px-3 overflow-hidden text-xs sm:text-sm">
          <Flame className="w-3.5 h-3.5 text-red-600 fill-red-500 animate-pulse shrink-0" />
          <span className="bg-yellow-300 text-dark-grey px-2 py-0.5 rounded-md shadow-sm group-hover:scale-105 transition-transform font-black whitespace-nowrap">
            Numerology 50% Off → ₹3,200/-
          </span>
          <span className="hidden sm:inline text-gray-500 font-semibold line-through">₹6,400/-</span>
          <span className="hidden md:inline text-indigo-950 font-bold bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded whitespace-nowrap">
            Vastu Starts ₹20,000
          </span>
          <span className="font-bold whitespace-nowrap">Book Now →</span>
        </span>
      </Link>

      {/* ─── 3. Continuous Cosmic Scrolling Ticker (Explicit z-10) ─── */}
      <div
        className="relative z-10 marquee-container w-full max-w-full text-amber-300 py-1.5 overflow-hidden block shadow-inner border-b border-indigo-900/80 cursor-pointer"
        style={{ background: 'linear-gradient(90deg, #0F172A, #1E1B4B, #0F172A)' }}
      >
        <div className="marquee-track text-xs sm:text-sm font-bold tracking-widest uppercase select-none">
          {MARQUEE_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="px-6 sm:px-8 whitespace-nowrap inline-flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{item.text}</span>
              </span>
            );
          })}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, label, badge }: { to: string; label: string; badge?: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold transition-colors flex items-center gap-1 whitespace-nowrap group ${
        isActive ? 'text-secondary font-bold' : 'text-medium-grey hover:text-dark-grey'
      }`}
    >
      <span className="whitespace-nowrap">{label}</span>
      {badge && (
        <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-full whitespace-nowrap shrink-0">
          {badge}
        </span>
      )}
      <span
        className={`absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </Link>
  );
};

const MobileNavLink = ({ to, label, badge, onClick }: { to: string; label: string; badge?: string; onClick: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
        isActive ? 'bg-amber-50 text-secondary' : 'text-dark-grey hover:bg-gray-50'
      }`}
    >
      <span>{label}</span>
      {badge && (
        <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};

export default Navbar;
