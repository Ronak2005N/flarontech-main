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

const ICON_SIZE = 40;

const logos = [
  { node: <SiPytorch size={ICON_SIZE} className="text-[#EE4C2C]" /> },
  { node: <SiTensorflow size={ICON_SIZE} className="text-[#FF6F00]" /> },
  { node: <SiPython size={ICON_SIZE} className="text-[#3776AB]" /> },
  { node: <SiTypescript size={ICON_SIZE} className="text-[#3178C6]" /> },
  { node: <SiNextdotjs size={ICON_SIZE} className="text-white" /> },
  { node: <SiDocker size={ICON_SIZE} className="text-[#2496ED]" /> },
  { node: <SiFastapi size={ICON_SIZE} className="text-[#009688]" /> },
  { node: <SiFlask size={ICON_SIZE} className="text-white" /> },
  { node: <SiGit size={ICON_SIZE} className="text-[#F05032]" /> },
  { node: <VscAzure size={ICON_SIZE} className="text-[#0078D4]" /> },
];

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
    icon: <img src="/images/icons8-forest-1500.png" alt="Forest" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'green',
    label: 'Ecosystem Building',
  },
  {
    icon: <img src="/images/icons8-leaf-240.svg" alt="Leaf" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'indigo',
    label: 'Growth & Learning',
  },
  {
    icon: <img src="/images/icons8-ai-code.png" alt="AI Code" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'purple',
    label: 'Code Intelligence',
  },
  {
    icon: <img src="/images/icons8-data-chart.png" alt="Data" className="w-10 h-10 object-contain drop-shadow-lg" />,
    color: 'blue',
    label: 'Data Science',
  },
];

export default function TechStack() {
  return (
    <div className="w-full flex flex-col items-center py-20 overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="mb-16 flex flex-col items-center text-center px-4">
        <h3 className="text-3xl md:text-5xl font-heading text-white">THE <span className="text-dragon-red">CORE</span></h3>
        <p className="mt-4 text-white/50 font-sans tracking-wide uppercase text-sm md:text-base">Foundational Frameworks & Mental Models</p>
      </div>

      {/* COMPONENT A: LogoLoop */}
      <div className="w-full max-w-7xl relative my-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian-900 to-transparent z-10"></div>
        <LogoLoop 
          logos={logos} 
          speed={100} 
          direction="left" 
          logoHeight={60} 
          gap={80} 
          fadeOut={false} // Handled by our absolute gradients above for cleaner integration with obsidian theme
          scaleOnHover={true} 
          className="opacity-80"
        />
      </div>

      {/* COMPONENT B: GlassIcons */}
      <div className="mt-24 w-full max-w-6xl px-8">
        <div className="mb-2 text-center">
          <h4 className="font-heading text-xl md:text-2xl text-dragon-yellow tracking-wide uppercase">Domain Pillars</h4>
          <p className="mt-2 text-white/40 font-sans text-sm tracking-widest uppercase">Six dimensions of mastery</p>
        </div>
        <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 md:p-10">
          <GlassIcons
            items={domainPillars}
            columns={6}
            className="justify-items-center"
          />
        </div>
      </div>

    </div>
  );
}