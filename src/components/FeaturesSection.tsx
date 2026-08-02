import React from 'react';
import { FEATURES_DATA } from '../data/featuresData';
import {
  BookOpen,
  Cloud,
  Sparkles,
  Bookmark,
  WifiOff,
  SunMoon,
  Zap,
  Users,
  ShieldCheck
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  BookOpen,
  Cloud,
  Sparkles,
  Bookmark,
  WifiOff,
  SunMoon,
  Zap,
  Users
};

export const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-sky-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-purple-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Kingdom Pass Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Designed for Ultimate Reading Delight
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Every feature on BookHub is crafted like an attraction in a magical theme park, tailored to give you pure reading comfort.
          </p>
        </div>

        {/* Features 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES_DATA.map((feat) => {
            const IconComponent = ICON_MAP[feat.iconName] || Sparkles;

            return (
              <div
                key={feat.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/80 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.badgeGradient} text-white flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-slate-100 text-slate-700 border border-slate-200`}>
                      {feat.badge}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 font-heading mb-2 group-hover:text-purple-600 transition-colors">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Sparkle Accent */}
                <div className="pt-4 mt-6 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-purple-500 transition-colors">
                  <span>Enchanted Attraction</span>
                  <span className="text-sm">✨</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

interface FeaturesSectionProps {}
