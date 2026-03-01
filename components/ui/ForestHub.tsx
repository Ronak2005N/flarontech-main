"use client";
import React from 'react';
import Link from 'next/link';

export default function ForestHub() {
  return (
    <section id="forest-hub" className="relative w-full bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
      {/* Video background — rotated from portrait to landscape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-[100vw] min-h-[100vh] object-cover opacity-[0.18]"
          style={{
            transform: 'translate(-50%, -50%) rotate(90deg) scale(1.8)',
            transformOrigin: 'center center',
          }}
        >
          <source src="/videos/translucent-spheres.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-sans mb-4">coming soon</p>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
          THE <span className="text-[#96BF8A]">FOREST</span> HUB
        </h3>
        <p className="text-white/40 font-sans text-sm md:text-base tracking-wide max-w-2xl mb-10">
          A thematic digital ecosystem where every member of Flarontech has a page — Dragon, Elephant, Falcon, Fox, Panther.
          Five spirits, five unique experiences, one interconnected forest.
        </p>

        {/* Spirit Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {[
            { name: 'Dragon', logo: '/images/dragon.png', color: '#e62e2d', active: true, href: '/dragon' },
            { name: 'Elephant', logo: '/images/elephant.png', color: '#6366f1', active: false, href: null },
            { name: 'Falcon', logo: '/images/falcon.png', color: '#f59e0b', active: false, href: null },
            { name: 'Fox', logo: '/images/fox.png', color: '#f97316', active: false, href: null },
            { name: 'Panther', logo: '/images/panthor.png', color: '#00D98B', active: true, href: '/panther' },
          ].map((spirit, i) => {
            const CardWrapper = spirit.href
              ? ({ children }: { children: React.ReactNode }) => (
                <Link href={spirit.href!} className="block">{children}</Link>
              )
              : ({ children }: { children: React.ReactNode }) => <>{children}</>;
            return (
              <CardWrapper key={i}>
                <div
                  className={`relative flex flex-col items-center rounded-2xl border p-5 md:p-6 w-[120px] md:w-[140px] transition-all duration-500 ${spirit.active
                      ? 'border-white/20 bg-white/[0.04] shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-white/40 hover:scale-105 cursor-pointer'
                      : 'border-white/5 bg-white/[0.01] opacity-50'
                    }`}
                >
                  <img src={spirit.logo} alt={spirit.name} className="w-10 h-10 md:w-12 md:h-12 object-contain mb-2" />
                  <span className="text-xs font-heading text-white tracking-wider">{spirit.name}</span>
                  {spirit.active && (
                    <span className="absolute -top-2 -right-2 text-[8px] font-mono uppercase bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 px-2 py-0.5 rounded-full">
                      Live
                    </span>
                  )}
                  {!spirit.active && (
                    <span className="text-[8px] font-mono uppercase text-white/20 mt-1">Coming Soon</span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        <p className="text-white/25 font-sans text-xs tracking-widest uppercase">
          Rooted in Innovation. Powered by Vision.
        </p>
      </div>
    </section>
  );
}
