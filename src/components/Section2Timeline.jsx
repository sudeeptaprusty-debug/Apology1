import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart } from 'lucide-react';

export default function Section2Timeline() {
  return (
    <section 
      id="timeline" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-3xl w-full mx-auto space-y-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-rose-400/80">
            Chapter 01
          </span>
          <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-semibold text-rose-100">
            I Know What Happened
          </h2>
          <p className="text-sm sm:text-base text-rose-300/70 font-light">
            Looking back honestly at the last two days.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-rose-400/20 space-y-12 my-6">
          {/* Milestone 1: Yesterday */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#1b0810] border-2 border-rose-400 flex items-center justify-center shadow-[0_0_12px_rgba(225,29,72,0.4)]">
              <Calendar className="w-3 h-3 text-rose-300" />
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-rose-300/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase font-semibold text-rose-400 tracking-wider">
                  Yesterday
                </span>
                <span className="text-rose-400/40">•</span>
                <span className="text-xs text-rose-300/60">An evening that felt heavy</span>
              </div>

              <div className="font-serif-romantic text-xl sm:text-2xl text-rose-200 font-medium mb-3">
                Durga Puja ❤️
              </div>

              <div className="space-y-1.5 text-sm sm:text-base text-rose-100/80 font-light leading-relaxed">
                <p>Three people.</p>
                <p>One evening.</p>
                <p className="text-rose-300/90 italic">A lot happened.</p>
              </div>

              <div className="mt-4 pt-4 border-t border-rose-300/10 text-sm text-rose-200/90 leading-relaxed font-light">
                Yesterday wasn't exactly how I wanted things to go. It ended up being stressful and emotionally difficult for you.
              </div>
            </div>
          </motion.div>

          {/* Milestone 2: Today */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#1b0810] border-2 border-rose-400 flex items-center justify-center shadow-[0_0_12px_rgba(225,29,72,0.4)]">
              <Clock className="w-3 h-3 text-rose-300" />
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-rose-300/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase font-semibold text-rose-400 tracking-wider">
                  Today
                </span>
                <span className="text-rose-400/40">•</span>
                <span className="text-xs text-rose-300/60">Where I went wrong</span>
              </div>

              <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed font-light">
                And today, while I was caught up with my work, I ended up making you feel like you weren't important.
              </p>
              <p className="text-xs sm:text-sm text-rose-300/70 mt-2 font-light">
                Instead of being by your side and giving you reassurance, I let silence and distraction take over.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight Card: But you ARE important to me */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#2c0b17] via-[#471224] to-[#2c0b17] border border-rose-400/30 text-center shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-rose-400/20 rounded-full blur-2xl pointer-events-none" />

          <Heart className="w-7 h-7 text-rose-400 fill-rose-500/20 mx-auto mb-3 animate-soft-float" />
          
          <h3 className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight mb-2">
            But you <span className="text-rose-300 italic underline underline-offset-8 decoration-rose-400/50">ARE</span> important to me.
          </h3>
          <p className="text-xs sm:text-sm text-rose-200/80 max-w-md mx-auto font-light mt-3">
            More than any work, more than any busy hour, and more than I was able to show you today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
