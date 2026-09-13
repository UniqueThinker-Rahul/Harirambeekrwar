import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-light-grey pt-14 pb-8 border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-slate-950 font-black shadow-sm">
                   H
                 </div>
                <span className="font-bold text-xl text-white tracking-tight">HARI RAM BEEKRWAR</span>
              </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Guiding you through the cosmic journey of life with authentic numerology and vastu consultations.
            </p>
            <div className="flex space-x-4 pt-2">
               <a href="https://www.instagram.com/harirambeekrwar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-300 transition-colors"><Instagram className="w-5 h-5"/></a>
               <a href="https://facebook.com/profile.php?id=61571128232956&sk=about" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-300 transition-colors"><Facebook className="w-5 h-5"/></a>
               <a href="https://www.youtube.com/@HariRamBeekrwar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-300 transition-colors"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition-colors">Our Services</Link></li>
              <li><Link to="/tools" className="hover:text-amber-300 transition-colors">Free Tools</Link></li>
              <li><Link to="/blog" className="hover:text-amber-300 transition-colors">Blog & Articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Legal & Policies</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/privacy-policy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-amber-300 transition-colors">Refund & Cancellation</Link></li>
              <li><Link to="/terms" className="hover:text-amber-300 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Hari ram Beekrwar BHARATPUR 321001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>+91 9509610711</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>contact@harirambeekrwar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-900/60 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} HARI RAM BEEKRWAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;