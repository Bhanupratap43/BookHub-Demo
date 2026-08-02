import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sparkles,
  Heart,
  Bookmark,
  User,
  Menu,
  X,
  Volume2,
  VolumeX,
  Compass,
  TrendingUp,
  Info,
  Mail
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  favoritesCount: number;
  libraryCount: number;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenLibrary: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  favoritesCount,
  libraryCount,
  onOpenAuth,
  onOpenLibrary,
  onOpenAbout,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.3); // C6
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch {
      // Audio fallback silent
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: BookOpen },
    { id: 'categories', label: 'Categories', icon: Compass },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'search', label: 'Explore', icon: Sparkles },
    { id: 'features', label: 'Features', icon: Sparkles },
    { id: 'progress', label: 'My Progress', icon: Bookmark },
  ];

  const handleNavClick = (id: string) => {
    playChime();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-lg border-b border-purple-100/60'
          : 'py-5 bg-white/50 backdrop-blur-md border-b border-white/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-400 p-0.5 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <span className="text-2xl animate-wave">📚</span>
                <span className="absolute -top-1 -right-1 text-xs animate-sparkle">✨</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight magic-gradient-text font-heading">
                  BookHub
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200 uppercase tracking-wider">
                  Kingdom
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                The Magical Digital Library
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/60 p-1.5 rounded-2xl border border-white/80 shadow-sm backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow-md shadow-purple-500/20'
                      : 'text-slate-600 hover:text-purple-600 hover:bg-white/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-purple-500'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playChime();
              }}
              title={soundEnabled ? 'Disable Theme Park Audio' : 'Enable Theme Park Audio Chimes'}
              className="p-2 rounded-xl text-slate-600 hover:text-purple-600 bg-white/70 hover:bg-white border border-slate-200/60 shadow-sm transition-all"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-purple-600 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Contact Us Button */}
            <button
              onClick={() => {
                playChime();
                onOpenContact();
              }}
              className="p-2 rounded-xl text-slate-700 hover:text-purple-600 bg-white/70 hover:bg-white border border-slate-200/60 shadow-sm transition-all flex items-center gap-1.5 px-3"
            >
              <Mail className="w-4 h-4 text-sky-500" />
              <span className="text-xs font-bold text-slate-700">Contact Us</span>
            </button>

            {/* Library / Favorites Badge Button */}
            <button
              onClick={() => {
                playChime();
                onOpenLibrary();
              }}
              className="relative p-2 rounded-xl text-slate-700 hover:text-purple-600 bg-white/70 hover:bg-white border border-slate-200/60 shadow-sm transition-all flex items-center gap-1.5 px-3"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
              <span className="text-xs font-bold text-slate-700">Favorites</span>
              {favoritesCount + libraryCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm">
                  {favoritesCount + libraryCount}
                </span>
              )}
            </button>

            {/* Login & Sign Up */}
            <button
              onClick={() => {
                playChime();
                onOpenAuth('login');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-purple-600 hover:bg-white/80 transition-all flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-sky-500" />
              Login
            </button>

            <button
              onClick={() => {
                playChime();
                onOpenAuth('signup');
              }}
              className="magic-gradient-btn px-4 py-2 rounded-xl text-xs font-extrabold text-white shadow-md shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-sparkle" />
              Join Free
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                playChime();
                onOpenLibrary();
              }}
              className="relative p-2 rounded-xl bg-white/80 text-rose-500 border border-slate-200/60 shadow-sm"
            >
              <Heart className="w-5 h-5 fill-rose-500/20" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold bg-rose-500 text-white flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/80 text-slate-700 border border-slate-200/60 shadow-sm focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-purple-100 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow-md'
                      : 'text-slate-700 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-500'}`} />
                  {item.label}
                </button>
              );
            })}

            <div className="h-px bg-slate-200/60 my-2" />

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 text-center"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="w-full magic-gradient-btn py-2.5 rounded-xl text-xs font-extrabold text-white text-center shadow-md"
              >
                Join Free ✨
              </button>
            </div>

            <div className="flex justify-around pt-3 text-xs font-semibold text-slate-500">
              <button onClick={() => { setMobileMenuOpen(false); onOpenAbout(); }} className="hover:text-purple-600 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" /> About Us
              </button>
              <button onClick={() => { setMobileMenuOpen(false); onOpenContact(); }} className="hover:text-purple-600 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
