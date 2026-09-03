import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Volume2,
  VolumeX,
  Share2,
  Bookmark,
  BookmarkCheck,
  Landmark,
  Music,
  Utensils,
  Sparkles,
  Shirt,
  History,
  Bot,
  Send,
  ExternalLink,
  MapPin,
  Award,
  BookOpen,
  Info,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Eye,
} from 'lucide-react';
import { StateHeritage, HeritageTab, Monument } from '../types';
import { heritageAudio } from '../utils/audioSynth';
import { AdaptiveImage } from './AdaptiveImage';
import { ClearImageLightboxModal, LightboxImageItem } from './ClearImageLightboxModal';

interface HeritageDetailsPanelProps {
  state: StateHeritage;
  onClose: () => void;
  onSelectMonument: (monument: Monument, state: StateHeritage) => void;
  activeTab: HeritageTab;
  onTabChange: (tab: HeritageTab) => void;
}

export const HeritageDetailsPanel: React.FC<HeritageDetailsPanelProps> = ({
  state,
  onClose,
  onSelectMonument,
  activeTab,
  onTabChange,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPlayingFolkAudio, setIsPlayingFolkAudio] = useState(false);
  const [selectedCuisineSubcategory, setSelectedCuisineSubcategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<LightboxImageItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Tab Scroll State
  const tabSliderRef = useRef<HTMLDivElement>(null);
  const [sliderProgress, setSliderProgress] = useState<number>(0);
  const [canSlideLeft, setCanSlideLeft] = useState<boolean>(false);
  const [canSlideRight, setCanSlideRight] = useState<boolean>(true);

  const updateSliderMetrics = () => {
    if (!tabSliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabSliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setSliderProgress((scrollLeft / maxScroll) * 100);
      setCanSlideLeft(scrollLeft > 4);
      setCanSlideRight(scrollLeft < maxScroll - 4);
    } else {
      setSliderProgress(0);
      setCanSlideLeft(false);
      setCanSlideRight(false);
    }
  };

  useEffect(() => {
    const el = tabSliderRef.current;
    if (!el) return;
    updateSliderMetrics();
    el.addEventListener('scroll', updateSliderMetrics);
    window.addEventListener('resize', updateSliderMetrics);
    return () => {
      el.removeEventListener('scroll', updateSliderMetrics);
      window.removeEventListener('resize', updateSliderMetrics);
    };
  }, []);

  const slideTabsDirection = (direction: 'left' | 'right') => {
    if (!tabSliderRef.current) return;
    tabSliderRef.current.scrollBy({
      left: direction === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

  const toggleFolkAudio = () => {
    if (isPlayingFolkAudio) {
      heritageAudio.stopAll();
      setIsPlayingFolkAudio(false);
    } else {
      setIsPlayingFolkAudio(true);
      heritageAudio.playFolkSongPreview(state.name, () => {
        setIsPlayingFolkAudio(false);
      });
    }
  };

  // AI Guide Chat State
  const [aiQuery, setAiQuery] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    Array<{ role: 'user' | 'assistant'; text: string; fallback?: boolean }>
  >([
    {
      role: 'assistant',
      text: `Namaste! I am your AI Cultural Scholar for ${state.name}. Ask me anything about ${state.name}'s architecture, folk mythology, forgotten recipes, historical dynasties, or traditional festivals!`,
    },
  ]);

  // Handle Speech Narration
  useEffect(() => {
    // Reset speech when state changes
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [state.id]);

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = `${state.name}. ${state.tagline}. ${state.overview} Official language is ${state.officialLanguage}. Famous monuments include ${state.monuments.map((m) => m.name).join(', ')}. Key folk art includes ${state.artAndDance.map((a) => a.name).join(', ')}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Handle Share / Copy Link
  const handleShare = () => {
    navigator.clipboard.writeText(
      `Explore the rich cultural heritage of ${state.name} (${state.tagline}) on Cultural Heritage Explorer!`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Ask AI
  const handleAskAI = async (customPrompt?: string) => {
    const promptToSend = customPrompt || aiQuery;
    if (!promptToSend.trim() || aiLoading) return;

    const userMessage = { role: 'user' as const, text: promptToSend };
    setChatHistory((prev) => [...prev, userMessage]);
    setAiQuery('');
    setAiLoading(true);

    try {
      const res = await fetch('/api/cultural-ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stateName: state.name,
          query: promptToSend,
          category: activeTab,
        }),
      });
      const data = await res.json();
      setChatHistory((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: data.answer || 'Cultural archive retrieved successfully.',
          fallback: data.fallback,
        },
      ]);
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `${state.name} is deeply celebrated for its rich historical heritage, classical art forms, grand monuments, and distinct culinary traditions.`,
        },
      ]);
    } finally {
      setAiLoading(false);
    }
  };

  const tabs: Array<{ id: HeritageTab; label: string; icon: React.ReactNode }> = [
    { id: 'overview', label: 'Overview', icon: <Info className="w-4 h-4" /> },
    { id: 'monuments', label: 'Monuments', icon: <Landmark className="w-4 h-4" /> },
    { id: 'dance_music', label: 'Arts & Dance', icon: <Music className="w-4 h-4" /> },
    { id: 'folk_lore', label: 'Folk Lore', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'cuisines', label: 'Cuisines', icon: <Utensils className="w-4 h-4" /> },
    { id: 'festivals', label: 'Festivals', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'crafts_attire', label: 'Crafts & Attire', icon: <Shirt className="w-4 h-4" /> },
    { id: 'history', label: 'History', icon: <History className="w-4 h-4" /> },
    { id: 'ai_guide', label: 'AI Scholar', icon: <Bot className="w-4 h-4" /> },
  ];

  return (
    <motion.aside
      id="heritage-details-sidebar"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-y-0 right-0 w-full sm:w-[480px] md:w-[540px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/60 shadow-2xl z-40 flex flex-col overflow-hidden text-slate-100"
    >
      {/* Banner & Header */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden flex-shrink-0">
        <img
          src={state.bannerImage}
          alt={state.name}
          className="w-full h-full object-cover brightness-[0.75] border-[#f1f6f9]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Top Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <button
            id="btn-voice-narrate"
            onClick={toggleSpeech}
            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
              isSpeaking
                ? 'bg-amber-500 text-slate-950 border-amber-300 animate-pulse'
                : 'bg-slate-900/80 text-amber-300 border-amber-500/30 hover:bg-slate-800'
            }`}
            title={isSpeaking ? 'Stop Audio Narration' : 'Listen to State Heritage Audio'}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            id="btn-bookmark-state"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-amber-400 hover:bg-slate-800 transition-all"
            title="Save to favorites"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>

          <button
            id="btn-share-state"
            onClick={handleShare}
            className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-amber-400 hover:bg-slate-800 transition-all"
            title="Share heritage link"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            id="btn-close-details"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white hover:bg-red-500/80 transition-all"
            title="Close Panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* State Title on Banner */}
        <div className="absolute bottom-3 left-6 right-6">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {state.stateCode && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-amber-500 text-slate-950 shadow">
                {state.stateCode}
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              {state.region} India
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" /> Capital: {state.capital}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif">
            {state.name}
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/90 font-medium italic line-clamp-1">
            "{state.tagline}"
          </p>
        </div>

        {copied && (
          <div className="absolute top-16 right-4 px-3 py-1 rounded bg-amber-500 text-slate-950 text-xs font-bold shadow-lg animate-fade-in">
            Copied summary to clipboard!
          </div>
        )}
      </div>

      {/* Navigation Tabs Bar with Slider & Scrollbar */}
      <div className="bg-slate-950/80 border-b border-slate-800 p-2 space-y-1.5 flex-shrink-0">
        <div className="flex items-center gap-1">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => slideTabsDirection('left')}
            disabled={!canSlideLeft}
            className={`p-1.5 rounded-lg border text-slate-300 transition-all flex-shrink-0 cursor-pointer ${
              canSlideLeft
                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-white'
                : 'bg-slate-900 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
            title="Slide tabs left"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Horizontally Scrollable Tabs */}
          <div
            ref={tabSliderRef}
            className="flex-1 flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => {
                  onTabChange(tab.id);
                  const el = document.getElementById(`tab-btn-${tab.id}`);
                  if (el && tabSliderRef.current) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => slideTabsDirection('right')}
            disabled={!canSlideRight}
            className={`p-1.5 rounded-lg border text-slate-300 transition-all flex-shrink-0 cursor-pointer ${
              canSlideRight
                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-white'
                : 'bg-slate-900 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
            title="Slide tabs right"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Slide Bar Beneath Tabs */}
        <div className="px-1 flex items-center gap-2">
          <span className="text-[9px] font-bold text-amber-500/80 uppercase tracking-widest flex items-center gap-1 flex-shrink-0">
            <SlidersHorizontal className="w-2.5 h-2.5 text-amber-400" /> Slide
          </span>
          <div
            className="flex-1 relative h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const percent = Math.max(0, Math.min(1, clickX / rect.width));
              if (tabSliderRef.current) {
                const maxScroll =
                  tabSliderRef.current.scrollWidth - tabSliderRef.current.clientWidth;
                tabSliderRef.current.scrollTo({
                  left: maxScroll * percent,
                  behavior: 'smooth',
                });
              }
            }}
          >
            <div
              className="absolute top-0 bottom-0 bg-amber-500 rounded-full transition-all duration-150"
              style={{
                left: `${Math.max(0, Math.min(75, sliderProgress * 0.75))}%`,
                width: '25%',
              }}
            />
          </div>
          <span className="text-[9px] text-slate-400 font-mono flex-shrink-0">
            {Math.round(sliderProgress)}%
          </span>
        </div>
      </div>

      {/* Tab Content Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-2">
                Cultural Essence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{state.overview}</p>
            </div>

            {/* Quick Badges Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">
                  Official Language
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  {state.officialLanguage}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Spoken: {state.spokenLanguages.join(', ')}
                </span>
              </div>

              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">
                  Emblems of Nature
                </span>
                <span className="text-xs text-amber-300 mt-0.5 block font-semibold">
                  🐾 {state.stateAnimal || 'Indigenous Fauna'}
                </span>
                <span className="text-xs text-amber-200 mt-1 block font-semibold">
                  🪶 {state.stateBird || 'Regional Bird'}
                </span>
              </div>
            </div>

            {/* Fun Cultural Fact */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-4 rounded-xl border border-amber-500/30 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Heritage Highlight & Trivia
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{state.funFact}</p>
              </div>
            </div>

            {/* Heritage Highlights Quick Cards */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Key Cultural Attractions
                </h3>
                <button
                  onClick={() => onTabChange('monuments')}
                  className="text-xs text-amber-400 hover:underline"
                >
                  View all ({state.monuments.length}) &rarr;
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {state.monuments.slice(0, 2).map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectMonument(m, state)}
                    className="group relative h-32 rounded-xl overflow-hidden cursor-pointer border border-slate-700/60 hover:border-amber-500 transition-all"
                  >
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-3 flex flex-col justify-end">
                      <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {m.name}
                      </span>
                      <span className="text-[10px] text-slate-300">{m.century}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* MONUMENTS TAB */}
        {activeTab === 'monuments' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400">
                Iconic architecture, forts, temples, and UNESCO World Heritage Sites in {state.name}.
              </p>
            </div>

            <div className="space-y-4">
              {state.monuments.map((m, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectMonument(m, state)}
                  className="group bg-slate-800/60 hover:bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/60 hover:border-amber-500/60 transition-all cursor-pointer shadow-lg"
                >
                  <div className="relative w-full">
                    <AdaptiveImage
                      src={m.image}
                      alt={m.name}
                      title={m.name}
                      subtitle={`${m.century} • ${m.type}`}
                      description={m.detailedDescription || m.description}
                      category="Monument"
                      heightClass="h-44 sm:h-52"
                      onOpenModal={(item) => {
                        setLightboxImage(item);
                        setIsLightboxOpen(true);
                      }}
                    />
                    {m.isUnesco && (
                      <span className="absolute top-3 left-3 z-20 bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Award className="w-3 h-3" /> UNESCO World Heritage
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 z-20 bg-slate-900/90 text-amber-300 text-[11px] font-medium px-2 py-0.5 rounded-md border border-amber-500/30 shadow">
                      {m.century}
                    </span>
                  </div>

                  <div className="p-4 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                          {m.name}
                        </h4>
                        <span className="text-xs text-slate-400 block mt-0.5">
                          📍 {m.location} &bull; {m.type}
                        </span>
                      </div>
                      <span className="text-xs text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform flex-shrink-0 font-medium">
                        Details &rarr;
                      </span>
                    </div>

                    {m.shortDesc && (
                      <p className="text-xs text-amber-200 font-medium italic">
                        {m.shortDesc}
                      </p>
                    )}

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {m.detailedDescription || m.description}
                    </p>

                    {m.highlights && m.highlights.length > 0 && (
                      <div className="pt-2 border-t border-slate-700/50 flex flex-wrap gap-1.5">
                        {m.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] bg-slate-900/90 text-amber-300 border border-slate-700 font-medium"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* DANCE & MUSIC TAB */}
        {activeTab === 'dance_music' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  🎵 Authentic Folk & Classical Acoustic Snippet
                </span>
                <span className="text-xs text-slate-200 font-medium">
                  {state.folkMusicSnippet?.songName || `${state.name} Folk Melody & Drone`}
                </span>
              </div>
              <button
                onClick={toggleFolkAudio}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isPlayingFolkAudio
                    ? 'bg-amber-400 text-slate-950 animate-pulse'
                    : 'bg-amber-600 hover:bg-amber-500 text-white'
                }`}
              >
                {isPlayingFolkAudio ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Playing...</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Play Snippet</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Classical dance forms, folk music genres, theatrical traditions, and indigenous instruments of {state.name}.
            </p>

            <div className="space-y-4">
              {state.artAndDance.map((art, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-3 hover:border-amber-500/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-amber-300">{art.name}</h4>
                      <span className="text-xs text-slate-400">
                        {art.type} &bull; Origin: {art.origin}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {art.type}
                    </span>
                  </div>

                  {art.image && (
                    <div className="relative h-36 rounded-xl overflow-hidden border border-slate-700/50">
                      <img
                        src={art.image}
                        alt={art.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </div>
                  )}

                  {art.shortDesc && (
                    <p className="text-xs text-amber-200 font-medium italic">
                      "{art.shortDesc}"
                    </p>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {art.detailedDescription || art.description}
                  </p>

                  {art.highlights && art.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {art.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-amber-200 border border-slate-700"
                        >
                          ✦ {hl}
                        </span>
                      ))}
                    </div>
                  )}

                  {art.costumeHighlight && (
                    <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/40 text-xs">
                      <span className="text-amber-400 font-semibold block mb-0.5">
                        👘 Traditional Costume & Makeup:
                      </span>
                      <span className="text-slate-300">{art.costumeHighlight}</span>
                    </div>
                  )}

                  {art.instruments && art.instruments.length > 0 && (
                    <div className="flex items-center flex-wrap gap-1.5 pt-1">
                      <span className="text-[11px] text-slate-400 mr-1">🥁 Instruments:</span>
                      {art.instruments.map((inst, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[10px] bg-slate-900 text-slate-300 border border-slate-700"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FOLK LORE & TRADITIONS TAB */}
        {activeTab === 'folk_lore' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-xs text-slate-400">
              Oral folk epics, village legends, and timeless cultural mythologies passed down through generations.
            </p>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                  <BookOpen className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-amber-300">
                    {state.folkStory?.title || `${state.name} Folk Epics & Ballads`}
                  </h4>
                  <span className="text-xs text-slate-400">Oral Storytelling & Village Lore</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {state.folkStory?.synopsis ||
                  `In ${state.name}, folk storytellers have carried epics and morality tales through bardic songs, puppet shows, and temple recitations for centuries. These stories weave together local geography, historical kings, devotion, and reverence for nature.`}
              </p>

              {state.folkStory?.characters && state.folkStory.characters.length > 0 && (
                <div className="pt-2 border-t border-slate-700/50">
                  <span className="text-[11px] text-amber-400 font-semibold block mb-1">
                    Key Folk Figures & Motifs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {state.folkStory.characters.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-900 text-slate-300 rounded text-[10px] border border-slate-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {state.folkStory?.moralOrSignificance && (
                <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                  <strong>Cultural Lesson: </strong>
                  <span>{state.folkStory.moralOrSignificance}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
              <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Fascinating State Trivia
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{state.funFact}"
              </p>
            </div>
          </motion.div>
        )}

        {/* CUISINES TAB */}
        {activeTab === 'cuisines' && (() => {
          // Extract unique subcategories if any
          const subcategories: string[] = Array.from(
            new Set(
              state.cuisines
                .map((f) => f.subcategory)
                .filter((sub): sub is string => typeof sub === 'string' && sub.length > 0)
            )
          );

          const filteredCuisines =
            selectedCuisineSubcategory === 'all'
              ? state.cuisines
              : state.cuisines.filter(
                  (f) => f.subcategory === selectedCuisineSubcategory
                );

          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent p-3.5 rounded-xl border border-amber-500/20 text-xs text-amber-200">
                <span className="font-semibold text-white">Culinary Legacy of {state.name}: </span>
                {state.id === 'uttar-pradesh'
                  ? 'Uttar Pradesh is famous for its rich royal Awadhi meals, savory street snacks, and traditional sweets.'
                  : `Authentic state gastronomy, royal recipes, festive sweets, and GI-tagged delicacies of ${state.name}.`}
              </div>

              {/* Subcategory Filter Pills */}
              {subcategories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1 pb-1">
                  <button
                    onClick={() => setSelectedCuisineSubcategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCuisineSubcategory === 'all'
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    All Delicacies ({state.cuisines.length})
                  </button>
                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedCuisineSubcategory(sub)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedCuisineSubcategory === sub
                          ? 'bg-amber-500 text-slate-950 shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      {sub.includes('Non-Vegetarian')
                        ? '🍗 '
                        : sub.includes('Snacks') || sub.includes('Breads')
                        ? '🥙 '
                        : sub.includes('Sweets')
                        ? '🍯 '
                        : '🍲 '}
                      {sub}
                    </button>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                {filteredCuisines.map((food, idx) => (
                  <div
                    key={food.id || idx}
                    className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-3 hover:border-amber-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base font-bold text-white">{food.name}</h4>
                          {food.giTag && (
                            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold px-2 py-0.5 rounded">
                              GI Tagged
                            </span>
                          )}
                          {food.origin && (
                            <span className="bg-slate-900 text-amber-300 border border-slate-700 text-[10px] font-medium px-2 py-0.5 rounded">
                              📍 {food.origin}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[11px] text-amber-400 font-medium">{food.category}</span>
                          {food.subcategory && (
                            <span className="text-[10px] text-slate-400">
                              &bull; {food.subcategory}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xl">
                        {food.category === 'Dessert'
                          ? '🍯'
                          : food.category === 'Beverage'
                          ? '☕'
                          : food.category === 'Street Food'
                          ? '🥙'
                          : food.category === 'Non-Vegetarian'
                          ? '🍗'
                          : '🍲'}
                      </span>
                    </div>

                    {(food.imageUrl || food.image) && (
                      <div className="relative w-full">
                        <AdaptiveImage
                          src={food.imageUrl || food.image}
                          alt={food.name}
                          title={food.name}
                          subtitle={`${food.category}${food.subcategory ? ` • ${food.subcategory}` : ''}`}
                          description={food.detailedDescription || food.description}
                          category="Cuisine"
                          heightClass="h-40 sm:h-48"
                          onOpenModal={(item) => {
                            setLightboxImage(item);
                            setIsLightboxOpen(true);
                          }}
                        />
                      </div>
                    )}

                    {food.shortDesc && (
                      <p className="text-xs text-amber-200 font-medium italic">
                        "{food.shortDesc}"
                      </p>
                    )}

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {food.detailedDescription || food.description}
                    </p>

                    {food.highlights && food.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {food.highlights.map((hl, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] bg-slate-900/90 text-amber-300 border border-slate-700 font-medium"
                          >
                            ✦ {hl}
                          </span>
                        ))}
                      </div>
                    )}

                    {(food.flavorProfile || food.bestPairedWith) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                        {food.flavorProfile && (
                          <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-[11px]">
                            <span className="text-amber-400 font-semibold block">Flavor Profile:</span>
                            <span className="text-slate-300">{food.flavorProfile}</span>
                          </div>
                        )}
                        {food.bestPairedWith && (
                          <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-[11px]">
                            <span className="text-amber-400 font-semibold block">Best Paired With:</span>
                            <span className="text-slate-300">{food.bestPairedWith}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {food.keyIngredients && food.keyIngredients.length > 0 && (
                      <div className="pt-2 border-t border-slate-700/40">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-semibold">
                          Key Ingredients
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {food.keyIngredients.map((ing, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-900/80 text-amber-200 border border-slate-700"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })()}

        {/* FESTIVALS TAB */}
        {activeTab === 'festivals' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-xs text-slate-400">
              Vibrant seasonal festivals, harvest celebrations, temple yatras, and community fairs.
            </p>

            <div className="space-y-4">
              {state.festivals.map((fest, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-base font-bold text-amber-300">{fest.name}</h4>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        🗓️ {fest.timing || fest.month}
                      </span>
                    </div>
                    <span className="text-xl">🎉</span>
                  </div>

                  {(fest.image || fest.imageUrl) && (
                    <div className="relative w-full">
                      <AdaptiveImage
                        src={(fest.image || fest.imageUrl)!}
                        alt={fest.name}
                        title={fest.name}
                        subtitle={`Festival • ${fest.timing || fest.month || ''}`}
                        description={fest.description || fest.significance}
                        category="Festival"
                        heightClass="h-40 sm:h-48"
                        onOpenModal={(item) => {
                          setLightboxImage(item);
                          setIsLightboxOpen(true);
                        }}
                      />
                    </div>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed">{fest.description || fest.significance}</p>

                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/40 space-y-2 text-xs">
                    <div>
                      <span className="text-amber-400 font-semibold block">🪔 Sacred Rituals:</span>
                      <span className="text-slate-300">{fest.keyRitual}</span>
                    </div>
                    <div>
                      <span className="text-amber-400 font-semibold block">✨ Main Highlight:</span>
                      <span className="text-slate-300">{fest.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CRAFTS & ATTIRE TAB */}
        {activeTab === 'crafts_attire' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <p className="text-xs text-slate-400">
              Traditional clothing, master handlooms, and exquisite craft legacies of {state.name}.
            </p>

            {/* Featured Attire & Textiles Showcase */}
            {state.craftsAndAttire.attireItems && state.craftsAndAttire.attireItems.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Shirt className="w-3.5 h-3.5" /> Featured Attire & Textiles
                </h4>
                <div className="space-y-3">
                  {state.craftsAndAttire.attireItems.map((attire) => (
                    <div
                      key={attire.id}
                      className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/70 hover:border-amber-500/50 transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h5 className="text-base font-bold text-white">{attire.name}</h5>
                          {attire.origin && (
                            <span className="text-[11px] text-amber-400 font-medium">
                              Origin: {attire.origin}
                            </span>
                          )}
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Handloom & Attire
                        </span>
                      </div>

                      {(attire.image || attire.imagePlaceholder) && (
                        <div className="relative w-full">
                          <AdaptiveImage
                            src={attire.image || attire.imagePlaceholder!}
                            alt={attire.name}
                            title={attire.name}
                            subtitle={attire.origin ? `Origin: ${attire.origin}` : 'Handloom & Attire'}
                            description={attire.detailedDescription || attire.description}
                            category="Craft & Attire"
                            heightClass="h-40 sm:h-48"
                            onOpenModal={(item) => {
                              setLightboxImage(item);
                              setIsLightboxOpen(true);
                            }}
                          />
                        </div>
                      )}

                      <p className="text-xs text-amber-200 font-medium italic">
                        "{attire.shortDesc}"
                      </p>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {attire.detailedDescription}
                      </p>

                      {attire.highlights && attire.highlights.length > 0 && (
                        <div className="pt-2 border-t border-slate-700/40 flex flex-wrap gap-1.5">
                          {attire.highlights.map((hl, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md text-[10px] bg-slate-900 text-amber-300 border border-slate-700 font-medium"
                            >
                              ✦ {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Traditional Textiles & Weaves
              </h4>
              <div className="flex flex-wrap gap-2">
                {state.craftsAndAttire.textiles.map((tex, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 text-amber-200 border border-slate-700 font-medium"
                  >
                    🧵 {tex}
                  </span>
                ))}
              </div>

              {state.craftsAndAttire.textileImages && state.craftsAndAttire.textileImages.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {state.craftsAndAttire.textileImages.map((tImg, i) => (
                    <div key={i}>
                      <AdaptiveImage
                        src={tImg}
                        alt="Textile pattern"
                        title={state.craftsAndAttire.textiles[i] || `${state.name} Textile`}
                        subtitle="Handloom Weave"
                        category="Handloom"
                        heightClass="h-24 sm:h-28"
                        onOpenModal={(item) => {
                          setLightboxImage(item);
                          setIsLightboxOpen(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Handicrafts & Artisanship
              </h4>
              <div className="space-y-1.5">
                {state.craftsAndAttire.handicrafts.map((craft, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-200"
                  >
                    🏺 {craft}
                  </div>
                ))}
              </div>

              {state.craftsAndAttire.handicraftImages && state.craftsAndAttire.handicraftImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                  {state.craftsAndAttire.handicraftImages.map((cImg, i) => (
                    <div key={i}>
                      <AdaptiveImage
                        src={cImg}
                        alt="Handicraft"
                        title={state.craftsAndAttire.handicrafts[i] || `${state.name} Craft`}
                        subtitle="Handicraft & Art"
                        category="Craft"
                        heightClass="h-24 sm:h-28"
                        onOpenModal={(item) => {
                          setLightboxImage(item);
                          setIsLightboxOpen(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 space-y-2">
                <span className="text-[10px] text-amber-400 font-bold uppercase block">
                  Men's Traditional Attire
                </span>
                {state.craftsAndAttire.traditionalMenAttireImage && (
                  <div className="w-full">
                    <AdaptiveImage
                      src={state.craftsAndAttire.traditionalMenAttireImage}
                      alt="Men's Traditional Attire"
                      title="Men's Traditional Attire"
                      subtitle={state.name}
                      description={state.craftsAndAttire.traditionalMenAttire}
                      category="Traditional Attire"
                      heightClass="h-32 sm:h-36"
                      onOpenModal={(item) => {
                        setLightboxImage(item);
                        setIsLightboxOpen(true);
                      }}
                    />
                  </div>
                )}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {state.craftsAndAttire.traditionalMenAttire}
                </p>
              </div>

              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 space-y-2">
                <span className="text-[10px] text-amber-400 font-bold uppercase block">
                  Women's Traditional Attire
                </span>
                {state.craftsAndAttire.traditionalWomenAttireImage && (
                  <div className="w-full">
                    <AdaptiveImage
                      src={state.craftsAndAttire.traditionalWomenAttireImage}
                      alt="Women's Traditional Attire"
                      title="Women's Traditional Attire"
                      subtitle={state.name}
                      description={state.craftsAndAttire.traditionalWomenAttire}
                      category="Traditional Attire"
                      heightClass="h-32 sm:h-36"
                      onOpenModal={(item) => {
                        setLightboxImage(item);
                        setIsLightboxOpen(true);
                      }}
                    />
                  </div>
                )}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {state.craftsAndAttire.traditionalWomenAttire}
                </p>
              </div>
            </div>

            {state.craftsAndAttire.giTaggedCrafts && (
              <div className="bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/30">
                <span className="text-xs font-bold text-emerald-300 block mb-1">
                  🌿 Geographical Indications (GI Certified)
                </span>
                <p className="text-xs text-slate-300">
                  {state.craftsAndAttire.giTaggedCrafts.join(' • ')}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* HISTORY TIMELINE TAB */}
        {activeTab === 'history' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-xs text-slate-400">
              Chronological milestones, ancient kingdoms, freedom struggles, and modern statehood.
            </p>

            <div className="relative pl-6 space-y-6 border-l-2 border-amber-500/30">
              {state.historyTimeline.map((item, idx) => (
                <div key={idx} className="relative group space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:scale-125 transition-transform" />
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                    {item.era}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1.5">{item.title}</h4>
                  {(item.image || item.imageUrl) && (
                    <div className="w-full">
                      <AdaptiveImage
                        src={(item.image || item.imageUrl)!}
                        alt={item.title}
                        title={item.title}
                        subtitle={`Chronicle • ${item.era}`}
                        description={item.description}
                        category="History & Dynasties"
                        heightClass="h-44 sm:h-52"
                        onOpenModal={(img) => {
                          setLightboxImage(img);
                          setIsLightboxOpen(true);
                        }}
                      />
                    </div>
                  )}
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* AI CULTURAL SCHOLAR TAB */}
        {activeTab === 'ai_guide' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col h-full space-y-4"
          >
            <div className="bg-gradient-to-r from-purple-500/10 via-amber-500/10 to-transparent p-3.5 rounded-xl border border-amber-500/30">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-amber-400" /> Interactive Cultural Guide for{' '}
                {state.name}
              </span>
              <p className="text-[11px] text-slate-300 mt-1">
                Ask any question about {state.name}'s architecture, folk mythology, secret recipes,
                or historical trivia.
              </p>
            </div>

            {/* Quick Suggestion Prompts */}
            <div className="flex flex-wrap gap-1.5">
              {[
                `Tell me a hidden folklore of ${state.name}`,
                `What makes ${state.name}'s architecture unique?`,
                `Describe traditional wedding customs`,
                `Explain the history of ${state.artAndDance[0]?.name || 'folk dances'}`,
              ].map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleAskAI(sug)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-amber-500/20 text-slate-300 hover:text-amber-200 border border-slate-700/60 transition-all text-left"
                >
                  💡 {sug}
                </button>
              ))}
            </div>

            {/* Chat Conversation Stream */}
            <div className="flex-1 space-y-3 overflow-y-auto max-h-[340px] pr-1">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-amber-500 text-slate-950 ml-6 font-medium font-sans'
                      : 'bg-slate-800/90 text-slate-200 mr-4 border border-slate-700/60 font-sans'
                  }`}
                >
                  <span className="block text-[10px] uppercase font-bold opacity-75 mb-1">
                    {msg.role === 'user' ? 'You' : '🏛️ Cultural Scholar AI'}
                  </span>
                  <div className="whitespace-pre-line">{msg.text}</div>
                </div>
              ))}

              {aiLoading && (
                <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/60 text-xs text-amber-300 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                  Consulting cultural archives for {state.name}...
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <input
                id="input-ai-scholar"
                type="text"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                placeholder={`Ask anything about ${state.name}...`}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                id="btn-send-ai-query"
                onClick={() => handleAskAI()}
                disabled={!aiQuery.trim() || aiLoading}
                className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold disabled:opacity-50 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal for Complete & Clear Image View */}
      <ClearImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={lightboxImage}
      />
    </motion.aside>
  );
};
