import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquareHeart, Users, Compass, Flame, CheckCircle2 } from 'lucide-react';

export default function Section5Cards() {
  const cards = [
    {
      id: 1,
      text: "You matter to me ❤️",
      subtext: "Before everything else, you are always the one I hold close.",
      icon: Heart,
      accent: "text-rose-400",
    },
    {
      id: 2,
      text: "Your feelings matter to me.",
      subtext: "If you are hurt or sad, it matters deeply to me — never something to brush off.",
      icon: MessageSquareHeart,
      accent: "text-rose-300",
    },
    {
      id: 3,
      text: "I don't want you to feel alone when you're with me.",
      subtext: "Being with me should feel like safety and warmth, not loneliness.",
      icon: Users,
      accent: "text-amber-200",
    },
    {
      id: 4,
      text: "I'll try to communicate better.",
      subtext: "No more leaving you wondering or guessing what's on my mind.",
      icon: Compass,
      accent: "text-rose-300",
    },
    {
      id: 5,
      text: "I'll make more effort.",
      subtext: "Intentional time, thoughtful gestures, and real presence.",
      icon: Flame,
      accent: "text-rose-400",
    },
    {
      id: 6,
      text: "And I'll prove it through my actions.",
      subtext: "Because you deserve consistency, not just pretty promises.",
      icon: CheckCircle2,
      accent: "text-emerald-300",
    },
  ];

  return (
    <section 
      id="what-you-should-know" 
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-4xl w-full mx-auto space-y-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-rose-400/80">
            Truths I Hold Close
          </span>
          <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-semibold text-rose-100">
            What I Want You To Know
          </h2>
          <p className="text-sm sm:text-base text-rose-300/70 max-w-lg mx-auto font-light">
            These are not light words — they are promises I intend to stand by.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-rose-300/15 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-950/70 border border-rose-400/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className={`w-5 h-5 ${card.accent}`} />
                  </div>
                  <h3 className="font-serif-romantic text-lg sm:text-xl text-rose-100 font-medium leading-snug mb-2">
                    {card.text}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-rose-300/70 font-light mt-2 leading-relaxed">
                  {card.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
