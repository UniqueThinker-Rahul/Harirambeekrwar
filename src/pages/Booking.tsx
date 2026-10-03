import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, ShieldCheck, Lock, CheckCircle, Zap, MessageCircle, Send, CreditCard, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';

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
        name: "Hari ram Beekrwar", description: "Numerology Consultation (₹3,200 Only)",
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
      <SEO title="Book Numerology Consultation | HARI RAM BEEKRWAR" description="Schedule a 1-on-1 personalized full numerology consultation with Hari ram Beekrwar. 100% confidential and secure booking." />
      <div className="min-h-screen bg-light-grey py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-bold mb-4 shadow-sm animate-pulse"><Zap className="w-4 h-4" /> LIMITED TIME — 50% DISCOUNT ACTIVE</div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-4">Request Your Private Consultation</h1>
            <p className="text-medium-grey text-lg max-w-2xl mx-auto">Join 2,200+ individuals who transformed their lives. Fill in your details and pay securely to lock your slot.</p>
          </div>

          {/* Slot Indicator */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="bg-white border border-amber-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block animate-pulse shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-medium-grey mb-1.5">Today's Available Slots</p>
                <div className="flex gap-1.5">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-3 bg-green-400 rounded-sm" />)}
                  {[4,5,6,7,8].map(i => <div key={i} className="w-8 h-3 bg-gray-200 rounded-sm" />)}
                </div>
              </div>
              <div className="text-right shrink-0"><p className="font-black text-2xl text-secondary">3</p><p className="text-xs text-medium-grey">Remaining</p></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-dark-grey mb-2"><User className="inline w-4 h-4 mr-1 text-primary" /> Full Name *</label><input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium" placeholder="e.g. Rahul Sharma" /></div>
                    <div><label className="block text-sm font-bold text-dark-grey mb-2"><Mail className="inline w-4 h-4 mr-1 text-primary" /> Email Address *</label><input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium" placeholder="rahul@example.com" /></div>
                  </div>
                  <div><label className="block text-sm font-bold text-dark-grey mb-2"><Phone className="inline w-4 h-4 mr-1 text-primary" /> WhatsApp Number *</label><input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium" placeholder="+91 95096 10711" /></div>
                  <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-xl font-bold text-dark-grey mb-2 flex items-center gap-2"><Calendar className="text-secondary w-5 h-5" /> Exact Birth Details</h3>
                    <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-100 mb-6 text-sm text-medium-grey"><span className="font-bold text-dark-grey">Why needed?</span> Accurate birth details are crucial for calculating your Life Path and personal cosmic vibrations.</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div><label className="block text-sm font-bold text-dark-grey mb-2">Date of Birth *</label><input required name="dob" value={formData.dob} onChange={handleChange} max={todayString} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium" /></div>
                      <div><label className="block text-sm font-bold text-dark-grey mb-2">Time of Birth <span className="text-gray-400 font-normal">(Optional)</span></label><input name="tob" value={formData.tob} onChange={handleChange} type="time" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" /></div>
                      <div><label className="block text-sm font-bold text-dark-grey mb-2">City of Birth *</label><input required name="pob" value={formData.pob} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium" placeholder="e.g. Bharatpur" /></div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-8">
                    <label className="block text-sm font-bold text-dark-grey mb-2"><MessageSquare className="inline w-4 h-4 mr-1 text-primary" /> What is your core problem or concern? *</label>
                    <textarea required name="problemDesc" value={formData.problemDesc} onChange={handleChange} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 font-medium" placeholder="Describe briefly — Relationship/Love hurdles, Career/Business delays, Health/Money issues etc." />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-medium-grey my-2 bg-green-50 p-4 rounded-xl border border-green-100">
                    <ShieldCheck className="w-5 h-5 text-tertiary" /><span>Your data is <strong className="text-dark-grey">सुरक्षित (Secure)</strong> & 100% Confidential.</span>
                  </div>
                  <button disabled={status === "loading"} type="submit" className="btn-sweep w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-xl py-5 rounded-full transition-all shadow-xl flex justify-center items-center gap-2 transform hover:-translate-y-1 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === "loading" ? <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Opening Secure Gateway...</> : <><Lock className="w-5 h-5" /> Pay ₹3,200 & Book Consultation</>}
                  </button>
                  <div className="flex flex-col items-center gap-3 pt-1">
                    <div className="flex items-center gap-4 flex-wrap justify-center text-xs text-medium-grey">
                      <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full"><Lock className="w-3.5 h-3.5 text-green-600" /> SSL Encrypted</span>
                      <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full"><CreditCard className="w-3.5 h-3.5 text-blue-500" /> Cards / Net Banking</span>
                      <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full"><Smartphone className="w-3.5 h-3.5 text-indigo-500" /> UPI / Wallets</span>
                      <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Powered by Razorpay</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-7">
              <div className="bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy text-white p-8 rounded-[2rem] shadow-xl border border-indigo-800/80 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
                <div className="inline-block bg-red-600 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full mb-5 animate-pulse">⚡ 50% OFF SPECIAL OFFER</div>
                <h3 className="text-2xl font-bold mb-1">Numerology Consultation</h3>
                <p className="text-amber-300 font-semibold text-xs mb-4 uppercase tracking-wider">Voice / Video Call · 1-on-1</p>
                <div className="border-t border-b border-indigo-800/80 py-4 mb-5">
                  <div className="flex justify-between items-center text-gray-400 mb-2 text-sm"><span>Standard Fee:</span><span className="line-through text-lg">₹6,400</span></div>
                  <div className="flex justify-between items-center text-emerald-400 mb-2 text-sm font-bold"><span>Discount (50%):</span><span>− ₹3,200</span></div>
                  <div className="flex justify-between items-center text-white font-bold text-xl pt-2 border-t border-indigo-800/80"><span>Total Payable:</span><span className="text-3xl text-amber-300 font-black">₹3,200/-</span></div>
                </div>
                <ul className="space-y-3 text-sm text-gray-300 mb-5">
                  {['Full Numerology Analysis', 'Instant Remedies & Guidance', 'Priority 24-Hour Slot Allocation', 'Dedicated Q&A Segment'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}</li>
                  ))}
                </ul>
                <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-3 mb-5 text-xs text-amber-200/90 leading-relaxed">📌 <strong>Vastu Consultation:</strong> Starting ₹20,000/- (Separate service).</div>
                <a href="https://wa.me/919509610711?text=Hello%20Hariram%20Ji,%20I%20want%20to%20book%20a%20consultation%20for%20₹3200" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white py-3 px-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors">
                  <MessageCircle className="w-4 h-4" /> Need Help? Chat on WhatsApp
                </a>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-dark-grey mb-6">Booking Process</h3>
                <ul className="space-y-5">
                  {[{ n: '1', color: 'bg-amber-400 text-slate-950', title: 'Submit & Pay', desc: 'Fill your exact birth details and pay ₹3,200 securely via Razorpay.' }, { n: '2', color: 'bg-[#25D366] text-white', title: 'Auto WhatsApp Send', desc: 'After payment, you are auto-redirected to WhatsApp to confirm your details.' }, { n: '3', color: 'bg-dark-grey text-white', title: 'Personal Consultation', desc: 'Consult directly with Hari ram Beekrwar & receive tailored remedies.' }].map(s => (
                    <li key={s.n} className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center font-black text-sm shrink-0`}>{s.n}</div>
                      <div><h4 className="font-bold text-dark-grey">{s.title}</h4><p className="text-sm text-medium-grey mt-0.5 leading-relaxed">{s.desc}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 text-center">
                <ShieldCheck className="w-8 h-8 text-tertiary mx-auto mb-2" />
                <p className="font-bold text-dark-grey text-sm">100% Secure & Confidential</p>
                <p className="text-xs text-medium-grey mt-1">Your personal data is encrypted and never shared with any third party.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
