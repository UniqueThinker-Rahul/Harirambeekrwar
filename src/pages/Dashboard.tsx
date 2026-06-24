import React from 'react';
import { Calendar as CalendarIcon, ArrowRight, BookOpen, Download, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Dashboard = () => (
   <>
     <SEO title="My Account Dashboard" description="Manage your consultations and reports." />
     <div className="min-h-screen bg-light-grey py-16 px-4">
       <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
             <div>
                <h1 className="text-4xl font-bold text-dark-grey mb-2 flex items-center gap-3"><UserIcon className="w-8 h-8 text-primary"/> My Account</h1>
                <p className="text-medium-grey">Manage your spiritual journey and consultations.</p>
             </div>
             <div className="px-6 py-3 bg-yellow-50 text-secondary border border-yellow-100 font-bold rounded-full text-sm shadow-sm">
                Status: Guest User
             </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 space-y-8">
                 <div className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                     <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-dark-grey shadow-inner">
                              <CalendarIcon className="w-6 h-6"/>
                           </div>
                           <h3 className="font-bold text-2xl text-dark-grey">My Consultations</h3>
                        </div>
                     </div>
                     <div className="flex-grow flex flex-col items-center justify-center text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-medium-grey text-lg mb-6">You don't have any upcoming or past consultations.</p>
                        <Link to="/booking" className="bg-dark-grey text-white px-8 py-4 rounded-full hover:bg-secondary transition-colors font-bold flex items-center shadow-md">
                           Book a Session Now <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                     </div>
                 </div>
             </div>

             <div className="lg:col-span-1 space-y-8">
                 <div className="bg-dark-grey p-8 rounded-3xl shadow-xl text-white">
                    <h3 className="font-bold text-2xl mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-primary"/> Free Resources</h3>
                    <div className="space-y-4">
                       <a href="#" className="block p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors border border-white/10 group">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors flex justify-between items-center">Daily Mantra Sheet <Download className="w-4 h-4"/></h4>
                          <p className="text-sm text-gray-300">Basic chants for wealth & health.</p>
                       </a>
                       <a href="#" className="block p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors border border-white/10 group">
                          <h4 className="font-bold mb-1 group-hover:text-primary transition-colors flex justify-between items-center">Vastu Direction Guide <Download className="w-4 h-4"/></h4>
                          <p className="text-sm text-gray-300">Quick 1-page compass map.</p>
                       </a>
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xl text-dark-grey mb-4">Need Help?</h3>
                    <p className="text-medium-grey mb-6 text-sm">Facing issues with a payment or booking slot? Our support team is active.</p>
                    <Link to="/contact" className="block text-center bg-gray-100 text-dark-grey w-full py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">Contact Support</Link>
                 </div>
             </div>
          </div>
       </div>
     </div>
   </>
);

export default Dashboard;
