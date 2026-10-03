import React from 'react';
import { ArrowRight, FileText, CheckCircle, Clock, ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const REPORTS = [
  {
    badge: { label: 'Bestseller', color: 'bg-red-50 text-secondary border-red-100' },
    title: 'Marriage & Compatibility Blueprint',
    desc: 'Complete decoding of your 7th house and Venus. Uncover the exact timing of marriage, characteristics of your spouse, and highly practical remedies for hurdles.',
    includes: ['15+ Pages of deep manual analysis', 'Exact timing & prediction of marriage', 'Manglik check & neutralization remedies', 'Potential spouse characteristics'],
    originalPrice: '₹6,999', price: '₹3,999',
    waMsg: 'Hello! I want to order the *Marriage & Compatibility Blueprint* numerology report for ₹3,999. Please guide me on payment.',
    accentFrom: 'from-amber-400', accentTo: 'to-orange-400',
  },
  {
    badge: { label: 'Highly Requested', color: 'bg-blue-50 text-blue-600 border-blue-100' },
    title: 'Career & Wealth Matrix',
    desc: 'A powerful deep-dive into your 10th and 11th houses. Discover your true professional calling, incoming wealth periods, and exactly how to stop financial leakage entirely.',
    includes: ['20+ Pages of deep manual analysis', 'Year-by-year income prediction map', 'Gemstone & routine wealth remedies', 'Suitable business vs job breakdown'],
    originalPrice: '₹8,999', price: '₹5,499',
    waMsg: 'Hello! I want to order the *Career & Wealth Matrix* numerology report for ₹5,499. Please guide me on payment.',
    accentFrom: 'from-indigo-500', accentTo: 'to-blue-500',
  },
];

const Reports = () => (
  <>
    <SEO title="In-Depth Numerology Reports | HARI RAM BEEKRWAR" description="Get deeply researched, manually prepared numerology reports by Hari ram Beekrwar. Covering Marriage, Career, Wealth, and complete life blueprint." />
    <div className="min-h-screen py-24 px-4 bg-light-grey text-center pb-32">
      <div className="max-w-4xl mx-auto mb-20">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-6">Premium Reports</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark-grey leading-tight">Premium Manual Numerology Reports</h1>
        <p className="max-w-3xl mx-auto text-medium-grey text-xl mb-0 leading-relaxed">Unlike generic, computer-generated PDFs, these reports are <strong className="text-dark-grey">meticulously crafted by hand</strong> — spending hours mathematically analysing your unique planetary alignments.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-24">
        {REPORTS.map((r, idx) => {
          const waUrl = `https://wa.me/919509610711?text=${encodeURIComponent(r.waMsg)}`;
          return (
            <div key={idx} className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col">
              <div className={`h-1.5 w-full bg-gradient-to-r ${r.accentFrom} ${r.accentTo}`} />
              <div className="p-10 flex flex-col flex-1">
                <div className="mb-5"><span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border ${r.badge.color}`}>{r.badge.label}</span></div>
                <h2 className="text-3xl font-bold text-dark-grey mb-4">{r.title}</h2>
                <p className="text-medium-grey text-base mb-7 leading-relaxed flex-grow">{r.desc}</p>
                <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl mb-7">
                  <h4 className="font-bold text-dark-grey mb-3 text-xs uppercase tracking-wide">What's Included</h4>
                  <ul className="space-y-3">{r.includes.map((item, i) => (<li key={i} className="flex items-start text-medium-grey text-sm"><CheckCircle className="w-4 h-4 text-primary mr-3 shrink-0 mt-0.5" /> {item}</li>))}</ul>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <div className="text-sm text-medium-grey line-through mb-1">{r.originalPrice}</div>
                    <div className="font-black text-4xl text-dark-grey">{r.price}</div>
                    <div className="text-xs text-emerald-600 font-bold mt-1">Special Launch Price</div>
                  </div>
                  <a href={waUrl} target="_blank" rel="noreferrer" className="btn-sweep bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-7 py-4 rounded-full hover:from-amber-500 hover:to-primary-deep transition-all shadow-md flex items-center gap-2 hover:-translate-y-0.5">
                    <MessageCircle className="w-4 h-4" /> Order via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <FileText className="w-8 h-8" />, color: 'bg-amber-50 text-primary', title: '1. Place Request', desc: 'Send your birth details (Date, Time, Place) and report preference via WhatsApp.' },
            { icon: <Clock className="w-8 h-8" />, color: 'bg-blue-50 text-blue-500', title: '2. Manual Calculation', desc: 'Our expert spends 2–3 business days carefully crafting your personalised report.' },
            { icon: <Mail className="w-8 h-8" />, color: 'bg-green-50 text-green-500', title: '3. Secure Delivery', desc: 'The high-quality PDF report is emailed directly to your inbox to keep forever.' },
          ].map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>{step.icon}</div>
              <h3 className="text-xl font-bold text-dark-grey mb-3">{step.title}</h3>
              <p className="text-medium-grey leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden border border-indigo-800/60">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-primary"><ShieldCheck className="w-48 h-48" /></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-4">Not Sure Which Report to Get?</h3>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">Reports are great, but sometimes you need a direct conversation. Book a personalized consultation to ask unlimited questions live.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn-sweep inline-flex justify-center items-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg hover:-translate-y-1">
              Book a Consultation Call <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="https://wa.me/919509610711?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20numerology%20reports." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-[#25D366] text-white font-black text-lg hover:bg-[#20b858] transition-all shadow-lg hover:-translate-y-1">
              <MessageCircle className="w-5 h-5 mr-2" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Reports;
