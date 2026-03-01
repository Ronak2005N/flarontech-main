'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { elephantClasses } from './elephant-theme';

gsap.registerPlugin(ScrollTrigger);

interface Metric {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  color: string;
}

const metrics: Metric[] = [
  {
    value: 18,
    prefix: '₹',
    suffix: 'K+',
    label: 'Project Revenue Generated',
    color: '#d4af37',
  },
  {
    value: 5,
    suffix: '+',
    label: 'AI Systems Built',
    color: '#3b82f6',
  },
  {
    value: 60,
    suffix: '+',
    label: 'Pages Technical Documentation',
    color: '#d4af37',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Research Projects Completed',
    color: '#64748b',
  },
];

export default function ElephantImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Trigger counter animations when section enters viewport
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        onEnter: () => {
          if (!animated) {
            animateCounters();
            setAnimated(true);
          }
        },
      });
    });

    return () => ctx.revert();
  }, [animated]);

  const animateCounters = () => {
    counterRefs.current.forEach((counter, index) => {
      if (counter) {
        const metric = metrics[index];
        const obj = { value: 0 };

        gsap.to(obj, {
          value: metric.value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            if (counter) {
              const formattedValue = Math.floor(obj.value).toLocaleString();
              counter.textContent = `${metric.prefix || ''}${formattedValue}${metric.suffix}`;
            }
          },
        });
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`${elephantClasses.sectionPadding} bg-[#0f0f0f] relative`}
    >
      <div className={elephantClasses.container}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Measured <span className="text-[#d4af37]">Impact</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Results that speak louder than code. Execution backed by evidence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-[#1a1a1a] border border-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.3)] transition-all duration-300 group"
            >
              {/* Counter */}
              <div className="mb-4">
                <span
                  ref={(el) => {
                    counterRefs.current[index] = el;
                  }}
                  className="text-5xl md:text-6xl font-bold tracking-tight"
                  style={{ color: metric.color }}
                >
                  {metric.prefix || ''}{metric.value}{metric.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-sm text-[#94a3b8] uppercase tracking-wide leading-tight group-hover:text-white transition-colors duration-300">
                {metric.label}
              </p>

              {/* Decorative Line */}
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Every metric represents a <span className="text-[#d4af37] font-semibold">strategic decision</span>,
            a <span className="text-[#3b82f6] font-semibold">system designed</span>, 
            and a <span className="text-[#d4af37] font-semibold">vision executed</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
