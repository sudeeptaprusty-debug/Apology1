import React from 'react';
import { motion } from 'framer-motion';
import { HeartCrack } from 'lucide-react';

export default function Section3ImSorry() {
  const apologies = [
    "I'm sorry for making you feel ignored.",
    "I'm sorry that when you needed my attention, I wasn't there the way I should have been.",
    "I'm sorry if my actions made you feel like you mattered less.",
    "I never wanted you to feel that way.",
  ];

  return (
    <section 
      id="im-sorry" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-2xl w-full mx-auto text-center space-y-10">
        {/* Subtle Icon & Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex p-3 rounded-full bg-rose-950/60 border border-rose-400/20 text-rose-300">
            <HeartCrack className="w-5 h-5 text-rose-400" />
          </div>

          <h2 className="font-serif-romantic text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white burgundy-glow">
            I'm sorry.
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-300/60 font-medium">
            From the bottom of my heart
          </p>
        </motion.div>

        {/* Revealed sentences one at a time */}
        <div className="space-y-5 pt-4">
          {apologies.map((sentence, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.25 }}
              className="p-5 sm:p-6 rounded-2xl glass-card glass-card-hover border border-rose-300/15"
            >
              <p className="font-serif-romantic text-lg sm:text-xl text-rose-100 font-normal leading-relaxed">
                "{sentence}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement of this section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="pt-6"
        >
          <p className="text-sm sm:text-base text-rose-300/80 font-light italic max-w-lg mx-auto leading-relaxed border-t border-rose-400/20 pt-6">
            And I'm not going to pretend that saying <span className="text-rose-200 font-medium">"sorry"</span> magically fixes everything.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
