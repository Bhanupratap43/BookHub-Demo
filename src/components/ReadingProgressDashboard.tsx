import React, { useState } from 'react';
import { ReadingStats } from '../types';
import { Flame, Trophy, Target, BookOpen, Clock, PlusCircle, CheckCircle2, Award } from 'lucide-react';

interface ReadingProgressDashboardProps {
  stats: ReadingStats;
  onUpdateStats: (newStats: Partial<ReadingStats>) => void;
  onReadCurrentBook: () => void;
}

export const ReadingProgressDashboard: React.FC<ReadingProgressDashboardProps> = ({
  stats,
  onUpdateStats,
  onReadCurrentBook
}) => {
  const [logModalOpen, setLogModalOpen] = useState(false);
  const [logMinutesInput, setLogMinutesInput] = useState('30');

  const booksPercentage = Math.min(100, Math.round((stats.booksCompleted / stats.goalBooks) * 100));
  const weeklyPercentage = Math.min(100, Math.round((stats.weeklyMinutes / stats.weeklyTargetMinutes) * 100));

  const handleLogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const addedMinutes = parseInt(logMinutesInput) || 0;
    const newWeekly = stats.weeklyMinutes + addedMinutes;
    onUpdateStats({
      weeklyMinutes: newWeekly,
      streakDays: stats.streakDays + 1
    });
    setLogModalOpen(false);
  };

  return (
    <section id="progress" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dashboard Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl shadow-2xl border border-purple-100 relative overflow-hidden">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 mb-2">
                <Trophy className="w-4 h-4 text-amber-600 fill-amber-400" />
                Kingdom Reader Dashboard
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Your Reading Progress & Milestones
              </h2>
            </div>

            <button
              onClick={() => setLogModalOpen(true)}
              className="magic-gradient-btn px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-yellow-300" />
              Log Today's Reading
            </button>
          </div>

          {/* Grid Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            
            {/* Stat 1: Books Completed Circular Gauge */}
            <div className="bg-white/90 p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-center gap-6">
              <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="3.8"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-purple-600 transition-all duration-1000 ease-out"
                    strokeDasharray={`${booksPercentage}, 100`}
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-extrabold text-slate-900 font-heading">
                    {stats.booksCompleted}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">/{stats.goalBooks}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600 mb-1">
                  <Target className="w-4 h-4" /> Monthly Goal
                </div>
                <h3 className="text-base font-extrabold text-slate-900 font-heading">
                  Books Completed
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {booksPercentage}% of your target finished!
                </p>
              </div>
            </div>

            {/* Stat 2: Reading Streak Counter */}
            <div className="bg-white/90 p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex-shrink-0 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Flame className="w-10 h-10 fill-amber-200 animate-bounce" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 mb-1">
                  <Award className="w-4 h-4" /> Active Streak
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  {stats.streakDays} Days
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Consecutive days of reading! Keep the fire burning 🔥
                </p>
              </div>
            </div>

            {/* Stat 3: Weekly Minutes Goal */}
            <div className="bg-white/90 p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-center gap-6">
              <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="3.8"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-sky-500 transition-all duration-1000 ease-out"
                    strokeDasharray={`${weeklyPercentage}, 100`}
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-base font-extrabold text-slate-900 font-heading">
                    {stats.weeklyMinutes}m
                  </span>
                  <span className="text-[9px] font-bold text-slate-400">/{stats.weeklyTargetMinutes}m</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-600 mb-1">
                  <Clock className="w-4 h-4" /> Weekly Target
                </div>
                <h3 className="text-base font-extrabold text-slate-900 font-heading">
                  Reading Time
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {stats.weeklyTargetMinutes - stats.weeklyMinutes > 0
                    ? `${stats.weeklyTargetMinutes - stats.weeklyMinutes} mins left this week`
                    : 'Target smashed! 🎉'}
                </p>
              </div>
            </div>

          </div>

          {/* Currently Reading Bar */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 p-6 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner">
                📖
              </div>
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-200">
                  Currently Reading
                </div>
                <div className="text-base font-extrabold font-heading">
                  {stats.currentBookTitle}
                </div>
                <div className="text-xs text-white/80">by {stats.currentBookAuthor}</div>
              </div>
            </div>

            {/* Progress Bar & Continue Button */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-48">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Progress</span>
                  <span>{stats.currentBookProgress}%</span>
                </div>
                <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-300 to-yellow-200 rounded-full transition-all duration-500"
                    style={{ width: `${stats.currentBookProgress}%` }}
                  />
                </div>
              </div>

              <button
                onClick={onReadCurrentBook}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-yellow-300 transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-purple-600" />
                Continue Chapter
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Modal to Log Reading Minutes */}
      {logModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-purple-100 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
                  <Flame className="w-5 h-5 fill-amber-500" />
                </div>
                <h3 className="text-xl font-extrabold font-heading text-slate-900">
                  Log Today's Reading
                </h3>
              </div>
              <button
                onClick={() => setLogModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleLogSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Minutes Read Today:
                </label>
                <input
                  type="number"
                  min="5"
                  max="300"
                  value={logMinutesInput}
                  onChange={(e) => setLogMinutesInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 text-slate-900 font-bold focus:border-purple-500 focus:outline-none"
                  required
                />
              </div>

              <div className="bg-purple-50 p-3 rounded-xl border border-purple-100 text-xs text-purple-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Logging reading time keeps your streak active and unlocks Kingdom Badges!</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setLogModalOpen(false)}
                  className="w-full py-3 rounded-2xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full magic-gradient-btn py-3 rounded-2xl text-xs font-extrabold text-white shadow-md"
                >
                  Save Progress ✨
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
