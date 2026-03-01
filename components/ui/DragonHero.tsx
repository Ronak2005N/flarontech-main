import React from 'react';

export default function DragonHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          filter: 'brightness(0.6) contrast(1.2)'
        }}
      >
        <source src="/assets/Dragon animation (1).mp4" type="video/mp4" />
      </video>

      {/* Red Glow Overlay (from futuristic hero style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-red-900/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
        <h1 
          className="text-6xl md:text-8xl font-bold uppercase tracking-widest text-white shrink-0 glitch-text"
          style={{ fontFamily: 'Calgone, sans-serif' }}
        >
          THE DRAGON
        </h1>
        <p className="text-xl md:text-2xl text-red-500 font-medium tracking-wide">
          AI Generalist · Builder of Anything
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-sm uppercase tracking-widest text-white/50">Scroll to explore</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
          <path d="M11 5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 12L11 17L16 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
}
