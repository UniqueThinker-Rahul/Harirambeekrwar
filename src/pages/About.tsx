import React from 'react';
import SEO from '../components/SEO';
import { Award, BookOpen, Users, Star, Target, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SEO 
        title="About Arviend Sud | Master Vedic Astrologer" 
        description="Learn more about Arviend Sud, a master Vedic astrologer and Vastu expert with over 20 years of experience shaping thousands of lives globally."
      />
      <div className="bg-light-grey min-h-screen">
        <section className="bg-dark-grey text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/30 via-dark-grey to-dark-grey"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Arviend Sud</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Bridging ancient Vedic sciences with modern lifestyles to bring profound peace, absolute prosperity, and unshakeable purpose.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <img src="https://images.unsplash.com/photo-1608670784260-84a1efd5c07c?auto=format&fit=crop&w=800&q=80" alt="Arviend Sud" className="rounded-3xl shadow-2xl border-4 border-white relative z-10 w-full object-cover h-[600px]" />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
                  <p className="text-5xl font-black text-secondary">20+</p>
                  <p className="text-dark-grey font-bold tracking-wide">Years of Mastery</p>
                </div>
              </div>
              <div>
                <div className="inline-block bg-yellow-50 text-secondary font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase text-sm">The Journey</div>
                <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-8 leading-tight">Decoding The Matrix of Destiny</h2>
                <h3 className="text-2xl font-bold text-dark-grey mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-primary"/> My Story</h3>
                <p className="text-medium-grey text-lg leading-relaxed mb-8 italic border-l-4 border-primary pl-6 bg-gray-50 py-4 rounded-r-lg">
                  "I started this journey decades ago with a single burning question: Why do good people suffer unconditionally? Through 20 years of relentless studying of ancient Vedic scriptures, secretive tantric texts, and working closely with thousands of individuals, I discovered that our lives are deeply intertwined with powerful planetary forces. My life's mission became clear—to demystify these chaotic forces and provide accessible, brutally honest, and practical remedies to everyday people." <br/><br/><span className="text-dark-grey font-bold">— Arviend Sud</span>
                </p>
                
                <h3 className="text-2xl font-bold text-dark-grey mb-4 mt-8 flex items-center gap-2"><Target className="w-6 h-6 text-primary"/> Mission & Vision</h3>
                <div className="space-y-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <p className="text-medium-grey text-lg leading-relaxed">
                       <strong className="text-dark-grey block text-xl mb-2">Our Core Mission:</strong> To provide 100% honest, mathematically accurate, and highly ethical Vedic consultations that deeply empower individuals to overcome life's biggest obstacles—strictly without the use of fear mongering or costly rituals.
                     </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <p className="text-medium-grey text-lg leading-relaxed">
                       <strong className="text-dark-grey block text-xl mb-2">Our Grand Vision:</strong> To create a balanced world where sacred ancient wisdom and bold modern ambition can truly coexist harmoniously, bringing peace, financial prosperity, and immense purpose to every single household on earth.
                     </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
                    <h4 className="text-4xl font-black text-dark-grey mb-2">10k+</h4>
                    <p className="text-sm text-medium-grey font-bold uppercase tracking-widest">Happy Clients</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <Award className="w-10 h-10 text-tertiary mx-auto mb-4" />
                    <h4 className="text-4xl font-black text-dark-grey mb-2">99%</h4>
                    <p className="text-sm text-medium-grey font-bold uppercase tracking-widest">Accuracy Rate</p>
                  </div>
                </div>
                
                <Link to="/booking" className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-dark-grey text-white font-bold text-lg hover:bg-secondary transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                  Consult Arviend Sud Today <Star className="w-5 h-5 ml-2 fill-current text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 bg-light-grey">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-grey mb-6">Our Distinctive Approach</h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto mb-16">Here is exactly why thousands of people choose Arviend Sud over generic unverified astrologers.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 <div className="bg-white p-10 rounded-3xl shadow-sm text-left">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
                       <ShieldCheck className="w-8 h-8"/>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-4">Supreme Logic & Math</h3>
                    <p className="text-medium-grey leading-relaxed text-lg">We do not rely on "intuition" or guesswork. Astrology is a deeply mathematical science. We calculate planetary degrees to the exact minute to give you surgical precision.</p>
                 </div>
                 <div className="bg-white p-10 rounded-3xl shadow-sm text-left">
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                       <Heart className="w-8 h-8"/>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-4">Zero Fear Ethics</h3>
                    <p className="text-medium-grey leading-relaxed text-lg">Many astrologers use fear (Kalsarp Dosha, Manglik Dosha) to extract money. We strictly believe that every placement has a divine purpose, and we give you the strength to use it.</p>
                 </div>
                 <div className="bg-white p-10 rounded-3xl shadow-sm text-left">
                    <div className="w-16 h-16 bg-yellow-50 text-primary rounded-full flex items-center justify-center mb-6">
                       <Award className="w-8 h-8"/>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-4">No Expensive Pujas</h3>
                    <p className="text-medium-grey leading-relaxed text-lg">We advocate for behavioral modifications, color therapy, gemstone utilization, and simple household routines. We will never ask you to perform excessively costly rituals.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
};

export default About;
