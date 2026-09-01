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

  // Initialize Map
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
      minZoom: 4,
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

    return () => {
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

  // Render State Markers
  useEffect(() => {
    if (!mapInstanceRef.current || !stateMarkersGroupRef.current) return;
    stateMarkersGroupRef.current.clearLayers();

    const filteredStates = filterRegion
      ? states.filter((s) => s.region === filterRegion)
      : states;

    filteredStates.forEach((state) => {
      if (!isValidCoord(state.coordinates)) return;
      const isSelected = selectedState?.id === state.id;

      // Custom State Hub Marker
      const customIcon = L.divIcon({
        className: 'custom-state-pin',
        html: `
          <div class="group relative flex items-center justify-center cursor-pointer transform transition-all duration-300 ${
            isSelected ? 'scale-125 z-50' : 'hover:scale-110 z-30'
          }">
            <div class="absolute -inset-1 rounded-full ${
              isSelected
                ? 'bg-amber-500 animate-ping opacity-75'
                : 'bg-amber-400/20 group-hover:bg-amber-400/40'
            }"></div>
            <div class="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-xl border ${
              isSelected
                ? 'bg-amber-500 border-amber-300 text-slate-950 font-bold'
                : 'bg-slate-900/90 backdrop-blur-md border-amber-500/50 text-amber-300 group-hover:border-amber-400 group-hover:bg-slate-900'
            }">
              <span class="text-xs">🏛️</span>
              <span class="text-xs tracking-wide whitespace-nowrap">${state.name}</span>
              ${
                state.monuments.some((m) => m.isUnesco)
                  ? `<span class="w-2 h-2 rounded-full bg-emerald-400 shadow-sm" title="UNESCO Heritage"></span>`
                  : ''
              }
            </div>
          </div>
        `,
        iconSize: [120, 36],
        iconAnchor: [60, 18],
      });

      const marker = L.marker(state.coordinates, { icon: customIcon });
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

      // Add Monument Markers
      selectedState.monuments.forEach((monument) => {
        if (!isValidCoord(monument.coordinates)) return;

        const monumentIcon = L.divIcon({
          className: 'monument-marker-icon',
          html: `
            <div class="relative group cursor-pointer transform transition-all duration-300 hover:scale-125 z-40">
              <div class="w-8 h-8 rounded-full flex items-center justify-center shadow-2xl border-2 ${
                monument.isUnesco
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-700 border-emerald-200 text-white animate-bounce'
                  : 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-200 text-white'
              }">
                <span class="text-sm">${monument.isUnesco ? '⭐' : '📍'}</span>
              </div>
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none w-48 bg-slate-900/95 backdrop-blur-md p-2 rounded-lg border border-amber-500/40 shadow-2xl text-center z-50">
                <span class="text-xs font-bold text-amber-300">${monument.name}</span>
                <span class="text-[10px] text-slate-300 line-clamp-2 mt-0.5">${monument.type}</span>
                ${
                  monument.isUnesco
                    ? '<span class="mt-1 text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">UNESCO World Heritage</span>'
                    : ''
                }
              </div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const mMarker = L.marker(monument.coordinates, { icon: monumentIcon });
        mMarker.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          onSelectMonument(monument, selectedState);
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
    </div>
  );
};
