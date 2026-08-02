export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  gradient: string;
  description: string;
  tags: string[];
  pages: number;
  publishYear: number;
  language: string;
  isTrending?: boolean;
  isRecommended?: boolean;
  readTime: string;
  sampleChapters: {
    chapterNumber: number;
    title: string;
    content: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  count: number;
  gradient: string;
  bgColor: string;
  textColor: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  badgeGradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  favoriteBook: string;
  badgeColor: string;
}

export interface ReadingStats {
  booksCompleted: number;
  goalBooks: number;
  streakDays: number;
  weeklyMinutes: number;
  weeklyTargetMinutes: number;
  currentBookTitle: string;
  currentBookAuthor: string;
  currentBookProgress: number; // percentage
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  selectedFilter: 'all' | 'popular' | 'newest' | 'rating' | 'language';
  selectedLanguage: string;
  minRating: number;
}
