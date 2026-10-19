import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MessageCircleHeart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Section9Final() {
  const [showLastThing, setShowLastThing] = useState(false);

  const handleRevealLastThing = () => {
    setShowLastThing(true);
    // Soft confetti shower
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f43f5e', '#fda4af', '#fecdd3', '#fb7185'],
    });
  };

  return (
    <section 
      id="final-message" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10 text-center"
    >
      <div className="max-w-2xl w-full mx-auto space-y-10">
        {/* Cinematic Opening of Final Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-base sm:text-lg text-rose-200/80 font-light italic">
            I don't expect one website to fix everything.
          </p>

          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-400 font-medium">
            But I hope it tells you one thing clearly…
          </p>
        </motion.div>

        {/* Large Centered "I'M SORRY. ❤️" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="py-4"
        >
          <h2 className="font-serif-romantic text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white burgundy-glow">
            I'M SORRY. ❤️
          </h2>
        </motion.div>

        {/* Heartfelt Affirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-2 text-lg sm:text-2xl font-serif-romantic text-rose-100 font-normal leading-relaxed"
        >
          <p>I love you.</p>
          <p>I care about you.</p>
          <p className="text-rose-300 font-medium">
            And I'm going to try to be better for us.
          </p>
        </motion.div>

        {/* Humorous, affectionate signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-2"
        >
          <p className="text-sm sm:text-base text-rose-300/70 italic font-light">
            — From the idiot who loves you 😭❤️
          </p>
        </motion.div>

        {/* One Last Thing Button & Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8"
        >
          {!showLastThing ? (
            <button
              onClick={handleRevealLastThing}
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-rose-950/70 hover:bg-rose-900/80 border border-rose-300/30 text-rose-200 hover:text-white transition-all duration-300 shadow-lg cursor-pointer text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4 text-rose-400 group-hover:rotate-12 transition-transform" />
              <span>One Last Thing…</span>
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-8 rounded-3xl glass-card border border-rose-400/30 shadow-[0_10px_35px_rgba(225,29,72,0.35)] max-w-md mx-auto space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-rose-600/20 border border-rose-400/40 flex items-center justify-center mx-auto text-rose-300">
                  <MessageCircleHeart className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="font-serif-romantic text-2xl sm:text-3xl text-rose-100 font-medium leading-snug">
                  Come talk to me when you're ready. ❤️
                </h3>
                <p className="text-xs sm:text-sm text-rose-300/70 font-light">
                  I'm waiting right here for you, no matter how much time you need.
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Footer gentle note */}
        <div className="pt-20 text-[11px] text-rose-400/40 tracking-widest uppercase">
          Crafted with love, patience & honesty
        </div>
      </div>
    </section>
  );
}
