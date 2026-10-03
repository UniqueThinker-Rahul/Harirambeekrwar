import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle, ShieldCheck, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-light-grey pt-16 pb-0" style={{background: '#0F172A', borderTop: '1px solid rgba(79,70,229,0.3)'}}>
      <div className="border-b border-indigo-800/60 py-5 px-4" style={{background: 'linear-gradient(90deg, #1e1b4b, #1E1B4B, #1e1b4b)'}}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-lg leading-tight">Join Our WhatsApp Community</p>
            <p className="text-gray-400 text-sm mt-0.5">Get free daily numerology tips, Vastu hacks & exclusive consultation offers.</p>
          </div>
          <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20join%20your%20WhatsApp%20community%20for%20numerology%20tips." target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:-translate-y-0.5 text-sm">
            <MessageCircle className="w-4 h-4" /> Join on WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-amber-500/20">H</div>
              <span className="font-bold text-lg text-white tracking-tight leading-tight">HARI RAM<br/>BEEKRWAR</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Guiding you through the cosmic journey of life with authentic numerology and Vastu consultations. Trusted by 2,200+ clients across India and worldwide.</p>
            <div className="flex items-center gap-4 pt-1">
              <a href="https://www.instagram.com/harirambeekrwar/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-md" aria-label="Instagram"><Instagram className="w-4 h-4 text-white" /></a>
              <a href="https://facebook.com/profile.php?id=61571128232956" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-md" aria-label="Facebook"><Facebook className="w-4 h-4 text-white" /></a>
              <a href="https://www.youtube.com/@HariRamBeekrwar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-md" aria-label="YouTube"><Youtube className="w-4 h-4 text-white" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-xs border-b border-indigo-800/60 pb-3">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <FooterLink to="/about" label="About Hari ram Beekrwar" />
              <FooterLink to="/services" label="Our Services" />
              <FooterLink to="/booking" label="Book Consultation" />
              <FooterLink to="/urgent-love-plan" label="Urgent Love Plan" />
              <FooterLink to="/reports" label="Numerology Reports" />
              <FooterLink to="/tools" label="Free Tools" />
              <FooterLink to="/blog" label="Blog & Articles" />
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-xs border-b border-indigo-800/60 pb-3">Legal & Policies</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <FooterLink to="/privacy-policy" label="Privacy Policy" />
              <FooterLink to="/refund-policy" label="Refund & Cancellation" />
              <FooterLink to="/terms" label="Terms & Conditions" />
              <FooterLink to="/contact" label="Support Center" />
            </ul>
            <div className="mt-6 flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-400 leading-tight">Payments secured by <strong className="text-white">Razorpay</strong>. SSL encrypted.</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-xs border-b border-indigo-800/60 pb-3">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /><span>Hari ram Beekrwar<br />Bharatpur, Rajasthan 321001</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-400 shrink-0" /><a href="tel:+919509610711" className="hover:text-amber-300 transition-colors">+91 9509610711</a></li>
              <li className="flex items-center gap-3"><MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" /><a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20book%20a%20consultation." target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp (Fastest)</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-400 shrink-0" /><a href="mailto:harirambeekrwar@gmail.com" className="hover:text-amber-300 transition-colors break-all">harirambeekrwar@gmail.com</a></li>
            </ul>
            <div className="mt-5 bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 inline mr-1 text-amber-400" /> <strong className="text-white">Consultation Hours:</strong><br/>Mon–Sat: 10:00 AM – 6:00 PM IST
            </div>
          </div>
        </div>
      </div>

      <div className="border-t" style={{background: '#0F172A', borderColor: 'rgba(79,70,229,0.3)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hari ram Beekrwar | ANKO KA MAYAZAAL. All rights reserved.</p>
          <p className="text-slate-600">Numerology & Vastu guidance is for educational &amp; spiritual purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li><Link to={to} className="hover:text-amber-300 transition-colors hover:translate-x-1 inline-block transform duration-200">{label}</Link></li>
);

export default Footer;