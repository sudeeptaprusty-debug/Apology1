import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, HeartHandshake, Sparkles } from 'lucide-react';

export default function Section8Promises() {
  const initialPromises = [
    { id: 1, text: "Communicate instead of disappearing", checked: true },
    { id: 2, text: "Make time even when I'm busy", checked: true },
    { id: 3, text: "Listen when you're upset", checked: true },
    { id: 4, text: "Never make you feel like you're asking for too much", checked: true },
    { id: 5, text: "Appreciate the little things", checked: true },
    { id: 6, text: "Be there when you need me", checked: true },
    { id: 7, text: "Show you that you matter", checked: true },
  ];

  const [promises, setPromises] = useState(() => {
    try {
      const saved = localStorage.getItem('apology_promises_state');
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialPromises;
  });

  useEffect(() => {
    try {
      localStorage.setItem('apology_promises_state', JSON.stringify(promises));
    } catch {}
  }, [promises]);

  const togglePromise = (id) => {
    setPromises((prev) =>
      prev.map((p) => (p.id === id ? { ...p, checked: !p.checked } : p))
    );
  };

  const checkedCount = promises.filter((p) => p.checked).length;

  return (
    <section 
      id="promises" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-xl w-full mx-auto space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-400/20 text-rose-300 text-xs tracking-wider uppercase">
            <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
            <span>Our Little Promise</span>
          </div>

          <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-semibold text-rose-100">
            Things I'll try to do better ❤️
          </h2>
          <p className="text-xs sm:text-sm text-rose-300/70 font-light max-w-sm mx-auto">
            Click any promise to view the commitment sealed for you ({checkedCount}/7 active).
          </p>
        </motion.div>

        {/* Interactive Checklist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-rose-300/20 shadow-2xl space-y-3"
        >
          {promises.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => togglePromise(item.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center gap-4 select-none ${
                item.checked
                  ? 'bg-gradient-to-r from-rose-950/50 to-rose-900/30 border-rose-400/35 text-rose-100 shadow-[0_2px_12px_rgba(225,29,72,0.15)]'
                  : 'bg-black/20 border-white/5 text-rose-300/60 hover:border-rose-300/20'
              }`}
            >
              {/* Checkbox Box */}
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                  item.checked
                    ? 'bg-rose-500 border border-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.6)]'
                    : 'border border-rose-300/30 bg-black/40'
                }`}
              >
                {item.checked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </motion.div>
                )}
              </div>

              {/* Text */}
              <span
                className={`text-sm sm:text-base font-medium transition-all ${
                  item.checked ? 'text-rose-100' : 'text-rose-300/50'
                }`}
              >
                {item.text}
              </span>
            </motion.div>
          ))}

          {/* Bottom Callout */}
          <div className="pt-6 border-t border-rose-400/15 text-center space-y-1">
            <p className="font-serif-romantic text-base sm:text-lg text-rose-200 font-medium">
              These aren't just website promises.
            </p>
            <p className="text-xs sm:text-sm text-rose-300/70 font-light italic">
              They're things I want to work on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
