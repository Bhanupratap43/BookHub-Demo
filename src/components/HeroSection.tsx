import React from 'react';
import { Sparkles, Compass, UserPlus, BookOpen, Star, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onJoinClick: () => void;
  onAIGenieClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onJoinClick,
  onAIGenieClick
}) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Soft Light Pastel Gradient Background Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-[500px] bg-gradient-to-tr from-sky-200/40 via-purple-200/50 to-pink-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-300/30 blur-3xl -z-10 rounded-full pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-pink-300/30 blur-3xl -z-10 rounded-full pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTAs & Badges */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Theme Park Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-purple-200 shadow-md shadow-purple-500/10 mb-6 animate-bounce backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Welcome to BookHub’s Magical Theme Park
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 font-heading">
              Discover Your Next <br className="hidden sm:inline" />
              <span className="magic-gradient-text inline-block relative">
                Favorite Book
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-sky-400/60 pointer-events-none"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,20 100,10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Thousands of books, endless adventures, and a magical reading experience where stories spring to life in a wonderland of discovery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto magic-gradient-btn px-8 py-4 rounded-2xl text-base font-extrabold text-white shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
              >
                <Compass className="w-5 h-5 text-sky-200 group-hover:rotate-45 transition-transform duration-300" />
                Explore Books
                <span className="px-2 py-0.5 rounded-full text-xs bg-white/20 text-white font-bold">12k+</span>
              </button>

              <button
                onClick={onJoinClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-extrabold text-slate-800 bg-white/90 hover:bg-white border-2 border-purple-200/80 shadow-lg shadow-sky-500/10 hover:border-purple-400 hover:-translate-y-1 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <UserPlus className="w-5 h-5 text-purple-600" />
                Join Free
              </button>

              <button
                onClick={onAIGenieClick}
                className="w-full sm:w-auto px-5 py-4 rounded-2xl text-sm font-bold text-slate-700 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
                AI Book Genie
              </button>
            </div>

            {/* Social Proof & Metrics */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  50K<span className="text-purple-600">+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Happy Readers</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  12K<span className="text-sky-500">+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Magical Books</div>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 font-medium">4.9/5 Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Magical Illustration Scene */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-400 rounded-3xl opacity-30 blur-2xl animate-pulse" />

              {/* Main Illustration Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-purple-500/20 bg-white group">
                <img
                  src="/src/assets/images/magical_hero_bookhub_1785661488272.jpg"
                  alt="BookHub Magical Floating Theme Park Library"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Overlay Badge 1: Now Reading */}
                <div className="absolute top-4 left-4 glass-panel p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-slow max-w-[200px]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    📖
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                      Trending Now
                    </div>
                    <div className="text-xs font-bold text-slate-800 truncate">
                      The Starlight Citadel
                    </div>
                  </div>
                </div>

                {/* Floating Overlay Badge 2: Mascot / Streak */}
                <div className="absolute bottom-4 right-4 glass-panel p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-medium max-w-[210px]">
                  <img
                    src="/src/assets/images/bookhub_mascot_emblem_1785661505297.jpg"
                    alt="Mascot"
                    className="w-10 h-10 rounded-xl object-cover border border-purple-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-xs font-extrabold text-amber-600">
                      <span>🔥 14-Day Streak</span>
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600">
                      Keep reading today!
                    </div>
                  </div>
                </div>

                {/* Floating Stars */}
                <div className="absolute top-1/2 right-3 text-2xl animate-sparkle">✨</div>
                <div className="absolute bottom-1/3 left-4 text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>⭐</div>
              </div>

              {/* Decorative Theme Park Clouds at base */}
              <div className="mt-4 flex items-center justify-center gap-3 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Free Preview Reader
                </span>
                <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-sm">
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" /> Instant Cloud Sync
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
