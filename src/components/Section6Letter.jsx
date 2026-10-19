import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Heart } from 'lucide-react';

export default function Section6Letter() {
  return (
    <section 
      id="letter" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-2xl w-full mx-auto space-y-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-400/20 text-rose-300 text-xs tracking-wider uppercase">
            <Feather className="w-3.5 h-3.5 text-rose-400" />
            <span>A Letter For You</span>
          </div>
          <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-semibold text-rose-100">
            A Personal Note
          </h2>
        </motion.div>

        {/* The Handwritten Letter Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="relative glass-letter rounded-3xl p-8 sm:p-12 border border-rose-300/25 shadow-2xl overflow-hidden"
        >
          {/* Subtle decorative wax seal top right */}
          <div className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#8c1833] to-[#450817] border border-rose-300/40 shadow-[0_0_15px_rgba(225,29,72,0.4)]">
            <Heart className="w-5 h-5 text-rose-200 fill-rose-300" />
          </div>

          {/* Letter Content */}
          <div className="font-letter text-xl sm:text-2xl text-rose-100 leading-relaxed space-y-6 pt-2">
            <p className="text-2xl sm:text-3xl font-semibold text-rose-200">
              Hey love,
            </p>

            <p>
              I know I messed up.
            </p>

            <p>
              Yesterday was already a little complicated, and today when I got busy with my work, I didn't realize how much my silence and lack of attention could hurt you.
            </p>

            <p className="text-rose-200 font-medium">
              But I understand now.
            </p>

            <div className="space-y-1">
              <p>You didn't need some huge gesture from me.</p>
              <p>You just wanted to feel heard, cared for, and important.</p>
            </div>

            <p>
              And I'm sorry I failed at giving you that today.
            </p>

            <div className="space-y-1">
              <p>I'm not asking you to forget everything immediately.</p>
              <p>I'm not asking you to stop being upset.</p>
            </div>

            <p>
              I just want you to know that I'm genuinely sorry.
            </p>

            <div className="space-y-1">
              <p>You mean a lot to me.</p>
              <p>And I never want you to question that because of one stupid mistake.</p>
            </div>

            <div className="space-y-1">
              <p>I'll do better.</p>
              <p>Not just by saying it here…</p>
              <p>but by showing you.</p>
            </div>

            <div className="pt-6 text-right">
              <span className="text-3xl sm:text-4xl text-rose-400 select-none animate-pulse">
                ❤️
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
