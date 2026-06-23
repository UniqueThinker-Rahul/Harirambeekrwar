import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, ShieldCheck, Lock, Star, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', dob: '', tob: '', pob: '', problemDesc: '', date: '', time: ''
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', phone: '', dob: '', tob: '', pob: '', problemDesc: '', date: '', time: '' });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-light-grey flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center max-w-md w-full">
          <div className="w-24 h-24 bg-green-50 text-tertiary rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-dark-grey mb-4">Request Received!</h2>
          <p className="text-medium-grey mb-8 text-lg">Thank you. Your consultation request is secured. Our team will contact you within 24 hours to confirm your exact time slot and share the payment link.</p>
          <button onClick={() => setStatus("idle")} className="bg-dark-grey text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors w-full shadow-md">Book Another Session</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Book Your Consultation | Arviend Sud" 
        description="Schedule a 1-on-1 personalized astrology or Vastu consultation with Arviend Sud. 100% confidential and secure booking."
      />
      <div className="min-h-screen bg-light-grey py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-4">Request Your Private Session</h1>
            <p className="text-medium-grey text-lg max-w-2xl mx-auto">Join the 10,000+ individuals who completely transformed their lives using our exact scientific astrological remedies. Please fill out your details precisely.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark-grey mb-2"><User className="inline w-4 h-4 mr-1 text-primary"/> Full Name</label>
                      <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="e.g. Rahul Sharma" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-grey mb-2"><Mail className="inline w-4 h-4 mr-1 text-primary"/> Email Address</label>
                      <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="rahul@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-grey mb-2"><Phone className="inline w-4 h-4 mr-1 text-primary"/> Phone Number (with country code)</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="+91 98765 43210" />
                  </div>

                  <div className="border-t border-gray-100 pt-8 mt-8">
                    <h3 className="text-xl font-bold text-dark-grey mb-6 flex items-center gap-2"><Calendar className="text-secondary"/> Exact Birth Details</h3>
                    <div className="p-4 bg-yellow-50/50 rounded-xl border border-yellow-100 mb-6 text-sm text-medium-grey">
                      <span className="font-semibold text-dark-grey">Why is this needed?</span> Accurate birth details are crucial for precise Kundli calculations and predictions.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-dark-grey mb-2">Date of Birth</label>
                        <input required name="dob" value={formData.dob} onChange={handleChange} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-dark-grey mb-2">Time of Birth</label>
                        <input required name="tob" value={formData.tob} onChange={handleChange} type="time" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-dark-grey mb-2">City of Birth</label>
                        <input required name="pob" value={formData.pob} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="e.g. New Delhi" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8 mt-8">
                     <h3 className="text-xl font-bold text-dark-grey mb-6">Consultation Context</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-dark-grey mb-2">Preferred Date</label>
                          <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-dark-grey mb-2">Preferred Time Slot</label>
                          <select required name="time" value={formData.time} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                            <option value="">Select Time</option>
                            <option value="Morning">Morning (10 AM - 1 PM)</option>
                            <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
                            <option value="Evening">Evening (6 PM - 8 PM)</option>
                          </select>
                        </div>
                     </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-grey mb-2"><MessageSquare className="inline w-4 h-4 mr-1 text-primary"/> What is your core problem or concern?</label>
                      <textarea required name="problemDesc" value={formData.problemDesc} onChange={handleChange} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400" placeholder="Please describe briefly (marriage, business losses, health hurdles, money issues etc.)"></textarea>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-medium-grey my-6 bg-green-50 p-4 rounded-xl border border-green-100">
                    <ShieldCheck className="w-6 h-6 text-tertiary" /> 
                    <span>Your data is <strong className="text-dark-grey">सुरक्षित (Secure)</strong> & 100% Confidential.</span>
                  </div>

                  <button disabled={status === "loading"} type="submit" className="w-full bg-dark-grey text-white font-bold text-xl py-5 rounded-full hover:bg-secondary transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center transform hover:-translate-y-1">
                    {status === "loading" ? 'Encrypting & Sending...' : <><Lock className="w-5 h-5 mr-2" /> Book Securely Now</>}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Assurances */}
            <div className="lg:col-span-1 space-y-8">
               <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-dark-grey mb-6">Booking Process</h3>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-dark-grey shrink-0">1</div>
                        <div>
                           <h4 className="font-bold text-dark-grey">Submit Form</h4>
                           <p className="text-sm text-medium-grey">Fill the precise details and click book.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-dark-grey shrink-0">2</div>
                        <div>
                           <h4 className="font-bold text-dark-grey">We Call You</h4>
                           <p className="text-sm text-medium-grey">Our assistant will call to verify.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-dark-grey shrink-0">3</div>
                        <div>
                           <h4 className="font-bold text-dark-grey">Payment & Confirmation</h4>
                           <p className="text-sm text-medium-grey">Pay securely via link to lock the slot.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-dark-grey shrink-0">4</div>
                        <div>
                           <h4 className="font-bold text-dark-grey">Get Your Call</h4>
                           <p className="text-sm text-medium-grey">Consult directly with Arviend Sud.</p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div className="bg-dark-grey p-8 rounded-[2rem] shadow-lg">
                  <div className="flex items-center gap-1 text-primary mb-3">
                     <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
                  </div>
                  <p className="text-white text-lg italic mb-4 leading-relaxed">"One session cleared up years of confusion for my career. The remedies were so simple yet deeply effective. Highly ethical and accurate."</p>
                  <p className="text-primary font-bold">- Priya M., Verified Client</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
