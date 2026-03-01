'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiGit,
  SiVercel,
  SiFigma,
  SiGreensock,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { icon: SiNextdotjs,   label: 'Next.js',     color: '#cccccc' },
  { icon: SiReact,       label: 'React',        color: '#61DAFB' },
  { icon: SiTypescript,  label: 'TypeScript',   color: '#3178C6' },
  { icon: SiNodedotjs,   label: 'Node.js',      color: '#339933' },
  { icon: SiPython,      label: 'Python',       color: '#3776AB' },
  { icon: SiFastapi,     label: 'FastAPI',      color: '#009688' },
  { icon: SiPostgresql,  label: 'PostgreSQL',   color: '#4169E1' },
  { icon: SiMongodb,     label: 'MongoDB',      color: '#47A248' },
  { icon: SiDocker,      label: 'Docker',       color: '#2496ED' },
  { icon: SiTailwindcss, label: 'Tailwind',     color: '#06B6D4' },
  { icon: SiGit,         label: 'Git',          color: '#F05032' },
  { icon: SiVercel,      label: 'Vercel',       color: '#cccccc' },
  { icon: SiFigma,       label: 'Figma',        color: '#F24E1E' },
  { icon: SiGreensock,   label: 'GSAP',         color: '#88CE02' },
  { icon: TbBrandThreejs,label: 'Three.js',     color: '#cccccc' },
];

const DOMAINS = [
  { code: 'FS',    title: 'Full-Stack Dev',     desc: 'Next.js · React · TypeScript · Node.js · REST APIs · WebSockets',      tier: 'EXPERT' },
  { code: 'FE',    title: 'Frontend & Motion',  desc: 'Three.js · GSAP · Framer Motion · Tailwind · CSS · WebGL',            tier: 'EXPERT' },
  { code: 'BE',    title: 'Backend & APIs',     desc: 'Node.js · FastAPI · Python · Express · Auth · Webhooks',               tier: 'PROFICIENT' },
  { code: 'DB',    title: 'Databases',          desc: 'PostgreSQL · MongoDB · Prisma · Redis · Data Modelling',               tier: 'PROFICIENT' },
  { code: 'OPS',   title: 'DevOps & Deploy',    desc: 'Docker · Vercel · GitHub Actions · CI/CD · Linux',                    tier: 'PROFICIENT' },
  { code: 'DES',   title: 'Design',             desc: 'Figma · Adobe Suite · UI/UX · Brand Identity · Motion Design',         tier: 'PROFICIENT' },
];

const TIER_STYLES: Record<string, string> = {
  EXPERT: 'bg-[var(--p-accent)] text-black border-[var(--p-accent)]',
  PROFICIENT: 'bg-transparent text-[var(--p-accent)] border-[var(--p-accent)]',
  LEARNING: 'bg-transparent text-[var(--p-text-muted)] border-white/20',
};

export default function PantherSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const domainRef = useRef<HTMLDivElement>(null);

  // Infinite marquee via GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = marqueeRef.current?.querySelector('.marquee-track');
      if (!track) return;
      const totalWidth = (track as HTMLElement).scrollWidth / 2;
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -totalWidth,
          duration: 28,
          ease: 'none',
          repeat: -1,
        }
      );

      // Header reveal
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

      // Domain cards stagger
      const cards = domainRef.current?.querySelectorAll('.domain-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: domainRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="arsenal"
      ref={sectionRef}
      className="relative w-full border-t-2 overflow-hidden py-24 md:py-36"
      style={{ background: 'var(--p-bg)', borderColor: 'var(--p-border)' }}
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--p-accent-dim)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-16 opacity-0">
          <div className="flex items-start gap-4">
            <div className="w-2 h-10 bg-[var(--p-accent)] shadow-[2px_2px_0_#000] mt-1" />
            <div>
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-[var(--p-accent)] mb-1">THE ARSENAL</p>
              <h2 className="font-heading text-[var(--p-text)] text-2xl md:text-4xl uppercase tracking-wide">
                TOOLS &amp; DOMAINS
              </h2>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 border-2 border-[var(--p-border)] px-4 py-2 bg-[var(--p-surface)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--p-accent)] animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[var(--p-accent)]/60">{SKILLS.length} TECHNOLOGIES</span>
          </div>
        </div>

        {/* MARQUEE */}
        <div ref={marqueeRef} className="overflow-hidden mb-16 border-y-2 border-[var(--p-border)] py-6">
          <div className="marquee-track flex gap-10 w-max">
            {/* Double the list for seamless loop */}
            {[...SKILLS, ...SKILLS].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-default select-none min-w-[70px]">
                  <div className="w-14 h-14 border-2 border-[var(--p-text-faint)] bg-[var(--p-surface)] flex items-center justify-center group-hover:border-[var(--p-accent)] group-hover:shadow-[3px_3px_0_var(--p-shadow)] transition-all duration-200">
                    <Icon size={26} style={{ color: skill.color }} />
                  </div>
                  <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-[var(--p-text-subtle)] group-hover:text-[var(--p-accent)] transition-colors">
                    {skill.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Domain Grid */}
        <div ref={domainRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOMAINS.map((domain) => (
            <div
              key={domain.code}
              className="domain-card group relative border-2 border-[var(--p-border)] bg-[var(--p-surface)] p-6 hover:border-[var(--p-accent)] hover:shadow-[5px_5px_0_var(--p-shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-default opacity-0"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--p-text-subtle)]">[{domain.code}]</span>
                <span
                  className={`text-[8px] font-mono font-black tracking-[0.2em] uppercase px-2 py-0.5 border ${TIER_STYLES[domain.tier]}`}
                >
                  {domain.tier}
                </span>
              </div>

              <h3 className="font-heading text-[var(--p-text)] text-base tracking-wide mb-3 group-hover:text-[var(--p-accent)] transition-colors uppercase">
                {domain.title}
              </h3>
              <p className="text-[11px] font-sans text-[var(--p-text-subtle)] leading-relaxed group-hover:text-[var(--p-text-muted)] transition-colors">
                {domain.desc}
              </p>

              {/* Bottom corner accent */}
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[var(--p-border)] group-hover:border-[var(--p-accent)] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
