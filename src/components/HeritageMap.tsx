import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { StateHeritage, Monument, MapLayerStyle } from '../types';

interface HeritageMapProps {
  states: StateHeritage[];
  selectedState: StateHeritage | null;
  onSelectState: (state: StateHeritage) => void;
  onSelectMonument: (monument: Monument, state: StateHeritage) => void;
  layerStyle: MapLayerStyle;
  filterRegion: string | null;
}

const TILE_LAYERS: Record<MapLayerStyle, { url: string; attribution: string; maxZoom?: number }> = {
  streets: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community',
    maxZoom: 18,
  },
  terrain: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong)',
    maxZoom: 18,
  },
  heritage: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors, and the GIS user community',
    maxZoom: 18,
  },
};

const DEFAULT_CENTER: [number, number] = [22.5937, 78.9629];
const DEFAULT_ZOOM = 5;

// Precise state boundary centroids to ensure labels are cleanly embedded without overlapping
const STATE_LABEL_CENTROIDS: Record<string, [number, number]> = {
  // North India
  'ladakh': [34.40, 77.80],
  'jammu-and-kashmir': [33.70, 75.00],
  'himachal-pradesh': [31.95, 77.20],
  'punjab': [31.10, 75.30],
  'uttarakhand': [30.15, 79.20],
  'haryana': [29.10, 76.10],
  'delhi': [28.62, 77.22],
  'uttar-pradesh': [26.90, 80.90],
  'rajasthan': [26.60, 73.80],

  // West & Central India
  'gujarat': [22.40, 71.40],
  'madhya-pradesh': [23.50, 77.90],
  'maharashtra': [19.45, 76.10],
  'chhattisgarh': [21.20, 81.80],
  'goa': [15.35, 74.05],

  // South India
  'telangana': [17.80, 79.00],
  'andhra-pradesh': [15.20, 79.30],
  'karnataka': [14.60, 75.80],
  'kerala': [10.20, 76.40],
  'tamil-nadu': [11.00, 78.40],

  // East & North-East India
  'bihar': [25.65, 85.80],
  'jharkhand': [23.60, 85.30],
  'west-bengal': [23.30, 87.85],
  'odisha': [20.50, 84.40],
  'sikkim': [27.55, 88.50],
  'assam': [26.20, 92.80],
  'meghalaya': [25.45, 91.35],
  'arunachal-pradesh': [28.25, 94.60],
  'nagaland': [26.15, 94.55],
  'manipur': [24.70, 93.90],
  'mizoram': [23.20, 92.85],
  'tripura': [23.75, 91.30],
};

const isValidCoord = (c?: [number, number] | null): c is [number, number] => {
  return (
    Array.isArray(c) &&
    c.length === 2 &&
    typeof c[0] === 'number' &&
    typeof c[1] === 'number' &&
    !isNaN(c[0]) &&
    !isNaN(c[1]) &&
    isFinite(c[0]) &&
    isFinite(c[1])
  );
};

