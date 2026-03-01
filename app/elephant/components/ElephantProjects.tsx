'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Shield, Car, Heart, FileText, Gamepad2, MessageSquare } from 'lucide-react';
import { elephantClasses } from './elephant-theme';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  architecture: string;
  impact: string;
  techStack: string[];
  icon: React.ReactNode;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Missile Recognition System',
    description: 'Computer vision AI for defense-grade object recognition and tracking.',
    architecture: 'Multi-stage CNN pipeline with real-time inference optimization',
    impact: 'Defense Technology',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv8'],
    icon: <Shield size={28} />,
    category: 'AI/CV',
  },
  {
    title: 'Car Rental System',
    description: 'Enterprise-grade rental management with 55-page technical specification.',
    architecture: 'Microservices architecture with comprehensive API documentation',
    impact: 'Real-world Business Impact',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    icon: <Car size={28} />,
    category: 'Full Stack',
  },
  {
    title: 'Rehab360 AI',
    description: 'Healthcare ML platform for rehabilitation progress tracking and prediction.',
    architecture: 'End-to-end ML pipeline with data validation and model monitoring',
    impact: 'Healthcare Innovation',
    techStack: ['Python', 'Scikit-learn', 'Flask', 'React'],
    icon: <Heart size={28} />,
    category: 'Healthcare ML',
  },
  {
    title: 'Resume Analyzer',
    description: 'NLP-powered resume parsing and job matching recommendation engine.',
    architecture: 'Named Entity Recognition + Semantic similarity scoring',
    impact: 'Career Technology',
    techStack: ['Python', 'spaCy', 'BERT', 'FastAPI'],
    icon: <FileText size={28} />,
    category: 'NLP Pipeline',
  },
  {
    title: 'Kazhudha Multiplayer',
    description: 'Real-time multiplayer card game with WebSocket architecture.',
    architecture: 'Event-driven system with state synchronization and fault tolerance',
    impact: 'Gaming Scalability',
    techStack: ['Node.js', 'Socket.io', 'Redis', 'React'],
    icon: <Gamepad2 size={28} />,
    category: 'Gaming',
  },
  {
    title: 'AI Mock Interview Platform',
    description: 'LLM-powered interview simulator with real-time feedback and scoring.',
    architecture: 'Prompt engineering + RAG system for contextual questioning',
    impact: 'EdTech Innovation',
    techStack: ['OpenAI API', 'Next.js', 'TypeScript', 'Supabase'],
    icon: <MessageSquare size={28} />,
    category: 'LLM Integration',
  },
];

export default function ElephantProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Batch animation for project cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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
      className={`${elephantClasses.sectionPadding} bg-[#0a0a0a] relative overflow-hidden`}
    >
      <div className={elephantClasses.container}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Project <span className="text-[#d4af37]">Vault</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Systems designed for complexity, built for impact, and documented for scale.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`${elephantClasses.cardBase} ${elephantClasses.cardHover} p-6 group cursor-pointer relative overflow-hidden`}
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 text-xs font-semibold text-[#d4af37] uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                {project.category}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Note */}
              <div className="mb-4 pb-4 border-b border-[rgba(212,175,55,0.1)]">
                <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">
                  Architecture
                </p>
                <p className="text-sm text-[#e2e8f0]">{project.architecture}</p>
              </div>

              {/* Impact */}
              <div className="mb-4">
                <span className="inline-flex items-center text-xs font-medium text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-1 rounded">
                  {project.impact}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium text-[#94a3b8] bg-[#1a1a1a] px-2 py-1 rounded border border-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.3)] transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Link */}
              <div className="flex items-center text-[#d4af37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
                <ArrowUpRight size={16} className="ml-1" />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#64748b]">
            Each project documented with <span className="text-[#d4af37] font-semibold">architectural depth</span> and 
            <span className="text-[#d4af37] font-semibold"> strategic clarity</span>
          </p>
        </div>
      </div>
    </section>
  );
}
