import React, { useState } from 'react';
import { FESTIVALS_CALENDAR_DATA } from '../data/festivalsCalendarData';
import { DetailedFestival } from '../types';
import { 
  Calendar as CalendarIcon, 
  Sparkles, 
  MapPin, 
  Utensils, 
  Shirt, 
  Music, 
  Palette, 
  Search, 
  Filter,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const FestivalsCalendarSection: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFestival, setSelectedFestival] = useState<DetailedFestival>(FESTIVALS_CALENDAR_DATA[0]);

  const categories = ['All', 'Harvest', 'Spiritual / Devotional', 'Seasonal', 'National / Cultural'];

  const filteredFestivals = FESTIVALS_CALENDAR_DATA.filter((fest) => {
    const matchesMonth = searchQuery ? true : fest.monthIndex === selectedMonth;
    const matchesSearch = searchQuery
      ? fest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fest.primaryStates.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        fest.culturalSignificance.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesCategory = selectedCategory === 'All' || fest.category === selectedCategory;
    return matchesMonth && matchesSearch && matchesCategory;
  });

  return (
    <div id="festivals-calendar-section" className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-24">
      {/* Header */}
      <div className="bg-stone-900 text-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Living Traditions Across 12 Months</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Festivals of India Calendar
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base leading-relaxed">
            Discover why and how India celebrates throughout the solar and lunar calendar — from harvest thanksgiving and cosmic nights to grand river chariot processions and UNESCO-recognized community festivities.
          </p>
        </div>
      </div>

      {/* Month Selector Carousel */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-300/80 shadow-xs py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
          {MONTH_NAMES.map((monthName, idx) => {
            const isSelected = selectedMonth === idx && !searchQuery;
            return (
              <button
                key={monthName}
                id={`btn-month-${idx}`}
                onClick={() => {
                  setSelectedMonth(idx);
                  setSearchQuery('');
                  const fest = FESTIVALS_CALENDAR_DATA.find((f) => f.monthIndex === idx);
                  if (fest) setSelectedFestival(fest);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#8B1E22] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {monthName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search festival, food, or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-stone-300 text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-900 text-amber-100 font-bold'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Display selected festival or matching list */}
        {filteredFestivals.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-500 text-sm">
            No festivals match your search criteria. Try a different search term or select another month.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left list if search mode */}
            {searchQuery && (
              <div className="lg:col-span-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Matching Festivals ({filteredFestivals.length})
                </h3>
                {filteredFestivals.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFestival(f)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedFestival.id === f.id
                        ? 'bg-white border-[#8B1E22] ring-2 ring-[#8B1E22]/20 shadow-md'
                        : 'bg-white/80 border-stone-200 hover:bg-white'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E22] block">
                      {f.monthName} • {f.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-stone-900 mt-0.5">
                      {f.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                      {f.primaryStates.join(', ')}
                    </p>
                  </button>
                ))}
              </div>
            )}

            {/* Festival Detail Card */}
            <div className={`${searchQuery ? 'lg:col-span-8' : 'lg:col-span-12'} bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6`}>
              <div className="relative rounded-xl overflow-hidden aspect-16/9 border border-stone-200 shadow-xs">
                <img
                  src={selectedFestival.image}
                  alt={selectedFestival.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider">
                    {selectedFestival.monthName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-900/85 backdrop-blur-md text-white text-xs font-semibold">
                    {selectedFestival.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white">
                  <span className="text-[11px] text-amber-300 font-bold block">
                    🗓️ Calendar Timing: {selectedFestival.lunarOrGregorianDate}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E22]">
                  📍 Primary Regions: {selectedFestival.primaryStates.join(', ')}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                  {selectedFestival.name}
                </h2>
                <p className="text-sm font-medium text-amber-900 mt-1">
                  "{selectedFestival.tagline}"
                </p>
              </div>

              {/* Significance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#8B1E22]" />
                    <span>Origins & Sacred Mythology</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {selectedFestival.historyAndOrigin}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4 text-amber-700" />
                    <span>Cultural Significance & Values</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {selectedFestival.culturalSignificance}
                  </p>
                </div>
              </div>

              {/* How it is celebrated */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  How India Celebrates: Food, Clothing & Rituals
                </h3>

                {/* Foods */}
                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-[#8B1E22]" />
                    <span>Traditional Festive Cuisines & Sweets</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedFestival.traditionalFood.map((food, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-lg border border-stone-200 text-xs">
                        <strong className="text-stone-900 block font-bold mb-1">{food.name}</strong>
                        <span className="text-stone-600 leading-relaxed">{food.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid for Attire, Music & Decorations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <h5 className="font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                      <Shirt className="w-3.5 h-3.5 text-[#8B1E22]" />
                      <span>Traditional Attire</span>
                    </h5>
                    <p className="text-stone-600 leading-relaxed">
                      {selectedFestival.traditionalClothing}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <h5 className="font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                      <Music className="w-3.5 h-3.5 text-[#8B1E22]" />
                      <span>Music & Prayers</span>
                    </h5>
                    <p className="text-stone-600 leading-relaxed">
                      {selectedFestival.musicAndPrayers}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <h5 className="font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#8B1E22]" />
                      <span>Decorations & Art</span>
                    </h5>
                    <p className="text-stone-600 leading-relaxed">
                      {selectedFestival.decorationsAndArt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
