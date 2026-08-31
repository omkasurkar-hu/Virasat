import React, { useState } from 'react';
import { Layers, ZoomIn, ZoomOut, Compass, Volume2, VolumeX, Trophy, Sparkles } from 'lucide-react';
import { MapLayerStyle } from '../types';

interface MapControlsProps {
  layerStyle: MapLayerStyle;
  onLayerChange: (layer: MapLayerStyle) => void;
  onResetView: () => void;
  onOpenQuiz: () => void;
}

export const MapControls: React.FC<MapControlsProps> = ({
  layerStyle,
  onLayerChange,
  onResetView,
  onOpenQuiz,
}) => {
  const [showLayerMenu, setShowLayerMenu] = useState(false);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const oscillatorGroupRef = React.useRef<OscillatorNode[]>([]);

  // Ambient Sitara / Flute drone generator using Web Audio API
  const toggleAmbientAudio = () => {
    if (isAmbientPlaying) {
      oscillatorGroupRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      oscillatorGroupRef.current = [];
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsAmbientPlaying(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Indian Tanpura / Sitar harmonic drone frequencies (Sa, Pa, Sa high) - Raag Bhairav / Yaman tuning
        const freqs = [130.81, 196.0, 261.63, 392.0];
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
        gainNode.connect(ctx.destination);

        const oscs: OscillatorNode[] = [];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle harmonic vibrato
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.value = 0.2 + idx * 0.1;
          lfoGain.gain.value = 0.8;
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          osc.connect(gainNode);
          osc.start();
          oscs.push(osc);
        });

        oscillatorGroupRef.current = oscs;
        setIsAmbientPlaying(true);
      } catch (err) {
        console.error('Audio synthesizer error:', err);
      }
    }
  };

  const layers: Array<{ id: MapLayerStyle; label: string; icon: string }> = [
    { id: 'streets', label: 'Streets & Roads', icon: '🗺️' },
    { id: 'satellite', label: 'Satellite Hybrid', icon: '🛰️' },
    { id: 'terrain', label: 'Topography / Hills', icon: '⛰️' },
    { id: 'heritage', label: 'Heritage Dark', icon: '🏛️' },
  ];

  return (
    <div className="absolute bottom-6 right-4 z-30 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Quiz Discovery Floating Banner */}
      <button
        id="btn-open-cultural-quiz"
        onClick={onOpenQuiz}
        className="group flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-2xl border border-amber-300 transform hover:scale-105 transition-all"
      >
        <Trophy className="w-4 h-4" />
        <span>Heritage Trivia Quiz</span>
        <Sparkles className="w-3.5 h-3.5 animate-bounce" />
      </button>

      {/* Layer Picker Floating Menu */}
      {showLayerMenu && (
        <div className="bg-slate-900/95 backdrop-blur-xl p-2 rounded-2xl border border-slate-700/80 shadow-2xl space-y-1 w-44 animate-in fade-in zoom-in duration-200">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider px-2 py-1 block">
            Map Style
          </span>
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => {
                onLayerChange(layer.id);
                setShowLayerMenu(false);
              }}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs text-left transition-colors ${
                layerStyle === layer.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{layer.icon}</span>
              <span>{layer.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Control Buttons Cluster */}
      <div className="bg-slate-900/90 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-700/70 shadow-2xl flex flex-col gap-1.5">
        {/* Layer Toggle */}
        <button
          id="btn-toggle-map-layer"
          onClick={() => setShowLayerMenu(!showLayerMenu)}
          className={`p-2.5 rounded-xl transition-all ${
            showLayerMenu
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-200 hover:bg-slate-800 hover:text-amber-300'
          }`}
          title="Switch Map Layers"
        >
          <Layers className="w-4 h-4" />
        </button>

        {/* Ambient Raga Audio Toggle */}
        <button
          id="btn-ambient-drone-toggle"
          onClick={toggleAmbientAudio}
          className={`p-2.5 rounded-xl transition-all ${
            isAmbientPlaying
              ? 'bg-amber-500 text-slate-950 animate-pulse'
              : 'text-slate-200 hover:bg-slate-800 hover:text-amber-300'
          }`}
          title={isAmbientPlaying ? 'Mute Ambient Tanpura Drone' : 'Play Ambient Sitar/Tanpura Drone'}
        >
          {isAmbientPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Reset View Compass */}
        <button
          id="btn-reset-map-view"
          onClick={onResetView}
          className="p-2.5 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-all"
          title="Reset View to All States"
        >
          <Compass className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
