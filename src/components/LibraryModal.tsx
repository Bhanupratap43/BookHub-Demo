import React from 'react';
import { Book } from '../types';
import { X, Heart, BookOpen, Trash2, Bookmark, Sparkles } from 'lucide-react';

interface LibraryModalProps {
  favoriteBooks: Book[];
  onClose: () => void;
  onRemoveFavorite: (bookId: string) => void;
  onReadBook: (book: Book) => void;
}

export const LibraryModal: React.FC<LibraryModalProps> = ({
  favoriteBooks,
  onClose,
  onRemoveFavorite,
  onReadBook
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-end p-2 sm:p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg h-full max-h-[95vh] p-6 shadow-2xl border border-purple-100 flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-2xl bg-rose-100 text-rose-600">
              <Heart className="w-5 h-5 fill-rose-500" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-heading text-slate-900">
                My Book Library
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {favoriteBooks.length} Saved Kingdom Adventures
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Favorite Books */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {favoriteBooks.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="text-5xl mb-3">📚✨</div>
              <h4 className="text-base font-bold text-slate-800 font-heading mb-1">
                Your Library is Empty
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                Click the heart or bookmark icon on any book card to save it to your kingdom bookshelf!
              </p>
              <button
                onClick={onClose}
                className="magic-gradient-btn px-6 py-2.5 rounded-xl text-xs font-extrabold text-white shadow-md"
              >
                Browse Books Now
              </button>
            </div>
          ) : (
            favoriteBooks.map((book) => (
              <div
                key={book.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex gap-4 items-center"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-16 h-22 rounded-xl object-cover shadow-sm flex-shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-purple-100 text-purple-700 mb-1">
                    {book.category}
                  </span>
                  <h4 className="text-sm font-extrabold font-heading text-slate-900 truncate">
                    {book.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-2">
                    by {book.author}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onReadBook(book);
                      }}
                      className="px-3 py-1.5 rounded-lg magic-gradient-btn text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Read
                    </button>

                    <button
                      onClick={() => onRemoveFavorite(book.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
