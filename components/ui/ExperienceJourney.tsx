"use client";
import React from 'react';

interface CardData {
  number: string;
  role: string;
  org: string;
  duration: string;
  bullets: string[];
  tags: string[];
  accentColor: string;
  tagBg: string;
  borderColor: string;
}

const cards: CardData[] = [
  {
    number: '01',
    role: 'Lead AI/ML Engineer & Team Lead',
    org: 'Imitate Labs',
    duration: 'Jul 2025 – Present',
    bullets: [
      'Architected the full-stack Creator Style Replication AI using CNN-ViT + LoRA',
      'Led cross-functional engineering team from zero to production MVP',
      'Built internal OS dashboard (IL-Internal-OS) deployed on Vercel',
    ],
    tags: ['PyTorch', 'LoRA', 'FastAPI', 'Next.js', 'Docker', 'MLOps'],
    accentColor: 'border-l-[#e62e2d]',
    borderColor: '#e62e2d',
    tagBg: 'bg-[#e62e2d]/10 text-[#e62e2d]',
  },
  {
    number: '02',
    role: 'AI/ML Lead',
    org: 'Blue Screen Programming Club',
    duration: 'Sep 2025 – Present',
    bullets: [
      'Directing AI/ML initiatives and technical mentorship across 200+ members',
      'Curating event formats, workshops and hands-on challenge programs',
      'Bridging academic AI curriculum with real-world project delivery',
    ],
    tags: ['Leadership', 'AI/ML', 'Community', 'Teaching'],
    accentColor: 'border-l-[#ffc107]',
    borderColor: '#ffc107',
    tagBg: 'bg-[#ffc107]/10 text-[#ffc107]',
  },
  {
    number: '03',
    role: 'AI R&D Intern & Project Lead',
    org: 'Hindustan University -QritiQ',
    duration: 'May – Jul 2025',
    bullets: [
      'Led university-funded QritiQ: AI self-intro evaluation with 95% transcription accuracy',
      'Integrated Whisper + Ollama + Mistral/Llama pipeline end-to-end',
      'Achieved 66% reduction in manual evaluation time across 800+ student assessments',
    ],
    tags: ['Whisper', 'Ollama', 'Mistral', 'FastAPI', 'Research'],
    accentColor: 'border-l-[#ff5722]',
    borderColor: '#ff5722',
    tagBg: 'bg-[#ff5722]/10 text-[#ff7849]',
  },
  {
    number: '04',
    role: 'AI with Python Intern',
    org: 'COTHON Solutions',
    duration: 'Oct – Nov 2024',
    bullets: [
      'Delivered AI automation scripts and data pipelines in Python under production timelines',
      'Built ML prototypes covering NLP, classification, and generative tasks',
      'First professional AI engineering experience -set the trajectory for all future roles',
    ],
    tags: ['Python', 'NLP', 'Classification', 'Automation'],
    accentColor: 'border-l-[#a855f7]',
    borderColor: '#a855f7',
    tagBg: 'bg-[#a855f7]/10 text-[#c084fc]',
  },
  {
    number: '05',
    role: 'Dual-Degree Scholar',
    org: 'IIT Madras + Hindustan University',
    duration: 'Aug 2023 – Dec 2027',
    bullets: [
      'BS Data Science & Applications -IIT Madras (Jan 2025 – Dec 2027)',
      'BTech Computer Science -Hindustan University (9.63 CGPA · 2nd University Rank)',
      'Pinnacle Performer Award · Excellence in Academia · Active researcher & builder',
    ],
    tags: ['IIT Madras', 'BTech CS', 'Data Science', '9.63 CGPA', 'Rank 2'],
    accentColor: 'border-l-[#10b981]',
    borderColor: '#10b981',
    tagBg: 'bg-[#10b981]/10 text-[#6ee7b7]',
  },
];

