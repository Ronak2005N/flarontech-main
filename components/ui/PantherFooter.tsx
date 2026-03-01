"use client";
import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const NAV_LINKS = [
  { href: '#hero',      label: 'Home'      },
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#arsenal',   label: 'Stack'     },
  { href: '#timeline',  label: 'Journey'   },
  { href: '#vault',     label: 'Vault'     },
  { href: '#contact',   label: 'Contact'   },
];

const SOCIALS = [
  { href: 'https://github.com/thamilelelan',             icon: Github,   label: 'GitHub'   },
  { href: 'https://linkedin.com/in/thamilelelan',        icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:contact@flarontech.com',               icon: Mail,     label: 'Email'    },
  { href: 'https://flarontech.com',                      icon: Globe,    label: 'Website'  },
];

export default function PantherFooter() {
  return (
    <footer
      className="relative w-full border-t-2 overflow-hidden"
      style={{ background: 'var(--p-bg)', borderColor: 'var(--p-accent)' }}
    >
      {/* Top accent gradient bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: 'linear-gradient(90deg, transparent, var(--p-accent), transparent)', opacity: 0.5 }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-8">

        {/* ── Big Text + Forest Image row ── */}
        <div
          className="flex flex-col lg:flex-row items-stretch gap-0 mb-16 border-2 overflow-hidden"
          style={{ borderColor: 'var(--p-border)', boxShadow: '6px 6px 0 var(--p-shadow)' }}
        >
          {/* Forest image — left */}
          <div className="w-full lg:w-5/12 relative min-h-[200px] md:min-h-[280px] lg:min-h-[360px]">
            <img
              src="/images/vivid-forest-background.png"
              alt="Vivid Forest"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Fade into bg */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent 40%, var(--p-surface))' }}
            />
          </div>

          {/* Big name — right */}
          <div
            className="w-full lg:w-7/12 flex flex-col items-center lg:items-end justify-center p-8 md:p-12 lg:p-16"
            style={{ background: 'var(--p-surface)' }}
          >
            <h2
              className="font-heading leading-[0.88] tracking-tight text-right select-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
            >
              <span style={{ color: 'var(--p-text)' }} className="block">FLARON</span>
              <span style={{ color: 'var(--p-accent)' }} className="block">TECH</span>
            </h2>
            <p
              className="mt-4 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-right"
              style={{ color: 'var(--p-text-faint)' }}
            >
              Designed with obsession. Crafted with care.
            </p>
          </div>
        </div>

        {/* ── Links + Social row ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t pt-8"
          style={{ borderColor: 'var(--p-border)' }}
        >
          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-mono tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--p-text-subtle)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--p-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--p-text-subtle)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="p-2 border transition-all duration-200"
                style={{ color: 'var(--p-text-subtle)', borderColor: 'var(--p-border)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--p-accent)';
                  e.currentTarget.style.borderColor = 'var(--p-accent)';
                  e.currentTarget.style.boxShadow = '2px 2px 0 var(--p-shadow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--p-text-subtle)';
                  e.currentTarget.style.borderColor = 'var(--p-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={label}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[9px] font-mono tracking-[0.2em] uppercase" style={{ color: 'var(--p-text-faint)' }}>
            Built with Next.js · GSAP · Three.js · Tailwind CSS
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--p-accent)' }} />
            <p className="text-[9px] font-mono tracking-[0.2em] uppercase" style={{ color: 'var(--p-text-faint)' }}>
              © 2026 Flarontech · Crafted by Panther
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
