import React, { useState } from 'react';
import { X, Sparkles, Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  initialMode,
  onClose,
  onSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-purple-100 relative overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Background Sparkles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-purple-500 flex items-center justify-center text-xl text-white shadow-md">
              📚
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-heading text-slate-900">
                {mode === 'login' ? 'Welcome Back!' : 'Join BookHub Kingdom'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {mode === 'login' ? 'Enter your reading portal' : 'Start your magical reading journey today'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex p-1 bg-slate-100 rounded-2xl mb-6">
          <button
            onClick={() => setMode('login')}
            className={`w-1/2 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
              mode === 'login'
                ? 'bg-white text-purple-700 shadow-md'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Login Portal
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`w-1/2 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow-md'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Sign Up Free ✨
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aurelia Pendelton"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="reader@bookhub.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full magic-gradient-btn py-3.5 rounded-xl text-xs font-extrabold text-white shadow-lg shadow-purple-500/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <span className="animate-spin">✨</span>
            ) : (
              <>
                {mode === 'login' ? 'Enter Kingdom Portal' : 'Create Free Passport'}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500 font-medium">
            {mode === 'login' ? "Don't have a Kingdom Pass yet?" : "Already an adventurer?"}{' '}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-purple-600 font-bold hover:underline"
            >
              {mode === 'login' ? 'Create one now' : 'Sign in here'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};
