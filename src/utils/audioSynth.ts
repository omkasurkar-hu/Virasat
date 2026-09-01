// Web Audio API Indian Classical & Folk Acoustic Synthesizer
// Provides harmonic simulation of rare Indian acoustic instruments and folk drones

class HeritageAudioSynth {
  private ctx: AudioContext | null = null;
  private currentSource: OscillatorNode | null = null;
  private currentGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private activeInstrumentId: string | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public stopAll() {
    if (this.currentGain && this.ctx) {
      try {
        this.currentGain.gain.setValueAtTime(this.currentGain.gain.value, this.ctx.currentTime);
        this.currentGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.1);
        setTimeout(() => {
          if (this.currentSource) {
            try { this.currentSource.stop(); } catch {}
          }
        }, 120);
      } catch {}
    }
    this.isPlaying = false;
    this.activeInstrumentId = null;
  }

  public getActiveInstrument(): string | null {
    return this.isPlaying ? this.activeInstrumentId : null;
  }

  public playInstrumentSound(
    instrumentId: string,
    soundType: 'veena' | 'esraj' | 'ravanhatha' | 'surbahar' | 'kamaicha' | 'yazh' | 'pung' | 'dilruba' | 'shehnai',
    onEnded?: () => void
  ) {
    this.stopAll();
    const ctx = this.initContext();
    if (!ctx) return;

    this.isPlaying = true;
    this.activeInstrumentId = instrumentId;

    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    this.currentGain = masterGain;

    // Scale / Raga notes: Sa (261.63), Re (293.66), Ga (329.63), Ma (349.23), Pa (392.00), Dha (440.00), Ni (493.88), Sa' (523.25)
    const ragaBhairavNotes = [261.63, 277.18, 329.63, 349.23, 392.00, 415.30, 493.88, 523.25];
    const ragaYamanNotes = [261.63, 293.66, 329.63, 370.00, 392.00, 440.00, 493.88, 523.25];
    const folkNotes = [220.0, 261.63, 293.66, 329.63, 392.00, 440.00, 523.25];

    let melody: number[] = [];
    let noteDuration = 0.45;
    let totalDuration = 4.2;

    switch (soundType) {
      case 'veena':
      case 'surbahar':
        melody = [130.81, 146.83, 164.81, 196.00, 220.00, 261.63, 246.94, 220.00, 196.00];
        noteDuration = 0.5;
        totalDuration = melody.length * noteDuration;
        this.playPluckedStringPhrase(ctx, masterGain, melody, noteDuration, 0.45, true);
        break;

      case 'yazh':
        melody = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00];
        noteDuration = 0.38;
        totalDuration = melody.length * noteDuration;
        this.playPluckedStringPhrase(ctx, masterGain, melody, noteDuration, 0.2, false);
        break;

      case 'esraj':
      case 'dilruba':
        melody = [261.63, 293.66, 329.63, 370.00, 392.00, 440.00, 392.00, 329.63, 261.63];
        noteDuration = 0.48;
        totalDuration = melody.length * noteDuration;
        this.playBowedPhrase(ctx, masterGain, melody, noteDuration);
        break;

      case 'ravanhatha':
      case 'kamaicha':
        melody = [293.66, 329.63, 370.0, 440.0, 493.88, 440.0, 370.0, 293.66];
        noteDuration = 0.4;
        totalDuration = melody.length * noteDuration;
        this.playDesertBowedPhrase(ctx, masterGain, melody, noteDuration);
        break;

      case 'shehnai':
        melody = [440.0, 493.88, 554.37, 587.33, 659.25, 587.33, 554.37, 440.0];
        noteDuration = 0.42;
        totalDuration = melody.length * noteDuration;
        this.playShehnaiPhrase(ctx, masterGain, melody, noteDuration);
        break;

      case 'pung':
        this.playPercussionRhythm(ctx, masterGain);
        totalDuration = 4.0;
        break;

      default:
        melody = ragaYamanNotes;
        this.playPluckedStringPhrase(ctx, masterGain, melody, 0.4, 0.3, false);
        totalDuration = 3.5;
        break;
    }

    setTimeout(() => {
      this.isPlaying = false;
      this.activeInstrumentId = null;
      if (onEnded) onEnded();
    }, totalDuration * 1000 + 300);
  }

  private playPluckedStringPhrase(
    ctx: AudioContext,
    dest: GainNode,
    notes: number[],
    duration: number,
    jawariBuzz: number = 0.3,
    deepBass: boolean = false
  ) {
    // Add Tanpura drone background
    const droneOsc = ctx.createOscillator();
    const droneGain = ctx.createGain();
    droneOsc.type = 'triangle';
    droneOsc.frequency.setValueAtTime(notes[0] / 2, ctx.currentTime);
    droneGain.gain.setValueAtTime(0.08, ctx.currentTime);
    droneGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + notes.length * duration);
    droneOsc.connect(droneGain);
    droneGain.connect(dest);
    droneOsc.start();
    droneOsc.stop(ctx.currentTime + notes.length * duration);

    notes.forEach((freq, idx) => {
      const startTime = ctx.currentTime + idx * duration;
      
      // Main fundamental string
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = deepBass ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      
      // Indian Meend (microtonal glide)
      if (idx > 0 && Math.random() > 0.4) {
        osc.frequency.exponentialRampToValueAtTime(freq * 1.04, startTime + 0.1);
        osc.frequency.exponentialRampToValueAtTime(freq, startTime + 0.25);
      }

      // Pluck attack & decay envelope
      oscGain.gain.setValueAtTime(0.001, startTime);
      oscGain.gain.linearRampToValueAtTime(0.35, startTime + 0.015);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 1.2);

      // Sympathetic harmonic overtone (Tarab strings effect)
      const harmonicOsc = ctx.createOscillator();
      const harmonicGain = ctx.createGain();
      harmonicOsc.type = 'sawtooth';
      harmonicOsc.frequency.setValueAtTime(freq * 2.01, startTime);
      harmonicGain.gain.setValueAtTime(0.001, startTime);
      harmonicGain.gain.linearRampToValueAtTime(jawariBuzz * 0.2, startTime + 0.02);
      harmonicGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.9);

      // Connect
      osc.connect(oscGain);
      oscGain.connect(dest);
      harmonicOsc.connect(harmonicGain);
      harmonicGain.connect(dest);

      osc.start(startTime);
      osc.stop(startTime + duration * 1.3);
      harmonicOsc.start(startTime);
      harmonicOsc.stop(startTime + duration);
    });
  }

  private playBowedPhrase(ctx: AudioContext, dest: GainNode, notes: number[], duration: number) {
    notes.forEach((freq, idx) => {
      const startTime = ctx.currentTime + idx * duration;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, startTime);
      
      // Bowed vibrato
      const vibrato = ctx.createOscillator();
      const vibratoGain = ctx.createGain();
      vibrato.frequency.setValueAtTime(5.5, startTime);
      vibratoGain.gain.setValueAtTime(freq * 0.015, startTime);
      vibrato.connect(osc.frequency);
      vibrato.start(startTime);
      vibrato.stop(startTime + duration);

      // Bow stroke envelope (gradual attack and warm sustain)
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.22, startTime + 0.08);
      gain.gain.setValueAtTime(0.18, startTime + duration * 0.7);
      gain.gain.linearRampToValueAtTime(0.001, startTime + duration);

      // Warm low-pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, startTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(dest);

      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  }

  private playDesertBowedPhrase(ctx: AudioContext, dest: GainNode, notes: number[], duration: number) {
    notes.forEach((freq, idx) => {
      const startTime = ctx.currentTime + idx * duration;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, startTime);

      // Folk rustic glide
      osc.frequency.linearRampToValueAtTime(freq * 1.02, startTime + duration * 0.4);
      osc.frequency.linearRampToValueAtTime(freq, startTime + duration * 0.8);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.28, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      // Resonant horsehair filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq * 1.8, startTime);
      filter.Q.setValueAtTime(3.0, startTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(dest);

      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  }

  private playShehnaiPhrase(ctx: AudioContext, dest: GainNode, notes: number[], duration: number) {
    notes.forEach((freq, idx) => {
      const startTime = ctx.currentTime + idx * duration;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      // Double-reed sound (square + sawtooth)
      osc1.type = 'sawtooth';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(freq, startTime);
      osc2.frequency.setValueAtTime(freq * 1.002, startTime); // subtle chorusing

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.24, startTime + 0.06);
      gain.gain.setValueAtTime(0.20, startTime + duration * 0.8);
      gain.gain.linearRampToValueAtTime(0.001, startTime + duration);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(dest);

      osc1.start(startTime);
      osc2.start(startTime);
      osc1.stop(startTime + duration);
      osc2.stop(startTime + duration);
    });
  }

  private playPercussionRhythm(ctx: AudioContext, dest: GainNode) {
    // Manipur Pung rhythm: Dha Ti Ge Na Ta Ka Dha
    const beats = [
      { time: 0.0, freq: 110, decay: 0.35, highFreq: 480 },
      { time: 0.4, freq: 160, decay: 0.15, highFreq: 620 },
      { time: 0.7, freq: 130, decay: 0.25, highFreq: 500 },
      { time: 1.1, freq: 170, decay: 0.12, highFreq: 700 },
      { time: 1.4, freq: 110, decay: 0.4, highFreq: 480 },
      { time: 1.9, freq: 150, decay: 0.18, highFreq: 600 },
      { time: 2.3, freq: 110, decay: 0.45, highFreq: 460 },
      { time: 2.8, freq: 180, decay: 0.15, highFreq: 720 },
      { time: 3.2, freq: 110, decay: 0.6, highFreq: 450 }
    ];

    beats.forEach((b) => {
      const startTime = ctx.currentTime + b.time;
      // Bass membrane (Bayan)
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(b.freq, startTime);
      bassOsc.frequency.exponentialRampToValueAtTime(b.freq * 0.6, startTime + b.decay);
      bassGain.gain.setValueAtTime(0.4, startTime);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, startTime + b.decay);

      // Treble snap (Dayan)
      const trebleOsc = ctx.createOscillator();
      const trebleGain = ctx.createGain();
      trebleOsc.type = 'triangle';
      trebleOsc.frequency.setValueAtTime(b.highFreq, startTime);
      trebleGain.gain.setValueAtTime(0.2, startTime);
      trebleGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.08);

      bassOsc.connect(bassGain);
      bassGain.connect(dest);
      trebleOsc.connect(trebleGain);
      trebleGain.connect(dest);

      bassOsc.start(startTime);
      bassOsc.stop(startTime + b.decay);
      trebleOsc.start(startTime);
      trebleOsc.stop(startTime + 0.08);
    });
  }

  public playFolkSongPreview(stateName: string, onEnded?: () => void) {
    this.stopAll();
    const ctx = this.initContext();
    if (!ctx) return;

    this.isPlaying = true;
    this.activeInstrumentId = `folk-${stateName}`;

    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    this.currentGain = masterGain;

    // Traditional pentatonic folk melody with acoustic tanpura drone
    const folkScale = [220, 246.94, 277.18, 329.63, 369.99, 440];
    const phrase = [
      folkScale[0], folkScale[2], folkScale[3], folkScale[4],
      folkScale[5], folkScale[4], folkScale[3], folkScale[2],
      folkScale[0], folkScale[3], folkScale[0]
    ];

    this.playPluckedStringPhrase(ctx, masterGain, phrase, 0.35, 0.4, false);

    setTimeout(() => {
      this.isPlaying = false;
      this.activeInstrumentId = null;
      if (onEnded) onEnded();
    }, phrase.length * 350 + 400);
  }
}

export const heritageAudio = new HeritageAudioSynth();
