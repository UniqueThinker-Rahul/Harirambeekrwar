import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, ShieldCheck, Lock, CheckCircle, Zap, Send, CreditCard, Smartphone, Flame, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', dob: '', tob: '', pob: '', problemDesc: '' });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [paymentSuccessData, setPaymentSuccessData] = useState<{ paymentId?: string }>({});
  const [todayString, setTodayString] = useState('');

  useEffect(() => {
    const today = new Date();
    setTodayString(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadRazorpayScript = () => new Promise((resolve) => {
    if ((window as any).Razorpay) { resolve(true); return; }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

  const generateWhatsAppMessage = (paymentId: string) => encodeURIComponent(
    `*🌟 NEW NUMEROLOGY CONSULTATION & PAYMENT 🌟*\n\n` +
    `*👤 Client Name:* ${formData.name}\n*📞 Phone:* ${formData.phone}\n*📧 Email:* ${formData.email}\n\n` +
    `*📅 Date of Birth:* ${formData.dob}\n*⏰ Time of Birth:* ${formData.tob || 'Not Provided'}\n*📍 City of Birth:* ${formData.pob}\n\n` +
    `*📝 Concern:* ${formData.problemDesc}\n\n*💳 Paid Amount:* ₹3,200\n*🆔 Payment ID:* ${paymentId}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) { alert("Razorpay failed to load. Check your internet."); setStatus("idle"); return; }
      const orderResponse = await fetch('/api/create-order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: 3200 * 100 }) });
      if (!orderResponse.ok) throw new Error("Failed to create order.");
      const orderData = await orderResponse.json();
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData.amount, currency: orderData.currency,
        name: "Hari Ram Beekrwar", description: "Numerology Consultation (₹3,200 Only)",
        image: "/Resource/logo.jpeg", order_id: orderData.id,
        handler: async function (response: any) {
          try {
            setStatus("loading");
            const verifyResponse = await fetch('/api/verify-payment', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, razorpay_signature: response.razorpay_signature }) });
            const verifyData = await verifyResponse.json();
            if (verifyResponse.ok && verifyData.success) {
              setPaymentSuccessData({ paymentId: response.razorpay_payment_id });
              setStatus("success");
              window.open(`https://wa.me/919509610711?text=${generateWhatsAppMessage(response.razorpay_payment_id)}`, '_blank');
            } else { alert("Payment Verification Failed! " + (verifyData.error || "")); setStatus("idle"); }
          } catch { alert("Error during verification."); setStatus("idle"); }
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        theme: { color: "#F59E0B" },
        modal: { ondismiss: function () { setStatus("idle"); } }
      };
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) { alert("Payment not completed: " + (response.error?.description || "")); setStatus("idle"); });
      paymentObject.open();
    } catch { alert("Something went wrong while initiating payment."); setStatus("error"); }
  };

  if (status === "success") {
    const paymentId = paymentSuccessData.paymentId || "CONFIRMED";
    const waUrl = `https://wa.me/919509610711?text=${generateWhatsAppMessage(paymentId)}`;
    return (
      <div className="min-h-screen bg-light-grey flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center max-w-lg w-full">
          <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-100 shadow-inner"><CheckCircle className="w-12 h-12" /></div>
          <h2 className="text-3xl font-bold text-dark-grey mb-3">Payment Successful! 🎉</h2>
          <p className="text-medium-grey mb-6 leading-relaxed">Thank you, <strong className="text-dark-grey">{formData.name || 'Client'}</strong>. Your payment is confirmed. Complete the booking by sending your details on WhatsApp now.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-7 text-sm text-gray-600">Payment ID: <span className="font-mono font-bold text-dark-grey">{paymentId}</span></div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-7 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Your Next Steps</p>
            <div className="space-y-3">
              {[{ n: '1', label: 'Payment Received', done: true }, { n: '2', label: 'Send details on WhatsApp (button below)', done: false }, { n: '3', label: 'Hari Ram Ji will confirm your slot within 2–4 hrs', done: false }].map(s => (
                <div key={s.n} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${s.done ? 'bg-green-500 text-white' : 'bg-amber-200 text-amber-900'}`}>{s.done ? '✓' : s.n}</div>
                  <span className={`text-sm font-medium ${s.done ? 'text-green-700 line-through' : 'text-dark-grey'}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <a href={waUrl} target="_blank" rel="noreferrer" className="btn-sweep bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20ba59] transition-all w-full shadow-md flex items-center justify-center gap-2 mb-4 text-base"><Send className="w-5 h-5" /> Send Details on WhatsApp Now</a>
          <button onClick={() => { setStatus("idle"); setFormData({ name: '', email: '', phone: '', dob: '', tob: '', pob: '', problemDesc: '' }); }} className="bg-gray-100 text-dark-grey px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-full">Book Another Session</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-light-grey pb-24">
        {/* Cosmic Hero Section */}
        <section className="bg-hero-dark text-white pt-10 pb-12 sm:pt-16 sm:pb-20 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute top-36 -left-20 sm:top-40 sm:-left-20 w-64 sm:w-72 h-64 sm:h-72 bg-indigo-600/15 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Promo Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-red-500/20 border border-red-400/40 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-5 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
              </span>
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Limited Time — 50% Discount Active</span>
            </div>

            {/* Fluid Heading */}
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight leading-[1.15]">
              Request Your Private <span className="text-shimmer inline-block">Consultation</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300/90 max-w-xl mx-auto leading-relaxed font-normal">
              Join 2,200+ clients with a private, 100% confidential consultation with <strong className="text-white font-medium">Hari Ram Beekrwar</strong>.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
            {/* Form — on mobile appears second (after price sidebar) */}
            <div data-reveal="fade-right" className="lg:col-span-2 bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden order-last lg:order-first relative">
              {/* Top Luxury Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />

              <div className="p-5 sm:p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="booking-name" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">
                        <User className="inline w-3.5 h-3.5 mr-1 text-primary" /> Full Name *
                      </label>
                      <input
                        id="booking-name"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder:text-gray-400 font-medium text-base shadow-inner"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-email" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">
                        <Mail className="inline w-3.5 h-3.5 mr-1 text-primary" /> Email Address *
                      </label>
                      <input
                        id="booking-email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder:text-gray-400 font-medium text-base shadow-inner"
                        placeholder="rahul@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="booking-phone" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">
                      <Phone className="inline w-3.5 h-3.5 mr-1 text-primary" /> WhatsApp Number *
                    </label>
                    <input
                      id="booking-phone"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder:text-gray-400 font-medium text-base shadow-inner"
                      placeholder="+91 95096 10711"
                    />
                  </div>
                  <div className="border-t border-gray-100 pt-6 sm:pt-8">
                    <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-2 flex items-center gap-2">
                      <Calendar className="text-secondary w-5 h-5" /> Exact Birth Details
                    </h3>
                    <div className="p-3.5 sm:p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 mb-5 text-xs sm:text-sm text-medium-grey shadow-xs">
                      <span className="font-bold text-dark-grey">Why needed?</span> Accurate birth details are crucial for calculating your Life Path and personal cosmic vibrations.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="booking-dob" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">Date of Birth *</label>
                        <input
                          id="booking-dob"
                          required
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          max={todayString}
                          type="date"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all font-medium text-base shadow-inner"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-tob" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">
                          Time of Birth <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="booking-tob"
                          name="tob"
                          value={formData.tob}
                          onChange={handleChange}
                          type="time"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all text-base shadow-inner"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-pob" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">City of Birth *</label>
                        <input
                          id="booking-pob"
                          required
                          name="pob"
                          value={formData.pob}
                          onChange={handleChange}
                          type="text"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder:text-gray-400 font-medium text-base shadow-inner"
                          placeholder="e.g. Bharatpur"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-6 sm:pt-8">
                    <label htmlFor="booking-problem" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1.5">
                      <MessageSquare className="inline w-3.5 h-3.5 mr-1 text-primary" /> What is your core problem or concern? *
                    </label>
                    <textarea
                      id="booking-problem"
                      required
                      name="problemDesc"
                      value={formData.problemDesc}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all resize-none placeholder:text-gray-400 font-medium text-base shadow-inner"
                      placeholder="Describe briefly — Relationship/Love hurdles, Career/Business delays, Health/Money issues etc."
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-medium-grey my-2 bg-emerald-50/80 p-3.5 sm:p-4 rounded-xl border border-emerald-200/80">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                    <span>Your data is <strong className="text-dark-grey">सुरक्षित (Secure)</strong> &amp; 100% Confidential.</span>
                  </div>
                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="btn-sweep w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm sm:text-base md:text-lg py-4 sm:py-5 rounded-full transition-all shadow-xl flex justify-center items-center gap-2 transform hover:-translate-y-1 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Opening Secure Gateway...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 sm:w-5 sm:h-5" /> Pay ₹3,200 &amp; Book Consultation
                      </>
                    )}
                  </button>
                  <div className="flex flex-col items-center gap-2 pt-1">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center text-[11px] sm:text-xs text-medium-grey">
                      <span className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><Lock className="w-3 h-3 text-green-600" /> SSL Encrypted</span>
                      <span className="hidden sm:flex items-center gap-1 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><CreditCard className="w-3 h-3 text-blue-500" /> Cards &amp; Net Banking</span>
                      <span className="hidden sm:flex items-center gap-1 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><Smartphone className="w-3 h-3 text-indigo-500" /> UPI &amp; Wallets</span>
                      <span className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><ShieldCheck className="w-3 h-3 text-amber-500" /> Razorpay</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar — shows FIRST on mobile (order-first), right column on desktop */}
            <div className="lg:col-span-1 space-y-7 order-first lg:order-last" data-reveal="fade-left">
              <div className="bg-gradient-to-br from-cosmic-navy via-slate-900 to-cosmic-navy text-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-indigo-800/80 relative overflow-hidden">
                {/* Top Luxury Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[11px] sm:text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full mb-4 sm:mb-5 shadow-sm animate-pulse">
                  <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> 50% OFF SPECIAL OFFER
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 leading-snug text-white">Numerology Consultation</h3>
                <p className="text-amber-300 font-semibold text-xs mb-4 uppercase tracking-wider">Voice / Video Call · 1-on-1</p>
                <div className="border-t border-b border-indigo-800/80 py-4 mb-5">
                  <div className="flex justify-between items-center text-gray-400 mb-2 text-xs sm:text-sm"><span>Standard Fee:</span><span className="line-through text-base sm:text-lg">₹6,400</span></div>
                  <div className="flex justify-between items-center text-emerald-400 mb-2 text-xs sm:text-sm font-bold"><span>Discount (50%):</span><span>− ₹3,200</span></div>
                  <div className="flex justify-between items-center text-white font-bold text-base sm:text-lg pt-2 border-t border-indigo-800/80"><span>Total Payable:</span><span className="text-2xl sm:text-3xl text-amber-300 font-black">₹3,200/-</span></div>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-300 mb-5">
                  {['Full Numerology Analysis', 'Instant Remedies & Guidance', 'Priority 24-Hour Slot Allocation', 'Dedicated Q&A Segment'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919509610711?text=Hello%20Hariram%20Ji,%20I%20want%20to%20book%20a%20consultation%20for%20₹3200"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] text-white py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#20b858] transition-all shadow-md hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" /> Need Help? Chat on WhatsApp
                </a>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-lg border border-gray-100 relative overflow-hidden">
                {/* Top Subtle Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500" />
                <h3 className="text-lg sm:text-xl font-bold text-dark-grey mb-5 leading-snug">Booking Process</h3>
                <ul className="space-y-5">
                  {[
                    { n: '1', color: 'bg-amber-400 text-slate-950', title: 'Submit & Pay', desc: 'Fill your exact birth details and pay ₹3,200 securely via Razorpay.' },
                    { n: '2', color: 'bg-[#25D366] text-white', title: 'Auto WhatsApp Send', desc: 'After payment, you are auto-redirected to WhatsApp to confirm your details.' },
                    { n: '3', color: 'bg-dark-grey text-white', title: 'Personal Consultation', desc: 'Consult directly with Hari Ram Beekrwar & receive tailored remedies.' }
                  ].map(s => (
                    <li key={s.n} className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center font-black text-sm shrink-0 shadow-xs`}>{s.n}</div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-dark-grey">{s.title}</h4>
                        <p className="text-xs sm:text-sm text-medium-grey mt-0.5 leading-relaxed">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 text-center shadow-xs">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-bold text-dark-grey text-xs sm:text-sm">100% Secure &amp; Confidential</p>
                <p className="text-[11px] sm:text-xs text-medium-grey mt-1 leading-relaxed">Your personal data is encrypted and never shared with any third party.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
