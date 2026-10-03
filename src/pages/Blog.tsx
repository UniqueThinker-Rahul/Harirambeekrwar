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
    author: 'Hari Ram Beekrwar',
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
    author: 'Hari Ram Beekrwar',
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
    author: 'Hari Ram Beekrwar',
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
    author: 'Hari Ram Beekrwar',
    color: 'from-rose-500 to-amber-500',
    icon: Sparkles,
  },
];

const Blog = () => (
  <>
    <SEO />
    <div className="min-h-screen bg-light-grey pb-28">
      {/* Cosmic Hero */}
      <section className="bg-hero-dark text-white pt-10 pb-12 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 px-4 text-center relative overflow-hidden starfield" style={{ backgroundColor: '#0F172A' }}>
        {/* Ambient Lighting Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 sm:-top-40 sm:-right-40 w-56 sm:w-96 h-56 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-28 -left-16 sm:top-40 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5 sm:mb-6 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <BookOpen className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="truncate">Cosmic Wisdom Journal</span>
          </div>

          {/* Fluid Heading */}
          <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 text-white leading-[1.2] sm:leading-[1.15] tracking-tight">
            Numerology &amp; Vastu{' '}
            <span className="text-shimmer inline-block">Insights &amp; Remedies</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl mx-auto text-slate-300/90 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-5 sm:mb-6 px-1 sm:px-0">
            Actionable Vedic wisdom, planetary shifts, and non-destructive remedies for career and personal prosperity.
          </p>

          {/* Category Chips */}
          <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-300">
            <span className="bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full"># Numerology</span>
            <span className="bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full"># Vastu Shastra</span>
            <span className="bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full"># Wristwatch Therapy</span>
            <span className="bg-slate-900/60 border border-slate-700/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full"># Planetary Remedies</span>
          </div>
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
                data-reveal="fade-up"
                data-delay={idx * 150}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group border border-gray-100 hover:border-amber-200/80 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${post.color}`} />
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-secondary border border-amber-200 shadow-sm">
                    <PostIcon className="w-3.5 h-3.5 text-primary" /> {post.category}
                  </span>
                  <span className="text-xs text-medium-grey flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-dark-grey mb-2.5 sm:mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-medium-grey leading-relaxed mb-6 flex-grow">
                  {post.desc}
                </p>

                <div className="pt-4 sm:pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-medium-grey font-medium">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span>{post.author}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-secondary group-hover:text-amber-600 transition-colors"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Banner */}
        <div data-reveal="scale-up" className="mt-12 sm:mt-16 bg-gradient-to-br from-cosmic-navy via-slate-950 to-cosmic-navy rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-white text-center shadow-2xl border border-indigo-800/80 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">Personal Guidance</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2.5 sm:mb-3 text-white leading-tight">Looking for Personalized Life Answers?</h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mb-6 leading-relaxed max-w-xl mx-auto">
              Articles give foundational knowledge, but your birth chart is 100% unique. Book a private 1-on-1 session to decode your destiny.
            </p>
            <Link
              to="/booking"
              className="btn-sweep inline-flex justify-center items-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm hover:from-amber-500 hover:to-amber-700 transition-all shadow-xl hover:-translate-y-0.5"
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
