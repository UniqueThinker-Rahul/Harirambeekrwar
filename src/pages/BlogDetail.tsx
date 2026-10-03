import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Sparkles, CheckCircle, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const formatTitle = (raw: string) =>
  raw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? formatTitle(slug.replace(/-/g, ' ')) : 'Numerology Insight';

  return (
    <>
      <SEO />
      <div className="min-h-screen pt-6 pb-16 sm:pt-12 sm:pb-24 px-4 bg-light-grey">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-medium-grey hover:text-dark-grey mb-4 sm:mb-8 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5 sm:mr-2 group-hover:-translate-x-1 transition-transform" /> Back to all articles
          </Link>

          <article data-reveal="fade-up" className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-gray-100 p-5 sm:p-10 md:p-14 overflow-hidden relative">
            {/* Top Luxury Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />

            <header className="mb-6 sm:mb-10 pb-5 sm:pb-8 border-b border-gray-100">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-secondary border border-amber-200 mb-3 sm:mb-5">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Cosmic Insights &amp; Remedies
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-dark-grey capitalize leading-tight mb-3 sm:mb-6 tracking-tight">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs md:text-sm text-medium-grey">
                <span className="flex items-center gap-1.5 font-bold text-dark-grey">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" /> Hari Ram Beekrwar
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" /> 5 min read
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Verified Vedic Wisdom
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-medium-grey space-y-5 sm:space-y-6 leading-relaxed text-sm sm:text-base md:text-lg">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-dark-grey font-medium bg-amber-50/60 p-4 sm:p-6 rounded-2xl border-l-4 border-amber-400 shadow-xs">
                This is a deeply researched exploration of the true karmic significance of <strong className="text-dark-grey font-bold">{title}</strong>. The universe operates on precise, mathematical energetic patterns codified thousands of years ago.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-dark-grey mt-6 sm:mt-8 mb-3 sm:mb-4 leading-tight tracking-tight">
                The Science Behind Energy Alignment
              </h2>
              <p className="leading-relaxed">
                Numerology is not superstition or mysticism; it is the ancient science of vibration and resonance. Every number carries a unique planetary frequency, and when your name and birth date frequencies are dissonant, life often feels like swimming against the tide.
              </p>
              <p className="leading-relaxed">
                When you understand your numerical blueprint, you gain the foresight to make informed decisions in career, partnerships, investments, and personal growth at exactly the right time.
              </p>

              <div data-reveal="scale-up" className="my-8 sm:my-10 bg-gradient-to-br from-cosmic-navy via-slate-900 to-cosmic-navy text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-indigo-800/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />
                <div className="absolute top-2 left-4 text-5xl sm:text-6xl text-amber-400/20 font-serif leading-none">“</div>
                <p className="text-amber-200 text-base sm:text-lg md:text-xl italic font-serif leading-relaxed relative z-10 mb-3">
                  "Your destiny is a roadmap, not a locked room. Numerology simply gives you the flashlight to see the turns before you hit them."
                </p>
                <p className="text-amber-400 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider relative z-10">
                  — Hari Ram Beekrwar
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-dark-grey mt-6 sm:mt-8 mb-3 sm:mb-4 leading-tight tracking-tight">
                Practical, Non-Destructive Solutions
              </h2>
              <p className="leading-relaxed">
                Authentic remedies never demand costly rituals or structural demolition. Real shifts happen through:
              </p>
              <ul className="space-y-3 pl-0 list-none my-5 sm:my-6">
                {[
                  'Harmonizing your name spelling with your Life Path and Destiny numbers',
                  'Directional corrections and elemental alignment (Fire, Water, Earth, Air, Space) in your living quarters',
                  'Wearing the right metals and wristwatch dials to channel focused mental clarity',
                  'Fostering positive karmic cycles through disciplined daily routines and timing'
                ].map((item, idx) => (
                  <li key={idx} data-reveal="fade-up" data-delay={idx * 75} className="flex items-start gap-3 bg-gray-50/70 p-3 sm:p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-dark-grey font-medium text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed">
                By adopting these logical adjustments, you clear friction before it manifests as obstacles, clearing the way for peace, prosperity, and steady progress.
              </p>
            </div>

            {/* Bottom Call to Action */}
            <div data-reveal="scale-up" className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 bg-gradient-to-br from-amber-500/10 via-amber-50 to-orange-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-amber-200/80 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200/40" />
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-dark-grey mb-1.5 leading-snug tracking-tight">Need Personal Guidance?</h3>
                <p className="text-medium-grey text-xs sm:text-sm md:text-base leading-relaxed">
                  Book a private 1-on-1 consultation with Hari Ram Beekrwar Ji to decode your personal chart.
                </p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <Link
                  to="/booking"
                  className="btn-sweep w-full sm:w-auto text-center bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-xs sm:text-sm md:text-base transition-all shadow-md shrink-0 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  Book Session <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/919509610711?text=${encodeURIComponent(`Hello Hari Ram Ji, I read your article on "${title}" and want to ask a question.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md shrink-0 flex items-center justify-center hover:-translate-y-0.5"
                  aria-label="Ask on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
