import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Sparkles, X, Filter } from 'lucide-react';
import { FilterState } from '../types';
import { CATEGORIES_DATA } from '../data/categoriesData';

interface SearchSectionProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalResults: number;
}

const PLACEHOLDERS = [
  "Search for 'The Starlight Citadel'...",
  "Search 'Fantasy', 'Programming', 'Sci-Fi'...",
  "Search by author 'Aurelia Pendelton'...",
  "Search 'AI', 'Habits', 'Dragons', 'Mystery'..."
];

export const SearchSection: React.FC<SearchSectionProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults
}) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="search" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-100/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Magical Search Engine
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Find Your Perfect Adventure
              </h2>
            </div>

            <div className="text-xs font-bold text-slate-500 bg-white/80 px-4 py-2 rounded-2xl border border-slate-200/80 shadow-sm">
              Showing <span className="text-purple-600 font-extrabold">{totalResults}</span> Enchanted Books
            </div>
          </div>

          {/* Large Rounded Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-purple-500">
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
              placeholder={PLACEHOLDERS[placeholderIndex]}
              className="w-full pl-14 pr-12 py-4 sm:py-5 text-sm sm:text-base font-semibold text-slate-900 bg-white/90 border-2 border-purple-200/80 rounded-2xl shadow-inner focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all placeholder:text-slate-400 placeholder:transition-opacity"
            />
            {filters.searchQuery && (
              <button
                onClick={() => onFilterChange({ searchQuery: '' })}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Chips Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-purple-500" />
              Filters:
            </div>

            {/* Category Filter Dropdown / Chip */}
            <select
              value={filters.selectedCategory}
              onChange={(e) => onFilterChange({ selectedCategory: e.target.value })}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm focus:outline-none focus:border-purple-500"
            >
              <option value="all">All Genres</option>
              {CATEGORIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Sorting Filter Chips */}
            {[
              { id: 'all', label: 'All Books' },
              { id: 'popular', label: 'Most Popular 🔥' },
              { id: 'newest', label: 'Newest Releases ✨' },
              { id: 'rating', label: 'Highest Rated ⭐' }
            ].map((chip) => {
              const isActive = filters.selectedFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => onFilterChange({ selectedFilter: chip.id as FilterState['selectedFilter'] })}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}

            {/* Reset Filters */}
            {(filters.searchQuery || filters.selectedCategory !== 'all' || filters.selectedFilter !== 'all') && (
              <button
                onClick={onResetFilters}
                className="ml-auto px-3 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" /> Clear Filters
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
