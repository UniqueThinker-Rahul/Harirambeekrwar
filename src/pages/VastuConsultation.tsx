import React, { useState } from 'react';
import { Compass, CheckCircle, Phone, Home, Building2, Factory, MapPin, ShieldCheck, Sparkles, Clock, ArrowRight, ChevronDown, ChevronUp, Info, Facebook, Youtube, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppIcon from '../components/WhatsAppIcon';

const VASTU_FAQS = [
  {
    q: 'Do I need to break walls or demolish structures for Vastu corrections?',
    a: 'No. Hari Ram Beekrwar specializes strictly in non-invasive, no-demolition remedies. Corrections are achieved through directional adjustments, element balancing (Earth, Water, Fire, Air, Space), color therapies, metal strips, and energy alignment — respecting your existing structure and investment.'
  },
  {
    q: 'Can a Vastu consultation be conducted online using floor plans?',
    a: 'Yes, absolutely. Most consultations are successfully completed online. All you need to share is your property layout/map with precise North marking, along with short video walkthroughs or photos of key areas.'
  },
  {
    q: 'Which types of properties do you evaluate?',
    a: 'We evaluate residential flats, independent houses, villas, corporate offices, retail stores, commercial complexes, industrial plants, warehouses, and open plots before purchase.'
  },
  {
    q: 'How does combining Numerology with Vastu provide better results?',
    a: 'While Vastu aligns the directional energies of the physical structure, Numerology decodes the personal vibrations of the occupants. Harmonizing both ensures the property directly supports your personal Life Path and professional ambitions.'
  },
  {
    q: 'How do I get started with an enquiry?',
    a: 'Simply fill out the enquiry form below or click the WhatsApp button. You can share your property type, city, and primary concern. We will review your requirements and respond promptly.'
  }
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 ${open ? 'border-amber-300 shadow-md shadow-amber-100' : 'border-gray-100 shadow-sm'}`}>
      <button onClick={() => setOpen(prev => !prev)} className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 focus:outline-none group" aria-expanded={open}>
        <span className={`font-bold text-sm sm:text-base md:text-lg leading-snug transition-colors ${open ? 'text-secondary' : 'text-dark-grey group-hover:text-secondary'}`}>{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open ? 'bg-amber-100 text-secondary' : 'bg-gray-100 text-medium-grey'}`}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div><p className="px-5 sm:px-6 pb-4 sm:pb-5 text-medium-grey leading-relaxed text-xs sm:text-sm md:text-base">{a}</p></div>
      </div>
    </div>
  );
};

const VastuConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    propertyType: 'Residential Home / Apartment',
    stage: 'Completed / Currently Living',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Hari Ram Ji,\n\nI would like to enquire about a Vastu Consultation:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- City: ${formData.city}\n- Property Type: ${formData.propertyType}\n- Stage: ${formData.stage}${formData.message ? `\n- Concern/Notes: ${formData.message}` : ''}`;
    const url = `https://wa.me/919509610711?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO />

      {/* ─── 1. GUIDING FORCE HERO SECTION (Reference Design) ─── */}
      <section className="py-12 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1E293B] font-serif mb-10 sm:mb-16 tracking-tight">
            Our Guiding Force — Hari Ram Beekrwar
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Column: Vastu Principles Photo & Socials */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-lg rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-amber-200/60 bg-white relative group">
                <picture className="w-full block">
                  <source type="image/webp" srcSet="/Resource/vastu-expert.webp" />
                  <img
                    src="/Resource/vastu-expert.jpg"
                    alt="Hari Ram Beekrwar explaining Vastu Principles — Vastu Consultant"
                    width="1024"
                    height="891"
                    loading="eager"
                    decoding="async"
                    className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </picture>
              </div>

              <div className="text-center mt-5">
                <p className="font-bold text-dark-grey text-base sm:text-lg mb-2.5">Follow on Socials</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://facebook.com/profile.php?id=61571128232956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@HariRamBeekrwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-red-600 transition-all hover:scale-110 shadow-sm"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/harirambeekrwar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-pink-600 transition-all hover:scale-110 shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Booking Info, and Enquire Now */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                With over 5+ years of transformative experience, Hari Ram Beekrwar is not just a Vastu expert; he’s a visionary redefining how ancient wisdom can elevate modern living. His rare ability to merge ancient principles with real-world relevance has helped over 2,200+ individuals design lives, homes, and ventures that feel right, deeply aligned, effortlessly flowing, and powerful in their presence.
              </p>

              <div className="flex items-center gap-2 text-[#EF4444] font-semibold text-sm sm:text-base pt-2">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF4444] shrink-0" />
                <span>Consultation Booking — Available on Enquiry</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#enquiry-form"
                  className="px-8 py-3 rounded-full border-2 border-[#EF4444] text-[#EF4444] font-bold hover:bg-[#EF4444] hover:text-white transition-all text-sm sm:text-base shadow-sm hover:shadow-md cursor-pointer"
                >
                  Enquire Now
                </a>
                <a
                  href="https://wa.me/919509610711?text=Hello%20Hari%20Ram%20Ji,%20I%20would%20like%20to%20enquire%20about%20Scientific%20Vastu%20Consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20ba59] transition-all text-sm sm:text-base shadow-sm flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT & DETAILED ENQUIRY FORM ─── */}
      <div className="min-h-screen py-10 sm:py-16 px-4 bg-light-grey">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* Left 7 Columns: Scope, Benefits, Process */}
            <div className="lg:col-span-7 space-y-8" data-reveal="fade-right">
              {/* Property Scope Grid */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block mb-3">
                  Scope of Consultation
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-4">Properties We Harmonize</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                      <Home className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-dark-grey text-base mb-1">Residential Vastu</h3>
                    <p className="text-xs sm:text-sm text-medium-grey">Apartments, builder floors, villas, and independent homes. Enhancing family peace, health, and prosperity.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-3">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-dark-grey text-base mb-1">Commercial &amp; Offices</h3>
                    <p className="text-xs sm:text-sm text-medium-grey">Corporate spaces, retail outlets, and cabins. Unlocking cash flow, leadership focus, and business expansion.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                      <Factory className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-dark-grey text-base mb-1">Industrial &amp; Factories</h3>
                    <p className="text-xs sm:text-sm text-medium-grey">Machinery placement, raw material storage, dispatch zones, and labor harmony for maximum productivity.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-dark-grey text-base mb-1">Plot &amp; Land Selection</h3>
                    <p className="text-xs sm:text-sm text-medium-grey">Soil analysis, road alignment, cardinal orientations, and slope evaluation before purchasing valuable land.</p>
                  </div>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-4">Why Consult with Hari Ram Beekrwar?</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: '100% Non-Invasive Remedies',
                      desc: 'Zero wall demolition or structural modification. All remedies are based on five-element balance, metallic strips, color harmonizers, and directional energy realignment.'
                    },
                    {
                      title: 'Scientific & Traditional Methodology',
                      desc: 'Combining ancient Vedic Vastu Shastra with logical modern layout architecture to deliver practical solutions suitable for contemporary living.'
                    },
                    {
                      title: 'Numerological Synergy',
                      desc: 'Unique advantage of synchronizing the spatial energy of your property with your personal date-of-birth vibrations for amplified success.'
                    },
                    {
                      title: 'Personal Direct Guidance',
                      desc: 'You speak directly with Hari Ram Beekrwar — receiving undivided attention, detailed explanations, and ongoing support.'
                    }
                  ].map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-dark-grey">{pillar.title}</h3>
                        <p className="text-xs sm:text-sm text-medium-grey mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block mb-3">
                  Process
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-4">How Vastu Consultation Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { step: '01', title: 'Submit Enquiry', desc: 'Share your property type, city, and layout plan through our enquiry form or WhatsApp.' },
                    { step: '02', title: 'Energy & Direction Audit', desc: 'Detailed grid analysis of cardinal directions, entrances, rooms, and energy flow.' },
                    { step: '03', title: '1-on-1 Consultation Call', desc: 'Private voice or video session to walk through findings, remedies, and remedies implementation.' },
                    { step: '04', title: 'Practical Action Plan', desc: 'Step-by-step guidance on zero-demolition adjustments to restore harmony and growth.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-gray-100 bg-gray-50/70">
                      <div className="text-xs font-black text-amber-600 bg-amber-100 w-7 h-7 rounded-lg flex items-center justify-center mb-2">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-dark-grey mb-1">{item.title}</h3>
                      <p className="text-xs text-medium-grey leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Sticky Enquiry Form */}
            <div id="enquiry-form" className="lg:col-span-5 lg:sticky lg:top-24 scroll-mt-24" data-reveal="fade-left">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600" />
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-block">
                      On Enquiry Only
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mt-2">Request Vastu Consultation</h2>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-medium-grey mb-6 leading-relaxed">
                  Fill in your details below. We will review your property requirements and connect with you directly on WhatsApp.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h3 className="text-lg font-bold text-emerald-900">Enquiry Prepared!</h3>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                      Your details have been forwarded to WhatsApp. If the WhatsApp window did not open automatically, click the button below:
                    </p>
                    <a
                      href={`https://wa.me/919509610711?text=${encodeURIComponent(`Hello Hari Ram Ji, I would like to enquire about a Vastu Consultation for ${formData.name} in ${formData.city} (${formData.propertyType}).`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" /> Open WhatsApp Chat
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-gray-500 hover:text-dark-grey underline pt-1 block mx-auto"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="vastu-name" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1">
                        Full Name *
                      </label>
                      <input
                        id="vastu-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all shadow-inner"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="vastu-phone" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          id="vastu-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label htmlFor="vastu-city" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1">
                          City / Location *
                        </label>
                        <input
                          id="vastu-city"
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Jaipur"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="vastu-property" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1">
                        Property Type *
                      </label>
                      <select
                        id="vastu-property"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all shadow-inner"
                      >
                        <option value="Residential Home / Apartment">Residential Home / Flat / Villa</option>
                        <option value="Commercial Office / Retail">Commercial Office / Store</option>
                        <option value="Industrial / Factory / Warehouse">Industrial Factory / Warehouse</option>
                        <option value="Plot / Land Selection">Plot / Land Selection</option>
                        <option value="Renovation / Architectural Planning">New Planning / Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="vastu-stage" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1">
                        Current Property Stage
                      </label>
                      <select
                        id="vastu-stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all shadow-inner"
                      >
                        <option value="Completed / Currently Living">Completed / Already Occupied</option>
                        <option value="Under Construction / Building">Under Construction</option>
                        <option value="Planning / Before Buying">Planning / Before Buying</option>
                        <option value="Facing Specific Issue">Facing Specific Stagnation / Illness</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="vastu-message" className="block text-xs sm:text-sm font-bold text-dark-grey mb-1">
                        Key Concern / Requirement <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="vastu-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your property orientation or what issues you are facing..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all resize-none shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-sweep w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-amber-400/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" /> Submit Enquiry on WhatsApp
                    </button>

                    <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Confidential · Direct response from Hari Ram Ji
                    </p>
                  </form>
                )}

                <div className="mt-6 pt-5 border-t border-gray-100 space-y-2.5">
                  <p className="text-xs font-bold text-dark-grey text-center">Prefer direct contact?</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://wa.me/919509610711?text=Hello%20Hari%20Ram%20Ji,%20I%20would%20like%20to%20enquire%20about%20Scientific%20Vastu%20Consultation."
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-100 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" /> WhatsApp Us
                    </a>
                    <a
                      href="tel:+919509610711"
                      className="py-2.5 px-3 rounded-xl bg-gray-50 text-dark-grey border border-gray-200 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-primary" /> Call Direct
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ─── 3. FAQS ─── */}
          <div className="mt-14 sm:mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
                Common Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-grey mb-2">Frequently Asked Questions</h2>
              <p className="text-sm sm:text-base text-medium-grey">Everything you need to know about our scientific Vastu consultation.</p>
            </div>
            <div className="space-y-3.5">
              {VASTU_FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VastuConsultation;
