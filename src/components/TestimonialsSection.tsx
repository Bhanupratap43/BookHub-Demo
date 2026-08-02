import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, Quote, Heart, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200 mb-3">
            <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
            Kingdom Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Loved By Thousands of Adventurers
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Here is what fellow readers and book lovers say about their journey through BookHub.
          </p>
        </div>

        {/* Testimonials Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`glass-panel p-6 rounded-3xl shadow-lg border border-white/80 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 flex flex-col justify-between relative ${
                  isEven ? 'lg:translate-y-2' : 'lg:-translate-y-2'
                }`}
              >
                {/* Speech Bubble Tail Accent */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-purple-300/60" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed mb-4">
                    "{item.quote}"
                  </p>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-extrabold bg-slate-100 text-slate-700">
                    <Sparkles className="w-3 h-3 text-purple-500" />
                    Fav: {item.favoriteBook}
                  </div>
                </div>

                {/* Profile Card Bottom */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-2xl object-cover border-2 border-purple-200 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 font-heading">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
