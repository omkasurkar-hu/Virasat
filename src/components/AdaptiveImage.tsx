import React, { useState } from 'react';
import { Maximize2, ImageOff, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { ClearImageLightboxModal, LightboxImageItem } from './ClearImageLightboxModal';

export interface AdaptiveImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto' | 'custom';
  heightClass?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  category?: string;
  initialMode?: 'contain' | 'cover';
  showToggle?: boolean;
  onOpenModal?: (imageDetails: {
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
    description?: string;
    category?: string;
  }) => void;
}

export const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  heightClass = 'h-48 sm:h-56',
  title,
  subtitle,
  description,
  category,
  initialMode = 'contain',
  showToggle = true,
  onOpenModal,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>(initialMode);
  const [isInternalModalOpen, setIsInternalModalOpen] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`relative w-full ${heightClass} ${containerClassName} bg-stone-100 border border-stone-200 rounded-xl flex flex-col items-center justify-center p-4 text-center text-stone-400`}
      >
        <ImageOff className="w-8 h-8 text-stone-400 mb-1" />
        <span className="text-xs font-semibold text-stone-600 line-clamp-1">{title || alt}</span>
        <span className="text-[10px] text-stone-400 mt-0.5">Heritage Photographic Record</span>
      </div>
    );
  }

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenModal) {
      onOpenModal({
        src,
        alt,
        title: title || alt,
        subtitle,
        description,
        category,
      });
    } else {
      setIsInternalModalOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleImageClick}
        className={`group relative w-full ${heightClass} ${containerClassName} rounded-xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-xs cursor-pointer select-none transition-all hover:shadow-md hover:border-[#8B1E22]/30`}
        title="Click to zoom and view in high resolution"
      >
        {/* Ambient Blurred Background (Ensures zero ugly black bars, beautiful color aura) */}
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-lg opacity-35 scale-110 pointer-events-none transition-opacity duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Foreground Uncropped / Complete View Image */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-10 w-full h-full transition-all duration-300 ${
            fitMode === 'contain'
              ? 'object-contain p-1.5'
              : 'object-cover group-hover:scale-105'
          } ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        />

        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-stone-100 animate-pulse text-stone-400 text-xs">
            Loading cultural image...
          </div>
        )}

        {/* Quick Interactive Hover Badges */}
        <div className="absolute top-2 right-2 z-20 flex items-center gap-1 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {showToggle && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFitMode((prev) => (prev === 'contain' ? 'cover' : 'contain'));
              }}
              className="px-2 py-1 rounded-md bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20 transition-all shadow-sm flex items-center gap-1 cursor-pointer"
              title={fitMode === 'contain' ? 'Switch to Filled View' : 'Switch to Complete View (Uncropped)'}
            >
              <Eye className="w-3 h-3 text-amber-300" />
              <span>{fitMode === 'contain' ? 'Complete' : 'Fill'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleImageClick}
            className="p-1.5 rounded-md bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs border border-white/20 transition-all shadow-sm cursor-pointer hover:bg-[#8B1E22]"
            title="Click to Zoom Fullscreen Lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Subtle Complete View Badge for accessibility & click-to-zoom indicator */}
        <div className="absolute bottom-2 left-2 z-20 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-200">
          <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] text-amber-200 font-medium border border-amber-400/30 flex items-center gap-1 shadow-sm">
            <ZoomIn className="w-3 h-3 text-amber-300" /> Click to Zoom
          </span>
        </div>
      </div>

      {/* Internal Standalone Lightbox Modal when no external onOpenModal was supplied */}
      {!onOpenModal && isInternalModalOpen && (
        <ClearImageLightboxModal
          isOpen={isInternalModalOpen}
          onClose={() => setIsInternalModalOpen(false)}
          image={{
            src,
            alt,
            title: title || alt,
            subtitle,
            description,
            category,
          }}
        />
      )}
    </>
  );
};
