import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => (
    <>
      <SEO 
        title="Contact Us | Support & Enquiries | HARIRAM BEEKRWAR" 
        description="Get in touch with Hariram Beekrwar's team for consultation bookings, or general support. We are here to guide you securely."
      />
      <div className="min-h-screen py-24 px-4 bg-light-grey block relative pb-32">
          {/* Background Map Placeholder Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                 <div className="inline-block bg-white border border-gray-200 text-secondary px-6 py-2 rounded-full font-bold mb-6 text-sm tracking-widest uppercase shadow-sm">Support Center</div>
                 <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark-grey">Get in Touch</h1>
                 <p className="text-xl text-medium-grey max-w-2xl mx-auto leading-relaxed">Have questions about our reports or booking a private consultation? Our dedicated support team is here to assist you promptly.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-2 space-y-6">
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                          <div className="w-16 h-16 bg-yellow-50 text-primary rounded-full flex items-center justify-center shrink-0 shadow-inner">
                             <Phone className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-dark-grey mb-1">Call Us</h3>
                              <p className="text-medium-grey text-lg font-medium">+91 9509610711</p>
                              <p className="text-sm text-gray-400 mt-1 flex items-center"><Clock className="w-3 h-3 mr-1" /> 10:00 AM - 6:00 PM (IST)</p>
                          </div>
                      </div>
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-transform hover:-translate-y-1 relative overflow-hidden group">
                          <div className="w-16 h-16 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow-inner">
                             <MessageCircle className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-dark-grey mb-1">WhatsApp</h3>
                              <a href="https://wa.me/919509610711" target="_blank" rel="noreferrer" className="text-medium-grey text-lg font-medium hover:text-[#25D366] transition-colors">+91 9509610711</a>
                              <p className="text-sm text-green-600 font-bold mt-1 tracking-wide uppercase text-xs">Fastest Response</p>
                          </div>
                      </div>
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                          <div className="w-16 h-16 bg-yellow-50 text-primary rounded-full flex items-center justify-center shrink-0 shadow-inner">
                             <Mail className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-dark-grey mb-1">Email</h3>
                              <a href="mailto:contact@harirambeekrwar.com" className="text-medium-grey text-lg font-medium hover:text-primary transition-colors">contact@harirambeekrwar.com</a>
                          </div>
                      </div>
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">
                          <div className="w-16 h-16 bg-dark-grey text-white rounded-full flex items-center justify-center shrink-0 shadow-inner">
                             <MapPin className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-dark-grey mb-1">Head Office</h3>
                              <p className="text-medium-grey text-lg leading-relaxed">Hariram Beekrwar<br/>BHARATPUR 321001</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="lg:col-span-3 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100">
                      <div className="flex items-center gap-2 text-primary mb-4 font-bold tracking-widest uppercase text-sm">
                         <ShieldCheck className="w-5 h-5"/> Secure Messaging
                      </div>
                      <h2 className="text-4xl font-bold mb-4 text-dark-grey">Send a Message</h2>
                      <p className="text-medium-grey text-lg mb-10">All communications are completely secure and strictly confidential. We usually respond within 24 hours to all enquiries.</p>
                      
                      <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div>
                               <label className="block text-sm font-bold text-dark-grey mb-3">Full Name</label>
                               <input required type="text" placeholder="Your Name" className="w-full px-6 py-5 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50 text-lg placeholder:text-gray-400" />
                             </div>
                             <div>
                               <label className="block text-sm font-bold text-dark-grey mb-3">Email Address</label>
                               <input required type="email" placeholder="Your Email" className="w-full px-6 py-5 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50 text-lg placeholder:text-gray-400" />
                             </div>
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-dark-grey mb-3">Subject</label>
                             <select className="w-full px-6 py-5 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50 text-lg text-dark-grey">
                                <option>General Enquiry</option>
                                <option>Consultation Booking</option>
                                <option>Report Status</option>
                             </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-dark-grey mb-3">Your Message</label>
                            <textarea required rows={5} placeholder="How can we help you?" className="w-full px-6 py-5 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none bg-gray-50 text-lg placeholder:text-gray-400"></textarea>
                          </div>
                          <button type="submit" className="w-full bg-dark-grey text-white py-6 rounded-full hover:bg-secondary transition-all font-bold text-xl shadow-xl hover:-translate-y-1 transform flex justify-center items-center gap-2">
                             Send Secure Message
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
);

export default Contact;
