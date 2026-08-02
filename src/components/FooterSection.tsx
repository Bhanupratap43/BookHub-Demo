import React from 'react';
import { BookOpen, Heart, ArrowUp, Github, Twitter, Instagram, Facebook, Mail, Shield, HelpCircle } from 'lucide-react';

interface FooterSectionProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenAbout,
  onOpenContact
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 bg-slate-900 text-white overflow-hidden">
      
      {/* Top Gradient Wave SVG Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[98%]">
        <svg
          className="relative block w-full h-12 text-slate-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.3,200,115,241.6,111.2,282.68,88.4,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-xl">
                  📚
                </div>
              </div>
              <span className="text-2xl font-extrabold tracking-tight font-heading text-white">
                BookHub
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Welcome to the ultimate digital reading theme park. Explore thousands of books, earn reading badges, sync across devices, and dive into magical worlds everyday.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Github, href: '#', label: 'GitHub' }
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-purple-400 mb-4 font-heading">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li><a href="#hero" className="hover:text-white transition-colors">Home Kingdom</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Book Categories</a></li>
              <li><a href="#trending" className="hover:text-white transition-colors">Trending Adventures</a></li>
              <li><a href="#search" className="hover:text-white transition-colors">Search & Filter</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Theme Park Features</a></li>
            </ul>
          </div>

          {/* Col 4: Community & Support */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-4 font-heading">
              Kingdom Support
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li>
                <button onClick={onOpenAbout} className="hover:text-white transition-colors text-left">
                  About BookHub Story
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-sky-300 text-sky-400 font-bold transition-colors text-left flex items-center gap-1">
                  📞 Contact Us (Bhanu Pratap: 707895****)
                </button>
              </li>
              <li><a href="#progress" className="hover:text-white transition-colors">Reading Tracker</a></li>
              <li><span className="text-slate-500">FAQ & Guides</span></li>
              <li><span className="text-slate-500">System Status (100% Online)</span></li>
            </ul>
          </div>

          {/* Col 5: Legal & Policies */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-pink-400 mb-4 font-heading">
              Policies
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Terms of Service</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Copyright & Licensing</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Accessibility Statement</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} BookHub Kingdom Inc. Crafted with{' '}
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> for book lovers everywhere.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white transition-all flex items-center gap-2 shadow-sm"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
