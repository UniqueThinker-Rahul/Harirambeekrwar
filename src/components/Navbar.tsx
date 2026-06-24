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
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark-grey font-bold shadow-sm">
                 H
               </div>
              <span className="font-bold text-xl text-dark-grey tracking-tight">HARIRAM BEEKRWAR</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">About</Link>
            <Link to="/services" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Services</Link>
            <Link to="/blog" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-medium-grey hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
            
            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
               <Link to="/dashboard" className="text-dark-grey hover:text-secondary transition-colors">
                  <User className="w-5 h-5" />
               </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-medium-grey hover:text-dark-grey focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-dark-grey hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium border-t border-gray-100 mt-2 pt-2">My Account</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
