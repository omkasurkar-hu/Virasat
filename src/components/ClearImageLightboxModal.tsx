import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sparkles,
  Info,
} from 'lucide-react';

export interface LightboxImageItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  description?: string;
  category?: string;
}

interface ClearImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: LightboxImageItem | null;
  galleryImages?: LightboxImageItem[];
  onNavigate?: (newIndex: number) => void;
  currentIndex?: number;
}

export const ClearImageLightboxModal: React.FC<ClearImageLightboxModalProps> = ({
  isOpen,
  onClose,
  currentImage,
  galleryImages = [],
  onNavigate,
  currentIndex = 0,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('contain');

  // Reset zoom on image change
  useEffect(() => {
    setZoomLevel(1);
  }, [currentImage?.src]);

  // Keyboard shortcut support
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && galleryImages.length > 1 && onNavigate) {
        const nextIdx = (currentIndex + 1) % galleryImages.length;
        onNavigate(nextIdx);
      } else if (e.key === 'ArrowLeft' && galleryImages.length > 1 && onNavigate) {
        const prevIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        onNavigate(prevIdx);
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((z) => Math.min(3, z + 0.25));
      } else if (e.key === '-') {
        setZoomLevel((z) => Math.max(0.75, z - 0.25));
      } else if (e.key === '0') {
        setZoomLevel(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, galleryImages.length, currentIndex, onNavigate, onClose]);

  if (!isOpen || !currentImage) return null;

  const hasNext = galleryImages.length > 1;
  const hasPrev = galleryImages.length > 1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && galleryImages.length > 1) {
      onNavigate((currentIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && galleryImages.length > 1) {
      onNavigate((currentIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-between p-3 sm:p-6 select-none"
      >
        {/* Top Controls Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-6xl flex items-center justify-between gap-3 text-white z-20 pb-3 border-b border-white/10"
        >
          <div className="flex items-center gap-2 min-w-0">
            {currentImage.category && (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-500/30 flex-shrink-0">
                {currentImage.category}
              </span>
            )}
            <h3 className="font-serif font-bold text-sm sm:text-base text-stone-100 truncate">
              {currentImage.title || currentImage.alt}
            </h3>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Zoom Controls */}
            <div className="flex items-center bg-stone-900/90 rounded-xl border border-stone-700/80 p-0.5">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(0.75, +(z - 0.25).toFixed(2)))}
                disabled={zoomLevel <= 0.75}
                className="p-1.5 hover:bg-stone-800 disabled:opacity-30 rounded-lg transition-colors cursor-pointer"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4 text-stone-300" />
              </button>
              <span className="px-2 text-xs font-mono text-stone-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(3, +(z + 0.25).toFixed(2)))}
                disabled={zoomLevel >= 3}
                className="p-1.5 hover:bg-stone-800 disabled:opacity-30 rounded-lg transition-colors cursor-pointer"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4 text-stone-300" />
              </button>
              {zoomLevel !== 1 && (
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="p-1.5 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer border-l border-stone-700 ml-0.5"
                  title="Reset Zoom (0)"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
                </button>
              )}
            </div>

            {/* Fit mode switch */}
            <button
              type="button"
              onClick={() => setFitMode((m) => (m === 'contain' ? 'cover' : 'contain'))}
              className="px-2.5 py-1.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs font-semibold transition-all cursor-pointer hidden sm:flex items-center gap-1"
              title={fitMode === 'contain' ? 'Switch to Full Fill' : 'Switch to Complete View'}
            >
              {fitMode === 'contain' ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              <span>{fitMode === 'contain' ? 'Complete' : 'Fill'}</span>
            </button>

            {/* External Link */}
            <a
              href={currentImage.src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors"
              title="Open Original Image in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white transition-colors cursor-pointer ml-1"
              title="Close View (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Stage: Interactive Image Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-3 overflow-hidden"
        >
          {/* Ambient Background Aura */}
          <img
            src={currentImage.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-125 pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          {hasPrev && (
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all shadow-xl cursor-pointer"
              title="Previous Image (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all shadow-xl cursor-pointer"
              title="Next Image (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* The High-Resolution Centered Image */}
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-auto p-2">
            <motion.img
              key={currentImage.src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: zoomLevel, opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={currentImage.src}
              alt={currentImage.alt}
              className={`max-w-full max-h-[75vh] sm:max-h-[80vh] transition-transform select-none ${
                fitMode === 'contain' ? 'object-contain' : 'object-cover'
              } rounded-lg shadow-2xl`}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl bg-stone-900/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-stone-800 text-stone-200 z-20 space-y-1"
        >
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm sm:text-base text-white">
                {currentImage.title || currentImage.alt}
              </span>
              {currentImage.subtitle && (
                <span className="text-xs text-amber-300 font-medium">
                  • {currentImage.subtitle}
                </span>
              )}
            </div>
            {galleryImages.length > 1 && (
              <span className="text-xs font-mono text-stone-400 bg-stone-800 px-2 py-0.5 rounded">
                Photo {currentIndex + 1} of {galleryImages.length}
              </span>
            )}
          </div>

          {currentImage.description && (
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed pt-1">
              {currentImage.description}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
