import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 1600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0306] text-rose-100"
        >
          {/* Subtle glowing ambient behind heart */}
          <div className="absolute w-48 h-48 rounded-full bg-rose-600/20 blur-3xl animate-pulse" />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            className="relative z-10 mb-6"
          >
            <div className="p-4 rounded-full glass-card border border-rose-400/30 shadow-[0_0_35px_rgba(225,29,72,0.35)]">
              <Heart className="w-9 h-9 text-rose-400 fill-rose-500/30" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center z-10 px-4"
          >
            <p className="font-serif-romantic text-lg sm:text-xl text-rose-200/90 tracking-wide">
              Hey You…
            </p>
            <p className="text-xs sm:text-sm text-rose-300/50 mt-1 font-light tracking-widest uppercase">
              Opening a heartfelt message
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
