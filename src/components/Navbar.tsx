import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, PhoneCall, ChevronDown, Sparkles, Heart, Home as HomeIcon, Flame, Star, ShieldCheck } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setConsultationDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white sticky top-0 z-50 w-full max-w-full overflow-hidden transition-all duration-300 ${scrolled ? 'shadow-lg shadow-indigo-900/10 backdrop-blur-sm' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity group">
              <img src="/Resource/logo.jpeg" alt="ANKO KA MAYAZAAL Logo" className="h-10 md:h-12 w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 origin-left" />
              <span className="font-bold text-lg md:text-xl text-dark-grey tracking-tight hidden sm:block">ANKO KA MAYAZAAL</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />

            <div className="relative" onMouseEnter={() => setConsultationDropdown(true)} onMouseLeave={() => setConsultationDropdown(false)}>
              <button type="button" onClick={() => setConsultationDropdown(prev => !prev)} className="text-medium-grey hover:text-dark-grey px-3 py-2 text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none group">
                <span>Consultation</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${consultationDropdown ? 'rotate-180 text-primary' : 'group-hover:text-primary'}`} />
              </button>
              {consultationDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fadeInUp">
                  <Link to="/booking" onClick={() => setConsultationDropdown(false)} className="flex items-start gap-3 px-4 py-3 hover:bg-amber-50 transition-colors group/item">
                    <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-amber-100 transition-colors"><Sparkles className="w-4 h-4 text-primary" /></div>
                    <div><p className="font-bold text-sm text-dark-grey group-hover/item:text-secondary transition-colors">Numerology Consultation</p><p className="text-xs text-medium-grey mt-0.5">₹3,200 only · 50% off · Voice/Video call</p></div>
                  </Link>
                  <div className="border-t border-gray-100 mx-3" />
                  <Link to="/services/vastu-consultation" onClick={() => setConsultationDropdown(false)} className="flex items-start gap-3 px-4 py-3 hover:bg-amber-50 transition-colors group/item">
                    <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-indigo-100 transition-colors"><HomeIcon className="w-4 h-4 text-indigo-600" /></div>
                    <div><p className="font-bold text-sm text-dark-grey group-hover/item:text-secondary transition-colors">Vastu Consultation</p><p className="text-xs text-medium-grey mt-0.5">From ₹20,000 · Residential & Commercial</p></div>
                  </Link>
                  <div className="border-t border-gray-100 mx-3" />
                  <Link to="/urgent-love-plan" onClick={() => setConsultationDropdown(false)} className="flex items-start gap-3 px-4 py-3 hover:bg-red-50 transition-colors group/item">
                    <div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-red-100 transition-colors"><Heart className="w-4 h-4 text-red-500" /></div>
                    <div><p className="font-bold text-sm text-dark-grey group-hover/item:text-secondary transition-colors">Urgent Love Plan</p><p className="text-xs text-medium-grey mt-0.5">Priority slot · Relationship guidance</p></div>
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/services" label="Services" />
            <NavLink to="/blog" label="Blog" />
            <NavLink to="/contact" label="Contact" />

            <button type="button" onClick={() => openEnquiryModal()} className="btn-sweep ml-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-primary-deep text-slate-950 font-bold px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 hover:shadow-amber-300/40 hover:shadow-lg cursor-pointer flex items-center gap-1.5 shrink-0 ring-pulse">
              <PhoneCall className="w-3.5 h-3.5" /> Enquire Now
            </button>

            <div className="flex items-center border-l pl-3 border-gray-200 ml-1">
              <Link to="/dashboard" className="text-dark-grey hover:text-secondary transition-colors bg-gray-50 hover:bg-amber-50 p-2 rounded-full hover:shadow-sm"><User className="w-5 h-5" /></Link>
            </div>
          </div>

          <div className="flex items-center md:hidden gap-2 shrink-0">
            {/* Touch target >= 44px (WCAG 2.5.5) — py-2.5 = ~44px total */}
            <button type="button" onClick={() => openEnquiryModal()} className="btn-sweep bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-3.5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 shrink-0">
              <PhoneCall className="w-3.5 h-3.5" /> Enquire
            </button>
            <button onClick={() => setIsOpen(prev => !prev)} className="inline-flex items-center justify-center p-2.5 rounded-lg text-medium-grey hover:text-dark-grey hover:bg-gray-100 focus:outline-none transition-colors min-w-[44px] min-h-[44px]" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-5">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-amber-50 hover:text-secondary block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-amber-50 hover:text-secondary block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors">About</Link>
            <div className="bg-gray-50 rounded-2xl p-3 my-1 border border-gray-100">
              <span className="block px-1 pb-2 text-xs font-bold uppercase tracking-wider text-primary">Consultation</span>
              <Link to="/booking" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-2 py-2 text-sm text-dark-grey font-semibold hover:text-secondary rounded-lg hover:bg-amber-50 transition-colors"><Sparkles className="w-4 h-4 text-primary shrink-0" /> Numerology — ₹3,200</Link>
              <Link to="/services/vastu-consultation" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-2 py-2 text-sm text-dark-grey font-semibold hover:text-secondary rounded-lg hover:bg-amber-50 transition-colors"><HomeIcon className="w-4 h-4 text-indigo-500 shrink-0" /> Vastu — From ₹20,000</Link>
              <Link to="/urgent-love-plan" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-2 py-2 text-sm text-dark-grey font-semibold hover:text-secondary rounded-lg hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-red-500 shrink-0" /> Urgent Love Plan</Link>
            </div>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-amber-50 hover:text-secondary block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors">Services</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-amber-50 hover:text-secondary block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors">Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-amber-50 hover:text-secondary block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors">Contact</Link>
            <button type="button" onClick={() => { setIsOpen(false); openEnquiryModal(); }} className="w-full text-left bg-amber-50 hover:bg-amber-100 text-amber-950 block px-4 py-3 rounded-xl text-base font-bold transition-colors flex items-center gap-2 border border-amber-200 mt-2">
              <PhoneCall className="w-4 h-4 text-amber-700" /> Enquire Now (Request Callback)
            </button>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2.5 rounded-xl text-base font-semibold border-t border-gray-100 mt-2 pt-3 flex items-center gap-2"><User className="w-5 h-5" /> My Account</Link>
          </div>
        </div>
      )}

      <div className="w-full max-w-full overflow-hidden block">
        <Link to="/booking" className="w-full bg-red-50 hover:bg-red-100 transition-colors border-t border-b border-red-100 py-1.5 text-center block cursor-pointer group">
          <span className="font-bold text-red-600 tracking-wide flex items-center justify-center gap-1.5 flex-nowrap px-3 overflow-hidden">
            <Flame className="w-3.5 h-3.5 text-red-600 fill-red-500 animate-pulse shrink-0" />
            {/* Mobile: show only the offer + CTA — hide verbose text */}
            <span className="hidden sm:inline text-xs">Numerology: <span className="line-through text-gray-400 mx-0.5">₹6,400/-</span></span>
            <span className="bg-yellow-300 text-dark-grey px-2 py-0.5 rounded-md shadow-sm group-hover:scale-105 transition-transform font-black text-xs sm:text-sm whitespace-nowrap">50% Off → ₹3,200/-</span>
            <span className="hidden md:inline text-xs text-indigo-950 font-bold bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded whitespace-nowrap">Vastu Starts ₹20,000</span>
            <span className="font-bold text-xs sm:text-sm whitespace-nowrap">Book Now →</span>
          </span>
        </Link>
        <div className="marquee-container w-full max-w-full text-amber-300 py-1.5 overflow-hidden block shadow-inner border-b border-indigo-900/80" style={{background: 'linear-gradient(90deg, #0F172A, #1E1B4B, #0F172A)'}}>
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
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`relative px-3 py-2 text-sm font-semibold transition-colors group ${isActive ? 'text-dark-grey' : 'text-medium-grey hover:text-dark-grey'}`}>
      {label}
      <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
    </Link>
  );
};

export default Navbar;
