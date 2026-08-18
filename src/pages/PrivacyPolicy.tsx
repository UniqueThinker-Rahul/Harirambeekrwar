import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Lock, Globe, Cookie, UserCheck, RefreshCcw, Mail, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
      <SEO title="Privacy Policy | HariRam Beekarwar" description="Privacy Policy for HariRam Beekarwar." />
      
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
                <ShieldCheck className="w-8 h-8" />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policys</h1>
             <p className="text-lg text-gray-300 leading-relaxed font-light">
               At HariRam Beekarwar, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard the information you provide when you visit our website or book our services.
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
                icon: <Database className="w-6 h-6 text-primary" />, 
                title: "Information We Collect", 
                content: (
                  <>
                    <p className="mb-4 text-medium-grey">We may collect the following information:</p>
                    <ul className="list-none space-y-3">
                      {["Full Name", "Email Address", "Phone Number", "Date of Birth, Time of Birth, and Place of Birth (if required for Numerology consultations)", "Payment information (processed securely through third-party payment providers)", "Any information voluntarily shared during consultations or through contact forms"].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                          <span className="text-medium-grey">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )
              },
              { 
                icon: <FileText className="w-6 h-6 text-primary" />, 
                title: "How We Use Your Information", 
                content: (
                  <>
                    <p className="mb-4 text-medium-grey">Your information is used to:</p>
                    <ul className="list-none space-y-3">
                      {["Provide Numerology and Vastu consultation services.", "Schedule and manage appointments.", "Respond to your inquiries.", "Improve our services and website experience.", "Send appointment confirmations, updates, and promotional communications (only if you choose to receive them)."].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                          <span className="text-medium-grey">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )
              },
              { 
                icon: <Lock className="w-6 h-6 text-primary" />, 
                title: "Data Protection", 
                content: "We implement appropriate security measures to protect your personal information. However, no method of internet transmission or electronic storage is completely secure." 
              },
              { 
                icon: <Globe className="w-6 h-6 text-primary" />, 
                title: "Third-Party Services", 
                content: "Our website may use trusted third-party services such as payment gateways, analytics tools, and communication platforms. These providers have their own privacy policies." 
              },
              { 
                icon: <Cookie className="w-6 h-6 text-primary" />, 
                title: "Cookies", 
                content: "Our website may use cookies to improve user experience and analyze website performance. You may disable cookies through your browser settings." 
              },
              { 
                icon: <UserCheck className="w-6 h-6 text-primary" />, 
                title: "Your Rights", 
                content: "You may request access to, correction of, or deletion of your personal information by contacting us." 
              },
              { 
                icon: <RefreshCcw className="w-6 h-6 text-primary" />, 
                title: "Changes to This Policy", 
                content: "We may update this Privacy Policy periodically. Changes will become effective immediately upon publication on this website." 
              },
              { 
                icon: <Mail className="w-6 h-6 text-primary" />, 
                title: "Contact Us", 
                content: "If you have any questions regarding this Privacy Policy, please contact us through the Contact page." 
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

export default PrivacyPolicy;