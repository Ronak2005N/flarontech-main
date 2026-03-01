'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type ProjectStatus = 'LIVE' | 'BETA' | 'SHIPPED' | 'WIP';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
  status: ProjectStatus;
  category: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: '001',
    title: 'Flarontech Website',
    tagline: 'Motion-first marketing platform',
    description:
      'Full company website built from scratch. Next.js app router, Three.js WebGL hero, GSAP scroll sequences, dark neo-brutalist design system. Deployed on Vercel.',
    tags: ['Next.js', 'Three.js', 'GSAP', 'TypeScript', 'Tailwind', 'Vercel'],
    link: 'https://flarontech.com',
    status: 'LIVE',
    category: 'WEBSITE',
    featured: true,
  },
  {
    id: '002',
    title: 'Panther Portfolio',
    tagline: 'This site — interactive dev portfolio',
    description:
      'Full interactive portfolio built with Next.js, React Three Fiber, GSAP, and Tailwind. Custom WebGL GridMatrix, dark/light theme system, Space Grotesk typography.',
    tags: ['Next.js', 'R3F', 'GSAP', 'Three.js', 'TypeScript', 'Tailwind'],
    status: 'LIVE',
    category: 'WEBSITE',
    featured: true,
  },
  {
    id: '003',
    title: 'Event Registration Portal',
    tagline: 'Full-stack college event platform',
    description:
      'End-to-end event management system: registration, QR ticket generation, admin dashboard, email confirmations. Built for college tech fests.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Node.js', 'Vercel'],
    status: 'SHIPPED',
    category: 'FULL-STACK',
  },
  {
    id: '004',
    title: 'Flarontech Internal Tools',
    tagline: 'Team ops dashboard',
    description:
      'Web-based internal dashboard for the Flarontech team. Centralises project tracking, client management and team coordination in one Next.js app.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
    status: 'LIVE',
    category: 'FULL-STACK',
  },
  {
    id: '005',
    title: 'Client Web Apps',
    tagline: 'Freelance full-stack builds',
    description:
      'Multiple client projects: landing pages, e-commerce storefronts, SaaS dashboards. End-to-end delivery from design wireframe to deployed, production-ready product.',
    tags: ['Next.js', 'Tailwind', 'PostgreSQL', 'Stripe', 'Vercel'],
    status: 'LIVE',
    category: 'FREELANCE',
  },
  {
    id: '006',
    title: 'WebGL Scroll Experience',
    tagline: 'Three.js + GSAP canvas demo',
    description:
      'Experimental scroll-driven 3D experience: parallax depth layers, SVG morphing, particle dispersion on scroll. A playground for pushing browser rendering limits.',
    tags: ['Three.js', 'GSAP', 'WebGL', 'TypeScript', 'React Three Fiber'],
    status: 'WIP',
    category: 'MOTION',
  },
];

const STATUS_STYLES: Record<ProjectStatus, string> = {
  LIVE: 'bg-[var(--p-accent)] text-black border-[var(--p-accent)]',
  BETA: 'bg-transparent text-[var(--p-accent)] border-[var(--p-accent)]',
  SHIPPED: 'bg-transparent text-[var(--p-text-muted)] border-white/30',
  WIP: 'bg-transparent text-[var(--p-text-subtle)] border-white/15',
};

export default function PantherProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = activeCategory === 'ALL' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Animate cards when filtered list changes
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.project-card');
    if (!cards || cards.length === 0) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.5, ease: 'power3.out', clearProps: 'all' }
    );
  }, [activeCategory]);

  return (
    <section
      id="vault"
      ref={sectionRef}
      className="relative w-full border-t-2 overflow-hidden py-24 md:py-36"
      style={{ background: 'var(--p-bg)', borderColor: 'var(--p-border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Header */}
        <div ref={headerRef} className="flex flex-wrap items-end justify-between gap-6 mb-12 opacity-0">
          <div className="flex items-start gap-4">
            <div className="w-2 h-10 bg-[var(--p-accent)] shadow-[2px_2px_0_#000] mt-1" />
            <div>
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-[var(--p-accent)] mb-1">THE VAULT</p>
              <h2 className="font-heading text-[var(--p-text)] text-2xl md:text-4xl uppercase tracking-wide">
                WORK &amp; PROJECTS
              </h2>
              <p className="mt-2 text-xs font-sans text-[var(--p-text-subtle)] tracking-wide max-w-md">
                {PROJECTS.length} projects. Every pixel deliberate.
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="border-2 border-[var(--p-border)] bg-[var(--p-surface)] px-5 py-3 text-center shadow-[3px_3px_0_var(--p-accent-glow)]">
            <span className="font-heading text-3xl text-[var(--p-accent)] block">{PROJECTS.length}</span>
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[var(--p-text-subtle)]">TOTAL WORKS</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[9px] font-mono font-black tracking-[0.2em] uppercase px-3 py-1.5 border-2 transition-all duration-150 ${
                activeCategory === cat
                  ? 'border-[var(--p-accent)] bg-[var(--p-accent)] text-black shadow-[3px_3px_0_#000]'
                  : 'border-white/15 text-[var(--p-text-muted)] hover:border-[var(--p-accent)]/50 hover:text-[var(--p-accent)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative flex flex-col border-2 bg-[var(--p-surface)] p-6 transition-all duration-200 cursor-default ${
                project.featured
                  ? 'border-[var(--p-accent)]/50 hover:border-[var(--p-accent)] hover:shadow-[5px_5px_0_var(--p-shadow)]'
                  : 'border-[var(--p-text-faint)] hover:border-[var(--p-accent)]/50 hover:shadow-[4px_4px_0_var(--p-accent-glow)]'
              } hover:-translate-x-0.5 hover:-translate-y-0.5`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono text-[var(--p-text-subtle)]">{project.id}</span>
                  <span className="text-[8px] font-mono font-black tracking-[0.2em] uppercase border border-[var(--p-text-faint)] text-[var(--p-text-subtle)] px-1.5 py-0.5">
                    {project.category}
                  </span>
                </div>
                <span className={`text-[8px] font-mono font-black tracking-[0.2em] uppercase border px-1.5 py-0.5 ${STATUS_STYLES[project.status]}`}>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-[var(--p-text)] text-lg md:text-xl uppercase tracking-wide mb-1 group-hover:text-[var(--p-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[10px] font-mono tracking-[0.15em] text-[var(--p-accent)]/50 uppercase mb-4">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-xs font-sans text-[var(--p-text-muted)] leading-relaxed mb-6 grow group-hover:text-[var(--p-text-muted)] transition-colors">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-mono uppercase tracking-[0.1em] bg-white/3 border border-white/8 text-[var(--p-text-muted)] px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-[var(--p-accent)] hover:text-[var(--p-text)] transition-colors"
                >
                  VISIT PROJECT
                  <ArrowUpRight className="size-3" />
                </a>
              )}

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-[var(--p-accent)]/20 border-r-transparent group-hover:border-t-[var(--p-accent)] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
