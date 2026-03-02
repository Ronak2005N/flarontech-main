"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const spirits = [
  { name: 'Dragon', logo: '/images/dragon.png', color: '#e62e2d', tagline: 'The Builder', active: true, href: '/dragon' },
  { name: 'Elephant', logo: '/images/elephant.png', color: '#64748b', tagline: 'The Strategist', active: true, href: '/elephant' },
  { name: 'Falcon', logo: '/images/falcon.png', color: '#f59e0b', tagline: 'The Visionary', active: false, href: null },
  { name: 'Fox', logo: '/images/fox.png', color: '#f97316', tagline: 'The Creative', active: true, href: '/fox' },
  { name: 'Panther', logo: '/images/panthor.png', color: '#00D98B', tagline: 'The Executor', active: true, href: '/panther' },
];

function SpiritCard({ spirit, index }: { spirit: typeof spirits[0]; index: number }) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={spirit.active ? { y: -6, transition: { duration: 0.25 } } : {}}
      className={`relative flex flex-col items-center rounded-2xl border p-6 md:p-8 w-[160px] md:w-[180px] transition-all duration-500 ${spirit.active
        ? 'bg-[#121318]/80 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] cursor-pointer'
        : 'bg-white/[0.02] opacity-60'
        }`}
      style={{
        borderColor: spirit.active ? `${spirit.color}25` : 'rgba(255,255,255,0.05)',
      }}
    >
      {/* Glow behind logo for active */}
      {spirit.active && (
        <div
          className="absolute top-8 w-16 h-16 rounded-full blur-xl opacity-20 pointer-events-none"
          style={{ background: spirit.color }}
        />
      )}

      {/* Logo */}
      <img
        src={spirit.logo}
        alt={spirit.name}
        className={`w-14 h-14 md:w-16 md:h-16 object-contain mb-3 relative z-10 transition-transform duration-500 ${spirit.active ? 'group-hover:scale-110' : 'grayscale'
          }`}
      />

      {/* Name */}
      <span className="text-sm font-heading text-white tracking-wider mb-1 relative z-10">
        {spirit.name}
      </span>

      {/* Tagline */}
      <span className="text-[10px] font-mono uppercase tracking-wider text-white/30 relative z-10">
        {spirit.tagline}
      </span>

      {/* Status badge */}
      {spirit.active ? (
        <span
          className="absolute -top-2 -right-2 text-[8px] font-mono uppercase px-2.5 py-1 rounded-full border flex items-center gap-1"
          style={{
            color: '#10b981',
            borderColor: 'rgba(16,185,129,0.3)',
            background: 'rgba(16,185,129,0.15)',
            boxShadow: '0 0 12px rgba(16,185,129,0.15)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          Live
        </span>
      ) : (
        <motion.span
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -right-2 text-[8px] font-mono uppercase px-2.5 py-1 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/10 text-[#f59e0b] flex items-center gap-1"
        >
          <Sparkles size={8} />
          Soon
        </motion.span>
      )}

      {/* Arrow for active */}
      {spirit.active && (
        <div
          className="mt-3 flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider relative z-10"
          style={{ color: `${spirit.color}80` }}
        >
          Enter <ArrowRight size={10} />
        </div>
      )}
    </motion.div>
  );

  if (spirit.href) {
    return <Link href={spirit.href} className="block group">{inner}</Link>;
  }
  return inner;
}

export default function ForestHub() {
  return (
    <section id="forest-hub" className="relative w-full bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
      {/* Video background — cartoon forest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.35]"
          style={{
            filter: 'brightness(0.9) saturate(0.9)',
          }}
        >
          <source src="/videos/vecteezy_cartoon-forest-animation-free-video_22653048.mp4" type="video/mp4" />
        </video>
        {/* Soft edge fade for readability — no color tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/70 via-transparent to-[#0a0a0c]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-mono tracking-[0.5em] uppercase text-white/40 block mb-4">
            The Ecosystem / 09
          </span>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
            THE <span className="text-[#96BF8A]">FOREST</span> HUB
          </h3>
          <p className="text-white/40 font-sans text-sm md:text-base tracking-wide max-w-2xl mx-auto mb-4">
            A thematic digital ecosystem where every member of Flarontech has a page — Dragon, Elephant, Falcon, Fox, Panther.
          </p>
          <p className="text-white/25 font-sans text-xs italic max-w-lg mx-auto mb-12">
            Five spirits, five unique experiences, one interconnected forest.
          </p>
        </motion.div>

        {/* Spirit Cards */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-6 mb-14">
          {spirits.map((spirit, i) => (
            <SpiritCard key={i} spirit={spirit} index={i} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/20 font-sans text-xs tracking-[0.3em] uppercase"
        >
          🌿 Rooted in Innovation. Powered by Vision. 🌿
        </motion.p>

        {/* Bottom gradient bleed into footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#060608] pointer-events-none z-20" />
      </div>
    </section>
  );
}
