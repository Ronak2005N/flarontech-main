'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { icon: Mail,     label: 'EMAIL',    value: 'contact@flarontech.com',   href: 'mailto:contact@flarontech.com',          accent: 'var(--p-accent)' },
  { icon: Linkedin, label: 'LINKEDIN', value: '/in/thamilelelan',         href: 'https://linkedin.com/in/thamilelelan',   accent: '#0077B5' },
  { icon: Globe,    label: 'WEBSITE',  value: 'flarontech.com',           href: 'https://flarontech.com',                accent: 'var(--p-accent)' },
  { icon: Github,   label: 'GITHUB',   value: 'github.com/thamilelelan',  href: 'https://github.com/thamilelelan',       accent: 'var(--p-text)' },
];

export default function PantherContact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      const cards = gridRef.current?.querySelectorAll('.contact-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      }

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 88%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full border-t-2 overflow-hidden py-24 md:py-36"
      style={{ background: 'var(--p-bg)', borderColor: 'var(--p-border)' }}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--p-accent)]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-20 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-[var(--p-accent)] mb-3">GET IN TOUCH</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl uppercase tracking-wide" style={{ color: 'var(--p-text)' }}>
            LET&apos;S <span style={{ WebkitTextStroke: '2px var(--p-accent)', color: 'transparent' }}>BUILD</span>
          </h2>
          <p className="mt-5 text-sm font-sans max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--p-text-muted)' }}>
            Have a project that needs a full-stack engineer, a fast website, or a scalable system? Let’s talk.
          </p>
        </div>

        {/* Contact Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card group flex items-center gap-4 border-2 border-[var(--p-text-faint)] bg-[var(--p-surface)] p-5 hover:border-[var(--p-accent)] hover:shadow-[4px_4px_0_var(--p-shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 opacity-0"
              >
                <div
                  className="shrink-0 w-12 h-12 border-2 border-[var(--p-text-faint)] bg-white/3 flex items-center justify-center group-hover:border-[var(--p-accent)] group-hover:bg-[var(--p-accent-dim)] transition-all duration-200"
                  style={{ color: link.accent }}
                >
                  <Icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-[var(--p-text-subtle)] mb-1">{link.label}</p>
                  <p className="text-sm font-sans truncate transition-colors" style={{ color: 'var(--p-text-muted)' }}>
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="size-3.5 text-[var(--p-text-subtle)] group-hover:text-[var(--p-accent)] transition-colors shrink-0" />
              </a>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          ref={ctaRef}
          className="relative border-2 border-[var(--p-accent)] bg-[var(--p-surface)] p-8 md:p-12 shadow-[8px_8px_0_var(--p-shadow)] flex flex-col md:flex-row items-center justify-between gap-6 opacity-0"
        >
          {/* Left text */}
          <div>
            <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-[var(--p-accent)] mb-2">CURRENTLY OPEN TO</p>
            <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide" style={{ color: 'var(--p-text)' }}>
              Full Stack · APIs · Web
            </h3>
            <p className="mt-2 text-xs font-sans text-[var(--p-text-muted)]">
              Freelance work, design partnerships, and in-house roles — open to great projects.
            </p>
          </div>

          {/* Right CTA */}
          <a
            href="mailto:contact@flarontech.com"
            className="shrink-0 inline-flex items-center gap-2 bg-[var(--p-accent)] text-black font-mono font-black text-xs tracking-[0.2em] uppercase px-7 py-4 border-2 border-[var(--p-accent)] shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
          >
            START A PROJECT
            <ArrowUpRight className="size-4" />
          </a>

          {/* Status dot */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--p-accent)] animate-pulse" />
            <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-[var(--p-accent)]/50">AVAILABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
