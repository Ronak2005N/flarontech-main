"use client";
import React from 'react';
import { Cpu, Lightbulb, Rocket, Target, Wrench, GraduationCap, Bot, Layers } from 'lucide-react';

const capabilities = [
  {
    icon: <Target className="size-5" />,
    title: 'Research-First Problem Analysis',
    desc: 'Understanding before building. Every project starts with deep analysis.',
    color: '#e62e2d',
  },
  {
    icon: <Layers className="size-5" />,
    title: 'Any Stack, Any Domain',
    desc: 'Web, mobile, AI, desktop — whatever the solution demands.',
    color: '#ffc107',
  },
  {
    icon: <GraduationCap className="size-5" />,
    title: 'Self-Taught Builder',
    desc: 'Everything learned independently. Driven by curiosity and execution.',
    color: '#10b981',
  },
  {
    icon: <Bot className="size-5" />,
    title: 'AI-Assisted Development',
    desc: '10x faster with intelligent tools. AI amplifies, never replaces thinking.',
    color: '#a855f7',
  },
];

const domains = [
  { label: 'AI/ML Engineering', sub: 'CNN-ViT, LoRA, Transformers' },
  { label: 'Full Stack Development', sub: 'Next.js, FastAPI, Docker' },
  { label: 'Prompt Architecture', sub: 'System design for LLMs' },
  { label: 'Computer Vision', sub: 'MTCNN, Recognition, OCR' },
  { label: 'Data Science', sub: 'Statistical Analysis, Pandas' },
  { label: 'MLOps & DevOps', sub: 'CI/CD, Docker, Azure' },
  { label: 'NLP & Conversational AI', sub: 'Whisper, RAG, Agents' },
  { label: 'Product Building', sub: 'Zero to One, 17+ projects' },
];

export default function AILab() {
  return (
    <section id="ai-lab" className="relative w-full bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-sans mb-3">the laboratory</p>
        <h3 className="text-3xl md:text-5xl font-heading text-white">
          AI <span className="text-[#e62e2d]">GENERALIST</span>
        </h3>
        <p className="mt-4 text-white/40 font-sans text-sm tracking-wide max-w-2xl">
          AI amplifies my thinking. I amplify possibilities. With AI as co-pilot, I master any domain on demand.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {/* Video Banner with Glass Carousel */}
        <div className="w-full h-[200px] md:h-[300px] rounded-3xl overflow-hidden border border-white/10 mb-16 relative shadow-[0_0_60px_rgba(0,0,0,0.4)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/glass-carousel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/80 via-transparent to-[#0a0a0c]/80 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-5xl text-white drop-shadow-lg">BUILDER OF ANYTHING</p>
              <p className="text-sm md:text-base text-white/60 font-sans mt-2 drop-shadow-md">Where prompt architecture meets real-world execution</p>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/5 bg-[#121318] p-6 transition-all duration-500 hover:border-white/15 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/8 p-3" style={{ color: cap.color }}>
                {cap.icon}
              </div>
              <h5 className="font-heading text-sm text-white mb-2">{cap.title}</h5>
              <p className="text-[11px] text-white/45 font-sans leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Domains of Expertise */}
        <div className="rounded-2xl border border-white/5 bg-[#121318]/50 backdrop-blur-sm p-6 md:p-10">
          <h4 className="font-heading text-xl md:text-2xl text-white mb-8 text-center">
            <Cpu className="size-5 inline mr-2 text-[#e62e2d]" />
            Domains of Mastery
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domains.map((domain, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
              >
                <span className="text-[9px] font-mono text-white/20 mb-1">{String(i + 1).padStart(2, '0')}</span>
                <h6 className="text-sm font-heading text-white mb-1">{domain.label}</h6>
                <p className="text-[10px] font-sans text-white/35">{domain.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-heading text-white">17+</span>
            <span className="text-[10px] font-sans tracking-widest uppercase text-white/40 mt-1">Projects Built</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-heading text-[#ffc107]">3</span>
            <span className="text-[10px] font-sans tracking-widest uppercase text-white/40 mt-1">AI Platforms</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-heading text-[#e62e2d]">8+</span>
            <span className="text-[10px] font-sans tracking-widest uppercase text-white/40 mt-1">Certifications</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-heading text-[#10b981]">0 → 1</span>
            <span className="text-[10px] font-sans tracking-widest uppercase text-white/40 mt-1">Startup Builder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
