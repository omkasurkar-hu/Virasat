import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Award, MapPin, Calendar, Compass, Sparkles, Maximize2, Minimize2, Eye } from 'lucide-react';
import { Monument, StateHeritage } from '../types';
import { ClearImageLightboxModal } from './ClearImageLightboxModal';

interface MonumentModalProps {
  monument: Monument;
  state: StateHeritage;
  onClose: () => void;
  onExploreState: () => void;
}

export const MonumentModal: React.FC<MonumentModalProps> = ({
  monument,
  state,
  onClose,
  onExploreState,
}) => {
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('contain');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl text-slate-100 flex flex-col max-h-[90vh]"
      >
        {/* Banner with Clear/Complete View support */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0 bg-stone-950">
          {fitMode === 'contain' && (
            <div
              className="absolute inset-0 scale-110 blur-xl opacity-40 bg-center bg-cover"
              style={{ backgroundImage: `url(${monument.image})` }}
            />
          )}

          <img
            src={monument.image}
            alt={monument.name}
            className={`relative w-full h-full ${
              fitMode === 'contain' ? 'object-contain' : 'object-cover'
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setIsLightboxOpen(true)}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

          {/* Top Controls: Close, Clear View Fullscreen, Fit Mode */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10">
            <button
              onClick={() => setFitMode((m) => (m === 'contain' ? 'cover' : 'contain'))}
              className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-amber-400 text-xs flex items-center gap-1 transition-all"
              title={fitMode === 'contain' ? 'Fill frame' : 'Show complete uncropped image'}
            >
              {fitMode === 'contain' ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Fill</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Fit All</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-amber-400 transition-all"
              title="Open full-screen clear view"
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-white hover:bg-red-500/80 transition-all"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {monument.isUnesco && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-extrabold shadow-lg z-10">
              <Award className="w-3.5 h-3.5" />
              <span>UNESCO World Heritage Site</span>
            </div>
          )}

          <div className="absolute bottom-4 left-6 right-6 z-10">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              {monument.type}
            </span>
            <h3 className="text-2xl font-extrabold text-white font-serif tracking-tight mt-0.5">
              {monument.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-slate-700">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Location</span>
                <span className="font-semibold text-slate-200">
                  {monument.location}, {state.name}
                </span>
              </div>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Era / Century</span>
                <span className="font-semibold text-slate-200">{monument.century}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1.5">
              Historical & Architectural Significance
            </h4>
            {monument.shortDesc && (
              <p className="text-xs text-amber-200 font-medium italic mb-2">
                "{monument.shortDesc}"
              </p>
            )}
            <p className="text-sm text-slate-300 leading-relaxed">
              {monument.detailedDescription || monument.description}
            </p>

            {monument.highlights && monument.highlights.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                {monument.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-[11px] bg-slate-800/90 text-amber-300 border border-slate-700 font-medium"
                  >
                    ✦ {h}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-800">
            <button
              onClick={() => {
                onExploreState();
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>Explore All Cultural Heritage of {state.name}</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Clear Fullscreen Lightbox */}
      <ClearImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={{
          src: monument.image,
          alt: monument.name,
          title: monument.name,
          subtitle: `${monument.century} • ${monument.type} • ${monument.location}, ${state.name}`,
          description: monument.detailedDescription || monument.description,
          category: 'Monument',
        }}
      />
    </div>
  );
};
