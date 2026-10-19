import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Section1Opening({ onNextClick }) {
  return (
    <section 
      id="opening" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center z-10 pt-16 pb-20"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Subtle romantic badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-300/20 text-rose-300 text-xs sm:text-sm tracking-wide"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>A message straight from my heart</span>
        </motion.div>

        {/* Main Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-serif-romantic text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.15]">
            Hey You… <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-rose-400">
              I Owe You An Apology ❤️
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-rose-200/80 font-light leading-relaxed">
            I know I messed up. And this time, I don't want to just say sorry… I want you to know that I understand.
          </p>
        </motion.div>

        {/* The Card with the opening words */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 p-7 sm:p-9 rounded-3xl glass-card border border-rose-400/25 max-w-lg mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* Subtle inner corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

          <p className="font-serif-romantic text-xl sm:text-2xl text-rose-200 font-medium tracking-wide mb-4">
            Wait… before you say anything ❤️
          </p>

          <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed font-light">
            I know you're hurt.
            <br />
            And honestly… <span className="text-rose-300 font-normal">you have every right to be.</span>
          </p>
        </motion.div>

        {/* Action Button: Let me explain... */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-4"
        >
          <button
            onClick={onNextClick}
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#801835] via-[#a31f45] to-[#801835] hover:from-[#961c3e] hover:to-[#be2751] text-rose-100 font-medium text-sm sm:text-base tracking-wide shadow-[0_8px_25px_rgba(158,28,62,0.4)] hover:shadow-[0_12px_30px_rgba(225,29,72,0.5)] transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-rose-300/30"
          >
            <span>Let me explain…</span>
            <ChevronDown className="w-4 h-4 text-rose-300 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
