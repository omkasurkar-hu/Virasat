import React, { useState } from 'react';
import { FESTIVALS_CALENDAR_DATA } from '../data/festivalsCalendarData';
import { DetailedFestival } from '../types';
import { FestivalDetailModal } from './FestivalDetailModal';
import { 
  Calendar as CalendarIcon, 
  Sparkles, 
  MapPin, 
  Search, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Grid,
  CalendarDays,
  Info,
  Layers,
  Utensils,
  X
} from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const FestivalsCalendarSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [viewMode, setViewMode] = useState<'year' | 'month'>('year');
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [popupFestival, setPopupFestival] = useState<DetailedFestival | null>(null);
  const [multiFestivalsOnDate, setMultiFestivalsOnDate] = useState<{
    dateStr: string;
    festivals: DetailedFestival[];
  } | null>(null);

  const categories = ['All', 'Harvest', 'Spiritual / Devotional', 'Seasonal', 'National / Cultural'];

  // Helper: Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper: Get first day of week (0=Sun, 6=Sat)
  const getFirstDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Helper: Filtered list of all festivals
  const allFilteredFestivals = FESTIVALS_CALENDAR_DATA.filter((fest) => {
    const matchCategory = selectedCategory === 'All' || fest.category === selectedCategory;
    const matchSearch = searchQuery
      ? fest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fest.primaryStates.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        fest.culturalSignificance.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fest.traditionalFood.some((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return matchCategory && matchSearch;
  });

  // Helper: Find festivals for a specific month and day
  const getFestivalsForDate = (monthIndex: number, day: number): DetailedFestival[] => {
    return FESTIVALS_CALENDAR_DATA.filter((fest) => {
      const matchMonth = fest.monthIndex === monthIndex;
      const matchDay = fest.day === day || (fest.endDay && day >= fest.day && day <= fest.endDay);
      const matchCategory = selectedCategory === 'All' || fest.category === selectedCategory;
      const matchSearch = searchQuery
        ? fest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          fest.primaryStates.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
          fest.culturalSignificance.toLowerCase().includes(searchQuery.toLowerCase()) ||
          fest.traditionalFood.some((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      return matchMonth && matchDay && matchCategory && matchSearch;
    });
  };

  // Helper: Find all festivals in a month
  const getFestivalsInMonth = (monthIndex: number): DetailedFestival[] => {
    return FESTIVALS_CALENDAR_DATA.filter((fest) => {
      const matchMonth = fest.monthIndex === monthIndex;
      const matchCategory = selectedCategory === 'All' || fest.category === selectedCategory;
      const matchSearch = searchQuery
        ? fest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          fest.primaryStates.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
          fest.culturalSignificance.toLowerCase().includes(searchQuery.toLowerCase()) ||
          fest.traditionalFood.some((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      return matchMonth && matchCategory && matchSearch;
    });
  };

  // Handle clicking on a calendar date
  const handleDateClick = (monthIdx: number, dayNum: number) => {
    const fests = getFestivalsForDate(monthIdx, dayNum);
    if (fests.length === 0) return;

    if (fests.length === 1) {
      setPopupFestival(fests[0]);
    } else {
      setMultiFestivalsOnDate({
        dateStr: `${MONTH_NAMES[monthIdx]} ${dayNum}`,
        festivals: fests
      });
    }
  };

  // Current index for next/prev navigation in popup
  const currentFestivalIndex = popupFestival
    ? allFilteredFestivals.findIndex((f) => f.id === popupFestival.id)
    : -1;

  const handlePrevFestival = () => {
    if (currentFestivalIndex > 0) {
      setPopupFestival(allFilteredFestivals[currentFestivalIndex - 1]);
    } else if (allFilteredFestivals.length > 0) {
      setPopupFestival(allFilteredFestivals[allFilteredFestivals.length - 1]);
    }
  };

  const handleNextFestival = () => {
    if (currentFestivalIndex < allFilteredFestivals.length - 1) {
      setPopupFestival(allFilteredFestivals[currentFestivalIndex + 1]);
    } else if (allFilteredFestivals.length > 0) {
      setPopupFestival(allFilteredFestivals[0]);
    }
  };

  return (
    <div id="festivals-calendar-section" className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-24 font-sans">
      {/* Hero Header */}
      <div className="bg-stone-900 text-stone-100 py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Living Year Calendar</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Festivals of India Calendar
          </h1>

          <p className="max-w-2xl mx-auto text-stone-300 text-xs sm:text-sm leading-relaxed">
            Every festival is presented individually with its own dedicated date, vibrant photograph, history, attire, sacred rituals, and traditional delicacies. Click any highlighted date to explore its individual celebration.
          </p>
        </div>
      </div>

      {/* Control Bar: Year Switcher, View Modes & Filters */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Year Navigator & View Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            {/* Year Selector */}
            <div className="flex items-center bg-white rounded-xl border border-stone-200 p-1 shadow-2xs">
              <button
                onClick={() => setSelectedYear((y) => y - 1)}
                className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                title="Previous year"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-serif font-black text-sm px-3 text-[#8B1E22]">
                {selectedYear}
              </span>
              <button
                onClick={() => setSelectedYear((y) => y + 1)}
                className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                title="Next year"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-stone-200/80 p-1 rounded-xl">
              <button
                id="btn-view-year"
                onClick={() => setViewMode('year')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'year'
                    ? 'bg-white text-[#8B1E22] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>12-Month Year View</span>
              </button>
              <button
                id="btn-view-month"
                onClick={() => setViewMode('month')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'month'
                    ? 'bg-white text-[#8B1E22] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Monthly Deep-Dive</span>
              </button>
            </div>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search festival, state, dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-stone-300 text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-white"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#8B1E22] text-white'
                      : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Highlight Guide Legend */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#8B1E22] to-amber-500 shadow-sm" />
            <span className="font-semibold text-stone-800">Highlighted Date:</span>
            <span>Click any highlighted date to open its individual festival popup with photo, traditions, and recipes.</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold text-stone-500">
            <span className="text-[#8B1E22] font-bold">
              {allFilteredFestivals.length} Individual Festivals Listed
            </span>
          </div>
        </div>

        {/* VIEW MODE 1: 12-Month Year Calendar Grid */}
        {viewMode === 'year' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MONTH_NAMES.map((monthName, mIdx) => {
              const daysInMonth = getDaysInMonth(selectedYear, mIdx);
              const firstDayOfWeek = getFirstDayOfWeek(selectedYear, mIdx);
              const festivalsInMonth = getFestivalsInMonth(mIdx);

              return (
                <div
                  key={monthName}
                  className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col hover:border-amber-300 transition-all"
                >
                  {/* Month Card Header */}
                  <div className="p-3.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-base text-stone-900">
                        {monthName}
                      </h3>
                      <span className="text-[10px] text-stone-500 font-medium">
                        {festivalsInMonth.length} Individual {festivalsInMonth.length === 1 ? 'Festival' : 'Festivals'}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveMonthIndex(mIdx);
                        setViewMode('month');
                      }}
                      className="text-[11px] font-bold text-[#8B1E22] hover:text-[#721519] px-2 py-1 rounded-md hover:bg-amber-50 cursor-pointer transition-colors"
                      title={`Open large calendar for ${monthName}`}
                    >
                      Expand ➔
                    </button>
                  </div>

                  {/* Days of Week Header */}
                  <div className="grid grid-cols-7 gap-1 px-3 pt-3 text-center text-[10px] font-bold text-stone-400 uppercase">
                    {WEEKDAYS.map((wd) => (
                      <div key={wd}>{wd}</div>
                    ))}
                  </div>

                  {/* Month Days Grid */}
                  <div className="grid grid-cols-7 gap-1 p-3 flex-1">
                    {/* Empty cells before month starts */}
                    {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-8" />
                    ))}

                    {/* Actual Days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dayNumber = i + 1;
                      const dayFestivals = getFestivalsForDate(mIdx, dayNumber);
                      const isHighlighted = dayFestivals.length > 0;
                      const festivalCount = dayFestivals.length;

                      return (
                        <div key={`day-${dayNumber}`} className="relative group">
                          <button
                            type="button"
                            disabled={!isHighlighted}
                            onClick={() => handleDateClick(mIdx, dayNumber)}
                            className={`w-full h-8 rounded-lg flex flex-col items-center justify-center text-xs font-semibold transition-all relative ${
                              isHighlighted
                                ? 'bg-gradient-to-tr from-[#8B1E22] to-amber-600 text-white font-bold shadow-md hover:scale-110 hover:z-20 cursor-pointer ring-2 ring-amber-400'
                                : 'text-stone-700 hover:bg-stone-100 disabled:cursor-default'
                            }`}
                            title={
                              isHighlighted
                                ? `${dayNumber} ${monthName}: ${dayFestivals.map((f) => f.name).join(', ')} (Click to view)`
                                : `${dayNumber} ${monthName}`
                            }
                          >
                            <span>{dayNumber}</span>
                            {isHighlighted && (
                              <div className="flex gap-0.5 mt-0.5">
                                {Array.from({ length: Math.min(festivalCount, 3) }).map((_, dotIdx) => (
                                  <span key={dotIdx} className="w-1 h-1 rounded-full bg-amber-200" />
                                ))}
                              </div>
                            )}
                          </button>

                          {/* Hover Tooltip for Highlighted Day */}
                          {isHighlighted && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-30 w-48 p-2.5 bg-stone-900 text-white rounded-xl shadow-xl border border-stone-700 text-[10px] pointer-events-none text-center">
                              {dayFestivals.map((df, dfi) => (
                                <span key={dfi} className="font-bold text-amber-300 block leading-tight mb-0.5">
                                  • {df.name}
                                </span>
                              ))}
                              <span className="text-stone-400 block mt-1 text-[9px]">
                                Click to view individual info & photo
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Individual festivals list for this month */}
                  {festivalsInMonth.length > 0 && (
                    <div className="p-3 bg-[#FAF7F2]/90 border-t border-stone-100 space-y-1.5">
                      {festivalsInMonth.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setPopupFestival(f)}
                          className="w-full text-left p-1.5 rounded-lg hover:bg-white text-xs text-stone-800 flex items-center justify-between gap-1 transition-colors group cursor-pointer border border-transparent hover:border-amber-200"
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="px-1.5 py-0.5 rounded bg-amber-100 text-[#8B1E22] text-[10px] font-black flex-shrink-0">
                              {f.day}{f.endDay ? `–${f.endDay}` : ''}
                            </span>
                            <span className="truncate font-medium text-stone-800 group-hover:text-[#8B1E22]">
                              {f.name}
                            </span>
                          </div>
                          <span className="text-[10px] text-amber-700 font-bold group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                            Info ➔
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: Monthly Deep-Dive Large Calendar Grid */}
        {viewMode === 'month' && (
          <div className="space-y-6">
            {/* Month Header Navigation */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 flex items-center justify-between">
              <button
                onClick={() => setActiveMonthIndex((m) => (m === 0 ? 11 : m - 1))}
                className="flex items-center gap-1 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous Month</span>
              </button>

              <div className="text-center">
                <h2 className="font-serif font-black text-2xl sm:text-3xl text-stone-900">
                  {MONTH_NAMES[activeMonthIndex]} {selectedYear}
                </h2>
                <span className="text-xs text-stone-500 font-medium">
                  {getFestivalsInMonth(activeMonthIndex).length} Individual Celebrations Listed
                </span>
              </div>

              <button
                onClick={() => setActiveMonthIndex((m) => (m === 11 ? 0 : m + 1))}
                className="flex items-center gap-1 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer"
              >
                <span className="hidden sm:inline">Next Month</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Large Calendar Grid */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden">
              {/* Weekdays Row */}
              <div className="grid grid-cols-7 border-b border-stone-200 bg-stone-50 text-center py-3 text-xs font-bold text-stone-500 uppercase tracking-wider">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((wd, i) => (
                  <div key={wd}>
                    <span className="hidden sm:inline">{wd}</span>
                    <span className="sm:hidden">{WEEKDAYS[i]}</span>
                  </div>
                ))}
              </div>

              {/* Large Days Grid */}
              <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y divide-stone-100">
                {/* Empty start cells */}
                {Array.from({ length: getFirstDayOfWeek(selectedYear, activeMonthIndex) }).map((_, i) => (
                  <div key={`month-empty-${i}`} className="min-h-[110px] sm:min-h-[130px] bg-stone-50/50 p-2" />
                ))}

                {/* Days of active month */}
                {Array.from({ length: getDaysInMonth(selectedYear, activeMonthIndex) }).map((_, i) => {
                  const dayNumber = i + 1;
                  const dayFestivals = getFestivalsForDate(activeMonthIndex, dayNumber);
                  const isHighlighted = dayFestivals.length > 0;

                  return (
                    <div
                      key={`month-day-${dayNumber}`}
                      onClick={() => handleDateClick(activeMonthIndex, dayNumber)}
                      className={`min-h-[110px] sm:min-h-[130px] p-2 flex flex-col justify-between transition-all ${
                        isHighlighted
                          ? 'bg-amber-50/60 hover:bg-amber-100/70 cursor-pointer ring-1 ring-inset ring-amber-300'
                          : 'hover:bg-stone-50'
                      }`}
                    >
                      {/* Day Number Header */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                            isHighlighted
                              ? 'bg-[#8B1E22] text-white shadow-sm ring-2 ring-amber-400'
                              : 'text-stone-700'
                          }`}
                        >
                          {dayNumber}
                        </span>

                        {isHighlighted && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-200 text-[#8B1E22] text-[9px] font-bold uppercase tracking-wider">
                            {dayFestivals.length} {dayFestivals.length === 1 ? 'Fest' : 'Fests'}
                          </span>
                        )}
                      </div>

                      {/* Festival Badges Inside Cell */}
                      {dayFestivals.length > 0 ? (
                        <div className="space-y-1 mt-1 flex-1">
                          {dayFestivals.map((fest) => (
                            <div
                              key={fest.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setPopupFestival(fest);
                              }}
                              className="p-1.5 rounded-xl bg-white border border-amber-300 shadow-2xs group hover:border-[#8B1E22] hover:bg-amber-50/50 transition-colors cursor-pointer"
                              title={`Click for ${fest.name} info`}
                            >
                              <div className="flex items-center gap-1.5">
                                <img
                                  src={fest.image}
                                  alt={fest.name}
                                  className="w-6 h-6 rounded-md object-cover flex-shrink-0"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="min-w-0 flex-1">
                                  <span className="text-[11px] font-bold text-stone-900 block truncate group-hover:text-[#8B1E22]">
                                    {fest.name}
                                  </span>
                                  <span className="text-[9px] text-stone-500 block truncate">
                                    {fest.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* List of Festivals in this month with individual preview cards */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif font-bold text-xl text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8B1E22]" />
                <span>Individual Celebrations in {MONTH_NAMES[activeMonthIndex]}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getFestivalsInMonth(activeMonthIndex).map((fest) => (
                  <div
                    key={fest.id}
                    onClick={() => setPopupFestival(fest)}
                    className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3 bg-stone-100">
                        <img
                          src={fest.image}
                          alt={fest.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-[#8B1E22]/90 backdrop-blur-md text-amber-200 text-[10px] font-bold uppercase tracking-wider">
                          {fest.category}
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                          {fest.monthName} {fest.day}{fest.endDay ? `–${fest.endDay}` : ''}
                        </div>
                      </div>

                      <h4 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#8B1E22] transition-colors">
                        {fest.name}
                      </h4>
                      {fest.nativeName && (
                        <span className="text-xs text-stone-500 font-serif block mb-1">
                          {fest.nativeName}
                        </span>
                      )}

                      <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                        {fest.tagline}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500 text-[11px] truncate max-w-[70%]">
                        📍 {fest.primaryStates[0]}
                      </span>
                      <span className="text-[#8B1E22] font-bold group-hover:translate-x-0.5 transition-transform">
                        Explore Info ➔
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Multiple Festivals on Single Date Selection Modal */}
      {multiFestivalsOnDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
          <div className="bg-[#FAF7F2] border-2 border-amber-500/40 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  Festivals on {multiFestivalsOnDate.dateStr}
                </h3>
                <span className="text-xs text-stone-500">
                  Select an individual festival to view its photo and full details
                </span>
              </div>
              <button
                onClick={() => setMultiFestivalsOnDate(null)}
                className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              {multiFestivalsOnDate.festivals.map((fest) => (
                <div
                  key={fest.id}
                  onClick={() => {
                    setMultiFestivalsOnDate(null);
                    setPopupFestival(fest);
                  }}
                  className="p-3.5 bg-white rounded-2xl border border-stone-200 hover:border-[#8B1E22] hover:bg-amber-50/50 shadow-2xs cursor-pointer flex items-center gap-3.5 transition-all group"
                >
                  <img
                    src={fest.image}
                    alt={fest.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#8B1E22] uppercase tracking-wider">
                      <span>{fest.category}</span>
                      <span>•</span>
                      <span>{fest.primaryStates[0]}</span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-[#8B1E22] truncate">
                      {fest.name}
                    </h4>
                    <p className="text-xs text-stone-600 truncate mt-0.5">
                      {fest.tagline}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-[#8B1E22] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Popup Window Modal with Individual Photo and Rich Info */}
      {popupFestival && (
        <FestivalDetailModal
          festival={popupFestival}
          onClose={() => setPopupFestival(null)}
          onPrev={handlePrevFestival}
          onNext={handleNextFestival}
          currentIndex={currentFestivalIndex}
          totalCount={allFilteredFestivals.length}
        />
      )}
    </div>
  );
};
