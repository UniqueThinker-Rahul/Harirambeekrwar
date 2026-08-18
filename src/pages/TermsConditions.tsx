import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Scale, Briefcase, CalendarCheck, User, ShieldAlert, Globe, Gavel, CheckSquare } from 'lucide-react';

const TermsConditions = () => {
  // This hook ensures the page scrolls to the top when it loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <SEO title="Terms & Conditions | HariRam Beekarwar" description="Terms and Conditions for HariRam Beekarwar." />
      
      <div className="bg-light-grey min-h-screen pb-24 text-dark-grey">
        {/* Animated Hero Section */}
        <section className="bg-dark-grey py-24 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-dark-grey to-dark-grey"></div>
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
             className="relative z-10 max-w-4xl mx-auto"
           >
             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-primary rounded-full mb-6 backdrop-blur-sm border border-white/20 shadow-lg">
                <Scale className="w-8 h-8" />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms & Conditions</h1>
             <p className="text-lg text-gray-300 leading-relaxed font-light">
               By accessing this website or booking any consultation with HariRam Beekarwar, you agree to the following Terms & Conditions.
             </p>
           </motion.div>
        </section>

        {/* Animated Content Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {[
              { 
                icon: <Briefcase className="w-6 h-6 text-primary" />, 
                title: "Services", 
                content: "Our Numerology and Vastu consultations are intended for guidance, self-awareness, and personal development. They should not be considered medical, legal, financial, or psychological advice." 
              },
              { 
                icon: <CalendarCheck className="w-6 h-6 text-primary" />, 
                title: "Appointments", 
                content: "Appointments are confirmed only after successful payment (where applicable). Please ensure that all information provided is accurate." 
              },
              { 
                icon: <User className="w-6 h-6 text-primary" />, 
                title: "Client Responsibility", 
                content: "Clients are solely responsible for the decisions and actions they take based on consultation guidance." 
              },
              { 
                icon: <ShieldAlert className="w-6 h-6 text-primary" />, 
                title: "Intellectual Property", 
                content: "All website content, including text, graphics, images, logos, reports, and consultation materials, is protected by copyright and may not be copied, reproduced, or distributed without prior written permission." 
              },
              { 
                icon: <Scale className="w-6 h-6 text-primary" />, 
                title: "Limitation of Liability", 
                content: "HariRam Beekarwar shall not be liable for any direct, indirect, incidental, or consequential loss arising from the use of this website or consultation services." 
              },
              { 
                icon: <Globe className="w-6 h-6 text-primary" />, 
                title: "Website Availability", 
                content: "We strive to keep our website available at all times but do not guarantee uninterrupted access." 
              },
              { 
                icon: <Gavel className="w-6 h-6 text-primary" />, 
                title: "Governing Law", 
                content: "These Terms & Conditions shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in India." 
              }
            ].map((section, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-primary hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-dark-grey">{section.title}</h2>
                </div>
                <div className="text-lg text-medium-grey leading-relaxed ml-16">
                  <p>{section.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Outro Block */}
            <motion.div 
              variants={itemVariants} 
              className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 text-center shadow-inner"
            >
              <div className="flex items-center justify-center gap-3">
                 <CheckSquare className="w-6 h-6 text-primary" />
                 <p className="font-bold text-dark-grey text-lg">
                   By continuing to use this website, you acknowledge that you have read and agreed to these Terms & Conditions.
                 </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;