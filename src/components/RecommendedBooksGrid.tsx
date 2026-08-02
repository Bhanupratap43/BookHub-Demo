import React from 'react';
import { Book } from '../types';
import { Star, Heart, BookOpen, Bookmark, Sparkles, Clock } from 'lucide-react';

interface RecommendedBooksGridProps {
  books: Book[];
  favorites: string[];
  onToggleFavorite: (bookId: string) => void;
  onReadBook: (book: Book) => void;
}

export const RecommendedBooksGrid: React.FC<RecommendedBooksGridProps> = ({
  books,
  favorites,
  onToggleFavorite,
  onReadBook
}) => {
  return (
    <section className="pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Empty state if search returned no results */}
        {books.length === 0 ? (
          <div className="glass-panel p-12 text-center rounded-3xl max-w-lg mx-auto">
            <div className="text-5xl mb-4">🔍✨</div>
            <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
              No Magical Books Found
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Try adjusting your search terms or genre filters to discover more hidden adventures.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {books.map((book) => {
              const isFav = favorites.includes(book.id);

              return (
                <div
                  key={book.id}
                  className="group relative rounded-3xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between magic-card-glow"
                >
                  <div>
                    {/* Cover Container */}
                    <div className="relative h-60 rounded-2xl overflow-hidden mb-4 bg-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />

                      {/* Genre Tag */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-white/90 text-purple-700 shadow-md backdrop-blur-md">
                        {book.category}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => onToggleFavorite(book.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-md backdrop-blur-md ${
                          isFav
                            ? 'bg-rose-500 text-white scale-110'
                            : 'bg-white/90 text-slate-600 hover:text-rose-500 hover:bg-white'
                        }`}
                        title={isFav ? 'Remove favorite' : 'Add to favorites'}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                      </button>

                      {/* Read Time Tag */}
                      <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/70 text-white backdrop-blur-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-300" />
                        {book.readTime}
                      </div>
                    </div>

                    {/* Book Metadata */}
                    <div className="flex items-center justify-between text-xs mb-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-extrabold text-slate-800">{book.rating}</span>
                        <span className="text-[10px] text-slate-400">({book.reviewsCount})</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">
                        {book.pages} pages
                      </span>
                    </div>

                    {/* Title & Author */}
                    <h3 className="text-base font-extrabold text-slate-900 font-heading line-clamp-1 mb-1 group-hover:text-purple-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      by {book.author}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {book.description}
                    </p>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onReadBook(book)}
                      className="w-full py-2 rounded-xl bg-slate-900 hover:bg-purple-600 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-sky-300" />
                      Preview Book
                    </button>

                    <button
                      onClick={() => onToggleFavorite(book.id)}
                      className={`p-2 rounded-xl border transition-all ${
                        isFav
                          ? 'bg-rose-50 border-rose-200 text-rose-600'
                          : 'border-slate-200 text-slate-500 hover:text-purple-600'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