function ExperienceCard({ card, index }: { card: CardData; index: number }) {
  return (
    <div
      className="sticky w-full will-change-transform"
      style={{
        top: `${80 + index * 28}px`,
        zIndex: index + 1,
      }}
    >
      <div
        className={`bg-[#121318] border border-white/5 border-l-4 ${card.accentColor} rounded-2xl md:rounded-3xl p-5 md:p-7 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.7)] backdrop-blur-md transition-transform duration-300`}
        style={{
          transform: `scale(${1 - index * 0.02})`,
          transformOrigin: 'top center',
        }}
      >
        <div className="flex flex-col gap-4 relative">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <span className="block text-[9px] md:text-[10px] font-mono text-white/25 tracking-[0.25em] uppercase mb-2">
                {card.number} / 05
              </span>
              <h4 className="font-heading text-lg md:text-xl lg:text-2xl text-white leading-tight tracking-tight">
                {card.role}
              </h4>
              <p className="mt-2 font-sans text-sm md:text-base font-semibold" style={{ color: card.borderColor }}>
                {card.org}
              </p>
            </div>
            <span className="shrink-0 text-[9px] md:text-[10px] font-mono text-white/40 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg w-fit whitespace-nowrap mt-1 sm:mt-0">
              {card.duration}
            </span>
          </div>

          {/* Bullets */}
          <ul className="flex flex-col gap-2.5">
            {card.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-xs md:text-sm text-white/55 font-sans leading-relaxed">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-white/30" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[8px] md:text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md font-mono font-medium ${card.tagBg}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceJourney() {
  return (
    <section id="experience" className="relative w-full bg-[#0a0a0c] border-t border-white/5">

      {/* Section header */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-sans mb-3">the journey</p>
        <h3 className="text-3xl md:text-5xl font-heading text-white">
          EXPERIENCE &amp; <span className="text-[#e62e2d]">ROLES</span>
        </h3>
        <p className="mt-4 text-white/40 font-sans text-sm tracking-wide max-w-xl">
          From first internship to leading AI teams -every card is a level unlocked.
        </p>
      </div>

      {/* Desktop Layout: two columns */}
      <div className="hidden lg:block w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="flex items-start gap-12">
          {/* Left: Sticky Video */}
          <div className="w-5/12 sticky top-24 h-[70vh] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
              <source src="/videos/dominoes-ambient.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="font-heading text-2xl text-white mb-2 drop-shadow-md">The Path Forward</h4>
              <p className="font-sans text-sm text-white/70 drop-shadow-lg">Watching the dominoes fall, building momentum with every project and team.</p>
            </div>
          </div>

          {/* Right: CSS Sticky Stacking Cards */}
          <div className="w-7/12 flex flex-col gap-6 pb-32">
            {cards.map((card, i) => (
              <ExperienceCard key={card.number} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout: stacked vertically, video NOT sticky */}
      <div className="lg:hidden w-full px-4 md:px-8 pb-16">
        {/* Video - static, scrolls normally */}
        <div className="w-full h-[45vw] min-h-[200px] max-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-8">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/videos/dominoes-ambient.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
        </div>

        {/* Cards - CSS sticky stacking */}
        <div className="flex flex-col gap-4 pb-24">
          {cards.map((card, i) => (
            <div
              key={card.number}
              className="sticky w-full will-change-transform"
              style={{
                top: `${60 + i * 20}px`,
                zIndex: i + 1,
              }}
            >
              <div
                className={`bg-[#121318] border border-white/5 border-l-4 ${card.accentColor} rounded-2xl p-4 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md`}
                style={{
                  transform: `scale(${1 - i * 0.015})`,
                  transformOrigin: 'top center',
                }}
              >
                <div className="flex flex-col gap-3 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span className="block text-[8px] font-mono text-white/25 tracking-[0.25em] uppercase mb-1">
                        {card.number} / 05
                      </span>
                      <h4 className="font-heading text-base md:text-lg text-white leading-tight">
                        {card.role}
                      </h4>
                      <p className="mt-1 font-sans text-sm font-semibold" style={{ color: card.borderColor }}>
                        {card.org}
                      </p>
                    </div>
                    <span className="shrink-0 text-[8px] font-mono text-white/40 bg-white/5 border border-white/10 px-2 py-1 rounded-md w-fit whitespace-nowrap">
                      {card.duration}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {card.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-xs text-white/50 font-sans leading-relaxed">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-white/30" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {card.tags.map((tag) => (
                      <span key={tag} className={`text-[7px] uppercase tracking-wider px-2 py-0.5 rounded font-mono font-medium ${card.tagBg}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
