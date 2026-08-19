import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity">
               <img 
                 src="/Resource/logo.jpeg" 
                 alt="Hariram Beekrwar Logo" 
                 className="h-10 md:h-12 w-auto object-contain scale-110 origin-left" 
               />
              <span className="font-bold text-lg md:text-xl text-dark-grey tracking-tight hidden sm:block">HARIRAM BEEKRWAR</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">About</Link>
            <Link to="/services" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Services</Link>
            <Link to="/blog" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
            
            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
               <Link to="/dashboard" className="text-dark-grey hover:text-secondary transition-colors bg-gray-50 p-2 rounded-full hover:shadow-sm">
                 <User className="w-5 h-5" />
               </Link>
            </div>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
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
            <Link to="/" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">Services</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">Contact</Link>
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
             <span>Book call <span className="line-through text-gray-400 mx-1">₹6400/-</span></span>
             <span className="bg-yellow-300 text-dark-grey px-2 py-0.5 rounded shadow-sm group-hover:scale-105 transition-transform">50% discount ₹3200/-</span> 
             <span>On call consult &rarr;</span>
          </span>
        </Link>
        
        <div className="w-full bg-dark-grey text-primary py-1.5 overflow-hidden flex items-center shadow-inner">
          <marquee direction="left" scrollamount="6" className="text-sm font-bold tracking-widest uppercase">
             📞 For Consultations, Call/WhatsApp: +91 9509610711 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 📞 For Consultations, Call/WhatsApp: +91 9509610711 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 📞 FAST RESPONSE VIA WHATSAPP: +91 9509610711
          </marquee>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;