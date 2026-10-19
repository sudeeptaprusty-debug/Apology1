import React, { useMemo } from 'react';

export default function BackgroundAmbient() {
  // Generate random particles once
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 4.3 + 7) % 95}%`,
      top: `${(i * 7.1 + 12) % 96}%`,
      size: (i % 3) + 2,
      duration: 12 + (i % 8) * 2,
      delay: (i % 5) * 1.5,
      opacity: 0.15 + (i % 4) * 0.08,
      isHeart: i % 4 === 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Burgundy & Rose Ambient Gradient Orbs */}
      <div 
        aria-hidden="true"
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#591024]/30 via-[#3a0b16]/15 to-transparent blur-[110px] animate-pulse-glow" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#450e1e]/25 via-[#230810]/20 to-transparent blur-[120px] animate-pulse-glow" 
        style={{ animationDelay: '4s' }}
      />
      <div 
        aria-hidden="true"
        className="absolute top-[45%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-[#9e1c3e]/10 via-[#d4af37]/5 to-transparent blur-[90px] pointer-events-none" 
      />

      {/* Floating subtle particles & tiny hearts */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 select-none"
          style={{
            left: p.left,
            top: p.top,
            animation: `softFloat ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.isHeart ? (
            <span 
              className="text-rose-300/40 select-none block"
              style={{ fontSize: `${p.size * 5 + 6}px` }}
            >
              ♥
            </span>
          ) : (
            <div
              className="rounded-full bg-rose-200/50 blur-[0.5px]"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: '0 0 6px rgba(254, 205, 211, 0.4)',
              }}
            />
          )}
        </div>
      ))}

      {/* Very faint film grain/vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,2,3,0.7)_100%)]" />
    </div>
  );
}
