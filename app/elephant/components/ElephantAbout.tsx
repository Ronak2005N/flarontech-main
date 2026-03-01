'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { elephantClasses } from './elephant-theme';

gsap.registerPlugin(ScrollTrigger);

export default function ElephantAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in content from bottom
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Fade in visual element
      gsap.fromTo(
        visualRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${elephantClasses.sectionPadding} bg-[#0a0a0a] relative`}
    >
      <div className={elephantClasses.container}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The <span className="text-[#d4af37]">Architect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              I don't just write code—I <span className="text-[#d4af37] font-semibold">architect systems</span>. 
              Every project begins with a blueprint, every feature starts with a strategic question: 
              How will this scale? How will this integrate? How will this serve the larger vision?
            </p>

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              My expertise spans <span className="text-[#3b82f6] font-semibold">AI pipeline design</span>, 
              full-stack development, and strategic documentation. I've built missile recognition systems, 
              healthcare AI platforms, and enterprise-grade applications—each one designed with 
              <span className="text-[#d4af37] font-semibold"> system-level thinking</span> at its core.
            </p>

            <p className="text-lg text-[#e2e8f0] leading-relaxed">
              What sets me apart? I treat documentation like architecture. I've written{' '}
              <span className="text-[#d4af37] font-semibold">60+ page technical specifications</span> 
              —not because I have to, but because I understand that great systems need great foundations.
            </p>

            <div className="pt-6 border-t border-[rgba(212,175,55,0.2)]">
              <h3 className="text-xl font-semibold text-white mb-4">Core Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">▸</span>
                  <span className="text-[#94a3b8]">Think in systems, not features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">▸</span>
                  <span className="text-[#94a3b8]">Document for the future, not just today</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">▸</span>
                  <span className="text-[#94a3b8]">Build for scale from day one</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">▸</span>
                  <span className="text-[#94a3b8]">Strategy first, execution second</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Element */}
          <div ref={visualRef} className="relative">
            <div className={`${elephantClasses.cardBase} p-8 lg:p-12 relative overflow-hidden`}>
              {/* Decorative Grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Development <span className="text-[#d4af37]">Mindset</span>
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wide">
                        Prompt Engineer
                      </span>
                      <span className="text-sm text-[#94a3b8]">Expert</span>
                    </div>
                    <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-[#d4af37] to-[#DAA520]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[#3b82f6] uppercase tracking-wide">
                        AI/ML Integration
                      </span>
                      <span className="text-sm text-[#94a3b8]">Advanced</span>
                    </div>
                    <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wide">
                        Strategic Documentation
                      </span>
                      <span className="text-sm text-[#94a3b8]">Expert</span>
                    </div>
                    <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-gradient-to-r from-[#d4af37] to-[#DAA520]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[#64748b] uppercase tracking-wide">
                        Full-Stack Development
                      </span>
                      <span className="text-sm text-[#94a3b8]">Proficient</span>
                    </div>
                    <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-gradient-to-r from-[#64748b] to-[#94a3b8]" />
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[rgba(212,175,55,0.2)]">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d4af37]">5+</div>
                    <div className="text-xs text-[#64748b] uppercase tracking-wider mt-1">
                      AI Systems
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#3b82f6]">10+</div>
                    <div className="text-xs text-[#64748b] uppercase tracking-wider mt-1">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d4af37]">60+</div>
                    <div className="text-xs text-[#64748b] uppercase tracking-wider mt-1">
                      Page Docs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
