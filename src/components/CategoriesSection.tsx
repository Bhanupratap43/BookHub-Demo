import React from 'react';
import { CATEGORIES_DATA } from '../data/categoriesData';
import {
  Wand2,
  Rocket,
  Code2,
  Cpu,
  Landmark,
  UserCheck,
  Briefcase,
  Sparkles,
  Compass,
  Heart,
  Baby,
  Zap,
  ArrowRight
} from 'lucide-react';

interface CategoriesSectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Wand2,
  Rocket,
  Code2,
  Cpu,
  Landmark,
  UserCheck,
  Briefcase,
  Sparkles,
  Compass,
  Heart,
  Baby,
  Zap
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section id="categories" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold border border-purple-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Explore Book Kingdoms
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Magical Book Categories
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Step through enchanted category portals and discover worlds crafted just for your curiosity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat) => {
            const IconComponent = ICON_MAP[cat.iconName] || Sparkles;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const searchEl = document.getElementById('search');
                  if (searchEl) {
                    searchEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`group relative p-5 rounded-3xl text-left transition-all duration-300 transform hover:-translate-y-2 focus:outline-none ${
                  isSelected
                    ? 'bg-gradient-to-br ' + cat.gradient + ' text-white shadow-xl shadow-purple-500/25 ring-4 ring-purple-300 scale-105'
                    : 'glass-panel hover:bg-white text-slate-800 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Floating Glow Effect */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-white/20 text-white' : cat.bgColor + ' ' + cat.textColor
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className={`text-sm sm:text-base font-extrabold font-heading mb-1 ${
                  isSelected ? 'text-white' : 'text-slate-900 group-hover:text-purple-600'
                }`}>
                  {cat.name}
                </h3>

                <p className={`text-[11px] font-semibold mb-3 ${
                  isSelected ? 'text-white/80' : 'text-slate-500'
                }`}>
                  {cat.count.toLocaleString()} Books
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100/40">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isSelected ? 'text-white/90' : 'text-purple-600'
                  }`}>
                    Explore
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                    isSelected ? 'text-white' : 'text-slate-400 group-hover:text-purple-600'
                  }`} />
                </div>

                {/* Sparkling Star Decoration */}
                <span className="absolute top-3 right-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ✨
                </span>
              </button>
            );
          })}
        </div>

        {/* Show All / Reset filter shortcut */}
        {selectedCategory !== 'all' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => onSelectCategory('all')}
              className="px-6 py-2.5 rounded-full text-xs font-extrabold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all shadow-sm"
            >
              Show All Categories (Reset Filter)
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
