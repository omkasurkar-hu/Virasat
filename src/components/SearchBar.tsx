import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Landmark, Utensils, Music, Sparkles, Dices, X, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { StateHeritage, Monument } from '../types';

interface SearchBarProps {
  states: StateHeritage[];
  selectedState: StateHeritage | null;
  onSelectState: (state: StateHeritage) => void;
  onSelectMonument: (monument: Monument, state: StateHeritage) => void;
  filterRegion: string | null;
  onFilterRegion: (region: string | null) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  states,
  selectedState,
  onSelectState,
  onSelectMonument,
  filterRegion,
  onFilterRegion,
  className,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll capability for the slide bar
  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleSlideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const handleSlideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter items based on search query
  const query = searchTerm.toLowerCase().trim();

  const matchedStates = query
    ? states.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.capital.toLowerCase().includes(query) ||
          s.tagline.toLowerCase().includes(query)
      )
    : [];

  const matchedMonuments = query
    ? states.flatMap((s) =>
        s.monuments
          .filter(
            (m) =>
              m.name.toLowerCase().includes(query) ||
              m.type.toLowerCase().includes(query) ||
              m.location.toLowerCase().includes(query)
          )
          .map((m) => ({ monument: m, state: s }))
      )
    : [];

  const matchedDances = query
    ? states.flatMap((s) =>
        s.artAndDance
          .filter(
            (a) => a.name.toLowerCase().includes(query) || a.type.toLowerCase().includes(query)
          )
          .map((a) => ({ art: a, state: s }))
      )
    : [];

  const matchedCuisines = query
    ? states.flatMap((s) =>
        s.cuisines
          .filter(
            (c) => c.name.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)
          )
          .map((c) => ({ cuisine: c, state: s }))
      )
    : [];

  const matchedFestivals = query
    ? states.flatMap((s) =>
        s.festivals
          .filter((f) => f.name.toLowerCase().includes(query))
          .map((f) => ({ festival: f, state: s }))
      )
    : [];

  const hasResults =
    matchedStates.length > 0 ||
    matchedMonuments.length > 0 ||
    matchedDances.length > 0 ||
    matchedCuisines.length > 0 ||
    matchedFestivals.length > 0;

  // Random Tour
  const handleRandomTour = () => {
    const randomState = states[Math.floor(Math.random() * states.length)];
    onSelectState(randomState);
  };

  const regions = [
    { label: 'All India', value: null, icon: '🇮🇳', count: states.length },
    { label: 'North', value: 'North', icon: '🏔️', count: states.filter((s) => s.region === 'North').length },
    { label: 'South', value: 'South', icon: '🥥', count: states.filter((s) => s.region === 'South').length },
    { label: 'West', value: 'West', icon: '🏜️', count: states.filter((s) => s.region === 'West').length },
    { label: 'Central', value: 'Central', icon: '🏛️', count: states.filter((s) => s.region === 'Central').length },
    { label: 'East', value: 'East', icon: '🛕', count: states.filter((s) => s.region === 'East').length },
    { label: 'North-East', value: 'North-East', icon: '🌿', count: states.filter((s) => s.region === 'North-East').length },
  ];

  // Quick states for currently active region
  const filteredStatesForSlider = filterRegion
    ? states.filter((s) => s.region === filterRegion)
    : [];

  return (
    <div className={`w-full pointer-events-auto ${className || ''}`}>
      {/* Search Input Box */}
      <div
        ref={dropdownRef}
        className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/70 overflow-visible transition-all"
      >
        <div className="flex items-center px-4 py-3 gap-3">
          <Search className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <input
            id="input-global-search"
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search state, monument, dance, cuisine, or festival..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />

          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                setIsOpen(false);
              }}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            id="btn-random-tour"
            onClick={handleRandomTour}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold whitespace-nowrap transition-all"
            title="Explore a random state"
          >
            <Dices className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Surprise Me</span>
          </button>
        </div>

        {/* Autocomplete Results Dropdown */}
        {isOpen && query && (
          <div className="max-h-96 overflow-y-auto border-t border-slate-800 p-2 space-y-3 bg-slate-900/95 backdrop-blur-xl rounded-b-2xl scrollbar-thin scrollbar-thumb-slate-700">
            {!hasResults ? (
              <div className="py-6 text-center text-xs text-slate-400">
                No cultural heritage items found matching "{searchTerm}". Try "Taj Mahal", "Garba",
                "Kerala", "Biryani", or "Bihu".
              </div>
            ) : (
              <>
                {/* States */}
                {matchedStates.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider px-2 block mb-1">
                      States ({matchedStates.length})
                    </span>
                    {matchedStates.map((st) => (
                      <button
                        key={st.id}
                        onClick={() => {
                          onSelectState(st);
                          setIsOpen(false);
                          setSearchTerm('');
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-white block">{st.name}</span>
                            <span className="text-[10px] text-slate-400">
                              Capital: {st.capital} &bull; {st.region} India
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] text-amber-400 font-medium">Explore &rarr;</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Monuments */}
                {matchedMonuments.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider px-2 block mb-1">
                      Monuments & Heritage ({matchedMonuments.length})
                    </span>
                    {matchedMonuments.map(({ monument, state }, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          onSelectMonument(monument, state);
                          setIsOpen(false);
                          setSearchTerm('');
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <Landmark className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-white block">
                              {monument.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {monument.location}, {state.name} ({monument.century})
                            </span>
                          </div>
                        </div>
                        {monument.isUnesco && (
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">
                            UNESCO
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Dances */}
                {matchedDances.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider px-2 block mb-1">
                      Dance & Classical Arts ({matchedDances.length})
                    </span>
                    {matchedDances.map(({ art, state }, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          onSelectState(state);
                          setIsOpen(false);
                          setSearchTerm('');
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <Music className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-white block">{art.name}</span>
                            <span className="text-[10px] text-slate-400">
                              {art.type} &bull; {state.name}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] text-purple-300">In {state.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Cuisines */}
                {matchedCuisines.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider px-2 block mb-1">
                      Cuisines & Delicacies ({matchedCuisines.length})
                    </span>
                    {matchedCuisines.map(({ cuisine, state }, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          onSelectState(state);
                          setIsOpen(false);
                          setSearchTerm('');
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <Utensils className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-white block">
                              {cuisine.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {cuisine.category} &bull; {state.name}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] text-orange-300">In {state.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Festivals */}
                {matchedFestivals.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider px-2 block mb-1">
                      Festivals ({matchedFestivals.length})
                    </span>
                    {matchedFestivals.map(({ festival, state }, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          onSelectState(state);
                          setIsOpen(false);
                          setSearchTerm('');
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800 text-left transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <Sparkles className="w-4 h-4 text-pink-400 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-white block">
                              {festival.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {festival.timing} &bull; {state.name}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] text-pink-300">In {state.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Interactive Region Slide Bar with Left & Right Slide Controls */}
      <div className="relative mt-2.5 flex items-center group/slider">
        {/* Left Slide Button */}
        <button
          type="button"
          onClick={handleSlideLeft}
          className={`absolute left-0 z-10 p-1.5 rounded-full bg-slate-900/90 text-amber-300 hover:text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700/80 shadow-xl transition-all duration-200 transform -translate-x-2 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          title="Slide Left"
          aria-label="Slide Left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Bar Track */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex items-center gap-2 overflow-x-auto py-1 px-1 scroll-smooth select-none scrollbar-none w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {regions.map((reg) => {
            const isSelected = filterRegion === reg.value;
            return (
              <button
                key={reg.label}
                id={`filter-region-${reg.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  onFilterRegion(reg.value);
                }}
                className={`group/chip flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg backdrop-blur-md border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-300 font-bold shadow-amber-500/20 scale-105'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-amber-200 border-slate-700 hover:border-amber-500/50'
                }`}
              >
                <span className="text-sm leading-none">{reg.icon}</span>
                <span>{reg.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected
                      ? 'bg-slate-950/30 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 group-hover/chip:text-amber-300'
                  }`}
                >
                  {reg.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Slide Button */}
        <button
          type="button"
          onClick={handleSlideRight}
          className={`absolute right-0 z-10 p-1.5 rounded-full bg-slate-900/90 text-amber-300 hover:text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700/80 shadow-xl transition-all duration-200 transform translate-x-2 ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          title="Slide Right"
          aria-label="Slide Right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Sub-Slide Bar: State Quick-Chips when a region is selected */}
      {filteredStatesForSlider.length > 0 && (
        <div className="flex items-center gap-1.5 mt-2 overflow-x-auto py-1 px-1 scroll-smooth select-none scrollbar-none animate-fadeIn">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider whitespace-nowrap mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" /> {filterRegion} States:
          </span>
          {filteredStatesForSlider.map((st) => (
            <button
              key={st.id}
              onClick={() => onSelectState(st)}
              className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-800 hover:border-amber-300 shadow-md backdrop-blur-md whitespace-nowrap transition-all cursor-pointer flex-shrink-0"
            >
              {st.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

