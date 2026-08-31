import React from 'react';
import { motion } from 'motion/react';
import { X, Award, MapPin, Calendar, Compass, Sparkles } from 'lucide-react';
import { Monument, StateHeritage } from '../types';

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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl text-slate-100 flex flex-col max-h-[90vh]"
      >
        {/* Banner */}
        <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
          <img src={monument.image} alt={monument.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-white hover:bg-red-500/80 transition-all z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {monument.isUnesco && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-extrabold shadow-lg">
              <Award className="w-3.5 h-3.5" />
              <span>UNESCO World Heritage Site</span>
            </div>
          )}

          <div className="absolute bottom-4 left-6 right-6">
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
            <p className="text-sm text-slate-300 leading-relaxed">{monument.description}</p>
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
    </div>
  );
};
