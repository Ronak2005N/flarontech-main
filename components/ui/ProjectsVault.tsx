"use client";
import React from 'react';
import { ExternalLink, Code, Brain, Globe, Shield, Zap, Music, Sparkles, Gamepad2, Eye } from 'lucide-react';

interface ProjectCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  accent: string;
  glowColor: string;
}

const projects: ProjectCard[] = [
  {
    icon: <Brain className="size-5 text-[#e62e2d]" />,
    title: 'Imitate Labs MVP',
    description: 'Full-stack Creator Style Replication AI -CNN-ViT + LoRA. From zero to production.',
    tags: ['PyTorch', 'FastAPI', 'Next.js', 'Docker'],
    link: 'https://www.imitatelabs.ai',
    accent: 'border-[#e62e2d]/30 hover:border-[#e62e2d]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(230,46,45,0.15)]',
  },
  {
    icon: <Shield className="size-5 text-[#10b981]" />,
    title: 'CertiProof',
    description: 'Blockchain-powered certificate issuance & verification. Tamper-proof credentialing.',
    tags: ['TypeScript', 'Blockchain', 'Vercel'],
    link: 'https://certiproof-eta.vercel.app',
    accent: 'border-[#10b981]/30 hover:border-[#10b981]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]',
  },
  {
    icon: <Eye className="size-5 text-[#3b82f6]" />,
    title: 'Trustify',
    description: 'Chrome extension for detecting fake news & verifying facts in real-time.',
    tags: ['JavaScript', 'Chrome API', 'NLP'],
    accent: 'border-[#3b82f6]/30 hover:border-[#3b82f6]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]',
  },
  {
    icon: <Music className="size-5 text-[#a855f7]" />,
    title: 'Turnear Studio',
    description: 'AI-powered music mixing & mastering SaaS. Full-stack audio processing platform.',
    tags: ['TypeScript', 'AI Audio', 'SaaS'],
    accent: 'border-[#a855f7]/30 hover:border-[#a855f7]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]',
  },
  {
    icon: <Sparkles className="size-5 text-[#ffc107]" />,
    title: 'QritiQ',
    description: 'University-funded AI self-intro evaluator. Whisper + LLM pipeline, 95% accuracy.',
    tags: ['Python', 'Whisper', 'Ollama', 'FastAPI'],
    accent: 'border-[#ffc107]/30 hover:border-[#ffc107]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(255,193,7,0.15)]',
  },
  {
    icon: <Gamepad2 className="size-5 text-[#f97316]" />,
    title: 'AI Unfiltered',
    description: 'College tech event game -prompt guardrails, human vs AI, GenAI evaluation.',
    tags: ['TypeScript', 'Prompt Eng', 'GenAI'],
    link: 'https://ai-unfiltered-five.vercel.app',
    accent: 'border-[#f97316]/30 hover:border-[#f97316]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]',
  },
  {
    icon: <Zap className="size-5 text-[#06b6d4]" />,
    title: 'Faah Extension',
    description: 'VS Code extension that plays a dramatic sound when terminal commands fail.',
    tags: ['TypeScript', 'VS Code API'],
    link: 'https://marketplace.visualstudio.com/items?itemName=LokeshKumarAR.faah-terminal-sound',
    accent: 'border-[#06b6d4]/30 hover:border-[#06b6d4]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]',
  },
  {
    icon: <Globe className="size-5 text-[#ec4899]" />,
    title: 'IL Internal OS',
    description: 'Web-based OS-style dashboard for Imitate Labs internal workflows & tools.',
    tags: ['TypeScript', 'Next.js', 'Vercel'],
    link: 'https://il-internal-os.vercel.app',
    accent: 'border-[#ec4899]/30 hover:border-[#ec4899]/70',
    glowColor: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]',
  },
];

export default function ProjectsVault() {
  return (
    <section id="vault" className="relative w-full bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-sans mb-3">the vault</p>
        <h3 className="text-3xl md:text-5xl font-heading text-white">
          PROJECTS &amp; <span className="text-[#ffc107]">BUILDS</span>
        </h3>
        <p className="mt-4 text-white/40 font-sans text-sm tracking-wide max-w-xl">
          17+ shipped products. From AI platforms to Chrome extensions -everything built to solve.
        </p>
      </div>

      {/* Desktop: Cards left + Video right */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto px-8 pb-20 gap-12 items-start">
        {/* Left: Project Cards Grid */}
        <div className="w-7/12 grid grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative flex flex-col justify-between rounded-2xl border bg-[#121318]/90 backdrop-blur-sm p-5 transition-all duration-500 cursor-default ${project.accent} ${project.glowColor} hover:-translate-y-3 hover:z-50`}
            >
              {/* Icon + Title */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2">
                      {project.icon}
                    </span>
                    <h4 className="text-base font-heading text-white tracking-wide">{project.title}</h4>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink className="size-3.5 text-white/50" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-white/50 font-sans leading-relaxed mb-4">{project.description}</p>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-mono uppercase bg-white/5 border border-white/8 text-white/60 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Sticky Video */}
        <div className="w-5/12 sticky top-24 h-[75vh] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/curved-labyrinth.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/70 via-transparent to-[#0a0a0c]/30 pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8">
            <h4 className="font-heading text-2xl text-white mb-2 drop-shadow-md">Problem Solving</h4>
            <p className="font-sans text-sm text-white/70 drop-shadow-lg">Every project is a labyrinth navigated with precision and purpose.</p>
          </div>
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden w-full px-4 md:px-8 pb-16">
        {/* Video banner */}
        <div className="w-full h-[45vw] min-h-[180px] max-h-[280px] rounded-2xl overflow-hidden border border-white/10 mb-8 relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/curved-labyrinth.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative flex flex-col justify-between rounded-xl border bg-[#121318]/90 p-4 transition-all duration-500 ${project.accent} ${project.glowColor} active:-translate-y-1`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2">
                    {project.icon}
                  </span>
                  <h4 className="text-sm font-heading text-white tracking-wide">{project.title}</h4>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto p-1">
                      <ExternalLink className="size-3.5 text-white/40" />
                    </a>
                  )}
                </div>
                <p className="text-[11px] text-white/45 font-sans leading-relaxed mb-3">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[7px] font-mono uppercase bg-white/5 text-white/50 px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
