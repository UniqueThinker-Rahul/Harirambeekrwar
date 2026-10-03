import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => (
    <>
      <SEO />
      {/* ─── Hero Banner ─── */}
      <section className="bg-hero-dark pt-10 pb-12 sm:pt-16 sm:pb-20 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
        {/* Ambient Lighting Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-36 -left-20 sm:top-40 sm:-left-20 w-64 sm:w-72 h-64 sm:h-72 bg-indigo-600/15 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Direct Client Support</span>
          </div>

          {/* Fluid Heading */}
          <h1 className="text-[1.75rem] xs:text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-5 text-white leading-[1.15] tracking-tight">
            Contact <span className="text-shimmer inline-block">Hari Ram Beekrwar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed font-normal mb-5 sm:mb-6 max-w-xl mx-auto">
            Questions about your birth chart or consultation booking? Reach out directly — expect a response within hours.
          </p>

          {/* Support Badges */}
          <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> 10:00 AM – 6:00 PM IST
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Priority Reply
            </span>
          </div>
        </div>
      </section>

      <div className="min-h-screen py-10 sm:py-16 px-4 bg-light-grey pb-32">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-2 space-y-4 sm:space-y-5" data-reveal="fade-right">
                      <a 
                        href="tel:+919509610711"
                        className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 flex items-center gap-4 sm:gap-5 hover:-translate-y-1 block group"
                      >
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-50 border border-amber-200/80 text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-amber-100 transition-all">
                             <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-0.5 leading-snug group-hover:text-secondary transition-colors">Call Direct</h3>
                              <p className="text-dark-grey text-sm sm:text-base font-bold">+91 9509610711</p>
                              <p className="text-xs text-medium-grey mt-0.5 flex items-center"><Clock className="w-3 h-3 mr-1 text-amber-500" /> 10:00 AM – 6:00 PM (IST)</p>
                          </div>
                      </a>

                      <a 
                        href="https://wa.me/919509610711?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation." 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 flex items-center gap-4 sm:gap-5 hover:-translate-y-1 block group relative overflow-hidden"
                      >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-xl pointer-events-none" />
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 border border-green-200/80 text-[#25D366] rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-green-100 transition-all">
                             <MessageCircle className="w-6 h-6 text-[#25D366]" />
                          </div>
                          <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-0.5 leading-snug group-hover:text-green-600 transition-colors">WhatsApp</h3>
                                <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full uppercase tracking-wider">Fastest</span>
                              </div>
                              <p className="text-dark-grey text-sm sm:text-base font-bold">+91 9509610711</p>
                              <p className="text-emerald-600 font-semibold text-xs mt-0.5 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Response Team
                              </p>
                          </div>
                      </a>

                      <a 
                        href="mailto:harirambeekrwar@gmail.com"
                        className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 flex items-center gap-4 sm:gap-5 hover:-translate-y-1 block group"
                      >
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-50 border border-amber-200/80 text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-amber-100 transition-all">
                             <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-0.5 leading-snug group-hover:text-secondary transition-colors">Official Email</h3>
                              <p className="text-medium-grey text-xs sm:text-sm font-semibold hover:text-primary transition-colors break-all">harirambeekrwar@gmail.com</p>
                              <p className="text-xs text-medium-grey mt-0.5">Written queries &amp; document submissions</p>
                          </div>
                      </a>

                      <div className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center gap-4 sm:gap-5 hover:-translate-y-1">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20">
                             <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-0.5 leading-snug">Head Office</h3>
                              <p className="text-medium-grey text-xs sm:text-sm leading-relaxed">Hari Ram Beekrwar<br/>Bharatpur, Rajasthan 321001, India</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="lg:col-span-3 bg-white p-6 sm:p-10 md:p-12 rounded-3xl sm:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden" data-reveal="fade-left">
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400" />
                      <div className="flex items-center gap-2 text-secondary mb-2 sm:mb-3 font-bold tracking-wider uppercase text-[11px] sm:text-xs">
                         <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5"/> Secure Messaging
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2.5 sm:mb-3 text-dark-grey leading-tight">Send a Message</h2>
                      <p className="text-medium-grey text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed">All communications are completely secure and strictly confidential. We usually respond within 24 hours to all enquiries.</p>
                      
                      <form 
                        className="space-y-4 sm:space-y-5" 
                        onSubmit={(e) => { 
                          e.preventDefault(); 
                          const fd = new FormData(e.currentTarget);
                          const waText = encodeURIComponent(
                            `*New Website Enquiry*\n\n` +
                            `*Name:* ${fd.get("fullName")}\n` +
                            `*Email:* ${fd.get("email")}\n` +
                            `*Subject:* ${fd.get("subject")}\n\n` +
                            `*Message:*\n${fd.get("message")}`
                          );
                          window.open(`https://wa.me/919509610711?text=${waText}`, '_blank');
                        }}
                      >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                             <div>
                               <label htmlFor="contact-name" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">Full Name *</label>
                               <input id="contact-name" required name="fullName" type="text" placeholder="Your Name" className="w-full px-4 sm:px-5 py-3.5 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all bg-gray-50/70 hover:bg-white text-base placeholder:text-gray-400 font-medium" />
                             </div>
                             <div>
                               <label htmlFor="contact-email" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">Email Address *</label>
                               <input id="contact-email" required name="email" type="email" placeholder="Your Email" className="w-full px-4 sm:px-5 py-3.5 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all bg-gray-50/70 hover:bg-white text-base placeholder:text-gray-400 font-medium" />
                             </div>
                          </div>
                          <div>
                             <label htmlFor="contact-subject" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">Subject *</label>
                             <select id="contact-subject" name="subject" className="w-full px-4 sm:px-5 py-3.5 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all bg-gray-50/70 hover:bg-white text-base text-dark-grey font-medium cursor-pointer">
                                <option>General Consultation Enquiry</option>
                                <option>1-on-1 Numerology Session (₹3,200)</option>
                                <option>Vastu Consultation (Home / Office)</option>
                                <option>Urgent Love Plan Consultation</option>
                                <option>Report Status or Existing Booking</option>
                             </select>
                          </div>
                          <div>
                            <label htmlFor="contact-message" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">Your Message *</label>
                            <textarea id="contact-message" required name="message" rows={4} placeholder="How can Hari Ram Ji assist you? Describe your question or requirement..." className="w-full px-4 sm:px-5 py-3.5 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all resize-none bg-gray-50/70 hover:bg-white text-base placeholder:text-gray-400 font-medium"></textarea>
                          </div>
                          <button type="submit" className="btn-sweep w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 py-4 sm:py-4.5 rounded-full transition-all font-black text-sm sm:text-base md:text-lg shadow-xl hover:-translate-y-1 transform flex justify-center items-center gap-2 cursor-pointer">
                             <ShieldCheck className="w-5 h-5 text-slate-950" /> Send Secure Message via WhatsApp
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
);

export default Contact;
