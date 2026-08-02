import React, { useState, useEffect, useMemo } from 'react';
import { BOOKS_DATA } from './data/booksData';
import { Book, FilterState, ReadingStats } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { TrendingBooksCarousel } from './components/TrendingBooksCarousel';
import { SearchSection } from './components/SearchSection';
import { RecommendedBooksGrid } from './components/RecommendedBooksGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { ReadingProgressDashboard } from './components/ReadingProgressDashboard';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { FooterSection } from './components/FooterSection';
import { MagicalBackgroundCanvas } from './components/MagicalBackgroundCanvas';
import { BookReaderModal } from './components/BookReaderModal';
import { AuthModal } from './components/AuthModal';
import { LibraryModal } from './components/LibraryModal';
import { AIGenieModal } from './components/AIGenieModal';
import { AboutModal, ContactModal } from './components/AboutContactModals';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Favorites state with localStorage persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bookhub_favorites');
      return saved ? JSON.parse(saved) : ['book-1', 'book-3', 'book-6'];
    } catch {
      return ['book-1', 'book-3', 'book-6'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bookhub_favorites', JSON.stringify(favorites));
    } catch {
      // LocalStorage fallback
    }
  }, [favorites]);

  const toggleFavorite = (bookId: string) => {
    setFavorites((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
    );
  };

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedCategory: 'all',
    selectedFilter: 'all',
    selectedLanguage: 'all',
    minRating: 0
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      selectedCategory: 'all',
      selectedFilter: 'all',
      selectedLanguage: 'all',
      minRating: 0
    });
  };

  // Filtered & Sorted Books
  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter((book) => {
      // Category filter
      if (
        filters.selectedCategory !== 'all' &&
        book.category.toLowerCase().replace(/\s+/g, '-') !== filters.selectedCategory.toLowerCase() &&
        book.category.toLowerCase() !== filters.selectedCategory.toLowerCase()
      ) {
        return false;
      }

      // Search query
      if (filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase();
        const titleMatch = book.title.toLowerCase().includes(q);
        const authorMatch = book.author.toLowerCase().includes(q);
        const catMatch = book.category.toLowerCase().includes(q);
        const descMatch = book.description.toLowerCase().includes(q);
        const tagMatch = book.tags.some((t) => t.toLowerCase().includes(q));

        if (!titleMatch && !authorMatch && !catMatch && !descMatch && !tagMatch) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.selectedFilter === 'popular') {
        return b.reviewsCount - a.reviewsCount;
      }
      if (filters.selectedFilter === 'newest') {
        return b.publishYear - a.publishYear;
      }
      if (filters.selectedFilter === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });
  }, [filters]);

  // Reading Stats
  const [stats, setStats] = useState<ReadingStats>({
    booksCompleted: 3,
    goalBooks: 5,
    streakDays: 14,
    weeklyMinutes: 140,
    weeklyTargetMinutes: 200,
    currentBookTitle: 'The Starlight Citadel',
    currentBookAuthor: 'Aurelia Pendelton',
    currentBookProgress: 65
  });

  const handleUpdateStats = (newStats: Partial<ReadingStats>) => {
    setStats((prev) => ({ ...prev, ...newStats }));
  };

  // Modals state
  const [activeBookForReader, setActiveBookForReader] = useState<Book | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [libraryModalOpen, setLibraryModalOpen] = useState(false);
  const [aiGenieModalOpen, setAiGenieModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const favoriteBooksList = useMemo(() => {
    return BOOKS_DATA.filter((b) => favorites.includes(b.id));
  }, [favorites]);

  return (
    <div className="min-h-screen relative text-slate-800 bg-slate-50 selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden font-sans">
      
      {/* Background Magical Particle Canvas */}
      <MagicalBackgroundCanvas />

      {/* Sticky Glassmorphism Header / Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        favoritesCount={favorites.length}
        libraryCount={0}
        onOpenAuth={(mode) => {
          setAuthMode(mode);
          setAuthModalOpen(true);
        }}
        onOpenLibrary={() => setLibraryModalOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        
        {/* Landing Hero Section */}
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById('search');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onJoinClick={() => {
            setAuthMode('signup');
            setAuthModalOpen(true);
          }}
          onAIGenieClick={() => setAiGenieModalOpen(true)}
        />

        {/* Categories Section */}
        <CategoriesSection
          selectedCategory={filters.selectedCategory}
          onSelectCategory={(catId) => handleFilterChange({ selectedCategory: catId })}
        />

        {/* Trending Books Carousel */}
        <TrendingBooksCarousel
          books={BOOKS_DATA}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onReadBook={(book) => setActiveBookForReader(book)}
        />

        {/* Search & Filter Controls */}
        <SearchSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalResults={filteredBooks.length}
        />

        {/* Recommended & Filtered Books Grid */}
        <RecommendedBooksGrid
          books={filteredBooks}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onReadBook={(book) => setActiveBookForReader(book)}
        />

        {/* Features Section */}
        <FeaturesSection />

        {/* Reading Progress Dashboard */}
        <ReadingProgressDashboard
          stats={stats}
          onUpdateStats={handleUpdateStats}
          onReadCurrentBook={() => {
            const current = BOOKS_DATA.find((b) => b.title === stats.currentBookTitle) || BOOKS_DATA[0];
            setActiveBookForReader(current);
          }}
        />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Newsletter Dispatch */}
        <NewsletterSection />

      </main>

      {/* Footer */}
      <FooterSection
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Reader Modal */}
      {activeBookForReader && (
        <BookReaderModal
          book={activeBookForReader}
          onClose={() => setActiveBookForReader(null)}
          isFavorite={favorites.includes(activeBookForReader.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {/* Auth Login / Signup Modal */}
      {authModalOpen && (
        <AuthModal
          initialMode={authMode}
          onClose={() => setAuthModalOpen(false)}
          onSuccess={() => setAuthModalOpen(false)}
        />
      )}

      {/* Library Favorites Drawer / Modal */}
      {libraryModalOpen && (
        <LibraryModal
          favoriteBooks={favoriteBooksList}
          onClose={() => setLibraryModalOpen(false)}
          onRemoveFavorite={toggleFavorite}
          onReadBook={(book) => setActiveBookForReader(book)}
        />
      )}

      {/* AI Book Genie Recommendation Modal */}
      {aiGenieModalOpen && (
        <AIGenieModal
          books={BOOKS_DATA}
          onClose={() => setAiGenieModalOpen(false)}
          onReadBook={(book) => setActiveBookForReader(book)}
        />
      )}

      {/* About & Contact Modals */}
      {aboutModalOpen && <AboutModal onClose={() => setAboutModalOpen(false)} />}
      {contactModalOpen && <ContactModal onClose={() => setContactModalOpen(false)} />}

    </div>
  );
}
