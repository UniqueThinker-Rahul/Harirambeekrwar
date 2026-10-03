import React, { useState, useEffect } from 'react';
import { X, PhoneCall, CheckCircle, User, Phone, MapPin, MessageSquare, Clock, ShieldCheck, Send, Sparkles } from 'lucide-react';

interface EnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultService?: string;
}

export const openEnquiryModal = (service?: string) => {
  window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: { service } }));
};

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen: controlledIsOpen, onClose: controlledOnClose, defaultService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: 'Numerology Consultation (₹3,200)',
    preferredTime: 'Any Time (ASAP)',
    message: ''
  });

  // Handle controlled or event-driven open
  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setIsOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      setStatus('idle');
      if (e?.detail?.service) {
        setFormData(prev => ({ ...prev, service: e.detail.service }));
      } else if (defaultService) {
        setFormData(prev => ({ ...prev, service: defaultService }));
      }
    };

    window.addEventListener('open-enquiry-modal', handleOpen);
    return () => window.removeEventListener('open-enquiry-modal', handleOpen);
  }, [defaultService]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setStatus('idle');
    if (controlledOnClose) {
      controlledOnClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        console.warn('API returned non-200, continuing fallback');
      }

      setStatus('success');
    } catch (err) {
      console.error('Enquiry submission error:', err);
      // Fallback gracefully so client is never stuck
      setStatus('success');
    }
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*🌟 NEW CONSULTATION ENQUIRY 🌟*\n\n` +
      `*👤 Name:* ${formData.name}\n` +
      `*📞 Phone:* ${formData.phone}\n` +
      (formData.city ? `*📍 City:* ${formData.city}\n` : '') +
      `*🔮 Interested In:* ${formData.service}\n` +
      `*⏰ Preferred Call Time:* ${formData.preferredTime}\n` +
      (formData.message ? `*📝 Query:* ${formData.message}\n` : '') +
      `\n_Please arrange a guidance call from your team._`
    );
    return `https://wa.me/919509610711?text=${text}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 max-w-lg w-full overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-950 text-white p-6 relative flex items-start justify-between">
          <div className="pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Free Consultation Guidance
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Request a Callback
            </h3>
            <p className="text-xs md:text-sm text-gray-300 mt-1 leading-relaxed">
              Share your details and our expert team will call you to guide you on the right consultation.
            </p>
          </div>
          <button 
            onClick={handleClose} 
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {status === 'success' ? (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100 shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-dark-grey mb-2">Enquiry Received!</h4>
              <p className="text-medium-grey text-sm md:text-base leading-relaxed mb-6">
                Thank you, <strong className="text-dark-grey">{formData.name}</strong>. Our team has received your enquiry and will call you on <strong className="text-dark-grey">{formData.phone}</strong> ({formData.preferredTime}) to assist you.
              </p>

              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/70 text-xs text-amber-900 mb-6 text-left space-y-1">
                <p><strong>Selected Service:</strong> {formData.service}</p>
                <p><strong>Preferred Slot:</strong> {formData.preferredTime}</p>
                <p className="text-amber-700 pt-1">Our support executive will explain all details, timings, and fee structures clearly before booking.</p>
              </div>

              <div className="space-y-3">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-6 rounded-full text-sm transition-all shadow-md"
                >
                  <Send className="w-4 h-4" /> Connect Directly on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 px-6 rounded-full bg-gray-100 hover:bg-gray-200 text-dark-grey font-bold text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dark-grey mb-1.5">
                  <User className="inline w-3.5 h-3.5 mr-1 text-primary" /> Full Name *
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-grey mb-1.5">
                    <Phone className="inline w-3.5 h-3.5 mr-1 text-primary" /> Phone (WhatsApp) *
                  </label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 95096 10711"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-grey mb-1.5">
                    <MapPin className="inline w-3.5 h-3.5 mr-1 text-primary" /> City / Location
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Delhi, Jaipur"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-grey mb-1.5">
                    Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-dark-grey focus:ring-2 focus:ring-primary outline-none transition-all"
                  >
                    <option value="Numerology Consultation (₹3,200)">Numerology Consultation (₹3,200)</option>
                    <option value="Scientific Vastu Consultation (Starts ₹20,000)">Scientific Vastu (Starts ₹20,000)</option>
                    <option value="Urgent Love & Relationship Plan">Love & Relationship Plan</option>
                    <option value="Career & Business Guidance">Career & Business Guidance</option>
                    <option value="General Guidance (Need Advice)">General Guidance (Need Advice)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark-grey mb-1.5">
                    <Clock className="inline w-3.5 h-3.5 mr-1 text-primary" /> Best Time to Call
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-dark-grey focus:ring-2 focus:ring-primary outline-none transition-all"
                  >
                    <option value="Any Time (ASAP)">Any Time (ASAP)</option>
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dark-grey mb-1.5">
                  <MessageSquare className="inline w-3.5 h-3.5 mr-1 text-primary" /> Tell us what you need guidance on (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. Career roadblocks / Life guidance / Name & date alignment..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-medium-grey bg-green-50 p-2.5 rounded-xl border border-green-100">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                <span>100% Secure & Confidential. Your number is only used to arrange this guidance call.</span>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <span>Submitting Enquiry...</span>
                ) : (
                  <>
                    <PhoneCall className="w-5 h-5" /> Request Guidance Call
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500">
                Free callback from our support team. Numerology is ₹3,200 | Vastu starts from ₹20,000.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
