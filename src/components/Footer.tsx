import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle, ShieldCheck, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-light-grey pt-0 pb-0 relative overflow-hidden" style={{background: '#0F172A', borderTop: '1px solid rgba(79,70,229,0.3)'}}>
      {/* Top Cosmic Gold Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />

      <div className="border-b border-indigo-800/60 py-5 px-4" style={{background: 'linear-gradient(90deg, #1e1b4b, #1E1B4B, #1e1b4b)'}}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-base sm:text-lg leading-tight">Join Our WhatsApp Community</p>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">Get free daily numerology tips, Vastu hacks &amp; exclusive consultation offers.</p>
          </div>
          <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20join%20your%20WhatsApp%20community%20for%20numerology%20tips." target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:-translate-y-0.5 text-xs sm:text-sm">
            <MessageCircle className="w-4 h-4" /> Join on WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="space-y-4 sm:space-y-5 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <picture className="shrink-0">
                <source type="image/webp" srcSet="/Resource/logo.webp" />
                <img
                  src="/Resource/logo.jpeg"
                  alt="ANKO KA MAYAZAAL — Hari Ram Beekrwar Logo"
                  width="48"
                  height="48"
                  decoding="async"
                  className="h-11 sm:h-12 w-auto object-contain rounded-xl shadow-md border border-amber-400/40 group-hover:scale-105 transition-transform duration-300 bg-slate-900/80 p-0.5"
                />
              </picture>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                  ANKO KA MAYAZAAL
                </span>
                <span className="text-[11px] sm:text-xs text-amber-400 font-semibold tracking-wide">
                  Hari Ram Beekrwar
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Guiding you through the cosmic journey of life with authentic numerology and Vastu consultations. Trusted by 2,200+ clients across India and worldwide.</p>
            <div className="flex items-center gap-4 pt-1">
              <a href="https://www.instagram.com/harirambeekrwar/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-md" aria-label="Instagram"><Instagram className="w-4 h-4 text-white" /></a>
              <a href="https://facebook.com/profile.php?id=61571128232956" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-md" aria-label="Facebook"><Facebook className="w-4 h-4 text-white" /></a>
              <a href="https://www.youtube.com/@HariRamBeekrwar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-md" aria-label="YouTube"><Youtube className="w-4 h-4 text-white" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-5 tracking-wider uppercase text-xs border-b border-indigo-800/60 pb-2.5 sm:pb-3">Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-400">
              <FooterLink to="/about" label="About Hari Ram Beekrwar" />
              <FooterLink to="/services" label="Our Services" />
              <FooterLink to="/booking" label="Book Consultation" />
              <FooterLink to="/urgent-love-plan" label="Urgent Love Plan" />
              <FooterLink to="/reports" label="Numerology Reports" />
              <FooterLink to="/tools" label="Free Tools" />
              <FooterLink to="/blog" label="Blog &amp; Articles" />
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-5 tracking-wider uppercase text-xs border-b border-indigo-800/60 pb-2.5 sm:pb-3">Legal &amp; Policies</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-400">
              <FooterLink to="/privacy-policy" label="Privacy Policy" />
              <FooterLink to="/refund-policy" label="Refund &amp; Cancellation" />
              <FooterLink to="/terms" label="Terms &amp; Conditions" />
              <FooterLink to="/contact" label="Support Center" />
            </ul>
            <div className="mt-5 sm:mt-6 flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px] sm:text-xs text-slate-400 leading-tight">Payments secured by <strong className="text-white font-medium">Razorpay</strong>. SSL encrypted.</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-5 tracking-wider uppercase text-xs border-b border-indigo-800/60 pb-2.5 sm:pb-3">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /><span>Hari Ram Beekrwar<br />Bharatpur, Rajasthan 321001</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-400 shrink-0" /><a href="tel:+919509610711" className="hover:text-amber-300 transition-colors">+91 9509610711</a></li>
              <li className="flex items-center gap-3"><MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" /><a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20a%20consultation." target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp (Fastest)</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-400 shrink-0" /><a href="mailto:harirambeekrwar@gmail.com" className="hover:text-amber-300 transition-colors break-all">harirambeekrwar@gmail.com</a></li>
            </ul>
            <div className="mt-4 sm:mt-5 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 sm:py-3 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              <Clock className="w-3.5 h-3.5 inline mr-1 text-amber-400" /> <strong className="text-white font-medium">Consultation Hours:</strong><br/>Mon–Sat: 10:00 AM – 6:00 PM IST
            </div>
          </div>
        </div>
      </div>

      <div className="border-t" style={{background: '#0F172A', borderColor: 'rgba(79,70,229,0.3)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Hari Ram Beekrwar | ANKO KA MAYAZAAL. All rights reserved.</p>
          <p className="text-slate-500">Numerology &amp; Vastu guidance is for educational &amp; spiritual purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li><Link to={to} className="hover:text-amber-300 transition-colors hover:translate-x-1 inline-block transform duration-200">{label}</Link></li>
);

export default Footer;