export const HeritageMap: React.FC<HeritageMapProps> = ({
  states,
  selectedState,
  onSelectState,
  onSelectMonument,
  layerStyle,
  filterRegion,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const stateMarkersGroupRef = useRef<L.LayerGroup | null>(null);
  const monumentMarkersGroupRef = useRef<L.LayerGroup | null>(null);
  const highlightCircleRef = useRef<L.Circle | null>(null);

  // Helper for safe map movement
  const safeNavigate = (target: [number, number], zoom: number) => {
    const map = mapInstanceRef.current;
    if (!map || !isValidCoord(target)) return;

    try {
      const size = map.getSize();
      if (size && size.x > 0 && size.y > 0) {
        map.flyTo(target, zoom, {
          duration: 1.2,
          easeLinearity: 0.25,
        });
      } else {
        map.setView(target, zoom);
      }
    } catch (err) {
      console.warn('Map navigation fallback to setView', err);
      try {
        map.setView(target, zoom);
      } catch (e) {}
    }
  };

  // Initialize Map with full world view centered on India
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const initialCenter: [number, number] =
      selectedState && isValidCoord(selectedState.coordinates)
        ? selectedState.coordinates
        : DEFAULT_CENTER;
    const initialZoom =
      selectedState && typeof selectedState.zoomLevel === 'number'
        ? selectedState.zoomLevel
        : DEFAULT_ZOOM;

    const initialMap = L.map(mapContainerRef.current, {
      center: initialCenter,
      zoom: initialZoom,
      minZoom: 3,
      maxZoom: 18,
      zoomControl: false,
    });

    const initialLayer = TILE_LAYERS[layerStyle];
    tileLayerRef.current = L.tileLayer(initialLayer.url, {
      attribution: initialLayer.attribution,
      maxZoom: initialLayer.maxZoom,
    }).addTo(initialMap);

    stateMarkersGroupRef.current = L.layerGroup().addTo(initialMap);
    monumentMarkersGroupRef.current = L.layerGroup().addTo(initialMap);

    mapInstanceRef.current = initialMap;

    // Handle container resizing to avoid 0x0 pixel dimensions in Leaflet
    const resizeObserver = new ResizeObserver(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    });
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    const t1 = setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 150);

    const t2 = setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 500);

    const handleZoomIn = () => {
      mapInstanceRef.current?.zoomIn();
    };
    const handleZoomOut = () => {
      mapInstanceRef.current?.zoomOut();
    };
    const handleResetIndia = () => {
      safeNavigate(DEFAULT_CENTER, DEFAULT_ZOOM);
    };

    window.addEventListener('virasat-zoom-in', handleZoomIn);
    window.addEventListener('virasat-zoom-out', handleZoomOut);
    window.addEventListener('virasat-reset-india', handleResetIndia);

    return () => {
      window.removeEventListener('virasat-zoom-in', handleZoomIn);
      window.removeEventListener('virasat-zoom-out', handleZoomOut);
      window.removeEventListener('virasat-reset-india', handleResetIndia);
      clearTimeout(t1);
      clearTimeout(t2);
      resizeObserver.disconnect();
      initialMap.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    const config = TILE_LAYERS[layerStyle];
    tileLayerRef.current.setUrl(config.url);
  }, [layerStyle]);

  // Delegated click handler for popup/tooltip buttons
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const handleContainerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Handle "Explore State" action
      const exploreBtn = target.closest('[data-explore-state]') as HTMLElement | null;
      if (exploreBtn) {
        e.preventDefault();
        e.stopPropagation();
        const stateId = exploreBtn.getAttribute('data-explore-state');
        const foundState = states.find((s) => s.id === stateId);
        if (foundState) {
          onSelectState(foundState);
        }
        return;
      }

      // Handle "View Monument" action
      const monumentBtn = target.closest('[data-view-monument]') as HTMLElement | null;
      if (monumentBtn) {
        e.preventDefault();
        e.stopPropagation();
        const rawAttr = monumentBtn.getAttribute('data-view-monument') || '';
        const [stateId, monIdxStr] = rawAttr.split(':');
        const foundState = states.find((s) => s.id === stateId);
        const monIdx = parseInt(monIdxStr, 10);
        if (foundState && foundState.monuments && foundState.monuments[monIdx]) {
          onSelectMonument(foundState.monuments[monIdx], foundState);
        }
      }
    };

    container.addEventListener('click', handleContainerClick);
    return () => {
      container.removeEventListener('click', handleContainerClick);
    };
  }, [states, onSelectState, onSelectMonument]);

  // Render Clean Embedded State Names with Hover-Only Famous Monument Popup
  useEffect(() => {
    if (!mapInstanceRef.current || !stateMarkersGroupRef.current) return;
    stateMarkersGroupRef.current.clearLayers();

    const filteredStates = filterRegion
      ? states.filter((s) => s.region === filterRegion)
      : states;

    filteredStates.forEach((state) => {
      // Use optimized centroid to keep all state names cleanly separated inside their boundaries
      const targetCoord = STATE_LABEL_CENTROIDS[state.id] || state.coordinates;
      if (!isValidCoord(targetCoord)) return;

      const isSelected = selectedState?.id === state.id;

      // Extract famous monument for this state
      const famousMonument = state.monuments?.[0];
      const monumentImage = famousMonument?.image || state.bannerImage;
      const monumentName = famousMonument?.name || 'Heritage Landmark';

      // Clean embedded label (no picture at rest - only the crisp embedded state name)
      const labelIcon = L.divIcon({
        className: 'state-map-embedded-label',
        html: `
          <div class="group flex items-center justify-center cursor-pointer select-none">
            <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${
              isSelected
                ? 'bg-amber-500 text-slate-950 font-bold border-amber-300 shadow-xl scale-110'
                : 'bg-slate-950/85 hover:bg-amber-500 text-slate-100 hover:text-slate-950 border border-slate-700/80 hover:border-amber-300 shadow-lg backdrop-blur-md'
            } transition-all duration-200 transform group-hover:scale-105">
              <span class="w-1.5 h-1.5 rounded-full ${
                isSelected ? 'bg-slate-950' : 'bg-amber-400 group-hover:bg-slate-950'
              } transition-colors flex-shrink-0"></span>
              <span class="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-sans whitespace-nowrap leading-none drop-shadow-sm">${state.name}</span>
            </div>
          </div>
        `,
        iconSize: [100, 28],
        iconAnchor: [50, 14],
      });

      // Hyper-Visual Hover Tooltip: Famous Monument Photo pops up ONLY on cursor hover
      const hoverTooltipHtml = `
        <div class="virasat-hover-card w-72 rounded-2xl overflow-hidden bg-slate-950/95 backdrop-blur-xl border border-amber-500/50 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.2)] text-slate-100 select-none pointer-events-none">
          <!-- Top Hero Image of Famous Monument -->
          <div class="relative w-full h-36 bg-slate-900 overflow-hidden">
            <img 
              src="${monumentImage}" 
              alt="${monumentName}" 
              class="w-full h-full object-cover object-center" 
              referrerpolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <!-- Badges -->
            <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
              <span class="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                ${state.region} India
              </span>
              ${
                famousMonument?.isUnesco
                  ? `<span class="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md flex items-center gap-0.5"><span>⭐</span> UNESCO</span>`
                  : ''
              }
            </div>

            <!-- Famous Monument Header Title on Image -->
            <div class="absolute bottom-2 left-3 right-3 text-left z-10">
              <div class="text-[10px] uppercase font-bold text-amber-300/90 tracking-wider flex items-center gap-1">
                <span>🏛️ Famous Monument</span>
              </div>
              <div class="text-sm font-bold text-white leading-snug drop-shadow-md truncate">
                ${monumentName}
              </div>
            </div>
          </div>

          <!-- State Snapshot Details -->
          <div class="p-3 flex flex-col gap-2 text-left bg-slate-950">
            <!-- State Title & Capital -->
            <div class="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
              <div>
                <h4 class="text-sm font-serif font-bold text-amber-100">${state.name}</h4>
                <p class="text-[11px] text-slate-400">Capital: <span class="text-amber-300 font-medium">${state.capital}</span></p>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 border border-slate-800 font-medium">
                ${state.monuments.length} Landmarks
              </span>
            </div>

            <!-- Cultural Snapshot -->
            <div class="grid grid-cols-2 gap-1.5 text-[10px]">
              ${
                state.artAndDance?.[0]
                  ? `
                <div class="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 truncate border border-slate-800/80">
                  <span>🎭</span>
                  <span class="truncate">${state.artAndDance[0].name}</span>
                </div>
              `
                  : ''
              }
              ${
                state.cuisines?.[0]
                  ? `
                <div class="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 truncate border border-slate-800/80">
                  <span>🍲</span>
                  <span class="truncate">${state.cuisines[0].name}</span>
                </div>
              `
                  : ''
              }
            </div>

            <!-- Direct Click Prompt -->
            <div class="pt-1 flex items-center justify-between text-[11px] text-amber-400 font-semibold border-t border-slate-800/60">
              <span>Click to explore state heritage</span>
              <span class="text-sm">➔</span>
            </div>
          </div>
        </div>
      `;

      const marker = L.marker(targetCoord, { icon: labelIcon });

      // Bind hover tooltip so monument photo ONLY shows on cursor hover
      marker.bindTooltip(hoverTooltipHtml, {
        className: 'virasat-monument-hover-tooltip',
        direction: 'top',
        offset: [0, -12],
        opacity: 1,
        sticky: false,
      });

      // Direct click on the state label opens the state heritage view
      marker.on('click', () => {
        onSelectState(state);
      });

      stateMarkersGroupRef.current?.addLayer(marker);
    });
  }, [states, selectedState, filterRegion]);

  // Handle Selected State & Render Monument Markers
  useEffect(() => {
    if (!mapInstanceRef.current || !monumentMarkersGroupRef.current) return;
    monumentMarkersGroupRef.current.clearLayers();

    if (highlightCircleRef.current) {
      highlightCircleRef.current.remove();
      highlightCircleRef.current = null;
    }

    if (selectedState && isValidCoord(selectedState.coordinates)) {
      // Fly to state
      const targetZoom = typeof selectedState.zoomLevel === 'number' ? selectedState.zoomLevel : 7;
      safeNavigate(selectedState.coordinates, targetZoom);

      // Highlight Radius Circle
      highlightCircleRef.current = L.circle(selectedState.coordinates, {
        radius: 120000,
        color: '#f59e0b',
        weight: 1.5,
        fillColor: '#f59e0b',
        fillOpacity: 0.08,
        dashArray: '6, 6',
      }).addTo(mapInstanceRef.current);

      // Add Monument Markers within the selected state
      selectedState.monuments.forEach((monument, idx) => {
        if (!isValidCoord(monument.coordinates)) return;

        const monumentIcon = L.divIcon({
          className: 'monument-marker-icon',
          html: `
            <div class="relative group cursor-pointer transform transition-all duration-300 hover:scale-125 z-40">
              <div class="w-9 h-9 rounded-full flex items-center justify-center shadow-2xl border-2 ${
                monument.isUnesco
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-700 border-emerald-200 text-white animate-pulse'
                  : 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-200 text-white'
              }">
                <span class="text-sm">${monument.isUnesco ? '⭐' : '🏛️'}</span>
              </div>
              <div class="mt-1 px-2 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-amber-200 text-[10px] font-semibold tracking-wide whitespace-nowrap shadow-md text-center max-w-[120px] truncate">
                ${monument.name}
              </div>
            </div>
          `,
          iconSize: [60, 56],
          iconAnchor: [30, 28],
          popupAnchor: [0, -28],
        });

        const monumentPopupHtml = `
          <div class="virasat-popup-card flex flex-col w-full text-slate-100 overflow-hidden select-none">
            <div class="relative w-full h-36 bg-slate-900 overflow-hidden">
              <img 
                src="${monument.image}" 
                alt="${monument.name}" 
                class="w-full h-full object-cover object-center" 
                referrerpolicy="no-referrer"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                ${
                  monument.isUnesco
                    ? `<span class="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md flex items-center gap-0.5"><span class="text-xs">⭐</span> UNESCO World Heritage</span>`
                    : `<span class="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold shadow-md">Monument</span>`
                }
              </div>

              <div class="absolute bottom-2 left-3 right-3 text-left z-10">
                <div class="text-sm font-bold text-white drop-shadow-md truncate">
                  ${monument.name}
                </div>
                <div class="text-[10px] text-amber-300 font-medium">
                  ${monument.location} • ${monument.century}
                </div>
              </div>
            </div>

            <div class="p-3 flex flex-col gap-2 bg-slate-950/95 text-left">
              <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                ${monument.description}
              </p>

              <div class="flex items-center gap-2 pt-1">
                <button 
                  type="button"
                  data-view-monument="${selectedState.id}:${idx}"
                  class="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg transition-all cursor-pointer"
                >
                  <span>View Landmark Details</span>
                  <span class="text-sm leading-none font-bold">➔</span>
                </button>
              </div>
            </div>
          </div>
        `;

        const mMarker = L.marker(monument.coordinates, { icon: monumentIcon });
        mMarker.bindPopup(monumentPopupHtml, {
          className: 'custom-heritage-popup',
          maxWidth: 320,
          minWidth: 280,
          autoPan: true,
          closeButton: true,
        });

        mMarker.on('click', () => {
          mMarker.openPopup();
        });

        monumentMarkersGroupRef.current?.addLayer(mMarker);
      });
    } else if (!selectedState) {
      // Reset view to pan-India
      safeNavigate(DEFAULT_CENTER, DEFAULT_ZOOM);
    }
  }, [selectedState]);

  return (
    <div className="relative w-full h-full">
      <div id="heritage-map-container" ref={mapContainerRef} className="w-full h-full z-0 bg-slate-950" />
      
      {/* Interactive Map Status Badge */}
      <div className="absolute bottom-6 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-500/40 text-slate-300 text-[11px] shadow-xl">
        <span className="text-amber-400 font-bold">🗺️ Virasat Cultural Atlas</span>
        <span className="text-slate-500">•</span>
        <span className="text-stone-300">Hover over any state name to preview its famous monument</span>
      </div>
    </div>
  );
};

