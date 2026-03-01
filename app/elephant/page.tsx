'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import ElephantNav from './components/ElephantNav';
import ElephantHero from './components/ElephantHero';
import ElephantAbout from './components/ElephantAbout';
import ElephantSkills from './components/ElephantSkills';
import ElephantProjects from './components/ElephantProjects';
import ElephantImpact from './components/ElephantImpact';
import ElephantVision from './components/ElephantVision';
import ElephantFooter from './components/ElephantFooter';

export default function ElephantPage() {
  // Initialize smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <ElephantNav />
      <ElephantHero />
      <section id="about">
        <ElephantAbout />
      </section>
      <section id="skills">
        <ElephantSkills />
      </section>
      <section id="projects">
        <ElephantProjects />
      </section>
      <section id="impact">
        <ElephantImpact />
      </section>
      <section id="vision">
        <ElephantVision />
      </section>
      <ElephantFooter />
    </main>
  );
}
