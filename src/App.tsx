import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HomePage } from './components/HomePage';
import { HeritageMap } from './components/HeritageMap';
import { HeritageDetailsPanel } from './components/HeritageDetailsPanel';
import { SearchBar } from './components/SearchBar';
import { MapControls } from './components/MapControls';
import { MonumentModal } from './components/MonumentModal';
import { CulturalQuizModal } from './components/CulturalQuizModal';
import { STATES_HERITAGE_DATA } from './data/statesData';
import { StateHeritage, Monument, MapLayerStyle, HeritageTab } from './types';
import { MapPin, Sparkles, Landmark, Compass, ArrowLeft, Home } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'map'>('home');
  const [selectedState, setSelectedState] = useState<StateHeritage | null>(null);
  const [activeMonument, setActiveMonument] = useState<{ monument: Monument; state: StateHeritage } | null>(null);
  const [layerStyle, setLayerStyle] = useState<MapLayerStyle>('streets');
  const [filterRegion, setFilterRegion] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<HeritageTab>('overview');
  const [showQuizModal, setShowQuizModal] = useState<boolean>(false);

  const handleOpenMap = (initialState?: StateHeritage) => {
    setSelectedState(initialState || null);
    setCurrentView('map');
  };

  const handleSelectState = (state: StateHeritage) => {
    setSelectedState(state);
    setActiveTab('overview');
    if (currentView !== 'map') {
      setCurrentView('map');
    }
  };

  const handleSelectMonument = (monument: Monument, state: StateHeritage) => {
    setActiveMonument({ monument, state });
    setSelectedState(state);
    if (currentView !== 'map') {
      setCurrentView('map');
    }
  };

  const handleResetView = () => {
    setSelectedState(null);
  };

  if (currentView === 'home') {
    return (
      <HomePage
        states={STATES_HERITAGE_DATA}
        onExploreVirasat={() => handleOpenMap()}
        onSelectState={handleSelectState}
        onSelectMonument={handleSelectMonument}
      />
    );
  }

  return (
    <div id="cultural-heritage-app" className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans">
      {/* Full-Screen Interactive Google Maps Style Canvas */}
      <HeritageMap
        states={STATES_HERITAGE_DATA}
        selectedState={selectedState}
        onSelectState={handleSelectState}
        onSelectMonument={handleSelectMonument}
        layerStyle={layerStyle}
        filterRegion={filterRegion}
      />

      {/* Top Floating Header with Back to Home & Search Bar */}
      <div className="absolute top-4 left-4 right-4 z-30 flex items-start gap-2.5 max-w-xl pointer-events-none">
        <button
          id="btn-back-to-home"
          onClick={() => setCurrentView('home')}
          className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-3 rounded-2xl bg-[#FAF7F2] text-[#8B1E22] hover:bg-white shadow-2xl border border-stone-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex-shrink-0 group"
          title="Return to Virasat Home"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif font-bold text-sm tracking-normal">Virasat</span>
        </button>

        <div className="flex-1 min-w-0 pointer-events-auto">
          <SearchBar
            states={STATES_HERITAGE_DATA}
            selectedState={selectedState}
            onSelectState={handleSelectState}
            onSelectMonument={handleSelectMonument}
            filterRegion={filterRegion}
            onFilterRegion={setFilterRegion}
          />
        </div>
      </div>

      {/* Map Interactive Controls (Bottom Right) */}
      <MapControls
        layerStyle={layerStyle}
        onLayerChange={setLayerStyle}
        onResetView={handleResetView}
        onOpenQuiz={() => setShowQuizModal(true)}
      />

      {/* Quick State Pills Selector (Bottom Center on Large Screens) */}
      {!selectedState && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl">
          <span className="text-xs text-amber-400 font-bold flex items-center gap-1 mr-1">
            <Compass className="w-3.5 h-3.5" /> Select a State:
          </span>
          {STATES_HERITAGE_DATA.slice(0, 6).map((st) => (
            <button
              key={st.id}
              onClick={() => handleSelectState(st)}
              className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 transition-all"
            >
              {st.name}
            </button>
          ))}
        </div>
      )}

      {/* Slide-Over Heritage Details Panel */}
      <AnimatePresence>
        {selectedState && (
          <HeritageDetailsPanel
            state={selectedState}
            onClose={() => setSelectedState(null)}
            onSelectMonument={handleSelectMonument}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        )}
      </AnimatePresence>

      {/* Monument Detail Modal */}
      <AnimatePresence>
        {activeMonument && (
          <MonumentModal
            monument={activeMonument.monument}
            state={activeMonument.state}
            onClose={() => setActiveMonument(null)}
            onExploreState={() => {
              setSelectedState(activeMonument.state);
              setActiveTab('monuments');
            }}
          />
        )}
      </AnimatePresence>

      {/* Cultural Trivia Quiz Modal */}
      <AnimatePresence>
        {showQuizModal && (
          <CulturalQuizModal onClose={() => setShowQuizModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

