'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface PantherNavProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { href: '#manifesto', label: 'ABOUT' },
  { href: '#arsenal', label: 'STACK' },
  { href: '#timeline', label: 'TIMELINE' },
  { href: '#vault', label: 'WORK' },
  { href: '#contact', label: 'CONTACT' },
];

export default function PantherNav({ isDark, onToggleTheme }: PantherNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--p-bg)]/95 border-b-2 border-[var(--p-accent)] shadow-[0_4px_0_var(--p-shadow)] backdrop-blur-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border-2 border-[var(--p-accent)] bg-[var(--p-accent)] flex items-center justify-center shadow-[3px_3px_0_var(--p-invert-text)] group-hover:shadow-[5px_5px_0_var(--p-invert-text)] transition-all duration-200">
            <span className="text-[var(--p-invert-text)] font-black text-xs select-none" style={{ fontFamily: 'inherit' }}>P</span>
          </div>
          <span className="font-heading text-[var(--p-text)] text-lg tracking-wide uppercase group-hover:text-[var(--p-accent)] transition-colors duration-200">
            PANTHER
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-[0.2em] text-[var(--p-text-muted)] hover:text-[var(--p-accent)] hover:bg-[var(--p-accent-dim)] border border-transparent hover:border-[var(--p-border)] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 border-2 border-[var(--p-border)] bg-[var(--p-surface)] flex items-center justify-center hover:border-[var(--p-accent)] hover:bg-[var(--p-accent-dim)] hover:shadow-[3px_3px_0_var(--p-shadow)] hover:-translate-x-px hover:-translate-y-px transition-all duration-200"
          >
            {isDark
              ? <Sun size={14} style={{ color: 'var(--p-accent)' }} />
              : <Moon size={14} style={{ color: 'var(--p-accent)' }} />
            }
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 border border-[var(--p-border)] hover:border-[var(--p-accent)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-5 h-0.5 bg-[var(--p-accent)] block transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-[var(--p-accent)] block transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-[var(--p-accent)] block transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t-2 border-[var(--p-accent)] bg-[var(--p-bg)]/98">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-xs font-mono font-bold tracking-[0.2em] text-[var(--p-text-muted)] hover:text-[var(--p-accent)] hover:bg-[var(--p-accent-dim)] border-b border-[var(--p-border)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
