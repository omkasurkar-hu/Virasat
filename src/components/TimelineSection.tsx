import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE_ERAS } from '../data/timelineData';
import { TimelineEra } from '../types';
import { 
  Clock, 
  Landmark, 
  Palette, 
  BookOpen, 
  Lightbulb, 
  Shirt, 
  Music, 
  Sparkles, 
  Package, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

type EraCategory = 
  | 'architecture' 
  | 'art' 
  | 'literature' 
  | 'science' 
  | 'clothing' 
  | 'music' 
  | 'religion' 
  | 'artifacts';

export const TimelineSection: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<EraCategory>('architecture');

  const era = TIMELINE_ERAS[selectedEraIndex];

  const categories: { id: EraCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'architecture', label: 'Architecture', icon: Landmark },
    { id: 'art', label: 'Art & Crafts', icon: Palette },
    { id: 'science', label: 'Science & Inventions', icon: Lightbulb },
    { id: 'literature', label: 'Literature & Philosophy', icon: BookOpen },
    { id: 'clothing', label: 'Clothing & Textiles', icon: Shirt },
    { id: 'music', label: 'Music & Performing Arts', icon: Music },
    { id: 'religion', label: 'Traditions & Customs', icon: Sparkles },
    { id: 'artifacts', label: 'Historical Artifacts', icon: Package },
  ];

  return (
    <div id="timeline-section" className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-24">
      {/* Header Banner */}
      <div className="bg-stone-900 text-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Interactive Historical Journey</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            India Through the Ages
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base leading-relaxed">
            Trace the continuous 5,000-year evolution of Indian architecture, science, classical arts, textiles, and philosophical thought from antiquity to the modern era.
          </p>
        </div>
      </div>

      {/* Horizontal Era Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-300/80 shadow-xs py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
          {TIMELINE_ERAS.map((item, idx) => {
            const isSelected = idx === selectedEraIndex;
            return (
              <button
                key={item.id}
                id={`btn-era-${item.id}`}
                onClick={() => setSelectedEraIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#8B1E22] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isSelected ? 'bg-amber-400 text-stone-950 font-black' : 'bg-stone-200 text-stone-700'}`}>
                  {idx + 1}
                </span>
                <div className="text-left">
                  <span className="block leading-tight">{item.name}</span>
                  <span className={`text-[10px] font-normal block ${isSelected ? 'text-amber-200' : 'text-stone-500'}`}>
                    {item.period}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Era Explorer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Era Overview Banner Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E22]">
                Era {selectedEraIndex + 1} of 6 • {era.period}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                {era.name}
              </h2>
              <p className="text-sm font-medium text-amber-800 mt-1">
                {era.tagline}
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                disabled={selectedEraIndex === 0}
                onClick={() => setSelectedEraIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                ← Previous Era
              </button>
              <button
                disabled={selectedEraIndex === TIMELINE_ERAS.length - 1}
                onClick={() => setSelectedEraIndex((prev) => Math.min(TIMELINE_ERAS.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded-lg bg-[#8B1E22] text-white text-xs font-semibold hover:bg-[#721519] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next Era →
              </button>
            </div>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {era.summary}
          </p>
        </div>

        {/* Category Pills Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`btn-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-900 text-amber-100 shadow-sm font-bold'
                    : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Detail View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${era.id}-${activeCategory}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8"
          >
            {activeCategory === 'architecture' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                    <Landmark className="w-3.5 h-3.5 text-[#8B1E22]" />
                    <span>Architectural Marvels</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    {era.architecture.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {era.architecture.description}
                  </p>
                  <div className="pt-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                      Prominent Masterpieces & Sites:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {era.architecture.keyExamples.map((ex, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs text-stone-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-4/3 border border-stone-200">
                    <img
                      src={era.architecture.image}
                      alt={era.architecture.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-medium drop-shadow-sm">
                        {era.architecture.title} • {era.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'art' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                    <Palette className="w-3.5 h-3.5 text-[#8B1E22]" />
                    <span>Visual Arts & Master Crafts</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    {era.artAndCraft.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {era.artAndCraft.description}
                  </p>
                  <div className="pt-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                      Techniques & Mediums:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {era.artAndCraft.techniques.map((tech, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs text-stone-800 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E22] mt-1.5 flex-shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-4/3 border border-stone-200">
                    <img
                      src={era.artAndCraft.image}
                      alt={era.artAndCraft.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'science' && (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>Indian Science, Mathematics & Inventions</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {era.scienceAndInventions.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {era.scienceAndInventions.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {era.scienceAndInventions.breakthroughs.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-amber-400 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                          Scientific Milestone
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-800 font-medium leading-normal">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'literature' && (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-[#8B1E22]" />
                  <span>Literature, Epics & Philosophy</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {era.literatureAndPhilosophy.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {era.literatureAndPhilosophy.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {era.literatureAndPhilosophy.notableWorks.map((work, i) => (
                    <div key={i} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                      <span className="text-xs font-bold text-[#8B1E22] uppercase tracking-wider block mb-1">
                        Canonical Work {i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-stone-800 font-semibold">
                        {work}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'clothing' && (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                  <Shirt className="w-3.5 h-3.5 text-[#8B1E22]" />
                  <span>Costumes, Drapes & Textiles</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {era.clothingAndAttire.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {era.clothingAndAttire.description}
                </p>
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                    Signature Handlooms & Weaves:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {era.clothingAndAttire.fabrics.map((fabric, i) => (
                      <div key={i} className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-800 font-medium text-center">
                        {fabric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'music' && (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                  <Music className="w-3.5 h-3.5 text-[#8B1E22]" />
                  <span>Music, Ragas & Dance Traditions</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {era.musicAndPerformingArts.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {era.musicAndPerformingArts.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {era.musicAndPerformingArts.traditions.map((trad, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 font-medium flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-600" />
                      <span>{trad}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'religion' && (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B1E22]" />
                  <span>Sacred Practices, Ethics & Syncretism</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {era.religiousTraditions.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {era.religiousTraditions.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {era.religiousTraditions.customs.map((custom, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 font-medium">
                      {custom}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'artifacts' && (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider">
                  <Package className="w-3.5 h-3.5 text-[#8B1E22]" />
                  <span>Preserved Historical Artifacts</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Key Relics from {era.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {era.historicalObjects.map((obj, i) => (
                    <div key={i} className="p-4 rounded-xl bg-stone-50 border border-stone-200/90 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E22] block mb-1">
                          {obj.material}
                        </span>
                        <h4 className="font-serif font-bold text-base text-stone-900 mb-2">
                          {obj.name}
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed mb-3">
                          {obj.significance}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500 font-medium">
                        📍 {obj.foundLocation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
