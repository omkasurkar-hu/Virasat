import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Utensils, 
  Shirt, 
  Music, 
  Palette, 
  Share2, 
  Check, 
  Compass,
  Maximize2,
  Minimize2,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { DetailedFestival } from '../types';
import { ClearImageLightboxModal } from './ClearImageLightboxModal';

interface FestivalDetailModalProps {
  festival: DetailedFestival;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export const FestivalDetailModal: React.FC<FestivalDetailModalProps> = ({ 
  festival, 
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'food' | 'traditions' | 'rituals'>('overview');
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(
      `${festival.name} (${festival.lunarOrGregorianDate}) — ${festival.tagline}\nExplore India's living festivals on Virasat!`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl bg-[#FAF7F2] border-2 border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl text-stone-900 flex flex-col max-h-[90vh] my-auto"
      >
        {/* Photo Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0 bg-stone-900">
          {fitMode === 'contain' && (
            <div
              className="absolute inset-0 scale-110 blur-xl opacity-40 bg-center bg-cover"
              style={{ backgroundImage: `url(${festival.image})` }}
            />
          )}

          <img
            src={festival.image}
            alt={festival.name}
            className={`relative w-full h-full ${
              fitMode === 'contain' ? 'object-contain' : 'object-cover'
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setIsLightboxOpen(true)}
            referrerPolicy="no-referrer"
          />

          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent pointer-events-none" />

          {/* Top Controls: Fit Mode, Lightbox, Share, Close */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10">
            {/* Quick Prev / Next Buttons */}
            {onPrev && (
              <button
                onClick={onPrev}
                className="p-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-200 hover:text-amber-300 transition-all cursor-pointer"
                title="Previous Festival"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {onNext && (
              <button
                onClick={onNext}
                className="p-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-200 hover:text-amber-300 transition-all cursor-pointer"
                title="Next Festival"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setFitMode((m) => (m === 'contain' ? 'cover' : 'contain'))}
              className="px-2.5 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-200 hover:text-amber-300 text-xs flex items-center gap-1 transition-all cursor-pointer"
              title={fitMode === 'contain' ? 'Fill Frame' : 'Show Full Uncropped Photo'}
            >
              {fitMode === 'contain' ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{fitMode === 'contain' ? 'Fill' : 'Full'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-200 hover:text-amber-300 transition-all cursor-pointer"
              title="Copy festival details"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              id="btn-close-festival-modal"
              onClick={onClose}
              className="p-2 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-200 hover:text-white hover:bg-[#8B1E22] transition-all cursor-pointer"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Top Category Badge & Index */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E22]/90 backdrop-blur-md text-amber-200 border border-amber-400/40 text-xs font-bold uppercase tracking-wider shadow-lg">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{festival.category}</span>
            </span>

            {currentIndex !== undefined && totalCount !== undefined && (
              <span className="px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-300 text-[11px] font-semibold">
                {currentIndex + 1} of {totalCount}
              </span>
            )}
          </div>

          {/* Festival Title & Date on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{festival.lunarOrGregorianDate}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
              {festival.name}
            </h2>
            {festival.nativeName && (
              <span className="text-sm sm:text-base font-serif text-amber-200/95 block mt-0.5 font-medium">
                {festival.nativeName}
              </span>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white px-4 border-b border-stone-200 flex items-center gap-2 overflow-x-auto scrollbar-none py-2">
          {[
            { id: 'overview', label: 'Overview & Lore', icon: BookOpen },
            { id: 'food', label: 'Traditional Foods', icon: Utensils },
            { id: 'traditions', label: 'Attire & Music', icon: Music },
            { id: 'rituals', label: 'Decor & Art', icon: Palette }
          ].map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-[#8B1E22] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 max-h-[50vh]">
          {/* Tagline */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 font-serif italic text-xs sm:text-sm leading-relaxed">
            "{festival.tagline}"
          </div>

          {/* Primary States Celebrated */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
              📍 Primary States & Regions Celebrating:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {festival.primaryStates.map((st, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-[#8B1E22]" />
                  <span>{st}</span>
                </span>
              ))}
            </div>
          </div>

          {/* TAB 1: Overview & Lore */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E22] mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>History & Origin</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {festival.historyAndOrigin}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E22] mb-1.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Cultural Significance & Social Unity</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {festival.culturalSignificance}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Traditional Foods */}
          {activeTab === 'food' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E22] flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                <span>Festive Delicacies & Traditional Recipes</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {festival.traditionalFood.map((food, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1"
                  >
                    <span className="font-serif font-bold text-sm text-stone-900 block text-[#8B1E22]">
                      🍲 {food.name}
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {food.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Attire & Music */}
          {activeTab === 'traditions' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E22] flex items-center gap-1.5">
                  <Shirt className="w-3.5 h-3.5" />
                  <span>Traditional Clothing & Handlooms</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {festival.traditionalClothing}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E22] flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5" />
                  <span>Music, Chants & Percussion Traditions</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {festival.musicAndPrayers}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: Decor & Art */}
          {activeTab === 'rituals' && (
            <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E22] flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                <span>Decorations, Rangolis & Pandal Art</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {festival.decorationsAndArt}
              </p>
            </div>
          )}
        </div>

        {/* Footer with Prev / Next Navigation */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Previous Festival</span>
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50 cursor-pointer transition-colors"
              >
                <span className="hidden sm:inline">Next Festival</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#8B1E22] text-white font-bold hover:bg-[#721519] transition-colors cursor-pointer shadow-sm text-xs"
          >
            Close
          </button>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <ClearImageLightboxModal
          isOpen={isLightboxOpen}
          imageUrl={festival.image}
          title={festival.name}
          subtitle={`${festival.monthName} ${festival.day} • ${festival.category}`}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
};
