"use client";
import React from 'react';
import Link from 'next/link';

const SPIRITS = [
  { name: 'Dragon',    logo: '/images/dragon.png',   color: '#e62e2d', active: true,  href: '/dragon' },
  { name: 'Elephant',  logo: '/images/elephant.png', color: '#6366f1', active: false, href: null },
  { name: 'Falcon',    logo: '/images/falcon.png',   color: '#f59e0b', active: false, href: null },
  { name: 'Fox',       logo: '/images/fox.png',      color: '#f97316', active: false, href: null },
  { name: 'Panther',   logo: '/images/panthor.png',  color: '#00D98B', active: true,  href: '/panther' },
];

export default function PantherForestHub() {
  return (
    <section
      id="forest-hub"
      className="relative w-full overflow-hidden border-t-2"
      style={{ background: 'var(--p-bg)', borderColor: 'var(--p-border)' }}
    >
      {/* Accent grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--p-border) 1px, transparent 1px), linear-gradient(90deg, var(--p-border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.35,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 md:py-36">
        
        {/* Label */}
        <span
          className="inline-block font-mono text-[9px] tracking-[0.4em] uppercase px-3 py-1 border mb-6"
          style={{ color: 'var(--p-accent)', borderColor: 'var(--p-accent)', background: 'var(--p-accent-glow)' }}
        >
          FLARONTECH ECOSYSTEM
        </span>

        {/* Heading */}
        <h2
          className="font-heading text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-5 select-none"
          style={{ color: 'var(--p-text)' }}
        >
          THE{' '}
          <span
            className="inline-block border-b-4 pb-1"
            style={{ color: 'var(--p-accent)', borderColor: 'var(--p-accent)' }}
          >
            FOREST
          </span>
          {' '}HUB
        </h2>

        {/* Sub */}
        <p
          className="font-mono text-sm md:text-base tracking-wide max-w-2xl mb-14 leading-relaxed"
          style={{ color: 'var(--p-text-subtle)' }}
        >
          A thematic digital ecosystem where every member of Flarontech has a page —{' '}
          <span style={{ color: 'var(--p-accent)' }}>Dragon, Elephant, Falcon, Fox, Panther.</span>{' '}
          Five spirits. Five unique experiences. One interconnected forest.
        </p>

        {/* Spirit cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14">
          {SPIRITS.map((spirit, i) => {
            const inner = (
              <div
                key={i}
                className={`relative flex flex-col items-center p-5 md:p-6 w-[120px] md:w-[144px] border-2 transition-all duration-300 ${
                  spirit.active
                    ? 'hover:scale-105 cursor-pointer hover:-translate-y-1'
                    : 'opacity-40'
                }`}
                style={{
                  background: spirit.active ? 'var(--p-surface)' : 'var(--p-bg)',
                  borderColor: spirit.active ? spirit.color : 'var(--p-border)',
                  boxShadow: spirit.active ? `4px 4px 0 ${spirit.color}` : 'none',
                }}
              >
                <img
                  src={spirit.logo}
                  alt={spirit.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain mb-3"
                />
                <span
                  className="font-heading text-xs tracking-[0.2em] uppercase"
                  style={{ color: spirit.active ? spirit.color : 'var(--p-text-faint)' }}
                >
                  {spirit.name}
                </span>

                {spirit.active && spirit.name !== 'Panther' && (
                  <span
                    className="absolute -top-2.5 -right-2.5 text-[8px] font-mono uppercase px-2 py-0.5 border"
                    style={{
                      background: `${spirit.color}22`,
                      color: spirit.color,
                      borderColor: `${spirit.color}55`,
                    }}
                  >
                    LIVE
                  </span>
                )}
                {spirit.active && spirit.name === 'Panther' && (
                  <span
                    className="absolute -top-2.5 -right-2.5 text-[8px] font-mono uppercase px-2 py-0.5 border"
                    style={{
                      background: 'var(--p-accent-glow)',
                      color: 'var(--p-accent)',
                      borderColor: 'var(--p-border-hov)',
                    }}
                  >
                    YOU ARE HERE
                  </span>
                )}
                {!spirit.active && (
                  <span
                    className="text-[8px] font-mono uppercase mt-1"
                    style={{ color: 'var(--p-text-faint)' }}
                  >
                    Soon
                  </span>
                )}
              </div>
            );

            return spirit.href && spirit.name !== 'Panther' ? (
              <Link key={i} href={spirit.href} className="block">
                {inner}
              </Link>
            ) : (
              <React.Fragment key={i}>{inner}</React.Fragment>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <p
          className="font-mono text-[10px] tracking-[0.4em] uppercase"
          style={{ color: 'var(--p-text-faint)' }}
        >
          Rooted in Innovation. Powered by Vision.
        </p>
      </div>
    </section>
  );
}
