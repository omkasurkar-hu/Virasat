import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { HeritageMap } from './components/HeritageMap';
import { StateDetailPage } from './components/StateDetailPage';
import { SearchBar } from './components/SearchBar';
import { MapControls } from './components/MapControls';
import { MonumentModal } from './components/MonumentModal';
import { CulturalQuizModal } from './components/CulturalQuizModal';
import { TimelineSection } from './components/TimelineSection';
import { VanishingTraditionsSection } from './components/VanishingTraditionsSection';
import { AskBharatSection } from './components/AskBharatSection';
import { FestivalsCalendarSection } from './components/FestivalsCalendarSection';
import { StateQuizSection } from './components/StateQuizSection';

import { STATES_HERITAGE_DATA } from './data/statesData';
import { StateHeritage, Monument, MapLayerStyle, HeritageTab, AppView } from './types';
import { MapPin, Sparkles, Landmark, Compass, ArrowLeft, Layers } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
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
    setCurrentView('state_detail');
  };

  const handleSelectMonument = (monument: Monument, state: StateHeritage) => {
    setActiveMonument({ monument, state });
  };

  const handleResetView = () => {
    setSelectedState(null);
  };

  return (
    <div id="cultural-heritage-app" className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#8B1E22] selection:text-white">
      {/* Top Global Navigation Bar for standard views */}
      {currentView !== 'map' && currentView !== 'state_detail' && (
        <Navbar currentView={currentView} onNavigate={setCurrentView} />
      )}

      {/* Main View Switcher */}
      {currentView === 'home' && (
        <HomePage
          states={STATES_HERITAGE_DATA}
          onExploreVirasat={() => handleOpenMap()}
          onSelectState={handleSelectState}
          onSelectMonument={handleSelectMonument}
        />
      )}

      {/* Dedicated Full State Detail Page */}
      {currentView === 'state_detail' && selectedState && (
        <StateDetailPage
          state={selectedState}
          allStates={STATES_HERITAGE_DATA}
          onBackToMap={() => {
            setSelectedState(null);
            setCurrentView('map');
          }}
          onBackToHome={() => {
            setSelectedState(null);
            setCurrentView('home');
          }}
          onSelectState={handleSelectState}
          onSelectMonument={handleSelectMonument}
        />
      )}

      {currentView === 'timeline' && <TimelineSection />}

      {currentView === 'heritage_risk' && <VanishingTraditionsSection />}

      {currentView === 'ask_bharat' && (
        <AskBharatSection
          states={STATES_HERITAGE_DATA}
          onSelectState={handleSelectState}
        />
      )}

      {currentView === 'festivals' && <FestivalsCalendarSection />}

      {currentView === 'quiz' && <StateQuizSection />}

      {/* Full-Screen Interactive Google Maps Style Canvas */}
      {currentView === 'map' && (
        <div className="relative w-screen h-screen overflow-hidden bg-slate-950">
          <HeritageMap
            states={STATES_HERITAGE_DATA}
            selectedState={selectedState}
            onSelectState={handleSelectState}
            onSelectMonument={handleSelectMonument}
            layerStyle={layerStyle}
            filterRegion={filterRegion}
          />

          {/* Top Floating Header with Back to Home, Quick Nav & Search Bar */}
          <div className="absolute top-4 left-4 right-4 z-30 flex items-start gap-2.5 max-w-2xl pointer-events-none">
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

            {/* Quick switcher to other modules directly from Map */}
            <div className="hidden sm:flex items-center gap-1.5 pointer-events-auto">
              <button
                onClick={() => setCurrentView('timeline')}
                className="px-3 py-3 rounded-2xl bg-white/90 backdrop-blur-md text-stone-800 hover:text-[#8B1E22] hover:bg-white shadow-lg border border-stone-200 text-xs font-bold transition-all cursor-pointer"
                title="Through the Ages (Timeline)"
              >
                Timeline
              </button>
              <button
                onClick={() => setCurrentView('festivals')}
                className="px-3 py-3 rounded-2xl bg-white/90 backdrop-blur-md text-stone-800 hover:text-[#8B1E22] hover:bg-white shadow-lg border border-stone-200 text-xs font-bold transition-all cursor-pointer"
                title="Festival Calendar"
              >
                Festivals
              </button>
              <button
                onClick={() => setCurrentView('quiz')}
                className="px-3 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 shadow-lg border border-amber-400 text-xs transition-all cursor-pointer"
                title="State Quizzes"
              >
                Quizzes
              </button>
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
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl">
            <span className="text-xs text-amber-400 font-bold flex items-center gap-1 mr-1">
              <Compass className="w-3.5 h-3.5" /> Explore State:
            </span>
            {STATES_HERITAGE_DATA.slice(0, 6).map((st) => (
              <button
                key={st.id}
                onClick={() => handleSelectState(st)}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 transition-all cursor-pointer"
              >
                {st.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Monument Detail Modal (Universal across views) */}
      <AnimatePresence>
        {activeMonument && (
          <MonumentModal
            monument={activeMonument.monument}
            state={activeMonument.state}
            onClose={() => setActiveMonument(null)}
            onExploreState={() => {
              setSelectedState(activeMonument.state);
              setActiveTab('monuments');
              setCurrentView('state_detail');
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
