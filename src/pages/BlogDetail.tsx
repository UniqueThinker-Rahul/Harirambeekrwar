import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const BlogDetail = () => {
    const { slug } = useParams();
    const title = slug?.replace('-', ' ') || 'Astrology Insight';
    
    return (
        <>
            <SEO 
                title={`${title} - Cosmic Wisdom Blog | HARIRAM BEEKRWAR`} 
                description={`Read our detailed insights on ${title}. Learn about Vedic astrology, Vastu, and spiritual remedies to improve your cosmic alignment.`}
            />
            <div className="min-h-screen py-20 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                   <Link to="/blog" className="inline-flex items-center text-medium-grey hover:text-primary mb-10 transition-colors font-semibold">
                       <ArrowLeft className="w-5 h-5 mr-2" /> Back to all articles
                   </Link>
                   
                   <article>
                       <header className="mb-10">
                          <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Cosmic Insights</p>
                          <h1 className="text-4xl md:text-6xl font-bold text-dark-grey capitalize leading-tight mb-6">{title}</h1>
                          <div className="flex items-center text-medium-grey text-sm">
                              <span>By Master Hariram Beekrwar</span>
                              <span className="mx-3">•</span>
                              <span>5 min read</span>
                          </div>
                       </header>
                       
                       <div className="prose prose-lg max-w-none text-medium-grey">
                           <p className="text-xl leading-relaxed mb-8 text-dark-grey font-medium">This is a deeply studied article exploring the true karmic significance of {title}. The universe operates on precise, mathematical energetic patterns that ancient seers codified thousands of years ago.</p>
                           
                           <p className="mb-6 leading-relaxed">It is not magic. It is the science of energy and alignment. When you understand the specific gravitational and energetic pull of planetary bodies based on your birth chart, you stop swimming against the current. You start leveraging universal timing.</p>
                           
                           <h2 className="text-2xl font-bold text-dark-grey mt-10 mb-4">The Logic Behind the Remedy</h2>
                           <p className="mb-6 leading-relaxed">Most people search for quick fixes. But authentic Vedic wisdom requires us to perform specific actions—donations, wearing specific frequencies (gemstones), or directional alignments (Vastu)—to balance the exact dosha causing friction.</p>
                           
                           <div className="bg-yellow-50 border-l-4 border-primary p-6 my-10 rounded-r-xl">
                               <p className="font-semibold text-dark-grey text-lg italic">"Your destiny is a roadmap, not a locked room. Astrology simply gives you the flashlight to see the turns before you hit them."</p>
                           </div>
                           
                           <p className="mb-6 leading-relaxed">By embracing these deeply logical principles, we can align ourselves with the flow of nature, clear obstacles before they fully manifest, and attract sustainable abundance.</p>
                       </div>
                   </article>
                   
                   <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between bg-light-grey p-8 rounded-3xl">
                       <div className="mb-6 sm:mb-0">
                           <h3 className="text-2xl font-bold text-dark-grey mb-2">Need personal guidance?</h3>
                           <p className="text-medium-grey">Book a 1-on-1 session to discuss your chart.</p>
                       </div>
                       <Link to="/booking" className="bg-dark-grey text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-md shrink-0">
                           Book Consultation
                       </Link>
                   </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
