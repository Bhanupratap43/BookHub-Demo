import React, { useState } from 'react';
import { Book } from '../types';
import { X, Sparkles, Wand2, Compass, BookOpen, Check } from 'lucide-react';

interface AIGenieModalProps {
  books: Book[];
  onClose: () => void;
  onReadBook: (book: Book) => void;
}

export const AIGenieModal: React.FC<AIGenieModalProps> = ({
  books,
  onClose,
  onReadBook
}) => {
  const [mood, setMood] = useState('magical');
  const [recommended, setRecommended] = useState<Book | null>(null);
  const [reason, setReason] = useState('');

  const MOOD_OPTIONS = [
    { id: 'magical', label: '✨ Magical & Whimsical', cat: 'Fantasy' },
    { id: 'future', label: '🚀 Sci-Fi & Time Loops', cat: 'Science Fiction' },
    { id: 'coding', label: '💻 Tech & Modern Code', cat: 'Programming' },
    { id: 'habits', label: '🌱 Life Rituals & Growth', cat: 'Self Help' },
    { id: 'mystery', label: '🕵️ Whodunit Mysteries', cat: 'Mystery' },
    { id: 'kids', label: '🎈 Bedtime Tales for Kids', cat: 'Children' }
  ];

  const handleConsultGenie = () => {
    const selectedMood = MOOD_OPTIONS.find((m) => m.id === mood);
    const categoryBooks = books.filter((b) => b.category === selectedMood?.cat);
    const match = categoryBooks.length > 0
      ? categoryBooks[Math.floor(Math.random() * categoryBooks.length)]
      : books[0];

    setRecommended(match);
    setReason(`Based on your wish for "${selectedMood?.label}", the BookHub Genie selected ${match.title}! It features captivating worldbuilding, top reader ratings (${match.rating}/5), and an estimated read time of ${match.readTime}.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-pink-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 text-2xl">
              🧞‍♂️
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-heading text-slate-900">
                AI Book Genie
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Make a reading wish & get an instant magical recommendation
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

        {/* Mood Selector Options */}
        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-700">
            What kind of adventure are you craving today?
          </label>

          <div className="grid grid-cols-2 gap-2.5">
            {MOOD_OPTIONS.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setMood(m.id);
                  setRecommended(null);
                }}
                className={`p-3 rounded-2xl text-xs font-extrabold text-left transition-all border ${
                  mood === m.id
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleConsultGenie}
            className="w-full magic-gradient-btn py-3.5 rounded-2xl text-xs font-extrabold text-white shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
          >
            <Wand2 className="w-4 h-4 text-amber-300" />
            Summon Recommendation ✨
          </button>
        </div>

        {/* Recommendation Result */}
        {recommended && (
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-sky-50 border border-purple-200 animate-in fade-in-50 duration-300">
            <div className="flex gap-4 items-center mb-3">
              <img
                src={recommended.coverImage}
                alt={recommended.title}
                className="w-16 h-22 rounded-xl object-cover shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[9px] font-extrabold uppercase bg-purple-200 text-purple-800 px-2 py-0.5 rounded">
                  {recommended.category}
                </span>
                <h4 className="text-base font-extrabold font-heading text-slate-900 mt-1">
                  {recommended.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium">by {recommended.author}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
              {reason}
            </p>

            <button
              onClick={() => {
                onClose();
                onReadBook(recommended);
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md hover:bg-purple-600 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-sky-300" /> Read {recommended.title} Now
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
