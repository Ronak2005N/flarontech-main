'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
  index: string;
  role: string;
  org: string;
  period: string;
  type: string;
  bullets: string[];
  tags: string[];
  accentColor: string;
}

const TIMELINE: TimelineEntry[] = [
  {
    index: '01',
    role: 'Full Stack Developer & CDO',
    org: 'Flarontech',
    period: 'Jul 2025 – Present',
    type: 'STARTUP',
    bullets: [
      'Building the Flarontech web platform from the ground up — Next.js, PostgreSQL, Node.js',
      'Architected and shipped the company marketing site with Three.js, GSAP and Tailwind',
      'Own the entire frontend stack and backend API design for internal tools',
      'Also lead the visual identity — brand system, design tokens and motion language',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Three.js', 'GSAP'],
    accentColor: 'var(--p-accent)',
  },
  {
    index: '02',
    role: 'Full Stack Developer',
    org: 'Freelance',
    period: 'Jan 2025 – Present',
    type: 'FREELANCE',
    bullets: [
      'End-to-end web application delivery for clients across tech and services sectors',
      'From requirements to deployed product: Next.js frontend, REST API, database, hosting',
      'Specialises in performant, animated storefronts and SaaS MVPs',
    ],
    tags: ['Next.js', 'React', 'PostgreSQL', 'Vercel', 'Tailwind'],
    accentColor: 'var(--p-accent)',
  },
  {
    index: '03',
    role: 'Web Dev Team Member',
    org: 'Blue Screen Programming Club',
    period: 'Sep 2024 – Present',
    type: 'COMMUNITY',
    bullets: [
      'Built and maintained the club website and event registration systems',
      'Delivered landing pages and tech portals for college fest events',
      'Mentored junior members on modern web development practices',
    ],
    tags: ['React', 'Next.js', 'Tailwind', 'Community'],
    accentColor: 'var(--p-accent)',
  },
  {
    index: '04',
    role: 'BTech Computer Science',
    org: 'Hindustan University',
    period: 'Aug 2023 – Dec 2027',
    type: 'EDUCATION',
    bullets: [
      'Pursuing BTech in Computer Science with strong fundamentals in DSA, OS, and Networking',
      'Engineering background provides the architectural thinking that shapes every system I build',
    ],
    tags: ['BTech CS', 'DSA', 'Systems', 'Networking'],
    accentColor: 'var(--p-accent)',
  },
];

function ExperienceCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <div
      className="sticky will-change-transform w-full"
      style={{ top: `${90 + index * 24}px`, zIndex: index + 1 }}
    >
      <div
        className="relative w-full border-2 bg-[var(--p-surface)] p-7 md:p-9 transition-all duration-300"
        style={{
          borderColor: entry.accentColor,
          boxShadow: `6px 6px 0 ${entry.accentColor}`,
        }}
      >
        {/* Top bar */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span
              className="font-mono font-black text-xl md:text-2xl"
              style={{ color: entry.accentColor }}
            >
              {entry.index}
            </span>
            <div
              className="w-0.5 h-10 opacity-20"
              style={{ backgroundColor: entry.accentColor }}
            />
            <div>
              <h3 className="font-heading text-[var(--p-text)] text-base md:text-xl uppercase tracking-wide leading-tight">
                {entry.role}
              </h3>
              <p className="text-xs font-mono tracking-[0.2em] mt-1" style={{ color: entry.accentColor }}>
                {entry.org}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span
              className="text-[9px] font-mono font-black tracking-[0.2em] uppercase border px-2 py-0.5"
              style={{ borderColor: entry.accentColor, color: entry.accentColor }}
            >
              {entry.type}
            </span>
            <span className="text-[9px] font-mono tracking-[0.15em] text-[var(--p-text-subtle)]">{entry.period}</span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-6 pl-2">
          {entry.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-sans text-[var(--p-text-muted)] leading-relaxed">
              <span
                className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                style={{ backgroundColor: entry.accentColor }}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono uppercase tracking-[0.15em] px-2 py-0.5 border border-white/10 text-[var(--p-text-subtle)] bg-white/3"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card number absolute bg */}
        <span
          className="absolute bottom-4 right-6 font-heading text-7xl font-black select-none pointer-events-none opacity-[0.04]"
          style={{ color: entry.accentColor }}
        >
          {entry.index}
        </span>
      </div>
    </div>
  );
}

export default function PantherExperience() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      className="relative w-full border-t-2 overflow-hidden py-24 md:py-36"
      style={{ background: 'var(--p-bg)', borderColor: 'var(--p-border)' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div ref={headerRef} className="flex items-start gap-4 mb-16 opacity-0">
          <div className="w-2 h-10 bg-[var(--p-accent)] shadow-[2px_2px_0_#000] mt-1" />
          <div>
            <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-[var(--p-accent)] mb-1">THE TIMELINE</p>
            <h2 className="font-heading text-[var(--p-text)] text-2xl md:text-4xl uppercase tracking-wide">
              EXPERIENCE &amp; EDUCATION
            </h2>
          </div>
        </div>

        {/* Sticky stack cards */}
        <div className="flex flex-col gap-5">
          {TIMELINE.map((entry, i) => (
            <ExperienceCard key={entry.index} entry={entry} index={i} />
          ))}
        </div>

        {/* Bottom spacer to allow last card to un-stick */}
        <div className="h-32" />
      </div>
    </section>
  );
}
