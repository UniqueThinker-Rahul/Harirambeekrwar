import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle, Clock } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  
  const title = slug ? slug.replace(/-/g, ' ') : 'Astrology Service';
  
  return (
    <>
      <SEO 
        title={`${title.toUpperCase()} | Professional Consultation`} 
        description={`Book a personalized ${title} session. Discover absolute clarity and get practical remedies tailored specifically for your life's challenges.`}
      />
      <div className="min-h-[70vh] bg-light-grey pb-24">
        <section className="bg-dark-grey text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">{title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Absolute clarity begins here. Uncover the root cause of your obstacles and get actionable remedies.</p>
        </section>

        <div className="max-w-4xl mx-auto px-4 -mt-10">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-dark-grey mb-6">What You Will Discover</h2>
            <p className="text-lg text-medium-grey mb-8 leading-relaxed">
              Our {title} consultation is not a generic computer-generated report. It is a deep, personalized analysis performed by seasoned experts to give you accurate insights into your past, present, and future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-dark-grey mb-6 border-b pb-2">Session Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Pinpoint hidden obstacles blocking your success",
                    "Understand your absolute cosmic purpose",
                    "Receive simple, inexpensive, yet powerful remedies",
                    "Clear all doubts with a dedicated Q&A segment"
                  ].map((item, i) => (
                    <li key={i} className="flex flex-start text-medium-grey">
                      <CheckCircle className="w-6 h-6 text-tertiary mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                <h3 className="text-xl font-bold text-dark-grey mb-4">Session Details</h3>
                <div className="flex items-center text-medium-grey mb-4">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <span>Duration: 45 - 60 Minutes</span>
                </div>
                <div className="flex items-center text-medium-grey mb-8">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Format: Google Meet / Phone Call</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-medium-grey mb-3">Spots fill up extremely fast.</p>
                  <Link to="/booking" className="block w-full bg-primary text-dark-grey px-6 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-sm text-center">
                    Secure Your Spot Now
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-grey mb-6 text-center">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex text-primary mb-3">
                    {"★★★★★"}
                  </div>
                  <p className="text-medium-grey italic mb-4">"The consultation was an eye-opener. The remedies provided were simple and incredibly effective. I felt a positive shift within just two weeks."</p>
                  <p className="font-bold text-dark-grey">- Aman K.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex text-primary mb-3">
                    {"★★★★★"}
                  </div>
                  <p className="text-medium-grey italic mb-4">"Highly accurate readings. The guidance given for my career obstacles helped me secure a promotion I had been waiting for years."</p>
                  <p className="font-bold text-dark-grey">- Sneha P.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100 text-sm text-medium-grey text-center">
              Your details are kept 100% confidential. Trusted by thousands globally.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
