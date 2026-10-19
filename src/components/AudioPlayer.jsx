import React, { useState, useRef, useEffect, useCallback } from 'react';
import { VolumeX, Music, Upload, Check, Disc3 } from 'lucide-react';
import { romanticSynth } from '../utils/audioSynth';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMode, setActiveMode] = useState('customSong'); // 'customSong' | 'synth'
  const [songUrl, setSongUrl] = useState('/music.mp3');
  const [songTitle, setSongTitle] = useState('Bas Baat Kar Lena');
  const [showSettings, setShowSettings] = useState(false);
  const fileInputRef = useRef(null);
  const audioRef = useRef(null);

  // Play audio helper with safety handling
  const startPlayback = useCallback(() => {
    if (activeMode === 'customSong') {
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch((err) => {
          console.warn('Autoplay waiting for user gesture or audio load issue:', err);
        });
      }
    } else if (activeMode === 'synth') {
      romanticSynth.start();
      setIsPlaying(true);
    }
  }, [activeMode]);

  // Set default volume & attempt automatic playback immediately
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.7;
    }

    // Attempt direct autoplay immediately on load
    startPlayback();

    // Browsers often require one user gesture before allowing audio playback.
    // Register one-time listeners for first click, touch, or scroll to trigger autoplay seamlessly.
    const handleFirstInteraction = () => {
      if (audio && audio.paused) {
        startPlayback();
      }
      removeListeners();
    };

    const events = ['click', 'touchstart', 'pointerdown', 'keydown', 'scroll', 'wheel'];
    const addListeners = () => {
      events.forEach((evt) => {
        window.addEventListener(evt, handleFirstInteraction, { passive: true, once: true });
      });
    };

    const removeListeners = () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    };

    addListeners();

    return () => {
      removeListeners();
      romanticSynth.stop();
      if (audio) {
        audio.pause();
      }
    };
  }, [startPlayback]);

  const togglePlay = () => {
    if (isPlaying) {
      if (activeMode === 'customSong' && audioRef.current) {
        audioRef.current.pause();
      } else {
        romanticSynth.stop();
      }
      setIsPlaying(false);
    } else {
      if (activeMode === 'customSong' && audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn('Playback error:', err);
          romanticSynth.start();
          setActiveMode('synth');
          setIsPlaying(true);
        });
      } else {
        romanticSynth.start();
        setIsPlaying(true);
      }
    }
  };

  const selectSongTrack = () => {
    setActiveMode('customSong');
    romanticSynth.stop();
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const selectSynthTrack = () => {
    setActiveMode('synth');
    if (audioRef.current) {
      audioRef.current.pause();
    }
    romanticSynth.start();
    setIsPlaying(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSongUrl(url);
      setSongTitle(file.name.replace(/\.[^/.]+$/, ''));
      setActiveMode('customSong');
      romanticSynth.stop();
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <>
      {/* HTML5 Audio element for user's track */}
      <audio
        ref={audioRef}
        src={songUrl}
        preload="auto"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          console.warn('Failed loading local audio file, using fallback synth');
        }}
      />

      {/* Floating Ambient Music Controller at Top-Right */}
      <div className="fixed top-5 right-5 z-50 flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          {/* Main Play/Mute Pill */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause music' : 'Play romantic background music'}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full glass-card border border-rose-300/25 text-rose-200 hover:text-white hover:border-rose-300/50 transition-all duration-300 shadow-xl cursor-pointer text-xs md:text-sm backdrop-blur-md"
          >
            {isPlaying ? (
              <>
                <Disc3 className="w-4 h-4 text-rose-400 animate-[spin_4s_linear_infinite]" />
                <span className="font-medium text-rose-100 max-w-[130px] sm:max-w-[180px] truncate">
                  {activeMode === 'customSong' ? songTitle : 'Tender Melody'}
                </span>
                {/* Micro visualizer waves */}
                <span className="flex items-end gap-0.5 h-3 ml-1">
                  <span className="w-0.5 bg-rose-400 h-2 animate-[pulse_0.8s_ease-in-out_infinite]" />
                  <span className="w-0.5 bg-rose-300 h-3 animate-[pulse_0.5s_ease-in-out_infinite]" />
                  <span className="w-0.5 bg-rose-400 h-1.5 animate-[pulse_0.7s_ease-in-out_infinite]" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-rose-300/70 group-hover:text-rose-300" />
                <span className="text-rose-200/90 group-hover:text-rose-100 font-medium">
                  Play Music
                </span>
              </>
            )}
          </button>

          {/* Settings / Track Options Button */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            aria-label="Track settings"
            title="Music settings & tracks"
            className="p-2.5 rounded-full glass-card border border-rose-300/25 text-rose-300/80 hover:text-rose-100 transition-all shadow-md cursor-pointer backdrop-blur-md"
          >
            <Music className="w-4 h-4" />
          </button>
        </div>

        {/* Music Settings Flyout */}
        {showSettings && (
          <div className="w-80 p-4 rounded-2xl glass-card border border-rose-300/30 text-xs shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 bg-black/75">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-rose-300/10">
              <span className="font-semibold text-rose-200">Romantic Soundtrack</span>
              <span className="text-[10px] text-rose-300/70 font-light">Choose Song</span>
            </div>

            <div className="space-y-2.5">
              {/* Primary User Track: Bas Baat Kar Lena */}
              <div
                onClick={selectSongTrack}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  activeMode === 'customSong'
                    ? 'border-rose-400/60 bg-gradient-to-r from-rose-950/70 to-rose-900/40 text-rose-100 shadow-[0_0_15px_rgba(225,29,72,0.2)]'
                    : 'border-rose-300/10 bg-black/30 text-rose-300/70 hover:border-rose-300/30'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-rose-900/60 flex items-center justify-center text-rose-300 border border-rose-400/30">
                    <Disc3 className={`w-3.5 h-3.5 ${isPlaying && activeMode === 'customSong' ? 'animate-spin' : ''}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-rose-100">{songTitle}</div>
                    <div className="text-[10px] text-rose-300/70">Selected romantic song ❤️</div>
                  </div>
                </div>
                {activeMode === 'customSong' && <Check className="w-4 h-4 text-rose-400" />}
              </div>

              {/* Ambient Piano Chords Option */}
              <div
                onClick={selectSynthTrack}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  activeMode === 'synth'
                    ? 'border-rose-400/60 bg-gradient-to-r from-rose-950/70 to-rose-900/40 text-rose-100 shadow-[0_0_15px_rgba(225,29,72,0.2)]'
                    : 'border-rose-300/10 bg-black/30 text-rose-300/70 hover:border-rose-300/30'
                }`}
              >
                <div>
                  <div className="font-semibold text-rose-100">Soft Piano Chords</div>
                  <div className="text-[10px] text-rose-300/70">Delicate acoustic ambient synth</div>
                </div>
                {activeMode === 'synth' && <Check className="w-4 h-4 text-rose-400" />}
              </div>

              {/* Change/Upload Another File */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="p-2.5 rounded-xl border border-dashed border-rose-300/20 hover:border-rose-300/40 bg-black/20 text-rose-300/70 hover:text-rose-200 cursor-pointer transition-all flex items-center justify-center gap-2 text-[11px]"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload a different audio file</span>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <p className="text-[11px] text-rose-200/50 italic leading-snug pt-1">
                Autoplays automatically when the site opens or on first interaction ❤️
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
