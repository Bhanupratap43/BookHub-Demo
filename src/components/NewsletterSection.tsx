import React, { useState } from 'react';
import { Mail, Sparkles, Send, CheckCircle2, Gift } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Colorful Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-purple-600 via-indigo-600 to-sky-500 p-8 sm:p-14 shadow-2xl text-white">
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-pink-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-extrabold backdrop-blur-md mb-4 border border-white/30">
              <Gift className="w-4 h-4 text-amber-300" />
              Weekly Book Dispatch
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
              Never Miss Your Next Adventure
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
              Get personalized book recommendations, new release alerts, and exclusive secret chapter previews delivered right to your inbox every week.
            </p>

            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-xl border border-white/40 p-6 rounded-2xl max-w-md mx-auto text-center animate-in zoom-in-95 duration-300 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold font-heading text-white mb-1">
                  You’re On The List! 🎉
                </h3>
                <p className="text-xs text-white/80 font-medium">
                  Welcome to the BookHub Kingdom. Keep an eye on your inbox for magical book updates!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white text-slate-900 font-semibold text-sm sm:text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <Send className="w-4 h-4 text-slate-900" />
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-[11px] text-white/70 font-medium mt-4">
              🔒 No spam ever. Unsubscribe at any time with a single click.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
