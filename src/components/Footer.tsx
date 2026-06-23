import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-light-grey pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark-grey font-bold shadow-sm">
                   A
                 </div>
                <span className="font-bold text-xl text-white">Arviend Astrology</span>
              </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Guiding you through the cosmic journey of life with authentic astrology and vastu consultations.
            </p>
            <div className="flex space-x-4 pt-2">
               <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
               <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5"/></a>
               <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Astrology Shop</Link></li>
              <li><Link to="/tools" className="hover:text-primary transition-colors">Free Tools</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & Articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/personal-consultation" className="hover:text-primary transition-colors">Personal Consultation</Link></li>
              <li><Link to="/services/vastu" className="hover:text-primary transition-colors">Vastu Shastra</Link></li>
              <li><Link to="/services/numerology" className="hover:text-primary transition-colors">Numerology</Link></li>
              <li><Link to="/services/match-making" className="hover:text-primary transition-colors">Match Making</Link></li>
              <li><Link to="/reports" className="hover:text-primary transition-colors">Detailed Reports</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Cosmic Avenue, Spiritual District, New Delhi 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@harirambeekrwar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arviend Astrology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
