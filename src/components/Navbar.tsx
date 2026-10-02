import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, PhoneCall, ChevronDown } from 'lucide-react';
import { openEnquiryModal } from './EnquiryModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [consultationDropdown, setConsultationDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
               <img 
                 src="/Resource/logo.jpeg" 
                 alt="ANKO KA MAYAZAAL Logo" 
                 className="h-10 md:h-12 w-auto object-contain rounded-lg shadow-sm origin-left" 
               />
              <span className="font-bold text-lg md:text-xl text-dark-grey tracking-tight hidden sm:block">ANKO KA MAYAZAAL</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">About</Link>
            
            {/* Consultation Dropdown like Arviend Sud's reference */}
            <div 
              className="relative group"
              onMouseEnter={() => setConsultationDropdown(true)}
              onMouseLeave={() => setConsultationDropdown(false)}
            >
              <button 
                type="button" 
                onClick={() => setConsultationDropdown(!consultationDropdown)}
                className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none"
              >
                <span>Consultation</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${consultationDropdown ? 'rotate-180 text-secondary' : ''}`} />
              </button>

              {consultationDropdown && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50">
                  <Link
                    to="/booking"
                    onClick={() => setConsultationDropdown(false)}
                    className="block px-4 py-2.5 text-sm text-dark-grey hover:bg-gray-50 hover:text-secondary font-medium transition-colors"
                  >
                    Numerology Consultation
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <Link
                    to="/services/vastu-consultation"
                    onClick={() => setConsultationDropdown(false)}
                    className="block px-4 py-2.5 text-sm text-dark-grey hover:bg-gray-50 hover:text-secondary font-medium transition-colors"
                  >
                    Vastu Consultation
                  </Link>
                </div>
              )}
            </div>

            <Link to="/services" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Services</Link>
            <Link to="/blog" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
            
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="bg-amber-400 hover:bg-yellow-400 text-slate-950 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Enquire Now
            </button>

            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
               <Link to="/dashboard" className="text-dark-grey hover:text-secondary transition-colors bg-gray-50 p-2 rounded-full hover:shadow-sm">
                 <User className="w-5 h-5" />
               </Link>
            </div>
          </div>

          <div className="-mr-2 flex items-center md:hidden gap-2">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="bg-amber-400 hover:bg-yellow-400 text-slate-950 font-bold px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Enquire
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-medium-grey hover:text-dark-grey focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-5">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-colors">About</Link>
            
            {/* Consultation Options */}
            <div className="bg-gray-50 rounded-xl p-2 my-1 border border-gray-100">
              <span className="block px-3 pt-1 text-xs font-bold uppercase tracking-wider text-secondary">Consultation</span>
              <Link 
                to="/booking" 
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 text-sm text-dark-grey font-medium hover:text-secondary"
              >
                Numerology Consultation
              </Link>
              <Link 
                to="/services/vastu-consultation" 
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 text-sm text-dark-grey font-medium hover:text-secondary"
              >
                Vastu Consultation
              </Link>
            </div>

            <Link to="/services" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-colors">Services</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-colors">Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-colors">Contact</Link>
            <button
              type="button"
              onClick={() => { setIsOpen(false); openEnquiryModal(); }}
              className="w-full text-left bg-amber-50 hover:bg-amber-100 text-amber-950 block px-3 py-2.5 rounded-lg text-base font-bold transition-colors flex items-center gap-2 border border-amber-200 mt-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-700" /> Enquire Now (Request Callback)
            </button>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2.5 rounded-lg text-base font-medium border-t border-gray-100 mt-2 pt-3 flex items-center gap-2">
              <User className="w-5 h-5"/> My Account
            </Link>
          </div>
        </div>
      )}

      {/* Blinking Call Banner & Scrolling Phone Number */}
      <div className="w-full flex flex-col">
        <Link to="/booking" className="w-full bg-red-50 hover:bg-red-100 transition-colors border-t border-b border-red-100 py-2 animate-pulse text-center block cursor-pointer group">
          <span className="font-bold text-red-600 text-sm md:text-base tracking-wide flex items-center justify-center gap-2 flex-wrap px-2">
             <span>Numerology: <span className="line-through text-gray-400 mx-1">₹6,400/-</span></span>
             <span className="bg-yellow-300 text-dark-grey px-2 py-0.5 rounded shadow-sm group-hover:scale-105 transition-transform">50% Off ₹3,200/- (Numerology Only)</span> 
             <span className="hidden sm:inline text-xs text-indigo-950 font-bold bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded">Vastu Starts ₹20,000</span>
             <span>Book Now &rarr;</span>
          </span>
        </Link>
        
        <div className="w-full bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-950 text-amber-300 py-1.5 overflow-hidden flex items-center shadow-inner border-b border-indigo-800/80">
          <marquee direction="left" scrollamount="6" className="text-sm font-bold tracking-widest uppercase">
             📞 For Consultations, Call/WhatsApp: +91 9509610711 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 📞 For Consultations, Call/WhatsApp: +91 9509610711 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 📞 FAST RESPONSE VIA WHATSAPP: +91 9509610711
          </marquee>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
