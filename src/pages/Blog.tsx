import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, ArrowRight, BookOpen, Compass, ShieldCheck, User } from 'lucide-react';
import SEO from '../components/SEO';

const POSTS = [
  {
    slug: 'saturn-transit',
    category: 'Vedic Numerology',
    title: 'The Impact of Saturn Transit on Your Zodiac & Numbers',
    desc: 'Discover how Saturn (Shani Dev) cycles influence your work, money, and personal karmic milestones. Learn practical, non-destructive remedies to align with the energy.',
    readTime: '5 min read',
    date: 'Oct 2026',
    author: 'Hari ram Beekrwar',
    color: 'from-amber-500 to-orange-500',
    icon: Sparkles,
  },
  {
    slug: 'vastu-office',
    category: 'Vastu Shastra',
    title: '5 Practical Vastu Tips for Massive Business Growth & Cash Flow',
    desc: 'Enhance productivity and clear financial blockages in your office or workspace with directional corrections, desk placement, and elemental balance — zero demolition needed.',
    readTime: '6 min read',
    date: 'Sep 2026',
    author: 'Hari ram Beekrwar',
    color: 'from-indigo-500 to-blue-600',
    icon: Compass,
  },
  {
    slug: 'name-correction-science',
    category: 'Numerology Science',
    title: 'How Name Spelling Correction Changes Your Frequency',
    desc: 'Every letter carries a distinct planetary frequency. Discover why altering a single alphabet can bring harmony between your birth date and societal identity.',
    readTime: '4 min read',
    date: 'Aug 2026',
    author: 'Hari ram Beekrwar',
    color: 'from-emerald-500 to-teal-600',
    icon: BookOpen,
  },
  {
    slug: 'wristwatch-numerology',
    category: 'Wristwatch Therapy',
    title: 'Wristwatch Numerology: Choosing Dial Colors for Authority',
    desc: 'Your wristwatch is in constant contact with your pulse and meridian lines. Learn how dial shapes, metal colors, and straps attract financial clarity.',
    readTime: '5 min read',
    date: 'Jul 2026',
    author: 'Hari ram Beekrwar',
    color: 'from-rose-500 to-amber-500',
    icon: Sparkles,
  },
];

const Blog = () => (
  <>
    <SEO
      title="Cosmic Wisdom Blog | Numerology & Vastu Insights — Hari ram Beekrwar"
      description="Read authentic, researched articles on Vedic numerology, Vastu Shastra tips, name correction, and cosmic energy alignment by Hari ram Beekrwar."
    />
    <div className="min-h-screen bg-light-grey pb-28">
      {/* Cosmic Hero */}
      <section className="bg-hero-dark text-white py-14 sm:py-24 md:py-32 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-navy/80 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 px-5 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold mb-5 text-xs sm:text-sm tracking-widest uppercase">
            <BookOpen className="w-4 h-4 text-amber-400" /> Cosmic Wisdom Journal
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Numerology &amp; Vastu<br />Insights &amp; Remedies
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Practical knowledge, planetary shifts, and logical spiritual guides to help you master your surrounding energy and life path.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {POSTS.map((post, idx) => {
            const PostIcon = post.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-secondary border border-amber-200">
                    <PostIcon className="w-3.5 h-3.5 text-primary" /> {post.category}
                  </span>
                  <span className="text-xs text-medium-grey flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-dark-grey mb-2.5 sm:mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-medium-grey text-xs sm:text-base leading-relaxed mb-5 sm:mb-6 flex-grow">
                  {post.desc}
                </p>

                <div className="pt-4 sm:pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-medium-grey font-medium">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span>{post.author}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-secondary group-hover:text-amber-600 transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-white text-center shadow-xl border border-indigo-800/60 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3">Looking for Personalized Life Answers?</h3>
            <p className="text-gray-300 text-xs sm:text-base mb-5 sm:mb-6 leading-relaxed">
              Articles give foundational knowledge, but your birth chart is 100% unique. Book a private 1-on-1 session to decode your destiny.
            </p>
            <Link
              to="/booking"
              className="btn-sweep inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book 1-on-1 Consultation (₹3,200) <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Blog;
