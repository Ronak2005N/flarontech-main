import React from 'react';
import LogoLoop from '@/components/LogoLoop';
import GlassIcons, { GlassIconsItem } from '@/components/GlassIcons';
import {
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiFastapi,
  SiNextdotjs,
  SiPython,
  SiTypescript,
  SiGit,
  SiFlask
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const ICON_SIZE = 48;

/* ── Logo items with LABELS underneath each icon ── */
const logos = [
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiPytorch size={ICON_SIZE} className="text-[#EE4C2C]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">PyTorch</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiTensorflow size={ICON_SIZE} className="text-[#FF6F00]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">TensorFlow</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiPython size={ICON_SIZE} className="text-[#3776AB]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">Python</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiTypescript size={ICON_SIZE} className="text-[#3178C6]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">TypeScript</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiNextdotjs size={ICON_SIZE} className="text-white" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">Next.js</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiDocker size={ICON_SIZE} className="text-[#2496ED]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">Docker</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiFastapi size={ICON_SIZE} className="text-[#009688]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">FastAPI</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiFlask size={ICON_SIZE} className="text-white" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">Flask</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <SiGit size={ICON_SIZE} className="text-[#F05032]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">Git</span>
      </div>
    )
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2">
        <VscAzure size={ICON_SIZE} className="text-[#0078D4]" />
        <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">Azure</span>
      </div>
    )
  },
];

/* ── Domain pillars with DESCRIPTIONS ── */
const domainPillars: GlassIconsItem[] = [
  {
    icon: <img src="/images/icons8-fire-120.svg" alt="Fire" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'red',
    label: 'AI/ML Engineering',
  },
  {
    icon: <img src="/images/icons8-flash-on-240.png" alt="Flash" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'orange',
    label: 'Execution Speed',
  },
  {
    icon: <img src="/images/icons8-forest-1500.webp" alt="Forest" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'green',
    label: 'Ecosystem Building',
  },
  {
    icon: <img src="/images/icons8-leaf-240.svg" alt="Leaf" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'indigo',
    label: 'Growth & Learning',
  },
  {
    icon: <img src="/images/icons8-ai-code.webp" alt="AI Code" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'purple',
    label: 'Code Intelligence',
  },
  {
    icon: <img src="/images/icons8-data-chart.webp" alt="Data" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'blue',
    label: 'Data Science',
  },
];

/* ── Domain descriptions (below pillar cards) ── */
const domainDescriptions: Record<string, string> = {
  'AI/ML Engineering': 'PyTorch, TensorFlow, OpenCV — building & deploying intelligent systems',
  'Execution Speed': 'Ship fast, iterate faster — prototypes in days, not months',
  'Ecosystem Building': 'Creating tools, teams, and platforms that compound over time',
  'Growth & Learning': 'Mastering new domains on demand with AI as a force multiplier',
  'Code Intelligence': 'AI-augmented coding, automated pipelines, and smart tooling',
  'Data Science': 'Pandas, NumPy, SQL — turning raw data into actionable insights',
};

export default function TechStack() {
  return (
    <div className="w-full flex flex-col items-center py-20 overflow-hidden">

      {/* SECTION HEADER — cohesive narrative */}
      <div className="mb-6 flex flex-col items-center text-center px-4">
        <span className="text-xs font-mono tracking-[0.5em] uppercase text-white/40 block mb-4">
          Arsenal / 03
        </span>
        <h3 className="text-3xl md:text-5xl font-heading text-white">THE <span className="text-dragon-red">CORE</span></h3>
        <p className="mt-4 text-white/50 font-sans tracking-wide uppercase text-sm md:text-base">
          Technologies I ship with & domains I operate in
        </p>
      </div>

      {/* COMPONENT A: LogoLoop — Tech Arsenal */}
      <div className="w-full max-w-7xl relative my-8">
        <div className="mb-6 text-center">
          <h4 className="font-heading text-lg md:text-xl text-white/80 tracking-wide uppercase">
            The <span className="text-dragon-red">Stack</span>
          </h4>
          <p className="mt-1 text-white/35 font-sans text-xs tracking-widest uppercase">
            Tools in my daily workflow
          </p>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian-900 to-transparent z-10"></div>
        <LogoLoop
          logos={logos}
          speed={80}
          direction="left"
          logoHeight={80}
          gap={100}
          fadeOut={false}
          scaleOnHover={true}
          className="opacity-90"
        />
      </div>

      {/* Connecting line between sections */}
      <div className="w-[1px] h-16 bg-gradient-to-b from-white/10 to-white/5 my-4" />

      {/* COMPONENT B: GlassIcons — Domains of Mastery */}
      <div className="mt-8 w-full max-w-6xl px-8">
        <div className="mb-2 text-center">
          <h4 className="font-heading text-lg md:text-xl text-dragon-yellow tracking-wide uppercase">
            Domains of <span className="text-white">Mastery</span>
          </h4>
          <p className="mt-1 text-white/35 font-sans text-xs tracking-widest uppercase">
            Six pillars that drive every project I build
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 md:p-10">
          <GlassIcons
            items={domainPillars}
            columns={6}
            className="justify-items-center"
          />

          {/* Domain descriptions grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
            {domainPillars.map((pillar, i) => (
              <div key={i} className="text-center px-2">
                <span className="text-[11px] font-heading text-white/60 block mb-1">{pillar.label}</span>
                <span className="text-[10px] font-sans text-white/30 leading-relaxed">
                  {domainDescriptions[pillar.label]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}