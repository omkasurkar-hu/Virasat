import React, { useState } from 'react';
import { motion } from 'motion/react';
import { StateHeritage, Monument } from '../types';
import { Compass, Sparkles, Landmark, ArrowRight, ShieldCheck, BookOpen, Layers } from 'lucide-react';

interface HomePageProps {
  states: StateHeritage[];
  onExploreVirasat: () => void;
  onSelectState: (state: StateHeritage) => void;
  onSelectMonument: (monument: Monument, state: StateHeritage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  states,
  onExploreVirasat,
  onSelectState,
  onSelectMonument,
}) => {
  const [activeNav, setActiveNav] = useState<'home' | 'map' | 'gallery' | 'about'>('home');

  const scrollToSection = (id: string, navKey: 'home' | 'map' | 'gallery' | 'about') => {
    setActiveNav(navKey);
    if (navKey === 'map') {
      onExploreVirasat();
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Curated showcase items
  const featuredMonuments = states
    .flatMap((st) => st.monuments.map((m) => ({ monument: m, state: st })))
    .filter((item) => item.monument.isUnesco || ['Hawa Mahal', 'Konark Sun Temple', 'Meenakshi Amman Temple', 'Taj Mahal', 'Ajanta & Ellora Caves'].includes(item.monument.name))
    .slice(0, 6);

  return (
    <div id="virasat-homepage" className="min-h-screen bg-[#FAF7F2] text-slate-900 flex flex-col font-sans selection:bg-[#8B1E22] selection:text-white">
      {/* Top Header Navigation matching exact layout */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/60 px-6 sm:px-12 md:px-20 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('hero-section', 'home')}
            className="cursor-pointer group flex items-center gap-1"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#8B1E22] transition-opacity group-hover:opacity-90">
              Virasat
            </span>
          </div>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero-section', 'home')}
              className={`text-xs uppercase tracking-widest font-semibold pb-1 transition-all ${
                activeNav === 'home'
                  ? 'text-[#8B1E22] border-b-2 border-[#8B1E22]'
                  : 'text-slate-600 hover:text-[#8B1E22]'
              }`}
            >
              HOME
            </button>
            <button
              onClick={onExploreVirasat}
              className={`text-xs uppercase tracking-widest font-semibold pb-1 transition-all ${
                activeNav === 'map'
                  ? 'text-[#8B1E22] border-b-2 border-[#8B1E22]'
                  : 'text-slate-600 hover:text-[#8B1E22]'
              }`}
            >
              MAP
            </button>
            <button
              onClick={() => scrollToSection('gallery-section', 'gallery')}
              className={`text-xs uppercase tracking-widest font-semibold pb-1 transition-all ${
                activeNav === 'gallery'
                  ? 'text-[#8B1E22] border-b-2 border-[#8B1E22]'
                  : 'text-slate-600 hover:text-[#8B1E22]'
              }`}
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection('about-section', 'about')}
              className={`text-xs uppercase tracking-widest font-semibold pb-1 transition-all ${
                activeNav === 'about'
                  ? 'text-[#8B1E22] border-b-2 border-[#8B1E22]'
                  : 'text-slate-600 hover:text-[#8B1E22]'
              }`}
            >
              ABOUT
            </button>
          </nav>

          {/* Right Action */}
          <div>
            <button
              onClick={onExploreVirasat}
              className="text-xs uppercase tracking-widest font-bold text-[#8B1E22] hover:opacity-75 transition-all py-1 px-2"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1">
        <section
          id="hero-section"
          className="min-h-[72vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Giant VIRASAT Typography */}
            <h1 className="font-serif font-black tracking-[0.08em] text-[#8B1E22] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none mb-10 select-none drop-shadow-sm">
              VIRASAT
            </h1>

            {/* Outlined Explore Button */}
            <button
              id="btn-hero-explore-virasat"
              onClick={onExploreVirasat}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-lg border border-[#8B1E22] text-[#8B1E22] hover:bg-[#8B1E22] hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>EXPLORE VIRASAT</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-sm">
                &rarr;
              </span>
            </button>
          </motion.div>
        </section>

        {/* Sub-Hero Section: Discover Digital Antiquity */}
        <section className="py-20 md:py-28 px-6 border-t border-stone-200/50 bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              Discover Digital Antiquity
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Experience heritage like never before. A seamless blend of history and interactive discovery.
            </p>
          </div>

          {/* Three Key Pillar Badges */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#8B1E22]/10 text-[#8B1E22] flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Interactive Geographic Atlas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless spatial navigation across Indian states with high-definition topographic and satellite cartography.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#8B1E22]/10 text-[#8B1E22] flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">UNESCO & Architectural Marvels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed chronologies, architectural styles, and high-resolution galleries of ancient forts, temples, and palaces.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#8B1E22]/10 text-[#8B1E22] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Living Folk Traditions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Classical dances, GI-tagged handlooms, culinary delicacies, seasonal festivals, and AI Cultural Scholar insights.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery / Curated Showcase Section */}
        <section id="gallery-section" className="py-20 px-6 sm:px-12 md:px-20 bg-stone-100/50 border-t border-stone-200/70">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8B1E22] font-bold block mb-1">
                  Living Archive
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                  Featured Antiquities & Monuments
                </h2>
              </div>
              <button
                onClick={onExploreVirasat}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E22] uppercase tracking-wider hover:underline"
              >
                <span>View Full Interactive Map</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMonuments.map(({ monument, state }, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onSelectMonument(monument, state);
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#8B1E22]/40 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={monument.image}
                      alt={monument.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    {monument.isUnesco && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-wider uppercase shadow">
                        UNESCO Site
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-amber-200 text-xs font-serif">
                      {monument.century}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#8B1E22] tracking-wider uppercase block">
                        {state.name} &bull; {monument.type}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#8B1E22] transition-colors mt-1">
                        {monument.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {monument.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8B1E22]">
                      <span>Explore on Map</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore by State Hubs */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6 text-center">
              Explore Heritage by State
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {states.map((st) => (
                <button
                  key={st.id}
                  onClick={() => onSelectState(st)}
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#8B1E22] text-slate-800 hover:text-white border border-stone-200 shadow-sm text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>🏛️</span>
                  <span>{st.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about-section" className="py-20 px-6 sm:px-12 md:px-20 border-t border-stone-200/80 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#8B1E22] font-bold">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Preserving the Liquid Flow of History
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Virasat is a digital antiquity and cultural preservation initiative dedicated to bridging ancient civilizational wisdom with modern spatial interactivity. From Himalayan monasteries to Dravidian temple towers, every corner of India tells a timeless story.
            </p>
            <div className="pt-4">
              <button
                onClick={onExploreVirasat}
                className="px-8 py-3.5 rounded-lg bg-[#8B1E22] hover:bg-[#73181b] text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
              >
                Launch Interactive Experience
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer matching exact screenshot layout */}
      <footer className="bg-[#EBE6DF] text-slate-800 border-t border-stone-300/80 px-8 sm:px-16 md:px-24 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Column */}
          <div className="space-y-1">
            <span className="font-serif text-2xl font-bold text-[#8B1E22] tracking-wide block">
              Virasat
            </span>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              &copy; 2024 Virasat. Preserving the Liquid Flow of History.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-700 font-normal">
            <button
              onClick={() => alert('Virasat is committed to safeguarding cultural artifacts and user privacy.')}
              className="hover:text-[#8B1E22] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('Terms of Service: Free educational and cultural exploration platform.')}
              className="hover:text-[#8B1E22] transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={onExploreVirasat}
              className="hover:text-[#8B1E22] transition-colors"
            >
              Archive Access
            </button>
            <button
              onClick={() => alert('Contact: scholar@virasat.heritage.org')}
              className="hover:text-[#8B1E22] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
