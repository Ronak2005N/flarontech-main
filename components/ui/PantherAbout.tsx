'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MANIFESTO_TEXT =
  'I build full-stack systems — from database schema to deployed product. Clean APIs, tight frontends, and the invisible architecture that makes software feel fast. Design matters to me deeply, but what I build is what lasts.';

const VALUES = [
  { label: 'SYSTEMS', body: 'Architecture decisions echo through every future feature you build.' },
  { label: 'SPEED', body: 'Performance is a feature. Fast to build, fast to run, fast to ship.' },
  { label: 'CRAFT', body: 'Code you are not ashamed of in a year is code worth writing today.' },
  { label: 'SHIP', body: 'Working software beats perfect planning. Deploy, learn, improve.' },
];

export default function PantherAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef   = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-scrub word reveal
      const words = wordsRef.current?.querySelectorAll('.m-word');
      if (words?.length) {
        gsap.fromTo(words,
          { opacity: 0.08, filter: 'blur(5px)' },
          { opacity: 1, filter: 'blur(0px)', stagger: 0.035, ease: 'none',
            scrollTrigger: { trigger: wordsRef.current, start: 'top 75%', end: 'bottom 35%', scrub: 0.7 } }
        );
      }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 88%', toggleActions: 'play none none reverse' } }
      );

      const cards = cardsRef.current?.querySelectorAll('.v-card');
      if (cards?.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full border-t-2 overflow-hidden py-28 md:py-44"
      style={{ background: 'var(--p-bg)', borderColor: 'var(--p-border)' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-16">

        {/* Label */}
        <div ref={headerRef} className="mb-10 opacity-0">
          <span className="text-[10px] font-mono tracking-[0.45em] uppercase" style={{ color: 'var(--p-accent)', opacity: 0.7 }}>ABOUT ME</span>
        </div>

        {/* Manifesto — scrub reveal */}
        <div
          ref={wordsRef}
          className="mb-24 text-2xl md:text-4xl lg:text-[2.75rem] font-sans font-medium leading-[1.5]"
          style={{ color: 'var(--p-text)' }}
        >
          {MANIFESTO_TEXT.split(' ').map((word, i) => (
            <span key={i} className="m-word inline-block mr-[0.28em] opacity-10">{word}</span>
          ))}
        </div>

        {/* Value strip */}
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'var(--p-border)' }}>
          {VALUES.map((v) => (
            <div
              key={v.label}
              className="v-card p-7 group transition-colors duration-200 opacity-0"
              style={{ background: 'var(--p-bg)' }}
            >
              <p className="font-heading text-sm tracking-[0.2em] mb-3 transition-colors" style={{ color: 'var(--p-accent)' }}>
                {v.label}
              </p>
              <p className="text-[11px] font-sans leading-relaxed transition-colors" style={{ color: 'var(--p-text-muted)' }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
