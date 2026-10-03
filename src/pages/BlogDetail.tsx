import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Sparkles, CheckCircle, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? slug.replace(/-/g, ' ') : 'Numerology Insight';

  return (
    <>
      <SEO
        title={`${title} - Cosmic Wisdom Blog | HARI RAM BEEKRWAR`}
        description={`Read detailed insights on ${title}. Learn about Vedic numerology, Vastu Shastra, and practical remedies to improve your cosmic alignment.`}
      />
      <div className="min-h-screen py-10 sm:py-20 px-4 bg-light-grey pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-medium-grey hover:text-dark-grey mb-6 sm:mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to all articles
          </Link>

          <article className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-gray-100 p-5 sm:p-10 md:p-14 overflow-hidden">
            <header className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-gray-100">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-secondary border border-amber-200 mb-4 sm:mb-5">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Cosmic Insights & Remedies
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-grey capitalize leading-tight mb-4 sm:mb-6 tracking-tight">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-medium-grey">
                <span className="flex items-center gap-1.5 font-medium text-dark-grey">
                  <User className="w-4 h-4 text-amber-500" /> Hari ram Beekrwar
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" /> 5 min read
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <ShieldCheck className="w-4 h-4" /> Verified Vedic Wisdom
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-medium-grey space-y-5 sm:space-y-6 leading-relaxed text-sm sm:text-base">
              <p className="text-base sm:text-xl leading-relaxed text-dark-grey font-medium bg-amber-50/50 p-4 sm:p-6 rounded-2xl border-l-4 border-amber-400">
                This is a deeply researched exploration of the true karmic significance of <strong className="text-dark-grey">{title}</strong>. The universe operates on precise, mathematical energetic patterns codified thousands of years ago.
              </p>

              <h2 className="text-xl sm:text-3xl font-bold text-dark-grey mt-6 sm:mt-8 mb-3 sm:mb-4">
                The Science Behind Energy Alignment
              </h2>
              <p>
                Numerology is not superstition or mysticism; it is the ancient science of vibration and resonance. Every number carries a unique planetary frequency, and when your name and birth date frequencies are dissonant, life often feels like swimming against the tide.
              </p>
              <p>
                When you understand your numerical blueprint, you gain the foresight to make informed decisions in career, partnerships, investments, and personal growth at exactly the right time.
              </p>

              <div className="my-8 sm:my-10 bg-gradient-to-br from-cosmic-navy via-dark-grey to-cosmic-navy text-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-indigo-800/80 relative overflow-hidden">
                <div className="absolute top-2 left-4 text-5xl sm:text-6xl text-amber-400/20 font-serif leading-none">“</div>
                <p className="text-amber-200 text-base sm:text-xl italic font-serif leading-relaxed relative z-10 mb-3">
                  "Your destiny is a roadmap, not a locked room. Numerology simply gives you the flashlight to see the turns before you hit them."
                </p>
                <p className="text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-wider relative z-10">
                  — Hari ram Beekrwar
                </p>
              </div>

              <h2 className="text-xl sm:text-3xl font-bold text-dark-grey mt-6 sm:mt-8 mb-3 sm:mb-4">
                Practical, Non-Destructive Solutions
              </h2>
              <p>
                Authentic remedies never demand costly rituals or structural demolition. Real shifts happen through:
              </p>
              <ul className="space-y-3 pl-0 list-none my-5 sm:my-6">
                {[
                  'Harmonizing your name spelling with your Life Path and Destiny numbers',
                  'Directional corrections and elemental alignment (Fire, Water, Earth, Air, Space) in your living quarters',
                  'Wearing the right metals and wristwatch dials to channel focused mental clarity',
                  'Fostering positive karmic cycles through disciplined daily routines and timing'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-dark-grey font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                By adopting these logical adjustments, you clear friction before it manifests as obstacles, clearing the way for peace, prosperity, and steady progress.
              </p>
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 bg-gradient-to-br from-amber-500/10 via-amber-50 to-orange-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-amber-200/60">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-grey mb-1">Need Personal Guidance?</h3>
                <p className="text-medium-grey text-xs sm:text-sm">
                  Book a private 1-on-1 consultation with Hari ram Ji to decode your personal chart.
                </p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <Link
                  to="/booking"
                  className="btn-sweep w-full sm:w-auto text-center bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  Book Session <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/919509610711?text=${encodeURIComponent(`Hello Hari Ram Ji, I read your article on "${title}" and want to ask a question.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-md shrink-0 flex items-center justify-center"
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
