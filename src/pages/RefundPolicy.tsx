import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { CreditCard, CalendarX, RefreshCcw, Download, Phone, ReceiptText } from 'lucide-react';

const RefundPolicy = () => {
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
      <SEO title="Refund & Cancellation Policy | HariRam Beekarwar" description="Refund and Cancellation Policy for HariRam Beekarwar." />
      
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
                <ReceiptText className="w-8 h-8" />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Refund & Cancellation Policy</h1>
             <p className="text-lg text-primary font-medium tracking-wide">
               We value your time and appreciate your trust in our services.
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
                icon: <CreditCard className="w-6 h-6 text-primary" />, 
                title: "Consultation Fees", 
                content: "All consultation fees are charged for the professional time, expertise, and personalized guidance provided." 
              },
              { 
                icon: <CalendarX className="w-6 h-6 text-primary" />, 
                title: "Cancellation", 
                content: "Appointments may be rescheduled if requested at least 24 hours before the scheduled consultation, subject to availability." 
              },
              { 
                icon: <RefreshCcw className="w-6 h-6 text-primary" />, 
                title: "Refunds", 
                content: (
                  <ul className="list-none space-y-3">
                    {["Consultation fees are non-refundable once the consultation has been completed.", "Refund requests for cancelled appointments will be reviewed on a case-by-case basis.", "No refunds will be provided for missed appointments without prior notice."].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                        <span className="text-medium-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              },
              { 
                icon: <Download className="w-6 h-6 text-primary" />, 
                title: "Digital Products", 
                content: "Any digital reports, personalized Numerology charts, or downloadable products are non-refundable once delivered." 
              },
              { 
                icon: <Phone className="w-6 h-6 text-primary" />, 
                title: "Contact", 
                content: "For cancellation or refund requests, please contact us through the Contact page before your scheduled appointment." 
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
                  {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;