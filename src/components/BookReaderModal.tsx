import React, { useState, useEffect } from 'react';
import { Book } from '../types';
import {
  X,
  Volume2,
  VolumeX,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Type,
  Check,
  Heart,
  Share2
} from 'lucide-react';

interface BookReaderModalProps {
  book: Book;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (bookId: string) => void;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({
  book,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<number>(18);
  const [readerTheme, setReaderTheme] = useState<'parchment' | 'day' | 'twilight' | 'mint'>('day');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const chapters = book.sampleChapters && book.sampleChapters.length > 0
    ? book.sampleChapters
    : [
        {
          chapterNumber: 1,
          title: 'Prologue: The Opening Page',
          content: `${book.description}\n\nChapter 1\n\nThe story unfolds under the vast canopy of a starry night sky. ${book.title} takes you on an unforgettable journey through time and wonder.`
        }
      ];

  const currentChapter = chapters[currentChapterIndex];

  // Speech Synthesis
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleReadAloud = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(currentChapter.content);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const themeStyles = {
    parchment: 'bg-[#FDF6E3] text-[#433422] border-[#EEDCBA]',
    day: 'bg-white text-slate-800 border-slate-200',
    twilight: 'bg-slate-900 text-slate-100 border-slate-800',
    mint: 'bg-[#EBFBFA] text-[#0F4C45] border-[#B2F0EA]'
  };

  const handleShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className={`w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden transition-colors duration-300 ${themeStyles[readerTheme]}`}>
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b flex items-center justify-between gap-4 flex-wrap bg-black/5">
          <div className="flex items-center gap-3">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-10 h-14 rounded-lg object-cover shadow-md border"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider opacity-70">
                Chapter {currentChapter.chapterNumber} of {chapters.length}
              </div>
              <h3 className="text-sm sm:text-base font-extrabold font-heading line-clamp-1">
                {book.title}
              </h3>
              <p className="text-xs opacity-75 font-medium">by {book.author}</p>
            </div>
          </div>

          {/* Reader Controls Toolbar */}
          <div className="flex items-center gap-2 flex-wrap ml-auto">
            
            {/* Font Size Adjusters */}
            <div className="flex items-center gap-1 bg-black/10 p-1 rounded-xl">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="p-1.5 rounded-lg hover:bg-black/10 text-xs font-bold"
                title="Decrease font size"
              >
                A-
              </button>
              <span className="text-xs font-bold px-1">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(26, fontSize + 2))}
                className="p-1.5 rounded-lg hover:bg-black/10 text-xs font-bold"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Theme Selectors */}
            <div className="flex items-center gap-1 bg-black/10 p-1 rounded-xl">
              {(['day', 'parchment', 'mint', 'twilight'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setReaderTheme(t)}
                  className={`w-6 h-6 rounded-lg font-bold text-[10px] flex items-center justify-center border transition-all ${
                    readerTheme === t ? 'ring-2 ring-purple-500 scale-110' : ''
                  } ${
                    t === 'day'
                      ? 'bg-white text-slate-900'
                      : t === 'parchment'
                      ? 'bg-[#FDF6E3] text-[#433422]'
                      : t === 'mint'
                      ? 'bg-[#EBFBFA] text-[#0F4C45]'
                      : 'bg-slate-900 text-white'
                  }`}
                  title={`Theme: ${t}`}
                >
                  {t === 'day' ? '☀️' : t === 'parchment' ? '📜' : t === 'mint' ? '🍃' : '🌙'}
                </button>
              ))}
            </div>

            {/* Read Aloud TTS */}
            <button
              onClick={toggleReadAloud}
              className={`p-2 rounded-xl transition-all border ${
                isSpeaking
                  ? 'bg-rose-500 text-white animate-pulse border-rose-600'
                  : 'bg-black/10 hover:bg-black/20'
              }`}
              title={isSpeaking ? 'Stop narration' : 'Listen with Audio Read-Aloud'}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Favorite Bookmark */}
            <button
              onClick={() => onToggleFavorite(book.id)}
              className={`p-2 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-rose-500 text-white border-rose-600'
                  : 'bg-black/10 hover:bg-black/20'
              }`}
              title="Bookmark this book"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-black/10 hover:bg-black/20 border transition-all relative"
              title="Share book"
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && (
                <span className="absolute -bottom-8 right-0 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded shadow-md whitespace-nowrap">
                  Link copied! ✨
                </span>
              )}
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-700 hover:text-white transition-all font-bold ml-2"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Reader Content Area */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto flex-1 leading-relaxed space-y-6">
          <div className="text-center max-w-xl mx-auto pb-6 border-b border-black/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-2">
              {currentChapter.title}
            </h2>
            <div className="flex items-center justify-center gap-2 text-xs opacity-70 font-semibold">
              <span>Published {book.publishYear}</span>
              <span>•</span>
              <span>{book.language}</span>
              <span>•</span>
              <span>{book.pages} Pages</span>
            </div>
          </div>

          <div
            className="max-w-2xl mx-auto whitespace-pre-line font-serif leading-loose tracking-wide"
            style={{ fontSize: `${fontSize}px` }}
          >
            {currentChapter.content}
          </div>
        </div>

        {/* Bottom Pagination Controls */}
        <div className="p-4 border-t flex items-center justify-between bg-black/5">
          <button
            disabled={currentChapterIndex === 0}
            onClick={() => setCurrentChapterIndex(currentChapterIndex - 1)}
            className="px-4 py-2 rounded-xl bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-xs flex items-center gap-1 transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Chapter
          </button>

          <span className="text-xs font-bold opacity-80">
            Chapter {currentChapterIndex + 1} of {chapters.length}
          </span>

          <button
            disabled={currentChapterIndex === chapters.length - 1}
            onClick={() => setCurrentChapterIndex(currentChapterIndex + 1)}
            className="px-4 py-2 rounded-xl magic-gradient-btn text-white disabled:opacity-30 disabled:cursor-not-allowed font-bold text-xs flex items-center gap-1 transition-all shadow-md"
          >
            Next Chapter <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
