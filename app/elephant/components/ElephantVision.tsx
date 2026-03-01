'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, TrendingUp, Shield, Zap } from 'lucide-react';
import { elephantClasses } from './elephant-theme';

gsap.registerPlugin(ScrollTrigger);

interface VisionPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const visionPillars: VisionPillar[] = [
  {
    icon: <Target size={32} />,
    title: 'High LPA Data Analyst',
    description: 'Positioning for top-tier data science roles through systematic skill mastery and strategic portfolio building.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'AI Product Builder',
    description: 'Creating production-grade AI systems that solve real-world problems with measurable business impact.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Financial Independence',
    description: 'Building sustainable wealth through strategic career moves and high-value project execution.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Tech + Strategy Integration',
    description: 'Combining technical excellence with business strategy to architect solutions that matter.',
  },
];

export default function ElephantVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote fade in from bottom
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Pillars stagger animation
      gsap.fromTo(
        pillarsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 20%',
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
      className={`${elephantClasses.sectionPadding} bg-[#0a0a0a] relative overflow-hidden`}
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37] opacity-[0.02] blur-[120px] rounded-full" />

      <div className={`${elephantClasses.container} relative z-10`}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Forward <span className="text-[#d4af37]">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Main Quote */}
        <div ref={quoteRef} className="mb-20">
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
              "Building the future isn't about{' '}
              <span className="text-[#d4af37] font-semibold">following trends</span>—
              it's about <span className="text-[#3b82f6] font-semibold">architecting systems</span>{' '}
              that define them."
            </p>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto" />
          </blockquote>
        </div>

        {/* Vision Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {visionPillars.map((pillar, index) => (
            <div
              key={index}
              ref={(el) => {
                pillarsRef.current[index] = el;
              }}
              className="flex items-start space-x-6 p-6 rounded-lg bg-[#1a1a1a] border border-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.3)] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37]/20 transition-all duration-300">
                {pillar.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-[#94a3b8] leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-6">
            My path is clear: combine deep technical expertise with strategic business thinking 
            to build AI systems that don't just work—they <span className="text-[#d4af37] font-semibold">transform industries</span>.
          </p>
          <p className="text-sm text-[#64748b] uppercase tracking-widest">
            The Elephant Never Forgets. <span className="text-[#d4af37]">The Vision Never Fades.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
