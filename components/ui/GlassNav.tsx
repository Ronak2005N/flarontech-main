'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#philosophy', label: 'Philosophy', hoverColor: 'hover:text-[#e62e2d]' },
  { href: '#tech', label: 'Stack', hoverColor: 'hover:text-[#e62e2d]' },
  { href: '#journey', label: 'Journey', hoverColor: 'hover:text-[#ffc107]' },
  { href: '#vault', label: 'Vault', hoverColor: 'hover:text-[#ffc107]' },
  { href: '#certifications', label: 'Certs', hoverColor: 'hover:text-[#ffc107]' },
  { href: '#ai-lab', label: 'Lab', hoverColor: 'hover:text-[#e62e2d]' },
  { href: '#contact', label: 'Contact', hoverColor: 'hover:text-[#ff5722]' },
];

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full ${scrolled ? 'backdrop-blur-xl bg-obsidian-900/70 border border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4 border border-transparent'
          }`}
      >
        <div className="px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/dragon logo vector1.svg"
              alt="The Dragon"
              width={40}
              height={40}
              className="w-10 h-10 drop-shadow-[0_0_8px_rgba(230,46,45,0.5)]"
            />
            <span className="font-heading text-xl tracking-wider text-white select-none">
              FLARON TECH
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-xs font-medium tracking-widest text-white/70 uppercase">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`relative transition-colors duration-300 ${link.hoverColor} ${activeSection === link.href.replace('#', '') ? 'text-white' : ''
                  }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e62e2d] shadow-[0_0_6px_rgba(230,46,45,0.8)]" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[60]"
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`text-2xl font-heading tracking-[0.15em] uppercase transition-all duration-300 ${activeSection === link.href.replace('#', '')
                    ? 'text-[#e62e2d]'
                    : 'text-white/60 hover:text-white'
                  }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Decorative line */}
          <div className={`mt-10 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#e62e2d]/50 to-transparent transition-all duration-700 ${menuOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <p className={`mt-4 text-[10px] font-mono text-white/20 tracking-widest uppercase transition-all duration-700 delay-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
            The Dragon Portfolio
          </p>
        </div>
      </div>
    </>
  );
}
