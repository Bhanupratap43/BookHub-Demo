import React, { useRef, useState } from 'react';
import { Book } from '../types';
import { Star, Bookmark, BookOpen, ChevronLeft, ChevronRight, Flame, Heart } from 'lucide-react';

interface TrendingBooksCarouselProps {
  books: Book[];
  favorites: string[];
  onToggleFavorite: (bookId: string) => void;
  onReadBook: (book: Book) => void;
}

export const TrendingBooksCarousel: React.FC<TrendingBooksCarouselProps> = ({
  books,
  favorites,
  onToggleFavorite,
  onReadBook
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const trendingBooks = books.filter((b) => b.isTrending);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 340;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="trending" className="py-20 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 mb-3">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
              Hot Off The Magical Press
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Trending Adventures
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">
              The most loved stories captivating thousands of readers in the kingdom right now.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 shadow-md text-slate-700 hover:text-purple-600 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous Trending Book"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-2xl magic-gradient-btn text-white shadow-md shadow-purple-500/20 transition-all hover:scale-105 active:scale-95"
              aria-label="Next Trending Book"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth"
        >
          {trendingBooks.map((book) => {
            const isFav = favorites.includes(book.id);

            return (
              <div
                key={book.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-shrink-0 group relative rounded-3xl bg-white border border-slate-200/80 p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 magic-card-glow"
              >
                {/* Book Cover Container with Soft Glow */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 shadow-md bg-slate-100 group-hover:shadow-xl transition-shadow">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/90 text-slate-900 shadow-md backdrop-blur-md">
                    {book.category}
                  </div>

                  {/* Bookmark / Favorite Toggle Button */}
                  <button
                    onClick={() => onToggleFavorite(book.id)}
                    className={`absolute top-3 right-3 p-2.5 rounded-full transition-all shadow-md backdrop-blur-md ${
                      isFav
                        ? 'bg-rose-500 text-white scale-110'
                        : 'bg-white/90 text-slate-600 hover:text-rose-500 hover:bg-white'
                    }`}
                    title={isFav ? 'Remove from favorites' : 'Bookmark book'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                  </button>

                  {/* Read Time Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-md">
                    ⏳ {book.readTime}
                  </div>
                </div>

                {/* Rating & Review Stars */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-extrabold text-slate-900">{book.rating}</span>
                    <span className="text-[11px] text-slate-500">({book.reviewsCount})</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Bestseller
                  </span>
                </div>

                {/* Book Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading truncate mb-1 group-hover:text-purple-600 transition-colors">
                  {book.title}
                </h3>

                {/* Author */}
                <p className="text-xs text-slate-500 font-semibold mb-3">
                  by {book.author}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-600 line-clamp-2 mb-5 font-normal leading-relaxed">
                  {book.description}
                </p>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onReadBook(book)}
                    className="w-full py-2.5 rounded-xl magic-gradient-btn text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-purple-500/15 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-sky-200" />
                    Read Now
                  </button>

                  <button
                    onClick={() => onToggleFavorite(book.id)}
                    className={`p-2.5 rounded-xl border transition-all ${
                      isFav
                        ? 'bg-rose-50 border-rose-200 text-rose-600'
                        : 'border-slate-200 text-slate-500 hover:text-purple-600 hover:border-purple-200'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
