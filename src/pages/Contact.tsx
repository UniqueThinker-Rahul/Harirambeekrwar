import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => (
    <>
      <SEO 
        title="Contact Us | Support & Enquiries | HARI RAM BEEKRWAR" 
        description="Get in touch with Hari ram Beekrwar's team for consultation bookings, or general support. We are here to guide you securely."
      />
      {/* ─── Hero Banner ─── */}
      <section className="bg-hero-dark py-14 sm:py-24 px-4 text-center starfield" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/10 border border-white/20 text-amber-300 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Support Center</div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">Get in Touch</h1>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-light">Have questions about our services or booking? Our dedicated team is here to assist you — fastest response on WhatsApp.</p>
        </div>
      </section>

      <div className="min-h-screen py-10 sm:py-16 px-4 bg-light-grey pb-32">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 sm:gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-50 text-primary rounded-2xl sm:rounded-full flex items-center justify-center shrink-0 shadow-inner">
                             <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-0.5">Call Us</h3>
                              <p className="text-medium-grey text-base sm:text-lg font-medium">+91 9509610711</p>
                              <p className="text-xs text-gray-400 mt-0.5 flex items-center"><Clock className="w-3 h-3 mr-1" /> 10:00 AM - 6:00 PM (IST)</p>
                          </div>
                      </div>
                      <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 sm:gap-6 hover:shadow-lg transition-transform hover:-translate-y-1 relative overflow-hidden group">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 text-[#25D366] rounded-2xl sm:rounded-full flex items-center justify-center shrink-0 shadow-inner">
                             <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-0.5">WhatsApp</h3>
                              <a href="https://wa.me/919509610711?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noreferrer" className="text-medium-grey text-base sm:text-lg font-medium hover:text-[#25D366] transition-colors">+91 9509610711</a>
                              <p className="text-green-600 font-bold tracking-wide uppercase text-[11px] sm:text-xs">Fastest Response</p>
                          </div>
                      </div>
                      <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 sm:gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-50 text-primary rounded-2xl sm:rounded-full flex items-center justify-center shrink-0 shadow-inner">
                             <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-0.5">Email</h3>
                              <a href="mailto:harirambeekrwar@gmail.com" className="text-medium-grey text-base sm:text-lg font-medium hover:text-primary transition-colors break-all">harirambeekrwar@gmail.com</a>
                          </div>
                      </div>
                      <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 sm:gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-2xl sm:rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                             <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-0.5">Head Office</h3>
                              <p className="text-medium-grey text-sm sm:text-base leading-relaxed">Hari ram Beekrwar<br/>BHARATPUR 321001</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="lg:col-span-3 bg-white p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[3rem] shadow-2xl border border-gray-100">
                      <div className="flex items-center gap-2 text-primary mb-3 font-bold tracking-widest uppercase text-xs sm:text-sm">
                         <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5"/> Secure Messaging
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-dark-grey">Send a Message</h2>
                      <p className="text-medium-grey text-sm sm:text-base mb-6 sm:mb-8">All communications are completely secure and strictly confidential. We usually respond within 24 hours to all enquiries.</p>
                      
                      <form 
                        className="space-y-4 sm:space-y-6" 
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                             <div>
                               <label className="block text-xs sm:text-sm font-bold text-dark-grey mb-2">Full Name</label>
                               <input required name="fullName" type="text" placeholder="Your Name" className="w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50 text-base placeholder:text-gray-400 font-medium" />
                             </div>
                             <div>
                               <label className="block text-xs sm:text-sm font-bold text-dark-grey mb-2">Email Address</label>
                               <input required name="email" type="email" placeholder="Your Email" className="w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50 text-base placeholder:text-gray-400 font-medium" />
                             </div>
                          </div>
                          <div>
                             <label className="block text-xs sm:text-sm font-bold text-dark-grey mb-2">Subject</label>
                             <select name="subject" className="w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50 text-base text-dark-grey font-medium">
                                <option>General Enquiry</option>
                                <option>Consultation Booking</option>
                                <option>Report Status</option>
                             </select>
                          </div>
                          <div>
                            <label className="block text-xs sm:text-sm font-bold text-dark-grey mb-2">Your Message</label>
                            <textarea required name="message" rows={4} placeholder="How can we help you?" className="w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none bg-gray-50 text-base placeholder:text-gray-400 font-medium"></textarea>
                          </div>
                          <button type="submit" className="btn-sweep w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-primary-deep text-slate-950 py-4 sm:py-5 rounded-full transition-all font-black text-base sm:text-xl shadow-xl hover:-translate-y-1 transform flex justify-center items-center gap-2">
                             <ShieldCheck className="w-5 h-5" /> Send Secure Message via WhatsApp
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
);

export default Contact;
