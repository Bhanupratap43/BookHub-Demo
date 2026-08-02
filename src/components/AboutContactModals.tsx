import React, { useState } from 'react';
import { X, Sparkles, MapPin, Mail, Phone, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl">
              🏰
            </div>
            <h3 className="text-xl font-extrabold font-heading text-slate-900">
              About BookHub Kingdom
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            BookHub was born from a magical vision: <strong className="text-purple-700">What if opening a digital library felt as exhilarating as stepping through the gates of Disneyland?</strong>
          </p>
          <p>
            Founded in 2026, BookHub combines soft glowing glassmorphic aesthetics, interactive reading progress trackers, and real-time AI book recommendations to create a joyful sanctuary for book lovers of all ages.
          </p>
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 space-y-2">
            <h4 className="font-extrabold text-purple-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" /> Our Kingdom Promises
            </h4>
            <ul className="space-y-1 text-slate-700 font-medium">
              <li>✨ Free sample previews for every book</li>
              <li>✨ Ad-free, eye-soothing day and night reading modes</li>
              <li>✨ Cross-device cloud reading progress sync</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-xl">
              💌
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-heading text-slate-900">
                Contact Us
              </h3>
              <p className="text-xs text-slate-500 font-medium">BookHub Kingdom Helpdesk & Inquiries</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Lead Details Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-sky-50 border border-purple-100 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-sky-500 text-white flex items-center justify-center text-xl font-bold shadow-md">
              👨‍💼
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-purple-200 text-purple-800 mb-0.5">
                Primary Contact Lead
              </span>
              <h4 className="text-sm font-extrabold text-slate-900 font-heading">
                Bhanu Pratap
              </h4>
              <p className="text-xs text-slate-600 font-semibold flex items-center gap-1 mt-1">
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <a href="tel:707895****" className="hover:underline text-purple-700">Phone: 707895****</a>
              </p>
              <p className="text-xs text-slate-600 font-semibold flex items-center gap-1 mt-0.5">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <span>Email: contact@bookhub.com</span>
              </p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-heading text-slate-900 mb-1">
              Message Sent to Bhanu Pratap!
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Thank you for reaching out. Bhanu Pratap and our support team will reply within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="magic-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-md"
            >
              Back to Reading
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-3.5"
          >
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="reader@bookhub.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Message or Inquiry
              </label>
              <textarea
                required
                rows={3}
                placeholder="Write your message for Bhanu Pratap..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:border-purple-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full magic-gradient-btn py-3 rounded-xl text-xs font-extrabold text-white shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" /> Send Message to Bhanu Pratap
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
