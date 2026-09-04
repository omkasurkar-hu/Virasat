import React, { useState, useEffect, useRef } from 'react';
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
  MousePointerClick,
  Move,
} from 'lucide-react';

export interface LightboxImageItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  description?: string;
  category?: string;
}

export interface ClearImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage?: LightboxImageItem | null;
  image?: LightboxImageItem | null;
  galleryImages?: LightboxImageItem[];
  gallery?: LightboxImageItem[];
  onNavigate?: (newIndex: number) => void;
  currentIndex?: number;
}

export const ClearImageLightboxModal: React.FC<ClearImageLightboxModalProps> = ({
  isOpen,
  onClose,
  currentImage,
  image,
  galleryImages,
  gallery,
  onNavigate,
  currentIndex = 0,
}) => {
  const activeImage = currentImage || image;
  const activeGallery = galleryImages || gallery || [];

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('contain');
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reset zoom & pan on image change
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [activeImage?.src]);

  // Keyboard shortcut support
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && activeGallery.length > 1 && onNavigate) {
        const nextIdx = (currentIndex + 1) % activeGallery.length;
        onNavigate(nextIdx);
      } else if (e.key === 'ArrowLeft' && activeGallery.length > 1 && onNavigate) {
        const prevIdx = (currentIndex - 1 + activeGallery.length) % activeGallery.length;
        onNavigate(prevIdx);
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((z) => Math.min(3.5, +(z + 0.35).toFixed(2)));
      } else if (e.key === '-') {
        setZoomLevel((z) => {
          const next = Math.max(0.75, +(z - 0.35).toFixed(2));
          if (next <= 1) setPanPosition({ x: 0, y: 0 });
          return next;
        });
      } else if (e.key === '0') {
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeGallery.length, currentIndex, onNavigate, onClose]);

  if (!isOpen || !activeImage) return null;

  const hasNext = activeGallery.length > 1;
  const hasPrev = activeGallery.length > 1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && activeGallery.length > 1) {
      onNavigate((currentIndex + 1) % activeGallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && activeGallery.length > 1) {
      onNavigate((currentIndex - 1 + activeGallery.length) % activeGallery.length);
    }
  };

  // Click to zoom interaction (1x -> 1.85x -> 2.75x -> 1x)
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDragging) return;

    if (zoomLevel === 1) {
      setZoomLevel(1.85);
    } else if (zoomLevel <= 2) {
      setZoomLevel(2.75);
    } else {
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomLevel > 1) {
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    } else {
      setZoomLevel(2.2);
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    const delta = e.deltaY * -0.002;
    setZoomLevel((prev) => {
      const next = Math.min(3.5, Math.max(0.75, +(prev + delta).toFixed(2)));
      if (next <= 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  // Drag to pan when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...panPosition };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPanPosition({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onWheel={handleWheel}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-5 select-none"
      >
        {/* Top Controls Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-6xl flex items-center justify-between gap-3 text-white z-20 pb-2.5 border-b border-white/10"
        >
          <div className="flex items-center gap-2 min-w-0">
            {activeImage.category && (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-500/30 flex-shrink-0">
                {activeImage.category}
              </span>
            )}
            <h3 className="font-serif font-bold text-sm sm:text-base text-stone-100 truncate">
              {activeImage.title || activeImage.alt}
            </h3>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Zoom Controls */}
            <div className="flex items-center bg-stone-900/90 rounded-xl border border-stone-700/80 p-0.5 shadow-inner">
              <button
                type="button"
                onClick={() => {
                  setZoomLevel((z) => {
                    const next = Math.max(0.75, +(z - 0.3).toFixed(2));
                    if (next <= 1) setPanPosition({ x: 0, y: 0 });
                    return next;
                  });
                }}
                disabled={zoomLevel <= 0.75}
                className="p-1.5 hover:bg-stone-800 disabled:opacity-30 rounded-lg transition-colors cursor-pointer"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4 text-stone-300" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setZoomLevel(1);
                  setPanPosition({ x: 0, y: 0 });
                }}
                className="px-2 py-0.5 text-xs font-mono font-bold text-amber-300 hover:text-white rounded transition-colors cursor-pointer"
                title="Click to Reset Zoom (100%)"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(3.5, +(z + 0.3).toFixed(2)))}
                disabled={zoomLevel >= 3.5}
                className="p-1.5 hover:bg-stone-800 disabled:opacity-30 rounded-lg transition-colors cursor-pointer"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4 text-stone-300" />
              </button>
              {(zoomLevel !== 1 || panPosition.x !== 0 || panPosition.y !== 0) && (
                <button
                  type="button"
                  onClick={() => {
                    setZoomLevel(1);
                    setPanPosition({ x: 0, y: 0 });
                  }}
                  className="p-1.5 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer border-l border-stone-700 ml-0.5"
                  title="Reset Zoom & Pan (0)"
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
              title={fitMode === 'contain' ? 'Switch to Full Fill' : 'Switch to Complete Uncropped View'}
            >
              {fitMode === 'contain' ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              <span>{fitMode === 'contain' ? 'Fit' : 'Fill'}</span>
            </button>

            {/* External Link */}
            <a
              href={activeImage.src}
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
              className="p-2 rounded-xl bg-red-600/90 hover:bg-red-600 text-white transition-colors cursor-pointer ml-1 shadow-md"
              title="Close View (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Stage: Interactive Image Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-2 overflow-hidden"
        >
          {/* Ambient Background Aura */}
          <img
            src={activeImage.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-25 scale-125 pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          {hasPrev && (
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-md text-white border border-white/20 transition-all shadow-2xl cursor-pointer hover:scale-105"
              title="Previous Image (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-md text-white border border-white/20 transition-all shadow-2xl cursor-pointer hover:scale-105"
              title="Next Image (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Centered High-Resolution Image Canvas with Click-to-Zoom & Pan */}
          <div
            onMouseDown={handleMouseDown}
            className={`relative z-10 w-full h-full flex items-center justify-center p-2 select-none ${
              zoomLevel > 1
                ? isDragging
                  ? 'cursor-grabbing'
                  : 'cursor-grab'
                : 'cursor-zoom-in'
            }`}
          >
            <motion.img
              key={activeImage.src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{
                scale: zoomLevel,
                x: panPosition.x,
                y: panPosition.y,
                opacity: 1,
              }}
              transition={{
                scale: { duration: 0.22, ease: 'easeOut' },
                x: { duration: isDragging ? 0 : 0.15 },
                y: { duration: isDragging ? 0 : 0.15 },
                opacity: { duration: 0.2 },
              }}
              src={activeImage.src}
              alt={activeImage.alt}
              onClick={handleImageClick}
              onDoubleClick={handleDoubleClick}
              className={`max-w-full max-h-[72vh] sm:max-h-[78vh] transition-all select-none ${
                fitMode === 'contain' ? 'object-contain' : 'object-cover'
              } rounded-lg shadow-2xl ${
                zoomLevel > 1.85 ? 'cursor-zoom-out' : zoomLevel > 1 ? 'cursor-grab' : 'cursor-zoom-in'
              }`}
              referrerPolicy="no-referrer"
              draggable={false}
            />
          </div>

          {/* Interactive Zoom Guidance Badge */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-85 hover:opacity-100 transition-opacity">
            <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-lg flex items-center gap-1.5">
              <MousePointerClick className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {zoomLevel > 1 ? 'Click to zoom out • Drag to pan' : 'Click image to zoom in • Scroll wheel to magnify'}
              </span>
            </span>
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl bg-stone-900/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-stone-800 text-stone-200 z-20 space-y-1 shadow-2xl"
        >
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm sm:text-base text-white">
                {activeImage.title || activeImage.alt}
              </span>
              {activeImage.subtitle && (
                <span className="text-xs text-amber-300 font-medium">
                  • {activeImage.subtitle}
                </span>
              )}
            </div>
            {activeGallery.length > 1 && (
              <span className="text-xs font-mono text-stone-300 bg-stone-800 border border-stone-700 px-2.5 py-0.5 rounded-full">
                Photo {currentIndex + 1} of {activeGallery.length}
              </span>
            )}
          </div>

          {activeImage.description && (
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed pt-1">
              {activeImage.description}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
