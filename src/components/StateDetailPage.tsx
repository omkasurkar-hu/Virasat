import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  MapPin,
  Landmark,
  Music,
  Utensils,
  Shirt,
  Sparkles,
  History,
  BookOpen,
  Volume2,
  VolumeX,
  Share2,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Compass,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Bot,
  Send,
  Award,
  CheckCircle2,
  Play,
  Pause,
  SlidersHorizontal,
  Eye,
} from 'lucide-react';
import { StateHeritage, HeritageTab, Monument, CuisineItem, ArtAndDance } from '../types';
import { heritageAudio } from '../utils/audioSynth';
import { AdaptiveImage } from './AdaptiveImage';
import { ClearImageLightboxModal, LightboxImageItem } from './ClearImageLightboxModal';

interface StateDetailPageProps {
  state: StateHeritage;
  allStates: StateHeritage[];
  onBackToMap: () => void;
  onBackToHome: () => void;
  onSelectState: (state: StateHeritage) => void;
  onSelectMonument: (monument: Monument, state: StateHeritage) => void;
}

interface VisualGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  description?: string;
  giTag?: boolean;
  isUnesco?: boolean;
}

export const StateDetailPage: React.FC<StateDetailPageProps> = ({
  state,
  allStates,
  onBackToMap,
  onBackToHome,
  onSelectState,
  onSelectMonument,
}) => {
  const [activeTab, setActiveTab] = useState<HeritageTab>('overview');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isPlayingFolkAudio, setIsPlayingFolkAudio] = useState<boolean>(false);
  const [selectedCuisineSubcategory, setSelectedCuisineSubcategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<LightboxImageItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxGallery, setLightboxGallery] = useState<LightboxImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Active Hero Banner Image URL with robust fallback cascade
  const [heroBannerSrc, setHeroBannerSrc] = useState<string>(() => {
    return state.bannerImage || state.image || state.monuments[0]?.image || '/images/virasat_hero_bg.jpg';
  });

  useEffect(() => {
    setHeroBannerSrc(state.bannerImage || state.image || state.monuments[0]?.image || '/images/virasat_hero_bg.jpg');
  }, [state.id, state.bannerImage]);

  const handleBannerImageError = () => {
    if (heroBannerSrc === state.bannerImage && state.monuments[0]?.image) {
      setHeroBannerSrc(state.monuments[0].image);
    } else if (state.monuments[1]?.image && heroBannerSrc !== state.monuments[1].image) {
      setHeroBannerSrc(state.monuments[1].image);
    } else if (heroBannerSrc !== '/images/virasat_hero_bg.jpg') {
      setHeroBannerSrc('/images/virasat_hero_bg.jpg');
    }
  };

  // Tab Slider Track Ref and Scroll Position
  const tabScrollContainerRef = useRef<HTMLDivElement>(null);
  const [tabScrollProgress, setTabScrollProgress] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  // Update tab scroll metrics
  const updateTabScrollMetrics = () => {
    if (!tabScrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabScrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setTabScrollProgress((scrollLeft / maxScroll) * 100);
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < maxScroll - 4);
    } else {
      setTabScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  };

  useEffect(() => {
    const el = tabScrollContainerRef.current;
    if (!el) return;
    updateTabScrollMetrics();
    el.addEventListener('scroll', updateTabScrollMetrics);
    window.addEventListener('resize', updateTabScrollMetrics);
    return () => {
      el.removeEventListener('scroll', updateTabScrollMetrics);
      window.removeEventListener('resize', updateTabScrollMetrics);
    };
  }, []);

  const handleSlideTabs = (direction: 'left' | 'right') => {
    if (!tabScrollContainerRef.current) return;
    const scrollAmount = 240;
    tabScrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleTabSelect = (tabId: HeritageTab) => {
    setActiveTab(tabId);
    // Smoothly ensure active tab is in view
    const tabEl = document.getElementById(`tab-item-${tabId}`);
    if (tabEl && tabScrollContainerRef.current) {
      tabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
      text: `Namaste! I am your AI Cultural Scholar for ${state.name}. Ask me anything about ${state.name}'s architecture, royal recipes, ancient dynasties, folk arts, or sacred lore!`,
    },
  ]);

  // Construct a comprehensive list of images for the state
  const visualGallery: VisualGalleryItem[] = [
    {
      id: 'hero-state',
      title: `${state.name} Heritage`,
      subtitle: state.tagline,
      category: 'Landscape & Culture',
      imageUrl:
        state.image ||
        (state.monuments[0]?.image ??
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80'),
      description: state.overview,
    },
    ...state.monuments.map((m, idx) => ({
      id: `monument-${idx}`,
      title: m.name,
      subtitle: `${m.century} • ${m.type}`,
      category: 'Monument',
      imageUrl: m.image,
      description: m.detailedDescription || m.description,
      isUnesco: m.isUnesco,
    })),
    ...state.cuisines.map((c, idx) => ({
      id: `cuisine-${idx}`,
      title: c.name,
      subtitle: `${c.category}${c.origin ? ` • ${c.origin}` : ''}`,
      category: 'Cuisine',
      imageUrl:
        c.imageUrl ||
        c.image ||
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      description: c.detailedDescription || c.description,
      giTag: c.giTag,
    })),
    ...state.artAndDance.map((a, idx) => ({
      id: `art-${idx}`,
      title: a.name,
      subtitle: `${a.type} • Origin: ${a.origin}`,
      category: 'Performing Art',
      imageUrl:
        a.image ||
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: a.detailedDescription || a.description,
      giTag: a.giTag,
    })),
    ...(state.festivals
      ? state.festivals
          .filter((f) => Boolean(f.image || f.imageUrl))
          .map((f, idx) => ({
            id: `festival-${idx}`,
            title: f.name,
            subtitle: `Festival • ${f.timing || f.month || ''}`,
            category: 'Festival',
            imageUrl: (f.image || f.imageUrl)!,
            description: f.description || f.significance,
          }))
      : []),
    ...(state.craftsAndAttire?.attireItems
      ? state.craftsAndAttire.attireItems
          .filter((ai) => Boolean(ai.image))
          .map((ai, idx) => ({
            id: `attire-item-${idx}`,
            title: ai.name,
            subtitle: `Attire • ${ai.origin || state.name}`,
            category: 'Craft & Attire',
            imageUrl: ai.image!,
            description: ai.detailedDescription || ai.description,
          }))
      : []),
    ...(state.craftsAndAttire?.traditionalMenAttireImage
      ? [
          {
            id: 'attire-men',
            title: `Men's Traditional Attire`,
            subtitle: state.name,
            category: 'Craft & Attire',
            imageUrl: state.craftsAndAttire.traditionalMenAttireImage,
            description: state.craftsAndAttire.traditionalMenAttire,
          },
        ]
      : []),
    ...(state.craftsAndAttire?.traditionalWomenAttireImage
      ? [
          {
            id: 'attire-women',
            title: `Women's Traditional Attire`,
            subtitle: state.name,
            category: 'Craft & Attire',
            imageUrl: state.craftsAndAttire.traditionalWomenAttireImage,
            description: state.craftsAndAttire.traditionalWomenAttire,
          },
        ]
      : []),
    ...(state.historyTimeline
      ? state.historyTimeline
          .filter((h) => Boolean(h.image || h.imageUrl))
          .map((h, idx) => ({
            id: `history-${idx}`,
            title: h.title,
            subtitle: `Chronicle • ${h.era}`,
            category: 'History & Dynasties',
            imageUrl: (h.image || h.imageUrl)!,
            description: h.description,
          }))
      : []),
    ...(state.craftsAndAttire?.textileImages
      ? state.craftsAndAttire.textileImages.map((img, idx) => ({
          id: `textile-${idx}`,
          title: state.craftsAndAttire.textiles[idx] || `${state.name} Textile Weave`,
          subtitle: `Handloom • ${state.name}`,
          category: 'Craft & Attire',
          imageUrl: img,
          description: `Masterpiece handloom weave of ${state.name}.`,
        }))
      : []),
    ...(state.craftsAndAttire?.handicraftImages
      ? state.craftsAndAttire.handicraftImages.map((img, idx) => ({
          id: `handicraft-${idx}`,
          title: state.craftsAndAttire.handicrafts[idx] || `${state.name} Artisanship`,
          subtitle: `Handicraft • ${state.name}`,
          category: 'Craft & Attire',
          imageUrl: img,
          description: `Living craft and master artisanship of ${state.name}.`,
        }))
      : []),
    ...(state.traditionalAttire
      ? [
          {
            id: 'attire-main',
            title: state.traditionalAttire.name,
            subtitle: `Handloom & Attire • ${state.name}`,
            category: 'Craft & Attire',
            imageUrl:
              state.traditionalAttire.image ||
              state.traditionalAttire.imagePlaceholder ||
              'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
            description: state.traditionalAttire.description,
          },
        ]
      : []),
  ];

  useEffect(() => {
    setActiveTab('overview');
    setSelectedCuisineSubcategory('all');
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    if (isPlayingFolkAudio) {
      heritageAudio.stopAll();
      setIsPlayingFolkAudio(false);
    }
    setChatHistory([
      {
        role: 'assistant',
        text: `Namaste! I am your AI Cultural Scholar for ${state.name}. Ask me anything about ${state.name}'s architecture, royal recipes, ancient dynasties, folk arts, or sacred lore!`,
      },
    ]);
  }, [state.id]);

  const openLightbox = (
    image: LightboxImageItem,
    customGallery?: LightboxImageItem[],
    index?: number
  ) => {
    setLightboxImage(image);
    const resolvedGallery =
      customGallery ||
      visualGallery.map((v) => ({
        src: v.imageUrl,
        alt: v.title,
        title: v.title,
        subtitle: v.subtitle,
        description: v.description,
        category: v.category,
      }));
    setLightboxGallery(resolvedGallery);
    const resolvedIndex =
      index !== undefined
        ? index
        : Math.max(0, resolvedGallery.findIndex((item) => item.src === image.src));
    setLightboxIndex(resolvedIndex >= 0 ? resolvedIndex : 0);
    setIsLightboxOpen(true);
  };

  // Prev / Next State navigation
  const currentIndex = allStates.findIndex((s) => s.id === state.id);
  const prevState = allStates[(currentIndex - 1 + allStates.length) % allStates.length];
  const nextState = allStates[(currentIndex + 1) % allStates.length];

  // Audio controls
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

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = `${state.name}. ${state.tagline}. ${state.overview} Capital is ${state.capital}. Official language is ${state.officialLanguage}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Explore the heritage of ${state.name} on Virasat - Discover the Soul of India: ${state.tagline}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAskAI = async (customPrompt?: string) => {
    const promptToSend = customPrompt || aiQuery;
    if (!promptToSend.trim() || aiLoading) return;

    const userMessage = { role: 'user' as const, text: promptToSend };
    setChatHistory((prev) => [...prev, userMessage]);
    setAiQuery('');
    setAiLoading(true);

    try {
      const response = await fetch('/api/ask-bharat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: promptToSend,
          stateName: state.name,
          context: `State: ${state.name}, Capital: ${state.capital}, Region: ${state.region}. Overview: ${state.overview}. Monuments: ${state.monuments.map((m) => m.name).join(', ')}. Cuisines: ${state.cuisines.map((c) => c.name).join(', ')}. Dance: ${state.artAndDance.map((d) => d.name).join(', ')}.`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setChatHistory((prev) => [
          ...prev,
          { role: 'assistant', text: data.answer || 'No response received.' },
        ]);
      } else {
        throw new Error('Fallback triggered');
      }
    } catch {
      // Local fallback response
      let fallbackText = `${state.name} is one of India's most celebrated cultural jewels. `;
      if (promptToSend.toLowerCase().includes('food') || promptToSend.toLowerCase().includes('recipe') || promptToSend.toLowerCase().includes('dish')) {
        fallbackText += `Key culinary specialties include ${state.cuisines.map((c) => c.name).join(', ')}.`;
      } else if (promptToSend.toLowerCase().includes('dance') || promptToSend.toLowerCase().includes('music')) {
        fallbackText += `Prominent performing arts include ${state.artAndDance.map((a) => a.name).join(', ')}.`;
      } else {
        fallbackText += `${state.overview} Notable monuments include ${state.monuments.map((m) => m.name).join(', ')}.`;
      }
      setChatHistory((prev) => [
        ...prev,
        { role: 'assistant', text: fallbackText, fallback: true },
      ]);
    } finally {
      setAiLoading(false);
    }
  };

  const unescoCount = state.monuments.filter((m) => m.isUnesco).length;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 pb-24">
      {/* Top Breadcrumb & Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200 shadow-sm px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Back Controls & Breadcrumbs */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onBackToMap}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-[#8B1E22] border border-stone-300 text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer group"
              title="Return to Map"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Map</span>
            </button>

            <button
              onClick={onBackToHome}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-transparent hover:bg-stone-200/60 text-stone-700 text-xs font-semibold transition-all cursor-pointer"
            >
              <span>Virasat Home</span>
            </button>

            <span className="hidden sm:inline text-stone-400">&bull;</span>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#8B1E22]/10 text-[#8B1E22] font-serif font-bold text-xs">
                {state.region}
              </span>
              <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                {state.name}
              </span>
            </div>
          </div>

          {/* Right: State Switcher & Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Prev / Next State Navigation */}
            <div className="flex items-center bg-white rounded-xl border border-stone-300 p-0.5 shadow-sm">
              <button
                onClick={() => onSelectState(prevState)}
                className="p-1.5 hover:bg-stone-100 text-stone-700 rounded-lg transition-colors cursor-pointer"
                title={`Previous: ${prevState.name}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-semibold text-stone-600 px-2 select-none border-x border-stone-200">
                {state.code || state.name.slice(0, 3).toUpperCase()}
              </span>
              <button
                onClick={() => onSelectState(nextState)}
                className="p-1.5 hover:bg-stone-100 text-stone-700 rounded-lg transition-colors cursor-pointer"
                title={`Next: ${nextState.name}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Audio Folk Song Button */}
            <button
              onClick={toggleFolkAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm cursor-pointer ${
                isPlayingFolkAudio
                  ? 'bg-amber-500 text-slate-950 font-bold animate-pulse shadow-md'
                  : 'bg-white hover:bg-amber-50 text-amber-900 border border-amber-300'
              }`}
              title="Play Traditional Folk Music Preview"
            >
              {isPlayingFolkAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden md:inline">Playing Folk Song</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden md:inline">Folk Melody</span>
                </>
              )}
            </button>

            {/* TTS Narration */}
            <button
              onClick={toggleSpeech}
              className={`p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-[#8B1E22] text-white border-[#8B1E22] animate-pulse'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-300'
              }`}
              title={isSpeaking ? 'Stop Narration' : 'Listen to State Overview'}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Share / Copy */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs transition-all cursor-pointer relative"
              title="Share State Link"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Bookmark */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-xl border text-xs transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-100 border-amber-400 text-amber-800'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-300'
              }`}
              title="Bookmark State"
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-700" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            {/* Open on Map */}
            <button
              onClick={onBackToMap}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#8B1E22] hover:bg-[#73181b] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">Explore on Map</span>
            </button>
          </div>
        </div>
      </header>

      {/* State Hero Banner Section: Name and Banner Image Overlap Just Like Home Page */}
      <section
        id="state-hero-banner"
        className="relative min-h-[46vh] sm:min-h-[52vh] md:min-h-[58vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-12 pb-16 overflow-hidden select-none"
      >
        {/* State Banner Image Canvas - High Clarity & Clear Visibility */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <img
            src={heroBannerSrc}
            alt={state.name}
            onError={handleBannerImageError}
            className="w-full h-full object-cover object-center brightness-[0.92] contrast-[1.06] transition-transform duration-1000 scale-100 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Subtle cinematic scrim & bottom fade so photo is vivid and text is crisp */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-3"
        >
          {/* Heritage Region Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] mb-3 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>
              {state.region} INDIA &bull; {state.stateCode || state.code || state.name.slice(0, 3).toUpperCase()}
            </span>
          </div>

          {/* Bold State Name Overlapping Banner (No Text Background) */}
          <h1 className="font-serif font-black tracking-[0.06em] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight select-none uppercase text-center drop-shadow-[0_3px_20px_rgba(0,0,0,0.9)] my-2">
            {state.name}
          </h1>

          {/* State Tagline */}
          <p className="font-serif italic text-xs sm:text-sm md:text-base text-stone-100 font-medium max-w-2xl mt-3 px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] text-center">
            "{state.tagline}"
          </p>

          {/* Quick Cultural Highlight Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-md">
              🏛️ {state.monuments.length} Protected Monuments
            </span>
            {unescoCount > 0 && (
              <span className="px-3.5 py-1 rounded-full bg-emerald-700/80 backdrop-blur-md border border-emerald-300/40 text-emerald-100 text-xs font-bold shadow-md">
                ✨ {unescoCount} UNESCO World Heritage Sites
              </span>
            )}
            <span className="px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-md">
              📍 Capital: {state.capital}
            </span>
            {state.officialLanguage && (
              <span className="px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-md">
                🗣️ {state.officialLanguage}
              </span>
            )}
          </div>
        </motion.div>
      </section>

      {/* Main Container: Full-Width Heritage Showcase */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-8">
        {/* Heritage Chronicle & Cultural Overview Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#8B1E22]/10 text-[#8B1E22] text-xs font-bold uppercase tracking-widest">
                Heritage Chronicle
              </span>
              <span className="text-xs text-stone-500 font-medium">
                {state.region} Region &bull; Capital: {state.capital}
              </span>
            </div>
            {unescoCount > 0 && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                {unescoCount} UNESCO World Heritage Sites
              </span>
            )}
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              The Cultural Soul of {state.name}
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#8B1E22] italic mt-1 font-medium">
              "{state.tagline}"
            </p>
          </div>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {state.overview}
          </p>

          {/* Quick State Facts Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-100 text-xs">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Capital
              </span>
              <span className="font-bold text-stone-900 mt-0.5 block text-sm">
                {state.capital}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Official Language
              </span>
              <span className="font-bold text-stone-900 mt-0.5 block text-sm">
                {state.officialLanguage}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                UNESCO Sites
              </span>
              <span className="font-bold text-emerald-700 mt-0.5 block text-sm">
                {unescoCount > 0 ? `${unescoCount} World Heritage Sites` : 'Rich Living Heritage'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Coordinates
              </span>
              <span className="font-bold text-stone-900 mt-0.5 block font-mono text-xs">
                {state.coordinates[0].toFixed(2)}° N, {state.coordinates[1].toFixed(2)}° E
              </span>
            </div>
          </div>

          {state.notableDynasties && state.notableDynasties.length > 0 && (
            <div className="pt-2 border-t border-stone-100">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1.5 font-semibold">
                Historic Dynasties & Rulers
              </span>
              <div className="flex flex-wrap gap-1.5">
                {state.notableDynasties.map((dyn, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-lg bg-stone-100 text-stone-800 text-[11px] font-medium border border-stone-200"
                  >
                    👑 {dyn}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Tabs with Interactive Slider Track & Beneath Slide Bar */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-2 sticky top-16 z-20 space-y-2">
              <div className="flex items-center gap-1.5">
                {/* Left Slide Arrow */}
                <button
                  type="button"
                  onClick={() => handleSlideTabs('left')}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-xl border text-stone-700 transition-all flex-shrink-0 cursor-pointer ${
                    canScrollLeft
                      ? 'bg-stone-50 hover:bg-stone-200 border-stone-300 text-stone-900 shadow-sm'
                      : 'bg-stone-100/50 border-stone-200 text-stone-300 cursor-not-allowed opacity-50'
                  }`}
                  title="Slide Tabs Left"
                  aria-label="Slide tabs left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Horizontally Scrollable Tabs Track */}
                <div
                  ref={tabScrollContainerRef}
                  className="flex-1 flex items-center gap-1.5 overflow-x-auto scroll-smooth py-1 px-0.5 scrollbar-none select-none"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {[
                    { id: 'overview', label: 'Overview', icon: BookOpen },
                    { id: 'monuments', label: `Monuments (${state.monuments.length})`, icon: Landmark },
                    { id: 'dance_music', label: `Dance & Music (${state.artAndDance.length})`, icon: Music },
                    { id: 'cuisines', label: `Cuisines (${state.cuisines.length})`, icon: Utensils },
                    { id: 'crafts_attire', label: `Crafts & Attire`, icon: Shirt },
                    { id: 'festivals', label: `Festivals (${state.festivals.length})`, icon: Sparkles },
                    { id: 'history', label: 'History', icon: History },
                    { id: 'ai_guide', label: 'Ask AI Scholar', icon: Bot },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        id={`tab-item-${tab.id}`}
                        onClick={() => handleTabSelect(tab.id as HeritageTab)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#8B1E22] text-white shadow-md scale-100 ring-2 ring-[#8B1E22]/20'
                            : 'text-stone-700 hover:text-[#8B1E22] bg-stone-50 hover:bg-stone-100 border border-stone-200'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Slide Arrow */}
                <button
                  type="button"
                  onClick={() => handleSlideTabs('right')}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-xl border text-stone-700 transition-all flex-shrink-0 cursor-pointer ${
                    canScrollRight
                      ? 'bg-stone-50 hover:bg-stone-200 border-stone-300 text-stone-900 shadow-sm'
                      : 'bg-stone-100/50 border-stone-200 text-stone-300 cursor-not-allowed opacity-50'
                  }`}
                  title="Slide Tabs Right"
                  aria-label="Slide tabs right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Interactive Slide Bar Beneath Tabs */}
              <div className="pt-1 px-1 flex items-center gap-3">
                <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
                  <SlidersHorizontal className="w-3 h-3 text-[#8B1E22]" /> Slide Tabs
                </span>

                {/* Track Slider Bar */}
                <div
                  className="flex-1 relative h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200/80 cursor-pointer group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percent = Math.max(0, Math.min(1, clickX / rect.width));
                    if (tabScrollContainerRef.current) {
                      const maxScroll =
                        tabScrollContainerRef.current.scrollWidth -
                        tabScrollContainerRef.current.clientWidth;
                      tabScrollContainerRef.current.scrollTo({
                        left: maxScroll * percent,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  title="Click or drag to slide between Cuisines, Festivals, Monuments & more"
                >
                  <div
                    className="absolute top-0 bottom-0 bg-gradient-to-r from-[#8B1E22] via-amber-600 to-[#8B1E22] rounded-full transition-all duration-150 group-hover:brightness-110 shadow-sm"
                    style={{
                      left: `${Math.max(0, Math.min(75, tabScrollProgress * 0.75))}%`,
                      width: '25%',
                    }}
                  />
                </div>

                <div className="text-[10px] font-bold text-stone-500 font-mono flex-shrink-0">
                  {Math.round(tabScrollProgress)}%
                </div>
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="space-y-6">
              
              {/* ---------------- OVERVIEW TAB ---------------- */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Detailed Cultural Narrative */}
                  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                    <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-600" />
                      Civilizational & Cultural Legacy
                    </h3>
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                      {state.detailedDescription || state.overview}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                      <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-2">
                        <Landmark className="w-4 h-4 text-[#8B1E22]" />
                        Architectural Marvels
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Home to {state.monuments.length} iconic architectural landmarks, including {state.monuments.map((m) => m.name).slice(0, 3).join(', ')}.
                      </p>
                      <button
                        onClick={() => setActiveTab('monuments')}
                        className="text-xs font-bold text-[#8B1E22] hover:underline pt-1 block"
                      >
                        Explore all monuments &rarr;
                      </button>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                      <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-amber-600" />
                        Gastronomic Specialties
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Famous for royal recipes, street flavors, and GI-certified delicacies such as {state.cuisines.map((c) => c.name).slice(0, 3).join(', ')}.
                      </p>
                      <button
                        onClick={() => setActiveTab('cuisines')}
                        className="text-xs font-bold text-[#8B1E22] hover:underline pt-1 block"
                      >
                        Browse authentic dishes &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Key Insights & Cultural Quotes */}
                  {state.keyFacts && state.keyFacts.length > 0 && (
                    <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-6 rounded-2xl border border-amber-200/80 space-y-3">
                      <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
                        <span>✦</span> Essential Cultural Facts
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {state.keyFacts.map((fact, idx) => (
                          <li key={idx} className="text-xs text-stone-800 flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-200/60">
                            <span className="text-[#8B1E22] font-bold">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ---------------- MONUMENTS TAB ---------------- */}
              {activeTab === 'monuments' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <p className="text-xs text-stone-600">
                    Discover {state.monuments.length} protected architectural wonders, ancient temple complexes, and royal palaces in {state.name}.
                  </p>

                  <div className="space-y-4">
                    {state.monuments.map((monument, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-[#8B1E22]/40 transition-all flex flex-col sm:flex-row gap-5"
                      >
                        <div className="sm:w-56 h-40 flex-shrink-0 relative">
                          <AdaptiveImage
                            src={monument.image}
                            alt={monument.name}
                            title={monument.name}
                            subtitle={`${monument.century} • ${monument.type}`}
                            description={monument.detailedDescription || monument.description}
                            category="Monument"
                            heightClass="h-40"
                            onOpenModal={(item) => openLightbox(item)}
                          />
                          {monument.isUnesco && (
                            <span className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded-md bg-emerald-700 text-white text-[9px] font-bold uppercase shadow">
                              UNESCO
                            </span>
                          )}
                        </div>

                        <div className="flex-1 flex flex-col justify-between space-y-2">
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="font-serif font-bold text-lg text-stone-900">
                                {monument.name}
                              </h4>
                              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-[#8B1E22]">
                                {monument.century}
                              </span>
                            </div>

                            <span className="text-xs text-stone-500 font-medium block mt-0.5">
                              {monument.location} &bull; {monument.type}
                            </span>

                            <p className="text-xs text-stone-700 leading-relaxed mt-2">
                              {monument.detailedDescription || monument.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-end pt-2 border-t border-stone-100">
                            <button
                              onClick={() => onSelectMonument(monument, state)}
                              className="px-3 py-1.5 rounded-lg bg-[#8B1E22] hover:bg-[#73181b] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                            >
                              Deep Dive &rarr;
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ---------------- DANCE & MUSIC TAB ---------------- */}
              {activeTab === 'dance_music' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <p className="text-xs text-stone-600">
                    Classical rhythms, folk ballads, and indigenous theatrical traditions of {state.name}.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {state.artAndDance.map((art, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold text-[#8B1E22] uppercase tracking-wider">
                                {art.type}
                              </span>
                              <h4 className="font-serif font-bold text-base text-stone-900">
                                {art.name}
                              </h4>
                            </div>
                            <span className="text-xs text-stone-500 font-medium">
                              📍 {art.origin}
                            </span>
                          </div>

                          {art.image && (
                            <div className="mt-2">
                              <AdaptiveImage
                                src={art.image}
                                alt={art.name}
                                title={art.name}
                                subtitle={`${art.type} • Origin: ${art.origin}`}
                                description={art.detailedDescription || art.description}
                                category="Performing Art"
                                heightClass="h-44 sm:h-52"
                                onOpenModal={(item) => openLightbox(item)}
                              />
                            </div>
                          )}

                          <p className="text-xs text-stone-700 leading-relaxed mt-2.5">
                            {art.detailedDescription || art.description}
                          </p>
                        </div>

                        {art.instruments && art.instruments.length > 0 && (
                          <div className="pt-2 border-t border-stone-100">
                            <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">
                              Instruments Used
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {art.instruments.map((ins, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-800 border border-stone-200"
                                >
                                  🎵 {ins}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ---------------- CUISINES TAB ---------------- */}
              {activeTab === 'cuisines' && (() => {
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
                    <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 font-medium">
                      <span className="font-bold text-[#8B1E22]">Gastronomy of {state.name}: </span>
                      {state.id === 'uttar-pradesh'
                        ? 'Uttar Pradesh is famous for its rich royal Awadhi meals, savory street snacks, and traditional sweets.'
                        : `Authentic state gastronomy, royal recipes, festive sweets, and GI-tagged delicacies of ${state.name}.`}
                    </div>

                    {/* Subcategory Filter Pills */}
                    {subcategories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => setSelectedCuisineSubcategory('all')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            selectedCuisineSubcategory === 'all'
                              ? 'bg-[#8B1E22] text-white shadow-md'
                              : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                          }`}
                        >
                          All Delicacies ({state.cuisines.length})
                        </button>
                        {subcategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setSelectedCuisineSubcategory(sub)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              selectedCuisineSubcategory === sub
                                ? 'bg-[#8B1E22] text-white shadow-md'
                                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredCuisines.map((food, idx) => (
                        <div
                          key={food.id || idx}
                          className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h4 className="font-serif font-bold text-base text-stone-900">
                                    {food.name}
                                  </h4>
                                  {food.giTag && (
                                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-200">
                                      GI Tag
                                    </span>
                                  )}
                                  {food.origin && (
                                    <span className="bg-stone-100 text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded">
                                      📍 {food.origin}
                                    </span>
                                  )}
                                </div>
                                <span className="text-[11px] text-[#8B1E22] font-semibold block mt-0.5">
                                  {food.category} {food.subcategory ? `• ${food.subcategory}` : ''}
                                </span>
                              </div>
                            </div>

                            {(food.imageUrl || food.image) && (
                              <div className="mt-2">
                                <AdaptiveImage
                                  src={food.imageUrl || food.image}
                                  alt={food.name}
                                  title={food.name}
                                  subtitle={`${food.category}${food.subcategory ? ` • ${food.subcategory}` : ''}`}
                                  description={food.detailedDescription || food.description}
                                  category="Cuisine"
                                  heightClass="h-44 sm:h-52"
                                  onOpenModal={(item) => openLightbox(item)}
                                />
                              </div>
                            )}

                            {food.shortDesc && (
                              <p className="text-xs text-[#8B1E22] font-medium italic mt-2">
                                "{food.shortDesc}"
                              </p>
                            )}

                            <p className="text-xs text-stone-700 leading-relaxed mt-2">
                              {food.detailedDescription || food.description}
                            </p>
                          </div>

                          <div>
                            {food.highlights && food.highlights.length > 0 && (
                              <div className="flex flex-wrap gap-1 pt-2">
                                {food.highlights.map((hl, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 rounded text-[10px] bg-stone-100 text-stone-800 border border-stone-200 font-medium"
                                  >
                                    ✦ {hl}
                                  </span>
                                ))}
                              </div>
                            )}

                            {food.keyIngredients && food.keyIngredients.length > 0 && (
                              <div className="pt-2 mt-2 border-t border-stone-100">
                                <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1 font-semibold">
                                  Key Ingredients
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {food.keyIngredients.map((ing, i) => (
                                    <span
                                      key={i}
                                      className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200"
                                    >
                                      {ing}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })()}

              {/* ---------------- CRAFTS & ATTIRE TAB ---------------- */}
              {activeTab === 'crafts_attire' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Featured Attire Items Showcase (if available) */}
                  {state.craftsAndAttire?.attireItems && state.craftsAndAttire.attireItems.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Shirt className="w-5 h-5 text-[#8B1E22]" />
                        <h4 className="font-serif font-bold text-base text-stone-900">
                          Iconic Traditional Attire & Weaves
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {state.craftsAndAttire.attireItems.map((attire) => (
                          <div
                            key={attire.id}
                            className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h5 className="font-serif font-bold text-base text-stone-900">
                                    {attire.name}
                                  </h5>
                                  {attire.origin && (
                                    <span className="text-xs text-[#8B1E22] font-semibold block mt-0.5">
                                      📍 {attire.origin}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {attire.image && (
                                <div className="mt-2.5">
                                  <AdaptiveImage
                                    src={attire.image}
                                    alt={attire.name}
                                    title={attire.name}
                                    subtitle={attire.origin || state.name}
                                    description={attire.detailedDescription || attire.description}
                                    category="Craft & Attire"
                                    heightClass="h-48 sm:h-56"
                                    onOpenModal={(item) => openLightbox(item)}
                                  />
                                </div>
                              )}

                              {attire.shortDesc && (
                                <p className="text-xs text-stone-600 italic mt-2">
                                  "{attire.shortDesc}"
                                </p>
                              )}

                              <p className="text-xs text-stone-700 leading-relaxed mt-2">
                                {attire.detailedDescription || attire.description}
                              </p>
                            </div>

                            {attire.highlights && attire.highlights.length > 0 && (
                              <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                                {attire.highlights.map((hl, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-1 rounded-md text-[10px] bg-stone-100 text-[#8B1E22] border border-stone-200 font-semibold"
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

                  {/* Traditional Men & Women Dress Overview */}
                  {state.craftsAndAttire && (
                    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <Shirt className="w-5 h-5 text-[#8B1E22]" />
                        <h4 className="font-serif font-bold text-base text-stone-900">
                          Traditional Dress of {state.name}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                          <span className="font-bold text-stone-900 text-sm block">
                            👨 Men's Traditional Attire
                          </span>
                          {state.craftsAndAttire.traditionalMenAttireImage && (
                            <div className="mt-2">
                              <AdaptiveImage
                                src={state.craftsAndAttire.traditionalMenAttireImage}
                                alt="Men's Traditional Attire"
                                title="Men's Traditional Attire"
                                subtitle={state.name}
                                description={state.craftsAndAttire.traditionalMenAttire}
                                category="Craft & Attire"
                                heightClass="h-44 sm:h-52"
                                onOpenModal={(item) => openLightbox(item)}
                              />
                            </div>
                          )}
                          <p className="text-stone-700 leading-relaxed">
                            {state.craftsAndAttire.traditionalMenAttire}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                          <span className="font-bold text-stone-900 text-sm block">
                            👩 Women's Traditional Attire
                          </span>
                          {state.craftsAndAttire.traditionalWomenAttireImage && (
                            <div className="mt-2">
                              <AdaptiveImage
                                src={state.craftsAndAttire.traditionalWomenAttireImage}
                                alt="Women's Traditional Attire"
                                title="Women's Traditional Attire"
                                subtitle={state.name}
                                description={state.craftsAndAttire.traditionalWomenAttire}
                                category="Craft & Attire"
                                heightClass="h-44 sm:h-52"
                                onOpenModal={(item) => openLightbox(item)}
                              />
                            </div>
                          )}
                          <p className="text-stone-700 leading-relaxed">
                            {state.craftsAndAttire.traditionalWomenAttire}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Traditional Attire legacy if present */}
                  {state.traditionalAttire && (
                    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <Shirt className="w-5 h-5 text-[#8B1E22]" />
                        <h4 className="font-serif font-bold text-lg text-stone-900">
                          Traditional Attire: {state.traditionalAttire.name}
                        </h4>
                      </div>

                      {(state.traditionalAttire.image || state.traditionalAttire.imagePlaceholder) && (
                        <div className="mt-2">
                          <AdaptiveImage
                            src={state.traditionalAttire.image || state.traditionalAttire.imagePlaceholder!}
                            alt={state.traditionalAttire.name}
                            title={state.traditionalAttire.name}
                            subtitle={`Handloom & Attire • ${state.name}`}
                            description={state.traditionalAttire.description}
                            category="Craft & Attire"
                            heightClass="h-56 sm:h-64"
                            onOpenModal={(item) => openLightbox(item)}
                          />
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {state.traditionalAttire.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                          <span className="font-bold text-stone-900 block mb-1">Men's Dress</span>
                          <span className="text-stone-600">{state.traditionalAttire.men}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                          <span className="font-bold text-stone-900 block mb-1">Women's Dress</span>
                          <span className="text-stone-600">{state.traditionalAttire.women}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Textiles & Handlooms Showcase */}
                  {state.craftsAndAttire?.textiles && state.craftsAndAttire.textiles.length > 0 && (
                    <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                      <h4 className="font-serif font-bold text-base text-stone-900">
                        🧵 Renowned Textiles & Weaves
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {state.craftsAndAttire.textiles.map((tex, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg text-xs bg-stone-50 text-stone-800 border border-stone-200 font-medium"
                          >
                            🧵 {tex}
                          </span>
                        ))}
                      </div>

                      {state.craftsAndAttire.textileImages && state.craftsAndAttire.textileImages.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                          {state.craftsAndAttire.textileImages.map((imgUrl, i) => (
                            <div key={i}>
                              <AdaptiveImage
                                src={imgUrl}
                                alt={`${state.name} Textile weave ${i + 1}`}
                                title={`${state.name} Textile Pattern`}
                                subtitle="Traditional Weave"
                                category="Handloom"
                                heightClass="h-32 sm:h-36"
                                onOpenModal={(item) => openLightbox(item)}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Living Handicrafts */}
                  {state.craftsAndAttire?.handicrafts && state.craftsAndAttire.handicrafts.length > 0 && (
                    <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                      <h4 className="font-serif font-bold text-base text-stone-900">
                        🏺 Handicrafts & Artisanship
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {state.craftsAndAttire.handicrafts.map((craft, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 font-medium flex items-center gap-2"
                          >
                            <span className="text-amber-700">✦</span>
                            <span>{craft}</span>
                          </div>
                        ))}
                      </div>

                      {state.craftsAndAttire.handicraftImages && state.craftsAndAttire.handicraftImages.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                          {state.craftsAndAttire.handicraftImages.map((imgUrl, i) => (
                            <div key={i}>
                              <AdaptiveImage
                                src={imgUrl}
                                alt={state.craftsAndAttire.handicrafts[i] || `${state.name} Craft ${i + 1}`}
                                title={state.craftsAndAttire.handicrafts[i] || `${state.name} Artisanship`}
                                subtitle="Handicraft & Art"
                                category="Craft"
                                heightClass="h-28 sm:h-32"
                                onOpenModal={(item) => openLightbox(item)}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* GI Certified Crafts */}
                  {state.craftsAndAttire?.giTaggedCrafts && state.craftsAndAttire.giTaggedCrafts.length > 0 && (
                    <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 space-y-2">
                      <span className="text-xs font-bold text-emerald-900 block">
                        🌿 Geographical Indications (GI Tagged)
                      </span>
                      <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                        {state.craftsAndAttire.giTaggedCrafts.join(' • ')}
                      </p>
                    </div>
                  )}

                  {/* Supplemental Crafts array if present */}
                  {state.crafts && state.crafts.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-base text-stone-900">
                        Craft Heritage
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {state.crafts.map((craft, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <h5 className="font-serif font-bold text-stone-900 text-sm">
                                {craft.name}
                              </h5>
                              {craft.giTag && (
                                <span className="bg-blue-100 text-blue-800 text-[9px] font-bold px-2 py-0.5 rounded border border-blue-200">
                                  GI Tagged
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-600 leading-relaxed">
                              {craft.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ---------------- FESTIVALS TAB ---------------- */}
              {activeTab === 'festivals' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <p className="text-xs text-stone-600">
                    Grand spiritual gatherings, harvest carnivals, and cultural fairs in {state.name}.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {state.festivals.map((fest, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-serif font-bold text-base text-stone-900">
                                {fest.name}
                              </h4>
                              {(fest.timing || fest.month) && (
                                <span className="text-xs font-semibold text-[#8B1E22] block mt-0.5">
                                  🗓️ {fest.timing || fest.month}
                                </span>
                              )}
                            </div>
                            <span className="text-xl">🎉</span>
                          </div>

                          {(fest.image || fest.imageUrl) && (
                            <div className="mt-2">
                              <AdaptiveImage
                                src={(fest.image || fest.imageUrl)!}
                                alt={fest.name}
                                title={fest.name}
                                subtitle={`Festival • ${fest.timing || fest.month || ''}`}
                                description={fest.description || fest.significance}
                                category="Festival"
                                heightClass="h-44 sm:h-52"
                                onOpenModal={(item) => openLightbox(item)}
                              />
                            </div>
                          )}

                          <p className="text-xs text-stone-700 leading-relaxed">
                            {fest.description || fest.significance}
                          </p>
                        </div>

                        {(fest.keyRitual || fest.highlight) && (
                          <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 space-y-1.5 text-xs text-stone-700">
                            {fest.keyRitual && (
                              <div>
                                <span className="font-bold text-stone-900 block">🪔 Sacred Rituals:</span>
                                <span className="text-stone-600">{fest.keyRitual}</span>
                              </div>
                            )}
                            {fest.highlight && (
                              <div>
                                <span className="font-bold text-stone-900 block">✨ Main Highlight:</span>
                                <span className="text-stone-600">{fest.highlight}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ---------------- HISTORY & DYNASTIES TAB ---------------- */}
              {activeTab === 'history' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                    <h4 className="font-serif font-bold text-lg text-stone-900">
                      Chronicles of {state.name}
                    </h4>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      {state.history || state.detailedDescription || state.overview}
                    </p>
                  </div>

                  {/* History Timeline Milestones */}
                  {state.historyTimeline && state.historyTimeline.length > 0 && (
                    <div className="space-y-4">
                      <h5 className="font-serif font-bold text-stone-900 text-base">
                        Chronological Milestones & Dynasties
                      </h5>
                      <div className="relative pl-6 space-y-6 border-l-2 border-[#8B1E22]/30">
                        {state.historyTimeline.map((item, idx) => (
                          <div key={idx} className="relative group space-y-2">
                            <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#8B1E22] group-hover:scale-125 transition-transform" />
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-bold text-[#8B1E22] bg-[#8B1E22]/10 px-2.5 py-0.5 rounded-full border border-[#8B1E22]/20">
                                {item.era}
                              </span>
                            </div>
                            <h4 className="text-base font-bold text-stone-900 font-serif">
                              {item.title}
                            </h4>

                            {(item.image || item.imageUrl) && (
                              <div className="max-w-xl">
                                <AdaptiveImage
                                  src={(item.image || item.imageUrl)!}
                                  alt={item.title}
                                  title={item.title}
                                  subtitle={`Chronicle • ${item.era}`}
                                  description={item.description}
                                  category="History & Dynasties"
                                  heightClass="h-56 sm:h-72"
                                  onOpenModal={(img) => openLightbox(img)}
                                />
                              </div>
                            )}

                            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Historical Eras if present */}
                  {state.historicalEras && state.historicalEras.length > 0 && (
                    <div className="space-y-3">
                      <h5 className="font-serif font-bold text-stone-900 text-sm">
                        Historical Eras
                      </h5>
                      <div className="space-y-3">
                        {state.historicalEras.map((era, i) => (
                          <div
                            key={i}
                            className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm text-[#8B1E22]">{era.era}</span>
                              <span className="text-xs font-mono text-stone-500">{era.period}</span>
                            </div>
                            <p className="text-xs text-stone-700 leading-relaxed">
                              {era.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ---------------- AI CULTURAL SCHOLAR TAB ---------------- */}
              {activeTab === 'ai_guide' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#8B1E22] text-white flex items-center justify-center font-bold">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-stone-900">
                        AI Cultural Scholar &bull; {state.name}
                      </h4>
                      <p className="text-xs text-stone-500">
                        Ask deep questions about folk mythology, recipes, dynastic battles, or music.
                      </p>
                    </div>
                  </div>

                  {/* Chat message bubbles */}
                  <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                    {chatHistory.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-[#8B1E22] text-white font-medium rounded-br-none'
                              : 'bg-stone-100 text-stone-800 rounded-bl-none border border-stone-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {aiLoading && (
                      <div className="flex justify-start">
                        <div className="bg-stone-100 p-3 rounded-2xl text-xs text-stone-500 animate-pulse">
                          Consulting ancient archives for {state.name}...
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Suggested Prompts */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {[
                      `What is the history behind ${state.monuments[0]?.name || 'the royal palaces'}?`,
                      `Explain the authentic secret of ${state.cuisines[0]?.name || 'the traditional dishes'}.`,
                      `Tell me a folk legend of ${state.name}.`,
                    ].map((p, i) => (
                      <button
                        key={i}
                        onClick={() => handleAskAI(p)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-stone-100 hover:bg-[#8B1E22]/10 text-stone-700 hover:text-[#8B1E22] border border-stone-200 transition-all cursor-pointer"
                      >
                        💡 {p}
                      </button>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAskAI();
                    }}
                    className="flex gap-2 pt-2"
                  >
                    <input
                      type="text"
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      placeholder={`Ask anything about ${state.name}...`}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-stone-50"
                    />
                    <button
                      type="submit"
                      disabled={aiLoading || !aiQuery.trim()}
                      className="px-4 py-2.5 rounded-xl bg-[#8B1E22] hover:bg-[#73181b] disabled:opacity-50 text-white text-xs font-bold transition-all shadow cursor-pointer flex items-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
      </main>

      {/* Complete & Clear Fullscreen Image Lightbox Modal with Zoom & Navigation */}
      <ClearImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={
          lightboxImage || {
            src: heroBannerSrc,
            alt: state.name,
            title: state.name,
            subtitle: `${state.region} India • ${state.name}`,
            description: state.overview,
            category: 'Heritage',
          }
        }
        gallery={lightboxGallery.length > 0 ? lightboxGallery : undefined}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => {
          setLightboxIndex(newIdx);
          if (lightboxGallery[newIdx]) {
            setLightboxImage(lightboxGallery[newIdx]);
          }
        }}
      />
    </div>
  );
};
