import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Heart, Sparkles, CheckCircle, Clock, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Numerology & Vastu Consultant | Hariram Beekrwar" 
        description="Transform Your Life Through the Power of Numerology & Vastu. Discover clarity, success, and lasting prosperity with personalized guidance."
        keywords="Numerology, Vastu Shastra, Hariram Beekrwar, astrology consultation"
      />
      <div>
        {/* Hero Section */}
        <section className="relative bg-dark-grey text-white overflow-hidden py-24 sm:py-32 layout-section">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary opacity-20 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-medium mb-8 text-primary shadow-[0_0_10px_rgba(255,215,0,0.2)]"
            >
              <Sparkles className="w-4 h-4" /> Numerology & Vastu Consultant
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Transform Your Life Through the Power of <br className="hidden md:block" /><span className="text-primary drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">Numerology & Vastu</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Welcome! I am Hariram Beekrwar. I believes that every individual carries a unique energy, and when that energy is aligned with the right numbers and surroundings, extraordinary growth becomes possible.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/booking" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary text-dark-grey font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)] transform hover:-translate-y-1">
                Book Your Consultation NOW <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
            >
               <div className="flex items-center gap-2"><Star className="w-5 h-5 text-primary" /> 2,200+ Lives Transformed</div>
               <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 100% Confidentiality</div>
               <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Practical Remedies</div>
            </motion.div>
          </div>
        </section>

         {/* Quick About the Expert */}
        <section className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2 flex justify-center bg-gray-50 rounded-3xl p-4 border border-gray-100 shadow-sm">
                    {/* Image edges are now 'little rounded' (rounded-xl) */}
                    <img 
                      src="/Resource/image_9e224f.jpg" 
                      alt="Hariram Beekrwar" 
                      className="rounded-xl shadow-lg w-full h-auto max-h-[600px] object-contain" 
                    />
                 </div>
                 <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6">Meet Hariram Beekrwar</h2>
                    <p className="text-medium-grey text-lg mb-6 leading-relaxed">
                       With over 4 years of rich experience in the mystical science of energies, I have successfully guided more than 2,200 clients worldwide. My mission is simple: to decode the hidden patterns of your life using numbers and to optimize your surroundings using the ancient wisdom of Vastu Shastra.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-primary p-6 rounded-r-2xl mb-8">
                       <p className="text-dark-grey text-lg italic font-medium">"Your date of birth holds the blueprint of your destiny, and your space holds the power to manifest it. Let’s align them together."</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                       <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0" /> <span className="text-dark-grey font-medium">4+ Years of Professional Experience.</span></li>
                       <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0" /> <span className="text-dark-grey font-medium">Committed to Helping You Achieve Success, Peace & Prosperity.</span></li>
                       <li className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0" /> <span className="text-dark-grey font-medium">No superstitions or expensive structural changes.</span></li>
                    </ul>
                    <Link to="/about" className="inline-flex items-center text-secondary font-bold hover:underline transition-all group">
                       Read Full Biography <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">Services Offered</h2>
              <p className="text-medium-grey max-w-2xl mx-auto text-lg">We offer specialized, data-driven, and intuitive consultation services to bring balance to your personal and professional life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Advanced Numerology", desc: "Numbers carry distinct cosmic vibrations. Through a detailed analysis of your birth date and name, I help you understand your strengths, weaknesses, and future cycles.", link: "/services/advanced-numerology" },
                 { title: "Scientific & Traditional Vastu", desc: "Your home or workplace heavily influences your mental peace and financial growth. I provide Vastu evaluations to ensure your space attracts positive energy without requiring major structural demolitions.", link: "/services/vastu" },
                 { title: "Signature & Mobile Numerology", desc: "Small changes can yield massive results. Your daily interactions—like your phone number or the way you sign your name—can impact your subconscious growth.", link: "/services/signature-numerology" },
               ].map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group">
                     <div className="w-20 h-20 bg-yellow-50 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                        <Star className="w-10 h-10" />
                     </div>
                     <h3 className="text-2xl font-bold text-dark-grey mb-3">{service.title}</h3>
                     <p className="text-medium-grey mb-8 flex-grow leading-relaxed">{service.desc}</p>
                     <Link to={service.link} className="text-secondary font-bold tracking-wide flex items-center hover:text-red-800 transition-colors bg-red-50 px-6 py-3 rounded-full group-hover:bg-red-100">
                       View Details <ArrowRight className="w-5 h-5 ml-2" />
                     </Link>
                  </div>
               ))}
            </div>
            <div className="text-center mt-12">
               <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 rounded-full border-2 border-dark-grey text-dark-grey font-bold hover:bg-dark-grey hover:text-white transition-all">
                 Browse All Services
               </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white border-y border-gray-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">How Our Process Works</h2>
                 <p className="text-medium-grey text-lg max-w-2xl mx-auto">A seamless, fully transparent process designed to give you clarity and deliver absolute value with every interaction.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                 <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>
                 {[
                    { step: "01", icon: <Clock className="w-8 h-8" />, title: "Book a Slot", desc: "Choose a time that works best for you and securely book your consultation." },
                    { step: "02", icon: <Users className="w-8 h-8" />, title: "Private Consultation", desc: "Speak directly with Hariram Beekrwar safely and confidentially." },
                    { step: "03", icon: <BookOpen className="w-8 h-8" />, title: "Unlock Remedies", desc: "Receive logical, step-by-step remedies specifically tailored to you." },
                    { step: "04", icon: <Sparkles className="w-8 h-8" />, title: "Witness Growth", desc: "Execute the remedies and observe profound positive shifts in your life." },
                 ].map((item, idx) => (
                    <div key={idx} className="bg-white border text-center border-gray-100 p-8 rounded-3xl relative">
                       <div className="w-16 h-16 bg-dark-grey text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white absolute -top-8 left-1/2 -translate-x-1/2">
                          {item.icon}
                       </div>
                       <h3 className="text-xl font-bold text-dark-grey mt-4 mb-3">{item.step}. {item.title}</h3>
                       <p className="text-medium-grey">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
         </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-6 leading-tight">Why Choose Us?</h2>
                   <p className="text-medium-grey text-xl mb-10 leading-relaxed">Finding an authentic consultant can be overwhelming. We pride ourselves on pure accuracy, highly ethical practices, and actionable remedies for real-life challenges.</p>
                   <ul className="space-y-8">
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                         <ShieldCheck className="w-10 h-10 text-tertiary mr-5 shrink-0" />
                         <div>
                            <h4 className="text-2xl font-bold text-dark-grey mb-2">Confidential & Personalized</h4>
                            <p className="text-medium-grey text-lg">Every consultation is treated with absolute privacy and tailored strictly to your unique energetic blueprint.</p>
                         </div>
                      </li>
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                         <Heart className="w-10 h-10 text-secondary mr-5 shrink-0" />
                         <div>
                            <h4 className="text-2xl font-bold text-dark-grey mb-2">Practical & Easy Remedies</h4>
                            <p className="text-medium-grey text-lg">No superstitions or expensive structural changes—only logical, modern, and highly effective remedies.</p>
                         </div>
                      </li>
                   </ul>
                </div>
                <div className="bg-dark-grey rounded-[3rem] p-10 relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                      <Star className="w-48 h-48" />
                   </div>
                   <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-8">CLIENT TESTIMONIALS<br/><span className="text-xl font-normal text-gray-300">What Our Clients Say</span></h3>
                      <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                          <div className="flex text-primary mb-4">
                            <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
                          </div>
                          <p className="text-gray-200 text-lg italic mb-6">"My business started growing after following HariRam Ji's guidance. The clarity and confidence I gained completely changed my approach."</p>
                          <p className="font-bold text-primary text-xl">— Business Owner</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                          <div className="flex text-primary mb-4">
                            <Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/>
                          </div>
                          <p className="text-gray-200 text-lg italic mb-6">"Our home feels more peaceful and balanced after the Vastu consultation. We have experienced noticeable improvements in our daily life."</p>
                          <p className="font-bold text-primary text-xl">— Homeowner</p>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-light-grey">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">Frequently Asked Questions</h2>
                 <p className="text-medium-grey text-lg">Clear up your doubts before deciding to book.</p>
              </div>
              <div className="space-y-6">
                 {[
                    { q: "1) How does Numerology help?", a: "Numerology helps you understand your strengths, opportunities, challenges, and life path, enabling you to make better decisions." },
                    { q: "2) Is Vastu suitable for existing homes and offices?", a: "Yes. Most Vastu recommendations can be applied to both existing and new properties." },
                    { q: "3) Are consultations personalized?", a: "Absolutely. Every consultation is based on your unique birth details, personal goals, and current life situation." },
                    { q: "4) Can online consultations be booked?", a: "Yes. Consultations are available both online and offline for clients across India and worldwide." },
                 ].map((faq, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                       <h3 className="text-xl font-bold text-dark-grey mb-3">{faq.q}</h3>
                       <p className="text-medium-grey leading-relaxed">{faq.a}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-dark-grey text-center px-4 relative overflow-hidden block">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-dark-grey to-dark-grey z-0"></div>
           <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Are You Ready to Transform Your Life?</h2>
              <p className="text-gray-300 text-xl mb-6 max-w-2xl mx-auto">Don't let hidden energies hold you back from achieving your true potential. Take the first step toward a balanced and prosperous future today.</p>
              <p className="text-primary font-bold text-xl mb-12">Your journey toward a balanced and successful life begins today.</p>
              <Link to="/booking" className="inline-flex justify-center items-center px-12 py-6 rounded-full bg-primary text-dark-grey font-black text-xl hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-1">
                Book Your Consultation NOW <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <div className="mt-8">
                 <div className="inline-block bg-red-600/30 text-red-100 border border-red-500/50 px-6 py-3 rounded-full font-bold text-sm tracking-wide animate-pulse">
                   🔥 HURRY UP: Only 3 consultation slots remaining today!
                 </div>
              </div>
              <p className="text-gray-400 text-sm mt-8 flex items-center justify-center gap-2"><LockIcon /> 100% Secure Payment & Encrypted Booking Flow</p>
           </div>
        </section>

        {/* Lead Gen - Free Report */}
        {/* <section className="py-20 bg-primary border-y border-yellow-200 shadow-inner">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-4">Get Your FREE Planetary Impact Report</h2>
              <p className="text-dark-grey/80 text-xl mb-10 font-medium">Enter your email and receive an instant, highly detailed blueprint on how upcoming transits will affect your money and career this year.</p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => { e.preventDefault(); alert("Success! Your free customized report is on the way to your inbox."); }}>
                 <input type="text" placeholder="Your First Name" required className="px-8 py-5 rounded-full border-none w-full sm:w-auto outline-none focus:ring-4 focus:ring-white/50 text-lg shadow-sm" />
                 <input type="email" placeholder="Your Best Email Address" required className="px-8 py-5 rounded-full border-none w-full sm:w-96 outline-none focus:ring-4 focus:ring-white/50 text-lg shadow-sm" />
                 <button type="submit" className="bg-dark-grey text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-colors shrink-0 shadow-lg hover:-translate-y-1 transform">Send My Free Report</button>
              </form>
           </div>
        </section> */}
      </div>
    </>
  );
};

const LockIcon = () => (
<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

export default Home;