import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

export default function Section4NoExcuses() {
  return (
    <section 
      id="no-excuses" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-xl w-full mx-auto space-y-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex p-2.5 rounded-full bg-[#180910] border border-rose-300/15 text-rose-300/90 mb-1">
            <ShieldAlert className="w-4 h-4 text-rose-300/80" />
          </div>

          <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-semibold text-rose-100">
            No excuses. Just honesty.
          </h2>
          <div className="w-12 h-0.5 bg-rose-400/40 mx-auto" />
        </motion.div>

        {/* Mature, honest reflection card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-card rounded-3xl p-7 sm:p-10 border border-rose-300/15 shadow-2xl space-y-7 text-center relative overflow-hidden"
        >
          {/* Subtle warm backlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-black/30 pointer-events-none" />

          <div className="space-y-3 text-base sm:text-lg text-rose-100/90 font-light leading-relaxed">
            <p>I was busy.</p>
            <p>I had things going on.</p>
            <p className="text-rose-200 font-normal">
              But being busy doesn't change how you felt.
            </p>
          </div>

          <div className="py-2">
            <span className="inline-block px-5 py-2 rounded-full bg-rose-950/60 border border-rose-400/30 text-rose-200 font-serif-romantic text-lg sm:text-xl font-medium tracking-wide">
              Your feelings are valid.
            </span>
          </div>

          <div className="space-y-2 text-base sm:text-lg text-rose-200/90 font-light leading-relaxed">
            <p>I could have communicated better.</p>
            <p>I could have made time for you.</p>
            <p className="text-rose-100 font-medium italic">I should have.</p>
          </div>

          <div className="pt-4 border-t border-rose-400/15">
            <p className="font-serif-romantic text-xl sm:text-2xl text-rose-300 font-semibold tracking-wide">
              And that's on me.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
