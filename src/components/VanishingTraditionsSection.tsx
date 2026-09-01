import React, { useState, useEffect } from 'react';
import { RARE_INSTRUMENTS_DATA, VANISHING_TRADITIONS_DATA } from '../data/vanishingTraditionsData';
import { RareInstrument, VanishingTradition, AdoptedTraditionRecord } from '../types';
import { heritageAudio } from '../utils/audioSynth';
import { 
  ShieldAlert, 
  Music, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Layers,
  BookOpen,
  Send,
  Download,
  Share2
} from 'lucide-react';

export const VanishingTraditionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traditions' | 'instruments' | 'adopt'>('traditions');
  const [selectedTradition, setSelectedTradition] = useState<VanishingTradition>(VANISHING_TRADITIONS_DATA[0]);
  const [playingInstrumentId, setPlayingInstrumentId] = useState<string | null>(null);

  // Adopt a tradition form state
  const [adoptedTraditionId, setAdoptedTraditionId] = useState<string>(VANISHING_TRADITIONS_DATA[0].id);
  const [studentName, setStudentName] = useState<string>('');
  const [studentRole, setStudentRole] = useState<string>('Student / Cultural Enthusiast');
  const [notes, setNotes] = useState<string>('');
  const [pledgeChecked, setPledgeChecked] = useState<boolean>(false);
  const [adoptedRecords, setAdoptedRecords] = useState<AdoptedTraditionRecord[]>([]);
  const [showCertificate, setShowCertificate] = useState<AdoptedTraditionRecord | null>(null);

  // Load saved pledges from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('virasat_adopted_traditions');
      if (saved) {
        setAdoptedRecords(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const handlePlayInstrument = (inst: RareInstrument) => {
    if (playingInstrumentId === inst.id) {
      heritageAudio.stopAll();
      setPlayingInstrumentId(null);
    } else {
      setPlayingInstrumentId(inst.id);
      heritageAudio.playInstrumentSound(inst.id, inst.soundType, () => {
        setPlayingInstrumentId(null);
      });
    }
  };

  const handleAdoptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !pledgeChecked) return;

    const tradition = VANISHING_TRADITIONS_DATA.find((t) => t.id === adoptedTraditionId) || VANISHING_TRADITIONS_DATA[0];
    const newRecord: AdoptedTraditionRecord = {
      id: `adopt-${Date.now()}`,
      traditionId: tradition.id,
      traditionName: tradition.name,
      studentName: studentName.trim(),
      studentRole,
      dateAdopted: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
      notes: notes.trim(),
      pledgeChecked: true
    };

    const updated = [newRecord, ...adoptedRecords];
    setAdoptedRecords(updated);
    try {
      localStorage.setItem('virasat_adopted_traditions', JSON.stringify(updated));
    } catch {}

    setShowCertificate(newRecord);
    setStudentName('');
    setNotes('');
    setPledgeChecked(false);
  };

  return (
    <div id="vanishing-traditions-section" className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-24">
      {/* Header */}
      <div className="bg-stone-950 text-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#8B1E22]/30 via-transparent to-transparent opacity-60" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Preservation & Youth Action</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Save Our Living Heritage
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base leading-relaxed">
            India’s intangible heritage faces silent extinction. Explore endangered crafts, listen to the acoustic timbre of rare folk instruments, and take the youth pledge to adopt and preserve an ancestral tradition.
          </p>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-300/80 shadow-xs py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <button
            id="tab-btn-traditions"
            onClick={() => setActiveTab('traditions')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'traditions'
                ? 'bg-[#8B1E22] text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Vanishing Arts & Crafts</span>
          </button>
          <button
            id="tab-btn-instruments"
            onClick={() => setActiveTab('instruments')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'instruments'
                ? 'bg-[#8B1E22] text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Rare Acoustic Instruments</span>
          </button>
          <button
            id="tab-btn-adopt"
            onClick={() => setActiveTab('adopt')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'adopt'
                ? 'bg-amber-900 text-amber-100 shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Adopt a Tradition</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* TAB 1: VANISHING ARTS & CRAFTS */}
        {activeTab === 'traditions' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar list of endangered traditions */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Endangered Heritage Index
              </h3>
              {VANISHING_TRADITIONS_DATA.map((trad) => {
                const isSelected = selectedTradition.id === trad.id;
                return (
                  <button
                    key={trad.id}
                    id={`btn-tradition-${trad.id}`}
                    onClick={() => setSelectedTradition(trad)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-white border-[#8B1E22] ring-2 ring-[#8B1E22]/20 shadow-md'
                        : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                        trad.status === 'Critical'
                          ? 'bg-red-100 text-red-800'
                          : trad.status === 'Endangered'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-stone-100 text-stone-700'
                      }`}>
                        {trad.status} Risk
                      </span>
                      <span className="text-[11px] text-stone-500 font-medium">
                        {trad.region} India
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-stone-900 mt-1">
                      {trad.name}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium line-clamp-1">
                      📍 {trad.originState}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detailed display card */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
              <div className="relative rounded-xl overflow-hidden aspect-16/9 mb-6 border border-stone-200 shadow-xs">
                <img
                  src={selectedTradition.image}
                  alt={selectedTradition.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider">
                    {selectedTradition.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-red-950/90 text-red-200 text-xs font-semibold">
                    Estimated Artisans: {selectedTradition.activeArtisansEstimated}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E22]">
                    📍 {selectedTradition.originState}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                    {selectedTradition.name}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setAdoptedTraditionId(selectedTradition.id);
                    setActiveTab('adopt');
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-900 text-amber-100 text-xs font-bold uppercase tracking-wider hover:bg-amber-800 shadow-xs transition-all cursor-pointer flex-shrink-0"
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Pledge / Adopt</span>
                </button>
              </div>

              <div className="space-y-6 text-sm text-stone-700">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#8B1E22]" />
                    <span>Ancestral Heritage & Origins</span>
                  </h4>
                  <p className="leading-relaxed text-stone-800">
                    {selectedTradition.history}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#8B1E22]" />
                    <span>Artisanal Mastery & Technique</span>
                  </h4>
                  <p className="leading-relaxed text-stone-800">
                    {selectedTradition.howMade}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50/80 border border-red-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-900 mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
                    <span>Why It Is Endangered</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                    {selectedTradition.challengesFaced}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>How Students & Youth Can Protect This Art</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedTradition.howYouthCanHelp.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-amber-950 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: RARE ACOUSTIC INSTRUMENTS & LIVE SYNTHESIZER */}
        {activeTab === 'instruments' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Rare Acoustic Folk & Classical Instruments
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Click any instrument to hear an authentic acoustic microtonal playback synthesis generated with Web Audio API.
                </p>
              </div>
              {playingInstrumentId && (
                <button
                  onClick={() => {
                    heritageAudio.stopAll();
                    setPlayingInstrumentId(null);
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-100 text-red-800 text-xs font-bold hover:bg-red-200 transition-all"
                >
                  <VolumeX className="w-4 h-4" />
                  <span>Stop Playback</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RARE_INSTRUMENTS_DATA.map((inst) => {
                const isPlaying = playingInstrumentId === inst.id;
                return (
                  <div
                    key={inst.id}
                    className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 flex flex-col justify-between ${
                      isPlaying
                        ? 'border-[#8B1E22] ring-2 ring-[#8B1E22]/30 shadow-lg'
                        : 'border-stone-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="relative aspect-16/10 overflow-hidden bg-stone-900">
                        <img
                          src={inst.image}
                          alt={inst.name}
                          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-sm text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                            {inst.category}
                          </span>
                        </div>
                        <button
                          id={`btn-play-${inst.id}`}
                          onClick={() => handlePlayInstrument(inst)}
                          className={`absolute bottom-3 right-3 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold shadow-lg transition-all duration-200 cursor-pointer ${
                            isPlaying
                              ? 'bg-amber-400 text-stone-950 animate-pulse'
                              : 'bg-[#8B1E22] text-white hover:bg-[#721519]'
                          }`}
                        >
                          {isPlaying ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5" />
                              <span>Playing...</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Play Timbre</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="p-5 space-y-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E22]">
                            📍 {inst.originRegion}
                          </span>
                          <h4 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                            {inst.name}
                          </h4>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {inst.description}
                        </p>
                        <div className="pt-2 border-t border-stone-100 space-y-2 text-xs">
                          <div>
                            <span className="font-bold text-stone-800">Crafting: </span>
                            <span className="text-stone-600">{inst.structureAndMaking}</span>
                          </div>
                          <div>
                            <span className="font-bold text-red-800">Threat: </span>
                            <span className="text-stone-600">{inst.whyEndangered}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                      <span>{inst.frequencyRange}</span>
                      <span className="font-medium text-stone-700">Acoustic Synth Ready</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: ADOPT A TRADITION & HERITAGE AMBASSADOR CERTIFICATE */}
        {activeTab === 'adopt' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-700" />
                <span>Youth Action Pledge</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Adopt a Tradition
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Choose an endangered art form, instrument, or craft. Pledge your commitment to learn about it, share its history, support its artisans, and earn the official **Virasat Heritage Ambassador** badge!
              </p>

              <form onSubmit={handleAdoptSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Select Tradition to Adopt
                  </label>
                  <select
                    id="select-adopt-tradition"
                    value={adoptedTraditionId}
                    onChange={(e) => setAdoptedTraditionId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-stone-50"
                  >
                    {VANISHING_TRADITIONS_DATA.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} ({t.originState}) — {t.status}
                      </option>
                    ))}
                    {RARE_INSTRUMENTS_DATA.map((inst) => (
                      <option key={inst.id} value={inst.id}>
                        Instrument: {inst.name} ({inst.originRegion})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="input-student-name"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Role
                    </label>
                    <select
                      id="select-student-role"
                      value={studentRole}
                      onChange={(e) => setStudentRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-stone-50"
                    >
                      <option value="Student / Cultural Enthusiast">Student / Cultural Enthusiast</option>
                      <option value="School Heritage Ambassador">School Heritage Ambassador</option>
                      <option value="Young Researcher / Artist">Young Researcher / Artist</option>
                      <option value="Community Volunteer">Community Volunteer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Action Commitment or Notes (Optional)
                  </label>
                  <textarea
                    id="textarea-adopt-notes"
                    rows={3}
                    placeholder="e.g. I will interview an artisan or present this art form in my school cultural assembly..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-stone-50"
                  />
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id="checkbox-pledge"
                      checked={pledgeChecked}
                      onChange={(e) => setPledgeChecked(e.target.checked)}
                      className="w-4 h-4 mt-1 text-[#8B1E22] rounded-sm focus:ring-[#8B1E22]"
                    />
                    <span className="text-xs text-stone-800 leading-relaxed font-medium">
                      **Heritage Ambassador Pledge**: I solemnly resolve to honor, celebrate, and actively share India’s living cultural heritage with my generation.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  id="btn-submit-adoption"
                  disabled={!studentName.trim() || !pledgeChecked}
                  className="w-full py-3 rounded-xl bg-[#8B1E22] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#721519] disabled:opacity-40 disabled:cursor-not-allowed shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Generate Heritage Ambassador Certificate</span>
                </button>
              </form>
            </div>

            {/* Certificate Display or Recent Adoptions */}
            <div className="lg:col-span-5 space-y-6">
              {showCertificate ? (
                <div className="bg-amber-50 rounded-2xl border-2 border-amber-300 p-6 sm:p-8 text-center shadow-lg relative overflow-hidden animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-[#8B1E22] text-amber-100 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Award className="w-8 h-8 text-amber-300" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#8B1E22] block">
                    Official Recognition
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    Heritage Ambassador Certificate
                  </h4>
                  <div className="my-4 p-4 bg-white/90 rounded-xl border border-amber-200 text-left space-y-2">
                    <p className="text-xs text-stone-600">
                      This honors <strong className="text-stone-900 font-bold">{showCertificate.studentName}</strong> ({showCertificate.studentRole}) for adopting:
                    </p>
                    <p className="font-serif font-bold text-base text-[#8B1E22]">
                      ✨ {showCertificate.traditionName}
                    </p>
                    {showCertificate.notes && (
                      <p className="text-[11px] text-stone-600 italic bg-amber-50/60 p-2 rounded-md">
                        "{showCertificate.notes}"
                      </p>
                    )}
                    <p className="text-[10px] text-stone-400 text-right pt-2 border-t border-stone-100">
                      Issued on {showCertificate.dateAdopted} • Virasat Digital Platform
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => window.print()}
                      className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-all flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Print / Save</span>
                    </button>
                    <button
                      onClick={() => setShowCertificate(null)}
                      className="px-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
                  <h4 className="font-serif font-bold text-lg text-stone-900 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Your Adopted Traditions ({adoptedRecords.length})</span>
                  </h4>
                  {adoptedRecords.length === 0 ? (
                    <div className="p-6 text-center text-stone-400 text-xs">
                      No traditions adopted in this browser yet. Fill the pledge form to receive your certificate!
                    </div>
                  ) : (
                    <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                      {adoptedRecords.map((rec) => (
                        <div key={rec.id} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs flex items-center justify-between">
                          <div>
                            <span className="font-bold text-stone-900 block">{rec.traditionName}</span>
                            <span className="text-[11px] text-stone-500">Adopted by {rec.studentName} on {rec.dateAdopted}</span>
                          </div>
                          <button
                            onClick={() => setShowCertificate(rec)}
                            className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 text-[10px] font-bold hover:bg-amber-200"
                          >
                            View Badge
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
