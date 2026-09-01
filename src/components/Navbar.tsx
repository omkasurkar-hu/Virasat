import React from 'react';
import { AppView } from '../types';
import { 
  Home, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  Sparkles, 
  Calendar, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: AppView; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'map', label: 'Discover India', icon: MapPin },
    { id: 'timeline', label: 'Through the Ages', icon: Clock },
    { id: 'heritage_risk', label: 'Save Our Heritage', icon: ShieldAlert },
    { id: 'ask_bharat', label: 'Ask Bharat', icon: Sparkles },
    { id: 'festivals', label: 'Festival Calendar', icon: Calendar },
    { id: 'quiz', label: 'State Quizzes', icon: HelpCircle },
  ];

  const handleNavClick = (view: AppView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#8B1E22] text-amber-100 flex items-center justify-center font-serif font-black text-lg shadow-md group-hover:scale-105 transition-transform">
            वि
          </div>
          <div>
            <span className="font-serif font-black text-xl text-[#8B1E22] tracking-wider block leading-none">
              VIRASAT
            </span>
            <span className="text-[10px] text-stone-500 font-medium tracking-tight block mt-0.5">
              Explore the Soul of India
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#8B1E22] bg-[#8B1E22]/10 font-bold'
                    : 'text-stone-700 hover:text-[#8B1E22] hover:bg-stone-100/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#8B1E22]' : 'text-stone-500'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#8B1E22] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Explore */}
        <div className="hidden sm:flex items-center gap-2.5">
          {currentView !== 'map' ? (
            <button
              id="btn-nav-quick-explore"
              onClick={() => handleNavClick('map')}
              className="px-4 py-2 rounded-lg bg-[#8B1E22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#721519] shadow-sm transition-all duration-200 cursor-pointer"
            >
              Explore Map
            </button>
          ) : (
            <button
              id="btn-nav-quick-ask"
              onClick={() => handleNavClick('ask_bharat')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-100/90 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider hover:bg-amber-200 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Ask Bharat</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="btn-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-stone-200 px-4 pt-2 pb-5 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-left transition-all ${
                  isActive
                    ? 'bg-[#8B1E22] text-white'
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
