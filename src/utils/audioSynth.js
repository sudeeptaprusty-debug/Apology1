// Romantic Ambient Piano & Music Box Synthesizer using Web Audio API
// Created to provide an immediate, tender romantic musical backdrop with zero external asset dependencies

class RomanticSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.masterGain = null;
    this.reverbNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

      // Lowpass filter for warm, intimate tone
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(1400, this.ctx.currentTime);

      // Connect
      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(frequency, time, duration = 2.4, type = 'sine') {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, time);

      // Gentle attack and long warm decay
      noteGain.gain.setValueAtTime(0.0001, time);
      noteGain.gain.exponentialRampToValueAtTime(0.35, time + 0.12);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(noteGain);
      noteGain.connect(this.filter);

      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // AudioContext handling safety
    }
  }

  playChord(frequencies, time, duration = 3.2) {
    frequencies.forEach((f, i) => {
      this.playNote(f, time + i * 0.08, duration, i % 2 === 0 ? 'sine' : 'triangle');
    });
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Frequencies for a nostalgic romantic progression (Db major - Ab - Bbm - Gb / F minor)
    // Tender, emotive and soft
    const progressions = [
      [277.18, 349.23, 415.30, 554.37], // Db Major (Db, F, Ab, Db)
      [220.00, 261.63, 329.63, 440.00], // A minor / Ab suspended
      [233.08, 277.18, 349.23, 466.16], // Bb minor (Bb, Db, F, Bb)
      [185.00, 233.08, 277.18, 369.99], // Gb Major (Gb, Bb, Db, Gb)
      [207.65, 261.63, 311.13, 415.30], // Ab Major (Ab, C, Eb, Ab)
    ];

    const sparkleNotes = [554.37, 659.25, 830.61, 739.99, 622.25, 880.00, 932.33];

    let chordIndex = 0;
    const beatDuration = 3.6; // Seconds per chord bar

    const playSequence = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const chord = progressions[chordIndex % progressions.length];

      this.playChord(chord, now, beatDuration * 1.3);

      // Add 2 sweet romantic chime arpeggios per chord
      const sparkle1 = sparkleNotes[Math.floor(Math.random() * sparkleNotes.length)];
      const sparkle2 = sparkleNotes[Math.floor(Math.random() * sparkleNotes.length)];
      this.playNote(sparkle1, now + 1.2, 2.0, 'sine');
      this.playNote(sparkle2, now + 2.4, 2.2, 'sine');

      chordIndex++;
    };

    playSequence();
    this.intervalId = setInterval(playSequence, beatDuration * 1000);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const romanticSynth = new RomanticSynth();
