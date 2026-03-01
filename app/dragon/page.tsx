import React from 'react';
import DragonHero from '@/components/ui/DragonHero';
import GlassNav from '@/components/ui/GlassNav';
import ScrollReveal from '@/components/ScrollReveal';
import TechStack from '@/components/ui/TechStack';
import ExperienceJourney from '@/components/ui/ExperienceJourney';
import ProjectsVault from '@/components/ui/ProjectsVault';
import Certifications from '@/components/ui/Certifications';
import AILab from '@/components/ui/AILab';
import Contact from '@/components/ui/Contact';
import ForestHub from '@/components/ui/ForestHub';
import DragonFooter from '@/components/ui/DragonFooter';

export default function DragonPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#e62e2d] selection:text-white">
      <GlassNav />

      {/* SECTION 1: HERO */}
      <section id="hero">
        <DragonHero />
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section id="philosophy" className="min-h-screen flex items-center justify-center border-b border-white/5 bg-[#0a0a0c] px-6 py-24 md:py-32 relative overflow-hidden">
        {/* Decorative Grid Line Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="mb-12">
            <h2 className="font-heading text-[#e62e2d] text-xl md:text-2xl uppercase tracking-[0.3em] mb-4 flex items-center">
              <span className="w-12 h-[2px] bg-[#e62e2d] mr-4 inline-block"></span>
              The Core Philosophy
            </h2>
          </div>

          <ScrollReveal
            baseOpacity={0.15}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            textClassName="text-3xl md:text-5xl lg:text-7xl font-sans font-medium leading-[1.3] text-white/90"
          >
            AI amplifies my thinking. I amplify possibilities. I build with tools, not just learn them. With AI as my co-pilot, I master any domain on demand.
          </ScrollReveal>

          <div className="mt-20 flex flex-wrap gap-8 md:gap-12 border-t border-white/10 pt-10">
            <div className="flex flex-col">
              <span className="text-4xl font-heading text-white">17+</span>
              <span className="text-sm font-sans tracking-widest uppercase text-white/50 mt-2">Projects Shipped</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-heading text-[#ffc107]">9.63</span>
              <span className="text-sm font-sans tracking-widest uppercase text-white/50 mt-2">Dual Degree CGPA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-heading text-[#e62e2d]">0 → 1</span>
              <span className="text-sm font-sans tracking-widest uppercase text-white/50 mt-2">Startup Builder</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TECH STACK */}
      <section id="tech" className="relative z-10 border-t border-white/5 bg-[#0a0a0c]">
        <TechStack />
      </section>

      {/* SECTION 4: EXPERIENCE */}
      <section id="journey" className="relative z-10">
        <ExperienceJourney />
      </section>

      {/* SECTION 5: PROJECTS VAULT */}
      <section id="vault-section" className="relative z-10">
        <ProjectsVault />
      </section>

      {/* SECTION 6: CERTIFICATIONS & AWARDS */}
      <section id="certs-section" className="relative z-10">
        <Certifications />
      </section>

      {/* SECTION 7: AI LABORATORY */}
      <section id="lab-section" className="relative z-10">
        <AILab />
      </section>

      {/* SECTION 8: CONTACT */}
      <section id="contact-section" className="relative z-10">
        <Contact />
      </section>

      {/* FUTURE FOREST HUB */}
      <ForestHub />

      {/* FOOTER */}
      <DragonFooter />
    </main>
  );
}
