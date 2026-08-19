import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, ShieldCheck, Lock, Star, CheckCircle, Zap, MessageCircle, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', dob: '', tob: '', pob: '', problemDesc: '', date: '', time: ''
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [paymentSuccessData, setPaymentSuccessData] = useState<{ paymentId?: string }>({});
  const [todayString, setTodayString] = useState('');

  // Lock dates: disable past dates for booking & future dates for birth date
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setTodayString(`${year}-${month}-${day}`);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Dynamically load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Formats all submitted details for WhatsApp delivery
  const generateWhatsAppMessage = (paymentId: string) => {
    return encodeURIComponent(
      `*🌟 NEW CONSULTATION BOOKING & PAYMENT 🌟*\n\n` +
      `*👤 Client Name:* ${formData.name}\n` +
      `*📞 Phone:* ${formData.phone}\n` +
      `*📧 Email:* ${formData.email}\n\n` +
      `*📅 Date of Birth:* ${formData.dob}\n` +
      `*⏰ Time of Birth:* ${formData.tob}\n` +
      `*📍 City of Birth:* ${formData.pob}\n\n` +
      `*🗓️ Preferred Date:* ${formData.date}\n` +
      `*⏳ Preferred Slot:* ${formData.time}\n` +
      `*📝 Concern:* ${formData.problemDesc}\n\n` +
      `*💳 Paid Amount:* ₹3,200 (50% Off Special)\n` +
      `*🆔 Payment ID:* ${paymentId}`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. Load Razorpay Script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert("Razorpay payment gateway failed to load. Please check your internet connection.");
        setStatus("idle");
        return;
      }

      // 2. Call backend to create order
      const amountInPaise = 3200 * 100;
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInPaise }),
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create order. Server returned " + orderResponse.status);
      }
      
      const orderData = await orderResponse.json();

      // 3. Open Razorpay Checkout Modal
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
        amount: orderData.amount, 
        currency: orderData.currency,
        name: "Hariram Beekrwar",
        description: "Priority Consultation (50% Off Special)",
        image: "/Resource/logo.jpeg",
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            setStatus("loading");
            // 4. Verify payment signature on backend
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyResponse.ok && verifyData.success) {
              setPaymentSuccessData({ paymentId: response.razorpay_payment_id });
              setStatus("success");
              
              // Open WhatsApp automatically
              const waUrl = `https://wa.me/919509610711?text=${generateWhatsAppMessage(response.razorpay_payment_id)}`;
              window.open(waUrl, '_blank');
            } else {
              alert("Payment Verification Failed! " + (verifyData.error || ""));
              setStatus("idle");
            }
          } catch (verifyError) {
            console.error(verifyError);
            alert("Error communicating with server during verification.");
            setStatus("idle");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#FFD700",
        },
        modal: {
          ondismiss: function () {
            setStatus("idle");
          }
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        alert("Payment was not completed: " + (response.error?.description || "Transaction cancelled"));
        setStatus("idle");
      });

      paymentObject.open();

    } catch (err) {
      console.error(err);
      alert("Something went wrong while initiating the payment.");
      setStatus("error");
    }
  };

  if (status === "success") {
    const paymentId = paymentSuccessData.paymentId || "CONFIRMED";
    const waUrl = `https://wa.me/919509610711?text=${generateWhatsAppMessage(paymentId)}`;

    return (
      <div className="min-h-screen bg-light-grey flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center max-w-lg w-full">
          <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100 shadow-inner">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-dark-grey mb-3">Payment Successful!</h2>
          <p className="text-medium-grey mb-6 text-lg">
            Thank you, <strong className="text-dark-grey">{formData.name || 'Client'}</strong>. Your consultation is booked. Please send your details to our official WhatsApp to confirm your slot immediately.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-6 text-sm text-gray-600">
            Payment ID: <span className="font-mono font-bold text-dark-grey">{paymentId}</span>
          </div>

          <a 
            href={waUrl}
            target="_blank" 
            rel="noreferrer"
            className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20ba59] transition-all w-full shadow-md flex items-center justify-center gap-2 mb-4"
          >
            <Send className="w-5 h-5" /> Send Details on WhatsApp
          </a>

          <button 
            onClick={() => { 
              setStatus("idle"); 
              setFormData({ name: '', email: '', phone: '', dob: '', tob: '', pob: '', problemDesc: '', date: '', time: '' }); 
            }} 
            className="bg-dark-grey text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors w-full"
          >
            Book Another Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Book Your Consultation | HARIRAM BEEKRWAR" 
        description="Schedule a 1-on-1 personalized astrology or Vastu consultation with Hariram Beekrwar. 100% confidential and secure booking."
      />
      <div className="min-h-screen bg-light-grey py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-bold mb-4 shadow-sm animate-pulse">
              <Zap className="w-4 h-4" /> LIMITED TIME 50% DISCOUNT ACTIVE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-4">Request Your Private Consultation</h1>
            <p className="text-medium-grey text-lg max-w-2xl mx-auto">
              Join 10,000+ individuals who transformed their lives. Fill out your details below to lock your slot with Hariram Beekrwar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark-grey mb-2"><User className="inline w-4 h-4 mr-1 text-primary"/> Full Name *</label>
                      <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="e.g. Rahul Sharma" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-grey mb-2"><Mail className="inline w-4 h-4 mr-1 text-primary"/> Email Address *</label>
                      <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="rahul@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-grey mb-2"><Phone className="inline w-4 h-4 mr-1 text-primary"/> Phone Number (WhatsApp Enabled) *</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="+91 95096 10711" />
                  </div>

                  {/* Birth Details */}
                  <div className="border-t border-gray-100 pt-8 mt-8">
                    <h3 className="text-xl font-bold text-dark-grey mb-6 flex items-center gap-2"><Calendar className="text-secondary"/> Exact Birth Details</h3>
                    <div className="p-4 bg-yellow-50/50 rounded-xl border border-yellow-100 mb-6 text-sm text-medium-grey">
                      <span className="font-semibold text-dark-grey">Why is this needed?</span> Accurate birth details are crucial for precise Numerology and Kundli calculations.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-dark-grey mb-2">Date of Birth *</label>
                        <input required name="dob" value={formData.dob} onChange={handleChange} max={todayString} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-dark-grey mb-2">Time of Birth *</label>
                        <input required name="tob" value={formData.tob} onChange={handleChange} type="time" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-dark-grey mb-2">City/Place of Birth *</label>
                        <input required name="pob" value={formData.pob} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="e.g. Bharatpur" />
                      </div>
                    </div>
                  </div>

                  {/* Slot & Problem Context */}
                  <div className="border-t border-gray-100 pt-8 mt-8">
                     <h3 className="text-xl font-bold text-dark-grey mb-6">Consultation Preferences</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-dark-grey mb-2">Preferred Date *</label>
                          <input required name="date" value={formData.date} onChange={handleChange} min={todayString} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-dark-grey mb-2">Preferred Time Slot *</label>
                          <select required name="time" value={formData.time} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                            <option value="">Select Slot</option>
                            <option value="Morning">Morning (10 AM - 1 PM)</option>
                            <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
                            <option value="Evening">Evening (6 PM - 8 PM)</option>
                          </select>
                        </div>
                     </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-grey mb-2"><MessageSquare className="inline w-4 h-4 mr-1 text-primary"/> What is your core problem or concern? *</label>
                      <textarea required name="problemDesc" value={formData.problemDesc} onChange={handleChange} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400" placeholder="Please describe briefly (Relationship/Love hurdles, Career/Business delays, Vastu defects, Health/Money issues etc.)"></textarea>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-medium-grey my-6 bg-green-50 p-4 rounded-xl border border-green-100">
                    <ShieldCheck className="w-6 h-6 text-tertiary" /> 
                    <span>Your data is <strong className="text-dark-grey">सुरक्षित (Secure)</strong> & 100% Confidential.</span>
                  </div>

                  {/* Submission and Payment Button */}
                  <button 
                    disabled={status === "loading"}
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-5 rounded-full transition-all shadow-xl flex justify-center items-center transform hover:-translate-y-1 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? 'Opening Secure Gateway...' : <><Lock className="w-5 h-5 mr-2" /> Pay ₹3200 & Book Consultation</>}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Pricing & Guarantees */}
            <div className="lg:col-span-1 space-y-8">
               
               {/* 50% Off Plan Summary Card */}
               <div className="bg-dark-grey text-white p-8 rounded-[2rem] shadow-xl border border-gray-800 relative overflow-hidden">
                  <div className="inline-block bg-red-600 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full mb-4 animate-pulse">
                    ⚡ 50% OFF SPECIAL OFFER
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Priority On-Call Consultation</h3>
                  <p className="text-gray-300 text-sm mb-6">One-on-One Voice / Video Call directly with Hariram Beekrwar</p>

                  <div className="border-t border-b border-gray-700 py-4 mb-6">
                    <div className="flex justify-between items-center text-gray-400 mb-2">
                       <span>Standard Fee:</span>
                       <span className="line-through text-lg">₹6,400</span>
                    </div>
                    <div className="flex justify-between items-center text-green-400 mb-2 text-sm">
                       <span>Discount (50%):</span>
                       <span>- ₹3,200</span>
                    </div>
                    <div className="flex justify-between items-center text-white font-bold text-xl pt-2 border-t border-gray-700">
                       <span>Total Payable:</span>
                       <span className="text-3xl text-primary font-black">₹3,200/-</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-gray-300 mb-6">
                     <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> Full Numerology & Vastu Analysis</li>
                     <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> Instant Remedies & Guidance</li>
                     <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> Priority 24-Hour Slot Allocation</li>
                  </ul>

                  <a 
                    href="https://wa.me/919509610711?text=Hello%20Hariram%20Ji,%20I%20want%20to%20book%20a%20consultation%20for%20₹3200" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-[#25D366] text-white py-3 px-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Need Help? Chat on WhatsApp
                  </a>
               </div>

               {/* Process Steps */}
               <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-dark-grey mb-6">Booking Process</h3>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-dark-grey shrink-0">1</div>
                        <div>
                           <h4 className="font-bold text-dark-grey">Submit & Pay</h4>
                           <p className="text-sm text-medium-grey">Fill your exact birth details and pay securely via Razorpay.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">2</div>
                        <div>
                           <h4 className="font-bold text-dark-grey">Auto WhatsApp Send</h4>
                           <p className="text-sm text-medium-grey">Upon successful payment, you are automatically redirected to WhatsApp to send your details.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-dark-grey shrink-0">3</div>
                        <div>
                           <h4 className="font-bold text-dark-grey">Personal Consultation</h4>
                           <p className="text-sm text-medium-grey">Consult directly with Hariram Beekrwar & receive remedies.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;