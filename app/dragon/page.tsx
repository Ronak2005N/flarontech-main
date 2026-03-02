import React from 'react';
import DragonHero from '@/components/ui/DragonHero';
import DragonPhilosophy from '@/components/ui/DragonPhilosophy';
import GlassNav from '@/components/ui/GlassNav';
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
      <DragonPhilosophy />

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
