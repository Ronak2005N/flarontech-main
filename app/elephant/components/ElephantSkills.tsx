'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Globe, FlaskConical } from 'lucide-react';
import { elephantClasses } from './elephant-theme';

gsap.registerPlugin(ScrollTrigger);

interface SkillBlock {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillBlocks: SkillBlock[] = [
  {
    title: 'Programming',
    icon: <Code size={32} />,
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript',],
    color: '#d4af37',
  },
  {
    title: 'Data & AI',
    icon: <Database size={32} />,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'SQL', 'LLM APIs'],
    color: '#3b82f6',
  },
  {
    title: 'Web Systems',
    icon: <Globe size={32} />,
    skills: ['Next.js', 'React', 'Node.js', 'Tailwind', 'GraphQL'],
    color: '#d4af37',
  },
  {
    title: 'Research Engineering',
    icon: <FlaskConical size={32} />,
    skills: ['Jupyter', 'Git', 'Docker', 'Research Docs', 'Data Pipelines', 'Testing'],
    color: '#64748b',
  },
];

export default function ElephantSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
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
      className={`${elephantClasses.sectionPadding} bg-[#0f0f0f] relative`}
    >
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className={`${elephantClasses.container} relative z-10`}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Technical <span className="text-[#d4af37]">Blueprint</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            A structured foundation built on system-level mastery and strategic execution.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillBlocks.map((block, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`${elephantClasses.cardBase} ${elephantClasses.cardHover} p-8 group`}
            >
              {/* Icon & Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${block.color}15`,
                    color: block.color,
                  }}
                >
                  {block.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{block.title}</h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-3">
                {block.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-[#94a3b8] group-hover:text-white transition-colors duration-300"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: block.color }}
                    />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Blueprint Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="100" y1="0" x2="100" y2="100" stroke={block.color} strokeWidth="2" />
                  <line x1="0" y1="0" x2="100" y2="0" stroke={block.color} strokeWidth="2" />
                  <circle cx="90" cy="10" r="3" fill={block.color} />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#64748b] uppercase tracking-widest">
            Engineered for <span className="text-[#d4af37]">Scale & Precision</span>
          </p>
        </div>
      </div>
    </section>
  );
}
