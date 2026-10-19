import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Clock, RefreshCw } from 'lucide-react';

export default function Section7InteractiveApology() {
  const [response, setResponse] = useState(null);

  // Load saved response from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('apology_user_response');
      if (saved) {
        setResponse(saved);
      }
    } catch {
      // LocalStorage access handling
    }
  }, []);

  const triggerHeartConfetti = () => {
    // Custom romantic colors: rose, deep red, warm gold, champagne
    const colors = ['#f43f5e', '#fb7185', '#be123c', '#ffd700', '#fda4af', '#e11d48'];

    // Left cannon
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x: 0.3, y: 0.65 },
      colors: colors,
      shapes: ['circle', 'square'],
      ticks: 200,
    });

    // Right cannon
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x: 0.7, y: 0.65 },
      colors: colors,
      shapes: ['circle', 'square'],
      ticks: 200,
    });

    // Center burst with hearts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { x: 0.5, y: 0.55 },
        colors: colors,
        scalar: 1.2,
      });
    }, 200);
  };

  const handleChoice = (choice) => {
    setResponse(choice);
    try {
      localStorage.setItem('apology_user_response', choice);
    } catch {}

    if (choice === 'okay') {
      triggerHeartConfetti();
    }
  };

  const handleReset = () => {
    setResponse(null);
    try {
      localStorage.removeItem('apology_user_response');
    } catch {}
  };

  return (
    <section 
      id="interactive-apology" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-xl w-full mx-auto space-y-10 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-rose-400/80">
            A Question For You
          </span>
          <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-semibold text-rose-100 leading-tight">
            Can I have one chance to make it up to you?
          </h2>
          <p className="text-xs sm:text-sm text-rose-300/60 font-light max-w-sm mx-auto">
            Answer honestly with how you feel right now. There is zero pressure.
          </p>
        </motion.div>

        {/* Buttons / Result Card */}
        <motion.div
          layout
          className="glass-card rounded-3xl p-7 sm:p-10 border border-rose-300/20 shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {response === null ? (
              /* Two Choices */
              <motion.div
                key="choices"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4"
              >
                <button
                  onClick={() => handleChoice('okay')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-medium text-base shadow-[0_10px_25px_rgba(225,29,72,0.4)] hover:shadow-[0_15px_30px_rgba(225,29,72,0.6)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border border-rose-300/30"
                >
                  <span>Okay ❤️</span>
                  <Heart className="w-4 h-4 fill-white" />
                </button>

                <button
                  onClick={() => handleChoice('not_yet')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1f0b14] hover:bg-[#2b101c] text-rose-200/90 font-medium text-base border border-rose-400/25 hover:border-rose-400/40 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Not yet 😔</span>
                </button>
              </motion.div>
            ) : response === 'not_yet' ? (
              /* Response for "Not yet 😔" */
              <motion.div
                key="not_yet_msg"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 py-2"
              >
                <div className="w-12 h-12 rounded-full bg-rose-950/70 border border-rose-400/30 mx-auto flex items-center justify-center text-rose-300">
                  <Clock className="w-5 h-5 text-rose-400" />
                </div>

                <div className="space-y-3 font-serif-romantic text-xl sm:text-2xl text-rose-100 font-normal leading-relaxed">
                  <p>That's okay.</p>
                  <p>Take your time.</p>
                  <p className="text-rose-300">I'll still be here.</p>
                  <p className="text-base sm:text-lg text-rose-200/80 font-sans font-light">
                    You don't have to forgive me before you're ready.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-rose-300/60 hover:text-rose-200 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Change your answer</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Response for "Okay ❤️" */
              <motion.div
                key="okay_msg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 py-2"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 mx-auto flex items-center justify-center text-white shadow-[0_0_25px_rgba(225,29,72,0.5)]">
                  <Sparkles className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-romantic text-3xl sm:text-4xl text-rose-100 font-semibold">
                    Thank you ❤️
                  </h3>
                  <p className="text-base sm:text-lg text-rose-200 font-light">
                    I promise I'm going to try harder.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-400/20 max-w-sm mx-auto space-y-1.5 text-xs sm:text-sm text-rose-200/90 font-light">
                  <p>One apology.</p>
                  <p>One promise.</p>
                  <p className="text-rose-300 font-normal">And hopefully… many better days ahead.</p>
                </div>

                <div className="pt-3 flex items-center justify-center gap-4">
                  <button
                    onClick={triggerHeartConfetti}
                    className="inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
                    <span>More love confetti</span>
                  </button>

                  <span className="text-rose-400/30">•</span>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-rose-300/60 hover:text-rose-200 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset answer</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
