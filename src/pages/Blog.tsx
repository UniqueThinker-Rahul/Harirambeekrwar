import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => (
  <>
    <SEO 
      title="Cosmic Wisdom Blog | Astrology Insights" 
      description="Read the latest articles on Vedic astrology, Vastu tips, numerology, and cosmic energy by Arviend Sud."
    />
    <div className="min-h-screen py-20 px-4 bg-light-grey">
      <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-dark-grey">Cosmic Wisdom Blog</h1>
          <p className="text-center text-medium-grey text-lg mb-12 max-w-2xl mx-auto">Stay updated with the latest astrological transits, Vastu tips, and spiritual life hacks to continuously improve your energy.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <p className="text-xs text-primary font-bold mb-3 tracking-widest uppercase">Astrology</p>
                  <h2 className="text-2xl font-bold mb-4 text-dark-grey">The Impact of Saturn Transit on Your Zodiac</h2>
                  <p className="text-medium-grey mb-6 leading-relaxed">Discover how the recent planetary shifts affect your daily life, career, and spiritual journey. Learn practical remedies to mitigate negative effects.</p>
                  <Link to="/blog/saturn-transit" className="text-secondary font-bold hover:text-red-800 transition-colors">Read Full Article &rarr;</Link>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <p className="text-xs text-primary font-bold mb-3 tracking-widest uppercase">Vastu Shastra</p>
                  <h2 className="text-2xl font-bold mb-4 text-dark-grey">5 Vastu Tips for Massive Business Growth</h2>
                  <p className="text-medium-grey mb-6 leading-relaxed">Enhance productivity and positive financial energy flow in your workspace with these simple, highly effective directional adjustments.</p>
                  <Link to="/blog/vastu-office" className="text-secondary font-bold hover:text-red-800 transition-colors">Read Full Article &rarr;</Link>
              </div>
          </div>
      </div>
    </div>
  </>
);

export default Blog;
