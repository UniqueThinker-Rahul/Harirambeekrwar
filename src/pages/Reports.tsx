import React from 'react';
import { ArrowRight, FileText, CheckCircle, Clock, ShieldCheck, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const Reports = () => (
    <>
      <SEO 
        title="In-Depth Astrology Reports | Arviend Sud" 
        description="Get deeply researched, manually prepared astrology reports by Arviend Sud. Covering Marriage, Career, Wealth, and complete life blueprint."
      />
      <div className="min-h-screen py-24 px-4 bg-light-grey text-center pb-32">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark-grey leading-tight">Premium Manual Astrology Reports</h1>
            <p className="max-w-3xl mx-auto text-medium-grey text-xl mb-12 leading-relaxed">
              Unlike generic, computer-generated PDFs taking 2 seconds to generate, these reports are meticulously crafted by our experts after spending <strong>hours</strong> mathematically analyzing your unique planetary alignments.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-24">
             {/* Report Card 1 */}
             <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-yellow-100 relative overflow-hidden group hover:shadow-2xl transition-shadow">
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                    <FileText className="w-32 h-32" />
                 </div>
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="bg-red-50 text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-red-100">Bestseller</div>
                 </div>
                 <h2 className="text-4xl font-bold text-dark-grey mb-6 relative z-10">Marriage & Compatibility Blueprint</h2>
                 <p className="text-medium-grey text-lg mb-8 leading-relaxed relative z-10">Complete decoding of your 7th house and Venus. Uncover the exact timing of marriage, characteristics of your spouse, and highly practical remedies for hurdles.</p>
                 
                 <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8 relative z-10">
                   <h4 className="font-bold text-dark-grey mb-4 text-sm uppercase tracking-wide">What's Included inside</h4>
                   <ul className="space-y-4">
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> 15+ Pages of deep manual analysis</li>
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> Exact timing & prediction of marriage</li>
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> Manglik check & neutralization remedies</li>
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> Potential spouse characteristics</li>
                   </ul>
                 </div>

                 <div className="flex items-center justify-between relative z-10">
                   <div>
                     <div className="text-sm text-medium-grey line-through mb-1">$150</div>
                     <div className="font-black text-4xl text-dark-grey">$50</div>
                   </div>
                   <button className="bg-primary text-dark-grey font-bold px-8 py-5 rounded-full hover:bg-yellow-400 transition-all shadow-md flex items-center group-hover:scale-105">
                     Request Now <ArrowRight className="w-5 h-5 ml-2" />
                   </button>
                 </div>
             </div>

             {/* Report Card 2 */}
             <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-yellow-100 relative overflow-hidden group hover:shadow-2xl transition-shadow">
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                    <FileText className="w-32 h-32" />
                 </div>
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-100">Highly Requested</div>
                 </div>
                 <h2 className="text-4xl font-bold text-dark-grey mb-6 relative z-10">Career & Wealth Matrix</h2>
                 <p className="text-medium-grey text-lg mb-8 leading-relaxed relative z-10">A powerful deep-dive into your 10th and 11th houses. Discover your true professional calling, incoming wealth periods, and exactly how to stop financial leakage entirely.</p>
                 
                 <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8 relative z-10">
                   <h4 className="font-bold text-dark-grey mb-4 text-sm uppercase tracking-wide">What's Included inside</h4>
                   <ul className="space-y-4">
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> 20+ Pages of deep manual analysis</li>
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> Year-by-year income prediction map</li>
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> Gemstone & routine wealth remedies</li>
                     <li className="flex items-start text-medium-grey"><CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" /> Suitable business vs job breakdown</li>
                   </ul>
                 </div>

                 <div className="flex items-center justify-between relative z-10">
                   <div>
                     <div className="text-sm text-medium-grey line-through mb-1">$180</div>
                     <div className="font-black text-4xl text-dark-grey">$60</div>
                   </div>
                   <button className="bg-primary text-dark-grey font-bold px-8 py-5 rounded-full hover:bg-yellow-400 transition-all shadow-md flex items-center group-hover:scale-105">
                     Request Now <ArrowRight className="w-5 h-5 ml-2" />
                   </button>
                 </div>
             </div>
          </div>
          
          {/* How we prepare the report */}
          <div className="max-w-6xl mx-auto mb-24">
             <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-12 text-center">How It Works</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-left">
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                   <div className="w-16 h-16 bg-yellow-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-dark-grey mb-3 text-center">1. Place Request</h3>
                   <p className="text-medium-grey text-center leading-relaxed">Provide your exact Date, Time, and Place of birth along with payment securely.</p>
                </div>
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                   <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-dark-grey mb-3 text-center">2. Manual Calculation</h3>
                   <p className="text-medium-grey text-center leading-relaxed">Our experts spend 2-3 business days calculating degrees and writing the report logically.</p>
                </div>
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                   <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-dark-grey mb-3 text-center">3. Secure Delivery</h3>
                   <p className="text-medium-grey text-center leading-relaxed">The high-quality PDF report is securely emailed directly to your inbox for you to keep forever.</p>
                </div>
             </div>
          </div>

          <div className="max-w-4xl mx-auto bg-dark-grey rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
                 <ShieldCheck className="w-48 h-48" />
             </div>
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Not sure which report to get?</h3>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto font-light">Reports are great, but sometimes you need to talk. Book a personalized consultation session to ask unlimited direct questions.</p>
                <a href="/booking" className="inline-block bg-white text-dark-grey font-bold py-5 px-12 rounded-full hover:bg-gray-100 transition-colors text-lg shadow-lg hover:-translate-y-1 transform">
                  Book a Consultation Call Instead
                </a>
             </div>
          </div>
      </div>
    </>
);

export default Reports;
